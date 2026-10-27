'use client';

import React, { useState } from 'react';
import { AIPromptSlidePayload, LocalizedString } from '@/types';
import { getLocalizedText } from '@/lib/utils';
import { usePreferencesStore } from '@/store';
import { Copy, Check } from 'lucide-react';

interface AIPromptSlideProps {
  title: LocalizedString;
  subtitle?: LocalizedString;
  payload: AIPromptSlidePayload;
}

export const AIPromptSlide: React.FC<AIPromptSlideProps> = ({
  title,
  subtitle,
  payload,
}) => {
  const { language } = usePreferencesStore();
  const isRtl = language === 'ar';
  const [copied, setCopied] = useState(false);
  const [activeSection, setActiveSection] = useState(2);

  const fullPromptText = `ROLE:
${payload.role}

CONTEXT:
${payload.context}

TASK:
${payload.task}

CONSTRAINTS:
${payload.constraints}
${payload.input ? `\nINPUT:\n${payload.input}\n` : ''}
OUTPUT:
${payload.output}

ACCEPTANCE CRITERIA:
${payload.acceptanceCriteria.map((c, i) => `${i + 1}. ${c}`).join('\n')}`;

  const promptSections = [
    { label: isRtl ? 'الدور' : 'Role', content: payload.role },
    { label: isRtl ? 'السياق' : 'Context', content: payload.context },
    { label: isRtl ? 'المطلوب تنفيذه' : 'Task', content: payload.task },
    { label: isRtl ? 'الشروط والضوابط' : 'Constraints', content: payload.constraints },
    ...(payload.input ? [{ label: isRtl ? 'المدخلات' : 'Input', content: payload.input }] : []),
    { label: isRtl ? 'المخرج المتوقع' : 'Output', content: payload.output },
    {
      label: isRtl ? 'معايير المراجعة' : 'Acceptance',
      content: payload.acceptanceCriteria.map((item, i) => `${i + 1}. ${item}`).join('\n'),
    },
  ];

  const handleCopy = () => {
    navigator.clipboard.writeText(fullPromptText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="w-full h-full flex flex-col justify-between p-8 sm:p-14 lg:p-20 select-none overflow-y-auto text-start">
      {/* Top Header */}
      <div className="max-w-5xl space-y-1.5 border-b border-[var(--pres-border)] pb-4">
        <span className="text-xs sm:text-sm font-mono font-bold text-[var(--pres-primary)] block">
          {isRtl ? 'نموذج صياغة الطلب خطوة بخطوة' : 'Structured Prompt Template'}
        </span>
        <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-[var(--pres-text)] tracking-tight leading-tight">
          {getLocalizedText(title, language)}
        </h2>
        {subtitle && (
          <p className="text-base sm:text-lg text-[var(--pres-text-muted)]">
            {getLocalizedText(subtitle, language)}
          </p>
        )}
      </div>

      <div className="max-w-5xl py-6 space-y-4 my-auto">
        <div
          className="flex flex-wrap gap-2 border-b border-[var(--pres-border-subtle)] pb-2"
          role="group"
          aria-label={isRtl ? 'أجزاء الطلب' : 'Prompt sections'}
        >
          {promptSections.map((section, index) => (
            <button
              key={section.label}
              type="button"
              aria-pressed={activeSection === index}
              onClick={() => setActiveSection(index)}
              className={`px-3.5 py-1.5 rounded-md text-sm font-bold transition-colors cursor-pointer ${
                activeSection === index
                  ? 'bg-[var(--pres-text)] text-[var(--pres-bg)]'
                  : 'text-[var(--pres-text-muted)] hover:text-[var(--pres-text)] bg-[var(--pres-surface)] border border-[var(--pres-border)]'
              }`}
            >
              {section.label}
            </button>
          ))}
          <button
            type="button"
            onClick={handleCopy}
            className="ms-auto inline-flex items-center gap-2 px-3.5 py-1.5 rounded-md border border-[var(--pres-border)] text-xs sm:text-sm font-semibold text-[var(--pres-text)] hover:bg-[var(--pres-surface-sunken)] cursor-pointer"
          >
            {copied ? <Check className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4" />}
            <span>{copied ? (isRtl ? 'تم النسخ' : 'Copied') : (isRtl ? 'نسخ النص كاملًا' : 'Copy full text')}</span>
          </button>
        </div>

        <section
          aria-live="polite"
          className="min-h-44 sm:min-h-56 max-w-4xl rounded-xl border border-[var(--pres-border)] bg-[var(--pres-surface)] p-6 sm:p-8"
        >
          <h3 className="mb-3 text-xs font-mono font-bold text-[var(--pres-primary)]">
            {promptSections[activeSection]?.label}
          </h3>
          <p
            className="text-lg sm:text-2xl leading-relaxed text-[var(--pres-text)] whitespace-pre-wrap"
            dir="auto"
          >
            {promptSections[activeSection]?.content}
          </p>
        </section>

        {payload.iterationTip && (
          <div className="max-w-4xl border-s-4 border-[var(--pres-primary)] ps-4 py-1 text-sm sm:text-base text-[var(--pres-text-muted)]">
            <span className="font-bold text-[var(--pres-text)] me-1.5">
              {isRtl ? 'ملاحظة عملية:' : 'Note:'}
            </span>
            <span>{getLocalizedText(payload.iterationTip, language)}</span>
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
