import SectionOne from '@/components/Homepage/s1.about';
import SectionTwo from '@/components/Homepage/s2.spline';
import SectionThree from '@/components/Homepage/s3.casual';
import SectionFour from '@/components/Homepage/s4.works';
import SectionFive from '@/components/Homepage/s5.whatsnew';
import SectionSix from '@/components/Homepage/s6.spotify';

export default function Home() {
  return (
    <div className='container-wrapper'>
      {/* Container for scroll */}

      {/* Container for central width */}
      <div className='container-md'>
        <div className='flex flex-col gap-8 lg:gap-12'>
          {/* First About Me section */}
          <SectionOne />

          {/* Spline Section */}
          <SectionTwo />

          {/* Casual Info */}
          <SectionThree />

          {/* Work Section */}
          <SectionFour />

          {/* Currently */}
          <SectionFive />

          {/* Spotify Song Link */}
          <SectionSix />

          {/* Spacer */}
          <div className='h-24 lg:h-36 w-full'></div>
        </div>
      </div>
    </div>
  );
}
