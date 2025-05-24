'use client';

import React from 'react';
import '@/styles/dock.css';
import Link from 'next/link';
import { cn } from '@/constants/utils';
import { useDockItemHoverEffect } from '../Hooks/useDockItemMouseMove';
import { usePathname } from 'next/navigation';
import DockContactButton from './contact-button';
import { ThemeSwitcherButtonIcon } from '../Layout/theme-switcher';
import { useIsMobile } from '../Hooks/useIsMobile';
import { BlurFade } from '../BlurFade/blur-fade';

const links = [
  { name: 'Home', href: '/' },
  { name: 'Writing', href: '/blog' },
];

export default function Dock() {
  const pathname = usePathname();
  useDockItemHoverEffect();

  const isMobile = useIsMobile();

  // Wait for hydration and media query resolution
  if (isMobile === null) return null;

  const isDesktop = !isMobile;

  return (
    <nav className='dock dock-fade-in'>
      {links.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className={cn(
            'dock-item',
            pathname === link.href && 'dock-item-selected'
          )}
        >
          <div className='dock-item-text'>{link.name}</div>
        </Link>
      ))}

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
