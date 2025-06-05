'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useLanguage } from '@/context/LanguageContext';
import { translations } from '@/translations/translations';
import LanguageToggle from '@/components/LanguageToggle';

export default function Home() {
  const { language } = useLanguage();
  const t = translations[language];
  const fullText = t.home.typingText;
  const [displayedText, setDisplayedText] = useState('');
  const [showButton, setShowButton] = useState(false);
  const typingSpeed = 100;

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setDisplayedText(fullText.slice(0, index + 1));
      index++;
      if (index === fullText.length) {
        clearInterval(interval);
        setTimeout(() => setShowButton(true), 1000);
      }
    }, typingSpeed);

    return () => clearInterval(interval);
  }, [fullText]);

  return (
    <div className='flex flex-col items-center justify-center w-screen h-screen overflow-hidden text-white p-4 bg-gray-900'>
      <nav className='fixed top-0 left-0 w-screen h-16 flex items-center justify-between px-4'>
        <Link href='/' passHref>
          <p className='text-lg md:text-xl font-semibold cursor-pointer'>
            {t.nav.home}
          </p>
        </Link>
        <Link href='/about' passHref>
          <p className='text-lg md:text-xl font-semibold cursor-pointer'>
            {t.nav.about}
          </p>
        </Link>
        <Link href='/projects' passHref>
          <p className='text-lg md:text-xl font-semibold cursor-pointer'>
            {t.nav.projects}
          </p>
        </Link>
      </nav>
      <div>
        <p className='text-2xl md:text-4xl font-mono border-r-2 border-white pr-2 animate-pulse text-center'>
          {displayedText}
        </p>
      </div>

      {showButton && (
        <div className='mt-8'>
          <Link
            href='mailto:vermenea@gmail.com'
            className='px-6 py-2 rounded-lg bg-gradient-to-r from-red-500/70 to-pink-500/70 text-white hover:from-red-400 hover:to-pink-400 transition-all duration-300 transform hover:scale-105'
          >
            {t.home.contactMe}
          </Link>
        </div>
      )}

      <div className='flex space-x-4 absolute bottom-4'>
        <Link href='https://github.com/vermenea' passHref>
          <Image src='/githubwhite.png' alt='github' width={24} height={24} />
        </Link>
        <Link href='https://www.linkedin.com/in/vermenea/' passHref>
          <Image
            src='/linkedinwhite.png'
            alt='linkedin'
            width={24}
            height={24}
          />
        </Link>
        <Link href='https://x.com/vermenea' passHref>
          <Image src='/twitter.png' alt='x' width={24} height={24} />
        </Link>
      </div>
      <div className='fixed bottom-4 right-4'>
        <LanguageToggle />
      </div>
    </div>
  );
}
