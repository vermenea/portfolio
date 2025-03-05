'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  const fullText = 'Are you looking for a frontend developer?';
  const answer = 'Yes ? Click here!';
  const [displayedText, setDisplayedText] = useState('');
  const [isTypingComplete, setIsTypingComplete] = useState(false);
  const typingSpeed = 100;
  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setDisplayedText(fullText.slice(0, index + 1));
      index++;
      if (index === fullText.length) {
        clearInterval(interval);
        setTimeout(() => {
          setIsTypingComplete(true);
        }, 1000);
      }
    }, typingSpeed);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className='flex flex-col items-center justify-center w-screen h-screen overflow-hidden text-white'>
      <nav className='fixed top-0 left-0 w-screen h-16 flex items-center justify-between px-4'>
        <Link href='/' passHref>
          <p className='text-lg font-semibold cursor-pointer'>Home</p>
        </Link>
        <Link href='/about' passHref>
          <p className='text-lg font-semibold cursor-pointer'>About</p>
        </Link>
        <Link href='/projects' passHref>
          <p className='text-lg font-semibold cursor-pointer'>Projects</p>
        </Link>
      </nav>

      <p className='text-2xl font-mono border-r-2 border-white pr-2 animate-pulse'>
        {displayedText}
      </p>
      {isTypingComplete && (
        <Link
          className='text-2xl font-mono border-r-2 border-white pr-2 animate-pulse'
          href='/about'
          passHref
        >
          {answer}
        </Link>
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
    </div>
  );
}
