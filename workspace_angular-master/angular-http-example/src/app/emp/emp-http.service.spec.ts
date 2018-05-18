import { TestBed, inject } from '@angular/core/testing';

import { EmpHttpService } from './emp-http.service';

describe('EmpHttpService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EmpHttpService]
    });
  });

  it('should be created', inject([EmpHttpService], (service: EmpHttpService) => {
    expect(service).toBeTruthy();
  }));
});
