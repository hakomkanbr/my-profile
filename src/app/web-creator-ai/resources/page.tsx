'use client';

import React from 'react';
import Link from 'next/link';
import {
  LearningShell,
  PageContainer,
  PageHeader,
  PageSection,
  ContentGrid,
  Card,
  Badge,
  Button,
} from '@/components';
import { ALL_RESOURCES } from '@/content';
import { usePreferencesStore } from '@/store';
import { getLocalizedText } from '@/lib/utils';
import { ExternalLink, Bookmark, Briefcase, Sparkles, TrendingUp } from 'lucide-react';

export default function WebCreatorResourcesPage() {
  const { language } = usePreferencesStore();
  const isRtl = language === 'ar';
  const shortcuts = [
    { href: '/web-creator-ai/ai-lab', icon: Sparkles, title: isRtl ? 'مختبر الذكاء الاصطناعي' : 'AI prompt lab', description: isRtl ? 'موجهات وأدوات مساعدة لتطوير الويب.' : 'Prompts and tools for web development.' },
    { href: '/web-creator-ai/projects', icon: Briefcase, title: isRtl ? 'المشاريع التطبيقية' : 'Applied projects', description: isRtl ? 'تطبيق المهارات في مشاريع عملية.' : 'Practice your skills through hands-on projects.' },
    { href: '/web-creator-ai/marketing-lab', icon: TrendingUp, title: isRtl ? 'التسويق وتهيئة البحث' : 'Marketing & SEO lab', description: isRtl ? 'التسويق، تحسين الظهور، والعمل الحر.' : 'Marketing, search visibility, and freelancing.' },
  ];
  return (
    <LearningShell headerTitle={isRtl ? 'الموارد والمراجع' : 'Resources & references'}>
      <PageContainer>
        <PageHeader
          title={isRtl ? 'مكتبة التعلم والموارد' : 'Learning & resource library'}
          subtitle={isRtl ? 'المختبرات والمشاريع والمراجع التي تحتاجها أثناء المسار.' : 'Labs, projects, and references to support your learning path.'}
          breadcrumbs={[
            { id: '1', label: isRtl ? 'الرئيسية' : 'Home', href: '/' },
            { id: '2', label: 'WEB CREATOR AI', href: '/web-creator-ai' },
            { id: '3', label: isRtl ? 'الموارد والمراجع' : 'Resources', isCurrent: true },
          ]}
        />

        <div className="mb-8 grid gap-4 sm:grid-cols-3">
          {shortcuts.map(({ href, icon: Icon, title, description }) => <Link key={href} href={href} className="rounded-2xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-[var(--color-primary)]"><Card className="h-full space-y-3 p-5 transition-colors hover:border-[var(--color-primary)]"><Icon className="h-5 w-5 text-[var(--color-primary)]"/><h2 className="font-bold">{title}</h2><p className="text-sm text-[var(--color-text-muted)]">{description}</p></Card></Link>)}
        </div>

        <PageSection
          title={isRtl ? 'المراجع الأساسية الموصى بها' : 'Recommended references'}
          subtitle={isRtl ? 'مصادر موثوقة مختارة لتعزيز رحلتك البرمجية.' : 'Trusted sources selected to support your development journey.'}
        >
          <ContentGrid columns={2}>
            {ALL_RESOURCES.map((res) => (
              <Card key={res.id} variant="default" className="flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <Bookmark className="w-4 h-4 text-[var(--color-primary)]" />
                      <Badge variant="outline" size="sm">
                        {res.category}
                      </Badge>
                    </div>
                    {res.badge && (
                      <Badge variant="secondary" size="sm">
                        {res.badge}
                      </Badge>
                    )}
                  </div>

                  <h3 className="text-h4 font-bold text-[var(--color-text)] mb-1">
                    {getLocalizedText(res.title, language)}
                  </h3>
                  <p className="text-body-sm text-[var(--color-text-muted)] mb-4">
                    {getLocalizedText(res.description, language)}
                  </p>
                </div>

                <div className="pt-3 border-t border-[var(--color-border-subtle)] flex justify-end">
                  <a href={res.url} target="_blank" rel="noopener noreferrer">
                    <Button
                      size="sm"
                      variant="outline"
                      rightIcon={<ExternalLink className="w-3.5 h-3.5" />}
                    >
                      {isRtl ? 'زيارة الرابط' : 'Visit resource'}
                    </Button>
                  </a>
                </div>
              </Card>
            ))}
          </ContentGrid>
        </PageSection>
      </PageContainer>
    </LearningShell>
  );
}
