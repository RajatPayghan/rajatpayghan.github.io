'use client';
// Imports
// -----------------------------------------------------------------
import React from 'react';
import '@/styles/homepage.css';

import { BlurFade } from '@/components/common/blur-fade';

import { Libre_Baskerville } from 'next/font/google';
import localFont from 'next/font/local';
import { useTheme } from 'next-themes';
import { useState, useEffect } from 'react';

import { cn } from '@/lib/utils';
import { useIsMobile } from '@/components/hooks/useIsMobile';
import Home_Socials from '@/components/homepage/sections/v2.about-online';
import { Separator } from '@/components/ui/separator';
// -----------------------------------------------------------------

const libreBaskerville = Libre_Baskerville({
  subsets: ['latin'],
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  display: 'swap',
});

const departureMono = localFont({
  src: '../../components/homepage/display-fonts/DepartureMono-Regular.woff2',
  display: 'swap',
});

export default function Home_About() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const isMobile = useIsMobile();

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className={cn('flex flex-col gap-8')}>
      <div className='relative group'>
        <img
          src='/assets/misc-images/profile-c&z.avif'
          className='home-image'
        />
      </div>
      <div
        className={cn(
          'flex flex-col gap-2', // Layout
          'font-instrument leading-normal text-4xl md:text-5xl', // Typography
          'dark:text-neutral-400 text-neutral-500' // Colours
        )}
      >
        {isMobile ? (
          // Mobile Div
          <div className='flex flex-col gap-0'>
            <div className='mb-2'>
              <span className='dark:text-neutral-50 text-neutral-900'>
                {' '}
                Hey, I'm <span className='italic'>Rajat —</span>
              </span>
            </div>
            <div>
              <div>A creative dev crafting</div>
              <div>
                <span className='italic'>impactful</span> digital products.
              </div>
            </div>
          </div>
        ) : (
          // Desktop Div
          <>
            <div>
              <span className='text-neutral-900 dark:text-neutral-50'>
                {' '}
                Hey, I'm <span className='italic'>Rajat —</span>
              </span>{' '}
              a creative dev
            </div>
            <div className='inline-block'>
              crafting <span className='italic'>clean</span> digital products
            </div>
          </>
        )}
      </div>

      <div className='flex flex-col gap-1'>
        <span>
          I specialize in engineering solutions at the intersection of
          <span className={cn(`${libreBaskerville.className}`, 'italic')}>
            {' '}
            creativity
          </span>{' '}
          and <span className={departureMono.className}>{`<code/>`}</span>,{' '}
          building experiences that are thoughtful and impactful.
        </span>
        <span>Welcome to my corner of the internet!</span>
      </div>

      <BlurFade delay={0.2}>
        <Home_Socials />
      </BlurFade>

      <Separator
        decorative={true}
        className='bg-neutral-100 dark:bg-neutral-900' // Color theme ordering
      />
    </div>
  );
}
