import Image from 'next/image';
import Link from 'next/link';

const projects = [
  {
    title: 'PomoBuddy - Project',
    description:
      'PomoBuddy is a Pomodoro Timer App designed to help individuals manage their work time effectively using the Pomodoro Technique. The Pomodoro Technique is a time management method that breaks work into intervals, traditionally 25 minutes in length, separated by short breaks. This technique aims to improve focus and productivity.',
    link: 'https://your-pomo-buddy.vercel.app/',
  },
  {
    title: 'MemoMyChinchilla - Game',
    description:
      'MemoMyChinChilla is a memory card game built with vanilla JavaScript, where players match pairs of cards. The game features my four adorable chinchillas, adding a playful and personal touch to the challenge.',
    link: 'https://vermenea.github.io/MemoMyChinchilla/',
  },
  {
    title: 'DreamOps - Project',
    description:
      'DreamOps is an e-learning platform designed for individuals aspiring to become DevOps engineers. It provides a structured learning path, hands-on exercises, and essential resources to help users master DevOps principles, tools, and best practices.',
    link: 'https://frontend-staging.tuto.dev.pfaff.app/',
  },
];

export default function Projects() {
  return (
    <div className='flex flex-col items-center justify-center min-h-screen p-4'>
      <nav className='fixed top-0 left-0 w-screen h-16 flex items-center justify-between px-4'>
        <Link href='/' passHref>
          <p className='text-lg font-semibold text-white'>Home</p>
        </Link>
        <Link href='/about' passHref>
          <p className='text-lg font-semibold text-white'>About</p>
        </Link>
        <Link href='/projects' passHref>
          <p className='text-lg font-semibold text-white'>Projects</p>
        </Link>
      </nav>
      <h1 className='ml-4 text-4xl font-semibold mb-12 text-white mt-20'>
        Vermenea&apos;s Projects
      </h1>

      <div className='space-y-6 w-full max-w-4xl px-4'>
        {projects.map((project, index) => (
          <div
            key={index}
            className='bg-[#d9d9d9] w-full rounded-lg shadow-lg border-2 border-black relative'
          >
            <div className='bg-[#cfcece] text-white px-3 py-1 font-semibold rounded-t-md flex justify-between items-center'>
              <span>{project.title}</span>
              <div className='flex space-x-2'>
                <span className='w-3 h-3 bg-red-500 rounded-full'></span>
                <span className='w-3 h-3 bg-yellow-500 rounded-full'></span>
                <span className='w-3 h-3 bg-green-500 rounded-full'></span>
              </div>
            </div>
            <p className='p-3 text-sm text-black'>{project.description}</p>
            <Link href={project.link} passHref>
              <button className='bg-white border-2 border-black text-black px-4 py-1 rounded-md mx-3 my-2 hover:bg-gray-100'>
                See more
              </button>
            </Link>
          </div>
        ))}
      </div>

      <Link href='https://github.com/vermenea' passHref>
        <div className='flex items-center space-x-4 mt-8 text-white'>
          <p>Go check other projects (✿◡‿◡)</p>
          <Image src='/githubwhite.png' alt='github' width={24} height={24} />
        </div>
      </Link>
    </div>
  );
}
