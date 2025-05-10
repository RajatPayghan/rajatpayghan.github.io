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
import Home_Spotify from '@/components/homepage/sections/s6.spotify';
import Home_WhatsNew from '@/components/homepage/sections/s5.whatsnew';
import Home_Works from '@/components/homepage/sections/s4.works';
import Home_Image from '@/components/homepage/sections/s2.image';
import Home_Socials from '@/components/homepage/sections/s7.online';
// -----------------------------------------------------------------

const LOADING_SEC_DELAY = FEATURE_FLAGS.loading.loadingSecDelay; // From lib/feature-flags.js
const MOBILE_BREAKPOINT = 768; // Screen size in px

export default function Home() {
  // STATES
  const [isMobile, setIsMobile] = useState(false);
  const [isLoading, setisLoading] = useState(true);

  // Check if mobile or not using isMobile
  useEffect(() => {
    const checkMobile = () => {
      if (typeof window !== 'undefined') {
        setIsMobile(window.innerWidth <= MOBILE_BREAKPOINT);
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
    }, LOADING_SEC_DELAY * 1000); // Converting loading secs to millisec for setTimeout()

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className='container-wrapper'>
      {FEATURE_FLAGS.showGlowBG && !isMobile && <GlowingGridBackground />}

      <ScrollBottomButton isLoading={isLoading} />

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

      {FEATURE_FLAGS.enableSmoothCursor && !isMobile && <SmoothCursor />}

      {FEATURE_FLAGS.showHomepageShade && <Shade />}
    </div>
  );
}
