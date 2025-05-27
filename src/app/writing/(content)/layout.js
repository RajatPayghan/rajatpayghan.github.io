import React from 'react';
import '@/styles/writing.css';
import { BlurFade } from '@/components/BlurFade/blur-fade';
import Link from 'next/link';
import { MoveLeft } from 'lucide-react';
import { PostName } from './post';
import { WritingContentWrapper } from './contentwrapper';

export default function WritingLayout({ children }) {
  return (
    // COMPONENT SUGGESTION: Same PageLayout component as in writing/page.js could be used here
    <BlurFade stagger={0.3} className='writing-container'>
      {/* COMPONENT SUGGESTION: This header pattern is identical to writing/page.js - extract WritingHeader */}
      <header className='writing-header'>
        {/* COMPONENT SUGGESTION: Same NavigationLink component pattern */}
        <Link href='/writing' className='writing-content-nav-link'>
          <MoveLeft size={16} />
          <span>Writing</span>
        </Link>

        {/* COMPONENT SUGGESTION: PostHeader component - combines PostName with hero styling */}
        <h1 className='hero-title'>
          <PostName />
        </h1>
      </header>

      {/* COMPONENT SUGGESTION: Same SectionDivider component */}
      <div className='section-divider' />

      {/* COMPONENT SUGGESTION: Consider if this wrapper structure is needed or can be simplified */}
      <main className='writing-content'>
        <section className='content-wrapper'>
          {/* COMPONENT SUGGESTION: WritingContentWrapper might be doing redundant wrapping */}
          <WritingContentWrapper>{children}</WritingContentWrapper>
        </section>
      </main>
    </BlurFade>
  );
}
