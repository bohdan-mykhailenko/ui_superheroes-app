import { API_URL } from '@/consts/api-url';
import { Superhero } from '@/types/Superhero';
import axios from 'axios';

export async function getAllSuperheroes(): Promise<Superhero[]> {
  try {
    const response = await axios.get(`${API_URL}/superheroes`);

    if (response.status === 200) {
      return response.data;
    }

    return response.data;
  } catch (error) {
    console.error('Error fetching superheroes:', error);
    throw error;
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

    // Append text data
    formData.append('nickname', superheroData.nickname);
    formData.append('real_name', superheroData.real_name);
    formData.append('origin_description', superheroData.origin_description);
    formData.append('superpowers', superheroData.superpowers);
    formData.append('catch_phrase', superheroData.catch_phrase);

    // Append image files
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
  } catch (error) {
    console.error('Error posting superhero:', error);
    throw error;
  }
}
