'use client';

import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';

interface DeleteModalProps {
  onClose: () => void;
  children: React.ReactNode;
}

export const BasicModal: React.FC<DeleteModalProps> = ({
  children,
  onClose,
}) => {
  const [open, setOpen] = useState(true);

  const handleClose = () => {
    onClose();
    setOpen(false);
  };

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          sx={{
            padding: '4px',
            width: 400,

            position: 'absolute',
            top: '50%',
            left: '50%',
            zIndex: 100,

            transform: 'translate(-50%, -50%)',

            bgcolor: 'background.paper',
            border: '2px solid #000',
            boxShadow: 24,
          }}
        >
          {children}
        </Box>
      </Modal>
    </div>
  );
};
