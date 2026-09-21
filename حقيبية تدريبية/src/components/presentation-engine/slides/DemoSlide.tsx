'use client';

import React, { useState } from 'react';
import { DemoSlidePayload, LocalizedString } from '@/types';
import { getLocalizedText } from '@/lib/utils';
import { usePreferencesStore } from '@/store';
import { PlayCircle, Copy, Check, Terminal, Sparkles, CheckCircle2 } from 'lucide-react';

interface DemoSlideProps {
  title: LocalizedString;
  payload: DemoSlidePayload;
}

export const DemoSlide: React.FC<DemoSlideProps> = ({ title, payload }) => {
  const { language } = usePreferencesStore();
  const isRtl = language === 'ar';
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    if (!payload.promptToUse) return;
    navigator.clipboard.writeText(payload.promptToUse);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="w-full h-full flex flex-col justify-between p-8 sm:p-14 lg:p-20 select-none overflow-y-auto text-start">
      {/* Top Header */}
      <div className="flex items-center justify-between border-b border-[var(--pres-border-subtle)] pb-4">
        <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-[var(--pres-primary)]">
          <PlayCircle className="w-4 h-4" />
          <span>{isRtl ? 'منطقة التطبيق الحي (Live Demo)' : 'Live Interactive Demo'}</span>
        </div>
        <span className="text-xs font-mono text-[var(--pres-text-subtle)]">
          {getLocalizedText(title, language)}
        </span>
      </div>

      {/* Main Demo Workspace */}
      <div className="max-w-4xl space-y-6 my-auto py-6">
        <div className="space-y-2">
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-[var(--pres-accent)] block">
            {isRtl ? 'هدف التطبيق المباشر' : 'Live Demonstration Goal'}
          </span>
          <h2 className="text-2xl sm:text-4xl font-black text-[var(--pres-text)] tracking-tight">
            {getLocalizedText(payload.objective, language)}
          </h2>
        </div>

        {/* Live Prompt Box to Copy */}
        {payload.promptToUse && (
          <div className="p-5 rounded-2xl bg-[var(--pres-code-bg)] border-2 border-[var(--pres-code-border)] space-y-3 shadow-lg text-left" dir="ltr">
            <div className="flex items-center justify-between border-b border-[var(--pres-code-border)] pb-2">
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-[var(--pres-primary)]" />
                <span className="text-xs font-mono font-bold uppercase text-neutral-300">
                  Ready Prompt to Execute
                </span>
              </div>
              <button
                type="button"
                onClick={handleCopy}
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-white/10 hover:bg-white/20 text-neutral-200 text-xs font-mono transition-colors cursor-pointer"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copied ? 'Copied' : 'Copy Prompt'}</span>
              </button>
            </div>

            <pre className="text-xs sm:text-sm font-mono text-neutral-200 whitespace-pre-wrap leading-relaxed max-h-48 overflow-y-auto">
              {payload.promptToUse}
            </pre>
          </div>
        )}

        {/* Steps & Expected Result Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Steps */}
          <div className="p-5 rounded-2xl bg-[var(--pres-surface)] border border-[var(--pres-border)] space-y-3">
            <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase text-[var(--pres-primary)]">
              <Terminal className="w-4 h-4" />
              <span>{isRtl ? 'خطوات التنفيذ أمام الطلاب' : 'Execution Protocol'}</span>
            </div>
            <div className="space-y-2">
              {payload.instructorSteps.map((step, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-xs text-[var(--pres-text-muted)]">
                  <span className="w-5 h-5 rounded-full bg-[var(--pres-primary)]/10 text-[var(--pres-primary)] font-mono font-bold text-[11px] flex items-center justify-center shrink-0 mt-0.5">
                    {idx + 1}
                  </span>
                  <span className="leading-relaxed">{getLocalizedText(step, language)}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Expected Output */}
          <div className="p-5 rounded-2xl bg-[var(--pres-surface-sunken)] border border-[var(--pres-border)] space-y-3">
            <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase text-emerald-600 dark:text-emerald-400">
              <CheckCircle2 className="w-4 h-4" />
              <span>{isRtl ? 'النتيجة المتوقعة للفحص' : 'Expected Output Verification'}</span>
            </div>
            <p className="text-xs sm:text-sm text-[var(--pres-text)] font-medium leading-relaxed">
              {getLocalizedText(payload.expectedOutput, language)}
            </p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="border-t border-[var(--pres-border-subtle)] pt-4 text-xs font-mono text-[var(--pres-text-subtle)] flex items-center justify-between">
        <span>{isRtl ? 'شاهد النتيجة وافحص الكود المتولد' : 'Observe, Inspect & Validate Live'}</span>
        <span>{isRtl ? 'اضغط Space للمتابعة →' : 'Press Space to Continue →'}</span>
      </div>
    </div>
  );
};
