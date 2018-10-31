import {inject, TestBed} from '@angular/core/testing';

import {BaseService} from './base.service';
import {HttpClientModule} from '@angular/common/http';

describe('BaseService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BaseService],
      imports: [HttpClientModule]
    });
  });

  it('should be created', inject([BaseService], (service: BaseService) => {
    expect(service).toBeTruthy();
  }));
});
