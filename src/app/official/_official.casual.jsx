// This is the Casual section in the home page

// Imports
// -----------------------------------------------------------------
import React from 'react';

import {
  SectionContainer,
  SectionContent,
  SectionTitle,
} from '@/components/homepage/sections';
// -----------------------------------------------------------------

export default function Home_Casual() {
  return (
    <SectionContainer>
      <SectionTitle>About Me</SectionTitle>
      <SectionContent>
        <>
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
        </>
      </SectionContent>
    </SectionContainer>
  );
}
