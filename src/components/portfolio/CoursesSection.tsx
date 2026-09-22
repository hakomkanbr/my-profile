"use client";

import React from "react";
import Link from "next/link";
import { usePreferencesStore } from "@/store";
import { ALL_COURSES } from "@/content/courses";
import { getLocalizedText } from "@/lib/utils";
import { Button } from "@/components/ui";
import { ArrowLeft, ArrowRight, GraduationCap } from "lucide-react";
import { Reveal } from "@/components/motion";

export const CoursesSection: React.FC = () => {
  const { language } = usePreferencesStore();
  const isRtl = language === "ar";

  return (
    <section
      id="training"
      className="py-10 sm:py-20 border-b border-[var(--color-border)] text-start"
    >
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 sm:space-y-10">
        {/* Section Header (Rule 10: Training is a focused part, not the main identity) */}
        <Reveal direction="up" delay={50}>
          <div className="space-y-2">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-[var(--color-secondary)]">
              {isRtl ? "نقل المعرفة" : "Knowledge Sharing"}
            </span>
            <h2 className="text-h1 font-extrabold text-[var(--color-text)] tracking-tight rtl:tracking-normal">
              {isRtl ? "المسارات التدريبية" : "Training & Mentorship"}
            </h2>
            <p className="text-body text-[var(--color-text-muted)] max-w-2xl font-normal leading-relaxed">
              {isRtl
                ? "مسارات تدريبية أشارك من خلالها خبرتي العملية في تطوير البرمجيات وهندسة الأنظمة."
                : "Practical courses and engineering pathways where I share hands-on software development and system architecture experience."}
            </p>
          </div>
        </Reveal>

        {/* Extensible Courses Grid (Rule 7, 8, 9, 11) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
          {ALL_COURSES.map((course, idx) => (
            <Reveal key={course.id} direction="up" delay={100 + idx * 80}>
              <div className="group p-5 sm:p-7 rounded-2xl bg-[var(--color-surface)] border border-[var(--color-border)] shadow-2xs flex flex-col justify-between space-y-5 sm:space-y-6 hover:border-[var(--color-secondary)]/60 hover:-translate-y-0.75 hover:shadow-md transition-all duration-300 h-full">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <GraduationCap className="w-5 h-5 text-[var(--color-secondary)]" />
                      <span className="font-mono text-xs font-bold text-[var(--color-text-subtle)]">
                        {course.code}
                      </span>
                    </div>

                    <span className="text-[11px] font-mono font-semibold px-2.5 py-0.5 rounded-full bg-[var(--color-surface-sunken)] border border-[var(--color-border)] text-[var(--color-text-subtle)]">
                      {getLocalizedText(course.level, language)}
                    </span>
                  </div>

                  <div className="space-y-1.5">
                    <h3 className="text-h2 font-extrabold text-[var(--color-text)] tracking-tight rtl:tracking-normal">
                      {getLocalizedText(course.title, language)}
                    </h3>
                    <p className="text-body-sm font-semibold text-[var(--color-secondary)]">
                      {getLocalizedText(course.tagline, language)}
                    </p>
                  </div>

                  <p className="text-body-sm text-[var(--color-text-muted)] font-normal leading-relaxed">
                    {getLocalizedText(course.description, language)}
                  </p>

                  {/* Topics covered */}
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {course.topics.map((t) => (
                      <span
                        key={t}
                        className="px-2.5 py-1 rounded-md text-[11px] font-mono font-medium bg-[var(--color-surface-sunken)] border border-[var(--color-border-subtle)] text-[var(--color-text-muted)]"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-[var(--color-border-subtle)] flex items-center justify-between">
                  {course.status === "available" && course.href ? (
                    <Link href={course.href}>
                      <Button
                        size="sm"
                        variant="primary"
                        className="font-bold shadow-2xs group/btn"
                        rightIcon={
                          isRtl ? (
                            <ArrowLeft className="w-3.5 h-3.5 transition-transform group-hover/btn:-translate-x-0.5" />
                          ) : (
                            <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-0.5" />
                          )
                        }
                      >
                        <span>{isRtl ? "عرض الدورة" : "View Course"}</span>
                      </Button>
                    </Link>
                  ) : (
                    <span className="text-xs font-mono text-[var(--color-text-subtle)] font-medium">
                      {isRtl ? "قريباً" : "Coming Soon"}
                    </span>
                  )}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};
