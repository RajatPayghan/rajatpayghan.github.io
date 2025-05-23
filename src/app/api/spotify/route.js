// src/app/api/spotify/route.js
import { getPlayingContent } from '@/components/Spotify/data';

export async function GET(request) {
  const referer = request.headers.get('referer');
  const host = request.headers.get('host');

  // Allow only if it's coming from your own domain
  if (!referer || !referer.includes(host)) {
    return new Response('Forbidden', { status: 403 });
  }

  const result = await getPlayingContent();
  return Response.json(result);
}
