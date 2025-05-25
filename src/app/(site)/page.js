import { FEATURE_FLAGS } from '@/constants/feature-flags';
import ScrollBottomButton from '@/components/ScrollToBottom';

// Sections
import { BlurFade } from '@/components/BlurFade/blur-fade';
import Home_About from '@/components/Home/v2.about';
import Home_Casual from '@/components/Home/v1.casual';
import Home_WhatsNew from '@/components/Home/v1.whatsnew';
import Home_Works from '@/components/Home/v3.works';
import Home_Spotify from '@/components/Home/v3.spotify';
import Home_Pixellum from '@/components/Home/v1.pixellum';

export default async function Home() {
  return (
    <>
      {FEATURE_FLAGS.scrollBottomButton && <ScrollBottomButton />}

      <BlurFade className='flex flex-col gap-16 lg:gap-16'>
        <Home_About />

        <Home_Casual />

        <Home_Works />

        <Home_Pixellum />

        <Home_WhatsNew />

        <Home_Spotify />
      </BlurFade>
    </>
  );
}
