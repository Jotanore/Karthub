import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CircuitCard } from './circuit-card';

describe('CircuitCard', () => {
  let component: CircuitCard;
  let fixture: ComponentFixture<CircuitCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CircuitCard],
    }).compileComponents();

    fixture = TestBed.createComponent(CircuitCard);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
