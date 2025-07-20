import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className='flex space-x-4 absolute bottom-4'>
      <Link href='https://github.com/vermenea'>
        <Image
          src='/githubwhite.png'
          alt='github'
          width={24}
          height={24}
          className='transform transition-transform duration-200 hover:rotate-12'
        />
      </Link>
      <Link href='https://www.linkedin.com/in/vermenea/'>
        <Image
          src='/linkedinwhite.png'
          alt='linkedin'
          width={24}
          height={24}
          className='transform transition-transform duration-200 hover:rotate-12'
        />
      </Link>
      <Link href='https://x.com/vermenea'>
        <Image
          src='/twitter.png'
          alt='x'
          width={24}
          height={24}
          className='transform transition-transform duration-200 hover:rotate-12'
        />
      </Link>
    </footer>
  );
}
