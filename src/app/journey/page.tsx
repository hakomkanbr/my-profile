'use client';

import React from 'react';
import Link from 'next/link';
import {
  AppShell,
  PageContainer,
  PageHeader,
  Button,
} from '@/components';
import { JOURNEY_STAGES } from '@/content';
import { usePreferencesStore, useProgressStore } from '@/store';
import { getLocalizedText } from '@/lib/utils';
import { getStagesProgress } from '@/lib/progress-selectors';
import { ArrowLeft, ArrowRight, Play, CheckCircle2, Monitor } from 'lucide-react';

export default function JourneyPage() {
  const { language } = usePreferencesStore();
  const { progress } = useProgressStore();
  const isRtl = language === 'ar';

  const stagesComputed = getStagesProgress(progress);

  return (
    <AppShell headerTitle={isRtl ? 'رحلتي التعليمية' : 'Learning Journey'}>
      <PageContainer>
        <PageHeader
          title={isRtl ? 'رحلتي التعليمية' : 'Learning Journey'}
          subtitle={
            isRtl
              ? 'المسار المتكامل المكون من 7 مراحل لبناء موقع ويب حقيقي من الصفر وحتى الإطلاق والتسويق.'
              : 'The comprehensive 7-stage roadmap from concept to marketing.'
          }
          breadcrumbs={[
            { id: '1', label: isRtl ? 'الرئيسية' : 'Home', href: '/' },
            { id: '2', label: isRtl ? 'رحلتي التعليمية' : 'Journey', isCurrent: true },
          ]}
          actions={
            <Link href="/web-creator-ai/presentation">
              <Button
                variant="outline"
                size="sm"
                leftIcon={<Monitor className="w-4 h-4 text-[var(--color-primary)]" />}
              >
                {isRtl ? 'بدء العرض التفاعلي' : 'Open Slides'}
              </Button>
            </Link>
          }
        />

        <div className="max-w-4xl mx-auto space-y-6 text-start">
          {JOURNEY_STAGES.map((stage, idx) => {
            const computed = stagesComputed[idx] || {
              status: idx === 0 ? 'current' : 'upcoming',
              isCompleted: false,
              completionPercent: 0,
              totalLessons: 1,
              completedLessons: 0,
            };

            const isCompleted = computed.isCompleted;
            const isCurrent = computed.status === 'current';

            let statusBadge = (
              <span className="text-[11px] font-mono px-2 py-0.5 rounded-sm bg-[var(--color-surface-sunken)] border border-[var(--color-border)] text-[var(--color-text-subtle)]">
                {isRtl ? 'قادمة' : 'UPCOMING'}
              </span>
            );

            if (isCompleted) {
              statusBadge = (
                <span className="text-[11px] font-mono font-bold px-2 py-0.5 rounded-sm bg-[var(--color-success-bg)] border border-[var(--color-success-border)] text-[var(--color-success)] flex items-center gap-1">
                  <CheckCircle2 className="w-3 h-3" />
                  <span>{isRtl ? 'مكتملة' : 'COMPLETED'}</span>
                </span>
              );
            } else if (isCurrent) {
              statusBadge = (
                <span className="text-[11px] font-mono font-bold px-2 py-0.5 rounded-sm bg-[var(--color-primary-subtle)] border border-[var(--color-primary)] text-[var(--color-primary)]">
                  {isRtl ? 'المرحلة الحالية' : 'IN PROGRESS'}
                </span>
              );
            }

            return (
              <div
                key={stage.id}
                className={`p-6 sm:p-8 rounded-xl border transition-all ${
                  isCurrent
                    ? 'bg-[var(--color-surface)] border-[var(--color-primary)] shadow-sm'
                    : 'bg-[var(--color-surface)] border-[var(--color-border)] hover:border-[var(--color-border-strong)]'
                }`}
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-[var(--color-border-subtle)]">
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-2xl font-black text-[var(--color-primary)] tracking-tight">
                      {stage.number}
                    </span>
                    <span className="text-h3 font-black text-[var(--color-text)] tracking-wider">
                      / {stage.code}
                    </span>
                    <span className="text-xs font-mono px-2 py-0.5 rounded bg-[var(--color-surface-sunken)] text-[var(--color-secondary)] font-bold">
                      {stage.philosophyStep}
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    {statusBadge}
                  </div>
                </div>

                <div className="py-4 space-y-2">
                  <h3 className="text-h3 font-bold text-[var(--color-text)]">
                    {getLocalizedText(stage.title, language)}
                  </h3>
                  <p className="text-body text-[var(--color-text-muted)] leading-relaxed">
                    {getLocalizedText(stage.tagline, language)}
                  </p>
                  <p className="text-body-sm text-[var(--color-text-subtle)] leading-relaxed">
                    {getLocalizedText(stage.description, language)}
                  </p>
                </div>

                <div className="pt-4 border-t border-[var(--color-border-subtle)] flex flex-wrap items-center justify-between gap-4">
                  <div className="flex items-center gap-2 text-xs font-mono text-[var(--color-text-subtle)]">
                    <span>{stage.associatedModuleIds.length} {isRtl ? 'وحدة تدريبية' : 'Module(s)'}</span>
                    <span>•</span>
                    <span>{computed.completedLessons}/{computed.totalLessons || 1} {isRtl ? 'دروس منجزة' : 'Lessons'}</span>
                  </div>

                  <div className="flex items-center gap-3">
                    <Link href={`/web-creator-ai/presentation`}>
                      <Button
                        size="sm"
                        variant="ghost"
                        className="font-mono text-xs"
                        leftIcon={<Play className="w-3.5 h-3.5 text-[var(--color-secondary)]" />}
                      >
                        {isRtl ? 'شريحة المرحلة' : 'Stage Slide'}
                      </Button>
                    </Link>

                    <Link href={`/modules`}>
                      <Button
                        size="sm"
                        variant={isCurrent ? 'primary' : 'outline'}
                        className="font-bold tracking-tight"
                        rightIcon={isRtl ? <ArrowLeft className="w-3.5 h-3.5" /> : <ArrowRight className="w-3.5 h-3.5" />}
                      >
                        {isCompleted
                          ? (isRtl ? 'مراجعة المرحلة' : 'Review Stage')
                          : isCurrent
                          ? (isRtl ? 'استكمال المرحلة' : 'Continue Stage')
                          : (isRtl ? 'ابدأ المرحلة' : 'Start Stage')}
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </PageContainer>
    </AppShell>
  );
}

