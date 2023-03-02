import { ThemeProvider } from '@emotion/react';
import type { ComponentStory } from '@storybook/react';
import { darkTheme } from '../src/lib/theme';

export const withTheme = (Story: ComponentStory<any>) => (
  <ThemeProvider theme={darkTheme}>
    <Story />
  </ThemeProvider>
);
