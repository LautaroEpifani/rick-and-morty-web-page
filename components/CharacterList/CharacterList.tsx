'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import styles from './CharacterList.module.css';
import Card from '../Card/Card';
import ActionButton from '../ActionButtons/ActionButton';
import PaginationButton from '../PaginationButton/PaginationButton';
import SearchFilter from '../SearchFilter/SearchFilter';
import { useCharacters } from '@/hooks/useCharacters';
import { useCharacterSelection } from '@/hooks/useCharacterSelection';
import { useSearch } from '@/hooks/useSearch';

const CharacterList: React.FC = () => {
  const [page, setPage] = useState(1);
  
  const [filters, setFilters] = useState({ name: '', species: '', gender: '', status: '' });

  const { characters, totalPages } = useCharacters(page, filters);

  const { selectedCharacters, handleSelectCharacter } = useCharacterSelection();

  const { filteredCharacters, setFilteredCharacters } = useSearch(characters, filters);

  const router = useRouter();

  useEffect(() => {
    setFilteredCharacters(characters);
  }, [characters, setFilteredCharacters]);

  const handleShowCharacterDetails = () => {
    if (selectedCharacters.length === 1) {
      router.push(`/characters/detail/${selectedCharacters[0]}`);
    }
  };

  const handleCommonEpisodes = () => {
    if (selectedCharacters.length === 2) {
      router.push(`/characters/common-episode/${selectedCharacters[0]}/${selectedCharacters[1]}`);
    }
  };

  const handleNextPage = () => {
    if (page < totalPages) setPage((prev) => prev + 1);
  };

  const handlePrevPage = () => {
    if (page > 1) setPage((prev) => prev - 1);
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Rick and Morty Characters</h1>
      <div>
        <div className={styles.buttons}>
          <ActionButton
            text='Show Character Details'
            onClick={handleShowCharacterDetails}
            disabled={selectedCharacters.length !== 1}
          />
          <ActionButton
            text='Episodes Where They Are Together'
            onClick={handleCommonEpisodes}
            disabled={selectedCharacters.length !== 2}
          />
        </div>
        <SearchFilter filters={filters} setFilters={setFilters} />
      </div>

      <div className={styles.grid}>
        {filteredCharacters.map((character) => (
          <Card
            key={character.id}
            character={character}
            handleSelectCharacter={handleSelectCharacter}
            selectedCharacters={selectedCharacters}
          />
        ))}
      </div>

      <div className={styles.pagination}>
        <PaginationButton text='Previous' onClick={handlePrevPage} disabled={page === 1} />
        <span className={styles.paginationInfo}>
          Page {page} of {totalPages}
        </span>
        <PaginationButton text='Next' onClick={handleNextPage} disabled={page === totalPages} />
      </div>
    </div>
  );
};

export default CharacterList;
