import { createTheme } from '@mui/material';

const theme = createTheme({
  shape: {
    borderRadius: 0,
  },
  palette: {
    background: {
      default: '#f6f6f6',
    },
    primary: {
      main: '#252525',
      dark: '#151515',
      light: '#353535',
      contrastText: '#fafafa',
    },
    secondary: {
      main: '#ff6f00',
      light: '#ff8221',
      dark: '#e36300',
      contrastText: '#fafafa',
    },
    error: {
      main: '#d32f2f',
      light: '#ef5350',
      dark: '#c62828',
      contrastText: '#fafafa',
    },
    success: {
      main: '#2e7d32',
      light: '#4caf50',
      dark: '#1b5e20',
      contrastText: '#fafafa',
    },
  },
  mixins: {
    drawer: {
      width: 240,
    },
  },
  typography: {
    fontFamily: '\'Montserrat\', sans-serif',
  },
});

export default theme;
