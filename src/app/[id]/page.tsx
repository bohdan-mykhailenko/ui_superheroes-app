'use client';

import { useRouter } from 'next/navigation';
import { Superhero } from '@/types/Superhero';

function SuperheroDetailPage({ superhero }: { superhero: Superhero }) {
  const router = useRouter();

  console.log(router);

  return <h1>`Superhero Detail</h1>;
}

export default SuperheroDetailPage;
