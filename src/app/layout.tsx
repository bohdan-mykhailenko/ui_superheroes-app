import type { Metadata } from 'next';
import { ThemeRegistry } from './ThemeRegistry';

export const metadata: Metadata = {
  title: 'Superheroes',
  description: 'Welcome to Next.js',
  keywords: ['Next', 'React'],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true}>
        <ThemeRegistry options={{ key: 'mui' }}>{children}</ThemeRegistry>
      </body>
    </html>
  );
}
