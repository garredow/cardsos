import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EnyoIconButtonComponent } from './enyo-icon-button/enyo-icon-button.component';
import { EnyoToggleButtonComponent } from './enyo-toggle-button/enyo-toggle-button.component';
import { EnyoSliderComponent } from './enyo-slider/enyo-slider.component';
import { EnyoButtonComponent } from './enyo-button/enyo-button.component';
import { EnyoGroupboxComponent } from './enyo-groupbox/enyo-groupbox.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [EnyoIconButtonComponent, EnyoToggleButtonComponent, EnyoSliderComponent, EnyoButtonComponent, EnyoGroupboxComponent],
  exports: [EnyoIconButtonComponent, EnyoToggleButtonComponent, EnyoSliderComponent, EnyoButtonComponent, EnyoGroupboxComponent]
})
export class EnyoModule { }
