import { ThemeProvider } from '@emotion/react';
import { darkTheme } from '../lib/theme';

export const withTheme = (child: JSX.Element) => <ThemeProvider theme={darkTheme}>{child}</ThemeProvider>;
