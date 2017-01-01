/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { WiFiService } from './wifi.service';

describe('WiFiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WiFiService]
    });
  });

  it('should ...', inject([WiFiService], (service: WiFiService) => {
    expect(service).toBeTruthy();
  }));
});
