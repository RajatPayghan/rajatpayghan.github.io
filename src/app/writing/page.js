import React from 'react';
import '@/styles/writing.css';
import { getAllPostsMetadata } from '@/lib/writing';
import { BlurFade } from '@/components/BlurFade/blur-fade';
import TypingText from './typing';
import Link from 'next/link';

export default function Writing() {
  const posts = getAllPostsMetadata();

  // Sort posts by date (newest first)
  const sortedPosts = posts.sort((a, b) => new Date(b.date) - new Date(a.date));

  return (
    <BlurFade className='relative flex flex-col w-full min-h-[80%] gap-8'>
      <div className='flex flex-col gap-2 justify-end font-instrument w-full h-36 md:h-52'>
        <span className='hero-subtitle'>/writing</span>
        <span className='hero-title'>
          <TypingText
            text='Notes From My Life...'
            speed={70}
            className='hero-title-text'
          />
          <span className='hero-title-cursor'>|</span>
        </span>
      </div>
      <div className='text-base'>
        This is my personal blog, a space where I share my thoughts, ideas and
        other interesting things I come across. I view it as some sort of a
        timecapsule, where I document my journey and see how I evolve over time.
        On here, you will find notes (aka fleeting thoughts), regular posts and
        more elaborate essays.
      </div>

      <div className='flex flex-col gap-4 md:gap-2'>
        {sortedPosts.map(({ slug, title, date, description, tags }) => (
          <Link href={'/writing/' + slug} key={slug}>
            {title}
          </Link>
        ))}
      </div>
    </BlurFade>
  );
}
