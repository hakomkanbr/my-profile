'use client';

import React from 'react';
import { TitleSlidePayload } from '@/types';
import { getLocalizedText } from '@/lib/utils';
import { usePreferencesStore } from '@/store';
import { Clock } from 'lucide-react';

interface TitleSlideProps {
  payload: TitleSlidePayload;
}

export const TitleSlide: React.FC<TitleSlideProps> = ({ payload }) => {
  const { language } = usePreferencesStore();
  const isRtl = language === 'ar';

  return (
    <div className="relative w-full h-full flex flex-col justify-between p-8 sm:p-14 lg:p-20 select-none overflow-hidden text-start">
      {/* Huge Editorial Background Watermark */}
      <div className="absolute top-1/2 -translate-y-1/2 right-6 sm:right-16 text-[220px] sm:text-[340px] font-mono font-black text-[var(--pres-watermark)] leading-none pointer-events-none select-none">
        {payload.sessionNumber}
      </div>

      {/* Top Session Breadcrumb */}
      <div className="relative z-10 flex items-center justify-between border-b border-[var(--pres-border-subtle)] pb-4">
        <div className="flex items-center gap-3">
          <span className="font-mono text-xs font-black uppercase tracking-widest text-[var(--pres-primary)]">
            WEB CREATOR AI
          </span>
          <span className="text-[var(--pres-border)] font-mono">•</span>
          <span className="font-mono text-xs font-bold text-[var(--pres-text-subtle)]">
            LIVE CLASSROOM
          </span>
        </div>

        <div className="flex items-center gap-3">
          <span className="px-2.5 py-1 rounded-md bg-[var(--pres-surface-sunken)] border border-[var(--pres-border)] text-xs font-mono font-bold text-[var(--pres-secondary)]">
            SESSION {payload.sessionNumber} / {payload.totalSessions}
          </span>
          <span className="hidden sm:inline-flex items-center gap-1 text-xs font-mono text-[var(--pres-text-subtle)]">
            <Clock className="w-3.5 h-3.5" />
            <span>{payload.durationMinutes} min</span>
          </span>
        </div>
      </div>

      {/* Center Cinematic Content */}
      <div className="relative z-10 max-w-4xl space-y-6 my-auto py-8">
        <div className="inline-block px-3 py-1 rounded-md bg-[var(--pres-primary)] text-white text-xs font-mono font-extrabold uppercase tracking-widest">
          {getLocalizedText(payload.kicker, language)}
        </div>

        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black text-[var(--pres-text)] tracking-tight leading-[1.08]">
          {getLocalizedText(payload.headline, language)}
        </h1>

        <p className="text-xl sm:text-2xl text-[var(--pres-secondary)] font-medium leading-relaxed max-w-2xl">
          {getLocalizedText(payload.subheadline, language)}
        </p>

        {/* Tags */}
        {payload.tags && payload.tags.length > 0 && (
          <div className="flex flex-wrap gap-2 pt-4">
            {payload.tags.map((tag, idx) => (
              <span
                key={idx}
                className="px-3 py-1 rounded-md bg-[var(--pres-surface)] border border-[var(--pres-border)] text-xs font-mono font-semibold text-[var(--pres-text-muted)]"
              >
                #{tag}
              </span>
            ))}
          </div>
        )}
      </div>

      {/* Bottom Footer Ribbon */}
      <div className="relative z-10 flex items-center justify-between border-t border-[var(--pres-border-subtle)] pt-4 text-xs font-mono text-[var(--pres-text-subtle)]">
        <span>Build • Learn • Orchestrate</span>
        <span>{isRtl ? 'اضغط Space للبدء →' : 'Press Space to Begin →'}</span>
      </div>
    </div>
  );
};
