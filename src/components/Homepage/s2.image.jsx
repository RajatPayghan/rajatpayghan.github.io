// This is the Spline section in the home page
import {
  SectionContainer,
  SectionContent,
  SectionTitle,
} from '@/components/sections';
import React from 'react';

export default function Home_Image() {
  return (
    <SectionContainer>
      <SectionTitle />
      <SectionContent>
        <img
          src='assets/profile.avif'
          className='rounded-lg w-full sm:h-96 h-80 object-cover'
          alt='Rajat Payghan'
        />
      </SectionContent>
    </SectionContainer>
  );
}
