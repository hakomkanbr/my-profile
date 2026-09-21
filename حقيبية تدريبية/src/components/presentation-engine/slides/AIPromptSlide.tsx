"use client";

import React, { useState } from "react";
import { AIPromptSlidePayload, LocalizedString } from "@/types";
import { getLocalizedText } from "@/lib/utils";
import { usePreferencesStore } from "@/store";
import { Sparkles, Copy, Check, Terminal, CheckCircle2 } from "lucide-react";

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

  const handleCopy = () => {
    navigator.clipboard.writeText(fullPromptText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="w-full h-full flex flex-col justify-between p-8 sm:p-14 lg:p-20 select-none overflow-y-auto text-start">
      {/* Top Header */}
      <div className="space-y-1 border-b border-[var(--pres-border-subtle)] pb-4">
        <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-[var(--pres-primary)]">
          <Sparkles className="w-4 h-4" />
          <span>
            {isRtl
              ? "هيكلية البرومبت الاحترافي كأثر بصري"
              : "AI Prompt Framework Artifact"}
          </span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-black text-[var(--pres-text)] tracking-tight">
          {getLocalizedText(title, language)}
        </h2>
        {subtitle && (
          <p className="text-sm sm:text-base text-[var(--pres-secondary)] font-medium">
            {getLocalizedText(subtitle, language)}
          </p>
        )}
      </div>

      {/* Main Prompt Artifact Structure */}
      <div className="my-auto py-6  space-y-4">
        <div
          className="rounded-2xl bg-[var(--pres-code-bg)] border-2 border-[var(--pres-code-border)] shadow-xl overflow-hidden text-left"
          dir="ltr"
        >
          {/* Header Bar */}
          <div className="h-10 px-4 bg-black/40 border-b border-[var(--pres-code-border)] flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Terminal className="w-4 h-4 text-[var(--pres-primary)]" />
              <span className="text-xs font-mono text-neutral-300 font-bold">
                STRUCTURED PROMPT ARCHITECTURE
              </span>
            </div>
            <button
              type="button"
              onClick={handleCopy}
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-white/10 hover:bg-white/20 text-neutral-200 text-xs font-mono transition-colors cursor-pointer"
            >
              {copied ? (
                <Check className="w-3.5 h-3.5 text-emerald-400" />
              ) : (
                <Copy className="w-3.5 h-3.5" />
              )}
              <span>{copied ? "Copied" : "Copy Prompt"}</span>
            </button>
          </div>

          {/* Structured Sections */}
          <div className="p-5 sm:p-6 space-y-3 font-mono text-xs sm:text-sm text-neutral-300 divide-y divide-white/5 max-h-[380px] overflow-y-auto">
            {/* ROLE */}
            <div className="pt-2 flex items-start gap-4">
              <span className="w-28 px-2 py-0.5 rounded bg-[var(--pres-primary-deep)] text-[var(--pres-secondary)] font-bold text-center shrink-0">
                ROLE
              </span>
              <span className="text-neutral-100 flex-1 leading-relaxed">
                {payload.role}
              </span>
            </div>

            {/* CONTEXT */}
            <div className="pt-2 flex items-start gap-4">
              <span className="w-28 px-2 py-0.5 rounded bg-blue-950 text-blue-300 font-bold text-center shrink-0">
                CONTEXT
              </span>
              <span className="text-neutral-200 flex-1 leading-relaxed">
                {payload.context}
              </span>
            </div>

            {/* TASK */}
            <div className="pt-2 flex items-start gap-4">
              <span className="w-28 px-2 py-0.5 rounded bg-amber-950 text-amber-300 font-bold text-center shrink-0">
                TASK
              </span>
              <span className="text-neutral-100 font-bold flex-1 leading-relaxed">
                {payload.task}
              </span>
            </div>

            {/* CONSTRAINTS */}
            <div className="pt-2 flex items-start gap-4">
              <span className="w-28 px-2 py-0.5 rounded bg-red-950 text-red-300 font-bold text-center shrink-0">
                CONSTRAINTS
              </span>
              <span className="text-neutral-300 flex-1 leading-relaxed">
                {payload.constraints}
              </span>
            </div>

            {/* OUTPUT */}
            <div className="pt-2 flex items-start gap-4">
              <span className="w-28 px-2 py-0.5 rounded bg-emerald-950 text-emerald-300 font-bold text-center shrink-0">
                OUTPUT
              </span>
              <span className="text-neutral-200 flex-1 leading-relaxed">
                {payload.output}
              </span>
            </div>

            {/* ACCEPTANCE CRITERIA */}
            {payload.acceptanceCriteria &&
              payload.acceptanceCriteria.length > 0 && (
                <div className="pt-2 flex items-start gap-4">
                  <span className="w-28 px-2 py-0.5 rounded bg-purple-950 text-purple-300 font-bold text-center shrink-0">
                    CRITERIA
                  </span>
                  <div className="space-y-1 flex-1">
                    {payload.acceptanceCriteria.map((crit, idx) => (
                      <div
                        key={idx}
                        className="flex items-center gap-2 text-neutral-300"
                      >
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                        <span>{crit}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
          </div>
        </div>

        {/* Iteration Tip */}
        {payload.iterationTip && (
          <div className="p-3.5 rounded-xl bg-[var(--pres-surface-sunken)] border border-[var(--pres-border)] text-xs text-[var(--pres-text-muted)] flex items-center gap-2">
            <span className="font-mono font-bold text-[var(--pres-accent)] uppercase">
              {isRtl ? "نصيحة التدقيق:" : "Iteration Rule:"}
            </span>
            <span>{getLocalizedText(payload.iterationTip, language)}</span>
          </div>
        )}
      </div>

      {/* Footer */}
      <div className="border-t border-[var(--pres-border-subtle)] pt-4 text-xs font-mono text-[var(--pres-text-subtle)] flex items-center justify-between">
        <span>
          {isRtl
            ? "صيغة البرومبت المنضبطة تمنع 90% من الهلوسات"
            : "Rigid Prompt Schemas Prevent 90% of Hallucinations"}
        </span>
        <span>
          {isRtl ? "اضغط Space للمتابعة →" : "Press Space to Continue →"}
        </span>
      </div>
    </div>
  );
};
