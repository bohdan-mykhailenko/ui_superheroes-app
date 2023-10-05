import { API_URL } from '@/consts/api-url';
import { Superhero } from '@/types/Superhero';
import axios from 'axios';

interface SuperheroesFromServer {
  superheroes: Superhero[];
  totalSuperheroes: number;
}

export async function getAllSuperheroes(
  page: number = 1,
): Promise<SuperheroesFromServer> {
  try {
    const response = await axios.get(`${API_URL}/superheroes?page=${page}`);

    if (response.status === 200) {
      return response.data;
    }

    return response.data;
  } catch (error: any) {
    throw new Error(`Failed to fetch superheroes: ${error.message}`);
  }
}

export const deleteSuperhero = async (id: number) => {
  try {
    await axios.delete(`${API_URL}/superheroes/${id}`);
  } catch (error: any) {
    throw new Error(
      `Failed to delete superhero with ID ${id}: ${error.message}`,
    );
  }
};

export async function postSuperhero(superheroData: Omit<Superhero, 'id'>) {
  try {
    const formData = new FormData();

    formData.append('nickname', superheroData.nickname);
    formData.append('real_name', superheroData.real_name);
    formData.append('origin_description', superheroData.origin_description);
    formData.append('superpowers', superheroData.superpowers);
    formData.append('catch_phrase', superheroData.catch_phrase);

    if (superheroData.images && superheroData.images.length > 0) {
      for (let i = 0; i < superheroData.images.length; i++) {
        formData.append('images', superheroData.images[i]);
      }
    }

    const response = await axios.post(`${API_URL}/superheroes`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });

    if (response.status === 201) {
      return response.data;
    }

    return response.data;
  } catch (error: any) {
    throw new Error(`Failed to create new superhero: ${error.message}`);
  }
}

export async function updateSuperhero(
  superheroId: number,
  updatedSuperheroData: Omit<Partial<Superhero>, 'id'>,
) {
  try {
    const formData = new FormData();

    for (const key in updatedSuperheroData) {
      if (key === 'images') {
        if (
          updatedSuperheroData.images &&
          updatedSuperheroData.images.length > 0
        ) {
          for (let i = 0; i < updatedSuperheroData.images.length; i++) {
            formData.append('images', updatedSuperheroData.images[i]);
          }
        }

        continue;
      }

      const updatedValue =
        updatedSuperheroData[key as keyof Omit<Superhero, 'id'>];

      if (updatedValue) {
        formData.append(key, updatedValue.toString());
      }
    }

    const response = await axios.patch(
      `${API_URL}/superheroes/${superheroId}`,
      formData,
      {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      },
    );

    if (response.status === 200) {
      return response.data;
    }

    return response.data;
  } catch (error: any) {
    throw new Error(`Failed to update superhero: ${error.message}`);
  }
}
