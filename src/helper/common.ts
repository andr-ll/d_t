import { Color } from '../models/Color';
import { LimitName, Limit } from '../models/Limit';

export function stringToAllowedNumber(inpt: string, limit: Limit): number {
  const numb = stringToNumber(inpt);
  const name = LimitName[limit];

  if (numb < 1 || numb > limit) {
    throw new Error(
      `The number of ${name} should be more than 1 and less than ${limit}`,
    );
  }

  return numb;
}

export function stringToNumber(val: string): number {
  if (val.trim() === '') {
    throw new Error(`Could not convert an empty string to a number`);
  }

  const numb = Number(val);
  if (Number.isNaN(numb)) {
    throw new Error(`Could not convert '${val}' to a number`);
  }

  return numb;
}

export const color: Color = {
  green: (msg: string) => {
    return `\x1B[0;32m${msg}\x1B[0m`;
  },
  red: (msg: string) => {
    return `\x1B[0;31m${msg}\x1B[0m`;
  },
};
