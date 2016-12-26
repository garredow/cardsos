/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { EnyoGroupboxComponent } from './enyo-groupbox.component';

describe('EnyoGroupboxComponent', () => {
  let component: EnyoGroupboxComponent;
  let fixture: ComponentFixture<EnyoGroupboxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnyoGroupboxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnyoGroupboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
