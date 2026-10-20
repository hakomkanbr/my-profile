'use client';

import React from 'react';
import { ContextSlidePayload, LocalizedString } from '@/types';
import { getLocalizedText } from '@/lib/utils';
import { usePreferencesStore } from '@/store';

interface ContextSlideProps {
  title: LocalizedString;
  subtitle?: LocalizedString;
  payload: ContextSlidePayload;
}

export const ContextSlide: React.FC<ContextSlideProps> = ({ title, subtitle, payload }) => {
  const { language } = usePreferencesStore();
  const isRtl = language === 'ar';

  return (
    <div className="w-full h-full flex flex-col justify-center px-6 py-12 sm:px-12 lg:px-20 select-none overflow-y-auto text-start">
      {/* Header */}
      <div className="max-w-5xl space-y-3 pb-5">
        <h2 className="text-4xl sm:text-6xl lg:text-7xl font-black text-[var(--pres-text)] tracking-tight leading-tight">
          {getLocalizedText(title, language)}
        </h2>
        {subtitle && (
          <p className="text-xl sm:text-2xl text-[var(--pres-secondary)] font-medium leading-relaxed">
            {getLocalizedText(subtitle, language)}
          </p>
        )}
      </div>

      {/* One clear teaching sequence: change, challenge, takeaway. */}
      <div className="max-w-6xl grid grid-cols-1 md:grid-cols-3 gap-0 md:divide-x md:divide-[var(--pres-border)] border-y border-[var(--pres-border)]">
        {/* Card 1: Shift */}
        <div className="py-5 px-4 sm:py-7 sm:px-8 space-y-3">
          <h3 className="text-lg sm:text-xl font-bold text-[var(--pres-primary)]">
            {isRtl ? 'التحول في الصناعة' : 'The Industry Shift'}
          </h3>
          <p className="text-lg sm:text-xl text-[var(--pres-text)] leading-relaxed">
            {getLocalizedText(payload.industryShift, language)}
          </p>
        </div>

        {/* Card 2: Problem */}
        <div className="py-5 px-4 sm:py-7 sm:px-8 space-y-3">
          <h3 className="text-lg sm:text-xl font-bold text-[var(--pres-accent)]">
            {isRtl ? 'المشكلة الحقيقية' : 'The Real Challenge'}
          </h3>
          <p className="text-lg sm:text-xl text-[var(--pres-text)] leading-relaxed">
            {getLocalizedText(payload.realWorldProblem, language)}
          </p>
        </div>

        {/* Card 3: Why it Matters */}
        <div className="py-5 px-4 sm:py-7 sm:px-8 space-y-3">
          <h3 className="text-lg sm:text-xl font-bold text-[var(--pres-primary)]">
            {isRtl ? 'لماذا يهمنا الآن؟' : 'Why This Matters Today'}
          </h3>
          <p className="text-lg sm:text-xl text-[var(--pres-text)] font-medium leading-relaxed">
            {getLocalizedText(payload.whyItMatters, language)}
          </p>
        </div>
      </div>

      {/* Footer Insight */}
      <div className="max-w-6xl pt-5 text-sm sm:text-base text-[var(--pres-text-muted)] flex items-center justify-between">
        <span>{isRtl ? 'افهم المشكلة، ثم اختر الحل' : 'Understand the problem before choosing the solution'}</span>
        <span className="text-xs sm:text-sm">{isRtl ? 'مسافة: التالي' : 'Space: next'}</span>
      </div>
    </div>
  );
};
