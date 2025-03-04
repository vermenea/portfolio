import Link from 'next/link';
import styles from './Home.module.css';
import Image from 'next/image';

export default function Home() {
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
      <h1 className='text-4xl font-semibold mb-12'>Vermenea</h1>
      <p className='text-lg'>
        This is a <span className={styles.rainbowText}>personal</span>{' '}
        portfolio.
      </p>
      <div className='flex space-x-4 absolute bottom-4'>
        <Link href='https://github.com/vermenea' passHref>
          <Image src='/githubwhite.png' alt='github' className='h-6' />
        </Link>
        <Link href='https://www.linkedin.com/in/vermenea/' passHref>
          <Image src='/linkedinwhite.png' alt='linkedin' className='h-6' />
        </Link>
        <Link href='https://x.com/vermenea' passHref>
          <Image src='/twitter.png' alt='x' className='h-6' />
        </Link>
      </div>
    </div>
  );
}
