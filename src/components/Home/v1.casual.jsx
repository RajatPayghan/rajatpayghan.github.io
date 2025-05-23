import React from 'react';

import {
  SectionContainer,
  SectionContent,
  SectionTitle,
} from '@/components/Sections';

export default function Home_Casual() {
  return (
    <SectionContainer>
      <SectionTitle>About Me</SectionTitle>
      <SectionContent>
        <div className=''>
          When I'm not <span className='italic'>sailing the high seas</span> of
          the internet, you'll find me grooving to EDM, savoring a perfect cup
          of coffee or tinkering with various personal code & design projects. I
          thrive on bringing ideas to life and creating solutions that delight
          users.
        </div>
      </SectionContent>
    </SectionContainer>
  );
}
