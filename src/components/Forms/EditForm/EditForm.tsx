import React, { useEffect } from 'react';
import { useForm, Controller } from 'react-hook-form';
import {
  TextField,
  Button,
  InputLabel,
  Grid,
  Typography,
  Input,
  ListItem,
} from '@mui/material';
import { useMutation, useQueryClient } from 'react-query';
import { useTypedDispatch, useTypedSelector } from '@/redux/hooks';
import { updateSuperhero } from '@/api/superheroes';
import { Loader } from '@/components/Loader';
import { ErrorResponse } from '@/components/ErrorResponse';
import useTheme from '@mui/material/styles/useTheme';
import { AxiosError } from 'axios';
import { selectSuperhero } from '@/redux/selectors/superheroSelector';
import { Superhero } from '@/types/Superhero';
import { setIsEditModalOpen } from '@/redux/features/modals/modalsSlice';
import { isSuperheroUpdated } from '@/helpers/isSuperheroUpdated';
import { editSuperhero } from '@/redux/features/superhero/superheroSlice';
import Image from 'next/image';
import { API_URL } from '@/consts/api-url';

export const EditForm: React.FC = () => {
  const theme = useTheme();
  const dispatch = useTypedDispatch();
  const selectedSuperhero = useTypedSelector(selectSuperhero);

  const {
    handleSubmit,
    control,
    formState: { errors },
    setValue,
  } = useForm<Omit<Superhero, 'id'>>();

  const existedImages = selectedSuperhero?.images as string[];
  const imgUrls = existedImages.map(
    (image) => `${API_URL}/images/superheroes/${image}`,
  );

  useEffect(() => {
    if (selectedSuperhero) {
      setValue('nickname', selectedSuperhero.nickname || '');
      setValue('real_name', selectedSuperhero.real_name || '');
      setValue(
        'origin_description',
        selectedSuperhero.origin_description || '',
      );
      setValue('superpowers', selectedSuperhero.superpowers || '');
      setValue('catch_phrase', selectedSuperhero.catch_phrase || '');
    }
  }, [selectedSuperhero, setValue]);

  const mutation = useMutation(
    (data: Omit<Superhero, 'id'>) =>
      updateSuperhero(selectedSuperhero?.id || 0, data),
    {
      onSuccess: (data) => {
        dispatch(setIsEditModalOpen(false));
        dispatch(editSuperhero(data));
      },
    },
  );

  const onSubmit = async (data: Omit<Superhero, 'id'>) => {
    const isDataChanged =
      !isSuperheroUpdated(data, selectedSuperhero || {}) || data.images?.length;

    if (isDataChanged) {
      try {
        mutation.mutate(data);
      } catch (error) {
        console.error('Error updating superhero:', error);
      }
    } else {
      return;
    }
  };

  if (mutation.isError) {
    return <ErrorResponse error={mutation.error as AxiosError} />;
  }
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Grid container>
        <Grid item xs={12} sm={6}>
          <InputLabel>Nickname:</InputLabel>
          <Controller
            name="nickname"
            control={control}
            defaultValue=""
            rules={{ required: 'Nickname is required' }}
            render={({ field }) => (
              <TextField {...field} error={!!errors.nickname} />
            )}
          />
          {errors.nickname && (
            <Typography variant="body2" color="error">
              {errors.nickname.message}
            </Typography>
          )}
        </Grid>

        <Grid item xs={12} sm={6}>
          <InputLabel>Real Name:</InputLabel>
          <Controller
            name="real_name"
            control={control}
            defaultValue=""
            rules={{ required: 'Real Name is required' }}
            render={({ field }) => (
              <TextField {...field} error={!!errors.real_name} />
            )}
          />
          {errors.real_name && (
            <Typography variant="body2" color="error">
              {errors.real_name.message}
            </Typography>
          )}
        </Grid>

        <Grid item xs={12} sm={6}>
          <InputLabel>Origin Description:</InputLabel>
          <Controller
            name="origin_description"
            control={control}
            defaultValue=""
            rules={{ required: 'Origin Description is required' }}
            render={({ field }) => (
              <TextField {...field} error={!!errors.origin_description} />
            )}
          />
          {errors.origin_description && (
            <Typography variant="body2" color="error">
              {errors.origin_description.message}
            </Typography>
          )}
        </Grid>

        <Grid item xs={12} sm={6}>
          <InputLabel>Superpowers:</InputLabel>
          <Controller
            name="superpowers"
            control={control}
            defaultValue=""
            rules={{ required: 'Superpowers are required' }}
            render={({ field }) => (
              <TextField {...field} error={!!errors.superpowers} />
            )}
          />
          {errors.superpowers && (
            <Typography variant="body2" color="error">
              {errors.superpowers.message}
            </Typography>
          )}
        </Grid>

        <Grid item xs={12} sm={6}>
          <InputLabel>Catch Phrase:</InputLabel>
          <Controller
            name="catch_phrase"
            control={control}
            defaultValue=""
            rules={{ required: 'Catch Phrase is required' }}
            render={({ field }) => (
              <TextField {...field} error={!!errors.catch_phrase} />
            )}
          />
          {errors.catch_phrase && (
            <Typography variant="body2" color="error">
              {errors.catch_phrase.message}
            </Typography>
          )}
        </Grid>

        <Grid item xs={12} sm={6}>
          <InputLabel>
            Images:
            {imgUrls.map((imageUrl) => (
              <ListItem key={imageUrl}>
                <Image
                  src={imageUrl}
                  width={15}
                  height={15}
                  alt="Demo Superhero Image"
                />
              </ListItem>
            ))}
          </InputLabel>
          <Controller
            name="images"
            control={control}
            defaultValue={[]}
            render={({ field }) => (
              <React.Fragment>
                <Button
                  variant="outlined"
                  component="label"
                  htmlFor="file-input"
                >
                  Select File
                </Button>
                <Input
                  id="file-input"
                  type="file"
                  style={{ display: 'none' }}
                  inputProps={{
                    multiple: true,
                    accept: '.jpg, .jpeg, .png, .gif, .jfif, .webp',
                    onChange: (e) => {
                      const inputElement = e.target as HTMLInputElement;

                      if (inputElement.files && inputElement.files) {
                        field.onChange(inputElement.files);
                      }
                    },
                  }}
                />
              </React.Fragment>
            )}
          />
        </Grid>

        <Grid item xs={3} margin="20px auto 0 auto">
          <Button type="submit" variant="contained" color="success" fullWidth>
            <Grid container alignItems="center" justifyContent="center">
              {mutation.isLoading ? (
                <Loader size={20} color={theme.palette.white.main} />
              ) : (
                'Submit'
              )}{' '}
            </Grid>
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};
