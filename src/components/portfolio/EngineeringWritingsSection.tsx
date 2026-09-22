"use client";

import React from "react";
import Link from "next/link";
import { usePreferencesStore } from "@/store";
import { ALL_WRITINGS } from "@/content/writings";
import { getLocalizedText } from "@/lib/utils";
import { BookOpen, ArrowLeft, ArrowRight, Clock, Tag } from "lucide-react";
import { Reveal } from "@/components/motion";

export const EngineeringWritingsSection: React.FC = () => {
  const { language } = usePreferencesStore();
  const isRtl = language === "ar";

  const featuredWritings = ALL_WRITINGS.filter((w) => w.featured);

  return (
    <section
      id="writings"
      className="py-12 sm:py-20 border-b border-[var(--color-border)] text-start relative overflow-hidden"
    >
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 sm:space-y-12">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <Reveal direction="up" distance={16}>
            <div className="space-y-2">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-[var(--color-secondary)] flex items-center gap-1.5">
                <BookOpen className="w-4 h-4" />
                {isRtl ? "الكتابات الهندسية" : "Engineering Writings"}
              </span>
              <h2 className="text-h1 font-extrabold text-[var(--color-text)] tracking-tight rtl:tracking-normal">
                {isRtl ? "مقالات وتدوينات معمارية" : "Architecture & Tech Insights"}
              </h2>
              <p className="text-body text-[var(--color-text-muted)] max-w-2xl">
                {isRtl
                  ? "تحليلات معمارية عميقة، أنماط تصميم النظم الموزعة، وملاحظات تطبيقية من واقع هندسة البرمجيات الإنتاجية."
                  : "In-depth architectural analysis, distributed systems patterns, and actionable notes from production engineering practice."}
              </p>
            </div>
          </Reveal>

          <Reveal direction="up" delayMs={100} distance={16}>
            <Link
              href="/writings"
              className="inline-flex items-center gap-2 text-sm font-bold text-[var(--color-secondary)] hover:text-[var(--color-primary)] transition-colors shrink-0"
            >
              <span>{isRtl ? "تصفح كل الكتابات" : "View all writings"}</span>
              {isRtl ? <ArrowLeft className="w-4 h-4" /> : <ArrowRight className="w-4 h-4" />}
            </Link>
          </Reveal>
        </div>

        {/* Writings Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {featuredWritings.map((writing, idx) => (
            <Reveal key={writing.slug} direction="up" delayMs={150 + idx * 80} distance={18}>
              <article className="h-full flex flex-col justify-between rounded-2xl bg-[var(--color-surface)] border border-[var(--color-border)] hover:border-[var(--color-secondary)]/50 p-6 sm:p-7 shadow-sm transition-all duration-300 group hover:-translate-y-1">
                <div className="space-y-4">
                  {/* Category & Read Time */}
                  <div className="flex items-center justify-between text-xs font-mono text-[var(--color-text-subtle)]">
                    <span className="px-2.5 py-1 rounded-full bg-[var(--color-surface-sunken)] border border-[var(--color-border-subtle)] text-[var(--color-secondary)] font-semibold">
                      {getLocalizedText(writing.categoryLabel, language)}
                    </span>
                    <span className="inline-flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      {writing.readTimeMinutes} {isRtl ? "دقائق" : "min read"}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-[var(--color-text)] group-hover:text-[var(--color-secondary)] transition-colors leading-snug">
                    <Link href={`/writings/${writing.slug}`} className="focus:outline-none">
                      {getLocalizedText(writing.title, language)}
                    </Link>
                  </h3>

                  {/* Summary */}
                  <p className="text-sm text-[var(--color-text-muted)] line-clamp-3 leading-relaxed">
                    {getLocalizedText(writing.summary, language)}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {writing.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="inline-flex items-center gap-1 text-[11px] font-mono px-2 py-0.5 rounded bg-[var(--color-surface-sunken)] text-[var(--color-text-subtle)] border border-[var(--color-border-subtle)]"
                      >
                        <Tag className="w-2.5 h-2.5 opacity-60" />
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Read CTA */}
                <div className="pt-6 mt-6 border-t border-[var(--color-border-subtle)]">
                  <Link
                    href={`/writings/${writing.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[var(--color-secondary)] group-hover:text-[var(--color-primary)] transition-colors"
                  >
                    <span>{isRtl ? "قراءة المقال بالكامل" : "Read full essay"}</span>
                    {isRtl ? (
                      <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-1 transition-transform" />
                    ) : (
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    )}
                  </Link>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};
