import { QueryProvider } from '@/providers/QueryProvider';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Superheroes',
  description: 'Welcome to Next.js',
  keywords: ['Next', 'React'],
};

export default function SuperheroesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <QueryProvider>{children}</QueryProvider>;
}
