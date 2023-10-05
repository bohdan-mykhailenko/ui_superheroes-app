import { useTypedSelector } from '@/redux/hooks';
import { selectSuperhero } from '@/redux/selectors/superheroSelector';
import React from 'react';

interface DetailedSuperheroProps {}

export const DetailedSuperhero: React.FC<DetailedSuperheroProps> = () => {
  const selectedSuperhero = useTypedSelector(selectSuperhero);

  return (
    <div>
      <h1>{selectedSuperhero?.nickname}</h1>
    </div>
  );
};
