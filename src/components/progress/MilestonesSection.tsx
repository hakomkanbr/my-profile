'use client';

import React from 'react';
import { usePreferencesStore, useProgressStore } from '@/store';
import { getLocalizedText } from '@/lib/utils';
import { getLearnerMilestones } from '@/lib/progress-selectors';
import { Badge } from '@/components/ui';
import { Award, CheckCircle2, Circle } from 'lucide-react';

export const MilestonesSection: React.FC = () => {
  const { language } = usePreferencesStore();
  const { progress } = useProgressStore();
  const isRtl = language === 'ar';

  const milestones = getLearnerMilestones(progress);

  return (
    <section className="py-12 sm:py-16 border-b border-[var(--color-border)] text-start">
      <div className="max-w-5xl mx-auto space-y-8">
        <div className="space-y-2">
          <Badge variant="primary" size="md" icon={<Award className="w-3.5 h-3.5" />}>
            {isRtl ? 'محطات الإنجاز والاعتماد' : 'Core Milestones'}
          </Badge>
          <h2 className="text-display sm:text-h1 font-extrabold text-[var(--color-text)]">
            {isRtl ? 'محطات التحول في مسيرتك' : 'Transformation Milestones'}
          </h2>
          <p className="text-body text-[var(--color-text-muted)] max-w-2xl">
            {isRtl
              ? 'معايير إنجاز واضحة تقيس تحولك التدريجي من متعلم إلى مطور واجهات وصانع ويب محترف.'
              : 'Measurable checkpoints celebrating your growth into an end-to-end web engineer.'}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {milestones.map((m) => (
            <div
              key={m.id}
              className="p-5 rounded-2xl bg-[var(--color-surface)] border border-[var(--color-border)] space-y-3 flex flex-col justify-between"
            >
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <div className="w-8 h-8 rounded-xl bg-[var(--color-surface-sunken)] flex items-center justify-center font-bold">
                    {m.isAchieved ? (
                      <CheckCircle2 className="w-5 h-5 text-[var(--color-primary)]" />
                    ) : (
                      <Circle className="w-4 h-4 text-[var(--color-text-subtle)]" />
                    )}
                  </div>
                  <span
                    className={`text-[10px] font-mono font-bold px-2 py-0.5 rounded-full ${
                      m.isAchieved
                        ? 'bg-[var(--color-primary-subtle)] text-[var(--color-primary)]'
                        : 'bg-[var(--color-surface-sunken)] text-[var(--color-text-subtle)]'
                    }`}
                  >
                    {m.isAchieved ? (isRtl ? 'تم التحقيق' : 'Achieved') : (isRtl ? 'قيد الوصول' : 'Locked')}
                  </span>
                </div>

                <h3 className="text-body font-bold text-[var(--color-text)] leading-snug">
                  {getLocalizedText(m.title, language)}
                </h3>

                <p className="text-caption text-[var(--color-text-muted)] leading-relaxed">
                  {getLocalizedText(m.description, language)}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
