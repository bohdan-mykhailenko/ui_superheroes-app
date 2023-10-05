'use client';

import { DetailedSuperhero } from '@/components/DetailedSuperhero';
import { StoreProvider } from '@/redux/provider';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

function SuperheroDetailPage() {
  return (
    <Grid
      sx={{
        padding: '20px 0',
      }}
    >
      <Typography variant="h2" marginBottom="20px">
        Super Hero Page
      </Typography>

      <StoreProvider>
        <DetailedSuperhero />
      </StoreProvider>
    </Grid>
  );
}

export default SuperheroDetailPage;
