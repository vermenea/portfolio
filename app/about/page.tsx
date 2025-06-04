'use client';
import Link from 'next/link';

import Image from 'next/image';
import LanguageToggle from '@/components/LanguageToggle';
import { useLanguage } from '@/context/LanguageContext';
import { translations } from '@/translations/translations';

export default function About() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <div className='flex flex-col items-center justify-center w-screen h-screen overflow-hidden p-4'>
      <nav className='fixed top-0 left-0 w-screen h-16 flex items-center justify-between px-4'>
        <Link href='/' passHref>
          <p className='text-lg font-semibold'>{t.nav.home}</p>
        </Link>
        <Link href='/about' passHref>
          <p className='text-lg font-semibold'>{t.nav.about}</p>
        </Link>
        <Link href='/projects' passHref>
          <p className='text-lg font-semibold'>{t.nav.projects}</p>
        </Link>
      </nav>
      <h1 className='text-4xl font-semibold mt-16 md:mt-24'>{t.about.title}</h1>
      <div className='flex flex-col items-center sm:h-1/2 sm:text-xs md:text-md'>
        <p className='text-lg text-center px-4 sm:px-24 my-4 sm:my-4'>
          {t.about.description}
        </p>
        <Image
          src='/justagirl.png'
          alt='Im just a girl hamster meme'
          width={124}
          height={124}
        />
      </div>
      <div className='fixed bottom-4 right-4 flex gap-2'>
        <LanguageToggle />
      </div>
    </div>
  );
}
