"use client";

import React, { useState } from "react";
import { AIPromptSlidePayload, LocalizedString } from "@/types";
import { getLocalizedText } from "@/lib/utils";
import { usePreferencesStore } from "@/store";
import { Sparkles, Copy, Check } from "lucide-react";

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
  const isRtl = language === "ar";
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
${payload.input ? `\nINPUT:\n${payload.input}\n` : ""}
OUTPUT:
${payload.output}

ACCEPTANCE CRITERIA:
${payload.acceptanceCriteria.map((c, i) => `${i + 1}. ${c}`).join("\n")}`;

  const promptSections = [
    { label: isRtl ? "الدور" : "Role", content: payload.role },
    { label: isRtl ? "السياق" : "Context", content: payload.context },
    { label: isRtl ? "المهمة" : "Task", content: payload.task },
    { label: isRtl ? "القيود" : "Constraints", content: payload.constraints },
    ...(payload.input ? [{ label: isRtl ? "المدخلات" : "Input", content: payload.input }] : []),
    { label: isRtl ? "المخرج" : "Output", content: payload.output },
    { label: isRtl ? "معايير القبول" : "Acceptance", content: payload.acceptanceCriteria.map((item, i) => `${i + 1}. ${item}`).join("\n") },
  ];

  const handleCopy = () => {
    navigator.clipboard.writeText(fullPromptText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="w-full h-full flex flex-col justify-center px-6 py-12 sm:px-12 lg:px-20 select-none overflow-y-auto text-start">
      {/* Top Header */}
      <div className="max-w-5xl space-y-2 border-b border-[var(--pres-border-subtle)] pb-4">
        <div className="flex items-center gap-2 text-sm font-semibold text-[var(--pres-primary)]">
          <Sparkles className="w-4 h-4" />
          <span>{isRtl ? "ابنِ البرومبت خطوةً خطوة" : "Build the prompt step by step"}</span>
        </div>
        <h2 className="text-4xl sm:text-6xl font-black text-[var(--pres-text)] tracking-tight leading-tight">
          {getLocalizedText(title, language)}
        </h2>
        {subtitle && (
          <p className="text-lg sm:text-xl text-[var(--pres-secondary)] font-medium">
            {getLocalizedText(subtitle, language)}
          </p>
        )}
      </div>

      <div className="max-w-5xl py-6 space-y-4">
        <div className="flex flex-wrap gap-2" role="group" aria-label={isRtl ? "أجزاء البرومبت" : "Prompt sections"}>
          {promptSections.map((section, index) => (
            <button key={section.label} type="button" aria-pressed={activeSection === index} onClick={() => setActiveSection(index)} className={`px-4 py-2 border-b-2 text-base font-semibold transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--pres-primary)] ${activeSection === index ? "border-[var(--pres-primary)] text-[var(--pres-primary)]" : "border-transparent text-[var(--pres-text-muted)] hover:text-[var(--pres-text)]"}`}>
              {section.label}
            </button>
          ))}
          <button type="button" onClick={handleCopy} className="ms-auto inline-flex items-center gap-2 px-4 py-2 border border-[var(--pres-border)] text-sm font-semibold text-[var(--pres-text)] hover:bg-[var(--pres-surface-sunken)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--pres-primary)]">
            {copied ? <Check className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4" />}
            <span>{copied ? (isRtl ? "تم النسخ" : "Copied") : (isRtl ? "نسخ البرومبت كاملًا" : "Copy full prompt")}</span>
          </button>
        </div>

        <section aria-live="polite" className="min-h-48 sm:min-h-64 max-w-4xl border-s-4 border-[var(--pres-primary)] bg-[var(--pres-surface-sunken)] p-5 sm:p-8">
          <h3 className="mb-4 text-sm font-semibold text-[var(--pres-primary)]">{promptSections[activeSection]?.label}</h3>
          <p className="text-xl sm:text-2xl leading-relaxed text-[var(--pres-text)] whitespace-pre-wrap" dir="auto">{promptSections[activeSection]?.content}</p>
        </section>

        {/* Iteration Tip */}
        {payload.iterationTip && (
          <div className="max-w-4xl text-base text-[var(--pres-text-muted)] flex items-start gap-2">
            <span className="font-semibold text-[var(--pres-accent)] shrink-0">
              {isRtl ? "نصيحة التدقيق:" : "Iteration Rule:"}
            </span>
            <span>{getLocalizedText(payload.iterationTip, language)}</span>
          </div>
        )}
      </div>

      {/* Footer */}
      <div className="max-w-5xl border-t border-[var(--pres-border-subtle)] pt-4 text-sm text-[var(--pres-text-muted)] flex items-center justify-between">
        <span>
          {isRtl
            ? "اكتب التعليمات بوضوح، ثم افحص الناتج"
            : "Be specific, then review the output"}
        </span>
        <span>
          {isRtl ? "مسافة: التالي" : "Space: next"}
        </span>
      </div>
    </div>
  );
};
