import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OnewayStatementComponent } from './oneway-statement.component';

describe('OnewayStatementComponent', () => {
  let component: OnewayStatementComponent;
  let fixture: ComponentFixture<OnewayStatementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OnewayStatementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OnewayStatementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
