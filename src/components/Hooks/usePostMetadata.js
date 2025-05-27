'use client';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { getPostMetadataAction } from '@/app/writing/(content)/middleware.js';

export function usePostMetadata() {
  const pathname = usePathname();
  const [metadata, setMetadata] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchPost() {
      // Extract slug from pathname (e.g., /writing/my-post -> my-post)
      const slug = pathname.split('/').pop();

      if (!slug) {
        setError('No slug found');
        setLoading(false);
        return;
      }

      try {
        setLoading(true);
        setError(null);
        const postMetadata = await getPostMetadataAction(slug);

        if (!postMetadata) {
          setError('Post not found');
        } else {
          setMetadata(postMetadata);
        }
      } catch (err) {
        setError('Failed to load post');
        console.error('Error fetching post:', err);
      } finally {
        setLoading(false);
      }
    }

    fetchPost();
  }, [pathname]);

  return { metadata, loading, error, pathname };
}
