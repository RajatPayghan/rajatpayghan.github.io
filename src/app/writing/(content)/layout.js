import React from 'react';
import '@/styles/writing.css';
import { BlurFade } from '@/components/BlurFade/blur-fade';
import Link from 'next/link';
import { MoveLeft } from 'lucide-react';
import { PostName } from './post';

export default function WritingLayout({ children }) {
  return (
    <BlurFade
      stagger={0.3}
      className='relative flex flex-col w-full min-h-[80%] gap-16 mt-36'
    >
      <div className='flex flex-col md:flex-row relative align-middle'>
        <Link
          href={'/writing'}
          className='absolute -left-1/4 top-0 translate-y-2 flex gap-1 place-items-center text-neutral-400 dark:text-neutral-700'
        >
          <MoveLeft size={16} />
          <span>Writing</span>
        </Link>
        <span className='hero-title'>
          <PostName />
          {/* <span className='hero-title-cursor'>|</span> */}
        </span>
      </div>

      <div className='w-full h-px bg-neutral-200 dark:bg-neutral-900' />

      <div className='flex flex-col gap-8'>
        <div className='flex flex-col gap-4 md:gap-2'>{children}</div>
      </div>
    </BlurFade>
  );
}
