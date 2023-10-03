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
