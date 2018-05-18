import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FactoryProviderComponent } from './factory-provider.component';

describe('FactoryProviderComponent', () => {
  let component: FactoryProviderComponent;
  let fixture: ComponentFixture<FactoryProviderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FactoryProviderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FactoryProviderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
