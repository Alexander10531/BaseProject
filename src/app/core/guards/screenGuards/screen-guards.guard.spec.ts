import { TestBed } from '@angular/core/testing';

import { ScreenGuardsGuard } from './screen-guards.guard';

describe('ScreenGuardsGuard', () => {
  let guard: ScreenGuardsGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(ScreenGuardsGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
