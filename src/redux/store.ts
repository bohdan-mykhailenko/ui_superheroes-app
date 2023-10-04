'use client';

import { configureStore } from '@reduxjs/toolkit';
import superheroReducer from './features/superhero/superheroSlice';
import modalsReducer from './features/modals/modalsSlice';

const store = configureStore({
  reducer: {
    superhero: superheroReducer,
    modals: modalsReducer,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
