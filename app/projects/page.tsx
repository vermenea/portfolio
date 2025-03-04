import Link from 'next/link';

export default function Projects() {
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
      <h1 className='text-4xl font-semibold mb-12'>Vermenea's Projects</h1>
      <Link href='https://github.com/vermenea' passHref>
        <div className='flex items-center space-x-4'>
          <p>Go check those projects (✿◡‿◡)</p>
          <img src='/githubwhite.png' alt='github' className='h-6' />
        </div>
      </Link>
    </div>
  );
}
