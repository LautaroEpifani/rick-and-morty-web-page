'use server';

import axios from 'axios';

const RICK_AND_MORTY_API = 'https://rickandmortyapi.com/api';

export const getCharacters = async (
  page: number,
  filters: { name?: string; species?: string; gender?: string; status?: string },
) => {
  try {
    const { name, species, gender, status } = filters;

    const response = await axios.get(`${RICK_AND_MORTY_API}/character`, {
      params: {
        page,
        name,
        species,
        gender,
        status,
      },
    });

    return response.data;
  } catch (error) {
    console.error('Error fetching characters:', error);
    throw new Error('Failed to fetch characters');
  }
};

export const getCharacterById = async (id: number) => {
  try {
    const response = await axios.get(`${RICK_AND_MORTY_API}/character/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching character details:', error);
    throw new Error('Failed to fetch character details');
  }
};
