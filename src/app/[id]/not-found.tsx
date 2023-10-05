import { ErrorResponse } from '@/components/ErrorResponse';
import React from 'react';

const NotFound: React.FC = () => {
  return <ErrorResponse stringMessage="Not Found Page 404" />;
};

export default NotFound;
