import Link from 'next/link';
import React from 'react';
import { SuperheroesList } from '@/components/SuperheroesList';
import { QueryProvider } from '@/providers/QueryProvider';

interface pageProps {}

const Superheroes: React.FC<pageProps> = () => {
  return (
    <div>
      <h1>Superheroes</h1>

      <QueryProvider>
        <SuperheroesList />
      </QueryProvider>
    </div>
  );
};

export default Superheroes;
