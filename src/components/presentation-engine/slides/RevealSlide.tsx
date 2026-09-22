'use client';

import React from 'react';
import { RevealSlidePayload, LocalizedString } from '@/types';
import { getLocalizedText } from '@/lib/utils';
import { usePreferencesStore, useTrainerStore } from '@/store';
import { Eye, ChevronRight } from 'lucide-react';

interface RevealSlideProps {
  title: LocalizedString;
  payload: RevealSlidePayload;
}

export const RevealSlide: React.FC<RevealSlideProps> = ({ title, payload }) => {
  const { language } = usePreferencesStore();
  const { revealedStepIndex, incrementRevealedStep } = useTrainerStore();
  const isRtl = language === 'ar';

  const totalSteps = payload.steps.length;

  return (
    <div className="w-full h-full flex flex-col justify-between p-8 sm:p-14 lg:p-20 select-none overflow-y-auto text-start">
      {/* Top Header */}
      <div className="flex items-center justify-between border-b border-[var(--pres-border-subtle)] pb-4">
        <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-[var(--pres-primary)]">
          <Eye className="w-4 h-4" />
          <span>{isRtl ? 'كشف تدريجي للمفاهيم' : 'Progressive Concept Reveal'}</span>
        </div>
        <span className="text-xs font-mono text-[var(--pres-text-subtle)]">
          {getLocalizedText(title, language)}
        </span>
      </div>

      {/* Main Premise & Steps */}
      <div className="max-w-4xl space-y-6 my-auto py-6">
        <div className="space-y-2">
          <h2 className="text-2xl sm:text-4xl font-black text-[var(--pres-text)] tracking-tight">
            {getLocalizedText(payload.premise, language)}
          </h2>
          <span className="text-xs font-mono text-[var(--pres-secondary)] block">
            {isRtl
              ? `الخطوات المعروضة: ${Math.min(revealedStepIndex, totalSteps)} من ${totalSteps}`
              : `Revealed: ${Math.min(revealedStepIndex, totalSteps)} of ${totalSteps}`}
          </span>
        </div>

        {/* Steps Stack */}
        <div className="space-y-3">
          {payload.steps.map((step, idx) => {
            const isRevealed = idx < revealedStepIndex;
            const isCurrent = idx === revealedStepIndex - 1;

            return (
              <div
                key={idx}
                className={`p-4 sm:p-5 rounded-2xl border transition-all duration-300 ${
                  isRevealed
                    ? isCurrent
                      ? 'bg-[var(--pres-surface)] border-[var(--pres-primary)] shadow-md'
                      : 'bg-[var(--pres-surface-sunken)] border-[var(--pres-border)] opacity-90'
                    : 'bg-transparent border-dashed border-[var(--pres-border)] opacity-30 pointer-events-none'
                }`}
              >
                <div className="flex items-start gap-3 sm:gap-4">
                  <div
                    className={`w-8 h-8 rounded-xl flex items-center justify-center font-mono font-bold text-xs shrink-0 transition-colors ${
                      isRevealed
                        ? 'bg-[var(--pres-primary)] text-white'
                        : 'bg-[var(--pres-surface-sunken)] text-[var(--pres-text-muted)]'
                    }`}
                  >
                    {step.number || String(idx + 1).padStart(2, '0')}
                  </div>

                  <div className="space-y-1">
                    <h3 className="text-base sm:text-lg font-bold text-[var(--pres-text)]">
                      {isRevealed ? getLocalizedText(step.title, language) : '••••••••••••••••'}
                    </h3>
                    {isRevealed && (
                      <p className="text-xs sm:text-sm text-[var(--pres-text-muted)] leading-relaxed">
                        {getLocalizedText(step.description, language)}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Manual Reveal Next Button */}
        {revealedStepIndex < totalSteps && (
          <button
            type="button"
            onClick={incrementRevealedStep}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-mono font-bold bg-[var(--pres-primary)] text-white hover:opacity-90 transition-opacity cursor-pointer"
          >
            <span>{isRtl ? 'كشف الخطوة التالية (Space)' : 'Reveal Next Step (Space)'}</span>
            <ChevronRight className="w-3.5 h-3.5" />
          </button>
        )}
      </div>

      {/* Footer */}
      <div className="border-t border-[var(--pres-border-subtle)] pt-4 text-xs font-mono text-[var(--pres-text-subtle)] flex items-center justify-between">
        <span>{isRtl ? 'البناء المتدرج يرسخ الفهم' : 'Layered Learning Builds Retention'}</span>
        <span>{isRtl ? 'اضغط Space للمتابعة →' : 'Press Space to Continue →'}</span>
      </div>
    </div>
  );
};
