import CharacterList from '@/components/CharacterList/CharacterList';
import Head from 'next/head';

const HomePage: React.FC = () => {
  return (
    <>
      <Head>
        <title>Rick and Morty Web Page</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href="https://github.com/LautaroEpifani/rickAndMortyApi" />
        <meta name='description' content='All Rick and Morty data you need' />
        <meta name='keywords' content='Rick and Morty, characters, show, TV series, Morty, Rick' />
        <meta property='og:title' content='Rick and Morty Web Page' />
        <meta property='og:description' content='All Rick and Morty data you need' />
        <meta property='og:url' content='https://github.com/LautaroEpifani/rickAndMortyApi' />
        <meta property='og:image' content='/assets/og-image.webp' />
        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:title' content='Rick and Morty Web Page' />
        <meta name='twitter:description' content='All Rick and Morty data you need' />
        <meta name='twitter:image' content='/assets/og-image.webp' />
      </Head>

      <main>
        <CharacterList />
      </main>
    </>
  );
};

export default HomePage;
