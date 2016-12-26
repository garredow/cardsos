import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'enyo-toggle-button',
  templateUrl: './enyo-toggle-button.component.html',
  styleUrls: ['./enyo-toggle-button.component.css']
})
export class EnyoToggleButtonComponent implements OnInit {
  isActive: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  toggleState() {
    this.isActive = !this.isActive;
  }

}
