'use client';

import Image from 'next/image';

import { useLanguage } from '@/context/LanguageContext';
import { translations } from '@/translations/translations';
import '@/style/glassy-hover.css';

export default function About() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <main className='flex flex-col items-center justify-between w-screen h-screen p-4'>
      <div className='flex flex-col items-center w-full'>
        <h1 className='text-3xl md:text-4xl font-semibold mt-20 md:mt-24'>
          {t.about.title}
        </h1>
        <section className='flex flex-col items-center max-w-4xl py-8 md:py-20'>
          <p className='text-base md:text-lg text-center px-4 md:px-24 mb-8'>
            {t.about.description}
          </p>
        </section>
        <section className='max-w-4xl w-full px-4 mb-12'>
          <h2 className='text-2xl font-semibold text-center mb-6'>
            {t.about.technologies.title}
          </h2>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-8 items-start'>
            <div className='text-center'>
              <h3 className='text-xl font-bold mb-2'>
                {t.about.technologies.frontend.title}
              </h3>
              <div className='flex justify-center mb-4'>
                <Image
                  src='https://skillicons.dev/icons?i=ts,react,nextjs'
                  alt='TypeScript, React, Next.js'
                  width={144}
                  height={48}
                />
              </div>
              <p className='text-sm text-gray-300'>
                {t.about.technologies.frontend.description}
              </p>
            </div>

            <div className='text-center'>
              <h3 className='text-xl font-bold mb-2'>
                {t.about.technologies.styling.title}
              </h3>
              <div className='flex justify-center mb-4'>
                <Image
                  src='https://skillicons.dev/icons?i=css,sass,tailwind,materialui,figma,ps'
                  alt='CSS, Sass, Tailwind, Material UI, Figma, Photoshop'
                  width={288}
                  height={48}
                />
              </div>
              <p className='text-sm text-gray-300'>
                {t.about.technologies.styling.description}
              </p>
            </div>
            <div className='text-center'>
              <h3 className='text-xl font-bold mb-2'>
                {t.about.technologies.tools.title}
              </h3>
              <div className='flex justify-center mb-4'>
                <Image
                  src='https://skillicons.dev/icons?i=git,nodejs,sentry,postman,vercel,firebase'
                  alt='Git, Node.js, Sentry, Postman, Vercel, Firebase'
                  width={288}
                  height={48}
                />
              </div>
              <p className='text-sm text-gray-300'>
                {t.about.technologies.tools.description}
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
