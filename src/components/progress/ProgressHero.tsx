"use client";

import React from "react";
import Link from "next/link";
import { usePreferencesStore, useProgressStore } from "@/store";
import { getLocalizedText } from "@/lib/utils";
import {
  getCurrentStageComputed,
  getLastCompletedItem,
  getNextActionStep,
} from "@/lib/progress-selectors";
import { getTotalStats } from "@/content";
import { Button, Badge, Progress } from "@/components/ui";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  Compass,
  PlayCircle,
} from "lucide-react";

export const ProgressHero: React.FC = () => {
  const { language } = usePreferencesStore();
  const { progress } = useProgressStore();
  const isRtl = language === "ar";

  const totalStats = getTotalStats();
  const currentStageComputed = getCurrentStageComputed(progress);
  const nextAction = getNextActionStep(progress);
  const lastCompleted = getLastCompletedItem(progress);

  const completedCount = progress.completedLessons.length;
  const progressPercent =
    totalStats.totalLessons > 0
      ? Math.round((completedCount / totalStats.totalLessons) * 100)
      : 0;

  const isNewLearner =
    completedCount === 0 && progress.completedProjects.length === 0;

  return (
    <section className="relative overflow-hidden py-12 sm:py-16 border-b border-[var(--color-border)] text-start">
      {/* Editorial Ambient Background Glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-20 start-1/2 -translate-x-1/2 w-[650px] h-[350px] bg-[var(--color-primary)]/10 blur-[110px] rounded-full"
      />

      <div className="relative  mx-auto space-y-8">
        {/* Top Breadcrumb Tag */}
        <div className="flex flex-wrap items-center gap-2">
          <Badge
            variant="primary"
            size="md"
            icon={<Compass className="w-3.5 h-3.5" />}
          >
            {isRtl
              ? "رحلتي التعليمية في WEB CREATOR AI"
              : "My Learning Journey in WEB CREATOR AI"}
          </Badge>
          <span className="text-caption font-mono text-[var(--color-secondary)] font-bold">
            01 THINK → 07 GROW
          </span>
        </div>

        {/* Hero Title & Where am I? */}
        <div className="space-y-3">
          <h1 className="text-display sm:text-5xl font-extrabold text-[var(--color-text)] tracking-tight">
            {isRtl
              ? "أين أنت الآن في الرحلة؟"
              : "Where are you in your journey?"}
          </h1>
          <p className="text-body sm:text-h4 text-[var(--color-text-muted)] max-w-2xl leading-relaxed">
            {isNewLearner
              ? isRtl
                ? "مرحباً بك في انطلاقتك الأولى! أنت على وشك خوض رحلة تطبيقية تقودك من مجرد فكرة إلى موقع ويب حقيقي منشور ومسوق."
                : "Welcome to day one! You are embarking on a hands-on journey from zero to a live, marketed web product."
              : isRtl
                ? `أنت حالياً في المرحلة ${currentStageComputed.stage.number}: ${getLocalizedText(currentStageComputed.stage.title, language)}`
                : `You are currently in Stage ${currentStageComputed.stage.number}: ${getLocalizedText(currentStageComputed.stage.title, language)}`}
          </p>
        </div>

        {/* Big Interactive Progress Anchor Card */}
        <div className="p-6 sm:p-8 rounded-3xl bg-[var(--color-surface)] border border-[var(--color-border)] shadow-md space-y-6">
          {/* Progress Header */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="space-y-1">
              <span className="text-caption font-mono font-bold text-[var(--color-secondary)] uppercase">
                {isRtl
                  ? "الموقع الحالي في المسار"
                  : "Current Milestone Position"}
              </span>
              <div className="flex items-center gap-3">
                <span className="px-2.5 py-1 rounded-lg bg-[var(--color-primary)] text-white text-xs font-mono font-bold">
                  STAGE {currentStageComputed.stage.number}
                </span>
                <h2 className="text-h3 font-bold text-[var(--color-text)]">
                  {getLocalizedText(currentStageComputed.stage.title, language)}
                </h2>
              </div>
            </div>

            <div className="flex items-baseline gap-2 shrink-0">
              <span className="text-display font-extrabold font-mono text-[var(--color-primary)]">
                {progressPercent}%
              </span>
              <span className="text-caption text-[var(--color-text-subtle)] font-medium">
                ({completedCount} / {totalStats.totalLessons}{" "}
                {isRtl ? "درس" : "lessons"})
              </span>
            </div>
          </div>

          <Progress value={progressPercent} size="md" showLabel={false} />

          {/* Quick Pillars: Last Accomplished vs Next Step */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
            {/* Last Achievement */}
            <div className="p-4 rounded-2xl bg-[var(--color-surface-sunken)] border border-[var(--color-border-subtle)] space-y-1.5 text-start">
              <span className="text-[11px] font-mono font-bold text-[var(--color-text-subtle)] uppercase">
                {isRtl ? "آخر إنجاز تم اعتماده" : "Latest Milestone Achieved"}
              </span>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[var(--color-primary)] shrink-0" />
                <p className="text-body-sm font-semibold text-[var(--color-text)] truncate">
                  {lastCompleted
                    ? getLocalizedText(lastCompleted.title, language)
                    : isRtl
                      ? "في انتظار إتمام أول درس"
                      : "Awaiting your first completed lesson"}
                </p>
              </div>
            </div>

            {/* Next Recommended Step */}
            <div className="p-4 rounded-2xl bg-[var(--color-primary-subtle)]/40 border border-[var(--color-secondary)]/30 space-y-1.5 text-start">
              <span className="text-[11px] font-mono font-bold text-[var(--color-secondary)] uppercase">
                {isRtl ? "الخطوة التالية الموصى بها" : "Next Recommended Step"}
              </span>
              <div className="flex items-center gap-2">
                <PlayCircle className="w-4 h-4 text-[var(--color-secondary)] shrink-0" />
                <p className="text-body-sm font-bold text-[var(--color-text)] truncate">
                  {getLocalizedText(nextAction.title, language)}
                </p>
              </div>
            </div>
          </div>

          {/* Primary Action Button */}
          <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 border-t border-[var(--color-border-subtle)]">
            <span className="text-caption text-[var(--color-text-muted)]">
              {isRtl
                ? "المنصة تحفظ تقدمك تلقائياً في متصفحك محلياً (Offline-First)."
                : "Your progress is securely persisted locally on your device."}
            </span>

            <Link href={nextAction.href}>
              <Button
                size="lg"
                variant="primary"
                className="w-full sm:w-auto"
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
