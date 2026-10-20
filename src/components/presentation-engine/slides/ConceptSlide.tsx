'use client';

import React from 'react';
import { ConceptSlidePayload, LocalizedString } from '@/types';
import { getLocalizedText } from '@/lib/utils';
import { usePreferencesStore } from '@/store';
import { CheckCircle2, ShieldAlert } from 'lucide-react';

interface ConceptSlideProps {
  title: LocalizedString;
  payload: ConceptSlidePayload;
}

export const ConceptSlide: React.FC<ConceptSlideProps> = ({ title, payload }) => {
  const { language } = usePreferencesStore();
  const isRtl = language === 'ar';

  return (
    <div className="w-full h-full flex flex-col justify-center px-6 py-12 sm:px-12 lg:px-20 select-none overflow-y-auto text-start">
      {/* Top Header */}
      <div className="max-w-5xl border-b border-[var(--pres-border-subtle)] pb-4">
        <span className="text-sm font-semibold text-[var(--pres-accent)]">{isRtl ? 'الفكرة الرئيسية' : 'Key idea'}</span>
      </div>

      {/* Main Center Concept */}
      <div className="max-w-5xl space-y-6 py-7">
        <div className="space-y-2">
          <span className="text-base font-semibold text-[var(--pres-primary)] block">
            {getLocalizedText(payload.tagline, language)}
          </span>
          <h2 className="text-4xl sm:text-6xl lg:text-7xl font-black text-[var(--pres-text)] tracking-tight leading-tight">
            {getLocalizedText(payload.principle, language)}
          </h2>
        </div>

        {/* Explanation Card */}
        <p className="text-xl sm:text-2xl text-[var(--pres-text-muted)] font-normal leading-relaxed">
          {getLocalizedText(payload.explanation, language)}
        </p>

        {/* Key Points Grid */}
        {payload.bulletPoints && payload.bulletPoints.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4 pt-2">
            {payload.bulletPoints.map((point, idx) => (
              <div
                key={idx}
                className="py-3 border-t border-[var(--pres-border)] flex items-start gap-3"
              >
                <CheckCircle2 className="w-5 h-5 text-[var(--pres-primary)] mt-1 shrink-0" />
                <span className="text-lg sm:text-xl text-[var(--pres-text)] font-medium leading-relaxed">
                  {getLocalizedText(point, language)}
                </span>
              </div>
            ))}
          </div>
        )}

        {/* Architectural Golden Rule Callout */}
        {payload.architecturalRule && (
          <div className="p-4 sm:p-5 border-s-4 border-[var(--pres-primary)] bg-[var(--pres-surface-sunken)] flex items-start gap-3.5">
            <ShieldAlert className="w-5 h-5 text-[var(--pres-primary)] shrink-0 mt-0.5" />
            <div className="space-y-1">
              <span className="text-sm font-bold text-[var(--pres-primary)] block">
                {isRtl ? 'تذكّر' : 'Remember'}
              </span>
              <p className="text-lg font-bold text-[var(--pres-text)] leading-relaxed">
                {getLocalizedText(payload.architecturalRule, language)}
              </p>
            </div>
          </div>
        )}
      </div>

      {/* Footer */}
      <div className="max-w-5xl border-t border-[var(--pres-border-subtle)] pt-4 text-sm text-[var(--pres-text-muted)] flex items-center justify-between">
        <span>{getLocalizedText(title, language)}</span>
        <span className="text-xs">{isRtl ? 'مسافة: التالي' : 'Space: next'}</span>
      </div>
    </div>
  );
};
