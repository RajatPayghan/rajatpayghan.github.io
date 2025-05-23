// This is a server component
// This is called from a client component and
// This calls a client component
// The function of this component is to get spotify data and

import SpotifyMiddelware from './middleware';
import { getSpotifyStatus } from './data';

export default async function SpotifyServerWrapper({ isMobile }) {
  const status = await getSpotifyStatus();

  return <SpotifyMiddelware status={status} isMobile={isMobile} />;
}
