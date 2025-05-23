import { getPlayingContent } from '@/components/Spotify/data'; // update path if needed

export async function GET() {
  const data = await getPlayingContent();
  console.log(data);
  return Response.json(data);
}
