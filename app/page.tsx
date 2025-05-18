'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  const fullText = 'Are you looking for a website?';
  const [displayedText, setDisplayedText] = useState('');
  const typingSpeed = 100;
  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setDisplayedText(fullText.slice(0, index + 1));
      index++;
      if (index === fullText.length) {
        clearInterval(interval);
      }
    }, typingSpeed);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className='flex flex-col items-center justify-center w-screen h-screen overflow-hidden text-white p-4'>
      <nav className='fixed top-0 left-0 w-screen h-16 flex items-center justify-between px-4'>
        <Link href='/' passHref>
          <p className='text-lg md:text-xl font-semibold cursor-pointer'>
            Home
          </p>
        </Link>
        <Link href='/about' passHref>
          <p className='text-lg md:text-xl font-semibold cursor-pointer'>
            About
          </p>
        </Link>
        <Link href='/projects' passHref>
          <p className='text-lg md:text-xl font-semibold cursor-pointer'>
            Projects
          </p>
        </Link>
      </nav>

      <div>
        <p className='text-2xl md:text-4xl font-mono border-r-2 border-white pr-2 animate-pulse'>
          {displayedText}
        </p>
      </div>

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
    </div>
  );
}
