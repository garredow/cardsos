import { Injectable } from '@angular/core';
// import { AppConfig } from './interfaces';
import { AppConfig } from '../shared/interfaces';

@Injectable()
export class AppsService {
	public apps: AppConfig[] = [
		{id: 'accounts', title: 'Accounts', url: '', iconUrl: 'assets/icons/accounts.png'},
		{id: 'calculator', title: 'Calculator', url: '', iconUrl: 'assets/icons/calculator.png'},
		{id: 'calendar', title: 'Calendar', url: '', iconUrl: 'assets/icons/calendar.png'},
		{id: 'clock', title: 'Clock', url: '', iconUrl: 'assets/icons/clock.png'},
		{id: 'contacts', title: 'Contacts', url: '', iconUrl: 'assets/icons/contacts.png'},
		{id: 'devmode', title: 'Dev Mode', url: '', iconUrl: 'assets/icons/devmode.png'},
		{id: 'email', title: 'Email', url: '', iconUrl: 'assets/icons/email.png'},
		{id: 'messaging', title: 'Messaging', url: '', iconUrl: 'assets/icons/messaging.png'},
		{id: 'notes', title: 'Notes', url: '', iconUrl: 'assets/icons/notes.png'},
		{id: 'phone', title: 'Phone', url: '', iconUrl: 'assets/icons/phone.png'},
		{id: 'settings', title: 'Settings', url: '', iconUrl: 'assets/icons/settings.png'},
		{id: 'update', title: 'System Updates', url: '', iconUrl: 'assets/icons/update.png'},
		{id: 'browser', title: 'Web', url: '', iconUrl: 'assets/icons/browser.png'},
		{id: 'dash-weather', title: 'Dash Weather', url: 'https://dashweather.choorp.com', iconUrl: 'assets/icons/dash-weather.png'},
		{id: 'foxcasts', title: 'FoxCasts', url: 'http://preview.foxcasts.com', iconUrl: 'assets/icons/foxcasts.png'},
	];

	constructor() { }
}
