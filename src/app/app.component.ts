import { Component, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [],
})
export class AppComponent implements AfterViewInit {
  appLoaded: boolean = false;

  ngAfterViewInit() {
    console.log('app ngAfterViewInit');
    this.appLoaded = true;
  }
}
