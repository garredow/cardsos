import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VpnAppComponent } from './vpn-app/vpn-app.component';
import { EnyoModule } from '../enyo/enyo.module';

@NgModule({
  imports: [
    CommonModule,
    EnyoModule
  ],
  declarations: [VpnAppComponent],
  exports: [VpnAppComponent]
})
export class VpnAppModule { }
