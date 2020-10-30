import { uselessNegate } from '../index';

describe(uselessNegate, () => {
  test('should return false if true is passed in', () => {
    expect(uselessNegate(true)).toBeFalsy();
  });

  test('should return true if false is passed in', () => {
    expect(uselessNegate(false)).toBeTruthy();
  });
});
