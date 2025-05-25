'use client';
import { ArrowUpRight, MoveRight } from 'lucide-react';
import { useIsMobile } from '../Hooks/useIsMobile';
import '@/styles/OnlineLink.css';
import '@/styles/font-control.css';

export function OnlineLink({ title, url }) {
  const isMobile = useIsMobile();

  return (
    <a
      href={url}
      target='_blank'
      rel='noopener noreferrer'
      className='online-link group'
    >
      <div className='online-pill font-social'>
        <span className='online-text'>
          {!isMobile && title === 'Email' && (
            <span className='online-send'>Send</span>
          )}
          {title}
        </span>

        {!isMobile && (
          <div className='online-arrow-wrapper'>
            <MoveRight size={12} className='online-arrow-icon' />
          </div>
        )}

        {isMobile && <ArrowUpRight size={10} className='online-mobile-icon' />}
      </div>
    </a>
  );
}
