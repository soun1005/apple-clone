import { Inter } from 'next/font/google';
import './globals.css';
import Nav from '../../components/nav';
import 'normalize.css/normalize.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Apple clone',
  description: 'Generated by create next app',
  icons: {
    icon: '/icon.ico',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/icon.ico" sizes="any" />
      </head>
      <body className={inter.className}>
        <Nav />
        {children}
      </body>
    </html>
  );
}
