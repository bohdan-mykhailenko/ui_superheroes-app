import { API_URL } from '@/consts/api-url';
import { Superhero } from '@/types/Superhero';
import Link from 'next/link';
import React from 'react';

interface SuperheroItemProps {
  superhero: Superhero;
}

export const SuperheroItem: React.FC<SuperheroItemProps> = ({ superhero }) => {
  const { id, nickname, images } = superhero;
  const imageUrl = API_URL + '/images/superheroes/' + images[0];

  return (
    <li key={id}>
      <Link href={`/superheroes/${id}`}>
        <h4>{nickname}</h4>
        <img width={40} height={40} src={imageUrl} />
      </Link>
    </li>
  );
};
