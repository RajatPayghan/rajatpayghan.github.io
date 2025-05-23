import { formatLastPlayedTime } from '@/lib/utils';
import axios from 'axios';
import qs from 'qs';

const NOW_PLAYING_ENDPOINT = `https://api.spotify.com/v1/me/player/currently-playing`;
const RECENTLY_PLAYED_ENDPOINT = `https://api.spotify.com/v1/me/player/recently-played`;
const PLAYLIST_ENDPOINT = `https://api.spotify.com/v1/playlists`;
const TOKEN_ENDPOINT = `https://accounts.spotify.com/api/token`;

const getAccessToken = async () => {
  const clientId = process.env.SPOTIFY_CLIENT_ID;
  const clientSecret = process.env.SPOTIFY_CLIENT_SECRET;
  const refreshToken = process.env.SPOTIFY_REFRESH_TOKEN;
  const authString = Buffer.from(`${clientId}:${clientSecret}`).toString(
    'base64'
  );

  const headers = {
    Accept: 'application/json',
    'Content-Type': 'application/x-www-form-urlencoded',
    Authorization: `Basic ${authString}`,
  };

  const data = qs.stringify({
    grant_type: 'refresh_token',
    refresh_token: refreshToken,
  });

  try {
    const response = await axios.post(
      'https://accounts.spotify.com/api/token',
      data,
      { headers }
    );
    // console.log(response.data.access_token);
    return response.data.access_token;
  } catch (error) {
    console.log(error.response ? error.response.data : error);
  }
};

export const getPlaying = async () => {
  try {
    const access_token = await getAccessToken();

    const response = await axios.get(NOW_PLAYING_ENDPOINT, {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    });

    // If no content (nothing playing), Spotify responds 204, axios throws on non-2xx, so catch that below
    if (response.status === 204) {
      return {
        isPlaying: false,
      };
    }

    return {
      trackName: response.data.item.name,
      href: response.data.item.external_urls.spotify,
      artists: response.data.item.artists[0].name,
      albumName: response.data.item.album.name,
      albumArt: response.data.item.album.images[1]?.url,
      isPlaying: response.data.is_playing,
    };
  } catch (error) {
    if (error.response?.status === 204) {
      // No content, nothing playing
      return {
        isPlaying: false,
      };
    }
    console.error(
      'Error fetching now playing:',
      error.response?.data || error.message
    );
    return null;
  }
};

const getRecentlyPlayed = async (access_token) => {
  return fetch(RECENTLY_PLAYED_ENDPOINT, {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  });
};

const getNowPlaying = async (access_token) => {
  return fetch(NOW_PLAYING_ENDPOINT, {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  });
};

export const getPlayingContent = async () => {
  // Need access token in APIs. Refreshed using refresh token from .env
  const access_token = await getAccessToken();

  // Get Now Playing Song
  const nowPlayingResponse = await getNowPlaying(access_token);

  // >204 : means all bad things (no authorisation, bad request, expiry)
  if (nowPlayingResponse.status > 204) {
    return { isPlaying: false, fallback: true };
  }

  // 204 : means currently no song is being played, but API call was ok
  if (nowPlayingResponse.status === 204) {
    // Instead of now playing get last played
    const recentlyPlayedResponse = await getRecentlyPlayed(access_token);
    const songs = await recentlyPlayedResponse.json();
    const song = songs.items[0];

    if (!song?.track) {
      return { isPlaying: false, fallback: true };
    }

    const timestamp = formatLastPlayedTime(song.played_at);
    const title = song.track.name;
    const artist = song.track.artists[0].name;
    const album = song.track.album.name;
    const albumImageUrl = song.track.album.images[0].url;
    const spotifyUrl = song.track.external_urls.spotify;

    return {
      fallback: false,
      isPlaying: false,
      song: {
        title,
        artist,
        album,
        albumImageUrl,
        spotifyUrl,
        timestamp,
      },
    };
  }

  // If there was indeed now playing then get the song JSON
  const song = await nowPlayingResponse.json();

  if (!song?.item) {
    return { isPlaying: false, fallback: true };
  }

  const isPlaying = song.is_playing || Number.isInteger(song.timestamp);
  const title = song.item.name;
  const artist = song.item.artists[0].name;
  const album = song.item.album.name;
  const albumImageUrl = song.item.album.images[0].url;
  const spotifyUrl = song.item.external_urls.spotify;

  return {
    fallback: false,
    isPlaying: true,
    song: {
      title,
      artist,
      album,
      albumImageUrl,
      spotifyUrl,
      timestamp: 'Now',
    },
  };
};
