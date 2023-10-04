import Link from 'next/link';
import React from 'react';
import { SuperheroesList } from '@/components/SuperheroesList';
import { QueryProvider } from '@/providers/QueryProvider';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { palette } from '@/theme/palette';
import { StoreProvider } from '@/redux/provider';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { IconButton } from '@mui/material';
import { useTypedDispatch } from '@/redux/hooks';
import { setIsAddModalOpen } from '@/redux/features/modals/modalsSlice';
import { CreatePanel } from '@/components/CreatePanel/CreatePanel';

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
      }}
    >
      <Typography variant="h1" color="primary" marginBottom="20px">
        Superheroes
      </Typography>

      <StoreProvider>
        <QueryProvider>
          <CreatePanel />

          <SuperheroesList />
        </QueryProvider>
      </StoreProvider>
    </Grid>
  );
};

export default Superheroes;
