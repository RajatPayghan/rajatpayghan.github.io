// This is the Whats New section in the home page
import {
  SectionContainer,
  SectionContent,
  SectionTitle,
} from '@/components/homepage/sections';
import { WHATSNEW } from '@/lib/one-place-changer';
import React from 'react';

export default function Home_WhatsNew() {
  return (
    <SectionContainer>
      <SectionTitle>What's New</SectionTitle>
      <SectionContent>{WHATSNEW.text}</SectionContent>
    </SectionContainer>
  );
}
