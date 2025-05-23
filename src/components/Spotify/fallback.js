'use client';

import React from 'react';
import Badge from '@/components/Badge';
import { Play } from 'lucide-react';
import { Spotify as SpotifyIcon } from '@/constants/icons';
import { cn } from '@/constants/utils';
import { useIsMobile } from '../hooks/useIsMobile';
import '@/styles/spotify.css';
import { SONG } from '@/constants/one-place-changer';

export default function SpotifyPresenter({ song = SONG, isPlaying = false }) {
  const isMobile = useIsMobile();
  return (
    <div>
      <a href={song.spotifyUrl} rel='noopener noreferrer' target='_blank'>
        <div className='spotify-container group'>
          <div className='spotify-card'>
            <img src={song.albumImageUrl} className='album-image' />
            <div className='song-info'>
              <div className='song-title'>{song.title}</div>
              <div className='song-meta'>
                <span>{song.artist}</span>
                <span>•</span>
                <span>{song.album}</span>
              </div>
            </div>
          </div>

          <div className='controls'>
            <span className='play-label'>
              <SpotifyIcon
                className={cn(
                  isMobile ? 'spotify-icon-mobile' : 'spotify-icon-desktop'
                )}
              />
              <Play
                className={cn(
                  'play-icon',
                  isMobile ? 'play-icon-mobile' : 'play-icon-desktop'
                )}
              />
              Play song
            </span>

            <div className='timestamp'>
              Played on{' '}
              <Badge isSubtle={true} isActive={true}>
                {song.timestamp}
              </Badge>
            </div>
          </div>
        </div>
      </a>
    </div>
  );
}
