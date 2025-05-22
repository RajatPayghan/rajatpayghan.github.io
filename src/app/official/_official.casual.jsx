// This is the Casual section in the home page

// Imports
// -----------------------------------------------------------------
import React from 'react';

import {
  SectionContainer,
  SectionContent,
  SectionTitle,
} from '@/components/homepage/sections';
import { cn } from '@/lib/utils';
import { FONT_CONTROL } from '@/lib/css-mission-control';
import '@/styles/font-control.css';
// -----------------------------------------------------------------

export default function Home_Casual() {
  return (
    <SectionContainer>
      <SectionTitle>About Me</SectionTitle>
      <SectionContent>
        <div className={cn('font-base')}>
          Outside of work, I enjoy unwinding listening to EDM, making the most
          of a good cup of coffee, and exploring various personal coding and
          design projects. I genuinely enjoy the process of{' '}
          <span className='italic'>turning ideas into something real</span> —
          especially when it makes someone’s experience smoother, simpler, or
          just a bit more enjoyable. For me, it’s all about{' '}
          <span className='italic'>
            building things that are useful, thoughtfully crafted and delight
            users.
          </span>
        </div>
      </SectionContent>
    </SectionContainer>
  );
}
