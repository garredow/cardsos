import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DatetimeAppComponent } from './datetime-app/datetime-app.component';
import { EnyoModule } from '../enyo/enyo.module';

@NgModule({
  imports: [
    CommonModule,
    EnyoModule
  ],
  declarations: [DatetimeAppComponent],
  exports: [DatetimeAppComponent]
})
export class DatetimeAppModule { }
