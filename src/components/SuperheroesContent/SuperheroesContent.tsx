'use client';

import React, { useState } from 'react';
import { useQuery, useQueryClient } from 'react-query';
import { useDispatch } from 'react-redux';
import Pagination from '@mui/material/Pagination';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { getAllSuperheroes } from '@/api/superheroes';
import { SuperheroItem } from '../SuperheroItem';
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
import { List } from '@mui/material';

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

  const { data, isLoading, error } = useQuery(
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

  if (superheroes.length === 0 && currentPage > 1) {
    setCurrentPage((current) => current - 1);
  }

  return (
    <Grid width="100%">
      {isEditModalOpen && <EditModal />}
      {isDeleteModalOpen && <DeleteModal />}

      {superheroes.length === 0 ? (
        <Typography>Empty list...</Typography>
      ) : (
        <List>
          {superheroes.map((superhero) => (
            <SuperheroItem key={superhero.id} superhero={superhero} />
          ))}
        </List>
      )}

      <Pagination
        count={Math.ceil(totalSuperheroes / 5)}
        variant="outlined"
        shape="rounded"
        page={currentPage}
        onChange={(event, page) => handlePageChange(page)}
      />
    </Grid>
  );
};
