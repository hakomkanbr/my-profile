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
} from '@/components';
import { usePreferencesStore } from '@/store';
import { TrendingUp, Search, DollarSign } from 'lucide-react';

export default function WebCreatorMarketingLabPage() {
  const { language } = usePreferencesStore();
  const isRtl = language === 'ar';

  const pillars = [
    {
      title: isRtl
        ? 'التهيئة لمحركات البحث (SEO)'
        : 'Search Engine Optimization (SEO)',
      description: isRtl
        ? 'تحسين سرعة تحميل الصفحات، وضبط العناوين والبيانات الوصفية ليظهر موقعك بوضوح في نتائج البحث.'
        : 'Improve page load speed, semantic headings, and metadata so your website ranks clearly in search results.',
      icon: <Search className="w-5 h-5 text-[var(--color-primary)]" />,
      badge: 'SEO Core',
    },
    {
      title: isRtl
        ? 'كتابة المحتوى الواضح والمقنع (Copywriting)'
        : 'Clear & Persuasive Copywriting',
      description: isRtl
        ? 'صياغة عناوين تشرح الفائدة الحقيقية للزائر، وتنظيم رسائل الصفحة وأزرار التواصل لتسهيل اتخاذ القرار.'
        : 'Write benefit-driven headlines and structure page messaging and CTAs so visitors can easily take action.',
      icon: <TrendingUp className="w-5 h-5 text-[var(--color-secondary)]" />,
      badge: 'Conversion',
    },
    {
      title: isRtl
        ? 'تقديم الخدمات والعمل الحر (Freelancing)'
        : 'Service Packaging & Freelancing',
      description: isRtl
        ? 'تحديد نطاق العمل بوضوح، وتقدير التكلفة والوقت، وتقديم عروض عمل منظمة للعملاء.'
        : 'Define project scope clearly, estimate time and pricing, and present structured proposals to clients.',
      icon: <DollarSign className="w-5 h-5 text-[var(--color-primary)]" />,
      badge: 'Monetization',
    },
  ];

  return (
    <LearningShell headerTitle={isRtl ? 'مختبر التسويق والنمو' : 'Marketing & Growth Lab'}>
      <PageContainer>
        <PageHeader
          title={isRtl ? 'مختبر التسويق والنمو الرقمي (Marketing Lab)' : 'Digital Marketing & Growth Lab'}
          subtitle={
            isRtl
              ? 'الخطوات العملية التي تساعدك على تحويل موقعك من مشروع تقني إلى منصة تجذب الزوار والعملاء.'
              : 'Practical steps that help turn your website from a code project into a platform that attracts visitors and clients.'
          }
          breadcrumbs={[
            { id: '1', label: isRtl ? 'لوحة التدريب' : 'Dashboard', href: '/web-creator-ai' },
            { id: '2', label: isRtl ? 'الموارد والمختبرات' : 'Resources & Labs', href: '/web-creator-ai/resources' },
            { id: '3', label: isRtl ? 'مختبر التسويق' : 'Marketing Lab', isCurrent: true },
          ]}
        />

        <PageSection
          title={isRtl ? 'ركائز تسويق مواقع ومنتجات الويب' : 'Core Pillars of Web Product Marketing'}
          subtitle={
            isRtl
              ? 'ثلاثة جوانب أساسية تحتاج إليها بعد إطلاق موقعك لضمان وصوله إلى الجمهور المناسب.'
              : 'Three foundational areas you need after launching your website to reach the right audience.'
          }
        >
          <ContentGrid columns={3}>
            {pillars.map((item) => (
              <Card key={item.title} variant="default" className="flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className="w-10 h-10 rounded-xl bg-[var(--color-primary-subtle)] flex items-center justify-center">
                      {item.icon}
                    </div>
                    <Badge variant="outline" size="sm">
                      {item.badge}
                    </Badge>
                  </div>
                  <h3 className="text-h4 font-bold text-[var(--color-text)] mb-2">
                    {item.title}
                  </h3>
                  <p className="text-body-sm text-[var(--color-text-muted)] leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </Card>
            ))}
          </ContentGrid>
        </PageSection>
      </PageContainer>
    </LearningShell>
  );
}
