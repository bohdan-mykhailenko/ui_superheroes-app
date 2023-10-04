import createTheme from '@mui/material/styles/createTheme';

export const theme = createTheme({
  typography: {
    fontFamily: 'Nunito',
    fontWeightBold: 700,
    h1: {
      fontSize: '24px',
      fontWeight: 700,
      lineHeight: '150%',
    },
    h2: {
      fontSize: '22px',
      fontWeight: 800,
      lineHeight: '150%',
      textAlign: 'center',
    },
    h3: {
      fontSize: '20px',
      fontWeight: 700,
      textAlign: 'center',
      lineHeight: '150%',
    },
    h4: {
      fontSize: '18px',
      fontWeight: 700,
      lineHeight: '150%',
      textAlign: 'center',
    },
    body1: {
      fontSize: '16px',
      fontWeight: '700',
      lineHeight: '150%',
      whiteSpace: 'pre-line',
    },
  },

  palette: {
    accent: {
      main: '#FEE2C5',
    },
    primary: {
      main: '#000A10',
      light: '#aaa',
    },
    secondary: {
      main: '#F9F9F9',
    },
    blue: {
      main: '#D8E1ED',
    },
    black: {
      main: '#000A10',
    },
    gray: {
      main: '#ACADAD',
      dark: '#686868',
    },
    white: {
      main: '#FAFDFE',
    },
  },

  breakpoints: {
    values: {
      xs: 450,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
});
