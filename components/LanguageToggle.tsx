'use client';
import { useLanguage } from '@/context/LanguageContext';
import Image from 'next/image';

export default function LanguageToggle() {
  const { language, setLanguage } = useLanguage();

  return (
    <div className='fixed bottom-4 right-4 flex gap-2'>
      <button
        onClick={() => setLanguage('en')}
        className={`p-1 rounded ${
          language === 'en' ? 'ring-2 ring-white' : ''
        }`}
      >
        <Image src='/united-kingdom.png' alt='English' width={24} height={24} />
      </button>
      <button
        onClick={() => setLanguage('pl')}
        className={`p-1 rounded ${
          language === 'pl' ? 'ring-2 ring-white' : ''
        }`}
      >
        <Image src='/poland.png' alt='Polski' width={24} height={24} />
      </button>
    </div>
  );
}
