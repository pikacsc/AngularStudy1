/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Child9Component } from './child9.component';

describe('Child9Component', () => {
  let component: Child9Component;
  let fixture: ComponentFixture<Child9Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Child9Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Child9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
