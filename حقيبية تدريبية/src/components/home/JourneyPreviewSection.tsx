'use client';

import React from 'react';
import Link from 'next/link';
import { usePreferencesStore } from '@/store';
import { JOURNEY_STAGES } from '@/content';
import { StageBadge, Button, Card } from '@/components';
import { ArrowLeft, ArrowRight, Compass } from 'lucide-react';

export const JourneyPreviewSection: React.FC = () => {
  const { language } = usePreferencesStore();
  const isRtl = language === 'ar';

  return (
    <section className="py-12 sm:py-16 border-b border-[var(--color-border)] text-start">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
        <div className="space-y-2 max-w-3xl">
          <span className="text-label text-[var(--color-secondary)]">
            {isRtl ? 'خارطة الطريق' : 'Roadmap'}
          </span>
          <h2 className="text-h2 font-bold text-[var(--color-text)]">
            {isRtl
              ? 'رحلة المتدرب من 7 مراحل متسلسلة'
              : 'The 7-Stage Structured Learning Journey'}
          </h2>
          <p className="text-body-sm text-[var(--color-text-muted)] leading-relaxed">
            {isRtl
              ? 'خارطة طريق مدروسة خطوة بخطوة؛ لا ننتقل إلى مرحلة جديدة حتى تتقن المرحلة التي قبلها وتبني مشروعها العملي.'
              : 'A step-by-step sequential blueprint ensuring you build, verify, and master each stage before advancing.'}
          </p>
        </div>

        <Link href="/journey" className="shrink-0">
          <Button
            variant="outline"
            size="md"
            rightIcon={
              isRtl ? (
                <ArrowLeft className="w-4 h-4" />
              ) : (
                <ArrowRight className="w-4 h-4" />
              )
            }
          >
            {isRtl ? 'استعراض تفاصيل الرحلة' : 'Explore Full Journey'}
          </Button>
        </Link>
      </div>

      {/* Grid of the 7 Stages */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {JOURNEY_STAGES.map((stage) => (
          <Link key={stage.id} href="/journey" className="group">
            <Card
              variant="stage"
              className="h-full flex flex-col justify-between p-5 hover:border-[var(--color-secondary)] transition-all"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <StageBadge
                    stageId={stage.id}
                    stageNumber={stage.number}
                    stageCode={stage.code}
                    size="sm"
                  />
                  <span className="text-[11px] font-mono font-bold text-[var(--color-text-subtle)]">
                    {stage.philosophyStep}
                  </span>
                </div>

                <h3 className="text-body font-bold text-[var(--color-text)] group-hover:text-[var(--color-primary)] transition-colors mb-1.5 leading-snug">
                  {isRtl ? stage.title.ar : stage.title.en}
                </h3>
                <p className="text-caption text-[var(--color-text-muted)] line-clamp-2 leading-relaxed">
                  {isRtl ? stage.tagline.ar : stage.tagline.en}
                </p>
              </div>

              <div className="pt-3 mt-4 border-t border-[var(--color-border-subtle)] flex items-center justify-between text-caption font-semibold text-[var(--color-primary)]">
                <span>{isRtl ? 'المحطة ' + stage.number : 'Stage ' + stage.number}</span>
                <Compass className="w-3.5 h-3.5" />
              </div>
            </Card>
          </Link>
        ))}
      </div>
    </section>
  );
};
