'use client';

import React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { palette } from '@/theme/palette';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { IconButton } from '@mui/material';
import { useTypedDispatch, useTypedSelector } from '@/redux/hooks';
import { setIsAddModalOpen } from '@/redux/features/modals/modalsSlice';
import { selectIsAddModalOpen } from '@/redux/selectors/modalsSelector';
import { AddModal } from '../Modals/AddModal/AddModal';
interface CreatePanelProps {}

export const CreatePanel: React.FC<CreatePanelProps> = () => {
  const dispatch = useTypedDispatch();
  const isAddModalOpen = useTypedSelector(selectIsAddModalOpen);

  const handleAddSuperhero = () => {
    dispatch(setIsAddModalOpen(true));
  };

  return (
    <Grid>
      {isAddModalOpen && <AddModal />}

      <Typography variant="h4" color={palette.primary.main} marginBottom="20px">
        Add new Superhero
        <IconButton onClick={handleAddSuperhero}>
          <AddCircleIcon color="success" />
        </IconButton>
      </Typography>
    </Grid>
  );
};
