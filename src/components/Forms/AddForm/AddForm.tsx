'use client';

import React from 'react';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import { superheroValidationSchema } from '@/validation/superheroValidationSchema';
import { Loader } from '@/components/Loader';
import styles from './AddForm.module.scss';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { Button, InputLabel, TextField } from '@mui/material';

interface SuperheroFormValues {
  nickname: string;
  real_name: string;
  origin_description: string;
  superpowers: string;
  catch_phrase: string;
  images: FileList | null;
}

export const AddForm: React.FC = () => {
  const initialValues: SuperheroFormValues = {
    nickname: '',
    real_name: '',
    origin_description: '',
    superpowers: '',
    catch_phrase: '',
    images: null,
  };

  const handleSubmit = (
    values: SuperheroFormValues,
    { setSubmitting }: { setSubmitting: (isSubmitting: boolean) => void },
  ) => {
    console.log(values);
    setSubmitting(false);
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={superheroValidationSchema}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting }) => (
        <Form>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <InputLabel htmlFor="nickname">Nickname:</InputLabel>
              <Field
                type="text"
                name="nickname"
                as={TextField}
                variant="outlined"
                fullWidth
                id="nickname"
              />
              <ErrorMessage name="nickname">
                {(message) => (
                  <Typography variant="h4" color="error">
                    {message}
                  </Typography>
                )}
              </ErrorMessage>
            </Grid>

            <Grid item xs={12}>
              <InputLabel htmlFor="real_name">Real Name:</InputLabel>
              <Field
                type="text"
                name="real_name"
                as={TextField}
                variant="outlined"
                fullWidth
                id="real_name"
              />
              <ErrorMessage name="real_name">
                {(message) => (
                  <Typography variant="h4" color="error">
                    {message}
                  </Typography>
                )}
              </ErrorMessage>
            </Grid>

            <Grid item xs={12}>
              <InputLabel htmlFor="origin_description">
                Origin Description:
              </InputLabel>
              <Field
                name="origin_description"
                as={TextField}
                variant="outlined"
                fullWidth
                id="origin_description"
                multiline
                rows={4}
              />
              <ErrorMessage name="origin_description">
                {(message) => (
                  <Typography variant="h4" color="error">
                    {message}
                  </Typography>
                )}
              </ErrorMessage>
            </Grid>

            <Grid item xs={12}>
              <InputLabel htmlFor="superpowers">Superpowers:</InputLabel>
              <Field
                name="superpowers"
                as={TextField}
                variant="outlined"
                fullWidth
                id="superpowers"
                multiline
                rows={4}
              />
              <ErrorMessage name="superpowers">
                {(message) => (
                  <Typography variant="h4" color="error">
                    {message}
                  </Typography>
                )}
              </ErrorMessage>
            </Grid>

            <Grid item xs={12}>
              <InputLabel htmlFor="catch_phrase">Catch Phrase:</InputLabel>
              <Field
                type="text"
                name="catch_phrase"
                as={TextField}
                variant="outlined"
                fullWidth
                id="catch_phrase"
              />
              <ErrorMessage name="catch_phrase">
                {(message) => (
                  <Typography variant="h4" color="error">
                    {message}
                  </Typography>
                )}
              </ErrorMessage>
            </Grid>

            <Grid item xs={12}>
              <InputLabel htmlFor="images">Images:</InputLabel>
              <Field
                type="file"
                name="images"
                multiple
                accept=".jpg, .jpeg, .png, .gif, .jfif, .webp"
                id="images"
              />
              <ErrorMessage name="images">
                {(message) => (
                  <Typography variant="h4" color="error">
                    {message}
                  </Typography>
                )}
              </ErrorMessage>
            </Grid>
          </Grid>

          <Button
            type="submit"
            variant="contained"
            color="primary"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Submitting...' : 'Submit'}
          </Button>
        </Form>
      )}
    </Formik>
  );
};
