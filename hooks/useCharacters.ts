import { useState, useEffect } from 'react';
import { getCharacters } from '@/lib/actions/rickAndMorty.actions';
import { Character } from '@/types';

export const useCharacters = (page: number, filters: { name?: string; species?: string; gender?: string; status?: string }) => {
    const [characters, setCharacters] = useState<Character[]>([]);
    const [totalPages, setTotalPages] = useState(1);
  
    useEffect(() => {
      const fetchCharacters = async () => {
        try {
          const data = await getCharacters(page, filters); 
          setCharacters(data.results);
          setTotalPages(data.info.pages);
        } catch (error) {
          console.error('Error fetching characters:', error);
        }
      };
  
      fetchCharacters();
    }, [page, filters]);
  
    return { characters, totalPages };
  };
  
