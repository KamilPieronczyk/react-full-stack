export interface ICustomColorsPalette extends ISpecialColorsPalette {
  primary: true;
  secondary: true;
  neutral: true;
}

export type CustomColors = keyof ICustomColorsPalette;

export interface ISpecialColorsPalette {
  blue: true;
  orange: true;
  purple: true;
  green: true;
}

export type SpecialColors = keyof ISpecialColorsPalette;

export type CustomColorsPaletteTypeGenerator<PaletteType> = {
  [Property in keyof ICustomColorsPalette]: PaletteType;
};
