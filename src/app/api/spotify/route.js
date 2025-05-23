import { getPlayingContent } from '@/components/Spotify/data'; // update path if needed

export async function GET() {
  const data = await getPlayingContent();
  return Response.json(data);
}
