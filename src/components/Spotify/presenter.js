import React from 'react';
import Badge from '@/components/Badge';
import { Play } from 'lucide-react';
import { Spotify as SpotifyIcon } from '@/constants/icons';
import { cn } from '@/constants/utils';

export default function SpotifyPresenter({ SONG, isMobile }) {
  return (
    <div>
      <a href={SONG.hrefSpotify} rel='noopener noreferrer' target='_blank'>
        <>
          <div
            className={cn(
              'flex flex-col gap-4 p-2 w-full h-fit',
              'bg-neutral-100/20 dark:bg-neutral-900/50',
              'border border-neutral-200 dark:border-neutral-900',
              'rounded-md group active:scale-95 transition-all duration-300'
            )}
          >
            <div className='flex flex-row gap-3 md:gap-4 p-0 w-full h-16 dark:bg-neutral-900 bg-neutral-100 rounded-md'>
              <img
                src={SONG.coverSrc}
                className='object-cover h-full rounded-md'
              />
              <div className='flex flex-col justify-center h-full gap-0'>
                <div className='text-lg'>{SONG.title}</div>
                <div className='flex flex-row gap-2 text-sm text-neutral-400 dark:text-neutral-600'>
                  <span>{SONG.artist}</span>
                  <span>•</span>
                  <span>{SONG.album}</span>
                </div>
              </div>
            </div>
            <div className='flex align-middle pr-1 justify-between w-full h-fit text-xs '>
              <span className='flex flex-row gap-1 items-center text-neutral-400 dark:text-neutral-700 dark:md:group-hover:text-green-400 md:group-hover:text-green-600'>
                <SpotifyIcon
                  className={cn(
                    `${
                      isMobile
                        ? 'w-3 grayscale opacity-20'
                        : 'w-0 group-hover:w-3 transition-all duration-300'
                    }`
                  )}
                />
                <Play
                  className={cn(
                    'fill-neutral-400 dark:fill-neutral-700',
                    `${
                      isMobile
                        ? 'hidden'
                        : 'w-2 group-hover:w-0 transition-all duration-300'
                    }`
                  )}
                />{' '}
                Play Song
              </span>

              <div className='flex flex-row gap-2 items-center'>
                Liked on{' '}
                <Badge isSubtle={true} isActive={true}>
                  {SONG.favDate}
                </Badge>
              </div>
            </div>
          </div>
        </>
      </a>
    </div>
  );
}
