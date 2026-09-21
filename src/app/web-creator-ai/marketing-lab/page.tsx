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
import { TrendingUp, Search, DollarSign } from 'lucide-react';

export default function WebCreatorMarketingLabPage() {
  const pillars = [
    {
      title: 'التهيئة لمحركات البحث (Technical SEO)',
      description: 'تحسين سرعة التحميل، وسوم الميتا الدلالية، والبيانات المنظمة لضمان تصدر نتائج Google.',
      icon: <Search className="w-5 h-5 text-[var(--color-primary)]" />,
      badge: 'SEO Core',
    },
    {
      title: 'كتابة المحتوى التسويقي والإقناع (Copywriting)',
      description: 'صياغة عناوين جذابة ونصوص تدفع الزائر لاتخاذ إجراء والتحول إلى عميل فعلي.',
      icon: <TrendingUp className="w-5 h-5 text-[var(--color-secondary)]" />,
      badge: 'Conversion',
    },
    {
      title: 'تسعير الخدمات والعمل الحر (Freelancing)',
      description: 'حساب تكلفة المشاريع، إعداد عروض الأسعار، واستراتيجيات التفاوض واقتناص العقود.',
      icon: <DollarSign className="w-5 h-5 text-[var(--color-primary)]" />,
      badge: 'Monetization',
    },
  ];

  return (
    <LearningShell headerTitle="مختبر التسويق الرقمي">
      <PageContainer>
        <PageHeader
          title="مختبر التسويق والنمو الرقمي (Marketing Lab)"
          subtitle="الأدوات والاستراتيجيات التي تنقل موقعك من مجرد كود على جهازك إلى منتج يزوره آلاف المستخدمين ويجلب العملاء."
          breadcrumbs={[
            { id: '1', label: 'الرئيسية', href: '/' },
            { id: '2', label: 'WEB CREATOR AI', href: '/web-creator-ai' },
            { id: '3', label: 'مختبر التسويق', isCurrent: true },
          ]}
        />

        <PageSection
          title="أركان النمو والتسويق الرقمي"
          subtitle="الركائز الأساسية لبناء براند شخصي وتسويق مشاريع الويب"
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
