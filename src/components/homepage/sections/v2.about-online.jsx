// This is the Whats New section in the home page

// Imports
// -----------------------------------------------------------------
import React from 'react';
import { OnlineLink } from '../online-link';
import { SOCIALS } from '@/lib/constants';
import '@/styles/font-control.css';
import { cn } from '@/lib/utils';
// -----------------------------------------------------------------

export default function Home_Socials() {
  return (
    <div
      className={cn(
        'flex flex-row ',
        'md:flex-row gap-2 md:gap-5',
        'max-w-full min-w-full'
      )}
    >
      {SOCIALS.map((link, index) => (
        <OnlineLink
          key={link.title}
          title={link.title}
          icon={link.icon}
          url={link.url}
          color={link.color}
        ></OnlineLink>
      ))}
    </div>
  );
}
