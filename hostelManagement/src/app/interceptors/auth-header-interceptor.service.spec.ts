import { TestBed } from '@angular/core/testing';

import { AuthHeaderInterceptorService } from './auth-header-interceptor.service';

describe('AuthHeaderInterceptorService', () => {
  let service: AuthHeaderInterceptorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthHeaderInterceptorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
