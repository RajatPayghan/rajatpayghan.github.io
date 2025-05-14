// Imports
// -----------------------------------------------------------------
import React from 'react';
import { cn } from '@/lib/utils';
// -----------------------------------------------------------------

function TableRow({ href, title, subtitle, date }) {
  return (
    <a
      target='_blank'
      rel='noopener noreferrer'
      href={href}
      className={cn(
        'flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4 group',
        'bg-neutral-900 p-4 rounded-md',
        'md:bg-transparent md:p-0 md:rounded-none'
      )}
    >
      <strong className='line-clamp-2 font-medium text-gray-1000 group-hover:text-neutral-600 group-hover:underline dark:group-hover:text-neutral-200 group-hover:bg-neutral-100 dark:group-hover:bg-neutral-900'>
        {title}
      </strong>
      <span className='hidden sm:flex flex-1 border-t border-gray-300 border-dashed shrink dark:border-gray-800' />
      {subtitle && (
        <span className='flex-none text-sm text-neutral-500 '>{subtitle}</span>
      )}
      {date && (
        <span className='flex-none font-mono text-sm text-neutral-800 dark:text-neutral-700'>
          {date}
        </span>
      )}
    </a>
  );
}

export default TableRow;
