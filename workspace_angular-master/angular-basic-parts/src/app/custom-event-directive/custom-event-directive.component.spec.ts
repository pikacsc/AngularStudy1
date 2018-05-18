import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomEventDirectiveComponent } from './custom-event-directive.component';

describe('CustomEventDirectiveComponent', () => {
  let component: CustomEventDirectiveComponent;
  let fixture: ComponentFixture<CustomEventDirectiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomEventDirectiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomEventDirectiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
