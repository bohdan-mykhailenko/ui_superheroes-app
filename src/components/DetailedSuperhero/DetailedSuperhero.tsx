import { useTypedSelector } from '@/redux/hooks';
import { selectSuperhero } from '@/redux/selectors/superheroSelector';
import React from 'react';

interface DetailedSuperheroProps {}

export const DetailedSuperhero: React.FC<DetailedSuperheroProps> = () => {
  const superhero = useTypedSelector(selectSuperhero);

  return (
    <div>
      <h1>{superhero?.nickname}</h1>
    </div>
  );
};
