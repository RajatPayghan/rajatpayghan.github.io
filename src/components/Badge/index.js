import { cn } from '@/constants/utils';
import React from 'react';

export default function Badge({
  isSubtle = false,
  isActive,
  children,
  className,
}) {
  return (
    <div
      className={cn(
        'text-xs flex gap-1 dark:bg-neutral-800 dark:text-neutral-400 rounded-full items-center px-2 w-fit h-fit border dark:border-none',
        `${
          !isSubtle ? (isActive ? 'bg-green-100' : 'bg-amber-100') : 'bg-white'
        }`,
        `${
          !isSubtle
            ? isActive
              ? 'border-green-500'
              : 'border-amber-500'
            : isActive
            ? 'text-green-700'
            : 'text-amber-600'
        }`,
        className
      )}
    >
      <div className='relative'>
        <div className='absolute h-1 w-1 rounded-full bg-neutral-50 animate-ping ' />
        <div
          className={cn(
            'relative h-1 w-1 rounded-full',
            `${isActive ? 'dark:bg-green-500' : 'dark:bg-amber-500'}`,
            `${isActive ? 'bg-green-500' : 'bg-amber-500'}`
          )}
        />
      </div>
      <div>{children}</div>
    </div>
  );
}
