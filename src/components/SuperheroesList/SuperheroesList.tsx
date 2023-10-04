'use client';

import { getAllSuperheroes } from '@/api/superheroes';
import { Superhero } from '@/types/Superhero';
import React from 'react';
import { useQuery } from 'react-query';
import { SuperheroItem } from '../SuperheroItem';

export const SuperheroesList = () => {
  const {
    data: superheroes,
    isLoading,
    isError,
    error,
  } = useQuery<Superhero[]>('superheroes', getAllSuperheroes);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error:</div>;
  }

  return (
    <div>
      <ul>
        {superheroes?.map((superhero) => (
          <SuperheroItem key={superhero.id} superhero={superhero} />
        ))}
      </ul>
    </div>
  );
};
