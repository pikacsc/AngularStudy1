/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Child7Component } from './child7.component';

describe('Child7Component', () => {
  let component: Child7Component;
  let fixture: ComponentFixture<Child7Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Child7Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Child7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
