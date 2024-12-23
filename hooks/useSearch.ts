import { useState, useEffect } from 'react';
import { Character } from '@/types';

export const useSearch = (characters: Character[], filters: { name?: string; species?: string; gender?: string; status?: string }) => {
  const [filteredCharacters, setFilteredCharacters] = useState<Character[]>(characters);

  useEffect(() => {
    const filtered = characters.filter((character) => {
      return (
        (!filters.name || character.name.toLowerCase().includes(filters.name.toLowerCase())) &&
        (!filters.species || character.species.toLowerCase() === filters.species.toLowerCase()) &&
        (!filters.gender || character.gender.toLowerCase() === filters.gender.toLowerCase()) &&
        (!filters.status || character.status.toLowerCase() === filters.status.toLowerCase())
      );
    });

    setFilteredCharacters(filtered);
  }, [characters, filters]); 

  return { filteredCharacters, setFilteredCharacters };
};

