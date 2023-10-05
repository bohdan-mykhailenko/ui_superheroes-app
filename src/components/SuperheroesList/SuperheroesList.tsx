'use client';

import React from 'react';
import { SuperheroItem } from '../SuperheroItem';
import List from '@mui/material/List';
import { Superhero } from '@/types/Superhero';
interface SuperheroesListProps {
  superheroes: Superhero[];
}

export const SuperheroesList: React.FC<SuperheroesListProps> = ({
  superheroes = [],
}) => {
  return (
    <List>
      {superheroes.map((superhero) => (
        <SuperheroItem key={superhero.id} superhero={superhero} />
      ))}
    </List>
  );
};
