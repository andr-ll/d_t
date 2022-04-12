import { color } from '../../src/helper/common';

describe('Testing color util', () => {
  test('Get valid result', () => {
    const green = color.green('This is green');
    const red = color.red('This is red');

    expect(green).toBe('\x1B[0;32mThis is green\x1B[0m');
    expect(red).toBe('\x1B[0;31mThis is red\x1B[0m');
  });
});
