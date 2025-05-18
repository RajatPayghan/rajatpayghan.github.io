'use client';
import React from 'react';
import { Button } from '../ui/button';
import { ArrowDown } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function ScrollBottomButton({ isLoading }) {
  // Function to scroll to bottom of the page
  const scrollToBottom = () => {
    const container = document.querySelector('.scroll-controller');
    if (container) {
      container.scrollTo({
        top: container.scrollHeight,
        behavior: 'smooth',
      });
    }
  };

  return (
    <Button
      onClick={scrollToBottom}
      variant='outline'
      size='icon'
      className={cn(
        'absolute bottom-2 right-2 z-40',
        'bg-neutral-50 dark:bg-neutral-900 border-neutral-200 dark:border-neutral-800',
        `${isLoading ? 'opacity-0' : 'opacity-100'}`,
        `${isLoading ? 'pointer-events-none' : 'pointer-events-auto'}`
      )}
    >
      <ArrowDown className='dark:text-neutral-50 text-neutral-700' />
    </Button>
  );
}
