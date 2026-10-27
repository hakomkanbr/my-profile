'use client';

import React from 'react';
import { ContextSlidePayload, LocalizedString } from '@/types';
import { getLocalizedText } from '@/lib/utils';
import { usePreferencesStore } from '@/store';

interface ContextSlideProps {
  title: LocalizedString;
  subtitle?: LocalizedString;
  payload: ContextSlidePayload;
  realWorldExample?: LocalizedString;
}

export const ContextSlide: React.FC<ContextSlideProps> = ({
  title,
  subtitle,
  payload,
  realWorldExample,
}) => {
  const { language } = usePreferencesStore();
  const isRtl = language === 'ar';

  return (
    <div className="w-full h-full flex flex-col justify-between p-8 sm:p-14 lg:p-20 select-none overflow-y-auto text-start">
      {/* Header */}
      <div className="space-y-2 border-b border-[var(--pres-border)] pb-5">
        <span className="text-xs sm:text-sm font-mono font-bold text-[var(--pres-primary)] block">
          {isRtl ? 'مدخل وسياق الموضوع' : 'Context & Overview'}
        </span>
        <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-[var(--pres-text)] tracking-tight leading-tight">
          {getLocalizedText(title, language)}
        </h2>
        {subtitle && (
          <p className="text-base sm:text-xl text-[var(--pres-text-muted)] font-normal">
            {getLocalizedText(subtitle, language)}
          </p>
        )}
      </div>

      {/* Three Clean Editorial Columns */}
      <div className="my-auto py-8 space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          <div className="p-6 sm:p-7 rounded-xl bg-[var(--pres-surface)] border border-[var(--pres-border)] flex flex-col justify-between space-y-4">
            <div className="space-y-3">
              <span className="text-xs font-mono font-bold text-[var(--pres-primary)] block">
                01 / {isRtl ? 'الفكرة الأساسية' : 'Core Idea'}
              </span>
              <p className="text-base sm:text-lg text-[var(--pres-text)] font-medium leading-relaxed">
                {getLocalizedText(payload.industryShift, language)}
              </p>
            </div>
          </div>

          <div className="p-6 sm:p-7 rounded-xl bg-[var(--pres-surface)] border border-[var(--pres-border)] flex flex-col justify-between space-y-4">
            <div className="space-y-3">
              <span className="text-xs font-mono font-bold text-[var(--pres-primary)] block">
                02 / {isRtl ? 'لماذا يهمنا ذلك عمليًا؟' : 'Why It Matters'}
              </span>
              <p className="text-base sm:text-lg text-[var(--pres-text)] font-medium leading-relaxed">
                {getLocalizedText(payload.whyItMatters, language)}
              </p>
            </div>
          </div>

          <div className="p-6 sm:p-7 rounded-xl bg-[var(--pres-surface-sunken)] border border-[var(--pres-border)] flex flex-col justify-between space-y-4">
            <div className="space-y-3">
              <span className="text-xs font-mono font-bold text-[var(--pres-text-muted)] block">
                03 / {isRtl ? 'مثال من الواقع' : 'Real Example'}
              </span>
              <p className="text-base sm:text-lg text-[var(--pres-text)] font-normal leading-relaxed">
                {getLocalizedText(
                  realWorldExample || payload.realWorldProblem,
                  language
                )}
              </p>
            </div>
          </div>
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
