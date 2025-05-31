import React from 'react';
import Link from 'next/link';
import { cn } from '@/constants/utils';
import { useDockItemHoverEffect } from '../Hooks/useDockItemMouseMove';
import { usePathname } from 'next/navigation';

export default function DockLinks({ links }) {
  const pathname = usePathname();
  useDockItemHoverEffect();
  return (
    <>
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
    </>
  );
}
