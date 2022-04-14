import { InputHandler } from '../../../src/lib/inputHandler';

describe('Testing addRow method of InputHandler class', () => {
  test('Add valid data for the row', () => {
    const input = new InputHandler('3 4');
    input.addRow('0010');

    expect({
      rows: input['rows'],
      cols: input['cols'],
      currRow: 2,
    }).toEqual({
      rows: 3,
      cols: 4,
      currRow: 2,
    });
  });

  test('Add longer bitmap than allowed', () => {
    const input = new InputHandler('3 4');
    const err = () => input.addRow('00100');

    expect(err).toThrow('Bitmap string is not same length as columns value');
  });

  test('Add valid data and get result', () => {
    const input = new InputHandler('3 4');
    input.addRow('0010');
    input.addRow('0100');
    input.addRow('1000');
    const result = input.addRow('');

    expect(result).toBe('2 1 0 1 \n1 0 1 2 \n0 1 2 3 \n');
  });

  test('Add invalid data and get an error', () => {
    const input = new InputHandler('3 4');
    input.addRow('0010');
    input.addRow('0100');
    input.addRow('1000');
    const err = () => input.addRow('0010');

    expect(err).toThrow('Added more rows than expected');
  });
});
