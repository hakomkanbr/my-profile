'use client';

import React from 'react';
import Link from 'next/link';
import { usePreferencesStore } from '@/store';
import { INSTRUCTOR_PROFILE } from '@/content';
import { Avatar, Button, Badge } from '@/components';
import { ArrowLeft, ArrowRight, UserCheck } from 'lucide-react';

export const InstructorPreviewSection: React.FC = () => {
  const { language } = usePreferencesStore();
  const isRtl = language === 'ar';
  const profile = INSTRUCTOR_PROFILE;

  return (
    <section className="py-12 sm:py-16 border-b border-[var(--color-border)] text-start">
      <div className="max-w-3xl mb-8 space-y-2">
        <div className="flex items-center gap-2">
          <Badge variant="primary" size="md" icon={<UserCheck className="w-3.5 h-3.5" />}>
            {isRtl ? 'قبل أن نبدأ...' : 'Before We Begin...'}
          </Badge>
        </div>
        <h2 className="text-h2 font-bold text-[var(--color-text)]">
          {isRtl ? 'من يقودك في هذه الرحلة البرمجية؟' : 'Who Leads Your Learning Journey?'}
        </h2>
        <p className="text-body-sm text-[var(--color-text-muted)] leading-relaxed">
          {isRtl
            ? 'جودة التعلم تبدأ من عقلية المدرب الذي ينقل لك المعرفة الحية من أرض الواقع.'
            : 'The quality of your learning begins with the engineering mindset of your mentor.'}
        </p>
      </div>

      <div className="p-6 sm:p-8 rounded-2xl bg-[var(--color-surface)] border border-[var(--color-border)] shadow-xs hover:border-[var(--color-secondary)]/50 transition-all">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5">
            <Avatar
              name={isRtl ? profile.name.ar : profile.name.en}
              size="xl"
              className="ring-4 ring-[var(--color-border)] shadow-md shrink-0 w-20 h-20"
            />
            <div className="space-y-1.5 text-start">
              <span className="text-xs font-mono font-bold text-[var(--color-secondary)] uppercase tracking-wider">
                {isRtl ? profile.roleTitle.ar : profile.roleTitle.en}
              </span>
              <h3 className="text-h3 font-extrabold text-[var(--color-text)]">
                {isRtl ? profile.name.ar : profile.name.en}
              </h3>
              <p className="text-body font-bold text-[var(--color-secondary)] italic max-w-xl">
                &ldquo;{isRtl ? profile.coreMessage.ar : profile.coreMessage.en}&rdquo;
              </p>
              <p className="text-body-sm text-[var(--color-text-muted)] max-w-2xl leading-relaxed pt-1">
                {isRtl ? profile.briefIntro.ar : profile.briefIntro.en}
              </p>
            </div>
          </div>

          <div className="shrink-0 w-full lg:w-auto pt-4 lg:pt-0 border-t lg:border-t-0 border-[var(--color-border-subtle)]">
            <Link href="/about" className="block w-full">
              <Button
                variant="primary"
                size="md"
                className="w-full font-bold"
                rightIcon={
                  isRtl ? (
                    <ArrowLeft className="w-4 h-4" />
                  ) : (
                    <ArrowRight className="w-4 h-4" />
                  )
                }
              >
                {isRtl ? 'عن المدرب وخبراته' : 'About the Instructor'}
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
