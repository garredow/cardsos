import { Component, OnInit, AfterViewInit, Input, Output, EventEmitter } from '@angular/core';
import { SafeResourceUrl, DomSanitizationService } from '@angular/platform-browser';
import { AppConfig } from '../shared/interfaces';

@Component({
	moduleId: module.id,
	selector: 'app-card',
	templateUrl: 'card.component.html'
})
export class CardComponent implements OnInit, AfterViewInit {
	@Input() config: AppConfig;
	@Input() isCardView: boolean;
	isDown: boolean = true;
	@Output() onOpen = new EventEmitter<AppConfig>();
	@Output() onLaunch = new EventEmitter();
	@Output() onClose = new EventEmitter<AppConfig>();
	url: SafeResourceUrl;
	originalTouch: Touch;
	dragOffset: string;
	disableAnimation: boolean = false;

	constructor(private sanitizer: DomSanitizationService) { }

	ngOnInit() {
		// console.log('config', this.config);
		this.isDown = true;

		this.url = this.sanitizer.bypassSecurityTrustResourceUrl('about:blank');
	}

	ngAfterViewInit() {
		this.onLaunch.emit();
		this.isDown = false;
		setTimeout(() => {
			this.url = this.sanitizer.bypassSecurityTrustResourceUrl(this.config.url);
			// this.url = this.sanitizer.bypassSecurityTrustResourceUrl('about:blank');
		}, 400);
	}

	viewFullScreen(ev: Event) {
		console.log('event', ev);
		// console.log('args', args);
		ev.preventDefault();
		ev.stopPropagation();

		this.onOpen.emit(this.config);
	}

	frameContentLoaded() {
		console.log('frameContentLoaded');
	}

	touchStart(ev: TouchEvent) {
		// console.log('touchStart', ev);
		// ev.preventDefault();

		this.originalTouch = ev.changedTouches[0];
	}

	touchMove(ev: TouchEvent) {
		// console.log('touchMove', ev);

		let currentTouch: Touch = Array.from(ev.changedTouches).find((x: Touch) => x.identifier === this.originalTouch.identifier);
		let move: number = currentTouch.screenY - this.originalTouch.screenY;
		// console.log(move);

		if (move > 30 || move < -30) {
			this.dragOffset = `translateY(${move}px)`;
			this.disableAnimation = true;
			ev.preventDefault();
		}
	}

	touchEnd(ev: TouchEvent) {
		// console.log('touchEnd', ev);

		let currentTouch: Touch = Array.from(ev.changedTouches).find((x: Touch) => x.identifier === this.originalTouch.identifier);
		let move: number = currentTouch.screenY - this.originalTouch.screenY;
		// console.log('Total move: ', move);

		this.disableAnimation = false;
		if (move > 400 || move < -400) {
			// console.log('removing card');
			this.dragOffset = `translateY(-120vh)`;
			setTimeout(() => { this.onClose.emit(this.config);}, 300);
		} else {
			this.dragOffset = `translateY(-20px)`;
		}

		this.originalTouch = null;
	}
}
