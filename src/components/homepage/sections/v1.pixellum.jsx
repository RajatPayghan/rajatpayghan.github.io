import React from 'react';
import {
  SectionContainer,
  SectionContent,
  SectionTitle,
} from '@/components/homepage/sections';
import '@/styles/pixellum.css';
import { cn } from '@/lib/utils';

import { useTheme } from 'next-themes';
import { useState, useEffect } from 'react';
import { OnlineLink } from '../online-link';
import { ArrowUpRight, ArrowUpRightFromSquare } from 'lucide-react';

const MAIL_WORK_WITH_US =
  "mailto:stu.pixellum@gmail.com?subject=Quick%20Question%20About%20Working%20Together&body=Hi%20Studio.Pixellum,%0A%0AHope%20you're%20doing%20well!%20I%20wanted%20to%20see%20if%20you’re%20currently%20open%20to%20new%20projects.%20If%20so,%20just%20reply%20to%20this%20email%20and%20I’ll%20send%20over%20a%20few%20more%20details.%0A%0ACheers,%0A[Your%20Name]";

const MAIL_REQUEST_PORTFOLIO =
  "mailto:stu.pixellum@gmail.com?subject=Request%20Complete%20Portfolio&body=Hi%20Studio.Pixellum,%0A%0AI'd%20love%20to%20take%20a%20closer%20look%20at%20your%20work.%20Could%20you%20please%20send%20over%20your%20full%20portfolio%20when%20you%20get%20a%20chance?%0A%0ALooking%20forward%20to%20seeing%20more!%0A%0ABest,%0A[Your%20Name]";

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
              className={cn('size-6 p-1 rounded-full', 'bg-neutral-200')}
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
          <div className='pixellum-container group'>
            <a
              href={MAIL_REQUEST_PORTFOLIO}
              className='relative pixellum-card pixellum-request-portfolio rotate-6 group'
            >
              <ArrowUpRight className='pixellum-request-arrow' />
              <div className='transition-all duration-300'>Request</div>
              <div className='transition-all duration-300'>Portfolio</div>
            </a>
            <div className='pixellum-card bg-[url(/assets/pixellum/Pixellum-Cards-4.webp)] -rotate-6' />
            <div className='pixellum-card bg-[url(/assets/pixellum/Pixellum-Cards-2.webp)] rotate-6' />
            <div className='pixellum-card bg-[url(/assets/pixellum/Pixellum-Cards-1.webp)] -rotate-6' />
          </div>

          <div className='flex flex-col gap-4 md:gap-3'>
            <div className=''>
              In 2024, along with{' '}
              <a
                href='https://www.linkedin.com/in/rishita-gupta-0166bb24a/'
                className={cn(
                  'inline-block px-1 align-middle rounded-full bg-neutral-100 dark:bg-neutral-900',
                  'hover:bg-[#8BFA4A] dark:hover:bg-[#8BFA4A] hover:text-black '
                )}
              >
                <div className='flex gap-2 items-center'>
                  <div className='rounded-full size-6 overflow-clip'>
                    <img
                      src='/assets/misc-images/Rishita.jpeg'
                      className='scale-125'
                    />
                  </div>
                  <span>Rishita</span>
                  <ArrowUpRight className='size-4' />
                </div>
              </a>
              , I launched Studio Pixellum — a small{' '}
              <span className='italic font-medium text-neutral-900 dark:text-neutral-200'>
                freelance design and marketing studio
              </span>{' '}
              that helps founders and agencies shape their product ideas into
              modern, functional designs.
            </div>
            <div className='w-fit'>
              <OnlineLink title={'Work With Us'} url={MAIL_WORK_WITH_US} />
            </div>
          </div>
        </div>
      </SectionContent>
    </SectionContainer>
  );
}
