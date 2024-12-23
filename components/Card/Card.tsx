import { CardProps } from '@/types';
import Image from 'next/image';
import styles from './Card.module.css';

const Card = ({ character, handleSelectCharacter, selectedCharacters }: CardProps) => {
  return (
    <div
      key={character.id}
      className={`${styles.card} ${selectedCharacters.includes(character.id) ? styles.selected : ''}`}
      onClick={() => handleSelectCharacter(character.id)}
    >
      <Image
        src={character.image}
        alt={character.name}
        width={200}
        height={200}
        className={styles.image}
        loading='lazy'
      />
      <p>{character.name}</p>
    </div>
  );
};

export default Card;
