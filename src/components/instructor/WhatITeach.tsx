'use client';

import React from 'react';
import { usePreferencesStore } from '@/store';
import { INSTRUCTOR_PROFILE } from '@/content';
import { Card } from '@/components/ui';
import { GraduationCap } from 'lucide-react';

export const WhatITeach: React.FC = () => {
  const { language } = usePreferencesStore();
  const isRtl = language === 'ar';
  const profile = INSTRUCTOR_PROFILE;

  return (
    <section className="py-8 sm:py-12 border-b border-[var(--color-border)] text-start">
      <div className="max-w-3xl mb-6 space-y-2">
        <span className="text-label text-[var(--color-secondary)]">
          {isRtl ? 'المسار التدريبي' : 'Curriculum Focus'}
        </span>
        <h2 className="text-h2 font-bold text-[var(--color-text)]">
          {isRtl ? profile.whatITeach.title.ar : profile.whatITeach.title.en}
        </h2>
        <p className="text-body-sm text-[var(--color-text-muted)] leading-relaxed">
          {isRtl ? profile.whatITeach.description.ar : profile.whatITeach.description.en}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {profile.whatITeach.coreTracks.map((track, idx) => (
          <Card
            key={idx}
            variant="default"
            className="p-5 flex items-start gap-3 bg-[var(--color-surface)] hover:border-[var(--color-primary)] transition-all"
          >
            <div className="w-8 h-8 rounded-lg bg-[var(--color-secondary-subtle)] text-[var(--color-secondary)] flex items-center justify-center shrink-0 mt-0.5">
              <GraduationCap className="w-4 h-4" />
            </div>
            <p className="text-body-sm font-medium text-[var(--color-text)] leading-relaxed">
              {isRtl ? track.ar : track.en}
            </p>
          </Card>
        ))}
      </div>
    </section>
  );
};
