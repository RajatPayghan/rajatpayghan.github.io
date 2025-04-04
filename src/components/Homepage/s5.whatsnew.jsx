// This is the Whats New section in the home page
import {
  SectionContainer,
  SectionContent,
  SectionTitle,
} from '@/components/sections';
import { WHATSNEW } from '@/lib/one-place-changer';
import React from 'react';

export default function SectionFive() {
  return (
    <SectionContainer>
      <SectionTitle>What's New</SectionTitle>
      <SectionContent>{WHATSNEW.text}</SectionContent>
    </SectionContainer>
  );
}
