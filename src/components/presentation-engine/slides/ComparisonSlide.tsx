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
    <div className="w-full h-full flex flex-col justify-center px-6 py-12 sm:px-12 lg:px-20 select-none overflow-y-auto text-start">
      {/* Top Header */}
      <div className="max-w-5xl space-y-2 border-b border-[var(--pres-border-subtle)] pb-4">
        <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-[var(--pres-accent)]">
          <Scale className="w-4 h-4" />
          <span>
            {isRtl
              ? "مقارنة هندسية موضوعية"
              : "Objective Engineering Comparison"}
          </span>
        </div>
        <h2 className="text-4xl sm:text-6xl lg:text-7xl font-black text-[var(--pres-text)] tracking-tight leading-tight">
          {getLocalizedText(title, language)}
        </h2>
        {subtitle && (
          <p className="text-lg sm:text-xl text-[var(--pres-secondary)] font-medium">
            {getLocalizedText(subtitle, language)}
          </p>
        )}
      </div>

      {/* Main Comparison Table */}
      <div className="max-w-6xl py-6 space-y-5">
        <div className="border-y border-[var(--pres-border)] bg-[var(--pres-surface)] overflow-hidden">
          {/* Table Headers */}
          <div className="hidden sm:grid sm:grid-cols-12 bg-[var(--pres-surface-sunken)] border-b border-[var(--pres-border)] text-sm font-bold py-3 px-4">
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
          <div className="divide-y divide-[var(--pres-border-subtle)] text-base sm:text-lg">
            {payload.dimensions.map((row, idx) => (
              <div
                key={idx}
                className="grid grid-cols-1 sm:grid-cols-12 py-4 px-4 sm:py-5 items-start sm:items-center hover:bg-[var(--pres-surface-sunken)]/50 transition-colors"
              >
                <div className="sm:col-span-4 font-bold text-[var(--pres-primary)] pr-2 pb-2 sm:pb-0">
                  {getLocalizedText(row.dimension, language)}
                </div>
                <div className="sm:col-span-4 text-[var(--pres-text-muted)] sm:border-x border-[var(--pres-border)] sm:px-3 leading-relaxed">
                  <span className="sm:hidden font-semibold text-[var(--pres-text)]">{getLocalizedText(payload.leftHeader, language)}: </span>
                  {getLocalizedText(row.left, language)}
                </div>
                <div className="sm:col-span-4 text-[var(--pres-text-muted)] px-0 sm:px-3 leading-relaxed pt-2 sm:pt-0">
                  <span className="sm:hidden font-semibold text-[var(--pres-text)]">{getLocalizedText(payload.rightHeader, language)}: </span>
                  {getLocalizedText(row.right, language)}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Balanced Verdict Box */}
        <div className="p-4 border-s-4 border-[var(--pres-primary)] bg-[var(--pres-surface-sunken)] flex items-start gap-3">
          <ShieldCheck className="w-5 h-5 text-[var(--pres-primary)] shrink-0 mt-0.5" />
          <div className="space-y-0.5">
            <span className="text-sm font-bold text-[var(--pres-primary)] block">
              {isRtl
                ? "الرؤية الهندسية المتزنة"
                : "Balanced Engineering Takeaway"}
            </span>
            <p className="text-base sm:text-lg font-medium text-[var(--pres-text)] leading-relaxed">
              {getLocalizedText(payload.balancedVerdict, language)}
            </p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="max-w-6xl border-t border-[var(--pres-border-subtle)] pt-4 text-sm text-[var(--pres-text-muted)] flex items-center justify-between">
        <span>
          {isRtl
            ? "الذكاء الاصطناعي يسرع التنفيذ — والمهندس يملك المسؤولية"
            : "AI Accelerates — Engineers Own Responsibility"}
        </span>
        <span className="text-xs">{isRtl ? "مسافة: التالي" : "Space: next"}</span>
      </div>
    </div>
  );
};
