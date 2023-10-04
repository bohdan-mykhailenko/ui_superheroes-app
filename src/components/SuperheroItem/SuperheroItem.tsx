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

interface SuperheroItemProps {
  superhero: Superhero;
}

export const SuperheroItem: React.FC<SuperheroItemProps> = ({ superhero }) => {
  const { id, nickname, images } = superhero;
  const imageUrl = API_URL + '/images/superheroes/' + images[0];

  return (
    <Grid
      container
      alignItems="center"
      sx={{
        padding: '10px 20px',
        marginBottom: '10px',
        width: '100%',
        backgroundColor: palette.white.main,
        borderRadius: '10px',
        justifyContent: 'space-between',
      }}
    >
      <Grid item xs={12} sm={3}>
        <Link href={`/${id}`}>
          <Typography variant="h3">{nickname}</Typography>
        </Link>
      </Grid>
      <Grid item xs={6} sm={6} textAlign="left">
        <Link href={`/${id}`}>
          <Image
            width={70}
            height={70}
            src={imageUrl}
            alt="Superhero Image"
            style={{ objectFit: 'cover', borderRadius: '10px' }}
          />
        </Link>
      </Grid>
      <Grid item xs={3} sm={1} textAlign="right">
        <IconButton
          sx={{
            marginRight: '10px',
          }}
        >
          <EditIcon color="info" />
        </IconButton>
        <IconButton>
          <DeleteForeverIcon color="error" />
        </IconButton>
      </Grid>
    </Grid>
  );
};
