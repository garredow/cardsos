/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { VpnAppComponent } from './vpn-app.component';

describe('VpnAppComponent', () => {
  let component: VpnAppComponent;
  let fixture: ComponentFixture<VpnAppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VpnAppComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VpnAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
