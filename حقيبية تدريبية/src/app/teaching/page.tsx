'use client';

import React from 'react';
import Link from 'next/link';
import {
  PortfolioShell,
  PageContainer,
  PageHeader,
  PageSection,
  Button,
} from '@/components';
import { INSTRUCTOR_PROFILE } from '@/content/instructor';
import { usePreferencesStore } from '@/store';
import { getLocalizedText } from '@/lib/utils';
import { ArrowLeft, ArrowRight, CheckCircle2 } from 'lucide-react';

export default function TeachingPage() {
  const { language } = usePreferencesStore();
  const isRtl = language === 'ar';

  return (
    <PortfolioShell>
      <PageContainer>
        <PageHeader
          title={getLocalizedText(INSTRUCTOR_PROFILE.whatITeach.title, language)}
          subtitle={getLocalizedText(INSTRUCTOR_PROFILE.whatITeach.description, language)}
          breadcrumbs={[
            { id: '1', label: isRtl ? 'الرئيسية' : 'Home', href: '/' },
            { id: '2', label: isRtl ? 'التدريس' : 'Teaching', isCurrent: true },
          ]}
        />

        {/* Core Tracks */}
        <PageSection
          title={isRtl ? 'المسارات التي أعلّمها' : 'Core Teaching Tracks'}
        >
          <div className="space-y-3">
            {INSTRUCTOR_PROFILE.whatITeach.coreTracks.map((track, idx) => (
              <div
                key={idx}
                className="p-5 rounded-xl bg-[var(--color-surface)] border border-[var(--color-border)] flex items-center gap-3 text-start"
              >
                <CheckCircle2 className="w-5 h-5 text-[var(--color-primary)] shrink-0" />
                <span className="text-body font-semibold text-[var(--color-text)]">
                  {getLocalizedText(track, language)}
                </span>
              </div>
            ))}
          </div>
        </PageSection>

        {/* Dual Synergy: Engineering informs teaching & teaching sharpens engineering */}
        <PageSection
          title={getLocalizedText(INSTRUCTOR_PROFILE.developerPlusInstructor.title, language)}
          subtitle={getLocalizedText(INSTRUCTOR_PROFILE.developerPlusInstructor.synergyStatement, language)}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-start">
            {/* Developer side */}
            <div className="p-7 rounded-2xl bg-[var(--color-surface)] border border-[var(--color-border)] shadow-xs space-y-4">
              <span className="text-xs font-mono font-bold text-[var(--color-secondary)] uppercase tracking-wider">
                ENGINEERING PRAGMATISM
              </span>
              <h3 className="text-h3 font-bold text-[var(--color-text)]">
                {getLocalizedText(INSTRUCTOR_PROFILE.developerPlusInstructor.developerSide.headline, language)}
              </h3>
              <ul className="space-y-2.5 text-body-sm text-[var(--color-text-muted)]">
                {INSTRUCTOR_PROFILE.developerPlusInstructor.developerSide.points.map((pt, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-secondary)] mt-2 shrink-0" />
                    <span>{getLocalizedText(pt, language)}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Instructor side */}
            <div className="p-7 rounded-2xl bg-[var(--color-surface)] border border-[var(--color-border)] shadow-xs space-y-4">
              <span className="text-xs font-mono font-bold text-[var(--color-accent)] uppercase tracking-wider">
                PEDAGOGICAL EMPATHY
              </span>
              <h3 className="text-h3 font-bold text-[var(--color-text)]">
                {getLocalizedText(INSTRUCTOR_PROFILE.developerPlusInstructor.instructorSide.headline, language)}
              </h3>
              <ul className="space-y-2.5 text-body-sm text-[var(--color-text-muted)]">
                {INSTRUCTOR_PROFILE.developerPlusInstructor.instructorSide.points.map((pt, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-accent)] mt-2 shrink-0" />
                    <span>{getLocalizedText(pt, language)}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </PageSection>

        {/* Teaching Philosophy Manifesto */}
        <PageSection
          title={getLocalizedText(INSTRUCTOR_PROFILE.teachingPhilosophy.title, language)}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-start">
            {INSTRUCTOR_PROFILE.teachingPhilosophy.items.map((item) => (
              <div
                key={item.number}
                className="p-7 rounded-2xl bg-[var(--color-surface)] border border-[var(--color-border)] shadow-xs space-y-3 hover:border-[var(--color-secondary)]/50 transition-all"
              >
                <div className="flex items-center justify-between">
                  <span className="font-mono text-base font-extrabold text-[var(--color-secondary)]">
                    {item.number}
                  </span>
                  <span className="h-px flex-1 mx-4 bg-[var(--color-border-subtle)]" />
                </div>

                <h4 className="text-h3 font-bold text-[var(--color-text)]">
                  {getLocalizedText(item.title, language)}
                </h4>

                <p className="text-body-sm text-[var(--color-text-muted)] leading-relaxed">
                  {getLocalizedText(item.description, language)}
                </p>
              </div>
            ))}
          </div>
        </PageSection>

        {/* Flagship Course CTA */}
        <PageSection>
          <div className="p-8 sm:p-10 rounded-xl bg-[var(--color-surface)] border border-[var(--color-border)] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 text-start">
            <div className="space-y-1 max-w-xl">
              <span className="font-mono text-xs font-bold text-[var(--color-secondary)] uppercase">
                THE PEDAGOGY IN ACTION
              </span>
              <h3 className="text-h3 font-bold text-[var(--color-text)]">
                WEB CREATOR AI
              </h3>
              <p className="text-body-sm text-[var(--color-text-muted)] leading-relaxed">
                {isRtl
                  ? 'المنصة التدريبية التفاعلية الكاملة التي تجسّد هذا المنهج في مسار عملي خطوة بخطوة من الفكرة إلى السوق.'
                  : 'The interactive training platform embodying this pedagogy from concept to market.'}
              </p>
            </div>
            <Link href="/web-creator-ai">
              <Button
                size="lg"
                variant="primary"
                className="font-bold"
                rightIcon={isRtl ? <ArrowLeft className="w-4 h-4" /> : <ArrowRight className="w-4 h-4" />}
              >
                {isRtl ? 'استكشف المنهج' : 'Explore Platform'}
              </Button>
            </Link>
          </div>
        </PageSection>
      </PageContainer>
    </PortfolioShell>
  );
}
