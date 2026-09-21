'use client';

import React from 'react';
import Link from 'next/link';
import { usePreferencesStore, useProgressStore } from '@/store';
import { getLocalizedText, cn } from '@/lib/utils';
import { getStagesProgress } from '@/lib/progress-selectors';
import { Badge } from '@/components/ui';
import { Check, ArrowLeft, ArrowRight, Play, Compass } from 'lucide-react';

export const JourneyVisualMap: React.FC = () => {
  const { language } = usePreferencesStore();
  const { progress } = useProgressStore();
  const isRtl = language === 'ar';

  const stagesComputed = getStagesProgress(progress);

  return (
    <section className="py-12 sm:py-16 border-b border-[var(--color-border)] text-start">
      <div className="max-w-5xl mx-auto space-y-8">
        <div className="space-y-2">
          <Badge variant="secondary" size="md" icon={<Compass className="w-3.5 h-3.5" />}>
            {isRtl ? 'خريطة الطريق السبعية' : 'The 7-Stage Roadmap'}
          </Badge>
          <h2 className="text-display sm:text-h1 font-extrabold text-[var(--color-text)] tracking-tight">
            {isRtl ? 'مسار رحلة صانع الويب' : 'Your Progressive Learning Path'}
          </h2>
          <p className="text-body text-[var(--color-text-muted)] max-w-2xl">
            {isRtl
              ? 'كل مرحلة تبني على ما قبلها؛ من التفكير المعماري، إلى التصميم، ثم الكود، ثم النشر والتسويق.'
              : 'Each stage builds upon the previous one: from architecture to design, engineering, launch, and market.'}
          </p>
        </div>

        {/* The Visual Journey Progression Track */}
        <div className="relative">
          {/* Mobile & Desktop Structured Stages List */}
          <div className="space-y-4">
            {stagesComputed.map((item) => {
              const isCompleted = item.status === 'completed';
              const isCurrent = item.status === 'current';


              return (
                <div
                  key={item.stage.id}
                  className={cn(
                    'p-5 sm:p-6 rounded-2xl border transition-all relative overflow-hidden',
                    isCurrent
                      ? 'bg-[var(--color-surface)] border-2 border-[var(--color-primary)] shadow-md ring-4 ring-[var(--color-primary)]/5'
                      : isCompleted
                      ? 'bg-[var(--color-surface)]/80 border-[var(--color-border)]'
                      : 'bg-[var(--color-surface-sunken)]/40 border-[var(--color-border-subtle)] opacity-75'
                  )}
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    {/* Left: Indicator & Stage Info */}
                    <div className="flex items-start sm:items-center gap-4">
                      {/* Step Status Badge Circle */}
                      <div
                        className={cn(
                          'w-11 h-11 rounded-xl flex items-center justify-center font-bold text-sm shrink-0 transition-colors',
                          isCompleted
                            ? 'bg-[var(--color-primary)] text-white shadow-xs'
                            : isCurrent
                            ? 'bg-[var(--color-secondary)] text-white shadow-sm ring-2 ring-[var(--color-secondary)]/30'
                            : 'bg-[var(--color-surface-sunken)] border border-[var(--color-border)] text-[var(--color-text-subtle)]'
                        )}
                      >
                        {isCompleted ? (
                          <Check className="w-5 h-5 stroke-[2.5]" />
                        ) : isCurrent ? (
                          <Play className="w-5 h-5 fill-current" />
                        ) : (
                          <span className="font-mono text-xs">{item.stage.number}</span>
                        )}
                      </div>

                      {/* Text details */}
                      <div className="space-y-1">
                        <div className="flex items-center gap-2">
                          <span className="text-xs font-mono font-bold text-[var(--color-secondary)]">
                            STAGE {item.stage.number} • {item.stage.code}
                          </span>
                          {isCurrent && (
                            <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-[var(--color-primary)] text-white animate-pulse">
                              {isRtl ? 'الموقع الحالي' : 'Current Stage'}
                            </span>
                          )}
                          {isCompleted && (
                            <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-[var(--color-primary-subtle)] text-[var(--color-primary)]">
                              {isRtl ? 'تم الإنجاز ✓' : 'Completed ✓'}
                            </span>
                          )}
                        </div>

                        <h3 className="text-h4 sm:text-h3 font-bold text-[var(--color-text)]">
                          {getLocalizedText(item.stage.title, language)}
                        </h3>

                        <p className="text-body-sm text-[var(--color-text-muted)] line-clamp-1">
                          {getLocalizedText(item.stage.tagline, language)}
                        </p>
                      </div>
                    </div>

                    {/* Right: Progress & Link to Journey */}
                    <div className="flex items-center justify-between sm:justify-end gap-4 shrink-0 pt-2 sm:pt-0 border-t sm:border-t-0 border-[var(--color-border-subtle)]">
                      <div className="flex flex-col items-start sm:items-end">
                        <span className="text-xs font-mono font-bold text-[var(--color-text)]">
                          {item.completedLessons} / {item.totalLessons} {isRtl ? 'درس' : 'lessons'}
                        </span>
                        <span className="text-[11px] text-[var(--color-text-subtle)]">
                          {item.completionPercent}% {isRtl ? 'مكتمل' : 'done'}
                        </span>
                      </div>

                      <Link
                        href="/web-creator-ai/journey"
                        className={cn(
                          'inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold transition-all border cursor-pointer',
                          isCurrent
                            ? 'bg-[var(--color-primary)] text-white border-[var(--color-primary)] shadow-xs hover:bg-[var(--color-primary-hover)]'
                            : 'bg-[var(--color-surface-sunken)] border-[var(--color-border)] text-[var(--color-text-muted)] hover:text-[var(--color-text)] hover:border-[var(--color-secondary)]'
                        )}
                      >
                        <span>{isCurrent ? (isRtl ? 'استكمال' : 'Continue') : (isRtl ? 'عرض' : 'View')}</span>
                        {isRtl ? <ArrowLeft className="w-3.5 h-3.5" /> : <ArrowRight className="w-3.5 h-3.5" />}
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
