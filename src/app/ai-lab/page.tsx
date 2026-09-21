import React from 'react';
import {
  AppShell,
  PageContainer,
  PageHeader,
  PageSection,
  ContentGrid,
  Card,
  Badge,
  CodeBlock,
} from '@/components';
import { ALL_AI_PROMPTS } from '@/content';

export default function AILabPage() {
  return (
    <AppShell headerTitle="مختبر الذكاء الاصطناعي">
      <PageContainer>
        <PageHeader
          title="مختبر الذكاء الاصطناعي (AI Lab)"
          subtitle="بنك الموجهات المتقدمة وسير العمل الذكي لتوليد واجهات الويب وتصحيح الأخطاء وتسريع الإنتاج."
          breadcrumbs={[
            { id: '1', label: 'الرئيسية', href: '/' },
            { id: '2', label: 'مختبر الذكاء الاصطناعي', isCurrent: true },
          ]}
        />

        <PageSection
          title="نماذج الموجهات الجاهزة (Production Prompts)"
          subtitle="موجهات مختبرة لمساعدتك في بناء واجهات وتصحيح الأخطاء باحتراف"
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
                    {prompt.title.ar}
                  </h3>
                  <p className="text-body-sm text-[var(--color-text-muted)] mb-3">
                    {prompt.description.ar}
                  </p>

                  <CodeBlock
                    code={prompt.promptTemplate.ar}
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
    </AppShell>
  );
}
