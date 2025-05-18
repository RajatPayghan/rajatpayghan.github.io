'use client';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import '@/styles/globals.css';
import dynamic from 'next/dynamic';
import { PinHead } from '@/lib/icons';
import Badge from '../common/badge';
import { useIsMobile } from '../hooks/useIsMobile';

const Time = dynamic(() => import('./footer-time'), {
  ssr: false,
  loading: () => <span>00:00 XX</span>,
});

export default function Footer() {
  const isDesktop = !useIsMobile();
  return (
    <footer className='m:px-0 flex w-full justify-center pt-10 sm:pt-20'>
      <div
        className={cn(
          'flex justify-between',
          'pt-12 pb-8 md:pb-0',
          'w-full max-w-main z-20',
          'border-t border-solid border-neutral-900',
          'text-[16px]'
        )}
      >
        <div className='flex flex-col flex-1 gap-4'>
          <div className='flex gap-4'>
            <Link href='/'>Home</Link>
            <div className='w-fit flex items-top gap-2 group'>
              <span className='text-neutral-600 peer'>Blog</span>
              <div className='relative opacity-0 peer-hover:opacity-100 transition-all duration-700 md:duration-300'>
                <Badge isActive={false} className='opacity-0'>
                  Coming Soon
                </Badge>
              </div>
            </div>
          </div>
          <div className='flex flex-row gap-1.5 text-sm text-neutral-600'>
            <PinHead />
            <span>Pune, India</span>
            {isDesktop && (
              <>
                <span>•</span>
                <Time />
              </>
            )}
          </div>
        </div>
        <div className='flex flex-col items-top gap-4 items-end justify-end sm:justify-between'>
          <div className=''>Made with ♥︎ & ☕︎</div>
          <div className='text-sm text-neutral-600'>© Rajat Payghan, 2025</div>
        </div>
      </div>
    </footer>
  );
}
