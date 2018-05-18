/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Child5Component } from './child5.component';

describe('Child5Component', () => {
  let component: Child5Component;
  let fixture: ComponentFixture<Child5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Child5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Child5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
