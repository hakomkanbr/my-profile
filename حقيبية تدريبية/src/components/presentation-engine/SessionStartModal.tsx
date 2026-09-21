'use client';

import React from 'react';
import { PresentationSession } from '@/types';
import { getLocalizedText } from '@/lib/utils';
import { usePreferencesStore, useTrainerStore } from '@/store';
import { Play, Clock, Target, Layers } from 'lucide-react';

interface SessionStartModalProps {
  session: PresentationSession;
  onStart: () => void;
}

export const SessionStartModal: React.FC<SessionStartModalProps> = ({ session, onStart }) => {
  const { language } = usePreferencesStore();
  const { viewMode, setViewMode } = useTrainerStore();
  const isRtl = language === 'ar';

  return (
    <div className="fixed inset-0 z-50 bg-[var(--pres-bg)]/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-8 overflow-y-auto animate-in fade-in duration-200">
      <div className="max-w-3xl w-full rounded-3xl bg-[var(--pres-surface)] border-2 border-[var(--pres-border)] shadow-2xl p-6 sm:p-10 space-y-8 text-start relative overflow-hidden">
        {/* Background Session Watermark */}
        <span className="absolute -top-12 -right-8 text-[180px] font-mono font-black text-[var(--pres-watermark)] select-none pointer-events-none">
          {String(session.number).padStart(2, '0')}
        </span>

        {/* Header Metadata */}
        <div className="space-y-3 relative z-10">
          <div className="flex flex-wrap items-center gap-2">
            <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-[var(--pres-primary)] text-white uppercase tracking-wider">
              {session.startScreen.badge || `SESSION ${String(session.number).padStart(2, '0')} / 12`}
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-bold bg-[var(--pres-surface-sunken)] border border-[var(--pres-border)] text-[var(--pres-text-muted)]">
              <Clock className="w-3.5 h-3.5 text-[var(--pres-accent)]" />
              <span>{session.durationMinutes} {isRtl ? 'دقيقة مباشرة' : 'Minutes Live'}</span>
            </span>
            <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-mono font-bold bg-[var(--pres-surface-sunken)] border border-[var(--pres-border)] text-[var(--pres-text-muted)]">
              <Layers className="w-3.5 h-3.5 text-[var(--pres-primary)]" />
              <span>{session.slides.length} {isRtl ? 'شريحة تفاعلية' : 'Slides'}</span>
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black text-[var(--pres-text)] tracking-tight">
            {getLocalizedText(session.title, language)}
          </h1>
          <p className="text-base sm:text-lg text-[var(--pres-secondary)] font-medium leading-relaxed max-w-2xl">
            {getLocalizedText(session.subtitle, language)}
          </p>
        </div>

        {/* Today's Goal Card */}
        <div className="p-5 sm:p-6 rounded-2xl bg-[var(--pres-surface-sunken)] border border-[var(--pres-border)] space-y-2 relative z-10">
          <div className="flex items-center gap-2 text-xs font-mono font-bold text-[var(--pres-primary)] uppercase tracking-wider">
            <Target className="w-4 h-4" />
            <span>{isRtl ? 'هدف الجلسة الأساسي' : "Today's Core Objective"}</span>
          </div>
          <p className="text-base font-medium text-[var(--pres-text)] leading-relaxed">
            {getLocalizedText(session.startScreen.sessionGoal, language)}
          </p>
        </div>

        {/* 90-Minute Timeline Breakdown */}
        {session.timeline && session.timeline.length > 0 && (
          <div className="space-y-3 relative z-10">
            <span className="text-xs font-mono font-bold text-[var(--pres-text-muted)] uppercase tracking-wider block">
              {isRtl ? 'خارطة التوقيت للجلسة (90 دقيقة)' : '90-Minute Session Flow'}
            </span>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              {session.timeline.slice(0, 4).map((item, idx) => (
                <div
                  key={idx}
                  className="p-3 rounded-xl bg-[var(--pres-surface-sunken)] border border-[var(--pres-border-subtle)] text-start space-y-1"
                >
                  <span className="text-[10px] font-mono text-[var(--pres-accent)] font-bold block">
                    {item.timeRange}
                  </span>
                  <p className="text-xs font-bold text-[var(--pres-text)] truncate">
                    {getLocalizedText(item.label, language)}
                  </p>
                  <span className="text-[10px] text-[var(--pres-text-subtle)] block">
                    {item.durationMinutes} min
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* View Mode Selection & Start Action */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-[var(--pres-border)] relative z-10">
          <div className="flex items-center gap-2 text-xs font-mono">
            <span className="text-[var(--pres-text-muted)]">{isRtl ? 'وضع العرض:' : 'Launch Mode:'}</span>
            <div className="inline-flex p-0.5 rounded-lg bg-[var(--pres-surface-sunken)] border border-[var(--pres-border)]">
              <button
                type="button"
                onClick={() => setViewMode('trainer')}
                className={`px-3 py-1 rounded-md transition-all cursor-pointer font-bold ${
                  viewMode === 'trainer'
                    ? 'bg-[var(--pres-primary)] text-white shadow-xs'
                    : 'text-[var(--pres-text-muted)] hover:text-[var(--pres-text)]'
                }`}
              >
                {isRtl ? 'غرفة المدرب (مع الأدوات)' : 'Trainer Mode'}
              </button>
              <button
                type="button"
                onClick={() => setViewMode('student')}
                className={`px-3 py-1 rounded-md transition-all cursor-pointer font-bold ${
                  viewMode === 'student'
                    ? 'bg-[var(--pres-primary)] text-white shadow-xs'
                    : 'text-[var(--pres-text-muted)] hover:text-[var(--pres-text)]'
                }`}
              >
                {isRtl ? 'شاشة الطالب (المحتوى فقط)' : 'Student View (Focus)'}
              </button>
            </div>
          </div>

          <button
            type="button"
            onClick={onStart}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3 rounded-xl bg-[var(--pres-primary)] text-white font-bold text-sm hover:opacity-95 shadow-lg shadow-[var(--pres-primary)]/20 transition-all cursor-pointer"
          >
            <Play className="w-4 h-4 fill-current" />
            <span>{isRtl ? 'بدء الجلسة الآن (Space)' : 'Start Session Now (Space)'}</span>
          </button>
        </div>
      </div>
    </div>
  );
};
