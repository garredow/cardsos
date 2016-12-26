import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'enyo-groupbox',
  templateUrl: './enyo-groupbox.component.html',
  styleUrls: ['./enyo-groupbox.component.css']
})
export class EnyoGroupboxComponent implements OnInit {
  @Input() header: string = 'Header';

  constructor() { }

  ngOnInit() {
  }

}
