'use client';

import React from 'react';
import { TakeawaySlidePayload, LocalizedString } from '@/types';
import { getLocalizedText } from '@/lib/utils';
import { usePreferencesStore } from '@/store';
import { Award, Sparkles } from 'lucide-react';

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
      <div className="flex items-center justify-between border-b border-[var(--pres-border-subtle)] pb-4">
        <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-[var(--pres-primary)]">
          <Award className="w-4 h-4" />
          <span>{isRtl ? 'خلاصة الجلسة الهندسية (3 Takeaways)' : 'Core Engineering Takeaways'}</span>
        </div>
        <span className="text-xs font-mono text-[var(--pres-text-subtle)]">
          {getLocalizedText(title, language)}
        </span>
      </div>

      {/* Main 3 Takeaways Grid */}
      <div className="max-w-4xl space-y-8 my-auto py-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {payload.takeaways.map((item, idx) => (
            <div
              key={idx}
              className="p-6 sm:p-8 rounded-2xl bg-[var(--pres-surface)] border-2 border-[var(--pres-border)] space-y-4 shadow-xs relative overflow-hidden flex flex-col justify-between"
            >
              <div className="space-y-3">
                <span className="w-10 h-10 rounded-xl bg-[var(--pres-primary)]/10 text-[var(--pres-primary)] font-mono font-black text-base flex items-center justify-center">
                  {item.number || `0${idx + 1}`}
                </span>
                <h3 className="text-lg font-bold text-[var(--pres-text)] leading-snug">
                  {getLocalizedText(item.title, language)}
                </h3>
              </div>

              <p className="text-xs sm:text-sm text-[var(--pres-text-muted)] leading-relaxed pt-2">
                {getLocalizedText(item.description, language)}
              </p>
            </div>
          ))}
        </div>

        {/* Core Motto */}
        <div className="p-5 rounded-2xl bg-[var(--pres-surface-sunken)] border border-[var(--pres-primary)]/30 flex items-center gap-3">
          <Sparkles className="w-5 h-5 text-[var(--pres-primary)] shrink-0" />
          <p className="text-sm sm:text-base font-bold text-[var(--pres-text)] leading-relaxed">
            {getLocalizedText(payload.coreMotto, language)}
          </p>
        </div>
      </div>

      {/* Footer */}
      <div className="border-t border-[var(--pres-border-subtle)] pt-4 text-xs font-mono text-[var(--pres-text-subtle)] flex items-center justify-between">
        <span>{isRtl ? 'ثبت المفاهيم الثلاثة قبل الجلسة القادمة' : 'Internalize These Three Principles'}</span>
        <span>{isRtl ? 'اضغط Space للمتابعة →' : 'Press Space to Continue →'}</span>
      </div>
    </div>
  );
};
