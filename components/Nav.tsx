'use client';

import Link from 'next/link';

import { useLanguage } from '@/context/LanguageContext';
import { translations } from '@/translations/translations';
import { NavLink } from '@/types/types';

export default function Nav() {
  const { language } = useLanguage();
  const t = translations[language];

  const navLinks = [
    { href: '/', label: t.nav.home },
    { href: '/about', label: t.nav.about },
    { href: '/projects', label: t.nav.projects },
  ];

  return (
    <nav className='fixed top-0 left-0 w-screen h-16 flex items-center justify-between px-4 bg-transparent backdrop-blur-sm z-50'>
      {navLinks.map((link: NavLink) => (
        <Link
          key={link.href}
          href={link.href}
          className='text-white font-semibold'
        >
          {link.label}
        </Link>
      ))}
    </nav>
  );
}
