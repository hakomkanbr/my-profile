'use client';

import React from 'react';
import {
  LearningShell,
  PageContainer,
  PageHeader,
  PageSection,
  ContentGrid,
  Card,
  Badge,
  CodeBlock,
} from '@/components';
import { ALL_AI_PROMPTS } from '@/content';
import { usePreferencesStore } from '@/store';
import { getLocalizedText } from '@/lib/utils';

export default function WebCreatorAILabPage() {
  const { language } = usePreferencesStore();
  const isRtl = language === 'ar';

  return (
    <LearningShell headerTitle={isRtl ? 'مختبر الذكاء الاصطناعي' : 'AI Lab'}>
      <PageContainer>
        <PageHeader
          title={isRtl ? 'مختبر الذكاء الاصطناعي (AI Lab)' : 'AI Prompt & Workflow Lab'}
          subtitle={
            isRtl
              ? 'مجموعة من الموجهات (Prompts) المختبرة لمساعدتك على بناء واجهات الويب، ومراجعة الكود، وتصحيح الأخطاء بسرعة ودقة.'
              : 'Tested prompts and workflows to help you generate web interfaces, review code, and debug faster.'
          }
          breadcrumbs={[
            { id: '1', label: isRtl ? 'لوحة التدريب' : 'Dashboard', href: '/web-creator-ai' },
            { id: '2', label: isRtl ? 'الموارد والمختبرات' : 'Resources & Labs', href: '/web-creator-ai/resources' },
            { id: '3', label: isRtl ? 'مختبر الذكاء الاصطناعي' : 'AI Lab', isCurrent: true },
          ]}
        />

        <PageSection
          title={isRtl ? 'نماذج الموجهات الجاهزة للاستخدام' : 'Ready-to-Use AI Prompts'}
          subtitle={
            isRtl
              ? 'انسخ الموجه المناسب، وعدّل تفاصيل مشروعك بين الأقواس، ثم استخدمه في أداة الذكاء الاصطناعي المفضلة لديك.'
              : 'Copy the prompt template, customize the bracketed project details, and run it in your preferred AI assistant.'
          }
        >
          <ContentGrid columns={2}>
            {ALL_AI_PROMPTS.map((prompt) => (
              <Card key={prompt.id} variant="default" className="flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between gap-3 mb-3">
                    <Badge variant="accent" size="sm">
                      {prompt.category}
                    </Badge>
                    <span className="text-caption font-mono font-bold text-[var(--color-primary)]">
                      {prompt.targetModel}
                    </span>
                  </div>

                  <h3 className="text-h4 font-bold text-[var(--color-text)] mb-2">
                    {getLocalizedText(prompt.title, language)}
                  </h3>
                  <p className="text-body-sm text-[var(--color-text-muted)] mb-3">
                    {getLocalizedText(prompt.description, language)}
                  </p>

                  <CodeBlock
                    code={getLocalizedText(prompt.promptTemplate, language)}
                    language="markdown"
                    filename="AI-Prompt.txt"
                    showLineNumbers={false}
                  />
                </div>
              </Card>
            ))}
          </ContentGrid>
        </PageSection>
      </PageContainer>
    </LearningShell>
  );
}
