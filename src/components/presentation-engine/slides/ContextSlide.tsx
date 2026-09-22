'use client';

import React from 'react';
import { ContextSlidePayload, LocalizedString } from '@/types';
import { getLocalizedText } from '@/lib/utils';
import { usePreferencesStore } from '@/store';
import { Compass, AlertCircle, Sparkles } from 'lucide-react';

interface ContextSlideProps {
  title: LocalizedString;
  subtitle?: LocalizedString;
  payload: ContextSlidePayload;
}

export const ContextSlide: React.FC<ContextSlideProps> = ({ title, subtitle, payload }) => {
  const { language } = usePreferencesStore();
  const isRtl = language === 'ar';

  return (
    <div className="w-full h-full flex flex-col justify-between p-8 sm:p-14 lg:p-20 select-none overflow-y-auto text-start">
      {/* Header */}
      <div className="space-y-2 border-b border-[var(--pres-border-subtle)] pb-4">
        <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-[var(--pres-accent)]">
          <Compass className="w-4 h-4" />
          <span>{isRtl ? 'السياق والواقع العملي' : 'Real-World Context & Industry Need'}</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-black text-[var(--pres-text)] tracking-tight">
          {getLocalizedText(title, language)}
        </h2>
        {subtitle && (
          <p className="text-lg text-[var(--pres-secondary)] font-medium">
            {getLocalizedText(subtitle, language)}
          </p>
        )}
      </div>

      {/* Main Context Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-auto py-6">
        {/* Card 1: Shift */}
        <div className="p-6 sm:p-8 rounded-2xl bg-[var(--pres-surface)] border-2 border-[var(--pres-border)] space-y-3 shadow-xs">
          <div className="w-10 h-10 rounded-xl bg-[var(--pres-primary)]/10 text-[var(--pres-primary)] flex items-center justify-center font-mono font-bold text-sm">
            01
          </div>
          <h3 className="text-lg font-bold text-[var(--pres-text)]">
            {isRtl ? 'التحول في الصناعة' : 'The Industry Shift'}
          </h3>
          <p className="text-sm text-[var(--pres-text-muted)] leading-relaxed">
            {getLocalizedText(payload.industryShift, language)}
          </p>
        </div>

        {/* Card 2: Problem */}
        <div className="p-6 sm:p-8 rounded-2xl bg-[var(--pres-surface)] border-2 border-[var(--pres-border)] space-y-3 shadow-xs">
          <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-600 dark:text-amber-400 flex items-center justify-center">
            <AlertCircle className="w-5 h-5" />
          </div>
          <h3 className="text-lg font-bold text-[var(--pres-text)]">
            {isRtl ? 'المشكلة الحقيقية' : 'The Real Challenge'}
          </h3>
          <p className="text-sm text-[var(--pres-text-muted)] leading-relaxed">
            {getLocalizedText(payload.realWorldProblem, language)}
          </p>
        </div>

        {/* Card 3: Why it Matters */}
        <div className="p-6 sm:p-8 rounded-2xl bg-[var(--pres-surface)] border-2 border-[var(--pres-primary)]/30 space-y-3 shadow-xs relative overflow-hidden">
          <div className="w-10 h-10 rounded-xl bg-[var(--pres-primary)] text-white flex items-center justify-center">
            <Sparkles className="w-5 h-5" />
          </div>
          <h3 className="text-lg font-bold text-[var(--pres-primary)]">
            {isRtl ? 'لماذا يهمنا الآن؟' : 'Why This Matters Today'}
          </h3>
          <p className="text-sm text-[var(--pres-text)] font-medium leading-relaxed">
            {getLocalizedText(payload.whyItMatters, language)}
          </p>
        </div>
      </div>

      {/* Footer Insight */}
      <div className="border-t border-[var(--pres-border-subtle)] pt-4 text-xs font-mono text-[var(--pres-text-subtle)] flex items-center justify-between">
        <span>{isRtl ? 'فهم المشكلة = 50% من الحل الهندسي' : 'Problem Understanding = 50% of the Solution'}</span>
        <span>{isRtl ? 'اضغط Space للمتابعة →' : 'Press Space to Continue →'}</span>
      </div>
    </div>
  );
};
