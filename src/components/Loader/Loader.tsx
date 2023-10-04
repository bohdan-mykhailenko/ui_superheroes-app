import React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import useTheme from '@mui/material/styles/useTheme';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { palette } from '@/theme/palette';

export const Loader: React.FC = () => {
  return (
    <Grid
      container
      alignItems="center"
      justifyContent="center"
      direction="column"
    >
      <Typography
        variant="h4"
        sx={{ color: palette.gray.main, marginBottom: '20px' }}
      >
        Loading data...
      </Typography>
      <CircularProgress sx={{ color: palette.gray.main }} />
    </Grid>
  );
};
