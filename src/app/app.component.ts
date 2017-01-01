import { Component, AfterViewInit } from '@angular/core';
import { WiFiService } from './shared/wifi.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [WiFiService],
})
export class AppComponent implements AfterViewInit {
  appLoaded: boolean = false;

  ngAfterViewInit() {
    console.log('app ngAfterViewInit');
    this.appLoaded = true;
  }
}
