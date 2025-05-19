import React from 'react';
import {
  SectionContainer,
  SectionContent,
  SectionTitle,
} from '@/components/homepage/sections';
import '@/styles/font-control.css';
import '@/styles/pixellum.css';
import { cn } from '@/lib/utils';

import { useTheme } from 'next-themes';
import { useState, useEffect } from 'react';
import { OnlineLink } from '../online-link';

export default function Home_Pixellum() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  return (
    <SectionContainer>
      <SectionTitle>
        <div className='flex gap-2 items-center'>
          {resolvedTheme === 'light' ? (
            <img
              src='/assets/pixellum/Pixellum-Logo-Black.png'
              className={cn('size-6 p-1 rounded-full', 'bg-[#8BFA4A]')}
            />
          ) : (
            <img
              src='/assets/pixellum/Pixellum-Logo-Green.png'
              className={cn('size-6 p-1 rounded-full', 'bg-neutral-800')}
            />
          )}{' '}
          Studio Pixellum
        </div>
      </SectionTitle>
      <SectionContent>
        <div className='flex flex-col gap-12'>
          <div className='font-base pixellum-container'>
            <div className='pixellum-card bg-[url(/assets/pixellum/Pixellum-Cards-4.webp)] rotate-6' />
            <div className='pixellum-card bg-[url(/assets/pixellum/Pixellum-Cards-3.webp)] -rotate-6' />
            <div className='pixellum-card bg-[url(/assets/pixellum/Pixellum-Cards-2.webp)] rotate-6' />
            <div className='pixellum-card bg-[url(/assets/pixellum/Pixellum-Cards-1.webp)] -rotate-6' />
          </div>

          <div className='flex flex-col gap-4 md:gap-3'>
            <div className=''>
              In 2024, together with my colleague Rishita, I launched Studio
              Pixellum — a small{' '}
              <span className='italic font-medium text-neutral-900 dark:text-neutral-200'>
                design and marketing studio
              </span>{' '}
              that helps founders and agencies shape their product ideas into
              modern, functional designs.
            </div>
            <div className='w-fit'>
              <OnlineLink
                title={'Work With Us'}
                url={'mailto:stu.pixellum@gmail.com'}
              />
            </div>
          </div>
        </div>
      </SectionContent>
    </SectionContainer>
  );
}
