'use client';

import React from 'react';
import Typography from '@mui/material/Typography';
import { useTypedDispatch, useTypedSelector } from '@/redux/hooks';
import { setIsDeleteModalOpen } from '@/redux/features/modals/modalsSlice';
import { selectSuperhero } from '@/redux/selectors/superheroSelector';
import { BasicModal } from '../BasicModal';
import { deleteSuperhero } from '@/api/superheroes';
import Button from '@mui/material/Button';

export const DeleteModal = () => {
  const dispatch = useTypedDispatch();
  const selectedSuperhero = useTypedSelector(selectSuperhero);

  const closeDeleteModal = () => {
    dispatch(setIsDeleteModalOpen(false));
  };

  const removeSuperhero = async () => {
    try {
      await deleteSuperhero(selectedSuperhero?.id || 0);

      // Optionally, you can show a success message or redirect to another page
      console.log('Data deletecsuccessfully!');
    } catch (error) {
      // Handle any errors that occur during the post request
      console.error('Error posting data:', error);
    }
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

      <Button onClick={removeSuperhero}>Yes</Button>
    </BasicModal>
  );
};
