import Link from 'next/link';
import React from 'react';

export default function About() {
  return (
    <div className='flex flex-col items-center justify-center w-screen h-screen overflow-hidden'>
      <nav className='fixed top-0 left-0 w-screen h-16 flex items-center justify-between px-4'>
        <Link href='/' passHref>
          <p className='text-lg font-semibold'>Home</p>
        </Link>
        <Link href='/about' passHref>
          <p className='text-lg font-semibold'>About</p>
        </Link>
        <Link href='/projects' passHref>
          <p className='text-lg font-semibold'>Projects</p>
        </Link>
      </nav>
      <h1 className='text-4xl font-semibold'>About Vermenea</h1>
      <p className='text-lg'>This is the about page.</p>
    </div>
  );
}
