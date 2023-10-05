import { useTypedDispatch, useTypedSelector } from '@/redux/hooks';
import { selectSuperhero } from '@/redux/selectors/superheroSelector';
import {
  Button,
  Grid,
  IconButton,
  List,
  ListItem,
  Typography,
} from '@mui/material';
import useTheme from '@mui/material/styles/useTheme';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import EditIcon from '@mui/icons-material/Edit';
import Link from 'next/link';
import React from 'react';
import { setSelectedSuperhero } from '@/redux/features/superhero/superheroSlice';
import {
  setIsDeleteModalOpen,
  setIsEditModalOpen,
} from '@/redux/features/modals/modalsSlice';
import Image from 'next/image';
import { API_URL } from '@/consts/api-url';

interface DetailedSuperheroProps {}

export const DetailedSuperhero: React.FC<DetailedSuperheroProps> = () => {
  const theme = useTheme();

  const {
    nickname,
    images = [],
    origin_description,
    catch_phrase,
    real_name,
    superpowers,
  } = useTypedSelector(selectSuperhero) || {};

  const selectedImages = images as string[];

  const imagesUrls = selectedImages.map(
    (image) => `${API_URL}/images/superheroes/${image}`,
  );

  return (
    <Grid
      container
      alignItems="center"
      sx={{
        padding: '10px',
        marginBottom: '10px',

        width: '50vw',

        backgroundColor: theme.palette.white.main,

        borderRadius: '0 10px 10px 0',
        justifyContent: 'space-between',
        alignItems: 'center',

        [theme.breakpoints.down('lg')]: {
          width: '60vw',
        },

        [theme.breakpoints.down('sm')]: {
          width: '80vw',
        },
      }}
    >
      <Grid item xs={12} marginBottom="40px">
        <Link href={`/`}>
          <Button variant="outlined" size="small">
            Home Page
          </Button>
        </Link>
      </Grid>

      <Grid item>
        <Typography variant="h4">
          <Typography variant="body1" color="error">
            nickname:
          </Typography>{' '}
          {nickname}
        </Typography>
        <Typography variant="h4">
          <Typography variant="body1" color="error">
            real name:
          </Typography>{' '}
          {real_name}
        </Typography>
        <Typography variant="h4">
          <Typography variant="body1" color="error">
            origin description:
          </Typography>
          {real_name} {origin_description}
        </Typography>
        <Typography variant="h4">
          <Typography variant="body1" color="error">
            superpowers:
          </Typography>
          {superpowers}
        </Typography>

        <Typography variant="h4">
          <Typography variant="body1" color="error">
            catch phrase:
          </Typography>
          {catch_phrase}
        </Typography>
      </Grid>

      <Grid item xs={12} sm={12}>
        <Typography variant="h3" color="error">
          Images:
        </Typography>

        <Grid container>
          {imagesUrls.map((imageUrl) => (
            <Grid item xs={4} key={imageUrl}>
              <Image
                width={70}
                height={70}
                src={imageUrl}
                alt="Superhero Image"
                style={{
                  objectFit: 'cover',
                  border: `2px solid ${theme.palette.primary.main}`,
                  borderRadius: '5px',
                }}
                className="superhero-image"
              />
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
};
