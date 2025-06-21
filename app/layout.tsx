import type { Metadata } from 'next';
import { LanguageProvider } from '@/context/LanguageContext';
import '@/style/globals.css';

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
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
