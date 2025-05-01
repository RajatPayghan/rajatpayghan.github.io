// This is the My Work section in the home page

// Imports
// -----------------------------------------------------------------
import React from 'react';

import {
  SectionContainer,
  SectionContent,
  SectionTitle,
} from '@/components/homepage/sections';
import { TableRow } from '@/components/homepage/table-rows';
import { WORKS } from '@/lib/constants';
// -----------------------------------------------------------------

export default function Home_Works() {
  return (
    <SectionContainer>
      <SectionTitle>My Work</SectionTitle>
      <SectionContent>
        <div className='flex flex-col gap-6 md:gap-2'>
          {WORKS.map((job) => (
            <TableRow
              href={job.href}
              title={job.title}
              subtitle={job.subtitle}
              date={job.date}
              key={job.href}
            />
          ))}
        </div>
      </SectionContent>
    </SectionContainer>
  );
}
