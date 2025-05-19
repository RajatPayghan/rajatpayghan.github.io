// This is the Whats New section in the home page

// Imports
// -----------------------------------------------------------------
import React from 'react';
import { OnlineLink } from '../online-link';
import { SOCIALS } from '@/lib/constants';
import { FONT_CONTROL } from '@/lib/css-mission-control';
import { cn } from '@/lib/utils';
// -----------------------------------------------------------------

export default function Home_Socials() {
  return (
    <div
      className={cn(
        'flex flex-row ',
        'transform scale-90 md:scale-100 -translate-x-8 md:translate-x-0',
        'md:flex-row gap-2 md:gap-5',
        'max-w-full min-w-full',
        `${FONT_CONTROL.social}`
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
