/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ExhibitionAppComponent } from './exhibition-app.component';

describe('ExhibitionAppComponent', () => {
  let component: ExhibitionAppComponent;
  let fixture: ComponentFixture<ExhibitionAppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExhibitionAppComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExhibitionAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
