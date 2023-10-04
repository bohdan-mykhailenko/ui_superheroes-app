import React from 'react';
import { useForm, Controller, SubmitHandler } from 'react-hook-form';
import { TextField, Button, InputLabel, Grid } from '@mui/material';
import { postSuperhero } from '@/api/superheroes';
import { Superhero } from '@/types/Superhero';

export const AddForm: React.FC = () => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<Omit<Superhero, 'id'>>({});

  const onSubmit = async (data: Omit<Superhero, 'id'>) => {
    console.log(data);

    try {
      await postSuperhero(data);

      // Optionally, you can show a success message or redirect to another page
      console.log('Data posted successfully!');
    } catch (error) {
      // Handle any errors that occur during the post request
      console.error('Error posting data:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Grid>
        <InputLabel>Nickname:</InputLabel>
        <Controller
          name="nickname"
          control={control}
          defaultValue=""
          rules={{ required: 'Nickname is required' }}
          render={({ field }) => (
            <TextField
              {...field}
              error={!!errors.nickname}
              helperText={errors.nickname ? errors.nickname.message : ''}
            />
          )}
        />
      </Grid>

      <Grid>
        <InputLabel>Real Name:</InputLabel>
        <Controller
          name="real_name"
          control={control}
          defaultValue=""
          rules={{ required: 'Real Name is required' }}
          render={({ field }) => (
            <TextField
              {...field}
              error={!!errors.real_name}
              helperText={errors.real_name ? errors.real_name.message : ''}
            />
          )}
        />
      </Grid>

      <div>
        <InputLabel>Origin Description:</InputLabel>
        <Controller
          name="origin_description"
          control={control}
          defaultValue=""
          render={({ field }) => <TextField {...field} />}
        />
        {errors.origin_description && (
          <p className="error">Origin Description is required</p>
        )}
      </div>

      <div>
        <InputLabel>Superpowers:</InputLabel>
        <Controller
          name="superpowers"
          control={control}
          defaultValue=""
          render={({ field }) => <TextField {...field} />}
        />
        {errors.superpowers && <p className="error">Superpowers is required</p>}
      </div>

      <div>
        <InputLabel>Catch Phrase:</InputLabel>
        <Controller
          name="catch_phrase"
          control={control}
          defaultValue=""
          render={({ field }) => <TextField {...field} />}
        />
        {errors.catch_phrase && (
          <p className="error">Catch Phrase is required</p>
        )}
      </div>

      <div>
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
              onChange={(e) => {
                field.onChange(e.target.files); // Use e.target.files directly
              }}
            />
          )}
        />
        {errors.images && <p>{errors.images.message}</p>}
      </div>

      <Button type="submit" variant="contained" color="primary">
        Submit
      </Button>
    </form>
  );
};
