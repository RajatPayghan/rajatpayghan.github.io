import React from 'react';
import '@/styles/Writing/writing.css';
import { getAllPostsMetadata } from '@/lib/writing';
import { ArrowUpLeft } from 'lucide-react';

// Server Components
import { PageLayout } from '@/components/Writing/page-layout';
import { WritingHeader } from '@/components/Writing/writing-header';
import { NavigationLink } from '@/components/Writing/navigation-link';
import { PostsList } from '@/components/Writing/post-list';

// Client Component
import { HeroTitle } from '@/components/Writing/hero-title';

export default function Writing() {
  const posts = getAllPostsMetadata();

  return (
    <PageLayout stagger={1}>
      <WritingHeader
        navigationLink={
          <NavigationLink href='/' icon={ArrowUpLeft} variant='content'>
            Home
          </NavigationLink>
        }
      >
        <HeroTitle text='Notes From My Life...' delay={500} />
      </WritingHeader>

      <div className='section-divider' />

      {/* Might need to refactor this page if need arises for tag filtering */}
      <PostsList posts={posts} filterTag='' filterType='' />
    </PageLayout>
  );
}
