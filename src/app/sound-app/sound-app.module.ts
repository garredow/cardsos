import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SoundAppComponent } from './sound-app/sound-app.component';
import { EnyoModule } from '../enyo/enyo.module';

@NgModule({
  imports: [
    CommonModule,
    EnyoModule
  ],
  declarations: [SoundAppComponent],
  exports: [SoundAppComponent]
})
export class SoundAppModule { }
