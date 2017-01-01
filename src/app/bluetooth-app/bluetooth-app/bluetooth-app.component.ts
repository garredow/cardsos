import { Component, OnInit } from '@angular/core';
import { BluetoothService } from '../../shared/bluetooth.service';
import { BluetoothDevice, BluetoothState } from '../../shared/interfaces';

@Component({
  selector: 'bluetooth-app',
  templateUrl: './bluetooth-app.component.html',
  styleUrls: ['../../../assets/enyo/css/enyo.css', '../../../assets/enyo/css/layout.css', '../../../assets/enyo/css/onyx.css', './bluetooth-app.component.css']
})
export class BluetoothAppComponent implements OnInit {
  bluetoothState: BluetoothState = new BluetoothState();
  bluetoothDevices: BluetoothDevice[] = [];
  connectedDevice: string = '';
  
  constructor(private _bluetoothService: BluetoothService) {
    this.bluetoothState = _bluetoothService.getState();
    _bluetoothService.state$.subscribe((state: BluetoothState) => {
			this.bluetoothState = state;

			if (state.state >= 3) {
				let connectedDevice: BluetoothDevice = this.bluetoothDevices.find(a => a.connecting == true || a.connected == true);
			}
		});

    this.bluetoothDevices = _bluetoothService.getDevices();
    _bluetoothService.devices$.subscribe((devices: BluetoothDevice[]) => {
			this.bluetoothDevices = devices;
		});
  }

  ngOnInit() {
  }

  handleBluetoothStateChange(state: boolean) {
    if (state) {
      this._bluetoothService.turnOn();
    } else {
      this._bluetoothService.turnOff();
    }
  }

  connectToDevice(device: BluetoothDevice) {
    this._bluetoothService.connectToDevice(device.id);
  }
}
