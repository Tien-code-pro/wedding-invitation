import './globals.css';
import { Playfair_Display, Great_Vibes } from 'next/font/google';
import type { Metadata } from 'next';

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
});

const greatVibes = Great_Vibes({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-great-vibes',
});
export const metadata: Metadata = {
  title: 'Wedding Invitation !!!',
  description: 'A beautiful wedding invitation web page.',
  icons: {
    icon: '/favicon.ico', // đây là đường dẫn tới favicon
  },
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="vi">
      <body className={`${playfair.variable} ${greatVibes.variable} `}>
        {children}
      </body>
    </html>
  );
}
