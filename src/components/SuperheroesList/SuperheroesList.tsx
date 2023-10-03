'use client';

import { getAllSuperheroes } from '@/api/superheroes';
import { API_URL } from '@/consts/api-url';
import { Superhero } from '@/types/Superhero';
import { AxiosError } from 'axios';
import React from 'react';
import { useQuery } from 'react-query';

function SuperheroesList() {
  const {
    data: superheroes,
    isLoading,
    isError,
    error,
  } = useQuery<Superhero[]>('superheroes', getAllSuperheroes);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error:</div>;
  }

  return (
    <div>
      <h1>Superheroes</h1>
      <ul>
        {superheroes?.map((hero) => (
          <li key={hero.nickname}>
            <h2>{hero.nickname}</h2>
            <p>Real Name: {hero.real_name}</p>
            <p>Origin: {hero.origin_description}</p>
            <p>Superpowers: {hero.superpowers}</p>
            <p>Catch Phrase: "{hero.catch_phrase}"</p>
            <div>
              Images:
              <ul>
                {hero.images.map((image, index) => (
                  <li key={index}>
                    <img
                      width={40}
                      height={40}
                      src={`${API_URL}/images/superheroes/${image}`}
                      alt={`Image ${index}`}
                    />
                  </li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SuperheroesList;
