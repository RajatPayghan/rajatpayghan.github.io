'use client';

import { useEffect, useState } from 'react';

export default function TypingText({ text, speed = 500 }) {
  const [displayedLength, setDisplayedLength] = useState(0);

  useEffect(() => {
    setDisplayedLength(0); // Reset when text or speed changes
    if (!text) return;
    let i = 0;
    const interval = setInterval(() => {
      i++;
      setDisplayedLength(i);
      if (i >= text.length) clearInterval(interval);
    }, speed * 2);
    return () => clearInterval(interval);
  }, [text, speed]);

  return (
    <span className='hero-title-text'>{text.slice(0, displayedLength)}</span>
  );
}
