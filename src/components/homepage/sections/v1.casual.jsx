// This is the Casual section in the home page

// Imports
// -----------------------------------------------------------------
import Link from 'next/link';
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
        <>
          When I'm not <span className='italic'>sailing the high seas</span> of
          the internet, you'll find me grooving to EDM, savoring a perfect cup
          of coffee or tinkering with various personal code & design projects. I
          thrive on bringing ideas to life and creating solutions that delight
          users.
        </>
      </SectionContent>
    </SectionContainer>
  );
}
