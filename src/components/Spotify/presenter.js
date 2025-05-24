'use client';

import Badge from '@/components/Badge';
import { Play } from 'lucide-react';
import { Spotify as SpotifyIcon } from '@/constants/icons';
import { cn } from '@/constants/utils';
import { useIsMobile } from '../Hooks/useIsMobile';
import '@/styles/spotify.css';

export default function SpotifyPresenter({ song, isPlaying }) {
  const isMobile = useIsMobile();

  const play = Number(song.durationPlaying);
  const full = Number(song.durationFull);

  const widthPercentage = full > 0 ? (play / full) * 100 : 0;

  return (
    <div>
      <a href={song.spotifyUrl} rel='noopener noreferrer' target='_blank'>
        <div className='spotify-container group'>
          <div className='spotify-card'>
            <div className='album-image'>
              {' '}
              <img
                src={song.albumImageUrl}
                className={cn(
                  'album-image',
                  'transition-opacity duration-500 ease-in-out opacity-100 bg-neutral-100 dark:bg-neutral-900'
                )}
                alt='Album cover'
              />
            </div>

            <div className='song-info'>
              <div className='song-title truncate'>{song.title}</div>
              <div className='song-meta'>
                <div className='flex gap-2 min-w-0 w-full overflow-hidden'>
                  <span className='song-meta-items flex-shrink-0'>
                    {song.artist}
                  </span>
                  <span className='song-meta-separator'>•</span>
                  <span className='song-meta-items truncate'>{song.album}</span>
                </div>
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
              <span className='text-neutral-400 dark:text-neutral-700'>
                {isPlaying ? 'Playing' : 'Played'}
              </span>
              <Badge
                isSubtle={!isPlaying}
                isActive={isPlaying}
                className={cn(
                  'md:group-hover:scale-105 transition-all duration-300'
                )}
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
