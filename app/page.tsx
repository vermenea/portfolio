'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

import { useLanguage } from '@/context/LanguageContext';
import { translations } from '@/translations/translations';

export default function Home() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <main className='flex flex-col items-center justify-center   text-white p-4 min-h-[90vh]'>
      <section className='w-full px-4 flex flex-col md:justify-center justify-start md:text-center text-left'>
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className='flex md:justify-center justify-start my-6'
        >
          <Image
            src='/me.webp'
            alt='avatar'
            width={180}
            height={180}
            className='rounded-full'
          />
        </motion.section>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className='text-5xl sm:text-6xl font-bold font-code my-6'
        >
          {t.home.typingText}
        </motion.h1>
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className='flex w-full justify-start md:justify-center items-start space-y-4 px-4 my-6'
        >
          <Link
            href='mailto:vermenea@gmail.com'
            className='px-6 py-2 rounded-lg bg-gradient-to-r from-red-500/70 to-pink-500/70 text-white hover:from-red-400 hover:to-pink-400 transition-all duration-300 transform hover:scale-105'
          >
            {t.home.contactMe}
          </Link>
        </motion.section>
      </section>
    </main>
  );
}
