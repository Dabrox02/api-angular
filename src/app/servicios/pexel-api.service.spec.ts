import { TestBed } from '@angular/core/testing';

import { PexelApiService } from './pexel-api.service';

describe('PexelApiService', () => {
  let service: PexelApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PexelApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
