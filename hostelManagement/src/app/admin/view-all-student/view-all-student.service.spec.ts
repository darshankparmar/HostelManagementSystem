import { TestBed } from '@angular/core/testing';

import { ViewAllStudentService } from './view-all-student.service';

describe('ViewAllStudentService', () => {
  let service: ViewAllStudentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ViewAllStudentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
