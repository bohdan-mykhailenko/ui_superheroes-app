'use client';

import React from 'react';
import { API_URL } from '@/consts/api-url';
import { Superhero } from '@/types/Superhero';
import Typography from '@mui/material/Typography';
import Link from 'next/link';
import Image from 'next/image';
import EditIcon from '@mui/icons-material/Edit';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import IconButton from '@mui/material/IconButton';
import Grid from '@mui/material/Grid';
import { useTypedDispatch } from '@/redux/hooks';
import { setSelectedSuperhero } from '@/redux/features/superhero/superheroSlice';
import {
  setIsDeleteModalOpen,
  setIsEditModalOpen,
} from '@/redux/features/modals/modalsSlice';
import useTheme from '@mui/material/styles/useTheme';

interface SuperheroItemProps {
  superhero: Superhero;
}

export const SuperheroItem: React.FC<SuperheroItemProps> = ({ superhero }) => {
  const { id, nickname, images } = superhero;
  const avatar = images[0];
  const imageUrl = API_URL + '/images/superheroes/' + avatar;
  const dispatch = useTypedDispatch();
  const theme = useTheme();

  const handleSelectSuperhero = () => {
    dispatch(setSelectedSuperhero(superhero));
  };

  const handleDeleteSuperhero = () => {
    dispatch(setSelectedSuperhero(superhero));
    dispatch(setIsDeleteModalOpen(true));
  };

  const handleEditSuperhero = () => {
    dispatch(setSelectedSuperhero(superhero));
    dispatch(setIsEditModalOpen(true));
  };

  return (
    <Grid
      width="75vw"
      container
      alignItems="center"
      sx={{
        padding: '10px',
        marginBottom: '10px',
        backgroundColor: theme.palette.white.main,
        borderRadius: '10px',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
    >
      <Grid item xs={12} sm={8} textAlign="center">
        <Link href={`/${id}`} onClick={handleSelectSuperhero}>
          <Grid container alignItems="center" spacing={2}>
            <Grid item>
              <Image
                width={70}
                height={70}
                src={imageUrl}
                alt="Superhero Image"
                style={{ objectFit: 'cover', borderRadius: '5px' }}
                className="superhero-avatar"
              />
            </Grid>
            <Grid item>
              <Typography variant="h3">{nickname}</Typography>
            </Grid>
          </Grid>
        </Link>
      </Grid>

      <Grid item xs={12} sm={4} textAlign="right">
        <IconButton onClick={handleEditSuperhero}>
          <EditIcon color="info" />
        </IconButton>
        <IconButton onClick={handleDeleteSuperhero}>
          <DeleteForeverIcon color="error" />
        </IconButton>
      </Grid>
    </Grid>
  );
};
