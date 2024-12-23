import { getCharacterById } from '@/lib/actions/rickAndMorty.actions';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import styles from './page.module.css';
import Link from 'next/link';

const CharacterDetailPage = async ({
  params,
}: {
  params: {
    id: string;
  };
}) => {
  const id = (await params)?.id || '';

  const characterData = await getCharacterById(Number(id));

  if (!characterData) {
    notFound();
  }

  return (
    <div className={styles.detailContainer}>
      <h2>{characterData.name}</h2>
      <div className={styles.detailWrapper}>
        <Image
          src={characterData.image}
          alt={characterData.name}
          width={200}
          height={200}
          className={styles.detailImage}
          loading="lazy"
        />
        <div>
          <p>
            <strong>Origin:</strong> {characterData.origin.name}
          </p>
          <p>
            <strong>Gender:</strong> {characterData.gender}
          </p>
          <p>
            <strong>Species:</strong> {characterData.species}
          </p>
          <p>
            <strong>Status:</strong> {characterData.status}
          </p>
          <p>
            <strong>First Episode:</strong> {characterData.episode[0].split('/').pop()}
          </p>
        </div>
      </div>
      <Link href='/'>
        <button className={styles.backButton}>Back to Characters</button>
      </Link>
    </div>
  );
};

export default CharacterDetailPage;
