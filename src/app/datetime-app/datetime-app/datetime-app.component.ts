import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'datetime-app',
  templateUrl: './datetime-app.component.html',
  styleUrls: ['../../../assets/enyo/css/enyo.css', '../../../assets/enyo/css/layout.css', '../../../assets/enyo/css/onyx.css', './datetime-app.component.css']
})
export class DatetimeAppComponent implements OnInit {
  rightNow: any;

  constructor() { }

  ngOnInit() {
    this.rightNow = new Date();
  }

}
