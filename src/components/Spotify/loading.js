'use client';

import React from 'react';
import Badge from '@/components/Badge';
import { Play } from 'lucide-react';
import { Spotify as SpotifyIcon } from '@/constants/icons';
import { cn } from '@/constants/utils';
import { useIsMobile } from '../hooks/useIsMobile';
import '@/styles/spotify.css';
import { SONG } from '@/constants/one-place-changer';

export default function SpotifyLoading() {
  const isMobile = useIsMobile();
  return (
    <div className='spotify-container animate-pulse'>
      <div className='spotify-card'>
        <div className='h-full w-12 md:w-16 bg-neutral-300 dark:bg-neutral-800 rounded-md'></div>
        <div className='flex flex-col justify-center gap-1 w-full'>
          <div className='h-4 md:h-5 bg-neutral-300 dark:bg-neutral-800 rounded w-3/4'></div>
          <div className='h-3 bg-neutral-300 dark:bg-neutral-800 rounded w-1/2'></div>
        </div>
      </div>
      <div className='flex justify-between items-center px-2 text-xs text-neutral-400 dark:text-neutral-600'>
        <div className='flex items-center gap-2'>
          <div className='h-3 w-24 bg-neutral-300 dark:bg-neutral-800 rounded'></div>
        </div>
        <div className='h-3 w-32 bg-neutral-300 dark:bg-neutral-800 rounded'></div>
      </div>
    </div>
  );
}
