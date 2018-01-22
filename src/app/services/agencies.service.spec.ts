import { TestBed, inject } from '@angular/core/testing';

import { AgenciesService } from './agencies.service';

describe('AgenciesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AgenciesService]
    });
  });

  it('should be created', inject([AgenciesService], (service: AgenciesService) => {
    expect(service).toBeTruthy();
  }));
});
