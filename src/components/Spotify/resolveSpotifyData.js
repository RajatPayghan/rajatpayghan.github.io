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
    refresh_token: `${refreshToken}`,
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

export const getNowPlaying = async () => {
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
      artists: response.data.item.artists.map((a) => a.name).join(', '),
      albumName: response.data.item.album.name,
      albumArt: response.data.item.album.images[0]?.url,
      progressMs: response.data.progress_ms,
      durationMs: response.data.item.duration_ms,
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
