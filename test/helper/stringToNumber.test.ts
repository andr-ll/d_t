import { stringToNumber } from '../../src/helper/common';

describe('Testing function "stringToNumber"', () => {
  test('Valid string-number input', () => {
    const numb = stringToNumber('11');
    expect(numb).toBe(11);
  });

  test('Not valid string input (empty string)', () => {
    const err = () => stringToNumber('');
    expect(err).toThrow(`Could not convert an empty string to a number`);
  });

  test('Not valid string input (not a number)', () => {
    const err = () => stringToNumber('1px');
    expect(err).toThrow(`Could not convert '1px' to a number`);
  });
});
