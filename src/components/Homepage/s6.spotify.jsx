// This is the Whats New section in the home page
import {
  SectionContainer,
  SectionContent,
  SectionTitle,
} from '@/components/sections';
import { SONG } from '@/lib/one-place-changer';
import React from 'react';

export default function Home_Spotify() {
  return (
    <SectionContainer>
      <SectionTitle>Recent Fav</SectionTitle>
      <SectionContent>
        <iframe
          style={{ borderRadius: '12px' }}
          src={SONG.src}
          width='100%'
          height='152'
          allow='autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture'
          loading='lazy'
        />
      </SectionContent>
    </SectionContainer>
  );
}
