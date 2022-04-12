import { color } from './common';

class Logger {
  public info(msg: string): void {
    console.log(`${color.green('[ INFO ]: ')} ${msg}`);
  }

  public err(msg: string): void {
    console.log(`${color.red('[ ERR ]: ')} ${msg}`);
  }
}

export const logger = new Logger();
