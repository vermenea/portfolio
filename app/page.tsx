'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useLanguage } from '@/context/LanguageContext';
import { translations } from '@/translations/translations';
import LanguageToggle from '@/components/LanguageToggle';

export default function Home() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <div className='flex flex-col items-center justify-center w-screen h-screen overflow-hidden text-white p-4 relative'>
      <nav className='fixed top-0 left-0 w-screen h-16 flex items-center justify-between px-4'>
        <Link href='/'>
          <p className='text-lg md:text-xl font-semibold cursor-pointer'>
            {t.nav.home}
          </p>
        </Link>
        <Link href='/about'>
          <p className='text-lg md:text-xl font-semibold cursor-pointer'>
            {t.nav.about}
          </p>
        </Link>
        <Link href='/projects'>
          <p className='text-lg md:text-xl font-semibold cursor-pointer'>
            {t.nav.projects}
          </p>
        </Link>
      </nav>
      <div className='w-full px-4 flex flex-col md:justify-center justify-start md:text-center text-left'>
        <div className='flex md:justify-center justify-start my-6'>
          <Image
            src='/me.webp'
            alt='avatar'
            width={180}
            height={180}
            className='rounded-full'
          />
        </div>
        <h1 className='text-5xl sm:text-6xl font-bold font-code '>
          {t.home.typingText}
        </h1>
      </div>

      <div className='flex w-full mt-6 sm:justify-center justify-start items-start space-y-4 px-4'>
        <Link
          href='mailto:vermenea@gmail.com'
          className='px-6 py-2 rounded-lg bg-gradient-to-r from-red-500/70 to-pink-500/70 text-white hover:from-red-400 hover:to-pink-400 transition-all duration-300 transform hover:scale-105'
        >
          {t.home.contactMe}
        </Link>
      </div>

      <div className='flex space-x-4 absolute bottom-4'>
        <Link href='https://github.com/vermenea'>
          <Image src='/githubwhite.png' alt='github' width={24} height={24} />
        </Link>
        <Link href='https://www.linkedin.com/in/vermenea/'>
          <Image
            src='/linkedinwhite.png'
            alt='linkedin'
            width={24}
            height={24}
          />
        </Link>
        <Link href='https://x.com/vermenea'>
          <Image src='/twitter.png' alt='x' width={24} height={24} />
        </Link>
      </div>
      <div className='fixed bottom-4 right-4'>
        <LanguageToggle />
      </div>
    </div>
  );
}
