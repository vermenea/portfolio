import Link from 'next/link';
import styles from '../Home.module.css';
import Image from 'next/image';

export default function About() {
  return (
    <div className='flex flex-col items-center justify-center w-screen h-screen overflow-hidden p-4'>
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
      <h1 className='text-4xl font-semibold mt-16 md:mt-24'>About Vermenea</h1>
      <div className='flex flex-col items-center sm:h-1/2 sm:text-xs md:text-md'>
        <p className='text-lg text-center px-4 sm:px-24 my-4 sm:my-4'>
          Oh hello there! My name is Natalia or Vermenea - I'm a{' '}
          <span className={styles.rainbowText}>
            caffeine-fueled frontend sorcerer
          </span>{' '}
          who turns pixels into experiences and coffee into code. I specialize
          in crafting sleek, responsive user interfaces with Javascript, Next.js
          and React. My journey in coding has been a wild ride, full of
          triumphs, facepalm moments, and the occasional “why is it happening?!”
          debugging marathon. If you need a website or an employee, I'm your
          gal!
        </p>
        <Image
          src='./justagirl.png'
          alt='Im just a girl hamster meme'
          className='h-36'
        />
      </div>
    </div>
  );
}
