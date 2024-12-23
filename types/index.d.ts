declare interface Character {
  id: number;
  name: string;
  image: string;
  origin: {
    name: string;
  };
  gender: string;
  species: string;
  status: string;
  episode: string[];
}

declare interface CardProps {
  character: Character;
  handleSelectCharacter: (id: number) => void;
  selectedCharacters: number[];
}

declare interface ActionButtonProps {
  text: string;
  onClick: () => void;
  disabled?: boolean;
}

declare interface PaginationButtonProps {
  text: string;
  onClick: () => void;
  disabled?: boolean;
}

declare interface SearchFilterProps {
  filters: { name: string; species: string; gender: string; status: string };
  setFilters: React.Dispatch<React.SetStateAction<{ name: string; species: string; gender: string; status: string }>>;
}


export { Character, CardProps, ActionButtonProps, PaginationButtonProps, SearchFilterProps };
