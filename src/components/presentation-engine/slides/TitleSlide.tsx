'use client';

import React from 'react';
import { TitleSlidePayload } from '@/types';
import { getLocalizedText } from '@/lib/utils';
import { usePreferencesStore } from '@/store';

interface TitleSlideProps {
  payload: TitleSlidePayload;
}

export const TitleSlide: React.FC<TitleSlideProps> = ({ payload }) => {
  const { language } = usePreferencesStore();
  const isRtl = language === 'ar';

  return (
    <div className="relative w-full h-full flex flex-col justify-center px-6 py-12 sm:px-12 lg:px-20 select-none overflow-hidden text-start">

      {/* Top Session Breadcrumb */}
      <div className="absolute top-7 inset-x-6 sm:inset-x-12 lg:inset-x-20 flex items-center justify-between border-b border-[var(--pres-border-subtle)] pb-3">
        <span className="text-sm font-semibold text-[var(--pres-primary)]">WEB CREATOR AI</span>
        <span className="text-sm text-[var(--pres-text-muted)]">
          {isRtl ? `الجلسة ${payload.sessionNumber} من ${payload.totalSessions}` : `Session ${payload.sessionNumber} of ${payload.totalSessions}`}
          <span className="mx-2">·</span>{payload.durationMinutes} {isRtl ? 'دقيقة' : 'min'}
        </span>
      </div>

      {/* Center Cinematic Content */}
      <div className="relative z-10 max-w-5xl space-y-6 py-8">
        <div className="text-base sm:text-lg font-semibold text-[var(--pres-primary)]">
          {getLocalizedText(payload.kicker, language)}
        </div>

        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black text-[var(--pres-text)] tracking-tight leading-[1.08]">
          {getLocalizedText(payload.headline, language)}
        </h1>

        <p className="text-2xl sm:text-3xl text-[var(--pres-secondary)] font-medium leading-relaxed max-w-4xl">
          {getLocalizedText(payload.subheadline, language)}
        </p>

      </div>

      {/* Bottom Footer Ribbon */}
      <div className="absolute bottom-7 inset-x-6 sm:inset-x-12 lg:inset-x-20 border-t border-[var(--pres-border-subtle)] pt-3 text-sm text-[var(--pres-text-muted)] flex items-center justify-between">
        <span>{isRtl ? 'هدف اليوم: فهم الفكرة وتطبيقها' : 'Today: understand the idea, then apply it'}</span>
        <span className="text-xs">{isRtl ? 'مسافة: ابدأ' : 'Space: begin'}</span>
      </div>
    </div>
  );
};
