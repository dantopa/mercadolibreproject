import { TestBed, inject } from '@angular/core/testing';

import { MLAPIService } from './mlapi.service';

describe('MLAPIService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MLAPIService]
    });
  });

  it('should be created', inject([MLAPIService], (service: MLAPIService) => {
    expect(service).toBeTruthy();
  }));
});
