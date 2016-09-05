import { Component } from '@angular/core';
import { FORM_DIRECTIVES } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { HTTP_PROVIDERS, JSONP_PROVIDERS } from '@angular/http';
import { AppsService } from './shared/apps.service';

@Component({
    moduleId: module.id,
    selector: 'my-app',
    templateUrl: 'app.component.html',
    directives: [FORM_DIRECTIVES, HomeComponent],
    providers: [HTTP_PROVIDERS, JSONP_PROVIDERS, AppsService]
})
export class AppComponent {

    constructor() { }

    // ngOnInit() {
    //     console.log('ready');
    //     // if (window.matchMedia('(display-mode: standalone)').matches) {
    //     //     document.documentElement.webkitRequestFullScreen();
    //     // }
    // }
}
