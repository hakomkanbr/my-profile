'use client';

import React from 'react';
import { ConceptSlidePayload, LocalizedString } from '@/types';
import { getLocalizedText } from '@/lib/utils';
import { usePreferencesStore } from '@/store';
import { Lightbulb, CheckCircle2, ShieldAlert } from 'lucide-react';

interface ConceptSlideProps {
  title: LocalizedString;
  payload: ConceptSlidePayload;
}

export const ConceptSlide: React.FC<ConceptSlideProps> = ({ title, payload }) => {
  const { language } = usePreferencesStore();
  const isRtl = language === 'ar';

  return (
    <div className="w-full h-full flex flex-col justify-between p-8 sm:p-14 lg:p-20 select-none overflow-y-auto text-start">
      {/* Top Header */}
      <div className="flex items-center justify-between border-b border-[var(--pres-border-subtle)] pb-4">
        <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-[var(--pres-accent)]">
          <Lightbulb className="w-4 h-4" />
          <span>{isRtl ? 'المفهوم المعماري الأساسي' : 'Core Engineering Mental Model'}</span>
        </div>
        <span className="text-xs font-mono text-[var(--pres-text-subtle)]">
          {getLocalizedText(title, language)}
        </span>
      </div>

      {/* Main Center Concept */}
      <div className="max-w-4xl space-y-6 my-auto py-6">
        <div className="space-y-2">
          <span className="text-xs font-mono font-extrabold uppercase tracking-widest text-[var(--pres-primary)] block">
            {getLocalizedText(payload.tagline, language)}
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-[var(--pres-text)] tracking-tight leading-tight">
            {getLocalizedText(payload.principle, language)}
          </h2>
        </div>

        {/* Explanation Card */}
        <p className="text-base sm:text-xl text-[var(--pres-text-muted)] font-normal leading-relaxed">
          {getLocalizedText(payload.explanation, language)}
        </p>

        {/* Key Points Grid */}
        {payload.bulletPoints && payload.bulletPoints.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
            {payload.bulletPoints.map((point, idx) => (
              <div
                key={idx}
                className="p-4 rounded-xl bg-[var(--pres-surface)] border border-[var(--pres-border)] flex items-start gap-3 shadow-xs"
              >
                <CheckCircle2 className="w-4 h-4 text-[var(--pres-primary)] mt-0.5 shrink-0" />
                <span className="text-xs sm:text-sm text-[var(--pres-text)] font-medium leading-relaxed">
                  {getLocalizedText(point, language)}
                </span>
              </div>
            ))}
          </div>
        )}

        {/* Architectural Golden Rule Callout */}
        {payload.architecturalRule && (
          <div className="p-4 sm:p-5 rounded-2xl bg-[var(--pres-surface-sunken)] border-2 border-[var(--pres-primary)]/40 flex items-start gap-3.5">
            <ShieldAlert className="w-5 h-5 text-[var(--pres-primary)] shrink-0 mt-0.5" />
            <div className="space-y-1">
              <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[var(--pres-primary)] block">
                {isRtl ? 'القاعدة المعمارية الذهبية' : 'Golden Architectural Rule'}
              </span>
              <p className="text-xs sm:text-sm font-bold text-[var(--pres-text)] leading-relaxed">
                {getLocalizedText(payload.architecturalRule, language)}
              </p>
            </div>
          </div>
        )}
      </div>

      {/* Footer */}
      <div className="border-t border-[var(--pres-border-subtle)] pt-4 text-xs font-mono text-[var(--pres-text-subtle)] flex items-center justify-between">
        <span>{isRtl ? 'الفهم العميق يتفوق على حفظ الدوال' : 'Deep Mental Models Outlast Frameworks'}</span>
        <span>{isRtl ? 'اضغط Space للمتابعة →' : 'Press Space to Continue →'}</span>
      </div>
    </div>
  );
};
