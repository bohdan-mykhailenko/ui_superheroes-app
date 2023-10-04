import createTheme from '@mui/material/styles/createTheme';

export const theme = createTheme({
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
      fontSize: '16px',
      fontWeight: '700',
      lineHeight: '150%',
      whiteSpace: 'pre-line',
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
