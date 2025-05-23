import React from 'react';
import { cn } from '@/constants/utils';
import { useIsMobile } from '../Hooks/useIsMobile';
import { ArrowRight, ArrowUpRight, MoveRight } from 'lucide-react';
import Badge from '../Badge';

export default function TableRow({
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
    <a // Parent Pill
      target='_blank'
      rel='noopener noreferrer'
      href={href}
      className={cn(
        'relative group flex gap-4 sm:gap-4',
        'bg-neutral-50 dark:bg-neutral-900 p-4 px-6 rounded-md',
        'border border-neutral-100 dark:border-none md:border-none',
        'md:bg-transparent dark:md:bg-transparent md:p-0 md:rounded-none md:drop-shadow-none'
      )}
    >
      <div className='relative flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4 w-full'>
        {/* Mobile: Active badge */}
        {isFirst && isMobile && (
          <div className='absolute right-8 top-1 -translate-y-1 sm:hidden'>
            <Badge isActive={true}>Active</Badge>
          </div>
        )}

        {/* Main Link */}
        <div
          className={cn(
            // Main link
            'flex gap-2', // layout
            'font-medium text-gray-900 dark:text-neutral-400', // Font colors
            'group-hover:text-neutral-600 dark:group-hover:text-neutral-200', // Colour on hover
            'group-hover:underline', // Unnderline
            'md:group-hover:bg-neutral-100 md:dark:group-hover:bg-neutral-900', // Background change on hover
            'transition-colors duration-300' // Animation
          )}
        >
          <strong className='relative max-w-fit min-w-fit font-medium text-neutral-800 dark:text-neutral-400'>
            {title}
          </strong>

          {/* Mobile: Right Arrow */}
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

        {/* Flex dashed line */}
        <span className='hidden sm:flex flex-1 border-t border-dashed border-neutral-300 dark:border-neutral-800' />

        {/* Mobile-Bottom & Desktop-Right */}
        <div className='flex gap-2'>
          {/* Subtitle */}
          {subtitle && (
            <span className='flex-none text-sm text-neutral-600 dark:text-neutral-500'>
              {subtitle}
            </span>
          )}

          {/* Spacer */}
          {isMobile && <span className='w-full' />}

          {/* Dates */}
          {dateStart && (
            <span className='relative flex-none font-mono text-sm text-neutral-400 dark:text-neutral-700'>
              {dateStart} -{' '}
              {isCurr ? (
                <span className='transition-colors duration-300 dark:text-emerald-500 text-emerald-700 group-hover:text-emerald-900 dark:group-hover:text-emerald-300'>
                  {dateEnd}
                </span>
              ) : (
                dateEnd
              )}
              {/* Desktop: Green Ping to right */}
              {isFirst && !isMobile && (
                <div className='absolute -right-4 top-2'>
                  <div className='absolute size-1 rounded-full bg-green-700 dark:bg-green-100 animate-ping' />
                  <div className='relative size-1 rounded-full bg-green-600 dark:bg-green-400' />
                </div>
              )}
            </span>
          )}
        </div>
      </div>
    </a>
  );
}
