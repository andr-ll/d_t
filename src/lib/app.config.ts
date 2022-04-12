import { color } from '../helper/common';
import { logger } from '../helper/logger';

export function globalCatch(): void {
  process.on('uncaughtException', (err) => {
    logger.err(err.message);
    console.log(color.green('\nPlease restart the app'));
    process.exit(1);
  });
}

export function clearScreen(): void {
  console.log('\x1B[2J');
}
