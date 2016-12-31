import { Component, OnInit, Input, Output, Inject, ViewChild, ElementRef, EventEmitter } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';
import { AppsService } from '../apps.service';
import { PageScrollConfig, PageScrollService, PageScrollInstance } from 'ng2-page-scroll';
import { AppConfig } from '../../shared/interfaces';

@Component({
	selector: 'app-launcher',
	templateUrl: './launcher.component.html',
	styleUrls: ['./launcher.component.css'],
})
export class LauncherComponent implements OnInit {
	@Input() isCardView: boolean = true;
	appName: string;
	panels: any[];
	isReady: boolean = false;
	@Output() onOpenApp = new EventEmitter<Object>();

	@ViewChild('container') private container: ElementRef;

	constructor(private _appsService: AppsService, private pageScrollService: PageScrollService, @Inject(DOCUMENT) private document: Document) {
		PageScrollConfig.defaultIsVerticalScrolling = false;
	}

	scrollToNearestPanel(): void {
		var position = this.container.nativeElement.scrollLeft;
		let childPositions = [];
		for (let i = 0; i < this.container.nativeElement.children.length; i++) {
			childPositions.push({
				id: this.container.nativeElement.children[i].id,
				offset: this.container.nativeElement.children[i].offsetLeft,
				width: this.container.nativeElement.children[i].clientWidth
			})
		}

		let scrollTo: string;
		let distance: number = 0;
		for (let i = 0; i < childPositions.length; i++) {
			let child = childPositions[i];
			let nextChild = childPositions[i + 1];

			let threshold: number = child.offset + child.width * .6;
			if (position < threshold) {
				scrollTo = child.id;
				distance = Math.abs(position - child.offset);
				break;
			}
		}

		let time: number = distance / childPositions[0].width * 300;
		if (time < 40) {
			time = 40;
		}

		let pageScrollInstance: PageScrollInstance = PageScrollInstance.advancedInstance(this.document, '#' + scrollTo, [this.container.nativeElement], "", false, 0, true, null, time);

		this.pageScrollService.start(pageScrollInstance);
	}

	private scrollTimer = null;
	logScroll(ev) {
		if (this.scrollTimer != null) {
			clearTimeout(this.scrollTimer);
		}
		this.scrollTimer = setTimeout(() => {
			// console.log('scrollend', ev);
			this.scrollToNearestPanel();
		}, 75);
	}

	ngOnInit() {
		console.log('launcher', this._appsService.apps);
		this.panels = [
			{
				title: 'Applications', apps: [
					{ id: 'calculator', title: 'Calculator', url: '', iconUrl: 'assets/icons/calculator.png' },
					{ id: 'calendar', title: 'Calendar', url: '', iconUrl: 'assets/icons/calendar.png' },
					{ id: 'clock', title: 'Clock', url: '', iconUrl: 'assets/icons/clock.png' },
					{ id: 'contacts', title: 'Contacts', url: '', iconUrl: 'assets/icons/contacts.png' },
					{ id: 'email', title: 'Email', url: '', iconUrl: 'assets/icons/email.png' },
					{ id: 'messaging', title: 'Messaging', url: '', iconUrl: 'assets/icons/messaging.png' },
					{ id: 'notes', title: 'Notes', url: '', iconUrl: 'assets/icons/notes.png' },
					{ id: 'phone', title: 'Phone', url: '', iconUrl: 'assets/icons/phone.png' },
					{ id: 'dash-weather', title: 'Dash Weather', url: 'https://dashweather.choorp.com', iconUrl: 'assets/icons/dash-weather.png' },
					{ id: 'foxcasts', title: 'FoxCasts', url: 'http://preview.foxcasts.com', iconUrl: 'assets/icons/foxcasts.png' },
				]
			},
			{
				title: 'Extras', apps: [
					{ id: 'devmode', title: 'Dev Mode', url: '', iconUrl: 'assets/icons/devmode.png' },
				]
			},
			{
				title: 'System', apps: [
					{ id: 'wifi', title: 'Wi-Fi', url: '', iconUrl: 'assets/icons/wifi-64.png' },
					{ id: 'bluetooth', title: 'Bluetooth', url: '', iconUrl: 'assets/icons/bluetooth-64.png' },
					{ id: 'screenlock', title: 'Screen & Lock', url: '', iconUrl: 'assets/icons/screenlock-64.png' },
					{ id: 'accounts', title: 'Accounts', url: '', iconUrl: 'assets/icons/accounts-64.png' },
					{ id: 'settings', title: 'Settings', url: '', iconUrl: 'assets/icons/settings.png' },
					{ id: 'updates', title: 'System Updates', url: '', iconUrl: 'assets/icons/updates-64.png' },
					{ id: 'backup', title: 'Backups', url: '', iconUrl: 'assets/icons/backup-64.png' },
					{ id: 'exhibition', title: 'Exhibition', url: '', iconUrl: 'assets/icons/exhibition-64.png' },
					{ id: 'vpn', title: 'VPN', url: '', iconUrl: 'assets/icons/vpn-64.png' },
					{ id: 'location', title: 'Location Services', url: '', iconUrl: 'assets/icons/location-64.png' },
					{ id: 'textassist', title: 'Text Assist', url: '', iconUrl: 'assets/icons/textassist-64.png' },
				]
			},
		];

		this.isReady = true;
	}

	goToPreviousPanel(currentIndex) {
		if (currentIndex > 0) {
			this.goToPanel(currentIndex-1);
		}
	}

	goToNextPanel(currentIndex) {
		if (currentIndex + 1 < this.panels.length) {
			this.goToPanel(currentIndex+1);
		}
	}

	goToPanel(index) {
		let pageScrollInstance: PageScrollInstance = PageScrollInstance.advancedInstance(this.document, '#panel' + index, [this.container.nativeElement], "", false, 0, true, null, 200);
		this.pageScrollService.start(pageScrollInstance);
	}

	openApp(app: AppConfig) {
		this.onOpenApp.emit(app);
	}
}
