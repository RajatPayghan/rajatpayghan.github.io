import React from 'react';
import '@/styles/writing.css';
import { MoveLeft } from 'lucide-react';

// Server Components
import { PageLayout } from '@/components/Writing/page-layout';
import { WritingHeader } from '@/components/Writing/writing-header';
import { NavigationLink } from '@/components/Writing/navigation-link';
import { PostHeader } from '@/components/Writing/post-name';
import { ContentLayout } from '@/components/Writing/layout-content';
import { WritingContentWrapper } from './contentwrapper';

export default function WritingLayout({ children }) {
  return (
    <PageLayout stagger={0.3}>
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
        <PostHeader />
      </WritingHeader>

      <div className='section-divider' />

      <ContentLayout>
        {/* 
          WritingContentWrapper serves a specific purpose:
          - Client component that uses usePathname
          - Triggers BlurFade animation on path changes
          - Maintains server/client boundary properly
        */}
        <WritingContentWrapper>{children}</WritingContentWrapper>
      </ContentLayout>
    </PageLayout>
  );
}
