'use client';

import React from 'react';
import '@/styles/Layout/dock.css';
import { useIsMobile } from '../Hooks/useIsMobile';
import { ThemeSwitcherButtonIcon } from '../Layout/theme-switcher';
import DockContactButton from './contact-button';
import DockLinks from './dock-links';
import { FEATURE_FLAGS } from '@/constants/feature-flags';

const links = [
  { name: 'Home', href: '/' },
  { name: 'Writing', href: '/writing' },
];

export default function Dock() {
  const isMobile = useIsMobile();
  if (isMobile === null) return null;
  const isDesktop = !isMobile;

  return (
    <nav className='dock dock-fade-in'>
      <DockLinks links={links} />

      {isDesktop && FEATURE_FLAGS.themeControls.enableTheming && (
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
