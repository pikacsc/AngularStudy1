import { TestBed, inject } from '@angular/core/testing';

import { DataSecService } from './data-sec.service';

describe('DataSecService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DataSecService]
    });
  });

  it('should be created', inject([DataSecService], (service: DataSecService) => {
    expect(service).toBeTruthy();
  }));
});
