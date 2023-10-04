import React from 'react';
import { API_URL } from '@/consts/api-url';
import { Superhero } from '@/types/Superhero';
import Typography from '@mui/material/Typography';
import Link from 'next/link';
import Image from 'next/image';

interface SuperheroItemProps {
  superhero: Superhero;
}

export const SuperheroItem: React.FC<SuperheroItemProps> = ({ superhero }) => {
  const { id, nickname, images } = superhero;
  const imageUrl = API_URL + '/images/superheroes/' + images[0];

  return (
    <Link href={`/${id}`}>
      <Typography>{nickname}</Typography>
      <Image width={40} height={40} src={imageUrl} alt="Superhero Image" />
    </Link>
  );
};
