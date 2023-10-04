import React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import useTheme from '@mui/material/styles/useTheme';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

export const Loader: React.FC = () => {
  const theme = useTheme();

  return (
    <Grid
      container
      alignItems="center"
      justifyContent="center"
      direction="column"
    >
      <Typography
        variant="h4"
        sx={{ color: theme.palette.gray.main, marginBottom: '20px' }}
      >
        Loading data...
      </Typography>
      <CircularProgress sx={{ color: theme.palette.gray.main }} />
    </Grid>
  );
};
