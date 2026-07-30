import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RacingLineEditorPage } from './racing-line-editor-page';

describe('RacingLineEditorPage', () => {
  let component: RacingLineEditorPage;
  let fixture: ComponentFixture<RacingLineEditorPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RacingLineEditorPage],
    }).compileComponents();

    fixture = TestBed.createComponent(RacingLineEditorPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
