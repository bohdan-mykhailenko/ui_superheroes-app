'use client';

import { configureStore } from '@reduxjs/toolkit';
import superheroReducer from './features/superhero/superheroSlice';

const store = configureStore({
  reducer: {
    superhero: superheroReducer,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
