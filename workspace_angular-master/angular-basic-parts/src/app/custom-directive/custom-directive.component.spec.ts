import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomDirectiveComponent } from './custom-directive.component';

describe('CustomDirectiveComponent', () => {
  let component: CustomDirectiveComponent;
  let fixture: ComponentFixture<CustomDirectiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomDirectiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomDirectiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
