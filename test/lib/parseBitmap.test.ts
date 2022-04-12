import { Rectangle } from '../../src/lib/rectangle';

describe('Testing parseBitmap method of Rectangle class', () => {
  test('Add valid bitmap', () => {
    const rect = new Rectangle('1 4');

    rect['parseBitmap']('1010');

    expect(rect['data'][0]).toEqual([1, 0, 1, 0]);
    expect(rect['whiteFieldIds']).toEqual([
      { row: 0, col: 0 },
      { row: 0, col: 2 },
    ]);
  });

  test('Add not allowed characters to bitmap', () => {
    const rect = new Rectangle('3 4');
    const err = () => rect['parseBitmap']('0b10');

    expect(err).toThrow(`Could not convert 'b' to a number`);
  });

  test('Add not allowed numbers to bitmap', () => {
    const rect = new Rectangle('3 4');
    const err = () => rect['parseBitmap']('0012');

    expect(err).toThrow(`Bitmap string contains not allowed number '2'`);
  });
});
