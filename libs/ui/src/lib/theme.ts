import { createTheme } from '@mui/material';

export const darkTheme = createTheme({
  palette: {
    primary: {
      main: '#132d46',
    },
    secondary: {
      main: '#01c38d',
    },
    neutral: {
      main: '#fff',
      contrastText: '#333',
    },
    background: {
      default: '#191e29',
    },
    divider: '#696E79',
  },
  typography: {
    fontSize: 25.6,
  },
});
