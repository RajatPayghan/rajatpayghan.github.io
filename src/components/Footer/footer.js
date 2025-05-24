'use client';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import { PinHead } from '@/constants/icons';
import Badge from '../Badge';
import { useIsMobile } from '../Hooks/useIsMobile';
import Goodbye from './goodbyes';
import { Separator } from '../ui/separator';
import { ThemeSwitcherButtonIconWithText } from '../Layout/theme-switcher';
import '@/styles/footer.css';

const Time = dynamic(() => import('./footer-time'), {
  ssr: false,
  loading: () => <span>00:00 XX</span>,
});

export default function Footer() {
  const isDesktop = !useIsMobile();
  return (
    <footer className='footer-container'>
      <div className='footer-inner'>
        <Separator className='footer-separator' />
        <div className='footer-nav-row'>
          <div className='footer-links peer'>
            <Link href='/'>Home</Link>
            <div className='footer-link-wrapper group'>
              <Link href='/blog' className='footer-link'>
                Blog
              </Link>
              <div className='footer-badge-hover md:peer-hover:opacity-100 '>
                <Badge isActive={false}>Coming Soon</Badge>
              </div>
            </div>
          </div>
          <Goodbye />
        </div>

        <div className='flex-row flex justify-between align-middle items-center'>
          <div className='footer-location'>
            <PinHead />
            <span>Pune, India</span>
            {isDesktop && (
              <>
                <span>•</span>
                <Time />
              </>
            )}
          </div>
          <div className='footer-copyright'>2025 Rajat Payghan</div>
        </div>
      </div>
      <div className='footer-theme'>
        <ThemeSwitcherButtonIconWithText />
      </div>
    </footer>
  );
}
