'use client';

import React from 'react';
import '@/styles/writing.css';
import { usePathname } from 'next/navigation';
import { BlurFade } from '@/components/BlurFade/blur-fade';
import TypingText from '../typing';

export default function WritingLayout({ children }) {
  const slug = usePathname().split('/')[2];
  return (
    <div className='relative'>
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
        <div>{children}</div>
      </BlurFade>
    </div>
  );
}
