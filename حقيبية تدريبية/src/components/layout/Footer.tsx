'use client';

import React from 'react';
import Link from 'next/link';
import { getLocalizedText } from '@/lib/utils';
import { INSTRUCTOR_PROFILE } from '@/content';
import { usePreferencesStore } from '@/store';

export const Footer: React.FC = () => {
  const { language } = usePreferencesStore();

  const philosophySteps = [
    'LEARN',
    'BUILD',
    'PRACTICE',
    'USE AI',
    'LAUNCH',
    'MARKET',
  ];

  return (
    <footer className="w-full border-t border-[var(--color-border)] bg-[var(--color-surface)] py-8 px-4 sm:px-8 mt-auto text-start">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Brand & Philosophy */}
        <div className="flex flex-col items-center md:items-start text-center md:text-start space-y-2">
          <div className="flex items-center gap-2">
            <span className="font-extrabold text-sm tracking-tight text-[var(--color-text)]">
              WEB CREATOR <span className="text-[var(--color-secondary)]">AI</span>
            </span>
            <span className="text-caption px-2 py-0.5 rounded-full bg-[var(--color-primary-subtle)] text-[var(--color-primary)] font-semibold">
              Interactive Training Kit
            </span>
          </div>

          <p className="text-caption text-[var(--color-text-muted)] max-w-md">
            {language === 'ar'
              ? 'من الفكرة إلى موقع ويب حقيقي جاهز للإطلاق والتسويق.'
              : 'From idea to a live, marketed real-world web application.'}
          </p>

          {/* Philosophy flow */}
          <div className="flex items-center flex-wrap gap-1.5 pt-1 text-[11px] font-mono font-bold text-[var(--color-text-subtle)]">
            {philosophySteps.map((step, idx) => (
              <React.Fragment key={step}>
                <span className="px-1.5 py-0.5 rounded bg-[var(--color-surface-sunken)] border border-[var(--color-border-subtle)]">
                  {step}
                </span>
                {idx < philosophySteps.length - 1 && <span className="opacity-50">→</span>}
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* Instructor Mention & Links */}
        <div className="flex flex-col items-center md:items-end text-center md:text-end space-y-2">
          <p className="text-body-sm text-[var(--color-text-muted)]">
            {language === 'ar' ? 'إشراف وتدريب:' : 'Curated & Taught by:'}{' '}
            <Link
              href="/instructor"
              className="font-bold text-[var(--color-primary)] hover:underline"
            >
              {getLocalizedText(INSTRUCTOR_PROFILE.name, language)}
            </Link>
          </p>
          <span className="text-caption text-[var(--color-text-subtle)]">
            Senior Software Developer & Instructor
          </span>

          <div className="flex items-center gap-4 text-xs font-semibold text-[var(--color-text-subtle)] pt-1">
            <Link href="/journey" className="hover:text-[var(--color-primary)] transition-colors">
              {language === 'ar' ? 'الرحلة' : 'Journey'}
            </Link>
            <span>•</span>
            <Link href="/modules" className="hover:text-[var(--color-primary)] transition-colors">
              {language === 'ar' ? 'الوحدات' : 'Modules'}
            </Link>
            <span>•</span>
            <Link href="/projects" className="hover:text-[var(--color-primary)] transition-colors">
              {language === 'ar' ? 'المشاريع' : 'Projects'}
            </Link>
            <span>•</span>
            <Link href="/instructor" className="hover:text-[var(--color-primary)] transition-colors">
              {language === 'ar' ? 'عن المدرب' : 'Instructor'}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
