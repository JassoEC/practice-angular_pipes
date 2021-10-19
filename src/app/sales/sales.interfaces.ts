export enum Color {
  red = 1,
  black = 2,
  blue = 3,
}

export interface Hero {
  name: string;
  flying: boolean;
  color: Color;
}
