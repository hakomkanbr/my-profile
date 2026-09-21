"use client";

import React from "react";
import { usePreferencesStore } from "@/store";
import { JOURNEY_STAGES } from "@/content/stages";
import { getLocalizedText } from "@/lib/utils";
import { Badge } from "@/components/ui";
import { Layers } from "lucide-react";

export const TransformationFlow: React.FC = () => {
  const { language } = usePreferencesStore();
  const isRtl = language === "ar";

  return (
    <section className="py-14 sm:py-20 border-b border-[var(--color-border)] text-start">
      <div className=" mx-auto space-y-10">
        <div className="space-y-3">
          <Badge
            variant="secondary"
            size="md"
            icon={<Layers className="w-3.5 h-3.5" />}
          >
            {isRtl ? "فلسفة التحول المعماري" : "The Transformation Pipeline"}
          </Badge>
          <h2 className="text-display sm:text-h1 font-extrabold text-[var(--color-text)] tracking-tight">
            {isRtl
              ? "كيف يتحول الفكر إلى كود ثم منتج؟"
              : "How Concepts Become Shipped Products"}
          </h2>
          <p className="text-body text-[var(--color-text-muted)] max-w-2xl leading-relaxed">
            {isRtl
              ? "في هندسة البرمجيات الاحترافية، لا يبدأ العمل بكتابة الأكواد عشوائياً. هذه السلسلة المتماسكة توضح التحول المتدرج في تفكيرك ومهاراتك عبر المراحل السبع."
              : "In professional software craftsmanship, code is never written randomly. This pipeline illustrates the cumulative evolution of your engineering mindset."}
          </p>
        </div>

        {/* Desktop Step-by-Step Flow Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-7 gap-3">
          {JOURNEY_STAGES.map((stage, idx) => (
            <div
              key={stage.id}
              className="p-4 rounded-2xl bg-[var(--color-surface)] border border-[var(--color-border)] flex flex-col justify-between space-y-3 hover:border-[var(--color-secondary)] transition-all group"
            >
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold text-[var(--color-secondary)]">
                    {stage.number}
                  </span>
                  <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-[var(--color-surface-sunken)] border border-[var(--color-border-subtle)] text-[var(--color-text-subtle)]">
                    {stage.philosophyStep}
                  </span>
                </div>

                <h3 className="text-h4 font-bold text-[var(--color-text)] group-hover:text-[var(--color-primary)] transition-colors">
                  {stage.code}
                </h3>

                <p className="text-[11px] text-[var(--color-text-muted)] leading-relaxed">
                  {getLocalizedText(stage.title, language)}
                </p>
              </div>

              <div className="pt-2 border-t border-[var(--color-border-subtle)] text-[10px] font-mono font-bold text-[var(--color-text-subtle)]">
                {idx === 0
                  ? isRtl
                    ? "فهم الفكرة"
                    : "Analyze Need"
                  : idx === 1
                    ? isRtl
                      ? "هندسة التجربة"
                      : "Design UI/UX"
                    : idx === 2
                      ? isRtl
                        ? "الأساس المتين"
                        : "Build Layout"
                      : idx === 3
                        ? isRtl
                          ? "التفاعل الحي"
                          : "React Logic"
                        : idx === 4
                          ? isRtl
                            ? "تسريع بالذكاء"
                            : "AI Copilot"
                          : idx === 5
                            ? isRtl
                              ? "الإطلاق والـ SEO"
                              : "Deploy Live"
                            : isRtl
                              ? "جلب العملاء"
                              : "Monetize"}
              </div>
            </div>
          ))}
        </div>

        {/* Takeaway Insight */}
        <div className="p-6 rounded-2xl bg-[var(--color-surface-sunken)] border border-[var(--color-border)] flex items-start gap-4 text-start">
          <div className="w-2 h-2 rounded-full bg-[var(--color-primary)] mt-2 shrink-0" />
          <p className="text-body-sm text-[var(--color-text-muted)] leading-relaxed">
            <strong className="text-[var(--color-text)] font-bold">
              {isRtl ? "المبدأ الأساسي: " : "Foundational Law: "}
            </strong>
            {isRtl
              ? "أنت لا تتعلم أداة ثم تتركها جانباً؛ ما تتعلمه في المرحلة 01 يوجه تصميمك في 02، ويحدد بنية كودك في 03 و04، ويتسارع بالذكاء الاصطناعي في 05، وينتهي بموقع حي مُسوق في 06 و07."
              : "You never learn a skill in isolation; stage 01 informs design in 02, dictates architecture in 03 and 04, accelerates with AI in 05, and ships in 06 and 07."}
          </p>
        </div>
      </div>
    </section>
  );
};
