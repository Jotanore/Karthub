import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CircuitListPage } from './circuit-list-page';

describe('CircuitListPage', () => {
  let component: CircuitListPage;
  let fixture: ComponentFixture<CircuitListPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CircuitListPage],
    }).compileComponents();

    fixture = TestBed.createComponent(CircuitListPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
