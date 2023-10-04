'use client';

import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { useTypedDispatch, useTypedSelector } from '@/redux/hooks';
import { setIsDeleteModalOpen } from '@/redux/features/modals/modalsSlice';
import { selectSuperhero } from '@/redux/selectors/superheroSelector';

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  zIndex: 100,
};

export const DeleteModal = () => {
  const dispatch = useTypedDispatch();
  const [open, setOpen] = useState(true);
  const selectedSuperhero = useTypedSelector(selectSuperhero);

  const handleClose = () => {
    setOpen(false);
    dispatch(setIsDeleteModalOpen(false));
  };

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Delete modal
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Are u sure u wanna delete
            <p>{selectedSuperhero?.nickname}</p>
          </Typography>
        </Box>
      </Modal>
    </div>
  );
};
