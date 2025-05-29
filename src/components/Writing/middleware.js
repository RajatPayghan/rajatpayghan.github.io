/**================================================================================================
 **                                         MIDDLEWARE
 * Middleware exists for a simple reason. To get info from slug, you need slug (pathname),
 * which you can only get from a client component.
 * So middelware acts as a bride between the server call and the client passing its slug.
 *
 * @depends : From '@/lib/writing' which contains all the functions to get metadata
 * @upstream : To 'src/components/Hooks/getPostMetadata.js' which returns metadata and state of call
 *================================================================================================**/
'use server';

import { getPostBySlug, getPostMetadataBySlug } from '@/lib/writing';

export async function getPostAction(slug) {
  return getPostBySlug(slug);
}

export async function getPostMetadataAction(slug) {
  return getPostMetadataBySlug(slug);
}
