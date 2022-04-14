import * as readline from 'readline';
import { stringToAllowedNumber } from '../helper/common';
import { logger } from '../helper/logger';
import { Limit } from '../models/Limit';
import { clearScreen, globalCatch } from './app.config';
import { InputHandler } from './inputHandler';

export class App {
  private amount: number;
  private done: string[] = [];
  private current: InputHandler | null = null;

  private rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  public start(): void {
    globalCatch();
    readline.cursorTo(process.stdout, 0, 0);
    clearScreen();
    this.listener();
  }

  private listener(): void {
    this.rl.on('line', (str: string) => {
      if (this.amount == null) {
        this.amount = stringToAllowedNumber(str, Limit.TEST);
        return;
      }

      this.readData(str);
    });
  }

  private readData(val: string): void {
    if (this.current == null) {
      this.current = new InputHandler(val);
      return;
    }

    const result = this.current.addRow(val);

    if (result) {
      this.done.push(result);
      this.current = null;

      if (this.amount === this.done.length) {
        console.log(this.done.join('\n'));
        logger.info('Passed successfully');

        this.rl.close();
        process.exit(0);
      }
    }
  }
}
