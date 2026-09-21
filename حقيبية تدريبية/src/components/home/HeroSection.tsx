"use client";

import React from "react";
import Link from "next/link";
import { usePreferencesStore } from "@/store";
import { Badge, Button } from "@/components/ui";
import {
  ArrowLeft,
  ArrowRight,
  Sparkles,
  Layers,
  ShieldCheck,
} from "lucide-react";

export const HeroSection: React.FC = () => {
  const { language } = usePreferencesStore();
  const isRtl = language === "ar";

  return (
    <section className="relative overflow-hidden py-12 sm:py-16 lg:py-20 border-b border-[var(--color-border)] text-start">
      {/* Subtle Warm Atmospheric Glows */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 start-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-[var(--color-secondary)]/10 blur-[100px] rounded-full"
      />

      <div className="relative  mx-auto space-y-8">
        {/* Platform Badge */}
        <div className="flex items-center gap-2">
          <Badge
            variant="primary"
            size="md"
            icon={<Sparkles className="w-3.5 h-3.5" />}
          >
            {isRtl
              ? "الحقيبة التدريبية التفاعلية الحية"
              : "Interactive Training Kit & Platform"}
          </Badge>
          <span className="text-caption font-mono font-bold text-[var(--color-secondary)]">
            WEB CREATOR AI
          </span>
        </div>

        {/* Main Headline */}
        <div className="space-y-4">
          <h1 className="text-display font-extrabold tracking-tight text-[var(--color-text)]">
            {isRtl ? (
              <>
                من الفكرة إلى موقع ويب حقيقي <br className="hidden sm:inline" />
                <span className="text-[var(--color-secondary)] dark:text-[var(--color-primary)]">
                  جاهز للإطلاق والتسويق.
                </span>
              </>
            ) : (
              <>
                From Concept to a Live Web App{" "}
                <br className="hidden sm:inline" />
                <span className="text-[var(--color-secondary)] dark:text-[var(--color-primary)]">
                  Ready to Launch and Market.
                </span>
              </>
            )}
          </h1>

          <p className="text-body sm:text-h4 text-[var(--color-text-muted)] max-w-2xl leading-relaxed">
            {isRtl
              ? "بيئة تدريبية متكاملة تجمع بين هندسة وتطوير الويب، الذكاء الاصطناعي، وتحسين محركات البحث، لبناء منتج حقيقي يراه العالم."
              : "An applied engineering platform merging modern frontend architecture, AI copilot workflows, and organic growth marketing."}
          </p>
        </div>

        {/* Core Pillars Triad */}
        <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-caption font-semibold">
          <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[var(--color-surface)] border border-[var(--color-border)] shadow-xs">
            <span className="w-2 h-2 rounded-full bg-[var(--color-primary)] inline-block" />
            <span>
              {isRtl
                ? "هندسة وتطوير الويب (Next.js & React)"
                : "Modern Web Engineering"}
            </span>
          </div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[var(--color-surface)] border border-[var(--color-border)] shadow-xs">
            <span className="w-2 h-2 rounded-full bg-[var(--color-secondary)] inline-block" />
            <span>
              {isRtl
                ? "الذكاء الاصطناعي التطبيقي (AI-Assisted Dev)"
                : "Applied AI Workflows"}
            </span>
          </div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[var(--color-surface)] border border-[var(--color-border)] shadow-xs">
            <span className="w-2 h-2 rounded-full bg-[var(--color-accent)] inline-block" />
            <span>
              {isRtl
                ? "التسويق الرقمي والعمل الحر (SEO & Growth)"
                : "SEO, Brand & Monetization"}
            </span>
          </div>
        </div>

        {/* Primary Action Buttons */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-2">
          <Link href="/journey">
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
              {isRtl ? "ابدأ الرحلة التعليمية" : "Start Your Journey"}
            </Button>
          </Link>

          <Link href="/modules">
            <Button
              size="lg"
              variant="outline"
              className="w-full sm:w-auto"
              leftIcon={
                <Layers className="w-4 h-4 text-[var(--color-secondary)]" />
              }
            >
              {isRtl ? "اكتشف المنهج والوحدات" : "Explore Modules"}
            </Button>
          </Link>
        </div>

        {/* Trust & Guarantee Note */}
        <div className="flex items-center gap-2 text-caption text-[var(--color-text-subtle)] pt-1">
          <ShieldCheck className="w-4 h-4 text-[var(--color-primary)] shrink-0" />
          <span>
            {isRtl
              ? "مبني وفق أعلى المعايير للمدرب أثناء التقديم الحي، وللمتدرب للتطبيق الذاتي بعد الدورة."
              : "Engineered for live presenter delivery and hands-on trainee self-paced mastery."}
          </span>
        </div>
      </div>
    </section>
  );
};
