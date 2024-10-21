import { TestBed } from '@angular/core/testing';

import { FlipkartApiService } from './flipkart-api.service';

describe('FlipkartApiService', () => {
  let service: FlipkartApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FlipkartApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
