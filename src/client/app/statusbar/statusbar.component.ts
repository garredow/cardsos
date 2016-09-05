import { Component, OnInit, Input } from '@angular/core';

@Component({
	moduleId: module.id,
	selector: 'status-bar',
	templateUrl: 'statusbar.component.html'
})
export class StatusbarComponent implements OnInit {
	isReady: boolean = false;
	isDeviceMenuOpen: boolean = false;
	dmSettings: any = {};
	@Input() appName: string;
	batteryIconUrl: string = 'assets/ui/battery-0.png';

	constructor() { }

	ngOnInit() {
		this.dmSettings.date = new Date();
		this.checkBatteryStatus();

		this.isReady = true;
	}

	checkBatteryStatus() {
		// let nav: Navigator;

		(navigator as any).getBattery().then((res: any) => {
			console.log('checkBatteryStatus', res);

			this.dmSettings.batteryLevel = res.level * 100;

			let level = Math.round(res.level * 10);
			this.batteryIconUrl = `assets/ui/battery-${level}.png`;
		});
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
