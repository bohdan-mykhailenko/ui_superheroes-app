'use client';

import { getAllSuperheroes } from '@/api/superheroes';
import { Superhero } from '@/types/Superhero';
import React from 'react';
import { useQuery } from 'react-query';
import { SuperheroItem } from '../SuperheroItem';
import { AxiosError } from 'axios';
import { ErrorResponse } from '../ErrorResponse';
import { Loader } from '../Loader';
import { QueryProvider } from '@/providers/QueryProvider';
import List from '@mui/material/List';
import Grid from '@mui/material/Grid';
import { palette } from '@/theme/palette';
import { DeleteModal } from '../Modals/DeleteModal';
import { useTypedSelector } from '@/redux/hooks';
import { selectIsDeleteModalOpen } from '@/redux/selectors/modalsSelector';

export const SuperheroesList = () => {
  const {
    data: superheroes,
    isLoading,
    error,
  } = useQuery<Superhero[]>('superheroes', getAllSuperheroes);

  const isDeleteModalOpen = useTypedSelector(selectIsDeleteModalOpen);

  if (isLoading) {
    return <Loader message="Loading data..." />;
  }

  if (error) {
    return <ErrorResponse error={error as AxiosError} />;
  }

  return (
    <Grid
      sx={{
        width: '100%',
        // backgroundColor: palette.accent.main,
        borderRadius: '10px',
      }}
    >
      {isDeleteModalOpen && <DeleteModal />}

      <List>
        {superheroes?.map((superhero) => (
          <SuperheroItem key={superhero.id} superhero={superhero} />
        ))}
      </List>
    </Grid>
  );
};
