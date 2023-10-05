'use client';

import React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { IconButton } from '@mui/material';
import { useTypedDispatch, useTypedSelector } from '@/redux/hooks';
import { setIsAddModalOpen } from '@/redux/features/modals/modalsSlice';
import { selectIsAddModalOpen } from '@/redux/selectors/modalsSelector';
import { AddModal } from '../Modals/AddModal/AddModal';
import { selectTotalSuperheroes } from '@/redux/selectors/superheroSelector';
interface CreatePanelProps {}

export const CreatePanel: React.FC<CreatePanelProps> = () => {
  const dispatch = useTypedDispatch();
  const isAddModalOpen = useTypedSelector(selectIsAddModalOpen);
  const totalSuperheroes = useTypedSelector(selectTotalSuperheroes);
  const isEmptyList = totalSuperheroes === 0;

  const handleAddSuperhero = () => {
    dispatch(setIsAddModalOpen(true));
  };

  return (
    <Grid
      container
      alignItems="center"
      justifyContent="center"
      direction="column"
      marginBottom="20px"
    >
      {isAddModalOpen && <AddModal />}

      <Typography variant="h4" color="primary">
        Add new SuperHero
        <IconButton onClick={handleAddSuperhero}>
          <AddCircleIcon color="success" />
        </IconButton>
      </Typography>

      <Typography variant="h4" color="primary">
        {!isEmptyList ? <>Total Superheroes: {totalSuperheroes}</> : ''}
      </Typography>
    </Grid>
  );
};
