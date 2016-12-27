import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'wifi-app',
  templateUrl: './wifi-app.component.html',
  styleUrls: ['../../../assets/enyo/css/enyo.css', '../../../assets/enyo/css/layout.css', '../../../assets/enyo/css/onyx.css', './wifi-app.component.css']
})
export class WifiAppComponent implements OnInit {
  poweredState: boolean = false;
  powerupStage = 0;
  networks: any[] = [];

  constructor() { }

  ngOnInit() {
  }

  handleWifiStateChange(state: boolean) {
    console.log('handleWifiStateChange', state);
    if (state) {
      this.startPoweringUp();
    } else {
      this.networks = [];
      this.powerupStage = 0;
    }
  }

  startPoweringUp() {
    this.powerupStage = 1;

    let step2 = setTimeout(() => {
      this.powerupStage = 2;

      this.networks = [
        {ssid: 'Internets', strength: 2, locked: true, connected: false, connecting: false},
        {ssid: 'Internets-guest', strength: 2, locked: true, connected: false, connecting: false},
        {ssid: 'xfinitywifi', strength: 2, locked: false, connected: false, connecting: false},
      ];
    }, 1300);

    let step3 = setTimeout(() => {
      this.powerupStage = 3;

      this.networks[0].strength = 3;
      this.networks[0].connecting = true;
      this.networks[2].strength = 1;
    }, 2600);

    let step4 = setTimeout(() => {
      this.powerupStage = 4;

      this.networks[0].strength = 3;
      this.networks[0].connecting = false;
      this.networks[0].connected = true;
    }, 3900);

    let step5 = setTimeout(() => {
      this.powerupStage = 5;

      this.networks[2].strength = 2;
    }, 6000);
  }

}
