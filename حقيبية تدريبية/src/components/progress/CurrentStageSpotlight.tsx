"use client";

import React from "react";
import Link from "next/link";
import { usePreferencesStore, useProgressStore } from "@/store";
import { getLocalizedText } from "@/lib/utils";
import {
  getCurrentStageComputed,
  getNextActionStep,
} from "@/lib/progress-selectors";
import { Button, Badge, Progress } from "@/components/ui";
import { ArrowLeft, ArrowRight } from "lucide-react";

export const CurrentStageSpotlight: React.FC = () => {
  const { language } = usePreferencesStore();
  const { progress } = useProgressStore();
  const isRtl = language === "ar";

  const currentStageComputed = getCurrentStageComputed(progress);
  const nextAction = getNextActionStep(progress);
  const {
    stage,
    completionPercent,
    completedLessons,
    totalLessons,
    associatedModules,
  } = currentStageComputed;

  return (
    <section className="py-12 sm:py-16 border-b border-[var(--color-border)] text-start">
      <div className=" mx-auto space-y-8">
        <div className="space-y-2">
          <Badge variant="primary" size="md">
            {isRtl ? "المرحلة النشطة حالياً" : "Current Active Stage Spotlight"}
          </Badge>
          <h2 className="text-display sm:text-h1 font-extrabold text-[var(--color-text)]">
            STAGE {stage.number} — {stage.code}
          </h2>
          <p className="text-body sm:text-h4 text-[var(--color-secondary)] font-medium">
            {getLocalizedText(stage.tagline, language)}
          </p>
        </div>

        {/* Big Spotlight Container */}
        <div className="p-6 sm:p-8 rounded-3xl bg-[var(--color-surface)] border-2 border-[var(--color-primary)]/30 space-y-6">
          <div className="space-y-3">
            <h3 className="text-h3 font-bold text-[var(--color-text)]">
              {getLocalizedText(stage.title, language)}
            </h3>
            <p className="text-body text-[var(--color-text-muted)] leading-relaxed max-w-3xl">
              {getLocalizedText(stage.description, language)}
            </p>
          </div>

          {/* Progress Bar within Stage */}
          <div className="space-y-2">
            <div className="flex items-center justify-between text-caption font-mono font-bold text-[var(--color-text)]">
              <span>
                {isRtl ? "إنجاز دروس هذه المرحلة" : "Stage Lessons Progress"}
              </span>
              <span>
                {completedLessons} / {totalLessons} ({completionPercent}%)
              </span>
            </div>
            <Progress value={completionPercent} size="md" showLabel={false} />
          </div>

          {/* Modules Included in this Stage */}
          <div className="space-y-3 pt-2">
            <span className="text-xs font-mono font-bold text-[var(--color-text-subtle)] uppercase">
              {isRtl
                ? "الوحدات المرتبطة بهذه المرحلة:"
                : "Modules in this stage:"}
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {associatedModules.map((mod) => (
                <div
                  key={mod.id}
                  className="p-4 rounded-xl bg-[var(--color-surface-sunken)] border border-[var(--color-border)] flex items-start gap-3"
                >
                  <div className="w-8 h-8 rounded-lg bg-[var(--color-primary-subtle)] text-[var(--color-primary)] flex items-center justify-center font-bold font-mono text-xs shrink-0">
                    {mod.number}
                  </div>
                  <div className="space-y-0.5">
                    <h4 className="text-body-sm font-bold text-[var(--color-text)]">
                      {mod.title.ar}
                    </h4>
                    <p className="text-[11px] text-[var(--color-text-muted)] line-clamp-1">
                      {mod.subtitle.ar}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Next Action Box */}
          <div className="p-5 rounded-2xl bg-gradient-to-r from-[var(--color-primary-subtle)]/60 to-[var(--color-surface-sunken)] border border-[var(--color-secondary)]/30 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="space-y-1 text-center sm:text-start">
              <span className="text-[11px] font-mono font-bold text-[var(--color-secondary)] uppercase">
                {isRtl
                  ? "خطوتك التنفيذية القادمة"
                  : "Your Next Recommended Step"}
              </span>
              <p className="text-body-sm font-bold text-[var(--color-text)]">
                {getLocalizedText(nextAction.title, language)}
              </p>
              <p className="text-caption text-[var(--color-text-muted)]">
                {getLocalizedText(nextAction.subtitle, language)}
              </p>
            </div>

            <Link href={nextAction.href}>
              <Button
                size="md"
                variant="primary"
                rightIcon={
                  isRtl ? (
                    <ArrowLeft className="w-4 h-4" />
                  ) : (
                    <ArrowRight className="w-4 h-4" />
                  )
                }
              >
                {getLocalizedText(nextAction.ctaText, language)}
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
