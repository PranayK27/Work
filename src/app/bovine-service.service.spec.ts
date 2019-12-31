import { TestBed } from '@angular/core/testing';

import { BovineServiceService } from './bovine-service.service';

describe('BovineServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BovineServiceService = TestBed.get(BovineServiceService);
    expect(service).toBeTruthy();
  });
});
