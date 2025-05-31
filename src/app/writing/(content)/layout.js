'use client';

import React from 'react';
import { useState } from 'react';

// Icons & Styles
import '@/styles/Writing/post.css';
import '@/styles/Writing/writing.css';
import { MoveLeft } from 'lucide-react';

// Server Components
import { PageLayout } from '@/components/Writing/Page-Layout/page-layout';
import { WritingHeader } from '@/components/Writing/Page-Layout/writing-header';
import { NavigationLink } from '@/components/Writing/Page-Layout/navigation-link';
import { PostHeader } from '@/components/Writing/Post-Meta/post-header';
import { ContentLayout } from '@/components/Writing/Page-Layout/layout-content';
import { WritingContentWrapper } from '@/components/Writing/Post-Components/content-wrapper';

export default function WritingLayout({ children }) {
  const [isPostHeaderLoaded, setIsPostHeaderLoaded] = useState(false);
  return (
    <PageLayout stagger={0.3} /* The stagger is for BlurFade stagger */>
      <WritingHeader
        navigationLink={
          <NavigationLink
            href='/writing'
            icon={MoveLeft}
            iconSize={16}
            variant='content'
          >
            Writing
          </NavigationLink>
        }
      >
        <PostHeader onLoad={() => setIsPostHeaderLoaded(true)} />
      </WritingHeader>

      <div className='section-divider' />

      <ContentLayout>
        {/* 
          WritingContentWrapper serves a specific purpose:
          - Client component that uses usePathname
          - Triggers BlurFade animation on path changes
          - Maintains server/client boundary properly
        */}
        {isPostHeaderLoaded && (
          <WritingContentWrapper>{children}</WritingContentWrapper>
        )}
      </ContentLayout>
    </PageLayout>
  );
}
