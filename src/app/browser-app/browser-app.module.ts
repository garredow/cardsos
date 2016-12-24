import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAppComponent } from './browser-app/browser-app.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [BrowserAppComponent],
  exports: [BrowserAppComponent]
})
export class BrowserAppModule { }
