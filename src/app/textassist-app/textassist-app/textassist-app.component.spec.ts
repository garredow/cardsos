/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TextassistAppComponent } from './textassist-app.component';

describe('TextassistAppComponent', () => {
  let component: TextassistAppComponent;
  let fixture: ComponentFixture<TextassistAppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TextassistAppComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TextassistAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
