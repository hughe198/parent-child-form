import { TestBed } from '@angular/core/testing';

import { MaxRangeService } from './max-range.service';

describe('MaxRangeService', () => {
  let service: MaxRangeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MaxRangeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
