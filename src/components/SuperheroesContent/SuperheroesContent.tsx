'use client';

import React, { useState } from 'react';
import { useQuery } from 'react-query';
import { useDispatch } from 'react-redux';
import Pagination from '@mui/material/Pagination';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { getAllSuperheroes } from '@/api/superheroes';
import { AxiosError } from 'axios';
import { ErrorResponse } from '../ErrorResponse';
import { Loader } from '../Loader';
import { EditModal } from '../Modals/EditModal';
import { DeleteModal } from '../Modals/DeleteModal';
import {
  setIsTotalSuperheroesChanged,
  setSuperheroes,
  setTotalSuperheroes,
} from '@/redux/features/superhero/superheroSlice';
import {
  selectIsTotalSuperheroesChanged,
  selectSuperheroes,
  selectTotalSuperheroes,
} from '@/redux/selectors/superheroSelector';
import { useSelector } from 'react-redux';
import {
  selectIsDeleteModalOpen,
  selectIsEditModalOpen,
} from '@/redux/selectors/modalsSelector';
import { SuperheroesList } from '../SuperheroesList';

export const SuperheroesContent = () => {
  const dispatch = useDispatch();
  const superheroes = useSelector(selectSuperheroes);
  const totalSuperheroes = useSelector(selectTotalSuperheroes);
  const isTotalSuperheroesChanged = useSelector(
    selectIsTotalSuperheroesChanged,
  );
  const isDeleteModalOpen = useSelector(selectIsDeleteModalOpen);
  const isEditModalOpen = useSelector(selectIsEditModalOpen);
  const [currentPage, setCurrentPage] = useState(1);

  const currentSuperheroesCount = superheroes?.length || 0;

  const { isLoading, error } = useQuery(
    ['superheroes', currentPage, isTotalSuperheroesChanged],
    () => getAllSuperheroes(currentPage),
    {
      onSuccess: (fetchedData) => {
        dispatch(setSuperheroes(fetchedData.superheroes));
        dispatch(setTotalSuperheroes(fetchedData.totalSuperheroes));
        dispatch(setIsTotalSuperheroesChanged(false));
      },
    },
  );

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  if (isLoading) {
    return <Loader message="Loading data..." />;
  }

  if (error) {
    return <ErrorResponse error={error as AxiosError} />;
  }

  if (currentSuperheroesCount === 0 && currentPage > 1) {
    setCurrentPage((current) => current - 1);
  }

  return (
    <Grid display="grid" justifyContent="center" alignItems="center">
      {isEditModalOpen && <EditModal />}
      {isDeleteModalOpen && <DeleteModal />}

      <Grid item xs={12} minHeight="550px">
        {currentSuperheroesCount === 0 ? (
          <Typography variant="h4">Empty list...</Typography>
        ) : (
          <SuperheroesList superheroes={superheroes} />
        )}
      </Grid>

      <Grid item xs={12} margin="0 auto">
        <Pagination
          count={Math.ceil(totalSuperheroes / 5)}
          variant="outlined"
          shape="rounded"
          page={currentPage}
          onChange={(event, page) => handlePageChange(page)}
        />
      </Grid>
    </Grid>
  );
};
