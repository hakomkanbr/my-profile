'use client';

import React from 'react';
import {
  LearningShell,
  PageContainer,
} from '@/components';
import {
  ProgressHero,
  JourneyVisualMap,
  CurrentStageSpotlight,
  ProjectsProgressSection,
  MilestonesSection,
  ProgressControlsSection,
} from '@/components/progress';

export default function WebCreatorProgressPage() {
  return (
    <LearningShell headerTitle="رحلتي التعليمية">
      <PageContainer>
        {/* 1. Hero & Current Position: Where am I? What was last accomplished? */}
        <ProgressHero />

        {/* 2. Journey Map: The 7-Stage Progressive Path (01 THINK → 07 GROW) */}
        <JourneyVisualMap />

        {/* 3. Current Stage Spotlight: Detailed Stage breakdown and Next Action */}
        <CurrentStageSpotlight />

        {/* 4. Projects Progress: What am I building? (Landing Page -> Capstone) */}
        <ProjectsProgressSection />

        {/* 5. Milestones System: Key transformation checkpoints */}
        <MilestonesSection />

        {/* 6. Data & Offline Storage Controls: Export, Import, Reset, Demo */}
        <ProgressControlsSection />
      </PageContainer>
    </LearningShell>
  );
}
