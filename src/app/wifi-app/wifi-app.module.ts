import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WifiAppComponent } from './wifi-app/wifi-app.component';
import { EnyoModule } from '../enyo/enyo.module';

@NgModule({
  imports: [
    CommonModule,
    EnyoModule
  ],
  declarations: [WifiAppComponent],
  exports: [WifiAppComponent]
})
export class WifiAppModule { }
