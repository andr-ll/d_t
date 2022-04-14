import { stringToNumber } from '../helper/common';
import { Limit } from '../models/Limit';

export class Graph {
  private nodes: Record<number, number[]> = {};
  private dist = new Map<number, number>();
  private visit = new Set<number>();
  private queue: number[] = [];

  private node = 1;
  private maxDist = 0;

  constructor(private row: number, private col: number) {
    this.createGraph();
  }

  public getResult(): string {
    if (this.visit.size === 0) {
      throw new Error('At least one pixel has to be white');
    }

    this.bfs();
    return this.distToString();
  }

  public parseBitmap(bitmap: string): void {
    for (let i = 0; i < bitmap.length; i++) {
      const num = stringToNumber(bitmap[i]);
      if (num !== 0 && num !== 1) {
        throw new Error(`Bitmap string contains not allowed number '${num}'`);
      }

      if (num === 1) {
        this.dist.set(this.node, 0);
        this.visit.add(this.node);
        this.queue.push(this.node);
      }

      this.node++;
    }
  }

  private createGraph() {
    let n = 1;

    while (n <= this.col * this.row) {
      this.nodes[n] = [];
      n++;
    }

    n = 0;
    for (let i = 1; i <= this.row; i++) {
      for (let j = 1; j <= this.col; j++) {
        n++;

        if (i === this.row && j === this.col) {
          break;
        }

        if (i === this.row && j !== this.col) {
          this.addNodeNeighbors(n, 1);
          continue;
        }

        if (j === this.col) {
          this.addNodeNeighbors(n, this.col);
          continue;
        }

        this.addNodeNeighbors(n, 1);
        this.addNodeNeighbors(n, this.col);
      }
    }
  }

  private addNodeNeighbors(curr: number, neighbor: number): void {
    this.nodes[curr].push(curr + neighbor);
    this.nodes[curr + neighbor].push(curr);
  }

  private bfs(): void {
    while (true) {
      const currId = this.queue.shift();
      if (currId == null) {
        break;
      }

      const neighbors = this.nodes[currId];

      for (const neighId of neighbors) {
        if (this.visit.has(neighId)) {
          continue;
        }

        const dist = Math.min(
          this.getMinDist(neighId),
          this.getMinDist(currId) + 1,
        );

        this.dist.set(neighId, dist);
        this.maxDist = Math.max(dist, this.maxDist);
        this.queue.push(neighId);
        this.visit.add(neighId);
      }
    }
  }

  private getMinDist(node: number): number {
    return this.dist.get(node) ?? Limit.ROWS_COLS;
  }

  private distToString(): string {
    let res = '';
    for (let i = 1; i <= this.dist.size; i++) {
      const numb = this.dist.get(i);
      if (numb != null) {
        res += this.prettifyOut(numb) + ' ';
      }

      if (i % this.col === 0) {
        res += '\n';
      }
    }

    return res;
  }

  private prettifyOut(numb: number): string {
    if (Number.isNaN(numb)) {
      throw new Error('The NaN value was added as a number');
    }

    const str = String(numb);
    const maxLen = String(this.maxDist).length;

    let add = '';
    for (let i = str.length; i < maxLen; i++) {
      add += ' ';
    }

    return add + str;
  }
}
