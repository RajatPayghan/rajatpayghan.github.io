import React from 'react';
import { cn } from '@/lib/utils';
import { useIsMobile } from '../hooks/useIsMobile';
import { ArrowRight, ArrowUpRight, MoveRight } from 'lucide-react';
import Badge from '../common/badge';

function TableRow({
  isFirst,
  href,
  title,
  subtitle,
  imgSrc,
  dateStart,
  dateEnd,
  isCurr,
}) {
  const isMobile = useIsMobile();

  return (
    <a
      target='_blank'
      rel='noopener noreferrer'
      href={href}
      className={cn(
        'relative group flex flex-row gap-4 sm:gap-4',
        'bg-neutral-50 dark:bg-neutral-900 p-4 px-6 rounded-md',
        'border md:border-none dark:border-none border-neutral-100',
        'dark:md:bg-transparent md:bg-transparent md:p-0 md:rounded-none md:drop-shadow-none'
      )}
    >
      <div className='relative flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4 w-full'>
        {isFirst && !isMobile && (
          <div className='absolute -left-6'>
            <div className='absolute h-2 w-2 rounded-full bg-green-700 dark:bg-green-100 animate-ping ' />
            <div className='relative h-2 w-2 rounded-full bg-green-600 dark:bg-green-400' />
          </div>
        )}

        {isFirst && isMobile && (
          <div className='absolute right-8 top-1 -translate-y-1 sm:hidden'>
            <Badge isActive={true}>Active</Badge>
          </div>
        )}
        <div
          className={cn(
            'flex flex-row gap-2',
            'font-medium text-gray-1000',
            'group-hover:text-neutral-600 group-hover:underline',
            'dark:group-hover:text-neutral-200',
            'md:group-hover:bg-neutral-100 md:dark:group-hover:bg-neutral-900'
          )}
        >
          <strong className='relative max-w-fit min-w-fit font-medium text-neutral-800 dark:text-neutral-400'>
            {title}
          </strong>
          {isMobile && (
            <>
              <span className='w-full'></span>
              <MoveRight
                size={20}
                className='text-neutral-300 dark:text-neutral-600 min-w-fit'
              />
            </>
          )}
        </div>

        <span className='hidden sm:flex flex-1 border-t border-neutral-300 border-dashed dark:border-neutral-800' />

        <div className='flex flex-row md:flex-row gap-2'>
          {subtitle && (
            <span className='flex-none text-sm text-neutral-600 dark:text-neutral-500'>
              {subtitle}
            </span>
          )}

          {isMobile && <span className='w-full' />}

          {dateStart && (
            <span className='flex-none font-mono text-sm text-neutral-400 dark:text-neutral-700'>
              {dateStart} -{' '}
              {isCurr ? (
                <>
                  <span className='text-emerald-700 dark:group-hover:text-emerald-500 group-hover:text-emerald-900 transition-all duration-300'>
                    {dateEnd}
                  </span>
                </>
              ) : (
                dateEnd
              )}
            </span>
          )}
        </div>
        {/* {!isMobile && (
          <div className='absolute -right-5 h-0 opacity-0 group-hover:opacity-100 overflow-clip group-hover:h-4 transition-all duration-300'>
            <ArrowUpRight
              size={16}
              className='text-neutral-400 dark:text-neutral-600'
            />
          </div>
        )} */}
      </div>
    </a>
  );
}

export default TableRow;
