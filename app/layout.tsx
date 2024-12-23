import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';

import './globals.css';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-poppins',
});

export const metadata: Metadata = {
  title: 'Rick and Morty Web Page',
  description: 'All Rick and Morty data you need',
  keywords: 'Rick and Morty, characters, show, TV series, Morty, Rick',
  openGraph: {
    title: 'Rick and Morty Web Page',
    description: 'All Rick and Morty data you need',
    url: 'https://github.com/LautaroEpifani/rickAndMortyApi',
    images: [
      {
        url: '/assets/og-image.webp',
        width: 1200,
        height: 630,
        alt: 'Rick and Morty Web Page',
      },
    ],
    siteName: 'Rick and Morty Web Page',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Rick and Morty Web Page',
    description: 'All Rick and Morty data you need',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={`${poppins.variable} font-poppins antialiased`}>{children}</body>
    </html>
  );
}
