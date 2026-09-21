"use client";

import React from "react";
import Link from "next/link";
import { usePreferencesStore } from "@/store";
import { INSTRUCTOR_PROFILE } from "@/content/instructor";
import { getLocalizedText } from "@/lib/utils";
import { Button } from "@/components/ui";
import { ArrowLeft, ArrowRight } from "lucide-react";

export const TeachingPillarsSection: React.FC = () => {
  const { language } = usePreferencesStore();
  const isRtl = language === "ar";

  return (
    <section className="py-14 sm:py-20 border-b border-[var(--color-border)] text-start">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div className="space-y-2">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-[var(--color-secondary)]">
              {isRtl ? "المنهجية والأسلوب" : "Pedagogical Philosophy"}
            </span>
            <h2 className="text-h1 font-extrabold text-[var(--color-text)]">
              {getLocalizedText(
                INSTRUCTOR_PROFILE.teachingPhilosophy.title,
                language,
              )}
            </h2>
          </div>

          <Link href="/teaching">
            <Button
              variant="outline"
              size="sm"
              rightIcon={
                isRtl ? (
                  <ArrowLeft className="w-3.5 h-3.5" />
                ) : (
                  <ArrowRight className="w-3.5 h-3.5" />
                )
              }
            >
              {isRtl ? "تفاصيل المنهج" : "Explore Philosophy"}
            </Button>
          </Link>
        </div>

        {/* 4-Item Numbered Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {INSTRUCTOR_PROFILE.teachingPhilosophy.items.map((item) => (
            <div
              key={item.number}
              className="p-7 rounded-2xl bg-[var(--color-surface)] border border-[var(--color-border)] space-y-3 hover:border-[var(--color-secondary)]/50 transition-all shadow-xs"
            >
              <div className="flex items-center justify-between">
                <span className="font-mono text-base font-extrabold text-[var(--color-secondary)]">
                  {item.number}
                </span>
                <span className="h-px flex-1 mx-4 bg-[var(--color-border-subtle)]" />
              </div>

              <h3 className="text-h3 font-bold text-[var(--color-text)]">
                {getLocalizedText(item.title, language)}
              </h3>

              <p className="text-body-sm text-[var(--color-text-muted)] leading-relaxed">
                {getLocalizedText(item.description, language)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
