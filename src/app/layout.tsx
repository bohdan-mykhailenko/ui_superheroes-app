import type { Metadata } from 'next';
import { ThemeRegistry } from './ThemeRegistry';
import '../styles/main.scss';
import '../styles/global.css';

export const metadata: Metadata = {
  title: 'Superheroes',
  description: 'Welcome to Next.js',
  keywords: ['Next', 'React'],
};

const bodyStyles = {
  backgroundColor: 'var(--blue-main)',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,400;0,500;0,600;0,700;0,800;0,900;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet"
        />
      </head>

      <body suppressHydrationWarning={true} style={bodyStyles}>
        <ThemeRegistry options={{ key: 'mui' }}>{children}</ThemeRegistry>
      </body>
    </html>
  );
}
