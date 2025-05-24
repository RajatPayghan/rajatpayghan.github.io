'use client';

import React from 'react';
import { useIsMobile } from '../Hooks/useIsMobile';
import { ThemeSwitcherButtonIcon } from '../Layout/theme-switcher';
import DockContactButton from './contact-button';
import DockLinks from './dock-links';
import '@/styles/dock.css';

const links = [
  { name: 'Home', href: '/' },
  { name: 'Writing', href: '/blog' },
];

export default function Dock() {
  const isMobile = useIsMobile();
  if (isMobile === null) return null;
  const isDesktop = !isMobile;

  return (
    <nav className='dock dock-fade-in'>
      <DockLinks links={links} />

      {isDesktop && (
        <>
          <div className='h-6 w-[1px] bg-neutral-200 dark:bg-neutral-800' />
          <div className='w-9'>
            <ThemeSwitcherButtonIcon />
          </div>
        </>
      )}

      <div className='h-6 w-[1px] bg-neutral-200 dark:bg-neutral-800' />

      <DockContactButton />
    </nav>
  );
}
