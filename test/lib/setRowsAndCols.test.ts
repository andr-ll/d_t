import { Rectangle } from '../../src/lib/rectangle';

describe('Testing setRowsAndCols method of Rectangle class', () => {
  test('Creat a rectangle valid', () => {
    const rect = new Rectangle('3 4');

    expect({ rows: rect['rows'], cols: rect['cols'] }).toEqual({
      rows: 3,
      cols: 4,
    });
  });

  test('Create with wrong data (empty string)', () => {
    const err = () => new Rectangle('');

    expect(err).toThrow('Rows and columns input is incorrect');
  });

  test('Create with wrong data (not a number)', () => {
    const err = () => new Rectangle('s2 6h');

    expect(err).toThrow(`Could not convert 's2' to a number`);
  });

  test('Create with wrong data (only one field)', () => {
    const err = () => new Rectangle('4');

    expect(err).toThrow(`Rows and columns input is incorrect`);
  });

  test('Create with wrong data (more than 182)', () => {
    const err = () => new Rectangle('183 900');

    expect(err).toThrow(
      `The number of rows/columns should be more than 1 and less than 182`,
    );
  });

  test('Create with wrong data (less than 1)', () => {
    const err = () => new Rectangle('-3 4');

    expect(err).toThrow(
      `The number of rows/columns should be more than 1 and less than 182`,
    );
  });
});
