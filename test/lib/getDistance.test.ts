import { Rectangle } from '../../src/lib/rectangle';

describe('Testing getDistance method of Rectangle class', () => {
  test('Get valid distance', () => {
    const rect = new Rectangle('1 2');

    const distance = rect['getDistance'](
      { row: 1, col: 3 },
      { row: 4, col: 0 },
    );

    expect(distance).toBe(6);
  });

  test('Add NaN instead of a number', () => {
    const rect = new Rectangle('1 2');

    const err = () =>
      rect['getDistance']({ row: NaN, col: 3 }, { row: 4, col: 0 });

    expect(err).toThrow('The NaN value was added as a number');
  });
});
