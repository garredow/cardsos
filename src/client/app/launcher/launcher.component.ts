import { Component, OnInit, Input } from '@angular/core';
import { AppsService } from '../shared/apps.service';

@Component({
	moduleId: module.id,
	selector: 'app-launcher',
	templateUrl: 'launcher.component.html',
})
export class LauncherComponent implements OnInit {
	@Input() isCardView: boolean = true;
	appName: string;
	panels: any[];
	isReady: boolean = false;

	constructor(private _appsService: AppsService) { }

	ngOnInit() {
		console.log('launcher', this._appsService.apps);
		this.panels = [
			{ title: 'Applications', apps: [
				{id: 'calculator', title: 'Calculator', url: 'about:blank', iconUrl: 'assets/icons/calculator.png'},
				{id: 'calendar', title: 'Calendar', url: 'about:blank', iconUrl: 'assets/icons/calendar.png'},
				{id: 'clock', title: 'Clock', url: 'about:blank', iconUrl: 'assets/icons/clock.png'},
				{id: 'contacts', title: 'Contacts', url: 'about:blank', iconUrl: 'assets/icons/contacts.png'},
				{id: 'email', title: 'Email', url: 'about:blank', iconUrl: 'assets/icons/email.png'},
				{id: 'messaging', title: 'Messaging', url: 'about:blank', iconUrl: 'assets/icons/messaging.png'},
				{id: 'notes', title: 'Notes', url: 'about:blank', iconUrl: 'assets/icons/notes.png'},
				{id: 'phone', title: 'Phone', url: 'about:blank', iconUrl: 'assets/icons/phone.png'},
				{id: 'dash-weather', title: 'Dash Weather', url: 'https://dashweather.choorp.com', iconUrl: 'assets/icons/dash-weather.png'},
				{id: 'foxcasts', title: 'FoxCasts', url: 'http://preview.foxcasts.com', iconUrl: 'assets/icons/foxcasts.png'},
			]},
			{ title: 'Extras', apps: [
				{id: 'devmode', title: 'Dev Mode', url: 'about:blank', iconUrl: 'assets/icons/devmode.png'},
			]},
			{ title: 'System', apps: [
				{id: 'accounts', title: 'Accounts', url: 'about:blank', iconUrl: 'assets/icons/accounts.png'},
				{id: 'settings', title: 'Settings', url: 'about:blank', iconUrl: 'assets/icons/settings.png'},
				{id: 'update', title: 'System Updates', url: 'about:blank', iconUrl: 'assets/icons/update.png'},
			]},
		];

		// this.panels[0].apps = this._appsService.apps;

		this.isReady = true;
	}
}
