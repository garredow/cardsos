import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'browser-app',
  templateUrl: './browser-app.component.html',
  styleUrls: ['../../../assets/enyo/css/enyo.css', '../../../assets/enyo/css/layout.css', '../../../assets/enyo/css/onyx.css', './browser-app.component.css']
})
export class BrowserAppComponent implements OnInit {
  inputState: Object = {};

  constructor() { }

  ngOnInit() {
  }

  toggleInputState(ev) {
    // console.log(ev);
    let isFocused = ev.type == 'focus' || ev.type == 'pointerdown' ? true : false;
    this.inputState[ev.target.id] = isFocused;
  }

}
