'use client';

import React, { useState } from 'react';
import { usePreferencesStore } from '@/store';
import { getLocalizedText } from '@/lib/utils';
import {
  SlideQuizInteraction,
  SlideRevealInteraction,
  SlideCodeInteraction,
  SlideChecklistInteraction,
} from '@/types';
import { Button } from '@/components/ui';
import { CheckCircle2, XCircle, HelpCircle, Eye, CheckSquare, Square, Code2 } from 'lucide-react';

/* 1. Slide Quiz Widget */
export const SlideQuizWidget: React.FC<{ interaction: SlideQuizInteraction }> = ({ interaction }) => {
  const { language } = usePreferencesStore();
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [hasSubmitted, setHasSubmitted] = useState(false);

  const isCorrect = selectedIndex === interaction.correctAnswerIndex;

  return (
    <div className="p-6 sm:p-8 rounded-xl bg-[var(--color-surface)] border border-[var(--color-border)] space-y-5 text-start">
      <div className="flex items-center gap-2 text-xs font-mono font-bold text-[var(--color-primary)] uppercase">
        <HelpCircle className="w-4 h-4" />
        <span>{language === 'ar' ? 'سؤال سريع لفهم المفهوم' : 'Quick Concept Check'}</span>
      </div>

      <h4 className="text-body sm:text-h4 font-bold text-[var(--color-text)]">
        {getLocalizedText(interaction.question, language)}
      </h4>

      <div className="space-y-2.5">
        {interaction.options.map((opt, idx) => {
          const isThisSelected = selectedIndex === idx;
          const isThisCorrect = idx === interaction.correctAnswerIndex;

          let btnStyles = 'border-[var(--color-border)] bg-[var(--color-surface-sunken)] text-[var(--color-text)] hover:border-[var(--color-primary)]';

          if (hasSubmitted) {
            if (isThisCorrect) {
              btnStyles = 'border-[var(--color-success)] bg-[var(--color-success-bg)] text-[var(--color-success)] font-bold';
            } else if (isThisSelected) {
              btnStyles = 'border-[var(--color-error)] bg-[var(--color-error-bg)] text-[var(--color-error)]';
            } else {
              btnStyles = 'border-[var(--color-border-subtle)] opacity-50';
            }
          } else if (isThisSelected) {
            btnStyles = 'border-[var(--color-primary)] bg-[var(--color-primary-subtle)] text-[var(--color-primary)] font-bold';
          }

          return (
            <button
              key={idx}
              type="button"
              disabled={hasSubmitted}
              onClick={() => setSelectedIndex(idx)}
              className={`w-full p-3.5 rounded-lg border text-start text-xs sm:text-body-sm transition-all flex items-center justify-between cursor-pointer ${btnStyles}`}
            >
              <span>{getLocalizedText(opt, language)}</span>
              {hasSubmitted && isThisCorrect && <CheckCircle2 className="w-4 h-4 text-[var(--color-success)] shrink-0" />}
              {hasSubmitted && isThisSelected && !isThisCorrect && <XCircle className="w-4 h-4 text-[var(--color-error)] shrink-0" />}
            </button>
          );
        })}
      </div>

      {!hasSubmitted ? (
        <div className="pt-2">
          <Button
            size="sm"
            variant="primary"
            disabled={selectedIndex === null}
            onClick={() => setHasSubmitted(true)}
          >
            {language === 'ar' ? 'تحقق من الإجابة' : 'Check Answer'}
          </Button>
        </div>
      ) : (
        <div className={`p-4 rounded-lg text-xs sm:text-body-sm leading-relaxed border ${
          isCorrect ? 'bg-[var(--color-success-bg)] border-[var(--color-success-border)] text-[var(--color-success)]' : 'bg-[var(--color-surface-sunken)] border-[var(--color-border)] text-[var(--color-text-muted)]'
        }`}>
          <span className="font-bold block mb-1">
            {isCorrect ? (language === 'ar' ? 'إجابة ممتازة وموفقة!' : 'Correctly Answered!') : (language === 'ar' ? 'توضيح المفهوم:' : 'Explanation:')}
          </span>
          {getLocalizedText(interaction.explanation, language)}
        </div>
      )}
    </div>
  );
};

