import { TestBed } from '@angular/core/testing';

import { HostelDetailService } from './hostel-detail.service';

describe('HostelDetailService', () => {
  let service: HostelDetailService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HostelDetailService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
