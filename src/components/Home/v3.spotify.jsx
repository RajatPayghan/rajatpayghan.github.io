'use client';

import React from 'react';
import {
  SectionContainer,
  SectionContent,
  SectionTitle,
} from '@/components/Sections';
import { SONG } from '@/constants/one-place-changer';
import { cn } from '@/constants/utils';
import { Spotify } from '@/constants/icons';
import { useIsMobile } from '@/components/Hooks/useIsMobile';
import Badge from '@/components/Badge';
import { Play } from 'lucide-react';
import SpotifyMiddelware from '@/components/Spotify/middleware';
import SpotifyServer from '@/components/Spotify/server';

export default function Home_Spotify() {
  const isMobile = useIsMobile();

  return (
    <SectionContainer>
      <SectionTitle>Recent Fav</SectionTitle>
      <SectionContent>
        <SpotifyServer isMobile={isMobile} />
      </SectionContent>
    </SectionContainer>
  );
}
