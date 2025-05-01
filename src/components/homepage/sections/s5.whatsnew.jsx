// This is the Whats New section in the home page

// Imports
// -----------------------------------------------------------------
import React from 'react';
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
      <SectionContent>{WHATSNEW.text}</SectionContent>
    </SectionContainer>
  );
}
