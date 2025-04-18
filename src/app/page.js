'use client';
// Feature Flags
// -----------------------------------------------------------------
//

import { FEATURE_FLAGS } from '@/lib/feature-flags';
// Imports
// -----------------------------------------------------------------
//
import { Button } from '@/components/ui/button';
import { ArrowDown } from 'lucide-react';
import { DOCK_ITEMS } from '@/lib/constants';
import Dock from '@/components/Support/dock';
import Home_About from '@/components/Homepage/s1.about';
import Home_Casual from '@/components/Homepage/s3.casual';
import Home_Spotify from '@/components/Homepage/s6.spotify';
import Home_WhatsNew from '@/components/Homepage/s5.whatsnew';
import Home_Works from '@/components/Homepage/s4.works';
import Home_Online from '@/components/Homepage/s7.online';
import Home_Image from '@/components/Homepage/s2.image';

export default function Home() {
  const scrollToBottom = () => {
    const container = document.getElementById('container-wrapper');
    if (container) {
      container.scrollTo({
        top: container.scrollHeight,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className='container-wrapper' id='container-wrapper'>
      {/* Container for scroll : container-wrapper as it has overflow-y*/}
      <Button
        onClick={scrollToBottom}
        variant='outline'
        size='icon'
        className='absolute bottom-2 right-2 z-40 bg-neutral-50 dark:bg-neutral-900 border-neutral-200 dark:border-neutral-800'
      >
        <ArrowDown className='dark:text-neutral-50 text-neutral-700' />
      </Button>
      {/* Container for central width */}
      <div className='container-md'>
        <div className='flex flex-col gap-8 lg:gap-12'>
          {/* First About Me section */}
          <Home_About />

          {/* Spline Section */}
          <Home_Image />

          {/* Casual Info */}
          <Home_Casual />

          {/* Work Section */}
          <Home_Works />

          {/* Currently */}
          <Home_WhatsNew />

          {/* Spotify Song Link */}
          <Home_Spotify />

          {/* Socials Online Links */}
          <Home_Online />

          {/* Spacer */}
          <div className='h-24 lg:h-36 w-full'></div>
        </div>
      </div>

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
          <div className='pointer-events-none fixed bottom-0 left-0 right-0 h-[8vh] md:h-[20vh] z-20 bg-gradient-to-t from-white/100 to-white/0 dark:from-neutral-950/100 dark:to-neutral-950/0' />
          <div className='pointer-events-none fixed top-0 left-0 right-0 h-[8vh] md:h-[20vh] z-20 bg-gradient-to-b from-white/100 to-white/0 dark:from-neutral-950/100 dark:to-neutral-950/0' />
        </>
      )}
    </div>
  );
}
