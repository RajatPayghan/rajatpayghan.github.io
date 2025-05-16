import React from 'react';
import { cn } from '@/lib/utils';
import { useIsMobile } from '../hooks/useIsMobile';
import { ArrowUpRight } from 'lucide-react';

function TableRow({ href, title, subtitle, date, imgSrc }) {
  const isMobile = useIsMobile();

  return (
    <a
      target='_blank'
      rel='noopener noreferrer'
      href={href}
      className={cn(
        'relative group flex flex-row gap-4 sm:gap-4',
        'bg-neutral-900 p-4 rounded-md',
        'md:bg-transparent md:p-0 md:rounded-none'
      )}
    >
      {/* Desktop-only hover image */}
      <div className='hidden md:block absolute -left-12 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none'>
        <img
          src={imgSrc}
          alt={`${title} logo`}
          className='w-8 h-8 rounded-md border border-neutral-700 bg-neutral-800 object-cover shadow-md'
        />
      </div>

      {/* Mobile-only icon and image */}
      {isMobile && (
        <>
          <div className='absolute top-2 right-2'>
            <ArrowUpRight size={20} className='text-neutral-600' />
          </div>
          <div className='mt-1 min-w-fit'>
            <img
              src={imgSrc}
              alt={`${title} logo`}
              className='rounded-lg object-cover bg-neutral-800 border border-neutral-700 w-10 h-10'
            />
          </div>
        </>
      )}

      <div className='relative flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4 w-full'>
        <strong
          className={cn(
            'flex items-center gap-2',
            'line-clamp-2 font-medium text-gray-1000',
            'group-hover:text-neutral-600 group-hover:underline',
            'dark:group-hover:text-neutral-200',
            'md:group-hover:bg-neutral-100 md:dark:group-hover:bg-neutral-900'
          )}
        >
          <span>{title}</span>
        </strong>

        <span className='hidden sm:flex flex-1 border-t border-neutral-300 border-dashed dark:border-neutral-800' />

        {subtitle && (
          <span className='flex-none text-sm text-neutral-500'>{subtitle}</span>
        )}

        {date && (
          <span className='flex-none font-mono text-sm text-neutral-800 dark:text-neutral-700'>
            {date}
          </span>
        )}
      </div>
    </a>
  );
}

export default TableRow;
