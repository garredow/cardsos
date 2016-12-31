import { Component, OnInit, Input } from '@angular/core';

@Component({
	selector: 'status-bar',
	templateUrl: './statusbar.component.html',
	styleUrls: ['./statusbar.component.css'],
})
export class StatusbarComponent implements OnInit {
	isReady: boolean = false;
	isDeviceMenuOpen: boolean = false;
	dmSettings: any = {};
	@Input() appName: string;
	batteryIconUrl: string = 'assets/ui/battery-0.png';
	updateTimer: any;

	constructor() { }

	ngOnInit() {
		this.dmSettings.date = new Date();
		this.checkBatteryStatus();

		this.updateTimer = setInterval(() => {
			this.dmSettings.date = new Date();
			this.checkBatteryStatus();
		}, 5000)

		this.isReady = true;
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

	goFullScreen() {
		console.log('Requesting full screen');
		document.documentElement.webkitRequestFullScreen();
	}
}
