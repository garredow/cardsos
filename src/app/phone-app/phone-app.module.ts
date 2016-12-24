import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhoneAppComponent } from './phone-app/phone-app.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [PhoneAppComponent],
  exports: [PhoneAppComponent]
})
export class PhoneAppModule { }
