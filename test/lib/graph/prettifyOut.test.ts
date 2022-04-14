import { Graph } from '../../../src/lib/graph';

describe('Testing prettifyOut method of Graph class', () => {
  test('Valid data input', () => {
    const graph = new Graph(5, 60);

    graph['maxDist'] = 60;
    const res_1 = graph['prettifyOut'](2);

    graph['maxDist'] = 120;
    const res_2 = graph['prettifyOut'](17);

    expect(res_1).toBe(' 2');
    expect(res_2).toBe(' 17');
  });

  test('Not valid data input', () => {
    const rect = new Graph(2, 3);

    const err = () => rect['prettifyOut'](NaN);

    expect(err).toThrow('The NaN value was added as a number');
  });
});
