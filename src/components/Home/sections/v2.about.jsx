'use client';

import React, { useEffect, useState } from 'react';
import '@/styles/homepage.css';

import { BlurFade } from '@/components/BlurFade/blur-fade';
import { Libre_Baskerville } from 'next/font/google';
import localFont from 'next/font/local';
import { useTheme } from 'next-themes';
import { cn } from '@/constants/utils';
import { useIsMobile } from '@/components/Hooks/useIsMobile';
import Home_Socials from './v2.about-online';
import { Separator } from '@/components/ui/separator';

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
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const isMobile = useIsMobile();

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className={cn('flex flex-col gap-8')}>
      {/* Profile Image Section */}
      <div className='relative group'>
        <img
          src='/assets/misc-images/profile-c&z.avif'
          className='home-image'
        />
        <img
          src='/assets/homepage/ThisIsRajat-LightMode.png'
          className='home-image-name'
        />
      </div>

      {/* Heading Text */}
      <div
        className={cn(
          'flex flex-col gap-0 md:gap-2',
          'font-instrument leading-normal text-4xl md:text-5xl',
          'dark:text-neutral-400 text-neutral-500'
        )}
      >
        {isMobile ? (
          <>
            <div className='mb-2 dark:text-neutral-50 text-neutral-900'>
              Hey, I'm <span className='italic'>Rajat —</span>
            </div>
            <div>
              <div>A creative dev crafting</div>
              <div>
                <span className='italic'>tasty</span> digital things.
              </div>
            </div>
          </>
        ) : (
          <>
            <div>
              <span className='text-neutral-900 dark:text-neutral-50'>
                Hey, I'm <span className='italic'>Rajat —</span>
              </span>{' '}
              a creative dev
            </div>
            <div className='inline-block'>crafting tasty digital things</div>
          </>
        )}
      </div>

      {/* Bio Section */}
      <div className='flex flex-col gap-1'>
        <span>
          In a perfect world, I engineer solutions at the intersection of
          <span className={cn(libreBaskerville.className, 'italic')}>
            {' '}
            creativity
          </span>{' '}
          and <span className={departureMono.className}>{`<code/>`}</span>. In
          this one, I’m stuck centering a div.
        </span>
        <span>Welcome to my lil corner of the internet!</span>
      </div>

      {/* Social Links */}
      <BlurFade delay={0.2}>
        <Home_Socials />
      </BlurFade>

      {/* Divider */}
      <Separator decorative className='bg-neutral-100 dark:bg-neutral-900' />
    </div>
  );
}
