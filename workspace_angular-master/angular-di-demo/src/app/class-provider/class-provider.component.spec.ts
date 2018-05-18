import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassProviderComponent } from './class-provider.component';

describe('ClassProviderComponent', () => {
  let component: ClassProviderComponent;
  let fixture: ComponentFixture<ClassProviderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClassProviderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClassProviderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
