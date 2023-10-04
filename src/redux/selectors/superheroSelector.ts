import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '../store';

const superheroSelector = (state: RootState) =>
  state.superhero.selectedSuperhero;

export const selectSuperhero = createSelector(
  [superheroSelector],
  (selectedSuperhero) => selectedSuperhero,
);
