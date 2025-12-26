import React from 'react';

import {
  SectionContainer,
  SectionContent,
  SectionTitle,
} from '@/components/Sections';

import { PinHead } from '@/constants/icons';

export default function Home_Casual() {
  return (
    <SectionContainer>
      <SectionTitle>About Me</SectionTitle>
      <SectionContent>
        <div className=''>
          Physically based in
          <span className='inline-block align-middle'>
            <div className='flex items-center'>
              <div className='rounded-full size-4 scale-110 flex items-center justify-center overflow-clip'>
                <PinHead />
              </div>
              <span className='italic pb-0.5'>Hyderabad</span>
            </div>
          </span>
          , but usually sailing the high seas of the internet. You'll often find
          me grooving to EDM, savoring a perfect cup of coffee or tinkering with
          various personal code & design projects. I thrive on bringing ideas to
          life and creating solutions that delight users.
        </div>
      </SectionContent>
    </SectionContainer>
  );
}
