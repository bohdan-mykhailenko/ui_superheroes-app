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
import {
  selectIsDeleteModalOpen,
  selectIsEditModalOpen,
} from '@/redux/selectors/modalsSelector';
import { EditModal } from '../Modals/EditModal';

export const SuperheroesList = () => {
  const {
    data: superheroes,
    isLoading,
    error,
  } = useQuery<Superhero[]>('superheroes', getAllSuperheroes);

  const isDeleteModalOpen = useTypedSelector(selectIsDeleteModalOpen);
  const isEditModalOpen = useTypedSelector(selectIsEditModalOpen);

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
        borderRadius: '10px',
      }}
    >
      {isEditModalOpen && <EditModal />}
      {isDeleteModalOpen && <DeleteModal />}

      <List>
        {superheroes?.map((superhero) => (
          <SuperheroItem key={superhero.id} superhero={superhero} />
        ))}
      </List>
    </Grid>
  );
};
