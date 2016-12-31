import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UpdatesAppComponent } from './updates-app/updates-app.component';
import { EnyoModule } from '../enyo/enyo.module';

@NgModule({
  imports: [
    CommonModule,
    EnyoModule
  ],
  declarations: [UpdatesAppComponent],
  exports: [UpdatesAppComponent]
})
export class UpdatesAppModule { }
