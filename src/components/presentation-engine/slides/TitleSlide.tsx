'use client';

import React from 'react';
import { TitleSlidePayload, LocalizedString } from '@/types';
import { getLocalizedText } from '@/lib/utils';
import { usePreferencesStore } from '@/store';
import { Clock } from 'lucide-react';

interface TitleSlideProps {
  payload: TitleSlidePayload;
  realWorldExample?: LocalizedString;
}

export const TitleSlide: React.FC<TitleSlideProps> = ({
  payload,
  realWorldExample,
}) => {
  const { language } = usePreferencesStore();
  const isRtl = language === 'ar';

  return (
    <div className="w-full h-full flex flex-col justify-between p-8 sm:p-14 lg:p-20 relative overflow-y-auto select-none text-start">
      {/* Subtle Session Number Watermark */}
      <div className="absolute top-12 end-14 text-[140px] sm:text-[200px] font-mono font-black text-[var(--pres-watermark)] leading-none pointer-events-none select-none">
        {payload.sessionNumber}
      </div>

      {/* Top Meta Bar */}
      <div className="flex flex-wrap items-center justify-between gap-4 relative z-10 border-b border-[var(--pres-border)] pb-5">
        <div className="flex items-center gap-3">
          <span className="px-3.5 py-1 rounded-md text-xs sm:text-sm font-mono font-bold bg-[var(--pres-text)] text-[var(--pres-bg)]">
            {isRtl
              ? `الدرس ${payload.sessionNumber} من ${payload.totalSessions}`
              : `Lesson ${payload.sessionNumber} / ${payload.totalSessions}`}
          </span>
          <span className="text-xs sm:text-sm font-semibold text-[var(--pres-text-muted)]">
            {getLocalizedText(payload.kicker, language)}
          </span>
        </div>

        <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-medium text-[var(--pres-text-muted)]">
          <Clock className="w-4 h-4 text-[var(--pres-primary)]" />
          <span>
            {isRtl
              ? `مدة الدرس: ${payload.durationMinutes} دقيقة (ساعة ونصف)`
              : `Duration: ${payload.durationMinutes} minutes`}
          </span>
        </div>
      </div>

      {/* Main Editorial Title Block */}
      <div className="max-w-4xl space-y-6 my-auto py-8 relative z-10">
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-[var(--pres-text)] tracking-tight leading-[1.18]">
          {getLocalizedText(payload.headline, language)}
        </h1>

        <p className="text-lg sm:text-2xl text-[var(--pres-text-muted)] font-normal leading-relaxed max-w-3xl">
          {getLocalizedText(payload.subheadline, language)}
        </p>

        {realWorldExample && (
          <div className="pt-2 border-s-4 border-[var(--pres-primary)] ps-5 py-1 max-w-3xl">
            <p className="text-base sm:text-lg font-medium text-[var(--pres-text)] leading-relaxed">
              {getLocalizedText(realWorldExample, language)}
            </p>
          </div>
        )}

        {payload.tags && payload.tags.length > 0 && (
          <div className="flex flex-wrap items-center gap-2.5 pt-4">
            {payload.tags.map((tag, idx) => (
              <span
                key={idx}
                className="px-3.5 py-1.5 rounded-md text-xs sm:text-sm font-medium bg-[var(--pres-surface)] border border-[var(--pres-border)] text-[var(--pres-text-muted)]"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>

      {/* Bottom Footer */}
      <div className="flex items-center justify-between border-t border-[var(--pres-border-subtle)] pt-4 text-xs sm:text-sm text-[var(--pres-text-muted)] relative z-10">
        <span>{isRtl ? 'مسار WEB CREATOR AI التدريبي' : 'WEB CREATOR AI Course'}</span>
        <span className="font-semibold text-[var(--pres-text)]">
          {isRtl ? 'اضغط المسافة أو السهم للمتابعة ←' : 'Press Space or Arrow to continue →'}
        </span>
      </div>
    </div>
  );
};
