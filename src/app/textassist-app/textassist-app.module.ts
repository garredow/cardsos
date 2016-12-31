import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TextassistAppComponent } from './textassist-app/textassist-app.component';
import { EnyoModule } from '../enyo/enyo.module';

@NgModule({
  imports: [
    CommonModule,
    EnyoModule
  ],
  declarations: [TextassistAppComponent],
  exports: [TextassistAppComponent]
})
export class TextassistAppModule { }
