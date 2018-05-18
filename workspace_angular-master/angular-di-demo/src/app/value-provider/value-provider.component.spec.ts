import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ValueProviderComponent } from './value-provider.component';

describe('ValueProviderComponent', () => {
  let component: ValueProviderComponent;
  let fixture: ComponentFixture<ValueProviderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ValueProviderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ValueProviderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
