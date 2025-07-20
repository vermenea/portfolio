'use client';

import Link from 'next/link';
import Image from 'next/image';

import { useLanguage } from '@/context/LanguageContext';
import { translations } from '@/translations/translations';

export default function Home() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <main className='flex flex-col items-center justify-center w-screen h-screen overflow-hidden text-white p-4 relative'>
      <section className='w-full px-4 flex flex-col md:justify-center justify-start md:text-center text-left'>
        <section className='flex md:justify-center justify-start my-6'>
          <Image
            src='/me.webp'
            alt='avatar'
            width={180}
            height={180}
            className='rounded-full'
          />
        </section>
        <h1 className='text-5xl sm:text-6xl font-bold font-code my-6'>
          {t.home.typingText}
        </h1>
        <section className='flex w-full justify-start md:justify-center items-start space-y-4 px-4 my-6'>
          <Link
            href='mailto:vermenea@gmail.com'
            className='px-6 py-2 rounded-lg bg-gradient-to-r from-red-500/70 to-pink-500/70 text-white hover:from-red-400 hover:to-pink-400 transition-all duration-300 transform hover:scale-105'
          >
            {t.home.contactMe}
          </Link>
        </section>
      </section>
    </main>
  );
}
