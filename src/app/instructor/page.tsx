'use client';

import React from 'react';
import { AppShell, PageContainer, Breadcrumbs } from '@/components';
import {
  InstructorHero,
  BeforeWeBegin,
  InstructorStory,
  WhatIBuild,
  WhatITeach,
  DeveloperPlusInstructor,
  TeachingPhilosophySection,
  ProjectsShowcaseSection,
  MessageToStudentsSection,
  InstructorCTA,
} from '@/components/instructor';

export default function InstructorPage() {
  return (
    <AppShell headerTitle="عن المدرب">
      <PageContainer>
        <Breadcrumbs
          items={[
            { id: '1', label: 'الرئيسية', href: '/' },
            { id: '2', label: 'عن المدرب', isCurrent: true },
          ]}
          className="mb-6"
        />

        {/* 1. Instructor Hero with Quote & Bio */}
        <InstructorHero />

        {/* 2. Before We Begin */}
        <BeforeWeBegin />

        {/* 3. My Story / Journey in Web Engineering */}
        <InstructorStory />

        {/* 4. What I Build as an Engineer */}
        <WhatIBuild />

        {/* 5. What I Teach in this Course */}
        <WhatITeach />

        {/* 6. Developer + Instructor Dual Synergy */}
        <DeveloperPlusInstructor />

        {/* 7. Teaching Philosophy */}
        <TeachingPhilosophySection />

        {/* 8. Projects You'll Build Showcase */}
        <ProjectsShowcaseSection />

        {/* 9. Message & Advice to Students */}
        <MessageToStudentsSection />

        {/* 10. Call to Action to Journey */}
        <InstructorCTA />
      </PageContainer>
    </AppShell>
  );
}
