'use client';

import React from 'react';
import Typography from '@mui/material/Typography';
import { useTypedDispatch, useTypedSelector } from '@/redux/hooks';
import { setIsDeleteModalOpen } from '@/redux/features/modals/modalsSlice';
import { selectSuperhero } from '@/redux/selectors/superheroSelector';
import { BasicModal } from '../BasicModal';

export const DeleteModal = () => {
  const dispatch = useTypedDispatch();
  const selectedSuperhero = useTypedSelector(selectSuperhero);

  const closeDeleteModal = () => {
    dispatch(setIsDeleteModalOpen(false));
  };

  return (
    <BasicModal onClose={closeDeleteModal}>
      <Typography id="modal-modal-title" variant="h6" component="h2">
        Delete modal
      </Typography>
      <Typography id="modal-modal-description" sx={{ mt: 2 }}>
        Are u sure u wanna delete
        <p>{selectedSuperhero?.nickname}</p>
      </Typography>
    </BasicModal>
  );
};
