import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAppComponent } from './browser-app/browser-app.component';
import { EnyoModule } from '../enyo/enyo.module';

@NgModule({
  imports: [
    CommonModule,
    EnyoModule
  ],
  declarations: [BrowserAppComponent],
  exports: [BrowserAppComponent]
})
export class BrowserAppModule { }
