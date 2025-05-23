// components/Spotify/middleware.js
'use client';

import React from 'react';
import { SONG } from '@/constants/one-place-changer';
import SpotifyPresenter from './presenter';

export default function SpotifyMiddelware({ status, isMobile }) {
  return <SpotifyPresenter SONG={SONG} isMobile={isMobile} status={status} />;
}
