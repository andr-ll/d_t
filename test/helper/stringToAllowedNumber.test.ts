import { stringToAllowedNumber } from '../../src/helper/common';
import { Limit } from '../../src/models/Limit';

describe('Testing function "stringToAllowedNumber"', () => {
  test('Valid string input', () => {
    const num = stringToAllowedNumber('19', Limit.ROWS_COLS);
    expect(num).toBe(19);
  });

  test('Not valid string input', () => {
    const err = () => stringToAllowedNumber('19s', Limit.ROWS_COLS);
    expect(err).toThrow(`Could not convert '19s' to a number`);
  });

  test('Not valid string value (less than 1)', () => {
    const err = () => stringToAllowedNumber('-1', Limit.ROWS_COLS);
    expect(err).toThrow(
      `The number of rows/columns should be more than 1 and less than 182`,
    );
  });

  test('Valid string value but out of range 182', () => {
    const err = () => stringToAllowedNumber('183', Limit.ROWS_COLS);
    expect(err).toThrow(
      `The number of rows/columns should be more than 1 and less than 182`,
    );
  });

  test('Valid string value but out of range 1000', () => {
    const err = () => stringToAllowedNumber('1001', Limit.TEST);
    expect(err).toThrow(
      `The number of test cases should be more than 1 and less than 1000`,
    );
  });
});
