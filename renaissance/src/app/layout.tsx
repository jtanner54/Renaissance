import type { Metadata } from 'next';
import '@/src/styles/globals.css';
import { geistSans } from '@/src/styles/fonts';
import NavBar from '@/src/Components/NavBar';

export const metadata: Metadata = {
  title: 'Jack Tanner | Portfolio',
  description: 'Jack Tanner\'s Portfolio Website',
};

export default function RootLayout({ children }: {children: React.ReactNode }) {
  return (
    <html lang='en'>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body className={`${geistSans.className} antialiased`}>
        <NavBar />
        {children}
      </body>
    </html>
  );
}
