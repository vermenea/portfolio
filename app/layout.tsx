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
        <LanguageProvider>
          <div className="fixed inset-0 -z-10 bg-[url('/pink-bcg.webp')] bg-cover bg-center">
            {children}
          </div>
        </LanguageProvider>
      </body>
    </html>
  );
}
