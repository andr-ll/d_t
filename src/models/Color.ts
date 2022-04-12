const colorValue = ['green', 'red'] as const;

type ColorValue = typeof colorValue[number];

export type Color = {
  [key in ColorValue]: (msg: string) => string;
};
