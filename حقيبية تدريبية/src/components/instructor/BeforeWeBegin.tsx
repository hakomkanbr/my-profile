'use client';

import React from 'react';
import { usePreferencesStore } from '@/store';
import { INSTRUCTOR_PROFILE } from '@/content';
import { Card, Badge } from '@/components/ui';
import { UserCheck, Compass } from 'lucide-react';

export const BeforeWeBegin: React.FC = () => {
  const { language } = usePreferencesStore();
  const isRtl = language === 'ar';
  const profile = INSTRUCTOR_PROFILE;

  return (
    <section className="py-8 sm:py-12 border-b border-[var(--color-border)] text-start">
      <div className="max-w-3xl mb-6 space-y-2">
        <div className="flex items-center gap-2">
          <Badge variant="primary" size="md" icon={<UserCheck className="w-3.5 h-3.5" />}>
            {isRtl ? 'قبل أن نبدأ...' : 'Before We Begin...'}
          </Badge>
        </div>
        <h2 className="text-h2 font-bold text-[var(--color-text)]">
          {isRtl ? 'لماذا صممت هذه الحقيبة التدريبية؟' : 'Why Did I Build This Learning Journey?'}
        </h2>
      </div>

      <Card variant="default" className="p-6 sm:p-8 bg-[var(--color-surface)] leading-relaxed space-y-4">
        <p className="text-body text-[var(--color-text)] font-medium">
          {isRtl ? profile.briefIntro.ar : profile.briefIntro.en}
        </p>

        <div className="p-4 rounded-xl bg-[var(--color-surface-sunken)] border border-[var(--color-border-subtle)] flex items-start gap-3">
          <Compass className="w-5 h-5 text-[var(--color-primary)] shrink-0 mt-0.5" />
          <p className="text-body-sm text-[var(--color-text-muted)]">
            {isRtl
              ? 'التعليم الحقيقي ليس تقديم إجابات جاهزة، بل تدريبك على كيفية التفكير عندما تواجه شاشة فارغة أو خطأ برمجياً غير متوقع.'
              : 'True technical mentorship is not about handing out code solutions, but training your engineering intuition when confronting a blank canvas or an obscure bug.'}
          </p>
        </div>
      </Card>
    </section>
  );
};
