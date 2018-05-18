import { TestBed, inject } from '@angular/core/testing';

import { KpopHttpService } from './kpop-http.service';

describe('KpopHttpService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [KpopHttpService]
    });
  });

  it('should be created', inject([KpopHttpService], (service: KpopHttpService) => {
    expect(service).toBeTruthy();
  }));
});
