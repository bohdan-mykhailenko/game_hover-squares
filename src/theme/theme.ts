import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  typography: {
    fontFamily: 'Poppins',
    fontWeightBold: 700,
    h1: {
      fontSize: '27px',
      letterSpacing: '0.7px',
      fontWeight: 700,
      lineHeight: '150%',
    },
    h3: {
      fontSize: '20px',
      fontWeight: 700,
      textAlign: 'center',
      lineHeight: '150%',
    },
    h4: {
      fontSize: '16px',
      fontWeight: 700,
      lineHeight: '150%',
    },
  },

  palette: {
    secondary: {
      main: '#333',
      dark: '#686868',
      light: '#fff',
    },
    warning: {
      main: '#c15e08',
      dark: '#72531e',
      light: '#efe5dc',
    },
  },

  breakpoints: {
    values: {
      xs: 450,
      sm: 550,
      md: 875,
      lg: 1150,
      xl: 1200,
    },
  },
});
