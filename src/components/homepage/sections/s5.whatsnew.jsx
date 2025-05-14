// This is the Whats New section in the home page

// Imports
// -----------------------------------------------------------------
import React from 'react';
import { FONT_CONTROL } from '@/lib/css-mission-control';
import {
  SectionContainer,
  SectionContent,
  SectionTitle,
} from '@/components/homepage/sections';
import { WHATSNEW } from '@/lib/one-place-changer';
// -----------------------------------------------------------------

export default function Home_WhatsNew() {
  return (
    <SectionContainer>
      <SectionTitle>What's New</SectionTitle>
      <SectionContent>
        <div className={FONT_CONTROL.base}>{WHATSNEW.text}</div>
      </SectionContent>
    </SectionContainer>
  );
}
