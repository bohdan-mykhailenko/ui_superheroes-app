import Link from 'next/link';
import React from 'react';
import { SuperheroesList } from '@/components/SuperheroesList';
import { QueryProvider } from '@/providers/QueryProvider';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { palette } from '@/theme/palette';

interface pageProps {}

const Superheroes: React.FC<pageProps> = () => {
  return (
    <Grid
      container
      direction="column"
      sx={{
        alignItems: 'center',
        minHeight: '100vh',
        padding: '30px',
        backgroundColor: palette.blue.main,
      }}
    >
      <Typography variant="h1" color={palette.primary.main} marginBottom="20px">
        Superheroes
      </Typography>

      <QueryProvider>
        <SuperheroesList />
      </QueryProvider>
    </Grid>
  );
};

export default Superheroes;
