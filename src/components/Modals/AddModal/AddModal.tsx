'use client';

import React from 'react';
import { useTypedDispatch } from '@/redux/hooks';
import { setIsAddModalOpen } from '@/redux/features/modals/modalsSlice';
import { BasicModal } from '../BasicModal';
import { AddForm } from '@/components/Forms/AddForm';

export const AddModal = () => {
  const dispatch = useTypedDispatch();

  const closeAddModal = () => {
    dispatch(setIsAddModalOpen(false));
  };

  return (
    <BasicModal onClose={closeAddModal}>
      <AddForm />
    </BasicModal>
  );
};
