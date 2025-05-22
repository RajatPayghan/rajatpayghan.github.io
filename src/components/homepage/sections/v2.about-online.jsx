import React from 'react';
import { OnlineLink } from '../online-link';
import { SOCIALS } from '@/constants/constants';

import { cn } from '@/constants/utils';

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
