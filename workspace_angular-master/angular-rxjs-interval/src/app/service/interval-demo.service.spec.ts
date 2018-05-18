import { TestBed, inject } from '@angular/core/testing';

import { IntervalDemoService } from './interval-demo.service';

describe('IntervalDemoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [IntervalDemoService]
    });
  });

  it('should be created', inject([IntervalDemoService], (service: IntervalDemoService) => {
    expect(service).toBeTruthy();
  }));
});
