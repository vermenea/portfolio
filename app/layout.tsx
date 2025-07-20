import type { Metadata } from 'next';

import { LanguageProvider } from '@/context/LanguageContext';
import '@/style/globals.css';
import Footer from '@/components/Footer';
import LanguageToggle from '@/components/LanguageToggle';
import Nav from '@/components/Nav';

export const metadata: Metadata = {
  title: 'Natalia Zagórska - portfolio',
  description: 'Personal portfolio website',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body>
        <LanguageProvider>
          <Nav />
          {children}
          <div className='flex justify-center items-center'>
            <Footer />
          </div>
          <aside className='fixed bottom-4 right-4'>
            <LanguageToggle />
          </aside>
        </LanguageProvider>
      </body>
    </html>
  );
}
