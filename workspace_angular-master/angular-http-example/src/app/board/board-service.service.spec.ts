import { TestBed, inject } from '@angular/core/testing';

import { BoardServiceService } from './board-service.service';

describe('BoardServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BoardServiceService]
    });
  });

  it('should be created', inject([BoardServiceService], (service: BoardServiceService) => {
    expect(service).toBeTruthy();
  }));
});
