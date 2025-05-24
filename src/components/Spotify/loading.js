'use client';
import '@/styles/spotify.css';
import { useIsMobile } from '../Hooks/useIsMobile';

export default function SpotifyLoading() {
  const isMobile = useIsMobile();

  return (
    <div className='spotify-container'>
      <div className='spotify-card gap-4'>
        {/* Placeholder Album Art */}
        <div className='h-full animate-pulse aspect-square md:w-16 bg-neutral-300 dark:bg-neutral-800 rounded-md'></div>

        {/* Text Skeleton */}
        <div className='animate-pulse flex flex-col justify-center gap-1 w-full'>
          <div className='h-4 md:h-5 bg-neutral-300 dark:bg-neutral-800 rounded w-3/4'></div>
          <div className='h-3 bg-neutral-300 dark:bg-neutral-800 rounded w-1/2'></div>
        </div>
      </div>

      {/* Footer Text Loading */}
      <div className='flex animate-pulse justify-between items-center px-2 text-xs text-neutral-400 dark:text-neutral-600 mt-2'>
        <div className='h-3 w-24 bg-neutral-300 dark:bg-neutral-800 rounded'></div>
        <div className='h-3 w-32 bg-neutral-300 dark:bg-neutral-800 rounded'></div>
      </div>
    </div>
  );
}
