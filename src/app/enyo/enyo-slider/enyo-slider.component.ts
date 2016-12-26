import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'enyo-slider',
  templateUrl: './enyo-slider.component.html',
  styleUrls: ['./enyo-slider.component.css']
})
export class EnyoSliderComponent implements OnInit {
  position: number = 75;
  
  constructor() { }

  ngOnInit() {
  }

}
