import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Detailed Page',
  description: 'Welcome to Next.js',
  keywords: ['Next', 'React'],
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <div>{children}</div>;
}
