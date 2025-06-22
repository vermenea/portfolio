'use client';
import Link from 'next/link';
import Image from 'next/image';

import LanguageToggle from '@/components/LanguageToggle';
import { useLanguage } from '@/context/LanguageContext';
import { translations } from '@/translations/translations';
import '@/style/glassy-hover.css';
import { Spec } from '@/types/types';
import Nav from '@/components/Nav';

export default function About() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <div className='flex flex-col items-center justify-between w-screen h-screen p-4'>
      <header>
        <Nav />
      </header>
      <main className='flex flex-col items-center w-full'>
        <h1 className='text-3xl md:text-4xl font-semibold mt-20 md:mt-24'>
          {t.about.title}
        </h1>
        <section className='flex flex-col items-center max-w-4xl py-8 md:py-20'>
          <p className='text-base md:text-lg text-center px-4 md:px-24 mb-8'>
            {t.about.description}
          </p>
        </section>
        <section className='grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl w-full px-4 mb-4'>
          {t.about.specializations.map((spec: Spec, idx: number) => (
            <div
              key={idx}
              className='border bg-black/30 backdrop-blur-sm p-6 rounded-lg border-red-500/70 text-center'
            >
              <h2 className='text-xl font-bold mb-2 text-white drop-shadow'>
                {spec.title}
              </h2>
              <p className='text-center text-white/90'>{spec.description}</p>
            </div>
          ))}
        </section>
      </main>
      <footer className='flex space-x-4 justify-center w-full mt-10'>
        <Link href='https://github.com/vermenea'>
          <Image
            src='/githubwhite.png'
            alt='github'
            width={24}
            height={24}
            className='hover:opacity-80 transition-opacity'
          />
        </Link>
        <Link href='https://www.linkedin.com/in/vermenea/'>
          <Image
            src='/linkedinwhite.png'
            alt='linkedin'
            width={24}
            height={24}
            className='hover:opacity-80 transition-opacity'
          />
        </Link>
        <Link href='https://x.com/vermenea'>
          <Image
            src='/twitter.png'
            alt='x'
            width={24}
            height={24}
            className='hover:opacity-80 transition-opacity'
          />
        </Link>
      </footer>
      <div className='fixed bottom-4 right-4 flex gap-2 z-50'>
        <LanguageToggle />
      </div>
    </div>
  );
}
