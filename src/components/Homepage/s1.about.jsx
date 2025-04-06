// This is the about me section in the home page
import {
  SectionContainer,
  SectionContent,
  SectionTitle,
} from '@/components/sections';
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from '@/components/ui/hover-card';
import React from 'react';

export default function Home_About() {
  return (
    <SectionContainer>
      <SectionTitle></SectionTitle>
      <SectionContent>
        <div>Hi there! 👋 </div>
        I'm{' '}
        <span className='text-neutral-900 dark:text-neutral-50'>
          Rajat Payghan
        </span>
        , a product engineer passionate about crafting digital experiences. I{' '}
        <HoverCard>
          <HoverCardTrigger className='underline underline-offset-2 text-neutral-900 dark:text-neutral-50'>
            develop
          </HoverCardTrigger>
          <HoverCardContent className='text-sm'>
            I write clean, efficient code to build robust features and optimize
            performance
          </HoverCardContent>
        </HoverCard>
        ,{' '}
        <HoverCard>
          <HoverCardTrigger className='underline underline-offset-2 text-neutral-900 dark:text-neutral-50'>
            manage
          </HoverCardTrigger>
          <HoverCardContent className='text-sm'>
            I lead product teams, prioritize features, and drive development
            from concept to successful launch.
          </HoverCardContent>
        </HoverCard>{' '}
        and sometimes{' '}
        <HoverCard>
          <HoverCardTrigger className='underline underline-offset-2 text-neutral-900 dark:text-neutral-50'>
            design
          </HoverCardTrigger>
          <HoverCardContent className='text-sm'>
            I create user-centered interfaces, prototype interactions, and
            transform complex ideas into intuitive experiences.
          </HoverCardContent>
        </HoverCard>{' '}
        engaging digital products that make a difference.
      </SectionContent>
    </SectionContainer>
  );
}
