import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountsAppComponent } from './accounts-app/accounts-app.component';
import { EnyoModule } from '../enyo/enyo.module';

@NgModule({
  imports: [
    CommonModule,
    EnyoModule
  ],
  declarations: [AccountsAppComponent],
  exports: [AccountsAppComponent]
})
export class AccountsAppModule { }
