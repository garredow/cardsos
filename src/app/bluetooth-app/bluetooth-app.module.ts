import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BluetoothAppComponent } from './bluetooth-app/bluetooth-app.component';
import { EnyoModule } from '../enyo/enyo.module';

@NgModule({
  imports: [
    CommonModule,
    EnyoModule
  ],
  declarations: [BluetoothAppComponent],
  exports: [BluetoothAppComponent]
})
export class BluetoothAppModule { }
