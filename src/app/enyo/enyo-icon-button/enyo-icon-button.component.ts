import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'enyo-icon-button',
  templateUrl: './enyo-icon-button.component.html',
  styleUrls: ['./enyo-icon-button.component.css']
})
export class EnyoIconButtonComponent implements OnInit {
  isActive: boolean = false;
  iconUrl: string = 'url(\'assets/enyo/images/browser/menu-icon-back.png\')';

  constructor() { }

  ngOnInit() {
  }

  toggleState(ev) {
    this.isActive = ev.type == 'focus' || ev.type == 'pointerdown' ? true : false;
  }

}
