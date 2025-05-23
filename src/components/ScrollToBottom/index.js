'use client';
import React, { useEffect, useState } from 'react';
import { Button } from '../ui/button';
import { ArrowDown } from 'lucide-react';
import { cn } from '@/constants/utils';

const BOTTOM_LIMIT_TO_HIDE_BUTTON = 12;

export default function ScrollBottomButton({ isLoading }) {
  const [isAtBottom, setIsAtBottom] = useState(true);

  useEffect(() => {
    const container = document.querySelector('.scroll-controller');

    const handleScroll = () => {
      if (!container) return;
      const atBottom =
        Math.abs(
          container.scrollHeight - container.scrollTop - container.clientHeight
        ) <
        BOTTOM_LIMIT_TO_HIDE_BUTTON * 16;
      setIsAtBottom(atBottom);
    };

    if (container) {
      container.addEventListener('scroll', handleScroll);
      // Initial check
      handleScroll();
    }

    return () => {
      container?.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToBottom = () => {
    const container = document.querySelector('.scroll-controller');
    if (container) {
      container.scrollTo({
        top: container.scrollHeight,
        behavior: 'smooth',
      });
    }
  };

  const scrollToTop = () => {
    const container = document.querySelector('.scroll-controller');
    if (container) {
      container.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    }
  };

  const hidden = isLoading;

  return (
    <Button
      onClick={isAtBottom ? scrollToTop : scrollToBottom}
      variant='outline'
      size='icon'
      className={cn(
        'absolute bottom-2 right-2 z-40',
        'transition-opacity duration-300',
        'bg-neutral-50 dark:bg-neutral-900',
        'border-neutral-200 dark:border-neutral-800',
        hidden
          ? 'opacity-0 pointer-events-none'
          : 'opacity-100 pointer-events-auto',
        isAtBottom && 'opacity-50'
      )}
    >
      <ArrowDown
        className={cn(
          'dark:text-neutral-100 text-neutral-700',
          'transform transition-transform duration-300',
          isAtBottom ? 'rotate-180' : 'rotate-0'
        )}
      />
    </Button>
  );
}
