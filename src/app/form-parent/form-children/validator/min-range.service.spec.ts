import { TestBed } from '@angular/core/testing';

import { MinRangeService } from './min-range.service';

describe('MinRangeService', () => {
  let service: MinRangeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MinRangeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
