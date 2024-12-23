'use client';

import { useEffect, useState } from 'react';
import { getCharacterById } from '@/lib/actions/rickAndMorty.actions';
import { usePathname } from 'next/navigation';
import styles from './page.module.css';
import { ThreeDots } from 'react-loader-spinner';

const EpisodesPage = () => {
  const pathname = usePathname();
  const pathSegments = pathname.split('/');

  const character1 = pathSegments[3];
  const character2 = pathSegments[4];

  const [episodes, setEpisodes] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (character1 && character2) {
      const findCommonEpisodes = async () => {
        setLoading(true);
        setError(null);

        try {
          const data1 = await getCharacterById(Number(character1));
          const data2 = await getCharacterById(Number(character2));

          if (data1 && data2) {
            const commonEpisodes = data1.episode.filter((ep: string) => data2.episode.includes(ep));
            setEpisodes(commonEpisodes);
          } else {
            setError('Failed to fetch character data.');
          }
        } catch (error) {
          console.error('Error fetching episodes:', error);
          setError('An error occurred while fetching episodes.');
        } finally {
          setLoading(false);
        }
      };

      findCommonEpisodes();
    }
  }, [character1, character2]);

  if (loading) {
    return (
      <div className={styles.loaderContainer}>
        <ThreeDots height='80' width='80' color='#00ff88' ariaLabel='loading' />
      </div>
    );
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div className={styles.container}>
      <h1>Common Episodes</h1>
      {episodes.length > 0 ? (
        <ul className={styles.episodeList}>
          {episodes.map((episode, index) => (
            <li key={index} className={styles.episodeItem}>
              {episode.split('/').pop()}
            </li>
          ))}
        </ul>
      ) : (
        <p>No common episodes found</p>
      )}
    </div>
  );
};

export default EpisodesPage;
