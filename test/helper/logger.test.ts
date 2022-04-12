import { logger } from '../../src/helper/logger';

describe('Testing logger', () => {
  test('Info log', () => {
    const logSpy = jest.spyOn(logger, 'info');

    logger.info('Hello test!');

    expect(logSpy).toHaveBeenCalledWith('Hello test!');
  });

  test('Error log', () => {
    const logSpy = jest.spyOn(logger, 'err');

    logger.err('Error test!');

    expect(logSpy).toHaveBeenCalledWith('Error test!');
  });
});
