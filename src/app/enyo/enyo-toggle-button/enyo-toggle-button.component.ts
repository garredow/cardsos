import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'enyo-toggle-button',
  templateUrl: './enyo-toggle-button.component.html',
  styleUrls: ['./enyo-toggle-button.component.css']
})
export class EnyoToggleButtonComponent implements OnInit {
  @Input() isActive: boolean = false;
  @Output() onStateChange = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit() {
  }

  toggleState() {
    this.isActive = !this.isActive;
    this.onStateChange.emit(this.isActive);
  }

}
