import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'location-app',
  templateUrl: './location-app.component.html',
  styleUrls: ['../../../assets/enyo/css/enyo.css', '../../../assets/enyo/css/layout.css', '../../../assets/enyo/css/onyx.css', './location-app.component.css']

})
export class LocationAppComponent implements OnInit {
  powerupStage: number = 0;

  constructor() { }

  ngOnInit() {
  }

  handleActiveStateChange(state: boolean) {
    this.powerupStage = state ? 1 : 0;
  }

}
