/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ContactResolveGuardService } from './contact-resolve-guard.service';

describe('ContactResolveGuardService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ContactResolveGuardService]
    });
  });

  it('should ...', inject([ContactResolveGuardService], (service: ContactResolveGuardService) => {
    expect(service).toBeTruthy();
  }));
});
