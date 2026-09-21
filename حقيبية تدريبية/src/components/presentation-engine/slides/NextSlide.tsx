'use client';

import React from 'react';
import { NextSlidePayload, LocalizedString } from '@/types';
import { getLocalizedText } from '@/lib/utils';
import { usePreferencesStore } from '@/store';
import { ArrowRight, ArrowLeft, FastForward } from 'lucide-react';

interface NextSlideProps {
  title: LocalizedString;
  payload: NextSlidePayload;
}

export const NextSlide: React.FC<NextSlideProps> = ({ title, payload }) => {
  const { language } = usePreferencesStore();
  const isRtl = language === 'ar';

  return (
    <div className="w-full h-full flex flex-col justify-between p-8 sm:p-14 lg:p-20 select-none overflow-y-auto text-start relative">
      {/* Background session number indicator */}
      <div className="absolute bottom-6 right-10 text-[200px] font-mono font-black text-[var(--pres-watermark)] pointer-events-none select-none">
        {payload.nextSessionNumber}
      </div>

      {/* Top Header */}
      <div className="flex items-center justify-between border-b border-[var(--pres-border-subtle)] pb-4 relative z-10">
        <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-[var(--pres-accent)]">
          <FastForward className="w-4 h-4" />
          <span>{isRtl ? 'المحطة التالية في الرحلة' : 'Next Curriculum Waypoint'}</span>
        </div>
        <span className="text-xs font-mono text-[var(--pres-text-subtle)]">
          {getLocalizedText(title, language)}
        </span>
      </div>

      {/* Center Transition Teaser */}
      <div className="max-w-3xl space-y-6 my-auto py-8 relative z-10">
        <div className="space-y-2">
          <span className="text-xs font-mono font-black uppercase tracking-widest text-[var(--pres-primary)] block">
            UP NEXT • SESSION {payload.nextSessionNumber}
          </span>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-[var(--pres-text)] tracking-tight">
            {getLocalizedText(payload.nextSessionTitle, language)}
          </h2>
        </div>

        <p className="text-base sm:text-xl text-[var(--pres-secondary)] font-medium leading-relaxed max-w-2xl">
          {getLocalizedText(payload.teaser, language)}
        </p>

        {/* Preparation Hint Box */}
        {payload.preparationHint && (
          <div className="p-4 sm:p-5 rounded-2xl bg-[var(--pres-surface)] border border-[var(--pres-border)] space-y-1.5 shadow-xs">
            <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[var(--pres-accent)] block">
              {isRtl ? 'ما الذي تحتاجه قبل الجلسة القادمة؟' : 'Preparation Checklist:'}
            </span>
            <p className="text-xs sm:text-sm text-[var(--pres-text-muted)] leading-relaxed">
              {getLocalizedText(payload.preparationHint, language)}
            </p>
          </div>
        )}
      </div>

      {/* Footer */}
      <div className="border-t border-[var(--pres-border-subtle)] pt-4 text-xs font-mono text-[var(--pres-text-subtle)] flex items-center justify-between relative z-10">
        <span>{isRtl ? 'استمر في البناء خطوة بخطوة' : 'Consistent Iteration Drives Mastery'}</span>
        <span className="flex items-center gap-1 font-bold text-[var(--pres-primary)]">
          <span>{isRtl ? 'إنهاء الجلسة (Space)' : 'Conclude Session (Space)'}</span>
          {isRtl ? <ArrowLeft className="w-3.5 h-3.5" /> : <ArrowRight className="w-3.5 h-3.5" />}
        </span>
      </div>
    </div>
  );
};
