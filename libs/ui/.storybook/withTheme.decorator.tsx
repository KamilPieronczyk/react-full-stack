import type { ComponentStory } from '@storybook/react';
import { ThemeProvider } from 'styled-components';
import { darkTheme } from '../src/lib/theme';

export const withTheme = (Story: ComponentStory<any>) => (
  <ThemeProvider theme={darkTheme}>
    <Story />
  </ThemeProvider>
);
