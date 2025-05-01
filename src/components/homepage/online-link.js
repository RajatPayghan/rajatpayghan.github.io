'use client';

// Imports
// -----------------------------------------------------------------
import Link from 'next/link';

import { cn } from '@/lib/utils';
// -----------------------------------------------------------------

export function OnlineLink({ title, url, isLast }) {
  return (
    <>
      <Link
        href={url}
        className='group flex items-center  transition-all duration-300'
      >
        <div
          className={cn(
            'uppercase text-xs md:text-sm font-mono',
            'text-white md:text-neutral-300 hover:text-white',
            'underline underline-offset-4  md:no-underline md:hover:underline '
          )}
        >
          {title}
        </div>
      </Link>
      {!isLast && <div className='text-neutral-600'>/</div>}
    </>
  );
}
