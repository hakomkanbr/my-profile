'use client';

import React, { useState } from 'react';
import { DemoSlidePayload, LocalizedString } from '@/types';
import { getLocalizedText } from '@/lib/utils';
import { usePreferencesStore } from '@/store';
import { Copy, Check } from 'lucide-react';

interface DemoSlideProps {
  title: LocalizedString;
  payload: DemoSlidePayload;
}

export const DemoSlide: React.FC<DemoSlideProps> = ({
  title,
  payload,
}) => {
  const { language } = usePreferencesStore();
  const isRtl = language === 'ar';
  const [copied, setCopied] = useState(false);

  const handleCopyPrompt = () => {
    if (!payload.promptToUse) return;
    navigator.clipboard.writeText(payload.promptToUse);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="w-full h-full flex flex-col justify-between p-8 sm:p-14 lg:p-20 select-none overflow-y-auto text-start">
      {/* Top Header */}
      <div className="flex items-center justify-between border-b border-[var(--pres-border)] pb-4">
        <span className="text-xs sm:text-sm font-mono font-bold text-[var(--pres-primary)]">
          {isRtl ? 'تطبيق عملي مباشر' : 'Live Practical Walkthrough'}
        </span>
        <span className="text-xs sm:text-sm text-[var(--pres-text-muted)]">
          {getLocalizedText(title, language)}
        </span>
      </div>

      {/* Main Content */}
      <div className="max-w-5xl space-y-6 my-auto py-6">
        <h2 className="text-2xl sm:text-4xl font-black text-[var(--pres-text)] tracking-tight leading-snug">
          {getLocalizedText(payload.objective, language)}
        </h2>

        {/* Steps */}
        <div className="space-y-3">
          {payload.instructorSteps.map((step, idx) => (
            <div
              key={idx}
              className="p-4 sm:p-5 rounded-xl bg-[var(--pres-surface)] border border-[var(--pres-border)] flex items-start gap-4"
            >
              <span className="font-mono text-sm font-bold text-[var(--pres-primary)] shrink-0 mt-0.5">
                0{idx + 1}
              </span>
              <span className="text-base sm:text-lg text-[var(--pres-text)] font-medium leading-relaxed">
                {getLocalizedText(step, language)}
              </span>
            </div>
          ))}
        </div>

        {/* Prompt or Command Box if present */}
        {payload.promptToUse && (
          <div className="p-4 sm:p-5 rounded-xl bg-[var(--pres-code-bg)] border border-[var(--pres-code-border)] space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono text-neutral-400">
                {isRtl ? 'النص / الأمر المستخدم في التطبيق:' : 'Command / Text Used:'}
              </span>
              <button
                type="button"
                onClick={handleCopyPrompt}
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded text-xs font-medium bg-white/10 text-white hover:bg-white/20 transition-colors cursor-pointer"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copied ? (isRtl ? 'تم النسخ' : 'Copied') : (isRtl ? 'نسخ' : 'Copy')}</span>
              </button>
            </div>
            <p className="text-sm sm:text-base font-mono text-neutral-100 leading-relaxed whitespace-pre-wrap" dir="auto">
              {payload.promptToUse}
            </p>
          </div>
        )}

        {/* Expected Result */}
        <div className="border-s-4 border-[var(--pres-primary)] ps-4 py-1">
          <span className="text-xs font-mono font-bold text-[var(--pres-text-muted)] block">
            {isRtl ? 'النتيجة المتوقعة:' : 'Expected Outcome:'}
          </span>
          <p className="text-sm sm:text-base font-semibold text-[var(--pres-text)] leading-relaxed">
            {getLocalizedText(payload.expectedOutput, language)}
          </p>
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
