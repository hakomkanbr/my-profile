'use client';

import React from 'react';
import Link from 'next/link';
import { PresentationSession } from '@/types';
import { getLocalizedText } from '@/lib/utils';
import { usePreferencesStore } from '@/store';
import { CheckCircle2, ArrowRight, ArrowLeft, RotateCcw, Home } from 'lucide-react';

interface SessionEndModalProps {
  session: PresentationSession;
  onRestart: () => void;
  nextSessionUrl?: string;
}

export const SessionEndModal: React.FC<SessionEndModalProps> = ({
  session,
  onRestart,
  nextSessionUrl,
}) => {
  const { language } = usePreferencesStore();
  const isRtl = language === 'ar';

  return (
    <div className="fixed inset-0 z-50 bg-[var(--pres-bg)]/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-8 overflow-y-auto animate-in fade-in duration-200">
      <div className="max-w-2xl w-full rounded-3xl bg-[var(--pres-surface)] border-2 border-[var(--pres-border)] shadow-2xl p-6 sm:p-10 space-y-8 text-start relative overflow-hidden">
        {/* Header */}
        <div className="space-y-2 text-center sm:text-start">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-bold bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 uppercase tracking-wider">
            <CheckCircle2 className="w-3.5 h-3.5" />
            <span>{isRtl ? 'اكتملت الجلسة بنجاح' : 'Session Complete'}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-black text-[var(--pres-text)]">
            {getLocalizedText(session.endScreen.headline, language)}
          </h2>
        </div>

        {/* 3 Key Takeaways */}
        <div className="space-y-3">
          <span className="text-xs font-mono font-bold text-[var(--pres-primary)] uppercase tracking-wider block">
            {isRtl ? 'ما تعلمته وطبقته اليوم:' : 'Key Milestones Mastered Today:'}
          </span>
          <div className="space-y-2.5">
            {session.endScreen.keyRecap.map((recap, idx) => (
              <div
                key={idx}
                className="flex items-start gap-3 p-3.5 rounded-xl bg-[var(--pres-surface-sunken)] border border-[var(--pres-border-subtle)]"
              >
                <span className="w-6 h-6 rounded-full bg-[var(--pres-primary)] text-white text-xs font-mono font-bold flex items-center justify-center shrink-0 mt-0.5">
                  0{idx + 1}
                </span>
                <p className="text-sm font-medium text-[var(--pres-text)] leading-relaxed">
                  {getLocalizedText(recap, language)}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Next Session Box */}
        {session.endScreen.nextSessionTitle && (
          <div className="p-4 rounded-2xl bg-[var(--pres-surface-sunken)] border border-[var(--pres-border)] flex items-center justify-between gap-4">
            <div className="space-y-0.5">
              <span className="text-[10px] font-mono font-bold text-[var(--pres-accent)] uppercase">
                {isRtl ? 'الجلسة القادمة' : 'Up Next'} • SESSION {session.endScreen.nextSessionNumber}
              </span>
              <p className="text-sm font-bold text-[var(--pres-text)]">
                {getLocalizedText(session.endScreen.nextSessionTitle, language)}
              </p>
            </div>

            {nextSessionUrl && (
              <Link
                href={nextSessionUrl}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[var(--pres-primary)] text-white text-xs font-bold hover:opacity-90 transition-opacity shrink-0"
              >
                <span>{isRtl ? 'متابعة' : 'Continue'}</span>
                {isRtl ? <ArrowLeft className="w-3.5 h-3.5" /> : <ArrowRight className="w-3.5 h-3.5" />}
              </Link>
            )}
          </div>
        )}

        {/* Actions */}
        <div className="flex items-center justify-between pt-4 border-t border-[var(--pres-border)]">
          <button
            type="button"
            onClick={onRestart}
            className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-[var(--pres-text-muted)] hover:text-[var(--pres-text)] cursor-pointer"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>{isRtl ? 'إعادة تشغيل الجلسة' : 'Replay Session'}</span>
          </button>

          <Link
            href="/trainer/presentation"
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[var(--pres-surface-sunken)] border border-[var(--pres-border)] text-xs font-mono font-bold text-[var(--pres-text)] hover:bg-[var(--pres-border)] transition-colors"
          >
            <Home className="w-3.5 h-3.5" />
            <span>{isRtl ? 'فهرس الجلسات' : 'Course Hub'}</span>
          </Link>
        </div>
      </div>
    </div>
  );
};
