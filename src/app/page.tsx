import React from 'react';
import { QueryProvider } from '@/providers/QueryProvider';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { StoreProvider } from '@/redux/provider';
import { SuperheroesContent } from '@/components/SuperheroesContent';
import { CreatePanel } from '@/components/CreatePanel';

const SuperheroesPage: React.FC = () => {
  return (
    <Grid
      container
      direction="column"
      sx={{
        alignItems: 'center',
        minHeight: '100vh',
        padding: '30px',
      }}
    >
      <Typography variant="h1" color="primary" marginBottom="20px">
        Superheroes
      </Typography>

      <StoreProvider>
        <QueryProvider>
          <CreatePanel />

          <SuperheroesContent />
        </QueryProvider>
      </StoreProvider>
    </Grid>
  );
};

export default SuperheroesPage;
