import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'clock-app',
  templateUrl: './clock-app.component.html',
  styleUrls: ['./clock-app.component.css']
})
export class ClockAppComponent implements OnInit {
  date: Date;
  time: any = {};
  timer: any;

  constructor() { }

  ngOnInit() {
    this.updateDate();

    this.timer = setInterval(() => {
      this.updateDate();
    }, 5000);
  }

  ngOnDestroy() {
    clearInterval(this.timer);
  }

  updateDate() {
    this.date = new Date();
    let hours = this.date.getHours();
    let minutes = this.date.getMinutes();

    this.time.ampm = hours > 11 ? 'pm' : 'am';
    hours = hours > 12 ? (hours - 12) : hours;
    if (hours > 9) {
      this.time.hours1 = hours.toString().charAt(0);
      this.time.hours2 = hours.toString().charAt(1);
    } else {
      this.time.hours1 = null;
      this.time.hours2 = hours.toString().charAt(0);
    }

    if (minutes > 9) {
      this.time.mins1 = minutes.toString().charAt(0);
      this.time.mins2 = minutes.toString().charAt(1);
    } else {
      this.time.mins1 = "0";
      this.time.mins2 = minutes.toString().charAt(0);
    }
  }

}
