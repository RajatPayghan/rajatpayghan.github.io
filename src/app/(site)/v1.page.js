'use client';

import { useEffect, useState } from 'react';
import { FEATURE_FLAGS } from '@/constants/feature-flags';
import { SmoothCursor } from '@/components/SmoothCursor';
import { BlurFade } from '@/components/BlurFade/blur-fade';
import Shade from '@/components/Background/shade';
import ScrollBottomButton from '@/components/ScrollToBottom';

// Sections
import Home_About from '@/components/Home/v2.about';
import Home_Casual from '@/components/Home/v1.casual';
import Home_WhatsNew from '@/components/Home/v1.whatsnew';
import Home_Works from '@/components/Home/v3.works';
import Home_Spotify from '@/components/Home/v2.spotify';
import { useIsMobile } from '@/components/Hooks/useIsMobile';
import { cn } from '@/constants/utils';
import Home_Pixellum from '@/components/Home/v1.pixellum';

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
      {/* TODO : Change font size based on mobile to all  */}
      <ScrollBottomButton isLoading={isLoading} />
      <BlurFade duration={0}>
        <div className={cn('flex flex-col gap-16 lg:gap-16 mt-16 md:mt-0')}>
          <BlurFade delay={LOADING_SEC_DELAY}>
            <Home_About />
          </BlurFade>

          <BlurFade delay={LOADING_SEC_DELAY + 0.4}>
            <Home_Casual />
          </BlurFade>

          <BlurFade delay={LOADING_SEC_DELAY + 0.6}>
            <Home_Works />
          </BlurFade>

          <BlurFade inView={true}>
            <Home_Pixellum />
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
