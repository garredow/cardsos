import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'enyo-slider',
  templateUrl: './enyo-slider.component.html',
  styleUrls: ['./enyo-slider.component.css']
})
export class EnyoSliderComponent implements OnInit {
  @Input() position: number = 75;
  
  constructor() { }

  ngOnInit() {
  }

}
