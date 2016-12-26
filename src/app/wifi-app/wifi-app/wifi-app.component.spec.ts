/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { WifiAppComponent } from './wifi-app.component';

describe('WifiAppComponent', () => {
  let component: WifiAppComponent;
  let fixture: ComponentFixture<WifiAppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WifiAppComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WifiAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
