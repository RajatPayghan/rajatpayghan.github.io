'use client';

import { useEffect, useState } from 'react';
import { FEATURE_FLAGS } from '@/lib/feature-flags';
import { SmoothCursor } from '@/components/layout/smooth-cursor';
import { BlurFade } from '@/components/common/blur-fade';
import GlowingGridBackground from '@/components/common/glowing-grid';
import Shade from '@/components/common/shade';
import ScrollBottomButton from '@/components/common/scroll-to-bottom';

// Sections
import Home_About from '@/components/homepage/sections/s1.about';
import Home_Casual from '@/components/homepage/sections/s3.casual';
import Home_WhatsNew from '@/components/homepage/sections/s5.whatsnew';
import Home_Works from '@/components/homepage/sections/s4.works';
import Home_Spotify from '@/components/homepage/sections/s6.spotify';
import Home_Image from '@/components/homepage/sections/archive.image';
import Home_Socials from '@/components/homepage/sections/archive.online';
import { useIsMobile } from '@/components/hooks/useIsMobile';
import { cn } from '@/lib/utils';
// -----------------------------------------------------------------

const LOADING_SEC_DELAY = FEATURE_FLAGS.loading.loadingSecDelay; // From lib/feature-flags.js
const MOBILE_BREAKPOINT = 768; // Screen size in px

export default function Home() {
  // STATES
  const [isLoading, setisLoading] = useState(true);
  const isMobile = useIsMobile(MOBILE_BREAKPOINT);

  // Change isLoading after loading delay
  useEffect(() => {
    const timer = setTimeout(() => {
      setisLoading(false);
    }, LOADING_SEC_DELAY * 1000); // Converting loading secs to millisec for setTimeout()

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className=''>
      <ScrollBottomButton isLoading={isLoading} />

      {/* TODO : Change font size based on mobile to all  */}
      <BlurFade duration={0.8}>
        <div className={cn('flex flex-col gap-12 lg:gap-12 mt-16 md:mt-0')}>
          <BlurFade delay={LOADING_SEC_DELAY + 0.4}>
            <Home_About />
          </BlurFade>

          <BlurFade delay={LOADING_SEC_DELAY + 0.8}>
            <Home_Casual />
          </BlurFade>

          <BlurFade delay={LOADING_SEC_DELAY + 1}>
            <Home_Works />
          </BlurFade>

          <BlurFade inView={true}>
            <Home_WhatsNew />
          </BlurFade>

          <BlurFade inView={true}>
            <Home_Spotify />
          </BlurFade>
        </div>
      </BlurFade>

      {FEATURE_FLAGS.enableSmoothCursor && !isMobile && <SmoothCursor />}

      {FEATURE_FLAGS.showHomepageShade && <Shade />}
    </div>
  );
}
