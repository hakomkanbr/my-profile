'use client';

import React from 'react';
import { ProjectSlidePayload, LocalizedString } from '@/types';
import { getLocalizedText } from '@/lib/utils';
import { usePreferencesStore } from '@/store';

interface ProjectSlideProps {
  title: LocalizedString;
  payload: ProjectSlidePayload;
}

export const ProjectSlide: React.FC<ProjectSlideProps> = ({
  title,
  payload,
}) => {
  const { language } = usePreferencesStore();
  const isRtl = language === 'ar';

  return (
    <div className="w-full h-full flex flex-col justify-between p-8 sm:p-14 lg:p-20 select-none overflow-y-auto text-start">
      {/* Top Header */}
      <div className="flex items-center justify-between border-b border-[var(--pres-border)] pb-4">
        <span className="text-xs sm:text-sm font-mono font-bold text-[var(--pres-primary)]">
          {isRtl ? `خطوة المشروع ${payload.stepNumber}` : `Project Milestone ${payload.stepNumber}`}
        </span>
        <span className="text-xs sm:text-sm text-[var(--pres-text-muted)]">
          {getLocalizedText(title, language)}
        </span>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl space-y-6 my-auto py-6">
        <div className="space-y-2">
          <span className="text-xs sm:text-sm font-semibold text-[var(--pres-text-muted)] block">
            {getLocalizedText(payload.phaseName, language)}
          </span>
          <h2 className="text-2xl sm:text-4xl font-black text-[var(--pres-text)] tracking-tight leading-snug">
            {getLocalizedText(payload.whatWeBuildNow, language)}
          </h2>
        </div>

        {/* Deliverables */}
        <div className="p-6 rounded-xl bg-[var(--pres-surface)] border border-[var(--pres-border)] space-y-4">
          <span className="text-xs sm:text-sm font-bold text-[var(--pres-primary)] block">
            {isRtl ? 'المخرجات المطلوبة في هذه المرحلة:' : 'Stage Deliverables:'}
          </span>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            {payload.deliverables.map((deliv, idx) => (
              <div
                key={idx}
                className="flex items-start gap-3 text-sm sm:text-base text-[var(--pres-text)]"
              >
                <span className="font-mono text-xs font-bold text-[var(--pres-primary)] mt-1 shrink-0">
                  0{idx + 1}
                </span>
                <span className="leading-relaxed">{getLocalizedText(deliv, language)}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="border-s-4 border-[var(--pres-primary)] ps-4 py-1">
          <p className="text-sm sm:text-base font-medium text-[var(--pres-text-muted)] leading-relaxed">
            {getLocalizedText(payload.connectionToFinalProject, language)}
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
