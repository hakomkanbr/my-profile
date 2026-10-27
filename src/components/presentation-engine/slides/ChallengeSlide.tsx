'use client';

import React, { useState, useEffect } from 'react';
import { ChallengeSlidePayload, LocalizedString } from '@/types';
import { getLocalizedText } from '@/lib/utils';
import { usePreferencesStore } from '@/store';
import { Play, RotateCcw } from 'lucide-react';

interface ChallengeSlideProps {
  title: LocalizedString;
  payload: ChallengeSlidePayload;
}

export const ChallengeSlide: React.FC<ChallengeSlideProps> = ({
  title,
  payload,
}) => {
  const { language } = usePreferencesStore();
  const isRtl = language === 'ar';
  const totalSeconds = (payload.durationMinutes || 15) * 60;

  const [secondsLeft, setSecondsLeft] = useState(totalSeconds);
  const [running, setRunning] = useState(false);

  useEffect(() => {
    if (!running) return;
    const interval = setInterval(() => {
      setSecondsLeft((prev) => {
        if (prev <= 1) {
          setRunning(false);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, [running]);

  const mins = Math.floor(secondsLeft / 60);
  const secs = secondsLeft % 60;

  return (
    <div className="w-full h-full flex flex-col justify-between p-8 sm:p-14 lg:p-20 select-none overflow-y-auto text-start">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-[var(--pres-border)] pb-4">
        <span className="text-xs sm:text-sm font-mono font-bold text-[var(--pres-primary)]">
          {isRtl
            ? `نشاط تطبيقي للمتدرب (${payload.durationMinutes} دقيقة)`
            : `Practical Activity (${payload.durationMinutes} min)`}
        </span>
        <span className="text-xs sm:text-sm text-[var(--pres-text-muted)]">
          {getLocalizedText(title, language)}
        </span>
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 my-auto py-6 items-start max-w-6xl">
        <div className="lg:col-span-8 space-y-5">
          <div className="space-y-2">
            <h2 className="text-2xl sm:text-4xl font-black text-[var(--pres-text)] tracking-tight leading-snug">
              {getLocalizedText(payload.mission, language)}
            </h2>
            <p className="text-base sm:text-lg text-[var(--pres-text-muted)]">
              {getLocalizedText(payload.objective, language)}
            </p>
          </div>

          <div className="space-y-3">
            {payload.instructions.map((inst, idx) => (
              <div
                key={idx}
                className="p-4 sm:p-5 rounded-xl bg-[var(--pres-surface)] border border-[var(--pres-border)] flex items-start gap-3.5"
              >
                <span className="font-mono text-sm font-bold text-[var(--pres-primary)] shrink-0 mt-0.5">
                  0{idx + 1}
                </span>
                <span className="text-sm sm:text-base text-[var(--pres-text)] font-medium leading-relaxed">
                  {getLocalizedText(inst, language)}
                </span>
              </div>
            ))}
          </div>

          <div className="border-s-4 border-[var(--pres-primary)] ps-4 py-1">
            <span className="text-xs font-mono font-bold text-[var(--pres-text-muted)] block">
              {isRtl ? 'المطلوب بعد الانتهاء:' : 'Deliverable:'}
            </span>
            <p className="text-sm sm:text-base font-semibold text-[var(--pres-text)]">
              {getLocalizedText(payload.deliverable, language)}
            </p>
          </div>
        </div>

        {/* Clean Timer Box */}
        <div className="lg:col-span-4 p-6 rounded-xl bg-[var(--pres-surface)] border border-[var(--pres-border)] space-y-4 text-center">
          <span className="text-xs font-mono font-bold text-[var(--pres-text-muted)] block">
            {isRtl ? 'الوقت المتبقي للنشاط' : 'Activity Timer'}
          </span>
          <div className="font-mono text-4xl sm:text-5xl font-black text-[var(--pres-text)] tabular-nums">
            {String(mins).padStart(2, '0')}:{String(secs).padStart(2, '0')}
          </div>
          <div className="flex items-center justify-center gap-2 pt-2">
            <button
              type="button"
              onClick={() => setRunning(!running)}
              className="px-4 py-2 rounded-lg bg-[var(--pres-text)] text-[var(--pres-bg)] font-bold text-xs flex items-center gap-1.5 hover:opacity-90 transition-opacity cursor-pointer"
            >
              <Play className="w-3.5 h-3.5 fill-current" />
              <span>
                {running
                  ? isRtl
                    ? 'إيقاف مؤقت'
                    : 'Pause'
                  : isRtl
                    ? 'بدء الوقت'
                    : 'Start'}
              </span>
            </button>
            <button
              type="button"
              onClick={() => {
                setRunning(false);
                setSecondsLeft(totalSeconds);
              }}
              className="p-2 rounded-lg bg-[var(--pres-surface-sunken)] border border-[var(--pres-border)] text-[var(--pres-text-muted)] hover:text-[var(--pres-text)] transition-colors cursor-pointer"
              title="Reset"
            >
              <RotateCcw className="w-4 h-4" />
            </button>
          </div>
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
