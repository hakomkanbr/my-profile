'use client';

import React from 'react';
import { usePreferencesStore } from '@/store';
import { INSTRUCTOR_PROFILE } from '@/content';
import { KeyConcept } from '@/components/educational';

export const MessageToStudentsSection: React.FC = () => {
  const { language } = usePreferencesStore();
  const isRtl = language === 'ar';
  const profile = INSTRUCTOR_PROFILE;

  return (
    <section className="py-8 sm:py-12 border-b border-[var(--color-border)] text-start">
      <div className="max-w-3xl mb-6 space-y-2">
        <span className="text-label text-[var(--color-secondary)]">
          {isRtl ? 'توجيهات المتدرب' : 'Student Guidance'}
        </span>
        <h2 className="text-h2 font-bold text-[var(--color-text)]">
          {isRtl ? profile.messageToStudents.title.ar : profile.messageToStudents.title.en}
        </h2>
      </div>

      <KeyConcept title={isRtl ? 'رسالتي إليك' : 'My Core Advice'}>
        <div className="space-y-3">
          {profile.messageToStudents.content.map((p, idx) => (
            <p key={idx} className="text-body-sm text-[var(--color-text-muted)] leading-relaxed">
              {isRtl ? p.ar : p.en}
            </p>
          ))}
          <p className="text-body font-bold text-[var(--color-primary)] pt-3 border-t border-[var(--color-border-subtle)]">
            &ldquo;{isRtl ? profile.messageToStudents.closingQuote.ar : profile.messageToStudents.closingQuote.en}&rdquo;
          </p>
        </div>
      </KeyConcept>
    </section>
  );
};
