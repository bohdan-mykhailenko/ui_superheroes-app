import SuperheroesList from '@/components/SuperheroesList/SuperheroesList';
import Link from 'next/link';
import React from 'react';

interface pageProps {}

const Superheroes: React.FC<pageProps> = () => {
  return (
    <div>
      <h1>Superheroes</h1>

      <Link href="/">
        <h4>Back to Home page</h4>
      </Link>

      <SuperheroesList />
    </div>
  );
};

export default Superheroes;