/* 2. Slide Reveal (Before / After Comparison) */
export const SlideRevealWidget: React.FC<{ interaction: SlideRevealInteraction }> = ({ interaction }) => {
  const { language } = usePreferencesStore();
  const [showAfter, setShowAfter] = useState(false);

  return (
    <div className="p-6 sm:p-8 rounded-xl bg-[var(--color-surface)] border border-[var(--color-border)] space-y-5 text-start">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2 text-xs font-mono font-bold text-[var(--color-secondary)] uppercase">
          <Eye className="w-4 h-4" />
          <span>{language === 'ar' ? 'مقارنة معمارية: قبل وبعد' : 'Architecture Comparison: Before & After'}</span>
        </div>

        <button
          type="button"
          onClick={() => setShowAfter(!showAfter)}
          className="px-3 py-1.5 rounded-md text-xs font-mono font-bold border border-[var(--color-primary)] bg-[var(--color-primary)] text-white hover:bg-[var(--color-primary-hover)] transition-colors cursor-pointer"
        >
          {showAfter
            ? (language === 'ar' ? 'عرض الكود السابق (Before)' : 'Show Before')
            : (language === 'ar' ? 'كشف الكود الاحترافي (Reveal)' : 'Reveal Optimized')}
        </button>
      </div>

      <div className="space-y-2">
        <span className="font-mono text-xs font-bold text-[var(--color-primary)]">
          {showAfter ? getLocalizedText(interaction.afterLabel, language) : getLocalizedText(interaction.beforeLabel, language)}
        </span>

        <pre className="p-4 rounded-lg bg-[var(--color-code-bg)] border border-[var(--color-code-border)] text-[var(--color-code-text)] font-mono text-xs overflow-x-auto leading-relaxed">
          <code>
            {showAfter ? getLocalizedText(interaction.afterContent, language) : getLocalizedText(interaction.beforeContent, language)}
          </code>
        </pre>
      </div>

      {interaction.note && (
        <p className="text-caption sm:text-body-sm text-[var(--color-text-muted)] italic">
          {getLocalizedText(interaction.note, language)}
        </p>
      )}
    </div>
  );
};

/* 3. Slide Code Widget */
export const SlideCodeWidget: React.FC<{ interaction: SlideCodeInteraction }> = ({ interaction }) => {
  const { language } = usePreferencesStore();

  return (
    <div className="p-6 sm:p-8 rounded-xl bg-[var(--color-surface)] border border-[var(--color-border)] space-y-4 text-start">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2 text-xs font-mono font-bold text-[var(--color-primary)] uppercase">
          <Code2 className="w-4 h-4" />
          <span>{getLocalizedText(interaction.title, language)}</span>
        </div>
        <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-[var(--color-surface-sunken)] border border-[var(--color-border)] text-[var(--color-text-subtle)] uppercase">
          {interaction.language}
        </span>
      </div>

      <pre className="p-4 rounded-lg bg-[var(--color-code-bg)] border border-[var(--color-code-border)] text-[var(--color-code-text)] font-mono text-xs overflow-x-auto leading-relaxed">
        <code>{interaction.code}</code>
      </pre>

      <p className="text-caption sm:text-body-sm text-[var(--color-text-muted)] leading-relaxed">
        {getLocalizedText(interaction.explanation, language)}
      </p>
    </div>
  );
};

/* 4. Slide Checklist Widget */
export const SlideChecklistWidget: React.FC<{ interaction: SlideChecklistInteraction }> = ({ interaction }) => {
  const { language } = usePreferencesStore();
  const [checkedMap, setCheckedMap] = useState<Record<number, boolean>>({});

  const toggleItem = (idx: number) => {
    setCheckedMap((prev) => ({ ...prev, [idx]: !prev[idx] }));
  };

  return (
    <div className="p-6 sm:p-8 rounded-xl bg-[var(--color-surface)] border border-[var(--color-border)] space-y-4 text-start">
      <div className="flex items-center gap-2 text-xs font-mono font-bold text-[var(--color-secondary)] uppercase">
        <CheckSquare className="w-4 h-4" />
        <span>{getLocalizedText(interaction.title, language)}</span>
      </div>

      <div className="space-y-2.5">
        {interaction.items.map((item, idx) => {
          const isChecked = Boolean(checkedMap[idx]);
          return (
            <button
              key={idx}
              type="button"
              onClick={() => toggleItem(idx)}
              className={`w-full p-3.5 rounded-lg border text-start text-xs sm:text-body-sm transition-all flex items-start gap-3 cursor-pointer ${
                isChecked
                  ? 'border-[var(--color-primary)] bg-[var(--color-primary-subtle)] text-[var(--color-primary)] font-semibold'
                  : 'border-[var(--color-border)] bg-[var(--color-surface-sunken)] text-[var(--color-text)] hover:border-[var(--color-primary)]'
              }`}
            >
              {isChecked ? (
                <CheckSquare className="w-4 h-4 text-[var(--color-primary)] mt-0.5 shrink-0" />
              ) : (
                <Square className="w-4 h-4 text-[var(--color-text-subtle)] mt-0.5 shrink-0" />
              )}
              <span className={isChecked ? 'line-through opacity-80' : ''}>
                {getLocalizedText(item, language)}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
};
