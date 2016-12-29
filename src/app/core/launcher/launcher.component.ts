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
					{ id: 'calculator', title: 'Calculator', url: 'about:blank', iconUrl: 'assets/icons/calculator.png' },
					{ id: 'calendar', title: 'Calendar', url: 'about:blank', iconUrl: 'assets/icons/calendar.png' },
					{ id: 'clock', title: 'Clock', url: 'about:blank', iconUrl: 'assets/icons/clock.png' },
					{ id: 'contacts', title: 'Contacts', url: 'about:blank', iconUrl: 'assets/icons/contacts.png' },
					{ id: 'email', title: 'Email', url: 'about:blank', iconUrl: 'assets/icons/email.png' },
					{ id: 'messaging', title: 'Messaging', url: 'about:blank', iconUrl: 'assets/icons/messaging.png' },
					{ id: 'notes', title: 'Notes', url: 'about:blank', iconUrl: 'assets/icons/notes.png' },
					{ id: 'phone', title: 'Phone', url: 'about:blank', iconUrl: 'assets/icons/phone.png' },
					{ id: 'dash-weather', title: 'Dash Weather', url: 'https://dashweather.choorp.com', iconUrl: 'assets/icons/dash-weather.png' },
					{ id: 'foxcasts', title: 'FoxCasts', url: 'http://preview.foxcasts.com', iconUrl: 'assets/icons/foxcasts.png' },
				]
			},
			{
				title: 'Extras', apps: [
					{ id: 'devmode', title: 'Dev Mode', url: 'about:blank', iconUrl: 'assets/icons/devmode.png' },
				]
			},
			{
				title: 'System', apps: [
					{ id: 'accounts', title: 'Accounts', url: 'about:blank', iconUrl: 'assets/icons/accounts.png' },
					{ id: 'settings', title: 'Settings', url: 'about:blank', iconUrl: 'assets/icons/settings.png' },
					{ id: 'update', title: 'System Updates', url: 'about:blank', iconUrl: 'assets/icons/update.png' },
				]
			},
		];

		this.isReady = true;
	}

	openApp(app: AppConfig) {
		this.onOpenApp.emit(app);
	}
}
