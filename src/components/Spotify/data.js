const querystring = require('querystring');

const {
  SPOTIFY_CLIENT_ID: client_id,
  SPOTIFY_CLIENT_SECRET: client_secret,
  SPOTIFY_REFRESH_TOKEN: refresh_token,
} = process.env;

const basic = Buffer.from(`${client_id}:${client_secret}`).toString('base64');
const NOW_PLAYING_ENDPOINT = `https://api.spotify.com/v1/me/player/currently-playing`;
const RECENTLY_PLAYED_ENDPOINT = `https://api.spotify.com/v1/me/player/recently-played`;
const PLAYLIST_ENDPOINT = `https://api.spotify.com/v1/playlists`;
const TOKEN_ENDPOINT = `https://accounts.spotify.com/api/token`;

const getAccessToken = async () => {
  const response = await fetch(TOKEN_ENDPOINT, {
    method: 'POST',
    headers: {
      Authorization: `Basic ${basic}`,
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: querystring.stringify({
      grant_type: 'refresh_token',
      refresh_token,
    }),
  });

  return response.json();
};

const getNowPlaying = async (access_token) => {
  return fetch(NOW_PLAYING_ENDPOINT, {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  });
};

const getRecentlyPlayed = async (access_token) => {
  return fetch(RECENTLY_PLAYED_ENDPOINT, {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  });
};

const getPlaylist = async (access_token, playlistId) => {
  return fetch(`${PLAYLIST_ENDPOINT}/${playlistId}`, {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  });
};

async function getSpotifyStatus() {
  const { access_token } = await getAccessToken();
  const nowPlayingResponse = await getNowPlaying(access_token);

  if (nowPlayingResponse.status > 204) {
    return { isPlaying: false };
  }

  if (nowPlayingResponse.status === 204) {
    const recentlyPlayedResponse = await getRecentlyPlayed(access_token);
    const songs = await recentlyPlayedResponse.json();
    const song = songs.items[0];

    if (!song?.track) {
      return { isPlaying: false };
    }

    const timestamp = song.played_at?.toString();
    const title = song.track.name;
    const artist = song.track.artists.map((a) => a.name).join(', ');
    const album = song.track.album.name;
    const albumImageUrl = song.track.album.images[0].url;
    const spotifyUrl = song.track.external_urls.spotify;

    return {
      timestamp,
      isPlaying: false,
      song: {
        title,
        artist,
        album,
        albumImageUrl,
        spotifyUrl,
      },
    };
  }

  const song = await nowPlayingResponse.json();

  if (!song?.item) {
    return { isPlaying: false };
  }

  const isPlaying = song.is_playing || Number.isInteger(song.timestamp);
  const title = song.item.name;
  const artist = song.item.artists.map((a) => a.name).join(', ');
  const album = song.item.album.name;
  const albumImageUrl = song.item.album.images[0].url;
  const spotifyUrl = song.item.external_urls.spotify;

  return {
    isPlaying,
    song: {
      title,
      artist,
      album,
      albumImageUrl,
      spotifyUrl,
    },
  };
}

async function getSpotifyPlaylist(_, args) {
  const { access_token } = await getAccessToken();
  const playlistResponse = await getPlaylist(access_token, args.id);

  if (playlistResponse.status > 200) {
    return null;
  }

  const playlist = await playlistResponse.json();

  return {
    name: playlist.name,
    coverUrl: playlist.images[0]?.url,
    trackCount: playlist.tracks.total,
    followerCount: playlist.followers.total,
    spotifyUrl: playlist.external_urls.spotify,
  };
}

module.exports = {
  getSpotifyStatus,
  getSpotifyPlaylist,
};
