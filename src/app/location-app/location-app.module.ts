import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LocationAppComponent } from './location-app/location-app.component';
import { EnyoModule } from '../enyo/enyo.module';

@NgModule({
  imports: [
    CommonModule,
    EnyoModule
  ],
  declarations: [LocationAppComponent],
  exports: [LocationAppComponent]
})
export class LocationAppModule { }
