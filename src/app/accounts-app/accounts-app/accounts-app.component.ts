import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'accounts-app',
  templateUrl: './accounts-app.component.html',
  styleUrls: ['../../../assets/enyo/css/enyo.css', '../../../assets/enyo/css/layout.css', '../../../assets/enyo/css/onyx.css', './accounts-app.component.css']
})
export class AccountsAppComponent implements OnInit {
  accounts: Object[] = [];

  constructor() { }

  ngOnInit() {
    this.accounts = [
      {id: 'palm', title: 'Palm Account', username: 'Garrett Downs'},
      {id: 'sim', title: 'SIM', username: '1 (215) 555-1234'},
      {id: 'facebook', title: 'Facebook', username: 'Garrett Downs'},
      {id: 'twitter', title: 'Twitter', username: '@Choorp'}
    ]
  }

}
