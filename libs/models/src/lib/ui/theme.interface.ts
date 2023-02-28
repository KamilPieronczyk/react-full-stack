export interface ITheme {
  colors: {
    primary: string;
    secondary: string;
    success: string;
    warning: string;
    dark: string;
    light: string;
  };
  palette: {
    mode: string;
    primary: {
      main: string;
    };
    secondary: {
      main: string;
    };
    warning: {
      main: string;
    };
    success: {
      main: string;
    };
    divider: string;
  };
  typography: {
    fontSize: number;
  };
}
