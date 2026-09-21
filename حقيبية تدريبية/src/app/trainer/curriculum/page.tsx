'use client';

import React from 'react';
import Link from 'next/link';
import {
  TrainerShell,
  PageHeader,
  Card,
} from '@/components';
import { ALL_MODULES } from '@/content';
import { usePreferencesStore } from '@/store';
import { ArrowLeft, ArrowRight } from 'lucide-react';


export default function TrainerCurriculumPage() {
  const { language } = usePreferencesStore();
  const isRtl = language === 'ar';

  return (
    <TrainerShell headerTitle="إدارة المنهج والدروس">
      <div className="space-y-8 text-start">
        <PageHeader
          title={isRtl ? 'إدارة المنهج ومسارات الشرح' : 'Curriculum Blueprint'}
          subtitle={
            isRtl
              ? 'نظرة شاملة على الوحدات العشر وتوزيع الدروس وساعات الشرح التقديرية.'
              : 'Holistic overview of the 10 core modules, lesson structure, and estimated lecture durations.'
          }
          breadcrumbs={[
            { id: '1', label: isRtl ? 'لوحة المدرب' : 'Trainer Cockpit', href: '/trainer' },
            { id: '2', label: isRtl ? 'إدارة المنهج' : 'Curriculum', isCurrent: true },
          ]}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {ALL_MODULES.map((mod) => (
            <Card key={mod.id} className="p-6 space-y-4">
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs font-bold text-[var(--color-primary)]">
                  {isRtl ? `الوحدة ${mod.number}` : `Module ${mod.number}`}
                </span>
                <span className="text-xs px-2 py-0.5 rounded-md bg-[var(--color-surface-sunken)] border border-[var(--color-border)] text-[var(--color-text-muted)]">
                  {mod.estimatedHours} {isRtl ? 'ساعات' : 'hrs'} • {mod.lessons.length} {isRtl ? 'دروس' : 'lessons'}
                </span>
              </div>

              <div>
                <h3 className="text-h4 font-bold text-[var(--color-text)]">
                  {mod.title.ar}
                </h3>
                <p className="text-body-sm text-[var(--color-text-muted)] mt-1">
                  {mod.description.ar}
                </p>
              </div>

              <div className="pt-2 border-t border-[var(--color-border)] flex items-center justify-between">
                <span className="text-caption text-[var(--color-text-subtle)]">
                  {mod.badge.ar}
                </span>
                <Link
                  href="/trainer/presentation"
                  className="text-xs font-bold text-[var(--color-primary)] hover:underline inline-flex items-center gap-1"
                >
                  <span>{isRtl ? 'عرض في وضع التقديم' : 'Present Module'}</span>
                  {isRtl ? <ArrowLeft className="w-3 h-3" /> : <ArrowRight className="w-3 h-3" />}
                </Link>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </TrainerShell>
  );
}
