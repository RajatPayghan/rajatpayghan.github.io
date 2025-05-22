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
import '@/styles/font-control.css';
import WorkRow from '../work-rows';
// -----------------------------------------------------------------

export default function Home_Works() {
  return (
    <SectionContainer>
      <SectionTitle>My Work</SectionTitle>
      <SectionContent>
        <div className={cn('flex flex-col gap-4 md:gap-0 font-base')}>
          {WORKS.map((job, index) => (
            <WorkRow
              isFirst={index == 0}
              href={job.href}
              title={job.title}
              subtitle={job.subtitle}
              imgSrc={job.imgSrc}
              dateStart={job.dateStart}
              dateEnd={job.dateEnd}
              isCurr={job.isCurr}
              key={job.title}
            />
          ))}
        </div>
      </SectionContent>
    </SectionContainer>
  );
}
