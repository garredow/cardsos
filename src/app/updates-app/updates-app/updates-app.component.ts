import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'updates-app',
  templateUrl: './updates-app.component.html',
  styleUrls: ['../../../assets/enyo/css/enyo.css', '../../../assets/enyo/css/layout.css', '../../../assets/enyo/css/onyx.css', './updates-app.component.css']
})
export class UpdatesAppComponent implements OnInit {
  powerupStage: number = 0;
  timer;

  constructor() { }

  ngOnInit() {
    this.checkForUpdates();
  }

  checkForUpdates() {
    this.powerupStage = 0;

    if (this.timer) {
      clearTimeout(this.timer);
    }

    this.timer = setTimeout(() => {
      this.powerupStage = 1;
    }, 5000);
  }

}
