'use client';

import React from 'react';
import Link from 'next/link';
import { usePreferencesStore } from '@/store';
import { Card, Button } from '@/components/ui';
import { ArrowLeft, ArrowRight, Compass } from 'lucide-react';

export const InstructorCTA: React.FC = () => {
  const { language } = usePreferencesStore();
  const isRtl = language === 'ar';

  return (
    <section className="py-10 sm:py-14 text-start">
      <Card
        variant="featured"
        className="p-8 sm:p-12 text-center flex flex-col items-center justify-center space-y-5 bg-gradient-to-b from-[var(--color-surface)] to-[var(--color-surface-sunken)] border-2 border-[var(--color-primary)]"
      >
        <div className="w-12 h-12 rounded-2xl bg-[var(--color-primary-subtle)] text-[var(--color-primary)] flex items-center justify-center">
          <Compass className="w-6 h-6" />
        </div>

        <h2 className="text-h2 font-extrabold text-[var(--color-text)]">
          {isRtl ? 'فلنبدأ الرحلة معاً' : 'Let Us Build Together'}
        </h2>

        <p className="text-body-sm text-[var(--color-text-muted)] max-w-xl leading-relaxed">
          {isRtl
            ? 'المعرفة النظرية وحدها لا تكفي؛ لننتقل الآن إلى المرحلة الأولى ونبدأ في تحليل وبناء أول مشروع ويب حقيقي.'
            : 'Theory alone is insufficient. Let us take the first milestone and begin analyzing and building our first living web application.'}
        </p>

        <Link href="/journey">
          <Button
            size="lg"
            variant="primary"
            rightIcon={
              isRtl ? (
                <ArrowLeft className="w-4 h-4" />
              ) : (
                <ArrowRight className="w-4 h-4" />
              )
            }
          >
            {isRtl ? 'ابدأ التعلم في رحلتي' : 'Start Learning on Journey'}
          </Button>
        </Link>
      </Card>
    </section>
  );
};
