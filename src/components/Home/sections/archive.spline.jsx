// This is the Spline section in the home page

// Imports
// -----------------------------------------------------------------
import React from 'react';

import {
  SectionContainer,
  SectionContent,
  SectionTitle,
} from '@/components/Sections';
import SplineHome from '@/components/Home/spline-home';
// -----------------------------------------------------------------

export default function Home_Spline() {
  return (
    <SectionContainer>
      <SectionTitle />
      <SectionContent>
        <SplineHome
          sceneLink={
            'https://prod.spline.design/MWg7T9pvG4cTrW9r/scene.splinecode'
          }
        />
      </SectionContent>
    </SectionContainer>
  );
}
