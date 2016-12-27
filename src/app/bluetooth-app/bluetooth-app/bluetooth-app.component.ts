import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'bluetooth-app',
  templateUrl: './bluetooth-app.component.html',
  styleUrls: ['../../../assets/enyo/css/enyo.css', '../../../assets/enyo/css/layout.css', '../../../assets/enyo/css/onyx.css', './bluetooth-app.component.css']
})
export class BluetoothAppComponent implements OnInit {
  powerupStage: number = 0;
  devices = [];
  
  constructor() { }

  ngOnInit() {
  }

  handleBluetoothStateChange(state: boolean) {
    console.log('handleBluetoothStateChange', state);
    if (state) {
      this.startPoweringUp();
    } else {
      this.devices = [];
      this.powerupStage = 0;
    }
  }

  startPoweringUp() {
    this.powerupStage = 1;

    let step2 = setTimeout(() => {
      this.powerupStage = 2;

      this.devices = [
        {name: 'BlueBuds X', type: 'headphones', connecting: false, connected: false},
        {name: 'Toyota Corolla', type: 'car', connecting: false, connected: false},
        {name: 'HP Keyboard', type: 'keyboard', connecting: false, connected: false}
      ];
    }, 2000);

    let step3 = setTimeout(() => {
      this.powerupStage = 3;

      // Gray icon, plain text, spinner
      this.devices[0].connecting = true;
    }, 4000);

    let step4 = setTimeout(() => {
      this.powerupStage = 4;

      // Blue icon, bold text
      this.devices[0].connecting = false;
      this.devices[0].connected = true;
    }, 6000);

    let step5 = setTimeout(() => {
      this.powerupStage = 5;

      // this.networks[2].strength = 2;
    }, 8000);
  }
}
