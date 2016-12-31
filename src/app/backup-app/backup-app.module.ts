import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BackupAppComponent } from './backup-app/backup-app.component';
import { EnyoModule } from '../enyo/enyo.module';

@NgModule({
  imports: [
    CommonModule,
    EnyoModule
  ],
  declarations: [BackupAppComponent],
  exports: [BackupAppComponent]
})
export class BackupAppModule { }
