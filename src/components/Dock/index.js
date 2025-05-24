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

const links = [
  { name: 'Home', href: '/' },
  { name: 'Writing', href: '/blog' },
];

export default function Dock() {
  const pathname = usePathname();
  useDockItemHoverEffect();
  return (
    <nav className='dock'>
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

      <div className='h-6 w-[1px] bg-neutral-200 dark:bg-neutral-800' />

      {!useIsMobile() && (
        <>
          <ThemeSwitcherButtonIcon classNameIcon='dock-item p-0' />
          <div className='h-6 w-[1px] bg-neutral-200 dark:bg-neutral-800' />
        </>
      )}

      <DockContactButton />
    </nav>
  );
}
