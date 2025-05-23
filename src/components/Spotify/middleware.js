// This is a server component
// This is called from a server component and
// This calls a client component
// The function of this component is to get spotify data and

import { SONG } from '@/constants/one-place-changer';
import SpotifyPresenter from './presenter';
import { getNowPlaying } from './resolveSpotifyData';

export default async function SpotifyMiddleware({ isMobile }) {
  const status = await getNowPlaying();

  console.log(status);

  return <></>;
}
