'use client';
import Link from 'next/link';
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
      <div className='max-w-main flex w-full justify-between border-t border-solid border-neutral-900 pt-12 pb-8 md:pb-0 z-20'>
        <div className='flex-1'>
          <div className='flex gap-4 pb-6'>
            <Link href='/'>Home</Link>
            <Link href='/' className='w-fit flex items-top gap-2'>
              <span className='text-neutral-600'>Blog</span>
              <Badge isActive={false}>Coming Soon</Badge>
            </Link>
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
        <div className='flex flex-col items-end justify-end sm:justify-between'>
          <div className='' />
          <div className='text-sm text-neutral-600'>© Rajat Payghan, 2025</div>
        </div>
      </div>
    </footer>
  );
}
