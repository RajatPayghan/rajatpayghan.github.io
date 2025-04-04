// This is the My Work section in the home page
import {
  SectionContainer,
  SectionContent,
  SectionTitle,
} from '@/components/sections';
import TableRow from '@/components/table-rows';
import React from 'react';
import { WORKS } from '@/lib/constants';

export default function SectionFour() {
  return (
    <SectionContainer>
      <SectionTitle>My Work</SectionTitle>
      <SectionContent>
        {WORKS.map((job) => (
          <TableRow
            // href={job.href}
            title={job.title}
            subtitle={job.subtitle}
            date={job.date}
            key={job.href}
          />
        ))}
      </SectionContent>
    </SectionContainer>
  );
}
