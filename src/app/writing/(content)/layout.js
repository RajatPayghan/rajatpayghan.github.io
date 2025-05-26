import React from 'react';
import '@/styles/writing.css';
import { BlurFade } from '@/components/BlurFade/blur-fade';
import TypingText from '../typing';
import TopSection from './top-section';

export default function WritingLayout({ children }) {
  return (
    <div className='relative'>
      <BlurFade className='relative flex flex-col w-full min-h-[80%] gap-8'>
        <div className='flex flex-col gap-2 justify-end font-instrument w-full h-36 md:h-52'>
          <span className='hero-subtitle'>
            <TopSection />
          </span>
          <span className='hero-title'>
            <TypingText
              text='Notes From My Life...'
              speed={2000}
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
