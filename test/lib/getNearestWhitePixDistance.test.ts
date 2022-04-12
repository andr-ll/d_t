import { Rectangle } from '../../src/lib/rectangle';

describe('Testing getNearestWhitePixDistance method of Rectangle class', () => {
  function prepareData() {
    const rect = new Rectangle('2 3');
    rect['addRow']('001');
    rect['addRow']('001');
    return rect;
  }

  test('Pass valid data', () => {
    const rect = prepareData();
    const min = rect['getNearestWhitePixDistance']({ row: 0, col: 0 });

    expect(min).toBe(2);
  });

  test('Pass invalid data', () => {
    const rect = prepareData();
    const err = () => rect['getNearestWhitePixDistance']({ row: NaN, col: 0 });

    expect(err).toThrow('The NaN value was added as a number');
  });

  test('Pass field out of the rectangle range', () => {
    const rect = prepareData();
    const min = rect['getNearestWhitePixDistance']({ row: -3, col: -4 });

    expect(min).toBe(9);
  });
});
