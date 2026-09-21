'use client';

import React from 'react';
import {
  LearningShell,
  PageContainer,
  PageHeader,
  PageSection,
  ContentGrid,
  ProjectCard,
} from '@/components';
import { ALL_PROJECTS } from '@/content';

export default function WebCreatorProjectsPage() {
  return (
    <LearningShell headerTitle="المشاريع التطبيقية">
      <PageContainer>
        <PageHeader
          title="المشاريع التطبيقية الحقيقية"
          subtitle="ورش عمل هندسية لبناء وتطوير مواقع وتطبيقات عملية متكاملة خطوة بخطوة."
          breadcrumbs={[
            { id: '1', label: 'الرئيسية', href: '/' },
            { id: '2', label: 'WEB CREATOR AI', href: '/web-creator-ai' },
            { id: '3', label: 'المشاريع التطبيقية', isCurrent: true },
          ]}
        />

        <PageSection
          title="قائمة المشاريع التطبيقية"
          subtitle="بناء ونشر منتجات فعلية تضيفها إلى معرض أعمالك المهني"
        >
          <ContentGrid columns={3}>
            {ALL_PROJECTS.map((proj) => (
              <ProjectCard
                key={proj.id}
                code={proj.code}
                title={proj.title.ar}
                tagline={proj.tagline.ar}
                level={proj.level}
                targetOutput={proj.targetOutput.ar}
                techStack={proj.techStack}
              />
            ))}
          </ContentGrid>
        </PageSection>
      </PageContainer>
    </LearningShell>
  );
}
