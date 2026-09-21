'use client';

import React from 'react';
import { usePreferencesStore } from '@/store';
import { PROFESSIONAL_EXPERIENCES } from '@/content/experience';
import { getLocalizedText } from '@/lib/utils';
import { CheckCircle2 } from 'lucide-react';
import { Reveal } from '@/components/motion';

export const ExperienceTimelineSection: React.FC = () => {
  const { language } = usePreferencesStore();
  const isRtl = language === 'ar';

  return (
    <section id="experience" className="py-10 sm:py-20 border-b border-[var(--color-border)] text-start">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 sm:space-y-10">
        {/* Section Header */}
        <Reveal direction="up" distance={16}>
          <div className="space-y-2">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-[var(--color-secondary)]">
              {isRtl ? 'المسار المهني' : 'Career'}
            </span>
            <h2 className="text-h1 font-extrabold text-[var(--color-text)]">
              {isRtl ? 'الخبرات المهنية' : 'Professional Experience'}
            </h2>
            <p className="text-body text-[var(--color-text-muted)] max-w-2xl font-normal leading-relaxed">
              {isRtl
                ? 'مجالات الممارسة والعمل الفعلي في هندسة البرمجيات والتدريب التقني.'
                : 'Practical engagements and core competencies across web systems engineering and technical mentorship.'}
            </p>
          </div>
        </Reveal>

        {/* Timeline Layout */}
        <div className="space-y-5 sm:space-y-6 relative before:absolute before:inset-0 before:start-2 sm:before:start-3.5 before:w-0.5 before:bg-[var(--color-border)]">
          {PROFESSIONAL_EXPERIENCES.map((exp, idx) => (
            <Reveal key={exp.id} direction="up" delayMs={idx * 140} distance={18}>
              <div className="relative ps-6 sm:ps-10 group">
                {/* Timeline dot */}
                <div className="absolute start-0 sm:start-1.5 top-2 -translate-x-1/2 rtl:translate-x-1/2 w-4 h-4 rounded-full bg-[var(--color-surface)] border-2 border-[var(--color-secondary)] group-hover:bg-[var(--color-secondary)] group-hover:scale-110 transition-all duration-200" />

                {/* Experience Card */}
                <div className="p-5 sm:p-7 rounded-2xl bg-[var(--color-surface)] border border-[var(--color-border)] shadow-2xs space-y-4 hover:border-[var(--color-secondary)]/40 hover:-translate-y-0.5 transition-all duration-300">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[var(--color-border-subtle)] pb-3">
                    <div className="space-y-0.5">
                      <h3 className="text-h3 font-bold text-[var(--color-text)]">
                        {getLocalizedText(exp.role, language)}
                      </h3>
                      {exp.organization && (
                        <span className="text-xs font-mono font-semibold text-[var(--color-secondary)]">
                          {getLocalizedText(exp.organization, language)}
                        </span>
                      )}
                    </div>
                    <span className="text-xs font-mono text-[var(--color-text-subtle)] font-medium">
                      0{idx + 1} / PRACTICE
                    </span>
                  </div>

                  <p className="text-body text-[var(--color-text-muted)] font-normal leading-relaxed">
                    {getLocalizedText(exp.scope, language)}
                  </p>

                  {/* Highlights */}
                  <div className="space-y-2 pt-1">
                    {exp.highlights.map((highlight, hIdx) => (
                      <div key={hIdx} className="flex items-start gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-[var(--color-secondary)] shrink-0 mt-1" />
                        <span className="text-body-sm text-[var(--color-text)] font-medium">
                          {getLocalizedText(highlight, language)}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Tech Pills */}
                  <div className="flex flex-wrap gap-1.5 pt-3 border-t border-[var(--color-border-subtle)]">
                    {exp.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 rounded-md text-[11px] font-mono font-medium bg-[var(--color-surface-sunken)] border border-[var(--color-border-subtle)] text-[var(--color-text-muted)]"
                      >
                        {tech}
                      </span>
                    ))}
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
