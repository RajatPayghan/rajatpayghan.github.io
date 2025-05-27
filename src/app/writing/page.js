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
    <BlurFade
      stagger={1}
      className='relative flex flex-col w-full min-h-[80%] gap-16 mt-36'
    >
      <div className='flex flex-col md:flex-row relative align-middle'>
        <Link
          href={'/'}
          className='absolute -left-1/4 top-1/4 flex gap-1 place-items-center text-neutral-400 dark:text-neutral-700'
        >
          <ArrowUpLeft size={20} />
          <span>Home</span>
        </Link>
        <span className='hero-title'>
          <TypingText
            text='Notes From My Life...'
            delay={500}
            className='hero-title-text'
          />
          <span className='hero-title-cursor'>|</span>
        </span>
      </div>

      <div className='w-full h-px bg-neutral-200 dark:bg-neutral-900' />

      <div className='flex flex-col gap-8'>
        <div className='flex flex-col gap-4 md:gap-2'>
          {sortedPosts.map(({ slug, title, date, description, tags }) => (
            <Link href={'/writing/' + slug} key={slug}>
              <div>{title}</div>
            </Link>
          ))}
        </div>
      </div>
    </BlurFade>
  );
}
