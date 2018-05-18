import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrusturlComponent } from './trusturl.component';

describe('TrusturlComponent', () => {
  let component: TrusturlComponent;
  let fixture: ComponentFixture<TrusturlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrusturlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrusturlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
