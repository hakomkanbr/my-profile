'use client';

import React from 'react';
import { TakeawaySlidePayload, LocalizedString } from '@/types';
import { getLocalizedText } from '@/lib/utils';
import { usePreferencesStore } from '@/store';

interface TakeawaySlideProps {
  title: LocalizedString;
  payload: TakeawaySlidePayload;
}

export const TakeawaySlide: React.FC<TakeawaySlideProps> = ({ title, payload }) => {
  const { language } = usePreferencesStore();
  const isRtl = language === 'ar';

  return (
    <div className="w-full h-full flex flex-col justify-between p-8 sm:p-14 lg:p-20 select-none overflow-y-auto text-start">
      {/* Top Header */}
      <div className="flex items-center justify-between border-b border-[var(--pres-border)] pb-4">
        <span className="text-xs sm:text-sm font-mono font-bold text-[var(--pres-primary)]">
          {isRtl ? 'خلاصة الدرس' : 'Lesson Summary'}
        </span>
        <span className="text-xs sm:text-sm text-[var(--pres-text-muted)]">
          {getLocalizedText(title, language)}
        </span>
      </div>

      {/* Main 3 Takeaways Grid */}
      <div className="max-w-5xl space-y-7 my-auto py-6">
        <h2 className="text-2xl sm:text-4xl font-black text-[var(--pres-text)]">
          {getLocalizedText(title, language)}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {payload.takeaways.map((item, idx) => (
            <div
              key={idx}
              className="p-6 rounded-xl bg-[var(--pres-surface)] border border-[var(--pres-border)] space-y-3 flex flex-col justify-between"
            >
              <div className="space-y-2.5">
                <span className="font-mono text-sm font-bold text-[var(--pres-primary)] block">
                  {item.number || `0${idx + 1}`}
                </span>
                <h3 className="text-lg sm:text-xl font-bold text-[var(--pres-text)] leading-snug">
                  {getLocalizedText(item.title, language)}
                </h3>
              </div>

              <p className="text-sm sm:text-base text-[var(--pres-text-muted)] leading-relaxed pt-1">
                {getLocalizedText(item.description, language)}
              </p>
            </div>
          ))}
        </div>

        {/* Core Motto */}
        <div className="border-s-4 border-[var(--pres-primary)] ps-4 py-1">
          <p className="text-base sm:text-lg font-bold text-[var(--pres-text)] leading-relaxed">
            {getLocalizedText(payload.coreMotto, language)}
          </p>
        </div>
      </div>

      {/* Footer */}
      <div className="border-t border-[var(--pres-border-subtle)] pt-4 text-xs sm:text-sm text-[var(--pres-text-muted)] flex items-center justify-between">
        <span>{getLocalizedText(title, language)}</span>
        <span>{isRtl ? 'إنهاء / التالي ←' : 'Finish / Next →'}</span>
      </div>
    </div>
  );
};
