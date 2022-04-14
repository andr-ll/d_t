import { InputHandler } from '../../../src/lib/inputHandler';

describe('Testing setRowsAndCols method of InputHandler class', () => {
  test('Create a InputHandler valid', () => {
    const inpt = new InputHandler('3 4');

    expect({ rows: inpt['rows'], cols: inpt['cols'] }).toEqual({
      rows: 3,
      cols: 4,
    });
  });

  test('Create with wrong data (empty string)', () => {
    const err = () => new InputHandler('');

    expect(err).toThrow('Rows and columns input is incorrect');
  });

  test('Create with wrong data (not a number)', () => {
    const err = () => new InputHandler('s2 6h');

    expect(err).toThrow(`Could not convert 's2' to a number`);
  });

  test('Create with wrong data (only one field)', () => {
    const err = () => new InputHandler('4');

    expect(err).toThrow(`Rows and columns input is incorrect`);
  });

  test('Create with wrong data (more than 182)', () => {
    const err = () => new InputHandler('183 900');

    expect(err).toThrow(
      `The number of rows/columns should be more than 1 and less than 182`,
    );
  });

  test('Create with wrong data (less than 1)', () => {
    const err = () => new InputHandler('-3 4');

    expect(err).toThrow(
      `The number of rows/columns should be more than 1 and less than 182`,
    );
  });
});
