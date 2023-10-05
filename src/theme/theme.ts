import createTheme from '@mui/material/styles/createTheme';

export const theme = createTheme({
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          height: '40px',
        },
      },
    },
  },
  typography: {
    fontFamily: 'Nunito',
    fontWeightBold: 700,

    h1: {
      fontSize: '48px',
      fontWeight: 700,
      lineHeight: '150%',
    },
    h2: {
      fontSize: '24px',
      fontWeight: 800,
      lineHeight: '150%',
      textAlign: 'center',
    },
    h3: {
      fontSize: '22px',
      fontWeight: 700,
      lineHeight: '150%',
    },
    h4: {
      fontSize: '18px',
      fontWeight: 700,
      lineHeight: '150%',
    },
    body1: {
      margin: '2px 0',
      fontSize: '12px',
      fontWeight: 700,
      lineHeight: '150%',
      whiteSpace: 'pre-line',
    },
    body2: {
      margin: '2px 0',
      fontSize: '10px',

      lineHeight: '150%',
      whiteSpace: 'pre-line',
    },
  },

  // breakpoints: {
  //   values: {
  //     xs: 450,
  //     sm: 600,
  //     md: 900,
  //     lg: 1200,
  //     xl: 1536,
  //   },
  // },

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
});
