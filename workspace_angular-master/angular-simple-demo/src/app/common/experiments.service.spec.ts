import { TestBed, inject } from '@angular/core/testing';

import { ExperimentsService } from './experiments.service';

describe('ExperimentsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ExperimentsService]
    });
  });

  it('should be created', inject([ExperimentsService], (service: ExperimentsService) => {
    expect(service).toBeTruthy();
  }));
});
