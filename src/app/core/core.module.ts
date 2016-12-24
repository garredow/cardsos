import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';

import { CardComponent } from './card/card.component';
import { DeviceMenuComponent } from './devicemenu/devicemenu.component';
import { HomeComponent } from './home/home.component';
import { LauncherComponent } from './launcher/launcher.component';
import { StatusbarComponent } from './statusbar/statusbar.component';

import { AppsService } from './apps.service';

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: [
    CardComponent,
    DeviceMenuComponent,
    HomeComponent,
    LauncherComponent,
    StatusbarComponent
  ],
  exports: [HomeComponent],
  providers: [AppsService]
})
export class CoreModule { }
