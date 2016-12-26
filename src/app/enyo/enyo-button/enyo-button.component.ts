import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'enyo-button',
  templateUrl: './enyo-button.component.html',
  styleUrls: ['./enyo-button.component.css']
})
export class EnyoButtonComponent implements OnInit {
  isActive: boolean = false;
  @Input() label: string = '';

  constructor() { }

  ngOnInit() {
  }

  toggleState(newState) {
    this.isActive = newState;
  }
}
