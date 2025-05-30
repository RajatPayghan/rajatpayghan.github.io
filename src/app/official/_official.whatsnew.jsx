import React from 'react';
import {
  SectionContainer,
  SectionContent,
  SectionTitle,
} from '@/components/Sections';
import { WHATSNEW } from '@/constants/one-place-changer';

export default function Home_WhatsNew() {
  return (
    <SectionContainer>
      <SectionTitle>What's New</SectionTitle>
      <SectionContent>
        <div className='flex flex-col gap-2'>
          <div>{WHATSNEW.work}</div>
          <div>{WHATSNEW.lastLine}</div>
        </div>
      </SectionContent>
    </SectionContainer>
  );
}
