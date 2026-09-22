'use client';

import React from 'react';
import { useTrainerStore } from '@/store';
import { Play, Pause, RotateCcw, Clock } from 'lucide-react';

interface PresentationTimerProps {
  compact?: boolean;
}

export const PresentationTimer: React.FC<PresentationTimerProps> = ({ compact = false }) => {
  const {
    timerMinutes,
    timerSeconds,
    isTimerRunning,
    startTimer,
    pauseTimer,
    resetTimer,
    setTimer,
  } = useTrainerStore();

  const formattedTime = `${String(timerMinutes).padStart(2, '0')}:${String(timerSeconds).padStart(2, '0')}`;

  if (compact) {
    return (
      <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-[var(--pres-surface-sunken)] border border-[var(--pres-border)] text-xs font-mono font-bold text-[var(--pres-text)] shadow-xs">
        <Clock className="w-3.5 h-3.5 text-[var(--pres-accent)]" />
        <span className="tabular-nums text-sm">{formattedTime}</span>
        <button
          type="button"
          onClick={isTimerRunning ? pauseTimer : startTimer}
          className="p-1 hover:text-[var(--pres-primary)] transition-colors cursor-pointer"
          title={isTimerRunning ? 'Pause (T)' : 'Start (T)'}
          aria-label={isTimerRunning ? 'Pause' : 'Start'}
        >
          {isTimerRunning ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
        </button>
        <button
          type="button"
          onClick={() => resetTimer(5)}
          className="p-1 hover:text-[var(--pres-primary)] transition-colors cursor-pointer"
          title="Reset"
          aria-label="Reset"
        >
          <RotateCcw className="w-3.5 h-3.5" />
        </button>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center gap-2 p-3 rounded-xl bg-[var(--pres-surface)] border border-[var(--pres-border)] shadow-md">
      <div className="flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-wider text-[var(--pres-text-muted)]">
        <Clock className="w-4 h-4 text-[var(--pres-primary)]" />
        <span>Interactive Timer</span>
      </div>

      <div className="font-mono text-3xl font-extrabold tracking-wider text-[var(--pres-text)] tabular-nums">
        {formattedTime}
      </div>

      {/* Preset controls */}
      <div className="flex items-center gap-1.5">
        <button
          type="button"
          onClick={() => setTimer(0, 30)}
          className="px-2 py-0.5 rounded text-[11px] font-mono font-bold bg-[var(--pres-surface-sunken)] hover:bg-[var(--pres-border)] text-[var(--pres-text-muted)] hover:text-[var(--pres-text)] transition-colors"
        >
          00:30 Think
        </button>
        <button
          type="button"
          onClick={() => setTimer(5, 0)}
          className="px-2 py-0.5 rounded text-[11px] font-mono font-bold bg-[var(--pres-surface-sunken)] hover:bg-[var(--pres-border)] text-[var(--pres-text-muted)] hover:text-[var(--pres-text)] transition-colors"
        >
          05:00 Challenge
        </button>
        <button
          type="button"
          onClick={() => setTimer(15, 0)}
          className="px-2 py-0.5 rounded text-[11px] font-mono font-bold bg-[var(--pres-surface-sunken)] hover:bg-[var(--pres-border)] text-[var(--pres-text-muted)] hover:text-[var(--pres-text)] transition-colors"
        >
          15:00 Practice
        </button>
      </div>

      {/* Action buttons */}
      <div className="flex items-center gap-2 pt-1">
        <button
          type="button"
          onClick={isTimerRunning ? pauseTimer : startTimer}
          className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md text-xs font-bold bg-[var(--pres-primary)] text-white hover:opacity-90 transition-opacity cursor-pointer"
        >
          {isTimerRunning ? (
            <>
              <Pause className="w-3.5 h-3.5" />
              <span>Pause</span>
            </>
          ) : (
            <>
              <Play className="w-3.5 h-3.5" />
              <span>Start</span>
            </>
          )}
        </button>

        <button
          type="button"
          onClick={() => resetTimer(5)}
          className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md text-xs font-medium bg-[var(--pres-surface-sunken)] border border-[var(--pres-border)] text-[var(--pres-text-muted)] hover:text-[var(--pres-text)] transition-colors cursor-pointer"
        >
          <RotateCcw className="w-3 h-3" />
          <span>Reset</span>
        </button>
      </div>
    </div>
  );
};
