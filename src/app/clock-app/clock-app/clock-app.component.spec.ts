/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ClockAppComponent } from './clock-app.component';

describe('ClockAppComponent', () => {
  let component: ClockAppComponent;
  let fixture: ComponentFixture<ClockAppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClockAppComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClockAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
