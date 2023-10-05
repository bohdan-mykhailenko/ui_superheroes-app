import React, { useEffect } from 'react';
import { useForm, Controller } from 'react-hook-form';
import {
  TextField,
  Button,
  InputLabel,
  Grid,
  Typography,
  ListItem,
} from '@mui/material';
import { useMutation } from 'react-query';
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
import { isWhitespace } from '@/helpers/isWhitespace';

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
      mutation.mutate(data);
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
            rules={{
              required: 'Nickname is required',
              validate: (value) =>
                !isWhitespace(value) || 'Nickname cannot be empty',
            }}
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
            rules={{
              required: 'Real Name is required',
              validate: (value) =>
                !isWhitespace(value) || 'Real Name cannot be empty',
            }}
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
            rules={{
              required: 'Origin Description is required',
              validate: (value) =>
                !isWhitespace(value) || 'Origin Description cannot be empty',
            }}
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
            rules={{
              required: 'Superpowers are required',
              validate: (value) =>
                !isWhitespace(value) || 'Superpowers cannot be empty',
            }}
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
            rules={{
              required: 'Catch Phrase is required',
              validate: (value) =>
                !isWhitespace(value) || 'Catch Phrase cannot be empty',
            }}
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

        <Grid item xs={12} sm={12} marginBottom="20px">
          <InputLabel>Images:</InputLabel>
          <Controller
            name="images"
            control={control}
            defaultValue={[]}
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
          <InputLabel>
            Existed images:
            {existedImages.map((image) => (
              <ListItem
                key={image}
                sx={{
                  padding: 0,
                  marginBottom: '3px',
                  fontSize: '10px',
                }}
              >
                {image}
              </ListItem>
            ))}
          </InputLabel>
        </Grid>

        <Grid item xs={6} margin="0 auto">
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
