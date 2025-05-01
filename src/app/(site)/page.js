'use client';

// Imports
// -----------------------------------------------------------------
import { useEffect, useState } from 'react';
import { ArrowDown } from 'lucide-react';

import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { FEATURE_FLAGS } from '@/lib/feature-flags';
import { SmoothCursor } from '@/components/layout/smooth-cursor';
import { BlurFade } from '@/components/common/blur-fade';
import Home_About from '@/components/homepage/sections/s1.about';
import Home_Casual from '@/components/homepage/sections/s3.casual';
import Home_Spotify from '@/components/homepage/sections/s6.spotify';
import Home_WhatsNew from '@/components/homepage/sections/s5.whatsnew';
import Home_Works from '@/components/homepage/sections/s4.works';
import Home_Image from '@/components/homepage/sections/s2.image';
import Home_Socials from '@/components/homepage/sections/s7.online';
// -----------------------------------------------------------------

const LOADING_SEC_DELAY = 1.8;

export default function Home() {
  // STATES
  const [isMobile, setIsMobile] = useState(false);
  const [isLoading, setisLoading] = useState(true);

  // Function to scroll to bottom of the page
  const scrollToBottom = () => {
    const container = document.getElementById('container-wrapper');
    if (container) {
      container.scrollTo({
        top: container.scrollHeight,
        behavior: 'smooth',
      });
    }
  };

  // Check if mobile or not using isMobile
  useEffect(() => {
    const checkMobile = () => {
      if (typeof window !== 'undefined') {
        setIsMobile(window.innerWidth <= 768); // STANDARD : Mobile Breakpoint
      }
    };
    checkMobile();
    // Optionally, update on resize
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Change isLoading after loading delay
  useEffect(() => {
    const timer = setTimeout(() => {
      setisLoading(false);
    }, LOADING_SEC_DELAY * 1000); // after 1.8 second

    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      // Container for scroll : container-wrapper as it has overflow-y
      className={cn(
        `container-wrapper`,
        `${isLoading ? 'overflow-hidden' : 'overflow-auto'}`
      )}
      id='container-wrapper'
    >
      {/* Button for scroll */}
      <Button
        onClick={scrollToBottom}
        variant='outline'
        size='icon'
        className={cn(
          'absolute bottom-2 right-2 z-40',
          'bg-neutral-50 dark:bg-neutral-900 border-neutral-200 dark:border-neutral-800',
          `${isLoading ? 'opacity-0' : 'opacity-100'}`,
          `${isLoading ? 'pointer-events-none' : 'pointer-events-auto'}`
        )}
      >
        <ArrowDown className='dark:text-neutral-50 text-neutral-700' />
      </Button>

      <BlurFade duration={0.8}>
        {/* Container for central width */}
        <div className='container-md'>
          <div className='flex flex-col gap-8 lg:gap-12'>
            <BlurFade delay={LOADING_SEC_DELAY + 0.4}>
              <Home_About />
            </BlurFade>

            <BlurFade delay={0.1}>
              <Home_Image delay={LOADING_SEC_DELAY * 1000} />
            </BlurFade>

            <BlurFade delay={LOADING_SEC_DELAY + 0.6}>
              <Home_Casual />
            </BlurFade>

            <BlurFade delay={LOADING_SEC_DELAY + 0.8}>
              <Home_Works />
            </BlurFade>

            <BlurFade inView={true}>
              <Home_WhatsNew />
            </BlurFade>

            <BlurFade inView={true}>
              <Home_Spotify />
            </BlurFade>

            <BlurFade inView={true}>
              <Home_Socials />
            </BlurFade>

            {/* Spacer */}
            <div className='h-24 lg:h-36 w-full'></div>
          </div>
        </div>
      </BlurFade>

      {/* {FEATURE_FLAGS.enableDock && ( // From lib/feature-flags
        <Dock
          items={DOCK_ITEMS}
          panelHeight={70}
          baseItemSize={50}
          magnification={60}
        />
      )} */}
      {FEATURE_FLAGS.enableSmoothCursor && !isMobile && <SmoothCursor />}

      {FEATURE_FLAGS.showHomepageShade && (
        <>
          <div
            className={cn(
              'pointer-events-none',
              'fixed bottom-0 left-0 right-0 h-[8vh] md:h-[10vh] z-20', // Positioning
              'bg-gradient-to-t from-white/100 to-white/0 dark:from-neutral-950/100 dark:to-neutral-950/0' // Colour
            )}
          />
          <div
            className={cn(
              'pointer-events-none',
              'fixed top-0 left-0 right-0 h-[8vh] md:h-[10vh] z-20', // Positioning
              'bg-gradient-to-b from-white/100 to-white/0 dark:from-neutral-950/100 dark:to-neutral-950/0' // Colour
            )}
          />
        </>
      )}
    </div>
  );
}
