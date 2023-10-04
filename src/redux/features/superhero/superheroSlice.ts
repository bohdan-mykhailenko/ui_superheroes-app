import { Superhero } from '@/types/Superhero';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface superheroState {
  selectedSuperhero: Superhero | null;
}

const initialState: superheroState = {
  selectedSuperhero: null,
};

const superheroSlice = createSlice({
  name: 'superhero',
  initialState,
  reducers: {
    setSelectedSuperhero: (state, action: PayloadAction<Superhero>) => {
      state.selectedSuperhero = action.payload;
    },
  },
});

export const { setSelectedSuperhero } = superheroSlice.actions;

export default superheroSlice.reducer;
