// This is the Spline section in the home page
import {
  SectionContainer,
  SectionContent,
  SectionTitle,
} from '@/components/Support/sections';
import SplineHome from '@/components/Support/spline-home';
import React from 'react';

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
