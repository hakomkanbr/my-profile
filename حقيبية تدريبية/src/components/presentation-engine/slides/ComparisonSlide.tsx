"use client";

import React from "react";
import { ComparisonSlidePayload, LocalizedString } from "@/types";
import { getLocalizedText } from "@/lib/utils";
import { usePreferencesStore } from "@/store";
import { Scale, ShieldCheck } from "lucide-react";

interface ComparisonSlideProps {
  title: LocalizedString;
  subtitle?: LocalizedString;
  payload: ComparisonSlidePayload;
}

export const ComparisonSlide: React.FC<ComparisonSlideProps> = ({
  title,
  subtitle,
  payload,
}) => {
  const { language } = usePreferencesStore();
  const isRtl = language === "ar";

  return (
    <div className="w-full h-full flex flex-col justify-between p-8 sm:p-14 lg:p-20 select-none overflow-y-auto text-start">
      {/* Top Header */}
      <div className="space-y-1 border-b border-[var(--pres-border-subtle)] pb-4">
        <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-[var(--pres-accent)]">
          <Scale className="w-4 h-4" />
          <span>
            {isRtl
              ? "مقارنة هندسية موضوعية"
              : "Objective Engineering Comparison"}
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

      {/* Main Comparison Table */}
      <div className="my-auto py-6  space-y-4">
        <div className="rounded-2xl border-2 border-[var(--pres-border)] bg-[var(--pres-surface)] overflow-hidden shadow-md">
          {/* Table Headers */}
          <div className="grid grid-cols-12 bg-[var(--pres-surface-sunken)] border-b border-[var(--pres-border)] text-xs font-mono font-black uppercase tracking-wider py-3 px-4">
            <div className="col-span-4 text-[var(--pres-text-subtle)]">
              {isRtl ? "المعيار / البُعد" : "Dimension / Practice"}
            </div>
            <div className="col-span-4 text-[var(--pres-primary)] border-x border-[var(--pres-border)] px-3">
              {getLocalizedText(payload.leftHeader, language)}
            </div>
            <div className="col-span-4 text-[var(--pres-accent)] px-3">
              {getLocalizedText(payload.rightHeader, language)}
            </div>
          </div>

          {/* Rows */}
          <div className="divide-y divide-[var(--pres-border-subtle)] text-xs sm:text-sm">
            {payload.dimensions.map((row, idx) => (
              <div
                key={idx}
                className="grid grid-cols-12 py-3 px-4 items-center hover:bg-[var(--pres-surface-sunken)]/50 transition-colors"
              >
                <div className="col-span-4 font-bold text-[var(--pres-text)] pr-2">
                  {getLocalizedText(row.dimension, language)}
                </div>
                <div className="col-span-4 text-[var(--pres-text-muted)] border-x border-[var(--pres-border)] px-3 leading-relaxed">
                  {getLocalizedText(row.left, language)}
                </div>
                <div className="col-span-4 text-[var(--pres-text-muted)] px-3 leading-relaxed">
                  {getLocalizedText(row.right, language)}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Balanced Verdict Box */}
        <div className="p-4 rounded-2xl bg-[var(--pres-surface-sunken)] border border-[var(--pres-primary)]/30 flex items-start gap-3">
          <ShieldCheck className="w-5 h-5 text-[var(--pres-primary)] shrink-0 mt-0.5" />
          <div className="space-y-0.5">
            <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[var(--pres-primary)] block">
              {isRtl
                ? "الرؤية الهندسية المتزنة"
                : "Balanced Engineering Takeaway"}
            </span>
            <p className="text-xs sm:text-sm font-medium text-[var(--pres-text)] leading-relaxed">
              {getLocalizedText(payload.balancedVerdict, language)}
            </p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="border-t border-[var(--pres-border-subtle)] pt-4 text-xs font-mono text-[var(--pres-text-subtle)] flex items-center justify-between">
        <span>
          {isRtl
            ? "الذكاء الاصطناعي يسرع التنفيذ — والمهندس يملك المسؤولية"
            : "AI Accelerates — Engineers Own Responsibility"}
        </span>
        <span>
          {isRtl ? "اضغط Space للمتابعة →" : "Press Space to Continue →"}
        </span>
      </div>
    </div>
  );
};
