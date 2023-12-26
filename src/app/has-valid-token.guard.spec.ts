import { TestBed } from '@angular/core/testing';

import { HasValidTokenGuard } from './has-valid-token.guard';

describe('HasValidTokenGuard', () => {
  let guard: HasValidTokenGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(HasValidTokenGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
