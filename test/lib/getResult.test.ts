import { Rectangle } from '../../src/lib/rectangle';

describe('Testing getResult method of Rectangle class', () => {
  test('Get valid result', () => {
    const rect = new Rectangle('2 5');
    rect.addRow('10001');
    rect.addRow('01000');

    const result = rect['getResult']();

    expect(result).toBe('0 1 2 1 0\n1 0 1 2 1\n');
  });

  test('Add invalid data', () => {
    const rect = new Rectangle('2 5');
    rect.addRow('00000');
    rect.addRow('00000');

    const err = () => rect['getResult']();

    expect(err).toThrow('At least one pixel has to be white');
  });
});
