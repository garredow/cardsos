import { Injectable } from '@angular/core';
import { AppConfig } from './interfaces';

@Injectable()
export class AppsService {
	public apps: AppConfig[] = [
		{id: 'accounts', title: 'Accounts', url: 'about:blank', iconUrl: 'assets/icons/accounts.png'},
		{id: 'calculator', title: 'Calculator', url: 'about:blank', iconUrl: 'assets/icons/calculator.png'},
		{id: 'calendar', title: 'Calendar', url: 'about:blank', iconUrl: 'assets/icons/calendar.png'},
		{id: 'clock', title: 'Clock', url: 'about:blank', iconUrl: 'assets/icons/clock.png'},
		{id: 'contacts', title: 'Contacts', url: 'about:blank', iconUrl: 'assets/icons/contacts.png'},
		{id: 'devmode', title: 'Dev Mode', url: 'about:blank', iconUrl: 'assets/icons/devmode.png'},
		{id: 'email', title: 'Email', url: 'about:blank', iconUrl: 'assets/icons/email.png'},
		{id: 'messaging', title: 'Messaging', url: 'about:blank', iconUrl: 'assets/icons/messaging.png'},
		{id: 'notes', title: 'Notes', url: 'about:blank', iconUrl: 'assets/icons/notes.png'},
		{id: 'phone', title: 'Phone', url: 'about:blank', iconUrl: 'assets/icons/phone.png'},
		{id: 'settings', title: 'Settings', url: 'about:blank', iconUrl: 'assets/icons/settings.png'},
		{id: 'update', title: 'System Updates', url: 'about:blank', iconUrl: 'assets/icons/update.png'},
		{id: 'dash-weather', title: 'Dash Weather', url: 'https://dashweather.choorp.com', iconUrl: 'assets/icons/dash-weather.png'},
		{id: 'foxcasts', title: 'FoxCasts', url: 'http://preview.foxcasts.com', iconUrl: 'assets/icons/foxcasts.png'},
	];

	constructor() { }
}
