import { TestBed } from '@angular/core/testing';

import { CircuitLayout } from './circuit-layout';

describe('CircuitLayout', () => {
  let service: CircuitLayout;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CircuitLayout);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
