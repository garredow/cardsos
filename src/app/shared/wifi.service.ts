import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { WiFiNetwork, WiFiState } from '../shared/interfaces';

@Injectable()
export class WiFiService {
  private _stateSource = new BehaviorSubject<WiFiState>({ state: 0, title: 'Off', icon: '', strength: 0});
  private _networksSource = new BehaviorSubject<WiFiNetwork[]>([]);

  public state$ = this._stateSource.asObservable();
  public networks$ = this._networksSource.asObservable();

  private isConnecting: boolean = false;;

  private _networks: WiFiNetwork[] = [
    {ssid: 'Internets', strength: 2, locked: true, connected: false, connecting: false},
    {ssid: 'Internets-guest', strength: 2, locked: true, connected: false, connecting: false},
    {ssid: 'xfinitywifi', strength: 2, locked: false, connected: false, connecting: false},
  ];

  private resetNetworks() {
    this._networks.forEach((network: WiFiNetwork) => {
      network.connecting = false;
      network.connected = false;
    });

    // this.setState(1);
  }

  public connectToNetwork(ssid: string) {
    if (this.isConnecting) {
      return;
    }

    this.resetNetworks();

    let index = this._networks.findIndex(a => a.ssid == ssid);
    this._networks[index].connecting = true;
    this._networksSource.next(this._networks);
    this.setState(3);

    this.isConnecting = true;
    setTimeout(() => {
      this._networks[index].connecting = false;
      this._networks[index].connected = true;

      this._networksSource.next(this._networks);
      this.setState(4);
    }, 4000);
  }

  public turnOn() {
    this.setState(1);

    setTimeout(() => {
      this.setState(2);
      this._networksSource.next(this._networks);
    }, 3000);
  }

  public turnOff() {
    this.resetNetworks();
    this._networksSource.next([]);
    this.setState(0);
  }

  public getState() {
    return this._stateSource.getValue();
  }

  public setState(state: number, deviceName: string = '') {
    let stateData: WiFiState;

    switch (state) {
      case 0:
        stateData = { state: 0, title: 'Off', icon: '', strength: 0};
        break;
      case 1:
        stateData = { state: 1, title: 'On', icon: 'wifi-0.png', strength: 0};
        break;
      case 2:
        stateData = { state: 2, title: 'On', icon: 'wifi-0.png', strength: 0};
        break;
      case 3:
        stateData = { state: 3, title: 'Connecting', icon: 'wifi-connecting.png', strength: 0};
        break;
      case 4:
        stateData = { state: 4, title: 'Connected', icon: 'wifi-3.png', strength: 0};
        this.isConnecting = false;
        break;
    }

    if (stateData) {
      // console.log('New Wifi state: ', stateData);
      this._stateSource.next(stateData);
    }
  }

  public getNetworks() {
    return this._networksSource.getValue();
  }

  constructor() {
    this.setState(0);
  }

}
