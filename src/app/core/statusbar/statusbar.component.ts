import { Component, OnInit, Input, trigger, transition, style, animate } from '@angular/core';
import { WiFiService } from '../../shared/wifi.service';
import { WiFiNetwork, WiFiState } from '../../shared/interfaces';

@Component({
	selector: 'status-bar',
	templateUrl: './statusbar.component.html',
	styleUrls: ['./statusbar.component.css'],
	animations: [
		trigger(
			'fadeIn', [
				transition(':enter', [
					style({opacity: 0}),
					animate('300ms', style({opacity: 1}))
				]),
				transition(':leave', [
					style({opacity: 1}),
					animate('300ms', style({opacity: 0}))
				])
			]
		)
	]
})
export class StatusbarComponent implements OnInit {
	isReady: boolean = false;
	isDeviceMenuOpen: boolean = false;
	dmSettings: any = {};
	@Input() appName: string;
	batteryIconUrl: string = 'assets/ui/battery-0.png';
	updateTimer: any;

	wifiNetworks: WiFiNetwork[] = [];
	wifiState: WiFiState;
	connectedNetworkSSID: string = '';
	showWifiSubMenu: boolean = false;
	bluetoothStatus: Object = {};
	showBluetoothSubMenu: boolean = false;

	constructor(private _systemService: WiFiService) {
		_systemService.state$.subscribe((state: WiFiState) => {
			// console.log('statusbar', 'new wifi state', state);
			this.wifiState = state;

			if (state.state >= 2) {
				let connectedNetwork: WiFiNetwork = this.wifiNetworks.find(a => a.connecting == true || a.connected == true);
				this.connectedNetworkSSID = connectedNetwork.ssid;
			}
		});

		// this.wifiNetworks = _systemService.wifiNetworks;
		_systemService.networks$.subscribe((networks: WiFiNetwork[]) => {
			// console.log('statusbar', 'wifi networks updated');
			this.wifiNetworks = networks;
		});

		// _systemService.bluetoothStatus$.subscribe(status => {
		// 	this.bluetoothStatus = status;
		// });
	}

	ngOnInit() {
		this.dmSettings.date = new Date();
		this.checkBatteryStatus();

		this.updateTimer = setInterval(() => {
			this.dmSettings.date = new Date();
			this.checkBatteryStatus();
		}, 5000)

		this.isReady = true;

		this._systemService.setState(0);
		// this._systemService.setBluetoothStatus(0);
	}

	checkBatteryStatus() {
		if ((navigator as any).getBattery) {
			(navigator as any).getBattery().then((res: any) => {
				// console.log('checkBatteryStatus', res);

				this.dmSettings.batteryLevel = res.level * 100;

				let level = Math.round(res.level * 10);
				this.batteryIconUrl = `assets/ui/battery-${level}.png`;
			});
		} else {
			this.dmSettings.batteryLevel = 73;
			this.batteryIconUrl = 'assets/ui/battery-7.png';
		}
	}

	toggleDeviceMenu() {
		this.isDeviceMenuOpen = !this.isDeviceMenuOpen;

		if (this.isDeviceMenuOpen) {

		}
	}

	toggleSubMenu(menu) {
		switch (menu) {
			case 'wifi':
				this.showWifiSubMenu = !this.showWifiSubMenu;
				break;
			case 'bluetooth':
				this.showBluetoothSubMenu = !this.showBluetoothSubMenu;
				break;
		}
	}

	toggleWifiState() {
		if (this.wifiState.state == 0) {
			this._systemService.turnOnWifi();
		} else {
			this._systemService.turnOff();
		}
	}

	connectToWifiNetwork(network: WiFiNetwork) {
		this._systemService.connectToNetwork(network.ssid);
	}

	goFullScreen() {
		console.log('Requesting full screen');
		document.documentElement.webkitRequestFullScreen();
	}
}
