'use client';
import Link from 'next/link';
import LanguageToggle from '@/components/LanguageToggle';
import { useLanguage } from '@/context/LanguageContext';
import { translations } from '@/translations/translations';

const projectLinks = [
  'https://your-pomo-buddy.vercel.app/',
  'https://vermenea.github.io/MemoMyChinchilla/',
  'https://frontend-staging.tuto.dev.pfaff.app/',
  'https://anitamaruszewska.pl/',
] as const;

export default function Projects() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <div className='relative flex flex-col items-center justify-center min-h-screen p-4'>
      <div className='absolute inset-0 bg-[url("/bcg.jpg")] bg-cover bg-center opacity-20 z-0'></div>
      <div className='relative z-10 w-full flex flex-col items-center'>
        <nav className='fixed top-0 left-0 w-screen h-16 flex items-center justify-between px-4 bg-transparent-900/30 backdrop-blur-sm z-50'>
          <Link href='/' passHref>
            <p className='text-lg font-semibold text-white'>{t.nav.home}</p>
          </Link>
          <Link href='/about' passHref>
            <p className='text-lg font-semibold text-white'>{t.nav.about}</p>
          </Link>
          <Link href='/projects' passHref>
            <p className='text-lg font-semibold text-white'>{t.nav.projects}</p>
          </Link>
        </nav>
        <h1 className='ml-4 text-4xl font-semibold mb-12 text-white mt-20 text-center'>
          {t.projects.title}
        </h1>

        <div className='space-y-8 max-w-2xl'>
          {t.projects.items.map((project, index) => (
            <div
              key={index}
              className='border bg-black/30 backdrop-blur-sm p-6 rounded-lg border-red-500/70'
            >
              <h2 className='text-2xl mb-4'>{project.title}</h2>
              <p className='mb-6'>{project.description}</p>
              <div className='flex gap-4'>
                {!['Automatikserwis - car workshop website', 'KodON - science club website', 'KodON - strona internetowa koła naukowego', 'Automatikserwis - strona internetowa warsztatu samochodowego'].includes(project.title) && (
                  <Link
                    href={projectLinks[index] || '#'}
                    className='px-6 py-2 rounded-lg bg-gradient-to-r from-red-500/70 to-pink-500/70 text-white hover:from-red-400 hover:to-pink-400 transition-all duration-300 transform hover:scale-105'
                  >
                    {t.projects.goToProject}
                  </Link>
                )}
              </div>
            </div>
          ))}
        </div>

        <Link href='https://github.com/vermenea?tab=repositories' className='text-lg text-center mt-4' passHref>{t.projects.checkOthers}</Link>
        <div className='fixed bottom-4 right-4 flex gap-2'>
          <LanguageToggle />
        </div>
      </div>
    </div>
  );
}
