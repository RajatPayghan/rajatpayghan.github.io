'use client';
import React from 'react';
import Goodbye from './goodbyes';
import { PinHead } from '@/constants/icons';
import { useIsMobile } from '../Hooks/useIsMobile';
import dynamic from 'next/dynamic';
import { ThemeSwitcherButtonIconWithText } from '../Layout/theme-switcher';
import '@/styles/Layout/v2.footer.css';

const Time = dynamic(() => import('./footer-time'), {
  ssr: false,
  loading: () => <span>00:00</span>,
});

const scrollToTop = () => {
  const container = document.querySelector('.container-wrapper');
  if (container instanceof HTMLElement && container.scrollTop > 0) {
    container.scrollTo({ top: 0, behavior: 'smooth' });
  } else {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
};

export default function Footer() {
  const isDesktop = !useIsMobile();

  return (
    <footer className='footer'>
      <div className='content'>
        <div className='content-top'>
          <div className='link-wrapper'>
            <div className='link' onClick={scrollToTop}>
              Go to Top ↑
            </div>
          </div>
          <Goodbye />
        </div>

        <div className='content-bottom'>
          <div className='placetime'>
            <PinHead />
            <span>Pune, India</span>
            {isDesktop && (
              <>
                <span>•</span>
                <Time />
              </>
            )}
          </div>
          <div className='copyright'>Rajat Payghan, 2025</div>
        </div>
      </div>

      <div className='theme'>
        <ThemeSwitcherButtonIconWithText />
      </div>
    </footer>
  );
}
