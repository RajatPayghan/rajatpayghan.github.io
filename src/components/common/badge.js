import { cn } from '@/lib/utils';
import React from 'react';

export default function Badge({ isActive, children }) {
  return (
    <div className='text-xs flex gap-1 bg-neutral-800 rounded-full items-center px-1 w-fit h-fit'>
      <div
        className={cn(
          'h-1 w-1 rounded-full',
          `${isActive ? 'bg-emerald-400' : 'bg-amber-600'}`
        )}
      />
      <div>{children}</div>
    </div>
  );
}
