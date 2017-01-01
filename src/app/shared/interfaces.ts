import { Injectable } from '@angular/core';

@Injectable()
export class AppConfig {
	public id: string;
	public title: string;
	public url: string;
	public iconUrl: string;
}

@Injectable()
export class WiFiNetwork {
	public ssid: string;
	public strength: number;
	public locked: boolean;
	public connecting: boolean;
	public connected: boolean;
}

@Injectable()
export class WiFiState {
	public state: number;
	public title: string;
	public icon: string;
	public strength: number;
}

@Injectable()
export class BluetoothDevice {
	public id: number;
	public name: string;
	public type: string;
	public connecting: boolean;
	public connected: boolean;
}

@Injectable()
export class BluetoothState {
	public state: number;
	public title: string;
	public icon: string;
}