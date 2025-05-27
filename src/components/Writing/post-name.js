'use client';
import React from 'react';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { getPostMetadataAction } from '../../app/writing/(content)/middleware.js';
import { BlurFade } from '@/components/BlurFade/blur-fade.js';

export function PostHeader() {
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

  if (loading) {
    return (
      <div className='max-w-4xl mx-auto p-6'>
        <div className='animate-pulse'>
          <div className='h-8 bg-gray-300 rounded mb-4'></div>
          <div className='h-4 bg-gray-300 rounded w-1/4 mb-2'></div>
          <div className='h-4 bg-gray-300 rounded w-3/4 mb-6'></div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className='max-w-4xl mx-auto p-6'>
        <h1 className='text-2xl font-bold text-red-600'>Error</h1>
        <p>{error}</p>
      </div>
    );
  }

  if (!metadata) {
    return (
      <div className='max-w-4xl mx-auto p-6'>
        <h1 className='text-2xl font-bold'>Post not found</h1>
      </div>
    );
  }

  // TODO : Create a Post Metadata Card
  return <BlurFade key={pathname}>{metadata.title}</BlurFade>;
}
