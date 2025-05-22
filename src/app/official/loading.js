'use client';

import { cn } from '@/constants/utils';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

export default function Loading() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div
      className={cn(
        'relative flex items-center justify-center h-screen w-screen z-50',
        'bg-neutral-50 dark:bg-neutral-950 transition-colors duration-500'
      )}
    >
      <div className='flex flex-col items-center gap-6'>
        {/* Spinner */}
        <div className='relative'>
          <div className='w-12 h-12 border border-neutral-200 dark:border-neutral-800 rounded-full animate-pulse' />
          <div className='absolute inset-0 flex items-center justify-center'>
            <span className='text-xs text-neutral-400 dark:text-neutral-600'></span>
          </div>
        </div>

        {/* Text */}
        <div className='text-center text-neutral-700 dark:text-neutral-300 font-instrument text-lg md:text-xl'>
          <p>Just booting up the vibes...</p>
          <p className='text-sm text-neutral-400 mt-2 italic'>Almost there.</p>
        </div>
      </div>
    </div>
  );
}
