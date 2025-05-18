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
        'md:flex-row gap-3 md:gap-5',
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
