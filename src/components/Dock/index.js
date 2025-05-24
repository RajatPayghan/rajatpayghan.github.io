import { cn } from '@/constants/utils';
import React from 'react';

export default function Dock() {
  return (
    <div
      className={cn(
        'bg-red-500 h-16 w-1/2 rounded-full',
        'absolute right-1/2 translate-x-1/2 bottom-4'
      )}
    ></div>
  );
}
