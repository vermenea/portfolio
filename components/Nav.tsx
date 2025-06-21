import Link from 'next/link';

import { useLanguage } from '@/context/LanguageContext';
import { translations } from '@/translations/translations';

export default function Nav() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <nav className='fixed top-0 left-0 w-screen h-16 flex items-center justify-between px-4 bg-transparent backdrop-blur-sm z-50'>
      <Link href='/'>
        <p className='text-lg font-semibold'>{t.nav.home}</p>
      </Link>
      <Link href='/about'>
        <p className='text-lg font-semibold'>{t.nav.about}</p>
      </Link>
      <Link href='/projects'>
        <p className='text-lg font-semibold'>{t.nav.projects}</p>
      </Link>
    </nav>
  );
}
