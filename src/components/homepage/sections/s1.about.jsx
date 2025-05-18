// This is the about me section in the home page

// Imports
// -----------------------------------------------------------------
import React from 'react';
import { BlurFade } from '@/components/common/blur-fade';
import { FONT_CONTROL } from '@/lib/css-mission-control';

import { Libre_Baskerville } from 'next/font/google';
import localFont from 'next/font/local';

import { cn } from '@/lib/utils';
import { useIsMobile } from '@/components/hooks/useIsMobile';
import Home_Socials from './archive.online';
import { Separator } from '@/components/ui/separator';
// -----------------------------------------------------------------

const libreBaskerville = Libre_Baskerville({
  subsets: ['latin'],
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  display: 'swap',
});

const departureMono = localFont({
  src: '../display-fonts/DepartureMono-Regular.woff2',
  display: 'swap',
});

export default function Home_About() {
  const isMobile = useIsMobile();
  return (
    <div className={cn('flex flex-col gap-8', `${FONT_CONTROL.base}`)}>
      {/* TODO : Add cn and have different classes for text size, gap and stuff for mobile */}
      {/* TODO : Change font size based on mobile to all  */}

      <img
        src='/assets/misc-images/profile-c&z.avif'
        className={cn(
          'h-24 w-20 md:h-36 md:w-28 object-cover mt-4 bg-red-500',
          'transition-all duration-300',
          'rounded-full',
          'hover:scale-105 hover:rotate-2',
          'active:scale-100 active:-rotate-1 active:opacity-90'
        )}
      />
      <div
        className={cn(
          'flex flex-col gap-2',
          'font-instrument leading-normal text-4xl md:text-5xl text-neutral-400'
        )}
      >
        {isMobile ? (
          // Mobile Div
          <div className='flex flex-col gap-0'>
            <div className='mb-2'>
              <span className='text-neutral-50'>
                {' '}
                Hey, I'm <span className='italic'>Rajat —</span>
              </span>
            </div>
            <div>
              <div>A Creative Dev crafting</div>
              <div>
                <span className='italic'>tasty</span> digital products.
              </div>
            </div>
          </div>
        ) : (
          // Desktop Div
          <>
            <div>
              <span className='text-neutral-50'>
                {' '}
                Hey, I'm <span className='italic'>Rajat —</span>
              </span>{' '}
              a creative dev
            </div>
            <div className='inline-block'>
              crafting{' '}
              <span className={cn('inline-block relative text-center group')}>
                <span className='block opacity-100 group-hover:opacity-0 duration-300 ease-in-out'>
                  tasty
                </span>
                <img
                  src='/assets/misc-images/Delicious-Badge.webp'
                  alt='Delicious Icon'
                  className={cn(
                    'absolute left-1/2 -translate-x-1/2 -translate-y-3/4 z-10',
                    'w-16 h-16',
                    'transition-all duration-500 ease-out',
                    'opacity-0 group-hover:opacity-100',
                    'scale-50 rotate-90 group-hover:scale-110 group-hover:-rotate-12'
                  )}
                />
              </span>{' '}
              digital products
            </div>
          </>
        )}
      </div>

      <div className='flex flex-col gap-1'>
        <span>
          In a perfect world, I engineer solutions at the intersection of
          <span className={cn(`${libreBaskerville.className}`, 'italic')}>
            {' '}
            creativity
          </span>{' '}
          and <span className={departureMono.className}>{`<code/>`}</span>. In
          this one, I’m stuck centering a div.
        </span>
        <span>Welcome to my lil corner of the internet!</span>
      </div>
      <BlurFade delay={0.6}>
        <Home_Socials />
      </BlurFade>
      <Separator decorative={true} className='bg-neutral-900' />
    </div>
  );
}
