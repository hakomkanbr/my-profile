'use client';

import React from 'react';
import { usePreferencesStore } from '@/store';
import { INSTRUCTOR_PROFILE } from '@/content';
import { Card } from '@/components/ui';
import { Code2, GraduationCap, CheckCircle2, Sparkles } from 'lucide-react';

export const DeveloperPlusInstructor: React.FC = () => {
  const { language } = usePreferencesStore();
  const isRtl = language === 'ar';
  const profile = INSTRUCTOR_PROFILE;
  const dpi = profile.developerPlusInstructor;

  return (
    <section className="py-8 sm:py-12 border-b border-[var(--color-border)] text-start">
      <div className="max-w-3xl mb-8 space-y-2">
        <span className="text-label text-[var(--color-primary)]">
          {isRtl ? 'التكامل المعرفي' : 'Dual Advantage'}
        </span>
        <h2 className="text-h2 font-bold text-[var(--color-text)]">
          {isRtl ? dpi.title.ar : dpi.title.en}
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        {/* Developer Side */}
        <Card variant="default" className="p-6 bg-[var(--color-surface)] border-s-4 border-s-[var(--color-primary)]">
          <div className="flex items-center gap-2.5 mb-4 text-[var(--color-primary)]">
            <Code2 className="w-5 h-5" />
            <h3 className="text-h4 font-bold">
              {isRtl ? dpi.developerSide.headline.ar : dpi.developerSide.headline.en}
            </h3>
          </div>
          <ul className="space-y-3">
            {dpi.developerSide.points.map((pt, idx) => (
              <li key={idx} className="flex items-start gap-2.5 text-body-sm text-[var(--color-text-muted)]">
                <CheckCircle2 className="w-4 h-4 text-[var(--color-primary)] shrink-0 mt-0.5" />
                <span>{isRtl ? pt.ar : pt.en}</span>
              </li>
            ))}
          </ul>
        </Card>

        {/* Instructor Side */}
        <Card variant="default" className="p-6 bg-[var(--color-surface)] border-s-4 border-s-[var(--color-secondary)]">
          <div className="flex items-center gap-2.5 mb-4 text-[var(--color-secondary)]">
            <GraduationCap className="w-5 h-5" />
            <h3 className="text-h4 font-bold">
              {isRtl ? dpi.instructorSide.headline.ar : dpi.instructorSide.headline.en}
            </h3>
          </div>
          <ul className="space-y-3">
            {dpi.instructorSide.points.map((pt, idx) => (
              <li key={idx} className="flex items-start gap-2.5 text-body-sm text-[var(--color-text-muted)]">
                <CheckCircle2 className="w-4 h-4 text-[var(--color-secondary)] shrink-0 mt-0.5" />
                <span>{isRtl ? pt.ar : pt.en}</span>
              </li>
            ))}
          </ul>
        </Card>
      </div>

      {/* Synergy Callout */}
      <div className="p-5 rounded-2xl bg-[var(--color-surface-sunken)] border border-[var(--color-border)] flex items-start gap-3.5">
        <Sparkles className="w-5 h-5 text-[var(--color-secondary)] shrink-0 mt-0.5" />
        <p className="text-body-sm font-semibold text-[var(--color-text)] leading-relaxed">
          {isRtl ? dpi.synergyStatement.ar : dpi.synergyStatement.en}
        </p>
      </div>
    </section>
  );
};
