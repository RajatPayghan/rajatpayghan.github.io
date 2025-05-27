import React from 'react';
import '@/styles/writing.css';
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
          <NavigationLink href='/' icon={ArrowUpLeft}>
            Home
          </NavigationLink>
        }
      >
        <HeroTitle text='Notes From My Life...' delay={500} />
      </WritingHeader>

      <div className='section-divider' />

      <PostsList posts={posts} />
    </PageLayout>
  );
}
