import { Graph } from '../../../src/lib/graph';

describe('Testing getResult method of Graph class', () => {
  test('Get valid result', () => {
    const graph = new Graph(2, 5);
    graph.parseBitmap('10001');
    graph.parseBitmap('01000');

    const result = graph.getResult();

    expect(result).toBe('0 1 2 1 0 \n1 0 1 2 1 \n');
  });

  test('Add invalid data', () => {
    const graph = new Graph(2, 5);
    graph.parseBitmap('00000');
    graph.parseBitmap('00000');

    const err = () => graph.getResult();

    expect(err).toThrow('At least one pixel has to be white');
  });
});
