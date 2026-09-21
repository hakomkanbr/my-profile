'use client';

import React from 'react';
import { usePreferencesStore } from '@/store';
import { Card } from '@/components/ui';
import { Presentation, GraduationCap, Sparkles } from 'lucide-react';

export const WhatIsSection: React.FC = () => {
  const { language } = usePreferencesStore();
  const isRtl = language === 'ar';

  const pillars = [
    {
      title: isRtl ? 'منصة تعليمية تفاعلية حقيقية' : 'Interactive Educational Platform',
      description: isRtl
        ? 'ليست مجرد مقاطع فيديو مسجلة، بل بيئة تطبيقية تضم معامل كود تفاعلية، اختبارات فورية، وتحديات برمجية تتابع إنجازك خطوة بخطوة.'
        : 'Not passive videos, but an applied lab with live code exercises, instant quizzes, and granular progress tracking.',
      icon: <GraduationCap className="w-6 h-6 text-[var(--color-primary)]" />,
      badge: isRtl ? 'للمتدرب' : 'For Trainee',
    },
    {
      title: isRtl ? 'نظام تقديم احترافي للمدرب' : 'Trainer Presentation System',
      description: isRtl
        ? 'أداة حية يعتمد عليها المدرب أثناء شرح المحاضرات التفاعلية، مدعومة بمؤقت ذكي وملاحظات للشرح المباشر وشاشات عرض خالية من التشتيت.'
        : 'A live presentation kit used during workshop sessions with presenter tools, timing controls, and focused views.',
      icon: <Presentation className="w-6 h-6 text-[var(--color-secondary)]" />,
      badge: isRtl ? 'للمدرب' : 'For Trainer',
    },
    {
      title: isRtl ? 'تجربة براند شخصي للمطور' : 'Personal Brand Experience',
      description: isRtl
        ? 'تعكس خبرة عملية حقيقية وفلسفة معمارية تمتد لما بعد كتابة الأكواد، لتشمل بناء معرض الأعمال، اقتناص العملاء، والعمل الحر المستدام.'
        : 'Reflects genuine production craftsmanship, guiding you to establish authority, client acquisition, and sustainable freelancing.',
      icon: <Sparkles className="w-6 h-6 text-[var(--color-primary)]" />,
      badge: isRtl ? 'للمستقبل' : 'For Career',
    },
  ];

  return (
    <section className="py-12 sm:py-16 border-b border-[var(--color-border)] text-start">
      <div className="max-w-3xl mb-8 space-y-2">
        <span className="text-label text-[var(--color-secondary)]">
          {isRtl ? 'مفهوم المنصة' : 'Core Concept'}
        </span>
        <h2 className="text-h2 font-bold text-[var(--color-text)]">
          {isRtl ? 'ما هي منصة WEB CREATOR AI؟' : 'What is WEB CREATOR AI?'}
        </h2>
        <p className="text-body-sm text-[var(--color-text-muted)] leading-relaxed">
          {isRtl
            ? 'هذه ليست صفحة هبوط ترويجية، وليست عرض PowerPoint بصيغة HTML. هذه بيئة برمجية متكاملة شُيدت لترافقك طوال دورة حياة صناعة مواقع الويب.'
            : 'Neither a generic promotional site nor an HTML slide deck. A living developer environment guiding you through the full web creation lifecycle.'}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {pillars.map((item, idx) => (
          <Card key={idx} variant="educational" className="flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-xl bg-[var(--color-primary-subtle)] flex items-center justify-center">
                  {item.icon}
                </div>
                <span className="text-caption font-bold px-2 py-0.5 rounded-md bg-[var(--color-surface-sunken)] border border-[var(--color-border)] text-[var(--color-text-muted)]">
                  {item.badge}
                </span>
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
      </div>
    </section>
  );
};
