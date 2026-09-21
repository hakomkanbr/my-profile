'use client';

import React, { useState } from 'react';
import { QuestionSlidePayload, LocalizedString } from '@/types';
import { getLocalizedText } from '@/lib/utils';
import { usePreferencesStore, useTrainerStore } from '@/store';
import { HelpCircle, MessageSquare, ChevronDown, CheckCircle2 } from 'lucide-react';

interface QuestionSlideProps {
  title: LocalizedString;
  payload: QuestionSlidePayload;
}

export const QuestionSlide: React.FC<QuestionSlideProps> = ({ title, payload }) => {
  const { language } = usePreferencesStore();
  const { viewMode } = useTrainerStore();
  const isRtl = language === 'ar';
  const [showAnswers, setShowAnswers] = useState(false);

  return (
    <div className="w-full h-full flex flex-col justify-between p-8 sm:p-14 lg:p-20 select-none overflow-y-auto text-start">
      {/* Top Category Tag */}
      <div className="flex items-center justify-between border-b border-[var(--pres-border-subtle)] pb-4">
        <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-[var(--pres-primary)]">
          <HelpCircle className="w-4 h-4" />
          <span>{isRtl ? 'سؤال للنقاش التفاعلي' : 'Live Interactive Question'}</span>
        </div>
        <span className="text-xs font-mono text-[var(--pres-text-subtle)]">
          {getLocalizedText(title, language)}
        </span>
      </div>

      {/* Main Center Question */}
      <div className="max-w-4xl space-y-6 my-auto py-6">
        <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-[var(--pres-text)] tracking-tight leading-[1.15]">
          {getLocalizedText(payload.question, language)}
        </h2>

        {payload.contextHint && (
          <p className="text-lg sm:text-xl text-[var(--pres-secondary)] font-medium leading-relaxed max-w-2xl">
            {getLocalizedText(payload.contextHint, language)}
          </p>
        )}

        {/* Prompt to Class Box */}
        <div className="inline-flex items-center gap-2.5 px-4 py-2.5 rounded-xl bg-[var(--pres-surface-sunken)] border border-[var(--pres-border)] text-sm font-mono font-bold text-[var(--pres-accent)]">
          <MessageSquare className="w-4 h-4" />
          <span>{getLocalizedText(payload.promptToClass, language)}</span>
        </div>

        {/* Expected Answers Accordion (Available to Trainer or revealable) */}
        {payload.expectedAnswers && payload.expectedAnswers.length > 0 && (
          <div className="pt-4 space-y-3 max-w-3xl">
            <button
              type="button"
              onClick={() => setShowAnswers(!showAnswers)}
              className="inline-flex items-center gap-2 text-xs font-mono font-bold text-[var(--pres-text-muted)] hover:text-[var(--pres-text)] cursor-pointer"
            >
              <ChevronDown
                className={`w-4 h-4 transition-transform ${showAnswers ? 'rotate-180' : ''}`}
              />
              <span>
                {showAnswers
                  ? (isRtl ? 'إخفاء الإجابات النموذجية' : 'Hide Expected Answers')
                  : (isRtl ? 'كشف الإجابات والمحاور الأساسية' : 'Reveal Expected Points')}
              </span>
            </button>

            {(showAnswers || viewMode === 'trainer') && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 animate-in fade-in duration-200">
                {payload.expectedAnswers.map((ans, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 rounded-xl bg-[var(--pres-surface)] border border-[var(--pres-border)] flex items-start gap-2.5"
                  >
                    <CheckCircle2 className="w-4 h-4 text-[var(--pres-primary)] mt-0.5 shrink-0" />
                    <span className="text-xs sm:text-sm text-[var(--pres-text)] font-medium leading-relaxed">
                      {getLocalizedText(ans, language)}
                    </span>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </div>

      {/* Footer Ribbon */}
      <div className="border-t border-[var(--pres-border-subtle)] pt-4 text-xs font-mono text-[var(--pres-text-subtle)] flex items-center justify-between">
        <span>{isRtl ? 'شارك إجابتك في شات Zoom 💬' : 'Drop your thought in the Zoom chat 💬'}</span>
        <span>{isRtl ? 'اضغط Space للمتابعة →' : 'Press Space to Continue →'}</span>
      </div>
    </div>
  );
};
