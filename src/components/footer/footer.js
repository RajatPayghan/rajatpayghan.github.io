'use client';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import '@/styles/globals.css';
import dynamic from 'next/dynamic';
import { PinHead } from '@/lib/icons';
import Badge from '../common/badge';
import { useIsMobile } from '../hooks/useIsMobile';
import Goodbye from './goodbyes';
import { Separator } from '../ui/separator';
import ThemeSwitcherButtonIcon from '../layout/theme-switcher';

const Time = dynamic(() => import('./footer-time'), {
  ssr: false,
  loading: () => <span>00:00 XX</span>,
});

export default function Footer() {
  const isDesktop = !useIsMobile();
  return (
    <footer className='m:px-0 flex flex-col w-full justify-center  pt-10 sm:pt-20'>
      <div
        className={cn(
          'flex flex-col gap-2 justify-between',
          'pt-12 pb-8 md:pb-8',
          'w-full max-w-main z-20',
          'text-[16px]'
        )}
      >
        <Separator className='dark:bg-neutral-900 bg-neutral-200 mb-6' />
        <div className='flex flex-row flex-1 items-center justify-between w-full'>
          <div className='flex flex-row flex-1 items-center gap-4'>
            <Link href='/'>Home</Link>
            <Link href='/blog' className='w-fit flex items-top gap-2 group'>
              <span className='text-neutral-400 dark:text-neutral-600 peer'>
                Blog
              </span>
              <div className='relative opacity-0 peer-hover:opacity-100 transition-all duration-700 md:duration-300'>
                <Badge isActive={false} className='opacity-0'>
                  Coming Soon
                </Badge>
              </div>
            </Link>
          </div>

          <Goodbye />
        </div>

        <div className='flex-row flex justify-between align-middle items-center'>
          <div className='flex flex-row gap-1.5 text-sm dark:text-neutral-600 text-neutral-400'>
            <PinHead />
            <span>Pune, India</span>
            {isDesktop && (
              <>
                <span>•</span>
                <Time />
              </>
            )}
          </div>
          <div className='text-sm flex flex-row gap-2 items-center'>
            2025 Rajat Payghan
          </div>
        </div>
      </div>
      <div className='w-full flex justify-center'>
        <ThemeSwitcherButtonIcon />
      </div>
    </footer>
  );
}
