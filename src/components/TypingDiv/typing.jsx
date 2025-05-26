'use client';

import { useEffect, useState } from 'react';

const wait = (msDelay) => new Promise((res) => setTimeout(res, msDelay));

export default function TypingText({ delay, text, speed = 70 }) {
  const [displayedLength, setDisplayedLength] = useState(0);

  useEffect(() => {
    setDisplayedLength(0); // Reset when text or speed changes
    if (!text) return;

    const startTyping = async () => {
      await wait(delay); // 300ms delay before typing starts
      let i = 0;
      const interval = setInterval(() => {
        i++;
        setDisplayedLength(i);
        if (i >= text.length) clearInterval(interval);
      }, speed);
      return interval;
    };

    const intervalPromise = startTyping();

    return () => {
      intervalPromise.then((interval) => clearInterval(interval));
    };
  }, [text, speed]);

  return (
    <span className='hero-title-text'>{text.slice(0, displayedLength)}</span>
  );
}
