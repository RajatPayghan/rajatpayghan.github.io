'use server';

import { getPostBySlug, getPostMetadataBySlug } from '@/lib/writing';

export async function getPostAction(slug) {
  return getPostBySlug(slug);
}

export async function getPostMetadataAction(slug) {
  return getPostMetadataBySlug(slug);
}
