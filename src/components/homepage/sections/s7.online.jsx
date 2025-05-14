// This is the Whats New section in the home page

// Imports
// -----------------------------------------------------------------
import React from 'react';
import {
  SectionContainer,
  SectionContent,
  SectionTitle,
} from '@/components/homepage/sections';
import { OnlineCard } from '@/components/homepage/online-card';
import { OnlineLink } from '../online-link';
import { SOCIALS, CONTACTS } from '@/lib/constants';
// -----------------------------------------------------------------

export default function Home_Socials() {
  return (
    <SectionContainer>
      <SectionTitle>Reach Out</SectionTitle>
      <SectionContent>
        <div className='flex flex-row md:flex-row gap-4'>
          {/* {SOCIALS.map((link) => (
            <OnlineCard
              key={link.title}
              title={link.title}
              icon={link.icon}
              url={link.url}
              color={link.color}
            ></OnlineCard>
          ))}
          {CONTACTS.map((link) => (
            <OnlineCard
              key={link.title}
              title={link.title}
              icon={link.icon}
              url={link.url}
              color={link.color}
            ></OnlineCard>
          ))} */}
          {CONTACTS.map((link, index) => (
            <OnlineLink
              key={link.title}
              title={link.title}
              icon={link.icon}
              url={link.url}
              color={link.color}
            ></OnlineLink>
          ))}
          {SOCIALS.map((link, index) => (
            <OnlineLink
              key={link.title}
              title={link.title}
              icon={link.icon}
              url={link.url}
              color={link.color}
              isLast={index === SOCIALS.length - 1}
            ></OnlineLink>
          ))}
        </div>
      </SectionContent>
    </SectionContainer>
  );
}
