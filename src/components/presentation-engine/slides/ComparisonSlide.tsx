'use client';

import React from 'react';
import { ComparisonSlidePayload, LocalizedString } from '@/types';
import { getLocalizedText } from '@/lib/utils';
import { usePreferencesStore } from '@/store';

interface ComparisonSlideProps {
  title: LocalizedString;
  subtitle?: LocalizedString;
  payload: ComparisonSlidePayload;
}

export const ComparisonSlide: React.FC<ComparisonSlideProps> = ({
  title,
  subtitle,
  payload,
}) => {
  const { language } = usePreferencesStore();
  const isRtl = language === 'ar';

  return (
    <div className="w-full h-full flex flex-col justify-between p-8 sm:p-14 lg:p-20 select-none overflow-y-auto text-start">
      {/* Header */}
      <div className="space-y-1.5 border-b border-[var(--pres-border)] pb-4">
        <span className="text-xs sm:text-sm font-mono font-bold text-[var(--pres-primary)] block">
          {isRtl ? 'مقارنة توضيحية' : 'Comparison'}
        </span>
        <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-[var(--pres-text)] tracking-tight">
          {getLocalizedText(title, language)}
        </h2>
        {subtitle && (
          <p className="text-base sm:text-lg text-[var(--pres-text-muted)]">
            {getLocalizedText(subtitle, language)}
          </p>
        )}
      </div>

      {/* Clean Comparison Table */}
      <div className="my-auto py-6 space-y-5 max-w-5xl">
        <div className="rounded-xl border border-[var(--pres-border)] overflow-hidden bg-[var(--pres-surface)]">
          {/* Table Header */}
          <div className="grid grid-cols-12 border-b border-[var(--pres-border)] bg-[var(--pres-surface-sunken)] text-xs sm:text-sm font-bold">
            <div className="col-span-3 p-4 text-[var(--pres-text-muted)]">
              {isRtl ? 'المعيار' : 'Aspect'}
            </div>
            <div className="col-span-4 sm:col-span-5 p-4 text-[var(--pres-primary)] border-s border-[var(--pres-border)]">
              {getLocalizedText(payload.leftHeader, language)}
            </div>
            <div className="col-span-5 sm:col-span-4 p-4 text-[var(--pres-text-muted)] border-s border-[var(--pres-border)]">
              {getLocalizedText(payload.rightHeader, language)}
            </div>
          </div>

          {/* Rows */}
          <div className="divide-y divide-[var(--pres-border-subtle)]">
            {payload.dimensions.map((row, idx) => (
              <div key={idx} className="grid grid-cols-12 items-center text-sm sm:text-base">
                <div className="col-span-3 p-4 font-bold text-[var(--pres-text)]">
                  {getLocalizedText(row.dimension, language)}
                </div>
                <div className="col-span-4 sm:col-span-5 p-4 text-[var(--pres-text)] font-medium border-s border-[var(--pres-border-subtle)] leading-relaxed">
                  {getLocalizedText(row.left, language)}
                </div>
                <div className="col-span-5 sm:col-span-4 p-4 text-[var(--pres-text-muted)] border-s border-[var(--pres-border-subtle)] leading-relaxed">
                  {getLocalizedText(row.right, language)}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Takeaway Line */}
        <div className="border-s-4 border-[var(--pres-primary)] ps-4 py-1">
          <p className="text-sm sm:text-base font-semibold text-[var(--pres-text)] leading-relaxed">
            {getLocalizedText(payload.balancedVerdict, language)}
          </p>
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
