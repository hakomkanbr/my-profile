'use client';

import React from 'react';
import { RevealSlidePayload, LocalizedString } from '@/types';
import { getLocalizedText } from '@/lib/utils';
import { usePreferencesStore } from '@/store';

interface RevealSlideProps {
  title: LocalizedString;
  payload: RevealSlidePayload;
}

export const RevealSlide: React.FC<RevealSlideProps> = ({
  title,
  payload,
}) => {
  const { language } = usePreferencesStore();
  const isRtl = language === 'ar';

  return (
    <div className="w-full h-full flex flex-col justify-between p-8 sm:p-14 lg:p-20 select-none overflow-y-auto text-start">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-[var(--pres-border)] pb-4">
        <span className="text-xs sm:text-sm font-mono font-bold text-[var(--pres-primary)]">
          {isRtl ? 'خطوات عملية متسلسلة' : 'Step-by-Step Breakdown'}
        </span>
        <span className="text-xs sm:text-sm text-[var(--pres-text-muted)]">
          {getLocalizedText(title, language)}
        </span>
      </div>

      {/* Main Content */}
      <div className="max-w-5xl space-y-6 my-auto py-6">
        <h2 className="text-2xl sm:text-4xl font-black text-[var(--pres-text)] tracking-tight leading-snug">
          {getLocalizedText(payload.premise, language)}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {payload.steps.map((step, idx) => (
            <div
              key={idx}
              className="p-5 sm:p-6 rounded-xl bg-[var(--pres-surface)] border border-[var(--pres-border)] flex items-start gap-4"
            >
              <span className="w-9 h-9 rounded-lg bg-[var(--pres-surface-sunken)] border border-[var(--pres-border)] text-[var(--pres-primary)] font-mono font-bold text-sm flex items-center justify-center shrink-0">
                {step.number || `0${idx + 1}`}
              </span>
              <div className="space-y-1.5">
                <h3 className="text-base sm:text-lg font-bold text-[var(--pres-text)]">
                  {getLocalizedText(step.title, language)}
                </h3>
                <p className="text-sm sm:text-base text-[var(--pres-text-muted)] leading-relaxed">
                  {getLocalizedText(step.description, language)}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div className="border-t border-[var(--pres-border-subtle)] pt-4 text-xs sm:text-sm text-[var(--pres-text-muted)] flex items-center justify-between">
        <span>{getLocalizedText(title, language)}</span>
        <span>{isRtl ? 'التالي ←' : 'Next →'}</span>
      </div>
    </div>
  );
};
