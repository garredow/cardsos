import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExhibitionAppComponent } from './exhibition-app/exhibition-app.component';
import { EnyoModule } from '../enyo/enyo.module';

@NgModule({
  imports: [
    CommonModule,
    EnyoModule
  ],
  declarations: [ExhibitionAppComponent],
  exports: [ExhibitionAppComponent]
})
export class ExhibitionAppModule { }
