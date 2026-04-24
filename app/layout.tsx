import type { Metadata } from 'next';
import './globals.css';
import StyledComponentsRegistry from './lib/registry';

export const metadata: Metadata = {
  title: 'Rogger Palomino - Portafolio',
  description:
    'Portafolio personal de Rogger Palomino — Desarrollador Full Stack | React, Next.js, Node.js, WordPress, GCP',
  keywords: [
    'portafolio',
    'full stack',
    'desarrollador',
    'react',
    'nextjs',
    'nodejs',
    'wordpress',
    'gcp',
    'freelance',
  ],
  authors: [{ name: 'Rogger Palomino' }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Josefin+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      </body>
    </html>
  );
}
