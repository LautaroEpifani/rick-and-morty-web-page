import { useState } from 'react';

export const useCharacterSelection = () => {
  const [selectedCharacters, setSelectedCharacters] = useState<number[]>([]);
  const handleSelectCharacter = (id: number) => {
    if (selectedCharacters.includes(id)) {
      setSelectedCharacters(selectedCharacters.filter((characterId) => characterId !== id));
    } else {
      if (selectedCharacters.length < 2) {
        setSelectedCharacters((prev) => [...prev, id]);
      }
    }
  };

  return {
    selectedCharacters,
    handleSelectCharacter,
  };
};
