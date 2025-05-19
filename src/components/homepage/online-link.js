'use client';

// Imports
// -----------------------------------------------------------------
import Link from 'next/link';
import { ArrowUpRight, MoveRight } from 'lucide-react';

import { cn } from '@/lib/utils';
import { useIsMobile } from '../hooks/useIsMobile';
// -----------------------------------------------------------------

export function OnlineLink({ title, url, isLast }) {
  const isMobile = useIsMobile();
  return (
    <>
      <a
        href={url}
        target='_blank'
        rel='noopener noreferrer'
        className='group flex items-center transition-all duration-300'
      >
        <div
          className={cn(
            'flex flex-row items-centre justify-center group gap-1', // Items in a row
            'dark:hover:text-white dark:font-regular md:font-light md:hover:font-medium', // Individual hover states
            'bg-neutral-50 md:bg-neutral-50 dark:bg-neutral-900 rounded-full px-4 py-2', // Pill shape design
            'transition-all duration-300 ease-in-out', // Transition Settings
            'border dark:border-none border-neutral-100', // Transition Settings
            !!!isMobile && 'pr-2 md:pr-4' // Give room for arrow
          )}
        >
          <span className='flex flex-row transition-all duration-300 ease-in-out'>
            {!!!isMobile && title === 'Email' && (
              <span
                className={cn(
                  'ml-0 mr-1 overflow-hidden transition-all duration-300 ease-in-out',
                  'w-0 group-hover:w-8', // smooth expand to show arrow
                  'grid place-items-center' // smooth expand to show arrow
                )}
              >
                Send
              </span>
            )}
            {title}
          </span>

          {!isMobile && (
            <div
              className={cn(
                'ml-1 overflow-hidden transition-all duration-300 ease-in-out',
                'w-0 group-hover:w-5', // smooth expand to show arrow
                'grid place-items-center' // smooth expand to show arrow
              )}
            >
              <MoveRight
                size={12}
                className='opacity-0 group-hover:opacity-100 transition-opacity duration-300'
              />
            </div>
          )}

          {isMobile && (
            <ArrowUpRight
              size={12}
              className='dark:text-amber-400 text-green-700'
            />
          )}
        </div>
      </a>
    </>
  );
}
