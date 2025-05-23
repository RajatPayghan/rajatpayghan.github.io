import React from 'react';
import { getSpotifyPlaylist, getSpotifyStatus } from './data';
import { SONG } from '@/constants/one-place-changer';
import SpotifyPresenter from './presenter';

export default function SpotifyMiddelware({ isMobile }) {
  return (
    <div>
      <SpotifyPresenter SONG={SONG} isMobile={isMobile} />
    </div>
  );
}
