/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Child8Component } from './child8.component';

describe('Child8Component', () => {
  let component: Child8Component;
  let fixture: ComponentFixture<Child8Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Child8Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Child8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
