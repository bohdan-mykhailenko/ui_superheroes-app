import React from 'react';
import { useForm, Controller, SubmitHandler } from 'react-hook-form';
import { TextField, Button, InputLabel, Grid, Typography } from '@mui/material';
import { postSuperhero } from '@/api/superheroes';
import { Superhero } from '@/types/Superhero';
import { useMutation, useQueryClient } from 'react-query';
import { useTypedDispatch } from '@/redux/hooks';
import { setIsAddModalOpen } from '@/redux/features/modals/modalsSlice';
import { Loader } from '@/components/Loader';
import { ErrorResponse } from '@/components/ErrorResponse';
import useTheme from '@mui/material/styles/useTheme';
import { AxiosError } from 'axios';

export const AddForm: React.FC = () => {
  const theme = useTheme();
  const queryClient = useQueryClient();
  const dispatch = useTypedDispatch();
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<Omit<Superhero, 'id'>>({});

  const mutation = useMutation(
    (data: Omit<Superhero, 'id'>) => postSuperhero(data),
    {
      onSuccess: (data) => {
        queryClient.invalidateQueries('add superhero');
        console.log(data);
        dispatch(setIsAddModalOpen(false));
      },
    },
  );

  const onSubmit = async (data: Omit<Superhero, 'id'>) => {
    mutation.mutateAsync(data);
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
          <InputLabel>Images:</InputLabel>
          <Controller
            name="images"
            control={control}
            defaultValue={null}
            rules={{ required: 'Upload at least 1 image' }}
            render={({ field }) => (
              <input
                multiple
                type="file"
                accept=".jpg, .jpeg, .png, .gif, .jfif, .webp"
                onChange={(event) => {
                  field.onChange(event.target.files);
                }}
              />
            )}
          />
          {errors.images && (
            <Typography variant="body2" color="error">
              {errors.images.message}
            </Typography>
          )}
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
