import { Component, OnInit } from '@angular/core';
import { WiFiService } from '../../shared/wifi.service';
import { WiFiState, WiFiNetwork } from '../../shared/interfaces';

@Component({
  selector: 'wifi-app',
  templateUrl: './wifi-app.component.html',
  styleUrls: ['../../../assets/enyo/css/enyo.css', '../../../assets/enyo/css/layout.css', '../../../assets/enyo/css/onyx.css', './wifi-app.component.css']
})
export class WifiAppComponent implements OnInit {
  wifiState: WiFiState = new WiFiState();
  wifiNetworks: WiFiNetwork[] = [];

  constructor(private _wifiService: WiFiService) {
    this.wifiState = _wifiService.getState();
    _wifiService.state$.subscribe((state: WiFiState) => {
			this.wifiState = state;

			if (state.state >= 2) {
				let connectedNetwork: WiFiNetwork = this.wifiNetworks.find(a => a.connecting == true || a.connected == true);
			}
		});

    this.wifiNetworks = _wifiService.getNetworks();
		_wifiService.networks$.subscribe((networks: WiFiNetwork[]) => {
			this.wifiNetworks = networks;
		});
  }

  ngOnInit() {
  }

  handleWifiStateChange(state: boolean) {
    if (state) {
      this._wifiService.turnOn();
    } else {
      this._wifiService.turnOff();
    }
  }

  connectToNetwork(network: WiFiNetwork) {
    this._wifiService.connectToNetwork(network.ssid);
  }

}
