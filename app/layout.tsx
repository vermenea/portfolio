import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Vermenea',
  description: 'Personal portfolio website',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className='bg-gray-900'>{children}</body>
    </html>
  );
}
