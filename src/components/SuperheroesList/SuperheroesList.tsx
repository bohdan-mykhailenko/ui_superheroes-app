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
import { useTypedDispatch, useTypedSelector } from '@/redux/hooks';
import {
  selectIsDeleteModalOpen,
  selectIsEditModalOpen,
} from '@/redux/selectors/modalsSelector';
import { EditModal } from '../Modals/EditModal';
import { setSuperheroes } from '@/redux/features/superhero/superheroSlice';
import { selectSuperheroes } from '@/redux/selectors/superheroSelector';
import { Typography } from '@mui/material';

export const SuperheroesList = () => {
  const dispatch = useTypedDispatch();

  const { isLoading, error } = useQuery<Superhero[]>(
    'superheroes',
    getAllSuperheroes,
    {
      onSuccess: (data) => {
        dispatch(setSuperheroes(data));
      },
      staleTime: Infinity,
    },
  );

  const superheroes = useTypedSelector(selectSuperheroes);
  const isDeleteModalOpen = useTypedSelector(selectIsDeleteModalOpen);
  const isEditModalOpen = useTypedSelector(selectIsEditModalOpen);
  const isListEmpty = superheroes.length === 0;

  if (isLoading) {
    return <Loader message="Loading data..." />;
  }

  if (error) {
    return <ErrorResponse error={error as AxiosError} />;
  }

  return (
    <Grid width="100%">
      {isEditModalOpen && <EditModal />}
      {isDeleteModalOpen && <DeleteModal />}

      {isListEmpty ? (
        <Typography>Empty list...</Typography>
      ) : (
        <List>
          {superheroes.map((superhero) => (
            <SuperheroItem key={superhero.id} superhero={superhero} />
          ))}
        </List>
      )}
    </Grid>
  );
};
