'use client';

import React from 'react';
import Link from 'next/link';
import { usePreferencesStore, useProgressStore } from '@/store';
import { getLocalizedText, cn } from '@/lib/utils';
import { getProjectsProgress } from '@/lib/progress-selectors';
import { Badge, Button } from '@/components/ui';
import { Briefcase, ArrowLeft, ArrowRight } from 'lucide-react';


export const ProjectsProgressSection: React.FC = () => {
  const { language } = usePreferencesStore();
  const { progress } = useProgressStore();
  const isRtl = language === 'ar';

  const projectsComputed = getProjectsProgress(progress);

  return (
    <section className="py-12 sm:py-16 border-b border-[var(--color-border)] text-start">
      <div className="max-w-5xl mx-auto space-y-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div className="space-y-2">
            <Badge variant="secondary" size="md" icon={<Briefcase className="w-3.5 h-3.5" />}>
              {isRtl ? 'ماذا تبني الآن؟' : 'What Are You Building?'}
            </Badge>
            <h2 className="text-display sm:text-h1 font-extrabold text-[var(--color-text)]">
              {isRtl ? 'حالة المشاريع وورش العمل' : 'Practical Projects & Workshops'}
            </h2>
            <p className="text-body text-[var(--color-text-muted)] max-w-2xl">
              {isRtl
                ? 'مشاريع حقيقية تصنعها بيدك لتكون معرض أعمالك الفعلي عند الإطلاق.'
                : 'Real products you craft hands-on to become your high-converting portfolio.'}
            </p>
          </div>

          <Link href="/web-creator-ai/projects">
            <Button
              variant="outline"
              size="sm"
              rightIcon={isRtl ? <ArrowLeft className="w-3.5 h-3.5" /> : <ArrowRight className="w-3.5 h-3.5" />}
            >
              {isRtl ? 'عرض كل ورش العمل' : 'View All Workshops'}
            </Button>
          </Link>
        </div>

        {/* Projects Cards List */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projectsComputed.map((item) => {
            const isCompleted = item.status === 'completed';
            const isInProgress = item.status === 'in_progress';

            return (
              <div
                key={item.project.id}
                className={cn(
                  'p-6 rounded-2xl border flex flex-col justify-between space-y-4 transition-all',
                  isCompleted
                    ? 'bg-[var(--color-surface)] border-[var(--color-primary)]'
                    : isInProgress
                    ? 'bg-[var(--color-surface)] border-2 border-[var(--color-secondary)] shadow-sm'
                    : 'bg-[var(--color-surface-sunken)]/50 border-[var(--color-border-subtle)] opacity-80'
                )}
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs font-bold text-[var(--color-secondary)]">
                      {item.project.code}
                    </span>
                    {isCompleted ? (
                      <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-[var(--color-primary-subtle)] text-[var(--color-primary)]">
                        {isRtl ? 'تم التسليم ✓' : 'Completed ✓'}
                      </span>
                    ) : isInProgress ? (
                      <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-[var(--color-secondary)]/15 text-[var(--color-secondary)]">
                        {isRtl ? 'قيد التنفيذ ◐' : 'In Progress ◐'}
                      </span>
                    ) : (
                      <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-[var(--color-surface-sunken)] border text-[var(--color-text-subtle)]">
                        {isRtl ? 'قادم ○' : 'Upcoming ○'}
                      </span>
                    )}
                  </div>

                  <h3 className="text-h4 font-bold text-[var(--color-text)] leading-snug">
                    {getLocalizedText(item.project.title, language)}
                  </h3>

                  <p className="text-caption text-[var(--color-text-muted)] line-clamp-2">
                    {getLocalizedText(item.project.tagline, language)}
                  </p>

                  <div className="flex flex-wrap gap-1 pt-1">
                    {item.project.techStack.slice(0, 3).map((t) => (
                      <span
                        key={t}
                        className="px-1.5 py-0.5 rounded text-[10px] font-mono bg-[var(--color-surface-sunken)] border border-[var(--color-border-subtle)] text-[var(--color-text-subtle)]"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-3 border-t border-[var(--color-border-subtle)]">
                  <Link
                    href="/web-creator-ai/projects"
                    className="inline-flex items-center justify-between w-full text-xs font-bold text-[var(--color-primary)] hover:underline"
                  >
                    <span>{isRtl ? 'دخول ورشة العمل' : 'Open Workshop'}</span>
                    {isRtl ? <ArrowLeft className="w-3.5 h-3.5" /> : <ArrowRight className="w-3.5 h-3.5" />}
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
