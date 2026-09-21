import React from 'react';
import {
  AppShell,
  PageContainer,
  PageHeader,
  PageSection,
  ContentGrid,
  ModuleCard,
} from '@/components';
import { ALL_MODULES } from '@/content';

export default function ModulesPage() {
  return (
    <AppShell headerTitle="الوحدات التدريبية">
      <PageContainer>
        <PageHeader
          title="الوحدات التدريبية العشر"
          subtitle="منهج تعليمي شامل يغطي أساسيات الويب، UI/UX، الواجهات الحديثة، الذكاء الاصطناعي، والعمل الحر."
          breadcrumbs={[
            { id: '1', label: 'الرئيسية', href: '/' },
            { id: '2', label: 'الوحدات التدريبية', isCurrent: true },
          ]}
        />

        <PageSection
          title="فهرس الوحدات"
          subtitle="استعرض الوحدات التدريبية ودروسها المتكاملة"
        >
          <ContentGrid columns={3}>
            {ALL_MODULES.map((mod) => (
              <ModuleCard
                key={mod.id}
                number={mod.number}
                stageId={mod.stageId}
                title={mod.title.ar}
                subtitle={mod.subtitle.ar}
                description={mod.description.ar}
                badge={mod.badge.ar}
                estimatedHours={mod.estimatedHours}
                lessonsCount={mod.lessons.length}
              />
            ))}
          </ContentGrid>
        </PageSection>
      </PageContainer>
    </AppShell>
  );
}
