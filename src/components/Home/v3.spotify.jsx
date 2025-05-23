import React from 'react';
import {
  SectionContainer,
  SectionContent,
  SectionTitle,
} from '@/components/Sections';
import SpotifyMiddleware from '../Spotify/middleware';

export default function Home_Spotify() {
  return (
    <SectionContainer>
      <SectionTitle>Recent</SectionTitle>
      <SectionContent>
        <SpotifyMiddleware />
      </SectionContent>
    </SectionContainer>
  );
}
