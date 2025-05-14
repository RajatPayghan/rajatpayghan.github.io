// This is the about me section in the home page

// Imports
// -----------------------------------------------------------------
import React from 'react';
import Image from 'next/image';

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

          <img
            src='/assets/profile-c&z.avif'
            className={cn(
              'h-32 w-28 md:h-36 md:w-28 object-cover',
              'transition duration-300',
              'rounded-full',
              'hover:scale-105 hover:rotate-2'
            )}
          />
          <div
            className={cn(
              'flex flex-col gap-2',
              'font-instrument text-3xl md:text-5xl text-neutral-400'
            )}
          >
            {isMobile ? (
              // Mobile Div
              <div className='flex flex-col gap-0'>
                <div className='mb-2'>
                  <span className='text-neutral-50'>
                    {' '}
                    Hey, I'm <span className='italic'>Rajat.</span>
                  </span>{' '}
                </div>
                <div>
                  <div>I design, develop & manage</div>
                  <div>delicious digital experiences</div>
                </div>
              </div>
            ) : (
              // Desktop Div
              <>
                <div>
                  <span className='text-neutral-50'>
                    {' '}
                    Hey, I'm <span className='italic'>Rajat.</span>
                  </span>{' '}
                  I design,
                </div>
                <div className='inline-block'>
                  develop & manage{' '}
                  <span
                    className={cn(
                      'inline-block group',
                      'transform hover:rotate-2 hover:scale-105',
                      'transition-all duration-500 ease-out',
                      'hover:text-neutral-50 italic'
                    )}
                  >
                    delicious
                    <img
                      src='/assets/Delicious-Badge.webp'
                      alt='Delicious Icon'
                      className={cn(
                        'absolute -top-5 -right-12 -z-10',
                        'w-16 h-16',
                        'opacity-0 group-hover:opacity-100',
                        'transform scale-75 rotate-0 group-hover:scale-110 group-hover:-rotate-12',
                        'transition-all duration-500 ease-out'
                      )}
                    />
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

          {/* <div className='flex flex-row gap-4'>
            {CONTACTS.map((link, index) => (
              <OnlineLink
                key={link.title}
                title={link.title}
                url={link.url}
                isLast={index === CONTACTS.length - 1}
              ></OnlineLink>
            ))}
          </div> */}
        </div>
      </SectionContent>
    </SectionContainer>
  );
}
