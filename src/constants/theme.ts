import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#2196f3',
      light: '#4dabf5',
      dark: '#1769aa',
      contrastText: '#fff',
    },
    secondary: {
      main: '#ed8077',
      contrastText: '#fff',
    },
    error: {
      main: '#f44336',
    },
  },
});

export default theme;
