import React from 'react';
import {
  SectionContainer,
  SectionContent,
  SectionTitle,
} from '@/components/homepage/sections';
import { WHATSNEW } from '@/lib/one-place-changer';

export default function Home_WhatsNew() {
  return (
    <SectionContainer>
      <SectionTitle>What's New</SectionTitle>
      <SectionContent>
        <div className='flex flex-col gap-2'>
          <div>{WHATSNEW.work}</div>
          <div>{WHATSNEW.casual}</div>
          <div>{WHATSNEW.lastLine}</div>
        </div>
      </SectionContent>
    </SectionContainer>
  );
}
