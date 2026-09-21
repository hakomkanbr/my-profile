'use client';

import React, { useState, useEffect } from 'react';
import { ThinkSlidePayload, LocalizedString } from '@/types';
import { getLocalizedText } from '@/lib/utils';
import { usePreferencesStore } from '@/store';
import { Brain, Play, RotateCcw } from 'lucide-react';

interface ThinkSlideProps {
  title: LocalizedString;
  payload: ThinkSlidePayload;
}

export const ThinkSlide: React.FC<ThinkSlideProps> = ({ title, payload }) => {
  const { language } = usePreferencesStore();
  const isRtl = language === 'ar';
  const duration = payload.durationSeconds || 30;

  const [timeLeft, setTimeLeft] = useState(duration);
  const [isRunning, setIsRunning] = useState(false);

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

  const handleReset = () => {
    setIsRunning(false);
    setTimeLeft(duration);
  };

  const progressPercent = ((duration - timeLeft) / duration) * 100;

  return (
    <div className="w-full h-full flex flex-col justify-between p-8 sm:p-14 lg:p-20 select-none overflow-y-auto text-start relative">
      {/* Top Header */}
      <div className="flex items-center justify-between border-b border-[var(--pres-border-subtle)] pb-4">
        <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-[var(--pres-accent)]">
          <Brain className="w-4 h-4" />
          <span>{isRtl ? 'وقت للتفكير والتأمل' : 'Deep Thinking Window'}</span>
        </div>
        <span className="text-xs font-mono text-[var(--pres-text-subtle)]">
          {getLocalizedText(title, language)}
        </span>
      </div>

      {/* Center Reflection Card */}
      <div className="max-w-3xl mx-auto w-full my-auto py-8 text-center space-y-8">
        <div className="space-y-4">
          <span className="text-xs font-mono uppercase tracking-widest text-[var(--pres-primary)] font-bold">
            {isRtl ? `توقف لـ ${duration} ثانية للتفكير` : `Pause for ${duration} seconds`}
          </span>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-[var(--pres-text)] tracking-tight leading-tight">
            {getLocalizedText(payload.prompt, language)}
          </h2>
        </div>

        {/* Circular / Bar Countdown Display */}
        <div className="max-w-md mx-auto space-y-4">
          <div className="font-mono text-6xl sm:text-7xl font-black text-[var(--pres-text)] tabular-nums">
            00:{String(timeLeft).padStart(2, '0')}
          </div>

          <div className="w-full h-2 rounded-full bg-[var(--pres-surface-sunken)] border border-[var(--pres-border)] overflow-hidden">
            <div
              className="h-full bg-[var(--pres-primary)] transition-all duration-1000 ease-linear"
              style={{ width: `${progressPercent}%` }}
            />
          </div>

          {/* Interactive Controls */}
          <div className="flex items-center justify-center gap-3 pt-2">
            <button
              type="button"
              onClick={() => setIsRunning(!isRunning)}
              className="inline-flex items-center gap-2 px-5 py-2 rounded-xl text-xs font-mono font-bold bg-[var(--pres-primary)] text-white hover:opacity-90 transition-all cursor-pointer shadow-md shadow-[var(--pres-primary)]/20"
            >
              {isRunning ? 'Pause' : timeLeft === 0 ? 'Restart' : 'Start Timer'}
              <Play className="w-3.5 h-3.5 fill-current" />
            </button>
            <button
              type="button"
              onClick={handleReset}
              className="p-2 rounded-xl bg-[var(--pres-surface-sunken)] border border-[var(--pres-border)] text-[var(--pres-text-muted)] hover:text-[var(--pres-text)] transition-colors cursor-pointer"
              title="Reset"
            >
              <RotateCcw className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Guidance Bullet Points */}
        {payload.guidancePoints && payload.guidancePoints.length > 0 && (
          <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-3 text-start">
            {payload.guidancePoints.map((pt, idx) => (
              <div
                key={idx}
                className="p-3 rounded-xl bg-[var(--pres-surface)] border border-[var(--pres-border)] flex items-center gap-2.5"
              >
                <div className="w-5 h-5 rounded-full bg-[var(--pres-primary)]/10 text-[var(--pres-primary)] text-xs font-mono font-bold flex items-center justify-center shrink-0">
                  {idx + 1}
                </div>
                <span className="text-xs text-[var(--pres-text-muted)] font-medium">
                  {getLocalizedText(pt, language)}
                </span>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Footer */}
      <div className="border-t border-[var(--pres-border-subtle)] pt-4 text-xs font-mono text-[var(--pres-text-subtle)] flex items-center justify-between">
        <span>{isRtl ? 'الهدوء قبل اتخاذ القرار البرمجي' : 'Silence Before Engineering Decision'}</span>
        <span>{isRtl ? 'اضغط Space للمتابعة →' : 'Press Space to Continue →'}</span>
      </div>
    </div>
  );
};
