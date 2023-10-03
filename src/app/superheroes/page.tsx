import SuperheroesList from '@/components/SuperheroesList/SuperheroesList';
import React from 'react';

interface pageProps {}

const Superheroes: React.FC<pageProps> = () => {
  return (
    <div>
      <h1>Superheroes</h1>

      <SuperheroesList />
    </div>
  );
};

export default Superheroes;
