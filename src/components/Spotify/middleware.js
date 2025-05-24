'use client';

import { SONG } from '@/constants/one-place-changer';
import SpotifyPresenter from './presenter';
import { getPlayingContent } from './data';
import SpotifyFallback from './fallback';
import { Suspense } from 'react';
import SpotifyLoading from './loading';
import { useState, useEffect } from 'react';

const defaultSong = {
  durationPlaying: 0,
  durationFull: 0,
  spotifyUrl: '',
  albumImageUrl: '',
  title: '',
  artist: '',
  album: '',
  timestamp: '',
};

export default function SpotifyMiddleware({
  song: initialSong,
  isPlaying: initialIsPlaying,
}) {
  const [song, setSong] = useState(initialSong || defaultSong);
  const [isPlaying, setIsPlaying] = useState(
    typeof initialIsPlaying === 'boolean' ? initialIsPlaying : false
  );

  useEffect(() => {
    const fetchSong = async () => {
      try {
        const res = await fetch('/api/spotify');
        const data = await res.json();

        if (data && data.song) {
          setSong({
            ...defaultSong, // Fill in missing fields if any
            ...data.song,
          });
          setIsPlaying(data.isPlaying ?? false);
        }
      } catch (err) {
        console.error('Error fetching Spotify data:', err);
      }
    };

    fetchSong();

    const interval = setInterval(fetchSong, isPlaying ? 5000 : 120000);

    return () => clearInterval(interval);
  }, [isPlaying]);

  return (
    <>
      {false ? (
        <SpotifyFallback />
      ) : (
        <Suspense fallback={<SpotifyLoading />}>
          <SpotifyPresenter isPlaying={isPlaying} song={song} />
        </Suspense>
      )}
    </>
  );
}
