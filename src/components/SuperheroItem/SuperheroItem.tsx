'use client';

import React from 'react';
import { API_URL } from '@/consts/api-url';
import { Superhero } from '@/types/Superhero';
import Typography from '@mui/material/Typography';
import Link from 'next/link';
import Image from 'next/image';
import Box from '@mui/material/Box';
import { palette } from '@/theme/palette';
import EditIcon from '@mui/icons-material/Edit';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import IconButton from '@mui/material/IconButton';
import Grid from '@mui/material/Grid';
import { useTypedDispatch } from '@/redux/hooks';
import { setSelectedSuperhero } from '@/redux/features/superhero/superheroSlice';

interface SuperheroItemProps {
  superhero: Superhero;
}

export const SuperheroItem: React.FC<SuperheroItemProps> = ({ superhero }) => {
  const { id, nickname, images } = superhero;
  const imageUrl = API_URL + '/images/superheroes/' + images[0];
  const dispatch = useTypedDispatch();

  const handleSelectSuperhero = () => {
    dispatch(setSelectedSuperhero(superhero));
  };

  return (
    <Grid
      container
      alignItems="center"
      sx={{
        padding: '10px',
        marginBottom: '10px',
        backgroundColor: palette.white.main,
        borderRadius: '10px',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
    >
      <Grid item width="70px">
        <Link href={`/${id}`} onClick={handleSelectSuperhero}>
          <Grid container alignItems="center">
            <Image
              width={70}
              height={70}
              src={imageUrl}
              alt="Superhero Image"
              style={{ objectFit: 'cover', borderRadius: '10px' }}
            />
          </Grid>
        </Link>
      </Grid>
      <Grid item xs={10} sm={8} textAlign="left">
        <Link href={`/${id}`} onClick={handleSelectSuperhero}>
          <Typography variant="h3">{nickname}</Typography>
        </Link>
      </Grid>

      <Grid item xs={12} sm={2} textAlign="right">
        <IconButton>
          <EditIcon color="info" />
        </IconButton>
        <IconButton>
          <DeleteForeverIcon color="error" />
        </IconButton>
      </Grid>
    </Grid>
  );
};
