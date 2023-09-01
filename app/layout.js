import './globals.css';
import { Inter } from 'next/font/google';
import Navigation from './ui/Navigation';
import Footer from './ui/Footer';

const font = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Urban Tech',
  description: `Building Tomorrow's Solutions Today.`,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={font.className}>
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}
