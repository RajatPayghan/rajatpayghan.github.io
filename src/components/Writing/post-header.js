'use client';
import React from 'react';
import { usePostMetadata } from '../Hooks/usePostMetadata';
// import { LoadingState } from './LoadingState';
// import { ErrorState } from './ErrorState';
import { PostMetadataCard } from './post-metadata-card';

export function PostHeader() {
  const { metadata, loading, error, pathname } = usePostMetadata();

  // Loading state
  if (loading) {
    return <></>;
  }

  // Error states
  if (error) {
    return <></>;
  }

  if (!metadata) {
    return <></>;
  }

  // Success state
  return <PostMetadataCard metadata={metadata} pathname={pathname} />;
}
