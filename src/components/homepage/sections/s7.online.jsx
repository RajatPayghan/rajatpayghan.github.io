// This is the Whats New section in the home page
import {
  SectionContainer,
  SectionContent,
  SectionTitle,
} from '@/components/homepage/sections';
import React from 'react';
import { OnlineCard } from '../../support/online-card';
import { SOCIALS } from '@/lib/constants';

export default function Home_Socials() {
  return (
    <SectionContainer>
      <SectionTitle>Online</SectionTitle>
      <SectionContent>
        <div className='flex flex-col md:flex-row gap-4'>
          {SOCIALS.map((link) => (
            <OnlineCard
              key={link.title}
              title={link.title}
              icon={link.icon}
              url={link.url}
              color={link.color}
            ></OnlineCard>
          ))}
        </div>
      </SectionContent>
    </SectionContainer>
  );
}
