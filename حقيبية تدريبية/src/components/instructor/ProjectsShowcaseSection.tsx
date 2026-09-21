'use client';

import React from 'react';
import { usePreferencesStore } from '@/store';
import { INSTRUCTOR_PROFILE } from '@/content';
import { Card, Badge } from '@/components/ui';
import { Sparkles } from 'lucide-react';

export const ProjectsShowcaseSection: React.FC = () => {
  const { language } = usePreferencesStore();
  const isRtl = language === 'ar';
  const profile = INSTRUCTOR_PROFILE;

  return (
    <section className="py-8 sm:py-12 border-b border-[var(--color-border)] text-start">
      <div className="max-w-3xl mb-8 space-y-2">
        <span className="text-label text-[var(--color-primary)]">
          {isRtl ? 'نماذج العمل والإنتاج' : 'Work Showcase'}
        </span>
        <h2 className="text-h2 font-bold text-[var(--color-text)]">
          {isRtl ? 'مشاريع تطبيقية ونظم منشورة' : 'Production Systems & Real Showcases'}
        </h2>
        <p className="text-body-sm text-[var(--color-text-muted)] leading-relaxed">
          {isRtl
            ? 'نماذج من المعماريات البرمجية وأنظمة التصميم التي تم بناؤها وتطبيقها وفق أعلى معايير الويب الحديثة.'
            : 'Software architectures and design systems built adhering to strict modern web benchmarks.'}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {profile.showcaseProjects.map((prj) => (
          <Card key={prj.id} variant="project" className="p-6 bg-[var(--color-surface)] flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between gap-3 mb-3">
                <span className="text-caption font-bold px-2 py-0.5 rounded-md bg-[var(--color-primary-subtle)] text-[var(--color-primary)]">
                  {isRtl ? prj.category.ar : prj.category.en}
                </span>
                <Badge variant="outline" size="sm">
                  {isRtl ? prj.role.ar : prj.role.en}
                </Badge>
              </div>

              <h3 className="text-h4 font-bold text-[var(--color-text)] mb-2">
                {isRtl ? prj.title.ar : prj.title.en}
              </h3>

              <p className="text-body-sm text-[var(--color-text-muted)] leading-relaxed mb-4">
                {isRtl ? prj.description.ar : prj.description.en}
              </p>

              <div className="p-3 rounded-xl bg-[var(--color-surface-sunken)] border border-[var(--color-border-subtle)] mb-4 flex items-start gap-2 text-caption">
                <Sparkles className="w-4 h-4 text-[var(--color-secondary)] shrink-0 mt-0.5" />
                <span className="font-semibold text-[var(--color-text)]">
                  {isRtl ? prj.keyHighlight.ar : prj.keyHighlight.en}
                </span>
              </div>
            </div>

            <div className="pt-4 border-t border-[var(--color-border-subtle)] flex flex-wrap gap-1.5">
              {prj.techStack.map((tech) => (
                <span
                  key={tech}
                  className="text-[11px] font-mono px-2 py-0.5 rounded-md bg-[var(--color-surface-sunken)] border border-[var(--color-border)] text-[var(--color-text-muted)]"
                >
                  {tech}
                </span>
              ))}
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
};
