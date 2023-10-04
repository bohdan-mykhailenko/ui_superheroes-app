import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { AxiosError } from 'axios';
import React from 'react';

interface ErrorResponseProps {
  error?: AxiosError;
  errorFromOpenAI?: string;
}

export const ErrorResponse: React.FC<ErrorResponseProps> = ({
  error,
  errorFromOpenAI,
}) => {
  return (
    <Grid>
      <Typography
        variant="h2"
        color="error"
        sx={{
          marginBottom: '20px',
        }}
      >
        {errorFromOpenAI
          ? 'Error with Open Ai'
          : 'Error occured when fetching data'}
      </Typography>
      <Typography variant="h4" color="error">
        {errorFromOpenAI ? errorFromOpenAI : error?.message}
      </Typography>
    </Grid>
  );
};
