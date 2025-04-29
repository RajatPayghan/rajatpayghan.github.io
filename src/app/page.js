'use client';
// Feature Flags
// -----------------------------------------------------------------
import { FEATURE_FLAGS } from '@/lib/feature-flags';

// Imports
// -----------------------------------------------------------------
import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowDown } from 'lucide-react';
import { DOCK_ITEMS } from '@/lib/constants';
import { SmoothCursor } from '@/components/Support/smooth-cursor';
import { BlurFade } from '@/components/Support/blur-fade';
import { cn } from '@/lib/utils';
import Dock from '@/components/Support/dock';
import Home_About from '@/components/Homepage/s1.about';
import Home_Casual from '@/components/Homepage/s3.casual';
import Home_Spotify from '@/components/Homepage/s6.spotify';
import Home_WhatsNew from '@/components/Homepage/s5.whatsnew';
import Home_Works from '@/components/Homepage/s4.works';
import Home_Image from '@/components/Homepage/s2.image';
import Home_Socials from '@/components/Homepage/s7.online';

export default function Home() {
  const [isMobile, setIsMobile] = useState(false);
  const [enableScroll, setEnableScroll] = useState(false);

  const scrollToBottom = () => {
    const container = document.getElementById('container-wrapper');
    if (container) {
      container.scrollTo({
        top: container.scrollHeight,
        behavior: 'smooth',
      });
    }
  };

  useEffect(() => {
    const checkMobile = () => {
      if (typeof window !== 'undefined') {
        setIsMobile(window.innerWidth <= 768); // you can tune this breakpoint
      }
    };
    checkMobile();
    // Optionally, update on resize
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setEnableScroll(true);
    }, 1800); // after 1 second

    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={`container-wrapper ${
        enableScroll ? 'overflow-auto' : 'overflow-hidden'
      }`}
      id='container-wrapper'
    >
      {/* Container for scroll : container-wrapper as it has overflow-y*/}
      <Button
        onClick={scrollToBottom}
        variant='outline'
        size='icon'
        className='absolute bottom-2 right-2 z-40 bg-neutral-50 dark:bg-neutral-900 border-neutral-200 dark:border-neutral-800'
      >
        <ArrowDown className='dark:text-neutral-50 text-neutral-700' />
      </Button>
      <BlurFade duration={0.8}>
        {/* Container for central width */}
        <div className='container-md'>
          <div className='flex flex-col gap-8 lg:gap-12'>
            {/* First About Me section */}
            <BlurFade delay={1.5}>
              <Home_About />
            </BlurFade>

            {/* Spline Section */}
            <BlurFade delay={0.2}>
              <Home_Image delay={1800} />
            </BlurFade>

            {/* Casual Info */}
            <BlurFade delay={1.8}>
              <Home_Casual />
            </BlurFade>

            {/* Work Section */}
            <BlurFade delay={2}>
              <Home_Works />
            </BlurFade>

            {/* Currently */}
            <BlurFade inView={true}>
              <Home_WhatsNew />
            </BlurFade>

            {/* Spotify Song Link */}
            <BlurFade inView={true}>
              <Home_Spotify />
            </BlurFade>

            {/* Socials Online Links */}
            <BlurFade inView={true}>
              <Home_Socials />
            </BlurFade>

            {/* Spacer */}
            <div className='h-24 lg:h-36 w-full'></div>
          </div>
        </div>
      </BlurFade>

      {FEATURE_FLAGS.enableDock && ( // From lib/feature-flags
        <Dock
          items={DOCK_ITEMS}
          panelHeight={70}
          baseItemSize={50}
          magnification={60}
        />
      )}

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

      {FEATURE_FLAGS.enableSmoothCursor && !isMobile && <SmoothCursor />}
    </div>
  );
}
