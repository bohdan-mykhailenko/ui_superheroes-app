'use client';

import { useRouter } from 'next/navigation';
import { Superhero } from '@/types/Superhero';
import { DetailedSuperhero } from '@/components/DetailedSuperhero';
import { StoreProvider } from '@/redux/provider';
import Typography from '@mui/material/Typography';
import { palette } from '@/theme/palette';
import Grid from '@mui/material/Grid';

function SuperheroDetailPage({ superhero }: { superhero: Superhero }) {
  const router = useRouter();

  return (
    <Grid>
      <Typography variant="h4" color={palette.primary.main} marginBottom="20px">
        Meet the Superhero:
      </Typography>
      ;
      <StoreProvider>
        <DetailedSuperhero />
      </StoreProvider>
    </Grid>
  );
}

export default SuperheroDetailPage;
