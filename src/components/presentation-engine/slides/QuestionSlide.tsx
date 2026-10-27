'use client';

import React, { useState } from 'react';
import { QuestionSlidePayload, LocalizedString } from '@/types';
import { getLocalizedText } from '@/lib/utils';
import { usePreferencesStore } from '@/store';
import { ChevronDown } from 'lucide-react';

interface QuestionSlideProps {
  title: LocalizedString;
  payload: QuestionSlidePayload;
}

export const QuestionSlide: React.FC<QuestionSlideProps> = ({
  title,
  payload,
}) => {
  const { language } = usePreferencesStore();
  const isRtl = language === 'ar';
  const [showAnswers, setShowAnswers] = useState(false);

  return (
    <div className="w-full h-full flex flex-col justify-between p-8 sm:p-14 lg:p-20 select-none overflow-y-auto text-start">
      {/* Top Category Tag */}
      <div className="flex items-center justify-between border-b border-[var(--pres-border)] pb-4">
        <span className="text-xs sm:text-sm font-mono font-bold text-[var(--pres-primary)]">
          {isRtl ? 'سؤال للنقاش' : 'Discussion Question'}
        </span>
        <span className="text-xs sm:text-sm text-[var(--pres-text-muted)]">
          {getLocalizedText(title, language)}
        </span>
      </div>

      {/* Main Question */}
      <div className="max-w-4xl space-y-6 my-auto py-8">
        <h2 className="text-3xl sm:text-5xl font-black text-[var(--pres-text)] tracking-tight leading-[1.2]">
          {getLocalizedText(payload.question, language)}
        </h2>

        {payload.contextHint && (
          <p className="text-lg sm:text-xl text-[var(--pres-text-muted)] leading-relaxed max-w-3xl">
            {getLocalizedText(payload.contextHint, language)}
          </p>
        )}

        <div className="inline-block px-4 py-2.5 rounded-lg bg-[var(--pres-surface-sunken)] border border-[var(--pres-border)] text-sm font-medium text-[var(--pres-text)]">
          {getLocalizedText(payload.promptToClass, language)}
        </div>

        {/* Revealable Points */}
        {payload.expectedAnswers && payload.expectedAnswers.length > 0 && (
          <div className="pt-4 space-y-3">
            <button
              type="button"
              onClick={() => setShowAnswers(!showAnswers)}
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-[var(--pres-primary)] hover:underline cursor-pointer"
            >
              <ChevronDown
                className={`w-4 h-4 transition-transform ${showAnswers ? 'rotate-180' : ''}`}
              />
              <span>
                {showAnswers
                  ? isRtl
                    ? 'إخفاء محاور الإجابة'
                    : 'Hide Answer Points'
                  : isRtl
                    ? 'عرض محاور الإجابة بعد النقاش'
                    : 'Show Answer Points'}
              </span>
            </button>

            {showAnswers && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                {payload.expectedAnswers.map((ans, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-xl bg-[var(--pres-surface)] border border-[var(--pres-border)] flex items-start gap-3"
                  >
                    <span className="font-mono text-xs font-bold text-[var(--pres-primary)] mt-1 shrink-0">
                      0{idx + 1}
                    </span>
                    <span className="text-sm sm:text-base text-[var(--pres-text)] leading-relaxed">
                      {getLocalizedText(ans, language)}
                    </span>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </div>

      {/* Footer */}
      <div className="border-t border-[var(--pres-border-subtle)] pt-4 text-xs sm:text-sm text-[var(--pres-text-muted)] flex items-center justify-between">
        <span>{getLocalizedText(title, language)}</span>
        <span>{isRtl ? 'التالي ←' : 'Next →'}</span>
      </div>
    </div>
  );
};
