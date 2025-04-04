'use client';

import Link from 'next/link';
import { Button } from './ui/button';
import { cn } from '@/lib/utils'; // optional utility for merging classNames

export function OnlineCard({ title, url, icon, color }) {
  return (
    <Link
      href={url}
      className='w-full group'
      style={{
        // Define CSS variable for hover color
        '--hover-bg': color,
      }}
    >
      <Button
        variant='secondary'
        className={cn(
          'w-full flex items-center gap-2 transition-colors duration-300 group-hover:bg-[color:var(--hover-bg)] group-hover:text-white'
        )}
      >
        <span>{icon}</span>
        {title}
      </Button>
    </Link>
  );
}
