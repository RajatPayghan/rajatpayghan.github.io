'use client';

import { useState, useEffect, useRef } from 'react';
import SpotifyPresenter from './presenter';
import SpotifyLoading from './loading';

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

  const [isLoading, setIsLoading] = useState(true);
  const isInitialFetchDone = useRef(false); // track if first fetch is done

  useEffect(() => {
    const fetchSong = async () => {
      try {
        // Only show loader on the very first fetch
        if (!isInitialFetchDone.current) {
          setIsLoading(true);
        }

        const res = await fetch('/api/spotify');
        const data = await res.json();

        if (data && data.song) {
          setSong({ ...defaultSong, ...data.song });
          setIsPlaying(data.isPlaying ?? false);
        }
      } catch (err) {
        console.error('Error fetching Spotify data:', err);
      } finally {
        setIsLoading(false);
        isInitialFetchDone.current = true; // mark initial fetch as done
      }
    };

    fetchSong();

    const interval = setInterval(fetchSong, isPlaying ? 5000 : 120000);
    return () => clearInterval(interval);
  }, [isPlaying]);

  return (
    <>
      {isLoading ? (
        <SpotifyLoading />
      ) : (
        <SpotifyPresenter isPlaying={isPlaying} song={song} />
      )}
    </>
  );
}
