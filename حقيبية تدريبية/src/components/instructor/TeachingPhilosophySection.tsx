'use client';

import React from 'react';
import { usePreferencesStore } from '@/store';
import { INSTRUCTOR_PROFILE } from '@/content';
import { Card } from '@/components/ui';
import { Hammer, Cpu, Globe, Award } from 'lucide-react';

export const TeachingPhilosophySection: React.FC = () => {
  const { language } = usePreferencesStore();
  const isRtl = language === 'ar';
  const profile = INSTRUCTOR_PROFILE;

  const iconMap: Record<string, React.ReactNode> = {
    Hammer: <Hammer className="w-5 h-5 text-[var(--color-primary)]" />,
    Cpu: <Cpu className="w-5 h-5 text-[var(--color-secondary)]" />,
    Globe: <Globe className="w-5 h-5 text-[var(--color-primary)]" />,
    Award: <Award className="w-5 h-5 text-[var(--color-secondary)]" />,
  };

  return (
    <section className="py-8 sm:py-12 border-b border-[var(--color-border)] text-start">
      <div className="max-w-3xl mb-8 space-y-2">
        <span className="text-label text-[var(--color-secondary)]">
          {isRtl ? 'فلسفة التدريس' : 'Pedagogical Philosophy'}
        </span>
        <h2 className="text-h2 font-bold text-[var(--color-text)]">
          {isRtl ? 'كيف أعلّم؟' : 'How I Teach'}
        </h2>
        <blockquote className="text-h3 font-extrabold text-[var(--color-primary)] italic pt-1">
          {isRtl
            ? '«لا أريد منك أن تحفظ الكود.. أريدك أن تفهم لماذا كتبناه.»'
            : '“I don’t want you to memorize code. I want you to understand why we wrote it.”'}
        </blockquote>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {profile.teachingPhilosophy.items.map((item) => (
          <Card
            key={item.number}
            variant="educational"
            className="p-6 bg-[var(--color-surface)] flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="font-mono text-xs font-black px-2 py-0.5 rounded bg-[var(--color-primary-subtle)] text-[var(--color-primary)]">
                  {item.number}
                </span>
                <div className="w-8 h-8 rounded-lg bg-[var(--color-surface-sunken)] flex items-center justify-center">
                  {iconMap[item.icon] || <Hammer className="w-4 h-4" />}
                </div>
              </div>

              <h3 className="text-body font-bold text-[var(--color-text)] mb-2">
                {isRtl ? item.title.ar : item.title.en}
              </h3>
              <p className="text-body-sm text-[var(--color-text-muted)] leading-relaxed">
                {isRtl ? item.description.ar : item.description.en}
              </p>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
};
