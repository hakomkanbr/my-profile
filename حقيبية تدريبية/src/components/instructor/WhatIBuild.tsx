'use client';

import React from 'react';
import { usePreferencesStore } from '@/store';
import { INSTRUCTOR_PROFILE } from '@/content';
import { Card } from '@/components/ui';
import { Code2 } from 'lucide-react';

export const WhatIBuild: React.FC = () => {
  const { language } = usePreferencesStore();
  const isRtl = language === 'ar';
  const profile = INSTRUCTOR_PROFILE;

  return (
    <section className="py-8 sm:py-12 border-b border-[var(--color-border)] text-start">
      <div className="max-w-3xl mb-6 space-y-2">
        <span className="text-label text-[var(--color-primary)]">
          {isRtl ? 'الجانب الهندسي' : 'Engineering Scope'}
        </span>
        <h2 className="text-h2 font-bold text-[var(--color-text)]">
          {isRtl ? profile.whatIBuild.title.ar : profile.whatIBuild.title.en}
        </h2>
        <p className="text-body-sm text-[var(--color-text-muted)] leading-relaxed">
          {isRtl ? profile.whatIBuild.description.ar : profile.whatIBuild.description.en}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {profile.whatIBuild.focusAreas.map((area, idx) => (
          <Card
            key={idx}
            variant="default"
            className="p-5 flex items-start gap-3 bg-[var(--color-surface)] hover:border-[var(--color-secondary)] transition-all"
          >
            <div className="w-8 h-8 rounded-lg bg-[var(--color-primary-subtle)] text-[var(--color-primary)] flex items-center justify-center shrink-0 mt-0.5">
              <Code2 className="w-4 h-4" />
            </div>
            <p className="text-body-sm font-medium text-[var(--color-text)] leading-relaxed">
              {isRtl ? area.ar : area.en}
            </p>
          </Card>
        ))}
      </div>
    </section>
  );
};
