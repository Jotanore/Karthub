import { TestBed } from '@angular/core/testing';

import { CircuitLayoutService } from './circuit-layout';

describe('CircuitLayoutService', () => {
  let service: CircuitLayoutService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CircuitLayoutService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
