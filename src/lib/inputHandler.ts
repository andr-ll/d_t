import { stringToAllowedNumber } from '../helper/common';
import { Limit } from '../models/Limit';
import { Graph } from './graph';

export class InputHandler {
  private rows: number;
  private cols: number;
  private currRow = 1;
  private graph: Graph;

  constructor(rowsAndCols: string) {
    this.setRowsAndCols(rowsAndCols);
  }

  public addRow(val: string): string | undefined {
    const bitmap = val.trim();

    if (this.currRow > this.rows) {
      if (bitmap !== '') {
        throw new Error('Added more rows than expected');
      }

      return this.graph.getResult();
    }

    if (bitmap.length !== this.cols) {
      throw new Error('Bitmap string is not same length as columns value');
    }

    this.graph.parseBitmap(bitmap);
    this.currRow++;
    return;
  }

  private setRowsAndCols(val: string): void {
    const rowsAndClos = val.trim();
    const arr = rowsAndClos.split(' ');

    if (arr[0] == null || arr[1] == null) {
      throw new Error('Rows and columns input is incorrect');
    }

    this.rows = stringToAllowedNumber(arr[0], Limit.ROWS_COLS);
    this.cols = stringToAllowedNumber(arr[1], Limit.ROWS_COLS);
    this.graph = new Graph(this.rows, this.cols);
  }
}
