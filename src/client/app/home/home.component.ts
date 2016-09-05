import { Component, OnInit, ElementRef, ViewChild, Renderer } from '@angular/core';
import { StatusbarComponent } from '../statusbar/statusbar.component';
import { CardComponent } from '../card/card.component';
import { LauncherComponent } from '../launcher/launcher.component';
import { AppConfig } from '../shared/interfaces';

@Component({
	moduleId: module.id,
	selector: 'app-home',
	templateUrl: 'home.component.html',
	directives: [StatusbarComponent, CardComponent, LauncherComponent]
})
export class HomeComponent implements OnInit {
	isCardView: boolean = true;
	isMoved: boolean = false;
	isLauncherOpen: boolean = false;
	scrollPosition: number = 0;
	apps: AppConfig[] = [];
	allApps: AppConfig[] = [];
	quickLaunchApps: any[];
	appName: string;
	@ViewChild('cardsContainer') scroller: ElementRef;

	constructor(private _rd: Renderer) { }

	ngOnInit() {
		this.allApps = [
			{id: 'default', title: 'My App', url: 'about:blank', iconUrl: 'assets/icons/default.png'},
			{id: 'dash-weather', title: 'Dash Weather', url: 'https://dashweather.choorp.com', iconUrl: 'assets/icons/default.png'},
			{id: 'foxcasts', title: 'FoxCasts', url: 'http://preview.foxcasts.com', iconUrl: 'assets/icons/default.png'},
		];

		this.apps = [
			// {id: 'app1', title: 'App 1', url: 'http://preview.foxcasts.com'},
			// {id: 'app1', title: 'Dash Weather', url: 'https://dashweather.choorp.com', iconUrl: 'assets/icons/default.png'},
			// {id: 'app2', title: 'FoxCasts', url: 'http://preview.foxcasts.com', iconUrl: 'assets/icons/default.png'},
			// {id: 'app3', title: 'App 3', url: 'about:blank', iconUrl: 'assets/icons/default.png'},
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
		} else if (this.isCardView) {
			// console.log('Going out of card view');
			this.isCardView = !this.isCardView;
		} else {
			// console.log('Going into card view');
			this.appName = '';
			this.isCardView = !this.isCardView;
		}
	}

	openApp(app: AppConfig) {
		let activeIDs:string[] = this.apps.map(a => a.id);

		if (app.id === 'launcher') {
			this.isLauncherOpen = true;
		} else {
			if (!activeIDs.includes(app.id)) {
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

	requestAppFullScreen() {
		if (window.matchMedia('(display-mode: standalone)').matches) {
			console.log('Requesting full screen');
			document.documentElement.webkitRequestFullScreen();
		}
	}
}
