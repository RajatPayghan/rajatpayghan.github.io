// This is the Casual section in the home page
import {
  SectionContainer,
  SectionContent,
  SectionTitle,
} from '@/components/Support/sections';
import Link from 'next/link';
import React from 'react';

export default function Home_Casual() {
  return (
    <SectionContainer>
      <SectionTitle></SectionTitle>
      <SectionContent>
        When I'm not{' '}
        <Link
          href={'https://www.reddit.com/r/Piracy/'}
          className='cursor-default hover:text-neutral-700 dark:hover:text-neutral-400'
        >
          sailing around the high seas
        </Link>{' '}
        of the internet, you'll find me grooving to EDM, savoring a perfect cup
        of coffee or tinkering with various personal code & design projects. I
        thrive on bringing ideas to life and creating solutions that delight
        users.
      </SectionContent>
    </SectionContainer>
  );
}
