import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { BluetoothDevice, BluetoothState } from '../shared/interfaces';

@Injectable()
export class BluetoothService {
  private _bluetoothStateSource = new BehaviorSubject<BluetoothState>({ state: 0, title: 'Off', icon: '',});
  private _bluetoothDevicesSource = new BehaviorSubject<BluetoothDevice[]>([]);

  public state$ = this._bluetoothStateSource.asObservable();
  public devices$ = this._bluetoothDevicesSource.asObservable();

  private isConnecting: boolean = false;

  private _devices: BluetoothDevice[] = [
    {id: 1, name: 'BlueBuds X', type: 'headphones', connecting: false, connected: false},
    {id: 2, name: 'Toyota Corolla', type: 'car', connecting: false, connected: false},
    {id: 3, name: 'HP Keyboard', type: 'keyboard', connecting: false, connected: false}
  ];

  private resetDevices() {
    this._devices.forEach((device: BluetoothDevice) => {
      device.connecting = false;
      device.connected = false;
    });

    // this.setState(1);
  }

  public connectToDevice(id: number) {
    if (this.isConnecting) {
      return;
    }

    this.resetDevices();
    this.setState(2);

    let index = this._devices.findIndex(a => a.id == id);
    this._devices[index].connecting = true;
    this._bluetoothDevicesSource.next(this._devices);
    this.setState(3);

    this.isConnecting = true;
    setTimeout(() => {
      this._devices[index].connecting = false;
      this._devices[index].connected = true;

      this._bluetoothDevicesSource.next(this._devices);
      this.setState(4);
    }, 3000);
  }

  public turnOn() {
    this.setState(1);

    setTimeout(() => {
      this.setState(2);
      this._bluetoothDevicesSource.next(this._devices);
    }, 3000);
  }

  public turnOff() {
    this.resetDevices();
    this._bluetoothDevicesSource.next([]);
    this.setState(0);
  }

  public getState() {
    return this._bluetoothStateSource.getValue();
  }

  public setState(state: number) {
    let stateData: BluetoothState;

    switch (state) {
      case 0:
        stateData = { state: 0, title: 'Off', icon: '',};
        break;
      case 1:
        stateData = { state: 1, title: 'Off', icon: ''};
        break;
      case 2:
        stateData = { state: 2, title: 'On', icon: 'bluetooth-on.png'};
        break;
      case 3:
        stateData = { state: 3, title: 'Connecting', icon: 'bluetooth-connecting.png'};
        break;
      case 4:
        stateData = { state: 4, title: 'Connected', icon: 'bluetooth-connected.png'};
        this.isConnecting = false;
        break;
      case 5:
        stateData = { state: 5, title: 'Error', icon: 'bluetooth-error.png'};
        break;
    }

    if (stateData) {
      // console.log('New Bluetooth state: ', stateData);
      this._bluetoothStateSource.next(stateData);
    }
  }

  public getDevices() {
    return this._bluetoothDevicesSource.getValue();
  }

  constructor() {
    this.setState(0);
  }

}
