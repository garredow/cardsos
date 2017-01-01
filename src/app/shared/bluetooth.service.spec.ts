/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { BluetoothService } from './bluetooth.service';

describe('BluetoothService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BluetoothService]
    });
  });

  it('should ...', inject([BluetoothService], (service: BluetoothService) => {
    expect(service).toBeTruthy();
  }));
});
