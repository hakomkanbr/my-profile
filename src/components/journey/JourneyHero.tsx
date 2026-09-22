"use client";

import React from "react";
import Link from "next/link";
import { usePreferencesStore, useProgressStore } from "@/store";
import { getLocalizedText } from "@/lib/utils";
import {
  getNextActionStep,
  getCurrentStageComputed,
} from "@/lib/progress-selectors";
import { Badge, Button } from "@/components/ui";
import {
  Sparkles,
  ArrowLeft,
  ArrowRight,
  Compass,
  ShieldCheck,
} from "lucide-react";

export const JourneyHero: React.FC = () => {
  const { language } = usePreferencesStore();
  const { progress } = useProgressStore();
  const isRtl = language === "ar";

  const nextAction = getNextActionStep(progress);
  const currentStageComputed = getCurrentStageComputed(progress);

  return (
    <section className="relative overflow-hidden py-14 sm:py-20 border-b border-[var(--color-border)] text-start">
      {/* Editorial Ambient Glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 start-1/2 -translate-x-1/2 w-[700px] h-[380px] bg-[var(--color-primary)]/10 blur-[120px] rounded-full"
      />

      <div className="relative  mx-auto space-y-8">
        {/* Journey Badge */}
        <div className="flex flex-wrap items-center gap-2">
          <Badge
            variant="primary"
            size="md"
            icon={<Compass className="w-3.5 h-3.5" />}
          >
            {isRtl
              ? "خارطة الطريق الهندسية الشاملة"
              : "The End-to-End Engineering Journey"}
          </Badge>
          <span className="text-caption font-mono font-bold text-[var(--color-secondary)]">
            WEB CREATOR AI
          </span>
        </div>

        {/* Main Title & Transformation Vision */}
        <div className="space-y-4">
          <h1 className="text-display sm:text-5xl font-extrabold text-[var(--color-text)] tracking-tight">
            {isRtl ? (
              <>
                من أول فكرة <br className="hidden sm:inline" />
                إلى{" "}
                <span className="text-[var(--color-primary)]">
                  منتج ويب حقيقي
                </span>{" "}
                يراه العالم.
              </>
            ) : (
              <>
                From your very first idea <br className="hidden sm:inline" />
                to a{" "}
                <span className="text-[var(--color-primary)]">
                  real live web product
                </span>{" "}
                in the market.
              </>
            )}
          </h1>

          <p className="text-body sm:text-h4 text-[var(--color-text-muted)] max-w-3xl leading-relaxed">
            {isRtl
              ? "رحلة متدرجة من 7 مراحل مترابطة تقودك من التفكير المعماري، إلى تصميم الواجهات، كتابة الكود النظيف، الاستعانة بالذكاء الاصطناعي كمضاعف إنتاجي، وحتى النشر الحي والتسويق واقتناص العملاء."
              : "A continuous 7-stage architectural journey leading you from mental frameworks, UI design, clean modern code, AI-augmented workflows, to live deployment and client acquisition."}
          </p>
        </div>

        {/* Current Pin Banner */}
        <div className="p-4 sm:p-5 rounded-2xl bg-[var(--color-surface)] border border-[var(--color-border)] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-xs">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[var(--color-primary-subtle)] text-[var(--color-primary)] flex items-center justify-center font-mono font-bold text-sm shrink-0">
              {currentStageComputed.stage.number}
            </div>
            <div>
              <span className="text-[11px] font-mono font-bold text-[var(--color-secondary)] uppercase">
                {isRtl ? "موقعك النشط في المسار" : "Your Current Position"}
              </span>
              <h2 className="text-body-sm font-bold text-[var(--color-text)]">
                {currentStageComputed.stage.code} —{" "}
                {getLocalizedText(currentStageComputed.stage.title, language)}
              </h2>
            </div>
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <Link href={nextAction.href} className="w-full sm:w-auto">
              <Button
                variant="primary"
                size="md"
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

            <Link
              href="/web-creator-ai/progress"
              className="shrink-0 hidden md:inline-block"
            >
              <Button variant="ghost" size="md">
                {isRtl ? "عرض سجل التقدم" : "View Progress"}
              </Button>
            </Link>
          </div>
        </div>

        {/* Guiding Principles Pill Triad */}
        <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-caption font-semibold pt-1">
          <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[var(--color-surface)] border border-[var(--color-border-subtle)] shadow-xs">
            <ShieldCheck className="w-3.5 h-3.5 text-[var(--color-primary)]" />
            <span>
              {isRtl ? "كل مرحلة تبني على سابقتها" : "Cumulative Progression"}
            </span>
          </div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[var(--color-surface)] border border-[var(--color-border-subtle)] shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-[var(--color-secondary)]" />
            <span>
              {isRtl
                ? "الذكاء الاصطناعي أداة تمكين وليس بديلاً"
                : "AI as an Amplifier, Not a Crutch"}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
