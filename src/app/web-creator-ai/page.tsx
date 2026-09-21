'use client';

import React from 'react';
import { LearningShell, PageContainer } from '@/components';
import {
  HeroSection,
  WhatIsSection,
  PhilosophySection,
  JourneyPreviewSection,
  WhatYouWillBuildSection,
  AIDevelopmentSection,
  LaunchMarketingSection,
  InstructorPreviewSection,
  FinalOutcomeCTASection,
} from '@/components/home';

export default function WebCreatorAIHomePage() {
  return (
    <LearningShell headerTitle="منصة WEB CREATOR AI">
      <PageContainer>
        {/* Reusing 100% of Phase 04 Home Components */}
        <HeroSection />
        <WhatIsSection />
        <PhilosophySection />
        <JourneyPreviewSection />
        <WhatYouWillBuildSection />
        <AIDevelopmentSection />
        <LaunchMarketingSection />
        <InstructorPreviewSection />
        <FinalOutcomeCTASection />
      </PageContainer>
    </LearningShell>
  );
}
