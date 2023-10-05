'use client';

import React from 'react';
import { useTypedDispatch } from '@/redux/hooks';
import { setIsEditModalOpen } from '@/redux/features/modals/modalsSlice';
import { BasicModal } from '../BasicModal';
import { EditForm } from '@/components/Forms/EditForm';

export const EditModal = () => {
  const dispatch = useTypedDispatch();

  const closeEditModal = () => {
    dispatch(setIsEditModalOpen(false));
  };

  return (
    <BasicModal onClose={closeEditModal}>
      <EditForm />
    </BasicModal>
  );
};
