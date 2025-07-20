'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

import { useLanguage } from '@/context/LanguageContext';
import { translations } from '@/translations/translations';
import { containerVariants, itemVariants } from '@/animations/animations';

const projectLinks: string[] = [
  'https://your-pomo-buddy.vercel.app/',
  'https://anitamaruszewska.pl/',
  'https://dank-diary.vercel.app/',
] as const;

export default function Projects() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <div className='relative flex flex-col items-center justify-center p-6 min-h-[90vh]'>
      <motion.main
        variants={containerVariants}
        initial='hidden'
        animate='visible'
        className='relative z-10 w-full flex flex-col items-center'
      >
        <motion.h1
          variants={itemVariants}
          className='ml-4 text-4xl font-semibold mt-24 md:mt-24 mb-12 text-white text-center'
        >
          {t.projects.title}
        </motion.h1>
        <motion.section
          variants={containerVariants}
          className='space-y-8 max-w-2xl'
        >
          {t.projects.items.map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className='border bg-black/30 backdrop-blur-sm p-6 rounded-lg border-red-500/70'
            >
              <h2 className='text-2xl mb-4'>{project.title}</h2>
              <p className='mb-6'>{project.description}</p>
              <div className='flex gap-4'>
                <Link
                  href={projectLinks[index]}
                  className='px-6 py-2 rounded-lg bg-gradient-to-r from-red-500/70 to-pink-500/70 text-white hover:from-red-400 hover:to-pink-400 transition-all duration-300 transform hover:scale-105'
                  rel='noopener noreferrer'
                >
                  {t.projects.goToProject}
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.section>
        <motion.div variants={itemVariants} className='my-12'>
          <Link
            href='https://github.com/vermenea?tab=repositories'
            className='text-lg text-center my-10'
          >
            {t.projects.checkOthers}
          </Link>
        </motion.div>
      </motion.main>
    </div>
  );
}
