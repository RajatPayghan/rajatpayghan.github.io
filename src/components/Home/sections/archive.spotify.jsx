// This is the Whats New section in the home page

// Imports
// -----------------------------------------------------------------
import React from 'react';
import {
  SectionContainer,
  SectionContent,
  SectionTitle,
} from '@/components/Sections';
import { SONG } from '@/constants/one-place-changer';
// -----------------------------------------------------------------

export default function Home_Spotify() {
  return (
    <SectionContainer>
      <SectionTitle>Recent Fav</SectionTitle>
      <SectionContent>
        <iframe
          style={{ borderRadius: '12px' }}
          src={SONG.embedCode}
          width='100%'
          height='152'
          allow='autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture'
          loading='lazy'
          className='cursor-none'
        />
      </SectionContent>
    </SectionContainer>
  );
}
