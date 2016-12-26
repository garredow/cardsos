import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScreenlockAppComponent } from './screenlock-app/screenlock-app.component';
import { EnyoModule } from '../enyo/enyo.module';

@NgModule({
  imports: [
    CommonModule,
    EnyoModule
  ],
  declarations: [ScreenlockAppComponent],
  exports: [ScreenlockAppComponent]
})
export class ScreenlockAppModule { }
