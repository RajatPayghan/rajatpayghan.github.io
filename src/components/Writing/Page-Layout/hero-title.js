// CLIENT COMPONENT - Title with typing animation (needs TypingText)
'use client';
import TypingText from '@/components/TypingDiv/typing';

export function HeroTitle({ text, delay = 500 }) {
  return (
    <>
      <TypingText text={text} delay={delay} className='hero-title-text' />
      <span className='hero-title-cursor'>|</span>
    </>
  );
}
