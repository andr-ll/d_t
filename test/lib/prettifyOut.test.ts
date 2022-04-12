import { Rectangle } from '../../src/lib/rectangle';

describe('Testing prettifyOut method of Rectangle class', () => {
  test('Valid data input', () => {
    const rect = new Rectangle('5 60');

    const res_1 = rect['prettifyOut'](2);

    rect['rows'] = 120;
    const res_2 = rect['prettifyOut'](17);

    expect(res_1).toBe(' 2');
    expect(res_2).toBe(' 17');
  });

  test('Not valid data input', () => {
    const rect = new Rectangle('5 60');

    const err = () => rect['prettifyOut'](NaN);

    expect(err).toThrow('The NaN value was added as a number');
  });
});
