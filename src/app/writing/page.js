import React from 'react';
import '@/styles/writing.css';
import { getAllPostsMetadata } from '@/lib/writing';
import { BlurFade } from '@/components/BlurFade/blur-fade';
import TypingText from '../../components/TypingDiv/typing';
import Link from 'next/link';
import { ArrowUpLeft } from 'lucide-react';

export default function Writing() {
  const posts = getAllPostsMetadata();

  // Sort posts by date (newest first)
  const sortedPosts = posts.sort((a, b) => new Date(b.date) - new Date(a.date));

  return (
    // COMPONENT SUGGESTION: Consider creating a PageLayout component that wraps BlurFade
    // with consistent styling for all writing pages
    <BlurFade stagger={1} className='writing-container'>
      {/* COMPONENT SUGGESTION: Extract WritingHeader component - this pattern repeats in layout.js */}
      <header className='writing-header'>
        {/* COMPONENT SUGGESTION: Extract NavigationLink component - reused across pages */}
        <Link href='/' className='writing-nav-link'>
          <ArrowUpLeft size={20} />
          <span>Home</span>
        </Link>

        {/* COMPONENT SUGGESTION: Extract HeroTitle component with TypingText */}
        <h1 className='hero-title'>
          <TypingText
            text='Notes From My Life...'
            delay={500}
            className='hero-title-text'
          />
          <span className='hero-title-cursor'>|</span>
        </h1>
      </header>

      {/* COMPONENT SUGGESTION: Extract SectionDivider component - reused across pages */}
      <div className='section-divider' />

      {/* COMPONENT SUGGESTION: Extract PostsList component */}
      <main className='writing-content'>
        <section className='content-wrapper'>
          {sortedPosts.map(({ slug, title, date, description, tags }) => (
            // COMPONENT SUGGESTION: Extract PostListItem component with proper metadata display
            <Link href={`/writing/${slug}`} key={slug} className='post-link'>
              {/* TODO: Add proper post card layout with date, description, tags */}
              <article>{title}</article>
            </Link>
          ))}
        </section>
      </main>
    </BlurFade>
  );
}
