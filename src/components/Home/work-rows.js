'use client';
import React from 'react';
import { cn } from '@/constants/utils';
import { useIsMobile } from '../Hooks/useIsMobile';
import { ArrowRight, ArrowUpRight, MoveRight } from 'lucide-react';
import Badge from '../Badge';
import '@/styles/works.css'; // <-- Import the CSS file

export default function WorkRow({
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
      className={cn('work-row', 'group')}
    >
      {/* Badge */}
      {isFirst && isMobile && (
        <div className='absolute scale-110 right-2 -top-2 sm:hidden'>
          <Badge isActive={true} isSubtle={true}>
            Active
          </Badge>
        </div>
      )}

      {/* Date */}
      <div className='work-date'>
        <span>{dateStart}</span>
        <span className='hidden md:block'>-</span>
        {isCurr ? (
          <span className='now-modifier flex gap-0'>
            <span>{dateEnd}</span>
          </span>
        ) : (
          <span className='flex gap-2'>
            <span className='md:hidden block'>-</span>
            <span>{dateEnd}</span>
          </span>
        )}
      </div>

      <div className='work-content'>
        {/* Title */}
        <strong className='work-title'>
          <span>{title}</span>
          <ArrowUpRight className='arrow' />
        </strong>

        {/* Spacer */}
        <span className='spacer' />

        {/* Subtitle */}
        <div className='work-subtitle'>{subtitle}</div>
      </div>
    </a>
  );
}
