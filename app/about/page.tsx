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
    <div className='flex flex-col items-center justify-start min-h-screen p-4 pb-20 bg-gray-900'>
      <nav className='fixed top-0 left-0 w-screen h-16 flex items-center justify-between px-4 bg-gray-900/30 backdrop-blur-sm z-50'>
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
      <h1 className='text-3xl md:text-4xl font-semibold mt-20 md:mt-24'>
        {t.about.title}
      </h1>
      <div className='flex flex-col items-center max-w-4xl py-8 md:py-20'>
        <p className='text-base md:text-lg text-center px-4 md:px-24 mb-8'>
          {t.about.description}
        </p>
        <Image
          src='/me.png'
          alt='Me in AI generated art style'
          width={200}
          height={200}
          className='w-48 md:w-72 h-auto'
        />
      </div>
      <div>
          <Link
            href='mailto:vermenea@gmail.com'
            className='px-6 py-2 rounded-lg bg-gradient-to-r from-red-500/70 to-pink-500/70 text-white hover:from-red-400 hover:to-pink-400 transition-all duration-300 transform hover:scale-105'
          >
            {t.home.contactMe}
          </Link>
        </div>
      <div className='flex space-x-4 justify-center w-full mt-20 mb-20'>
        <Link href='https://github.com/vermenea' passHref>
          <Image
            src='/githubwhite.png'
            alt='github'
            width={24}
            height={24}
            className='hover:opacity-80 transition-opacity'
          />
        </Link>
        <Link href='https://www.linkedin.com/in/vermenea/' passHref>
          <Image
            src='/linkedinwhite.png'
            alt='linkedin'
            width={24}
            height={24}
            className='hover:opacity-80 transition-opacity'
          />
        </Link>
        <Link href='https://x.com/vermenea' passHref>
          <Image
            src='/twitter.png'
            alt='x'
            width={24}
            height={24}
            className='hover:opacity-80 transition-opacity'
          />
        </Link>
      </div>
      <div className='fixed bottom-4 right-4 flex gap-2 z-50'>
        <LanguageToggle />
      </div>
    </div>
  );
}
