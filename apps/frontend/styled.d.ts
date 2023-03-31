/* eslint-disable @typescript-eslint/no-empty-interface */
import '@emotion/react';
import { CustomColorsPaletteTypeGenerator, ICustomColorsPalette, ITheme } from '@react-full-stack/models';
import 'styled-components';

declare module 'styled-components' {
  interface DefaultTheme extends ITheme {}
}

declare module '@emotion/react' {
  export interface Theme extends ITheme {}
}

declare module '@mui/material/styles' {
  interface Palette extends CustomColorsPaletteTypeGenerator<Palette['primary']> {}

  interface PaletteOptions extends CustomColorsPaletteTypeGenerator<PaletteOptions['primary']> {}
}

declare module '@mui/material/Button' {
  interface ButtonPropsColorOverrides extends ICustomColorsPalette {}
}

declare module '@mui/material/IconButton' {
  interface IconButtonPropsColorOverrides extends ICustomColorsPalette {}
}

declare module '@mui/material/LinearProgress' {
  interface LinearProgressPropsColorOverrides extends ICustomColorsPalette {}
}
