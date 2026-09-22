'use client';

import React from 'react';
import { ProjectSlidePayload, LocalizedString } from '@/types';
import { getLocalizedText } from '@/lib/utils';
import { usePreferencesStore } from '@/store';
import { Rocket, CheckCircle2, Link as LinkIcon } from 'lucide-react';

interface ProjectSlideProps {
  title: LocalizedString;
  payload: ProjectSlidePayload;
}

export const ProjectSlide: React.FC<ProjectSlideProps> = ({ title, payload }) => {
  const { language } = usePreferencesStore();
  const isRtl = language === 'ar';

  return (
    <div className="w-full h-full flex flex-col justify-between p-8 sm:p-14 lg:p-20 select-none overflow-y-auto text-start">
      {/* Top Header */}
      <div className="flex items-center justify-between border-b border-[var(--pres-border-subtle)] pb-4">
        <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-[var(--pres-primary)]">
          <Rocket className="w-4 h-4" />
          <span>{isRtl ? 'مشروع التخرج التدريجي المتصل' : 'Course Project Evolution Milestone'}</span>
        </div>
        <span className="text-xs font-mono text-[var(--pres-text-subtle)]">
          {getLocalizedText(title, language)}
        </span>
      </div>

      {/* Main Project Card */}
      <div className="max-w-4xl space-y-6 my-auto py-6">
        <div className="space-y-2">
          <div className="inline-block px-2.5 py-0.5 rounded text-xs font-mono font-bold bg-[var(--pres-primary)] text-white uppercase">
            STEP {payload.stepNumber} • {getLocalizedText(payload.phaseName, language)}
          </div>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-[var(--pres-text)] tracking-tight">
            {getLocalizedText(payload.whatWeBuildNow, language)}
          </h2>
        </div>

        {/* Deliverables List */}
        <div className="p-6 rounded-2xl bg-[var(--pres-surface)] border-2 border-[var(--pres-border)] space-y-3 shadow-xs">
          <span className="text-xs font-mono font-bold uppercase text-[var(--pres-primary)] block">
            {isRtl ? 'المخرجات البرمجية المضافة للمشروع في هذه الجلسة:' : 'Milestone Deliverables Added Now:'}
          </span>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {payload.deliverables.map((deliv, idx) => (
              <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[var(--pres-text-muted)]">
                <CheckCircle2 className="w-4 h-4 text-[var(--pres-primary)] mt-0.5 shrink-0" />
                <span className="leading-relaxed">{getLocalizedText(deliv, language)}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Connection to Big Picture */}
        <div className="p-4 sm:p-5 rounded-2xl bg-[var(--pres-surface-sunken)] border border-[var(--pres-primary)]/30 flex items-start gap-3">
          <LinkIcon className="w-5 h-5 text-[var(--pres-primary)] shrink-0 mt-0.5" />
          <div className="space-y-1">
            <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[var(--pres-primary)] block">
              {isRtl ? 'كيف يربط هذا الخطوة بمشروع الإطلاق النهائي؟' : 'Connection to Final Launch Showcase'}
            </span>
            <p className="text-xs sm:text-sm font-medium text-[var(--pres-text)] leading-relaxed">
              {getLocalizedText(payload.connectionToFinalProject, language)}
            </p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="border-t border-[var(--pres-border-subtle)] pt-4 text-xs font-mono text-[var(--pres-text-subtle)] flex items-center justify-between">
        <span>{isRtl ? 'كل سطر كود اليوم هو لبنة في معرض أعمالك' : 'Every Line Written Today is a Brick in Your Portfolio'}</span>
        <span>{isRtl ? 'اضغط Space للمتابعة →' : 'Press Space to Continue →'}</span>
      </div>
    </div>
  );
};
