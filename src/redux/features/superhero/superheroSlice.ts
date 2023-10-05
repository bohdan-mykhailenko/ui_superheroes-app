import { Superhero } from '@/types/Superhero';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface superheroState {
  selectedSuperhero: Superhero | null;
  superheroes: Superhero[];
}

const initialState: superheroState = {
  selectedSuperhero: null,
  superheroes: [],
};

const superheroSlice = createSlice({
  name: 'superhero',
  initialState,
  reducers: {
    setSelectedSuperhero: (state, action: PayloadAction<Superhero>) => {
      state.selectedSuperhero = action.payload;
    },

    setSuperheroes: (state, action: PayloadAction<Superhero[]>) => {
      state.superheroes = action.payload;
    },

    addSuperhero: (state, action: PayloadAction<Superhero>) => {
      state.superheroes.push(action.payload);
    },

    removeSuperhero: (state, action: PayloadAction<number>) => {
      state.superheroes = state.superheroes.filter(
        (superhero) => superhero.id !== action.payload,
      );
    },

    editSuperhero: (state, action: PayloadAction<Superhero>) => {
      const index = state.superheroes.findIndex(
        (superhero) => superhero.id === action.payload.id,
      );

      if (index !== -1) {
        state.superheroes[index] = action.payload;
      }
    },
  },
});

export const {
  setSelectedSuperhero,
  setSuperheroes,
  addSuperhero,
  removeSuperhero,
  editSuperhero,
} = superheroSlice.actions;

export default superheroSlice.reducer;
