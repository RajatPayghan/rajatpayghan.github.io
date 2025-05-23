import React from 'react';
import { cn } from '@/constants/utils';

import {
  SectionContainer,
  SectionContent,
  SectionTitle,
} from '@/components/Sections';
import { WORKS } from '@/constants/constants';
import WorkRow from './work-rows';

export default function Home_Works() {
  return (
    <SectionContainer>
      <SectionTitle>My Work</SectionTitle>
      <SectionContent>
        <div className={cn('flex flex-col gap-4 md:gap-0')}>
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
