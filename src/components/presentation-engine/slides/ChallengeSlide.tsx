'use client';

import React, { useState, useEffect } from 'react';
import { ChallengeSlidePayload, LocalizedString } from '@/types';
import { getLocalizedText } from '@/lib/utils';
import { usePreferencesStore } from '@/store';
import { Clock, Play, RotateCcw, CheckCircle2, Copy, Check } from 'lucide-react';

interface ChallengeSlideProps {
  title: LocalizedString;
  payload: ChallengeSlidePayload;
}

export const ChallengeSlide: React.FC<ChallengeSlideProps> = ({ title, payload }) => {
  const { language } = usePreferencesStore();
  const isRtl = language === 'ar';
  const totalSeconds = (payload.durationMinutes || 5) * 60;

  const [timeLeft, setTimeLeft] = useState(totalSeconds);
  const [isRunning, setIsRunning] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!isRunning) return;
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          setIsRunning(false);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, [isRunning]);

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;
  const formattedTime = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;

  const handleCopyPrompt = () => {
    if (!payload.starterPromptOrCode) return;
    navigator.clipboard.writeText(payload.starterPromptOrCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="w-full h-full flex flex-col justify-center px-6 py-12 sm:px-12 lg:px-20 select-none overflow-y-auto text-start">
      {/* Top Header */}
      <div className="max-w-5xl flex items-center justify-between border-b border-[var(--pres-border-subtle)] pb-4">
        <span className="text-sm font-semibold text-[var(--pres-primary)]">{isRtl ? 'طبّق الآن' : 'Your turn'}</span>
        <span className="text-sm text-[var(--pres-text-muted)]">{getLocalizedText(title, language)}</span>
      </div>

      {/* Main Challenge Area */}
      <div className="max-w-5xl space-y-5 py-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="space-y-1">
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-[var(--pres-text)] tracking-tight leading-tight">
              {getLocalizedText(payload.mission, language)}
            </h2>
          </div>

          {/* Embedded Challenge Countdown Timer */}
          <div className="py-2 px-3 border-s border-[var(--pres-primary)] flex items-center gap-3 shrink-0">
            <Clock className="w-5 h-5 text-[var(--pres-primary)]" />
            <div className="font-mono text-2xl sm:text-3xl font-black text-[var(--pres-text)] tabular-nums">
              {formattedTime}
            </div>
            <div className="flex items-center gap-1">
              <button
                type="button"
                onClick={() => setIsRunning(!isRunning)}
                className="p-1.5 rounded-lg bg-[var(--pres-primary)] text-white hover:opacity-90 transition-opacity cursor-pointer"
                title={isRtl ? (isRunning ? 'إيقاف مؤقت' : 'بدء') : (isRunning ? 'Pause' : 'Start')}
                aria-label={isRtl ? (isRunning ? 'إيقاف المؤقت مؤقتًا' : 'بدء المؤقت') : (isRunning ? 'Pause timer' : 'Start timer')}
              >
                <Play className="w-3.5 h-3.5 fill-current" />
              </button>
              <button
                type="button"
                onClick={() => {
                  setIsRunning(false);
                  setTimeLeft(totalSeconds);
                }}
                className="p-1.5 rounded-lg bg-[var(--pres-surface-sunken)] border border-[var(--pres-border)] text-[var(--pres-text-muted)] hover:text-[var(--pres-text)] transition-colors cursor-pointer"
                title={isRtl ? 'إعادة ضبط' : 'Reset'}
                aria-label={isRtl ? 'إعادة ضبط المؤقت' : 'Reset timer'}
              >
                <RotateCcw className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>

        {/* Objective & Instructions */}
        <div className="space-y-4">
          <p className="text-lg sm:text-xl text-[var(--pres-secondary)] font-medium">
            {getLocalizedText(payload.objective, language)}
          </p>

          <div className="py-3 border-y border-[var(--pres-border)] space-y-3">
            <span className="text-sm font-semibold text-[var(--pres-text)] block">
              {isRtl ? 'الخطوات' : 'Steps'}
            </span>
            <div className="space-y-2">
              {payload.instructions.map((inst, idx) => (
              <div key={idx} className="flex items-start gap-3 text-base sm:text-lg text-[var(--pres-text)]">
                  <CheckCircle2 className="w-5 h-5 text-[var(--pres-primary)] shrink-0 mt-1" />
                  <span className="leading-relaxed">{getLocalizedText(inst, language)}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Starter Prompt or Code snippet if available */}
        {payload.starterPromptOrCode && (
          <div className="p-3 rounded-lg bg-[var(--pres-code-bg)] border border-[var(--pres-code-border)] flex items-center justify-between gap-3 text-left" dir="ltr">
            <pre className="text-xs font-mono text-neutral-300 truncate max-w-xl">
              {payload.starterPromptOrCode}
            </pre>
            <button
              type="button"
              onClick={handleCopyPrompt}
              className="inline-flex items-center gap-1 px-3 py-1 rounded bg-white/10 hover:bg-white/20 text-neutral-200 text-xs font-mono shrink-0 cursor-pointer"
            >
              {copied ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
              <span>{copied ? 'Copied' : 'Copy'}</span>
            </button>
          </div>
        )}

        {/* Deliverable Callout */}
        <div className="p-3 border-s-4 border-[var(--pres-primary)] bg-[var(--pres-surface-sunken)] flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 text-base">
          <span className="text-[var(--pres-text-muted)]">
            {isRtl ? 'المخرج النهائي المطلوب تقديمه:' : 'Required Student Deliverable:'}
          </span>
          <span className="font-bold text-[var(--pres-primary)] sm:text-end">
            {getLocalizedText(payload.deliverable, language)}
          </span>
        </div>
      </div>

      {/* Footer */}
      <div className="max-w-5xl border-t border-[var(--pres-border-subtle)] pt-4 text-sm text-[var(--pres-text-muted)] flex items-center justify-between">
        <span>{isRtl ? 'أنجز المطلوب ثم شارك النتيجة' : 'Complete the task, then share your result'}</span>
        <span className="text-xs">{isRtl ? 'مسافة: التالي' : 'Space: next'}</span>
      </div>
    </div>
  );
};
