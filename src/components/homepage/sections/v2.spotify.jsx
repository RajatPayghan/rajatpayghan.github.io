// This is the Whats New section in the home page

// Imports
// -----------------------------------------------------------------
import React from 'react';
import {
  SectionContainer,
  SectionContent,
  SectionTitle,
} from '@/components/homepage/sections';
import Link from 'next/link';
import { SONG } from '@/lib/one-place-changer';
import { cn } from '@/lib/utils';
import { FONT_CONTROL } from '@/lib/css-mission-control';
import { Spotify } from '@/lib/icons';
import { useIsMobile } from '@/components/hooks/useIsMobile';
import Badge from '@/components/common/badge';
// -----------------------------------------------------------------

export default function Home_Spotify() {
  const isMobile = useIsMobile();
  return (
    <SectionContainer>
      <SectionTitle>Recent Fav</SectionTitle>
      <SectionContent>
        <a href={SONG.hrefSpotify} rel='noopener noreferrer' target='_blank'>
          <div className={FONT_CONTROL.base}>
            <div className='flex flex-col gap-4 p-2 w-full h-fit bg-neutral-900/50 border border-neutral-900 rounded-md group active:scale-95 transition-all duration-300'>
              <div className='flex flex-row gap-3 md:gap-4 p-0 w-full h-16 bg-neutral-900 rounded-md'>
                <img
                  src={SONG.coverSrc}
                  className='object-cover h-full rounded-md'
                />
                <div className='flex flex-col justify-center h-full gap-0'>
                  <div className='text-lg'>{SONG.title}</div>
                  <div className='flex flex-row gap-2 text-sm text-neutral-600'>
                    <span>{SONG.artist}</span>
                    <span>•</span>
                    <span>{SONG.album}</span>
                  </div>
                </div>
              </div>
              <div className='flex align-middle pr-1 justify-between w-full h-fit text-xs '>
                <span className='flex flex-row gap-1 items-center text-neutral-700 md:group-hover:text-green-400'>
                  <Spotify
                    className={cn(
                      `${
                        isMobile
                          ? 'w-3 grayscale opacity-20'
                          : 'w-0 group-hover:w-3 transition-all duration-300'
                      }`
                    )}
                  />{' '}
                  Play on Spotify
                </span>
                <div className='flex flex-row gap-2 items-center'>
                  {/* <div className='relative'>
                    <div className='absolute h-1 w-1 rounded-full bg-green-100 animate-ping ' />
                    <div className='relative h-1 w-1 rounded-full bg-green-400' />
                  </div>{' '} */}
                  Added on <Badge isActive={true}>{SONG.favDate}</Badge>
                </div>
              </div>
            </div>
          </div>
        </a>
      </SectionContent>
    </SectionContainer>
  );
}
