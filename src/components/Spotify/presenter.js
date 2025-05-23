'use client';

import React, { useEffect, useState } from 'react';
import Badge from '@/components/Badge';
import { Play } from 'lucide-react';
import { Spotify as SpotifyIcon } from '@/constants/icons';
import { cn } from '@/constants/utils';
import { useIsMobile } from '../hooks/useIsMobile';
import '@/styles/spotify.css';

export default function SpotifyPresenter({
  song: initialSong,
  isPlaying: initialIsPlaying,
}) {
  const [song, setSong] = useState(initialSong);
  const [isPlaying, setIsPlaying] = useState(initialIsPlaying);
  const isMobile = useIsMobile();

  const play = Number(song.durationPlaying);
  const full = Number(song.durationFull);

  const widthPercentage = full > 0 ? (play / full) * 100 : 0;

  useEffect(() => {
    const fetchSong = async () => {
      try {
        const res = await fetch('/api/spotify');
        const data = await res.json();
        setSong(data.song);
        setIsPlaying(data.isPlaying);
      } catch (err) {
        console.error('Error fetching Spotify data:', err);
      }
    };

    // Initial fetch
    fetchSong();

    const interval = setInterval(fetchSong, isPlaying ? 5_000 : 120_000);

    return () => clearInterval(interval);
  }, [isPlaying]);

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
              {isPlaying ? 'Playing' : 'Played'}
              <Badge
                isSubtle={!isPlaying}
                isActive={isPlaying}
                className='md:group-hover:scale-105 transition-all duration-300'
              >
                {song.timestamp}
              </Badge>
            </div>
          </div>

          {isPlaying && (
            <div className='play-bar'>
              <div
                className='play-bar-progress'
                style={{ width: `${widthPercentage}%` }}
              />
            </div>
          )}
        </div>
      </a>
    </div>
  );
}
