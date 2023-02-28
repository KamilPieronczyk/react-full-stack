import { createTheme } from '@mui/material';

export const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#448FF2',
    },
    secondary: {
      main: '#AB63F2',
    },
    warning: {
      main: '#F29D35',
    },
    success: {
      main: '#92F266',
    },
    divider: '#262626',
  },
  typography: {
    fontSize: 25.6,
  },
});
