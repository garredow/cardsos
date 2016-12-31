import { NgModule, Optional, SkipSelf } from '@angular/core';
import { SharedModule } from '../shared/shared.module';

import { Ng2PageScrollModule, PageScrollService } from 'ng2-page-scroll/ng2-page-scroll';

import { PhoneAppModule } from '../phone-app/phone-app.module';
import { BrowserAppModule } from '../browser-app/browser-app.module';
import { ScreenlockAppModule } from '../screenlock-app/screenlock-app.module';
import { WifiAppModule } from '../wifi-app/wifi-app.module';
import { BluetoothAppModule } from '../bluetooth-app/bluetooth-app.module';
import { AccountsAppModule } from '../accounts-app/accounts-app.module';
import { BackupAppModule } from '../backup-app/backup-app.module';
import { UpdatesAppModule } from '../updates-app/updates-app.module';
import { ExhibitionAppModule } from '../exhibition-app/exhibition-app.module';
import { VpnAppModule } from '../vpn-app/vpn-app.module';

import { CardComponent } from './card/card.component';
import { DeviceMenuComponent } from './devicemenu/devicemenu.component';
import { HomeComponent } from './home/home.component';
import { LauncherComponent } from './launcher/launcher.component';
import { StatusbarComponent } from './statusbar/statusbar.component';

import { AppsService } from './apps.service';

@NgModule({
  imports: [
    SharedModule,
    Ng2PageScrollModule.forRoot(),
    PhoneAppModule,
    BrowserAppModule,
    ScreenlockAppModule,
    WifiAppModule,
    BluetoothAppModule,
    AccountsAppModule,
    BackupAppModule,
    UpdatesAppModule,
    ExhibitionAppModule,
    VpnAppModule
  ],
  declarations: [
    CardComponent,
    DeviceMenuComponent,
    HomeComponent,
    LauncherComponent,
    StatusbarComponent
  ],
  exports: [HomeComponent],
  providers: [AppsService, PageScrollService]
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error(
        'CoreModule is already loaded.'
      )
    }
  }
}
