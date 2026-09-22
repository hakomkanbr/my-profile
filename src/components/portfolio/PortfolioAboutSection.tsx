"use client";

import React from "react";
import Link from "next/link";
import { usePreferencesStore } from "@/store";
import { INSTRUCTOR_PROFILE } from "@/content/instructor";
import { getLocalizedText } from "@/lib/utils";
import { ArrowLeft, ArrowRight, FileText } from "lucide-react";
import { Reveal } from "@/components/motion";

export const PortfolioAboutSection: React.FC = () => {
  const { language } = usePreferencesStore();
  const isRtl = language === "ar";
  const name = getLocalizedText(INSTRUCTOR_PROFILE.name, language);

  return (
    <section
      id="about"
      className="py-10 sm:py-20 border-b border-[var(--color-border)] text-start"
    >
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 sm:space-y-10">
        <Reveal direction="up" distance={16}>
          <div className="space-y-2">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-[var(--color-secondary)]">
              {isRtl ? "نبذة مهنية" : "Profile"}
            </span>
            <h2 className="text-h1 font-extrabold text-[var(--color-text)] tracking-tight rtl:tracking-normal">
              {isRtl ? `عن ${name}` : `About ${name}`}
            </h2>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Secondary portrait */}
          <div className="md:col-span-4 flex justify-center md:justify-start">
            <Reveal direction="up" delayMs={100} distance={18}>
              <div className="relative rounded-2xl p-1.5 bg-[var(--color-surface)] border border-[var(--color-border)] shadow-sm max-w-[260px] sm:max-w-[280px] w-full hover:border-[var(--color-secondary)]/40 transition-colors">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/myphoto.jfif"
                  alt={name}
                  className="w-full aspect-4/5 object-cover object-top rounded-xl"
                  loading="lazy"
                />
                <div className="p-3 text-center">
                  <span className="text-sm font-bold text-[var(--color-text)] block">
                    {name}
                  </span>
                  <span className="text-xs text-[var(--color-text-subtle)] font-mono">
                    {isRtl ? "مهندس معماري أول للبرمجيات" : "Senior Software Architect"}
                  </span>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Narrative copy */}
          <div className="md:col-span-8 space-y-5 text-body text-[var(--color-text-muted)] leading-relaxed font-normal max-w-3xl">
            <Reveal direction="up" delayMs={150} distance={18}>
              <p className="text-lg sm:text-xl font-semibold text-[var(--color-text)] leading-relaxed">
                {isRtl
                  ? "مهندس معماري أول للبرمجيات ومطور شامل (Senior Software Architect & Full Stack Engineer) مع أكثر من 8 سنوات من الخبرة العملية في هندسة النظم، إدارة السحابة، وتصميم المعماريات الموزعة."
                  : "Senior Software Architect and Full Stack Engineer with 8+ years of experience architecting resilient software systems, cloud infrastructure, and distributed platforms."}
              </p>
            </Reveal>

            <Reveal direction="up" delayMs={220} distance={18}>
              <p className="text-base text-[var(--color-text-muted)] leading-relaxed">
                {isRtl
                  ? "يركز عملي على معمارية النظم الموزعة عالية الأداء، الواجهات البرمجية المرنة، والبنية التحتية السحابية الموثوقة. أهتم بهندسة المنظومة كبناء متكامل يبدأ من نقاء مجال العمل (Domain Purity) وأفضل ممارسات Clean Architecture، وصولاً إلى أمان الحاويات وتجربة المستخدم الفائقة."
                  : "My work centers on high-throughput distributed architectures, resilient APIs, and mission-critical cloud infrastructure. I approach systems holistically — from domain modeling and clean architecture patterns to container security and peak web vitals."}
              </p>
            </Reveal>

            <Reveal direction="up" delayMs={290} distance={18}>
              <p className="text-base text-[var(--color-text-muted)] leading-relaxed">
                {isRtl
                  ? "إلى جانب بناء البرمجيات، أمتلك خبرة واسعة في تدريب وتوجيه المطورين، ومساعدة الفرق على بناء فهم عميق لهندسة النظم الخلفية، معمارية واجهات البرمجة، وسير العمل التطبيقي المنتج."
                  : "Alongside engineering software, I have hands-on experience mentoring developers and helping teams build a strong foundation in backend engineering, APIs, architecture, and pragmatic development workflows."}
              </p>
            </Reveal>

            <Reveal direction="up" delayMs={360} distance={18}>
              <div className="pt-3 flex flex-wrap items-center gap-4">
                <Link
                  href="/about"
                  className="inline-flex items-center gap-1.5 text-sm font-bold text-[var(--color-secondary)] hover:text-[var(--color-primary)] transition-colors"
                >
                  <span>
                    {isRtl ? "المزيد عني وعن مسيرتي" : "Read full background"}
                  </span>
                  {isRtl ? (
                    <ArrowLeft className="w-4 h-4" />
                  ) : (
                    <ArrowRight className="w-4 h-4" />
                  )}
                </Link>

                <Link
                  href="/about#cv"
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-[var(--color-text-muted)] hover:text-[var(--color-text)] transition-colors"
                >
                  <FileText className="w-4 h-4 text-[var(--color-secondary)]" />
                  <span>
                    {isRtl ? "السيرة الذاتية" : "Curriculum Vitae"}
                  </span>
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
};
