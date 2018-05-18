import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuiltInPipeComponent } from './built-in-pipe.component';

describe('BuiltInPipeComponent', () => {
  let component: BuiltInPipeComponent;
  let fixture: ComponentFixture<BuiltInPipeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuiltInPipeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuiltInPipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
