import Link from 'next/link';
import styles from './Home.module.css';

export default function Home() {
  return (
    <div className='flex flex-col items-center justify-center w-screen h-screen overflow-hidden'>
      <h1 className='text-4xl font-semibold'>Vermenea</h1>
      <p className='text-lg'>
        This is a <span className={styles.rainbowText}>personal</span> portfolio.
      </p>
      <div className='flex space-x-4 mt-4'>
        <Link href='https://github.com/vermenea' passHref>
          <img src='/github.png' alt='github' className='h-12' />
        </Link>
        <Link href='https://www.linkedin.com/in/vermenea/' passHref>
          <img src='/linkedin-logo.png' alt='linkedin' className='h-12' />
        </Link>
        <Link href='https://x.com/vermenea' passHref>
          <img src='/twitter.png' alt='x' className='h-12' />
        </Link>
      </div>
    </div>
  );
}
