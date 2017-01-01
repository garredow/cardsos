import { Component, AfterViewInit } from '@angular/core';
import { WiFiService } from './shared/wifi.service';
import { BluetoothService } from './shared/bluetooth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [WiFiService, BluetoothService],
})
export class AppComponent implements AfterViewInit {
  appLoaded: boolean = false;

  ngAfterViewInit() {
    this.appLoaded = true;
  }
}
