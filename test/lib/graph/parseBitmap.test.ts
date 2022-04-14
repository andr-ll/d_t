import { Graph } from '../../../src/lib/graph';

describe('Testing parseBitmap method of Graph class', () => {
  test('Add valid bitmap', () => {
    const graph = new Graph(1, 4);

    graph.parseBitmap('1010');

    const valid = {
      queue: [1, 3],
      dist: new Map<number, number>().set(1, 0).set(3, 0),
      visit: new Set<number>().add(1).add(3),
    };

    expect({
      queue: graph['queue'],
      dist: graph['dist'],
      visit: graph['visit'],
    }).toEqual(valid);
  });

  test('Add not allowed characters to bitmap', () => {
    const graph = new Graph(3, 4);
    const err = () => graph.parseBitmap('0b10');

    expect(err).toThrow(`Could not convert 'b' to a number`);
  });

  test('Add not allowed numbers to bitmap', () => {
    const graph = new Graph(3, 4);
    const err = () => graph.parseBitmap('0012');

    expect(err).toThrow(`Bitmap string contains not allowed number '2'`);
  });
});
