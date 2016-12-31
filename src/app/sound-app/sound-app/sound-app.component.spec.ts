/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SoundAppComponent } from './sound-app.component';

describe('SoundAppComponent', () => {
  let component: SoundAppComponent;
  let fixture: ComponentFixture<SoundAppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SoundAppComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SoundAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
