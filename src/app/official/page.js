import { FEATURE_FLAGS } from '@/constants/feature-flags';
import ScrollBottomButton from '@/components/ScrollToBottom';

// Sections
import { BlurFade } from '@/components/BlurFade/blur-fade';
import Home_About from '@/app/official/_official.about';
import Home_Casual from '@/app/official/_official.casual';
import Home_WhatsNew from '@/app/official/_official.whatsnew';
import Home_Works from '@/components/Home/v3.works';
import Home_Spotify from '@/components/Home/v3.spotify';
import Home_Pixellum from '@/components/Home/v1.pixellum';
import SmoothCursor from '@/components/SmoothCursor';
import Shade from '@/components/Background/shade';

export default function Home() {
  return (
    <>
      <ScrollBottomButton />
      <BlurFade className='flex flex-col gap-16 lg:gap-16 mt-16 md:mt-0'>
        <Home_About />

        <Home_Casual />

        <Home_Works />

        <Home_Pixellum />

        <Home_WhatsNew />

        <Home_Spotify />
      </BlurFade>

      {FEATURE_FLAGS.enableSmoothCursor && <SmoothCursor />}

      {FEATURE_FLAGS.showHomepageShade && <Shade />}
    </>
  );
}
