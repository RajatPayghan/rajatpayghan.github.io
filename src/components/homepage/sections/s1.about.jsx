// This is the about me section in the home page

// Imports
// -----------------------------------------------------------------
import React from 'react';

import { Libre_Baskerville } from 'next/font/google';
import localFont from 'next/font/local';

import { CONTACTS } from '@/lib/constants';
import {
  SectionContainer,
  SectionContent,
  SectionTitle,
} from '@/components/homepage/sections';
import { OnlineLink } from '@/components/homepage/online-link';
import { cn } from '@/lib/utils';
import { useIsMobile } from '@/components/hooks/useIsMobile';
// -----------------------------------------------------------------

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
  const isMobile = useIsMobile();
  return (
    <SectionContainer>
      <SectionTitle></SectionTitle>
      <SectionContent>
        <div className='flex flex-col gap-8'>
          {/* TODO : Add cn and have different classes for text size, gap and stuff for mobile */}
          {/* TODO : Change font size based on mobile to all  */}
          <div
            className={cn(
              'flex flex-col gap-2',
              'font-instrument text-3xl md:text-5xl text-neutral-400'
            )}
          >
            {isMobile ? (
              <>
                <div>
                  <span className='text-neutral-50'>
                    Hey, I'm Rajat! I design,
                  </span>
                </div>
                <div className='flex flex-col gap-2 text-3xl'>
                  <div>develop & manage delicious</div>
                  <div>digital experiences</div>
                </div>
              </>
            ) : (
              <>
                <div>
                  <span className='text-neutral-50'> Hey, I'm Rajat!</span> I
                  design,
                </div>
                <div>
                  {' '}
                  develop & manage{' '}
                  <span className='transition-all duration-300 hover:text-rose-700'>
                    delicious
                  </span>
                </div>
                <div> digital experiences</div>
              </>
            )}
          </div>

          <div className='flex flex-col gap-1 text-sm md:text-lg text-neutral-200 font-geist font-normal'>
            <span>
              In a perfect world, I engineer solutions at the intersection of
              <span className={cn(`${libreBaskerville.className}`, 'italic')}>
                {' '}
                creativity
              </span>{' '}
              and <span className={departureMono.className}>{`<code/>`}</span>.
              In this one, I’m stuck centering a div.
            </span>
            <span>Welcome to my lil corner of the internet!</span>
          </div>

          <div className='flex flex-row gap-4'>
            {CONTACTS.map((link, index) => (
              <OnlineLink
                key={link.title}
                title={link.title}
                url={link.url}
                isLast={index === CONTACTS.length - 1}
              ></OnlineLink>
            ))}
          </div>
        </div>
      </SectionContent>
    </SectionContainer>
  );
}
