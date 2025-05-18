import { cn } from '@/lib/utils';
import React from 'react';

export default function Badge({ isActive, children }) {
  return (
    <div
      className={cn(
        'text-xs flex gap-1 bg-neutral-800 rounded-full items-center px-2 w-fit h-fit'
      )}
    >
      <div className='relative'>
        <div className='absolute h-1 w-1 rounded-full bg-neutral-100 animate-ping ' />
        <div
          className={cn(
            'relative h-1 w-1 rounded-full',
            `${isActive ? 'bg-green-500' : 'bg-amber-500'}`
          )}
        />
      </div>
      <div>{children}</div>
    </div>
  );
}
