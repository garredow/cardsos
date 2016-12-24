import { Component, OnInit, ElementRef, ViewChild, Renderer } from '@angular/core';
import { StatusbarComponent } from '../statusbar/statusbar.component';
import { CardComponent } from '../card/card.component';
import { LauncherComponent } from '../launcher/launcher.component';
import { AppConfig } from '../../shared/interfaces';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
	isCardView: boolean = true;
	isMoved: boolean = false;
	isLauncherOpen: boolean = false;
	scrollPosition: number = 0;
	apps: AppConfig[] = [];
	quickLaunchApps: any[];
	appName: string;
	@ViewChild('cardsContainer') scroller: ElementRef;

	constructor(private _rd: Renderer) { }

	ngOnInit() {
		this.apps = [
			// {id: 'foxcasts', title: 'FoxCasts', url: 'http://preview.foxcasts.com', iconUrl: 'assets/icons/foxcasts.png'},
			// {id: 'dash-weather', title: 'Dash Weather', url: 'https://dashweather.choorp.com', iconUrl: 'assets/icons/dash-weather.png'},
		];

		this.quickLaunchApps = [
			{id: 'phone', title: 'Phone', url: 'about:blank', iconUrl: 'assets/icons/phone.png'},
			{id: 'email', title: 'Email', url: 'about:blank', iconUrl: 'assets/icons/email.png'},
			// {id: 'macaw', title: 'Macaw', url: 'http://choorp.com/macaw', iconUrl: 'assets/icons/macaw.png'},
			{id: 'foxcasts', title: 'FoxCasts', url: 'http://preview.foxcasts.com', iconUrl: 'assets/icons/foxcasts.png'},
			{id: 'dash-weather', title: 'Dash Weather', url: 'https://dashweather.choorp.com', iconUrl: 'assets/icons/dash-weather.png'},
			{id: 'launcher', title: 'App 5', url: 'about:blank', iconUrl: 'assets/icons/launcher.png'},
		];
	}

	handleHomeTapped() {
		// console.log('ele', this.scroller.nativeElement);
		// this._rd.setElementProperty(this.scroller.nativeElement, 'scrollLeft', 100);

		if (this.isLauncherOpen) {
			this.isLauncherOpen = false;
		} else if (this.isCardView && this.apps.length > 0) {
			// console.log('Going out of card view');
			this.isCardView = false;
		} else {
			// console.log('Going into card view');
			this.appName = '';
			this.isCardView = true;
		}
	}

	openApp(app: AppConfig) {
		let activeIDs:string[] = this.apps.map(a => a.id);
		
		if (app.id === 'launcher') {
			this.isLauncherOpen = true;
		} else {
			if (activeIDs.indexOf(app.id) == -1) {
				// this.isMoved = true;
				// let apptoLaunch: AppConfig = this.allApps.find(a => a.id === app.id);
				// console.log('launching ', apptoLaunch);
				this.apps.push(app);
			}

		}
	}

	closeApp(app:AppConfig) {
		let index: number = this.apps.findIndex((x: AppConfig) => x.id === app.id);
		this.apps.splice(index, 1);
	}

	appLaunched() {
		this._rd.setElementProperty(this.scroller.nativeElement, 'scrollLeft', (this.apps.length-1) * window.outerWidth);
		// this.isMoved = true;


		// setTimeout(() => {
		// 	this._rd.setElementProperty(this.scroller.nativeElement, 'scrollLeft', (this.apps.length-1) * window.outerWidth);
		// }, 400);

		setTimeout(() => {
			this.isCardView = false;
		}, 1000);

		// setTimeout(() => {
		// 	this.isCardView = false;
		// 	this.isMoved = false;
		// }, 1200);
	}

	viewFullScreen(ev: any) {
		console.log('viewFullScreen:', ev);
		this.isCardView = false;
		this.appName = ev.title;
	}
}
