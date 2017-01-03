import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClockAppComponent } from './clock-app/clock-app.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ClockAppComponent],
  exports: [ClockAppComponent]
})
export class ClockAppModule { }
