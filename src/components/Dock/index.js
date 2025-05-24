import { cn } from '@/constants/utils';
import React from 'react';

export default function Dock() {
  return (
    <div
      className={cn(
        'h-16 w-96 rounded-full',
        'absolute right-1/2 translate-x-1/2 bottom-4',
        'bg-neutral-200/60 dark:bg-neutral-700/60',
        'backdrop-blur-md'
      )}
    ></div>
  );
}
