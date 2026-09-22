"use client";

import React from "react";
import Link from "next/link";
import { usePreferencesStore } from "@/store";
import { PORTFOLIO_PROJECTS } from "@/content";
import { getLocalizedText } from "@/lib/utils";
import { Button } from "@/components/ui";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Reveal } from "@/components/motion";

export const FeaturedProjectsSection: React.FC = () => {
  const { language } = usePreferencesStore();
  const isRtl = language === "ar";

  return (
    <section
      id="projects"
      className="py-10 sm:py-20 border-b border-[var(--color-border)] text-start"
    >
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 sm:space-y-10">
        {/* Section Header */}
        <Reveal direction="up" delay={50}>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div className="space-y-2">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-[var(--color-secondary)]">
                {isRtl ? "الأعمال والأنظمة" : "Engineering Work"}
              </span>
              <h2 className="text-h1 font-extrabold text-[var(--color-text)] tracking-tight rtl:tracking-normal">
                {isRtl
                  ? "مشاريع وأنظمة برمجية مختارة"
                  : "Selected Engineering Projects"}
              </h2>
              <p className="text-body text-[var(--color-text-muted)] max-w-2xl font-normal leading-relaxed">
                {isRtl
                  ? "دراسات حالة تبرز طريقة التفكير البرمجي، القرارات المعمارية، وحل المشكلات الواقعية."
                  : "Case studies highlighting architectural decisions, problem contexts, and modern system design."}
              </p>
            </div>

            <Link href="/projects" className="w-full sm:w-auto">
              <Button
                variant="outline"
                size="sm"
                className="w-full sm:w-auto group hover:border-[var(--color-secondary)]/60 justify-center"
                rightIcon={
                  isRtl ? (
                    <ArrowLeft className="w-3.5 h-3.5 transition-transform group-hover:-translate-x-0.5" />
                  ) : (
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
                  )
                }
              >
                {isRtl ? "عرض كل المشاريع" : "All Projects"}
              </Button>
            </Link>
          </div>
        </Reveal>

        {/* Case Studies Cards */}
        <div className="space-y-6 sm:space-y-8">
          {PORTFOLIO_PROJECTS.filter((p) => p.featured).map((project, idx) => (
            <Reveal key={project.slug} direction="up" delay={100 + idx * 80}>
              <div className="group p-5 sm:p-9 rounded-2xl bg-[var(--color-surface)] border border-[var(--color-border)] shadow-2xs space-y-5 sm:space-y-6 hover:border-[var(--color-secondary)]/60 hover:-translate-y-0.75 hover:shadow-md transition-all duration-300">
                {/* Header row */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[var(--color-border-subtle)] pb-4">
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-xs font-bold text-[var(--color-secondary)]">
                      {isRtl ? `0${idx + 1} / دراسة حالة` : `0${idx + 1} / CASE STUDY`}
                    </span>
                    <span className="text-xs font-mono font-semibold px-2.5 py-0.5 rounded-full bg-[var(--color-surface-sunken)] border border-[var(--color-border)] text-[var(--color-text-subtle)]">
                      {getLocalizedText(project.category, language)}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-xs font-mono text-[var(--color-text-subtle)] font-medium">
                    {project.status && (
                      <span className="text-[11px] text-emerald-600 dark:text-emerald-400">
                        {getLocalizedText(project.status, language)}
                      </span>
                    )}
                    {project.status && <span>·</span>}
                    <span>{getLocalizedText(project.role, language)}</span>
                  </div>
                </div>

                {/* Title & Description */}
                <div className="space-y-2">
                  <h3 className="text-h2 font-extrabold text-[var(--color-text)] tracking-tight rtl:tracking-normal">
                    <Link
                      href={`/projects/${project.slug}`}
                      className="hover:text-[var(--color-secondary)] transition-colors"
                    >
                      {getLocalizedText(project.title, language)}
                    </Link>
                  </h3>
                  <p className="text-body text-[var(--color-text-muted)] font-normal leading-relaxed">
                    {getLocalizedText(project.tagline, language)}
                  </p>
                </div>

                {/* Engineering Case Study Pillars: Problem & Solution/Architecture */}
                {(project.problem ||
                  project.solution ||
                  project.architecture) && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                    {project.problem && (
                      <div className="p-4 rounded-xl bg-[var(--color-surface-sunken)] border border-[var(--color-border-subtle)] space-y-1.5">
                        <span className="text-[11px] font-mono font-bold text-[var(--color-secondary)] uppercase">
                          {isRtl
                            ? "المشكلة والسياق"
                            : "Problem Context"}
                        </span>
                        <p className="text-xs text-[var(--color-text-muted)] leading-relaxed font-normal">
                          {getLocalizedText(project.problem, language)}
                        </p>
                      </div>
                    )}

                    {(project.solution || project.architecture) && (
                      <div className="p-4 rounded-xl bg-[var(--color-surface-sunken)] border border-[var(--color-border-subtle)] space-y-1.5">
                        <span className="text-[11px] font-mono font-bold text-[var(--color-secondary)] uppercase">
                          {isRtl
                            ? "الحل والمعمارية"
                            : "Engineering Architecture"}
                        </span>
                        <p className="text-xs text-[var(--color-text-muted)] leading-relaxed font-normal">
                          {getLocalizedText(
                            project.architecture || project.solution!,
                            language,
                          )}
                        </p>
                      </div>
                    )}
                  </div>
                )}

                {/* Key Features Highlights */}
                {project.keyFeatures && project.keyFeatures.length > 0 && (
                  <div className="space-y-2 pt-2">
                    <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[var(--color-text-subtle)]">
                      {isRtl
                        ? "أبرز مميزات المنظومة"
                        : "System Highlights"}
                    </span>
                    <div className="space-y-1.5">
                      {project.keyFeatures.slice(0, 3).map((feature, fIdx) => (
                        <div
                          key={fIdx}
                          className="flex items-start gap-2 text-xs text-[var(--color-text)] font-medium"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-secondary)] shrink-0 mt-1.5" />
                          <span>{getLocalizedText(feature, language)}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Footer: Tech Stack & Link */}
                <div className="pt-4 border-t border-[var(--color-border-subtle)] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="flex flex-wrap gap-1.5">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 rounded-md text-[11px] font-mono font-medium bg-[var(--color-surface-sunken)] border border-[var(--color-border-subtle)] text-[var(--color-text-muted)]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-4 shrink-0">
                    {project.liveUrl && (
                      <Link
                        href={project.liveUrl}
                        className="inline-flex items-center gap-1.5 text-xs font-semibold text-[var(--color-text-muted)] hover:text-[var(--color-text)] transition-colors"
                      >
                        <span>{isRtl ? "معاينة حية" : "Live Preview"}</span>
                      </Link>
                    )}
                    <Link
                      href={`/projects/${project.slug}`}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-[var(--color-secondary)] hover:text-[var(--color-primary)] transition-colors"
                    >
                      <span>
                        {isRtl ? "عرض دراسة الحالة" : "View Case Study"}
                      </span>
                      {isRtl ? (
                        <ArrowLeft className="w-3.5 h-3.5" />
                      ) : (
                        <ArrowRight className="w-3.5 h-3.5" />
                      )}
                    </Link>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};
