// This is a server component
// This is called from a server component and
// This calls a client component
// The function of this component is to get spotify data and

import { SONG } from '@/constants/one-place-changer';
import SpotifyPresenter from './presenter';
import { getPlayingContent } from './data';
import SpotifyFallback from './fallback';
import { Suspense } from 'react';
import SpotifyLoading from './loading';

export default async function SpotifyMiddleware({ isMobile }) {
  const { isPlaying, fallback, song } = await getPlayingContent();

  return (
    <>
      {fallback ? (
        <SpotifyFallback />
      ) : (
        <Suspense fallback={<SpotifyLoading />}>
          <SpotifyPresenter isPlaying={isPlaying} song={song} />
        </Suspense>
      )}
    </>
  );
}
