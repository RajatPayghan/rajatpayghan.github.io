'use client';
// Imports
// -----------------------------------------------------------------
import React from 'react';
import '@/styles/Home/homepage.css';

import { BlurFade } from '@/components/BlurFade/blur-fade';

import { Libre_Baskerville } from 'next/font/google';
import localFont from 'next/font/local';

import { cn } from '@/constants/utils';
import Home_Socials from '@/components/Home/v2.about-online';
import { Separator } from '@/components/ui/separator';
import { useIsMobile } from '@/components/Hooks/useIsMobile';
// -----------------------------------------------------------------

const libreBaskerville = Libre_Baskerville({
  subsets: ['latin'],
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  display: 'swap',
});

const departureMono = localFont({
  src: '../../components/Home/display-fonts/DepartureMono-Regular.woff2',
  display: 'swap',
});

export default function Home_About() {
  const isMobile = useIsMobile();
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
              <div>sleek digital products.</div>
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
            <div className='inline-block'>crafting sleek digital products</div>
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
