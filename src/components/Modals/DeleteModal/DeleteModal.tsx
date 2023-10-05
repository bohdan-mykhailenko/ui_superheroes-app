'use client';

import React from 'react';
import Typography from '@mui/material/Typography';
import { useTypedDispatch, useTypedSelector } from '@/redux/hooks';
import { setIsDeleteModalOpen } from '@/redux/features/modals/modalsSlice';
import { selectSuperhero } from '@/redux/selectors/superheroSelector';
import { BasicModal } from '../BasicModal';
import { deleteSuperhero } from '@/api/superheroes';
import Button from '@mui/material/Button';
import { useMutation } from 'react-query';
import { ErrorResponse } from '@/components/ErrorResponse';
import { AxiosError } from 'axios';
import {
  removeSuperhero,
  setIsTotalSuperheroesChanged,
} from '@/redux/features/superhero/superheroSlice';
import { Loader } from '@/components/Loader';
import { Grid } from '@mui/material';
import useTheme from '@mui/material/styles/useTheme';

export const DeleteModal = () => {
  const theme = useTheme();
  const dispatch = useTypedDispatch();
  const { id = 0, nickname } = useTypedSelector(selectSuperhero) || {};

  const closeDeleteModal = () => {
    dispatch(setIsDeleteModalOpen(false));
  };

  const mutation = useMutation(
    (superheroId: number) => deleteSuperhero(superheroId),
    {
      onSuccess: () => {
        dispatch(setIsDeleteModalOpen(false));
        dispatch(setIsTotalSuperheroesChanged(true));
      },
    },
  );

  const handleRemoveSuperhero = async () => {
    mutation.mutateAsync(id);
  };

  if (mutation.isError) {
    return <ErrorResponse error={mutation.error as AxiosError} />;
  }

  return (
    <BasicModal onClose={closeDeleteModal}>
      <Typography
        variant="h4"
        textAlign="center"
        sx={{
          marginBottom: '20px',
        }}
      >
        Are you sure you wanna delete
        <Typography variant="h3" textAlign="center" color="error">
          {nickname}
        </Typography>
      </Typography>

      <Button
        onClick={handleRemoveSuperhero}
        type="submit"
        variant="contained"
        color="success"
        fullWidth
      >
        <Grid container alignItems="center" justifyContent="center">
          {mutation.isLoading ? (
            <Loader size={20} color={theme.palette.white.main} />
          ) : (
            'Delete'
          )}{' '}
        </Grid>
      </Button>
    </BasicModal>
  );
};
