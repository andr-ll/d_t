import { Rectangle } from '../../src/lib/rectangle';

describe('Testing addRow method of Rectangle class', () => {
  test('Add valid data for the row', () => {
    const rect = new Rectangle('3 4');
    rect.addRow('0010');

    expect({
      rows: rect['rows'],
      cols: rect['cols'],
      data: rect['data'][0],
      currentRow: rect['currentRow'],
    }).toEqual({
      rows: 3,
      cols: 4,
      data: [0, 0, 1, 0],
      currentRow: 1,
    });
  });

  test('Add longer bitmap than allowed', () => {
    const rect = new Rectangle('3 4');
    const err = () => rect.addRow('00100');

    expect(err).toThrow('Bitmap string is not same length as columns value');
  });

  test('Add valid data and get result', () => {
    const rect = new Rectangle('3 4');
    rect.addRow('0010');
    rect.addRow('0100');
    rect.addRow('1000');
    const result = rect.addRow('');

    expect(result).toBe('2 1 0 1\n1 0 1 2\n0 1 2 3\n');
  });

  test('Add invalid data and get an error', () => {
    const rect = new Rectangle('3 4');
    rect.addRow('0010');
    rect.addRow('0100');
    rect.addRow('1000');
    const err = () => rect.addRow('0010');

    expect(err).toThrow('Added more rows than expected');
  });
});
