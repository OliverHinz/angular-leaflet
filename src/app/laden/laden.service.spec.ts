import { TestBed } from '@angular/core/testing';

import { LadenService } from './laden.service';

describe('LadenService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LadenService = TestBed.get(LadenService);
    expect(service).toBeTruthy();
  });
});
