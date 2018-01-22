import { TestBed, inject } from '@angular/core/testing';

import { CashoutsService } from './cashouts.service';

describe('CashoutsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CashoutsService]
    });
  });

  it('should be created', inject([CashoutsService], (service: CashoutsService) => {
    expect(service).toBeTruthy();
  }));
});
