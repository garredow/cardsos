import { Component, OnInit, Input, trigger, transition, style, animate } from '@angular/core';
import { WiFiService } from '../../shared/wifi.service';
import { BluetoothService } from '../../shared/bluetooth.service';
import { BluetoothDevice, BluetoothState, WiFiNetwork, WiFiState } from '../../shared/interfaces';

@Component({
	selector: 'status-bar',
	templateUrl: './statusbar.component.html',
  	styleUrls: ['../../../assets/enyo/css/enyo.css', '../../../assets/enyo/css/layout.css', '../../../assets/enyo/css/onyx.css', './statusbar.component.css'],
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
	wifiState: WiFiState = new WiFiState();
	connectedNetworkSSID: string = '';
	showWifiSubMenu: boolean = false;
	
	bluetoothState: BluetoothState = new BluetoothState();
	bluetoothDevices: BluetoothDevice[] = [];
	connectedBluetoothDevice: string = '';
	showBluetoothSubMenu: boolean = false;

	constructor(private _bluetoothService: BluetoothService, private _wifiService: WiFiService) {
		this.wifiState = _wifiService.getState();
		_wifiService.state$.subscribe((state: WiFiState) => {
			this.wifiState = state;

			if (state.state >= 2) {
				let connectedNetwork: WiFiNetwork = this.wifiNetworks.find(a => a.connecting == true || a.connected == true);
				this.connectedNetworkSSID = connectedNetwork.ssid;
			}
		});

		this.wifiNetworks = _wifiService.getNetworks();
		_wifiService.networks$.subscribe((networks: WiFiNetwork[]) => {
			// console.log('statusbar', 'wifi networks updated');
			this.wifiNetworks = networks;
		});

		this.bluetoothState = _bluetoothService.getState();
		_bluetoothService.state$.subscribe((state: BluetoothState) => {
			this.bluetoothState = state;

			if (state.state >= 3) {
				let device: BluetoothDevice = this.bluetoothDevices.find(a => a.connecting == true || a.connected == true);
				this.connectedBluetoothDevice = device.name;
			}
		});

		this.bluetoothDevices = _bluetoothService.getDevices();
		_bluetoothService.devices$.subscribe((devices: BluetoothDevice[]) => {
			this.bluetoothDevices = devices;
		});
	}

	ngOnInit() {
		this.dmSettings.date = new Date();
		this.checkBatteryStatus();

		this.updateTimer = setInterval(() => {
			this.dmSettings.date = new Date();
			this.checkBatteryStatus();
		}, 5000)

		this.isReady = true;

		this._wifiService.setState(0);
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
			this._wifiService.turnOn();
		} else {
			this._wifiService.turnOff();
		}
	}

	toggleBluetoothState() {
		if (this.bluetoothState.state == 0) {
			this._bluetoothService.turnOn();
		} else {
			this._bluetoothService.turnOff();
		}
	}

	connectToWifiNetwork(network: WiFiNetwork) {
		this._wifiService.connectToNetwork(network.ssid);
	}

	connectToDevice(device: BluetoothDevice) {
		this._bluetoothService.connectToDevice(device.id);
	}

	goFullScreen() {
		console.log('Requesting full screen');
		document.documentElement.webkitRequestFullScreen();
	}
}
