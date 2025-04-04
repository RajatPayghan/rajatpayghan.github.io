// This is the Whats New section in the home page
import {
  SectionContainer,
  SectionContent,
  SectionTitle,
} from '@/components/sections';
import React from 'react';
import { OnlineCard } from '../online-card';
import { PROFILES } from '@/lib/constants';

export default function Home_Online() {
  return (
    <SectionContainer>
      <SectionTitle>Online</SectionTitle>
      <SectionContent>
        <div className='flex flex-col md:flex-row gap-4'>
          {PROFILES.map((link) => (
            <OnlineCard
              key={link.href}
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
