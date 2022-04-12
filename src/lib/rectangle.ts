import { stringToNumber, stringToAllowedNumber } from '../helper/common';
import { Pixel } from '../models/Pixel';
import { Limit } from '../models/Limit';

export class Rectangle {
  private rows: number;
  private cols: number;
  private data: number[][] = [];
  private whiteFieldIds: Pixel[] = [];
  private currentRow = 0;

  constructor(rowsAndCols: string) {
    this.setRowsAndCols(rowsAndCols);
  }

  public addRow(val: string): string | undefined {
    const bitmap = val.trim();

    if (this.data.length === this.rows) {
      if (bitmap !== '') {
        throw new Error('Added more rows than expected');
      }

      return this.getResult();
    }

    if (bitmap.length !== this.cols) {
      throw new Error('Bitmap string is not same length as columns value');
    }

    this.parseBitmap(bitmap);

    return;
  }

  private parseBitmap(bitmap: string): void {
    const result: number[] = [];

    for (let col = 0; col < bitmap.length; col++) {
      const num = stringToNumber(bitmap[col]);
      if (num !== 0 && num !== 1) {
        throw new Error(`Bitmap string contains not allowed number '${num}'`);
      }

      if (num === 1) {
        this.whiteFieldIds.push({ row: this.currentRow, col });
      }

      result.push(num);
    }

    this.data.push(result);
    this.currentRow++;
  }

  private setRowsAndCols(val: string): void {
    const rowsAndClos = val.trim();
    const arr = rowsAndClos.split(' ');

    if (arr[0] == null || arr[1] == null) {
      throw new Error('Rows and columns input is incorrect');
    }

    this.rows = stringToAllowedNumber(arr[0], Limit.ROWS_COLS);
    this.cols = stringToAllowedNumber(arr[1], Limit.ROWS_COLS);
  }

  private getResult(): string {
    if (this.whiteFieldIds.length === 0) {
      throw new Error('At least one pixel has to be white');
    }

    const res: string[] = [];

    for (let row = 0; row < this.rows; row++) {
      const newRow: string[] = [];

      for (let col = 0; col < this.cols; col++) {
        if (this.data[row][col] === 1) {
          newRow[col] = this.prettifyOut(0);
          continue;
        }

        const min = this.getNearestWhitePixDistance({ row, col });
        newRow[col] = this.prettifyOut(min);
      }

      res.push(newRow.join(' '));
    }

    return res.join('\n') + '\n';
  }

  private getNearestWhitePixDistance(pix1: Pixel): number {
    let min = Limit.ROWS_COLS;
    for (const pix2 of this.whiteFieldIds) {
      const res = this.getDistance(pix1, pix2);
      if (res === 1) {
        return 1;
      }

      if (res < min) {
        min = res;
      }
    }

    return min;
  }

  private getDistance(pix1: Pixel, pix2: Pixel): number {
    const dist = Math.abs(pix1.row - pix2.row) + Math.abs(pix1.col - pix2.col);
    if (Number.isNaN(dist)) {
      throw new Error('The NaN value was added as a number');
    }

    return dist;
  }

  private prettifyOut(numb: number): string {
    if (Number.isNaN(numb)) {
      throw new Error('The NaN value was added as a number');
    }

    const str = String(numb);
    const max = this.cols > this.rows ? this.cols : this.rows;

    let add = '';
    for (let i = str.length; i < String(max).length; i++) {
      add += ' ';
    }

    return add + str;
  }
}
