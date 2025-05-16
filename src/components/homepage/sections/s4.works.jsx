// This is the My Work section in the home page

// Imports
// -----------------------------------------------------------------
import React from 'react';
import { cn } from '@/lib/utils';
import { FONT_CONTROL } from '@/lib/css-mission-control';

import {
  SectionContainer,
  SectionContent,
  SectionTitle,
} from '@/components/homepage/sections';
import TableRow from '@/components/homepage/table-rows';
import { WORKS } from '@/lib/constants';
// -----------------------------------------------------------------

export default function Home_Works() {
  return (
    <SectionContainer>
      <SectionTitle>My Work</SectionTitle>
      <SectionContent>
        <div
          className={cn('flex flex-col gap-6 md:gap-2', `${FONT_CONTROL.base}`)}
        >
          {WORKS.map((job) => (
            <TableRow
              href={job.href}
              title={job.title}
              subtitle={job.subtitle}
              imgSrc={job.imgSrc}
              date={job.date}
              key={job.href}
            />
          ))}
        </div>
      </SectionContent>
    </SectionContainer>
  );
}
