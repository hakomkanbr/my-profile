'use client';

import React from 'react';
import { usePreferencesStore } from '@/store';
import { INSTRUCTOR_PROFILE } from '@/content';
import { Card } from '@/components/ui';

export const InstructorStory: React.FC = () => {
  const { language } = usePreferencesStore();
  const isRtl = language === 'ar';
  const profile = INSTRUCTOR_PROFILE;

  return (
    <section className="py-8 sm:py-12 border-b border-[var(--color-border)] text-start">
      <div className="max-w-3xl mb-6 space-y-2">
        <span className="text-label text-[var(--color-secondary)]">
          {isRtl ? 'المسيرة والخبرة' : 'My Background'}
        </span>
        <h2 className="text-h2 font-bold text-[var(--color-text)]">
          {isRtl ? profile.story.title.ar : profile.story.title.en}
        </h2>
      </div>

      <div className="space-y-4">
        {profile.story.paragraphs.map((para, idx) => (
          <Card
            key={idx}
            variant="default"
            className="p-5 sm:p-6 bg-[var(--color-surface)] border-s-4 border-s-[var(--color-secondary)]"
          >
            <div className="flex items-start gap-4">
              <span className="w-7 h-7 rounded-full bg-[var(--color-primary-subtle)] text-[var(--color-primary)] font-mono font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                {idx + 1}
              </span>
              <p className="text-body-sm text-[var(--color-text-muted)] leading-relaxed flex-1">
                {isRtl ? para.ar : para.en}
              </p>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
};
