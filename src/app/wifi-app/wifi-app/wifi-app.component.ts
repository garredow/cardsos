import { Component, OnInit } from '@angular/core';
import { WiFiService } from '../../shared/wifi.service';
import { WiFiState, WiFiNetwork } from '../../shared/interfaces';

@Component({
  selector: 'wifi-app',
  templateUrl: './wifi-app.component.html',
  styleUrls: ['../../../assets/enyo/css/enyo.css', '../../../assets/enyo/css/layout.css', '../../../assets/enyo/css/onyx.css', './wifi-app.component.css']
})
export class WifiAppComponent implements OnInit {
  // poweredState: boolean = false;
  // powerupStage = 0;
  wifiState: WiFiState = new WiFiState();
  wifiNetworks: WiFiNetwork[] = [];
  // networks: any[] = [];

  constructor(private _wifiService: WiFiService) {
    this.wifiState = _wifiService.getState();
    _wifiService.state$.subscribe((state: WiFiState) => {
			// console.log('statusbar', 'new wifi state', state);
			this.wifiState = state;

			if (state.state >= 2) {
				let connectedNetwork: WiFiNetwork = this.wifiNetworks.find(a => a.connecting == true || a.connected == true);
			}
		});

    this.wifiNetworks = _wifiService.getNetworks();
		_wifiService.networks$.subscribe((networks: WiFiNetwork[]) => {
			// console.log('statusbar', 'wifi networks updated');
			this.wifiNetworks = networks;
		});
  }

  ngOnInit() {
  }

  handleWifiStateChange(state: boolean) {
    // console.log('handleWifiStateChange', state);
    if (state) {
      // this.startPoweringUp();
      this._wifiService.turnOnWifi();
    } else {
      this._wifiService.turnOff();
      // this.networks = [];
      // this.powerupStage = 0;
      // this._systemService.setWifiState(0);
    }
  }

  connectToNetwork(network: WiFiNetwork) {
    this._wifiService.connectToNetwork(network.ssid);
  }

  // startPoweringUp() {
  //   this.powerupStage = 1;
  //   this._systemService.setWifiState(1);

  //   let step2 = setTimeout(() => {
  //     this.powerupStage = 2;

  //     this.networks = [
  //       {ssid: 'Internets', strength: 2, locked: true, connected: false, connecting: false},
  //       {ssid: 'Internets-guest', strength: 2, locked: true, connected: false, connecting: false},
  //       {ssid: 'xfinitywifi', strength: 2, locked: false, connected: false, connecting: false},
  //     ];
  //   }, 1300);

  //   let step3 = setTimeout(() => {
  //     this.powerupStage = 3;
  //     this._systemService.setWifiState(2);

  //     this.networks[0].strength = 3;
  //     this.networks[0].connecting = true;
  //     this.networks[2].strength = 1;
  //   }, 2600);

  //   let step4 = setTimeout(() => {
  //     this.powerupStage = 4;
  //     this._systemService.setWifiState(3);

  //     this.networks[0].strength = 3;
  //     this.networks[0].connecting = false;
  //     this.networks[0].connected = true;
  //   }, 3900);

  //   let step5 = setTimeout(() => {
  //     this.powerupStage = 5;

  //     this.networks[2].strength = 2;
  //   }, 6000);
  // }

}
