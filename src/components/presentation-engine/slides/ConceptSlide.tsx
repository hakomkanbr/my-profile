'use client';

import React from 'react';
import { ConceptSlidePayload, LocalizedString } from '@/types';
import { getLocalizedText } from '@/lib/utils';
import { usePreferencesStore } from '@/store';

interface ConceptSlideProps {
  title: LocalizedString;
  payload: ConceptSlidePayload;
  realWorldExample?: LocalizedString;
}

export const ConceptSlide: React.FC<ConceptSlideProps> = ({
  title,
  payload,
  realWorldExample,
}) => {
  const { language } = usePreferencesStore();
  const isRtl = language === 'ar';

  return (
    <div className="w-full h-full flex flex-col justify-between p-8 sm:p-14 lg:p-20 select-none overflow-y-auto text-start">
      {/* Top Header */}
      <div className="flex items-center justify-between border-b border-[var(--pres-border)] pb-4">
        <span className="text-xs sm:text-sm font-mono font-bold text-[var(--pres-primary)]">
          {getLocalizedText(payload.tagline, language)}
        </span>
        <span className="text-xs sm:text-sm text-[var(--pres-text-muted)]">
          {getLocalizedText(title, language)}
        </span>
      </div>

      {/* Main Content */}
      <div className="max-w-5xl space-y-7 my-auto py-6">
        <div className="space-y-3">
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-[var(--pres-text)] tracking-tight leading-tight">
            {getLocalizedText(payload.principle, language)}
          </h2>
          <p className="text-base sm:text-xl text-[var(--pres-text-muted)] leading-relaxed max-w-4xl">
            {getLocalizedText(payload.explanation, language)}
          </p>
        </div>

        {/* Points List */}
        {payload.bulletPoints && payload.bulletPoints.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
            {payload.bulletPoints.map((bp, idx) => (
              <div
                key={idx}
                className="p-5 rounded-xl bg-[var(--pres-surface)] border border-[var(--pres-border)] flex items-start gap-3.5"
              >
                <span className="font-mono text-sm font-bold text-[var(--pres-primary)] shrink-0 mt-0.5">
                  0{idx + 1}
                </span>
                <span className="text-sm sm:text-base text-[var(--pres-text)] font-medium leading-relaxed">
                  {getLocalizedText(bp, language)}
                </span>
              </div>
            ))}
          </div>
        )}

        {/* Summary Note or Example */}
        {(realWorldExample || payload.architecturalRule) && (
          <div className="border-s-4 border-[var(--pres-primary)] bg-[var(--pres-surface-sunken)] px-5 py-4 rounded-e-xl">
            <p className="text-sm sm:text-base font-semibold text-[var(--pres-text)] leading-relaxed">
              {getLocalizedText(
                (realWorldExample || payload.architecturalRule)!,
                language
              )}
            </p>
          </div>
        )}
      </div>

      {/* Footer */}
      <div className="border-t border-[var(--pres-border-subtle)] pt-4 text-xs sm:text-sm text-[var(--pres-text-muted)] flex items-center justify-between">
        <span>{getLocalizedText(title, language)}</span>
        <span>{isRtl ? 'التالي ←' : 'Next →'}</span>
      </div>
    </div>
  );
};
