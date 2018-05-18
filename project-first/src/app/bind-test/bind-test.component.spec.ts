import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BindTestComponent } from './bind-test.component';

describe('BindTestComponent', () => {
  let component: BindTestComponent;
  let fixture: ComponentFixture<BindTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BindTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BindTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
