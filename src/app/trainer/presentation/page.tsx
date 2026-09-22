'use client';

import React from 'react';
import Link from 'next/link';
import {
  TrainerShell,
  Card,
  Badge,
  Button,
} from '@/components';
import { getAllPresentationSessions } from '@/content/presentations';
import { usePreferencesStore } from '@/store';
import { getLocalizedText } from '@/lib/utils';
import {
  MonitorPlay,
  Clock,
  ArrowRight,
  ArrowLeft,
  Keyboard,
} from 'lucide-react';

export default function CoursePresentationHubPage() {
  const { language } = usePreferencesStore();
  const isRtl = language === 'ar';
  const sessions = getAllPresentationSessions();

  return (
    <TrainerShell headerTitle={isRtl ? 'مركز العروض التقديمية التفاعلية' : 'Course Presentation Hub'}>
      <div className="space-y-10 text-start pb-12">
        {/* Top Header Banner */}
        <div className="p-8 sm:p-10 rounded-3xl bg-[var(--color-surface)] border-2 border-[var(--color-primary)]/20 relative overflow-hidden shadow-sm flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-3 relative z-10 max-w-2xl">
            <div className="flex items-center gap-2">
              <Badge variant="primary" size="md">
                12 SESSIONS • 18 HOURS
              </Badge>
              <span className="text-xs font-mono font-bold text-[var(--color-secondary)] uppercase">
                WEB CREATOR AI
              </span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-black text-[var(--color-text)] tracking-tight">
              {isRtl ? 'مركز العروض التقديمية الحية' : 'Interactive Presentation Hub'}
            </h1>

            <p className="text-sm sm:text-base text-[var(--color-text-muted)] leading-relaxed">
              {isRtl
                ? 'بيئة تعليمية سينمائية فائقة الوضوح مصممة خصيصاً للتدريس التفاعلي المباشر عبر Zoom. اختر أي جلسة وانطلق بملء الشاشة مع مؤقت وملاحظات المدرب.'
                : 'Cinematic, distraction-free HTML presentations engineered for live Zoom teaching with keyboard controls, timer presets, and dual Trainer/Student modes.'}
            </p>
          </div>

          {/* Quick Launch Hero CTA */}
          <div className="flex flex-col gap-3 shrink-0 relative z-10 w-full sm:w-auto">
            <Link href="/trainer/presentation/session-01">
              <Button
                size="lg"
                variant="primary"
                className="w-full shadow-lg shadow-[var(--color-primary)]/20"
                leftIcon={<MonitorPlay className="w-5 h-5" />}
              >
                {isRtl ? 'إطلاق الجلسة الأولى (Session 01)' : 'Launch Pilot Session 01'}
              </Button>
            </Link>
            <span className="text-[11px] font-mono text-[var(--color-text-subtle)] text-center">
              {isRtl ? 'اضغط F للشاشة الكاملة • اضغط N للملاحظات' : 'F for Fullscreen • N for Notes'}
            </span>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <Card className="p-5 space-y-1">
            <span className="text-caption text-[var(--color-text-subtle)] font-medium">
              {isRtl ? 'إجمالي الجلسات' : 'Total Sessions'}
            </span>
            <p className="text-3xl font-mono font-black text-[var(--color-primary)]">
              12
            </p>
          </Card>

          <Card className="p-5 space-y-1">
            <span className="text-caption text-[var(--color-text-subtle)] font-medium">
              {isRtl ? 'ساعات التدريب المباشر' : 'Live Teaching Hours'}
            </span>
            <p className="text-3xl font-mono font-black text-[var(--color-secondary)]">
              18h
            </p>
          </Card>

          <Card className="p-5 space-y-1">
            <span className="text-caption text-[var(--color-text-subtle)] font-medium">
              {isRtl ? 'مدة كل جلسة' : 'Per Session'}
            </span>
            <p className="text-3xl font-mono font-black text-[var(--color-accent-strong)]">
              90m
            </p>
          </Card>

          <Card className="p-5 space-y-1">
            <span className="text-caption text-[var(--color-text-subtle)] font-medium">
              {isRtl ? 'نسبة الشاشة المستهدفة' : 'Target Ratio'}
            </span>
            <p className="text-3xl font-mono font-black text-[var(--color-text)]">
              16:9
            </p>
          </Card>
        </div>

        {/* 12 Sessions Master Grid */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="space-y-1">
              <h2 className="text-xl sm:text-2xl font-black text-[var(--color-text)]">
                {isRtl ? 'فهرس الجلسات الـ 12 الكاملة' : 'The 12 Curriculum Sessions'}
              </h2>
              <p className="text-xs text-[var(--color-text-muted)]">
                {isRtl
                  ? 'كل جلسة عبارة عن عرض تقديمي تفاعلي مستقل يمكنك إطلاقه مباشرة عبر رابطه المخصص.'
                  : 'Each session is an autonomous, high-impact HTML deck ready to present.'}
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sessions.map((session) => (
              <Card
                key={session.id}
                className="p-6 flex flex-col justify-between space-y-6 hover:border-[var(--color-primary)] transition-all hover:shadow-md relative overflow-hidden"
              >
                {/* Large Background Watermark Number */}
                <span className="absolute -top-6 -right-3 text-7xl font-mono font-black text-[var(--color-border)]/40 pointer-events-none select-none">
                  {String(session.number).padStart(2, '0')}
                </span>

                <div className="space-y-3 relative z-10">
                  <div className="flex items-center justify-between">
                    <span className="px-2.5 py-0.5 rounded text-xs font-mono font-bold bg-[var(--color-primary-subtle)] text-[var(--color-primary)]">
                      SESSION {String(session.number).padStart(2, '0')}
                    </span>
                    <span className="inline-flex items-center gap-1 text-xs font-mono text-[var(--color-text-subtle)]">
                      <Clock className="w-3.5 h-3.5" />
                      <span>{session.durationMinutes}m</span>
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-[var(--color-text)] leading-snug">
                    {getLocalizedText(session.title, language)}
                  </h3>

                  <p className="text-xs text-[var(--color-text-muted)] line-clamp-2 leading-relaxed">
                    {getLocalizedText(session.subtitle, language)}
                  </p>

                  {/* Key Objective Preview */}
                  {session.objectives && session.objectives[0] && (
                    <div className="p-3 rounded-xl bg-[var(--color-surface-sunken)] border border-[var(--color-border-subtle)] space-y-1">
                      <span className="text-[10px] font-mono font-bold uppercase text-[var(--color-secondary)] block">
                        {isRtl ? 'الهدف التعليمي الأساسي:' : 'Core Objective:'}
                      </span>
                      <p className="text-xs text-[var(--color-text)] font-medium line-clamp-2">
                        {getLocalizedText(session.objectives[0], language)}
                      </p>
                    </div>
                  )}
                </div>

                <div className="pt-2 border-t border-[var(--color-border-subtle)] flex items-center justify-between gap-3 relative z-10">
                  <span className="text-[11px] font-mono text-[var(--color-text-subtle)]">
                    {session.slides.length} {isRtl ? 'شريحة' : 'Slides'}
                  </span>

                  <Link href={`/trainer/presentation/${session.id}`}>
                    <Button
                      size="sm"
                      variant={session.number === 1 ? 'primary' : 'outline'}
                      rightIcon={isRtl ? <ArrowLeft className="w-4 h-4" /> : <ArrowRight className="w-4 h-4" />}
                    >
                      {isRtl ? 'بدء العرض' : 'Launch'}
                    </Button>
                  </Link>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Keyboard Shortcuts Reference Guide */}
        <div className="p-6 rounded-3xl bg-[var(--color-surface-sunken)] border border-[var(--color-border)] space-y-4">
          <div className="flex items-center gap-2 text-sm font-mono font-bold uppercase tracking-wider text-[var(--color-primary)]">
            <Keyboard className="w-4 h-4" />
            <span>{isRtl ? 'دليل اختصارات لوحة المفاتيح أثناء الشرح الحي (Zoom Keyboard Cheat Sheet)' : 'Keyboard Shortcuts Cheat Sheet'}</span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3 text-xs font-mono">
            <div className="p-2.5 rounded-xl bg-[var(--color-surface)] border border-[var(--color-border)] text-center space-y-1">
              <span className="px-2 py-0.5 rounded bg-[var(--color-surface-sunken)] border border-[var(--color-border)] font-bold block">
                Space / →
              </span>
              <span className="text-[11px] text-[var(--color-text-muted)] block">
                {isRtl ? 'كشف / التالي' : 'Reveal / Next'}
              </span>
            </div>

            <div className="p-2.5 rounded-xl bg-[var(--color-surface)] border border-[var(--color-border)] text-center space-y-1">
              <span className="px-2 py-0.5 rounded bg-[var(--color-surface-sunken)] border border-[var(--color-border)] font-bold block">
                ←
              </span>
              <span className="text-[11px] text-[var(--color-text-muted)] block">
                {isRtl ? 'الشريحة السابقة' : 'Previous'}
              </span>
            </div>

            <div className="p-2.5 rounded-xl bg-[var(--color-surface)] border border-[var(--color-border)] text-center space-y-1">
              <span className="px-2 py-0.5 rounded bg-[var(--color-surface-sunken)] border border-[var(--color-border)] font-bold block">
                F
              </span>
              <span className="text-[11px] text-[var(--color-text-muted)] block">
                {isRtl ? 'ملء الشاشة' : 'Fullscreen'}
              </span>
            </div>

            <div className="p-2.5 rounded-xl bg-[var(--color-surface)] border border-[var(--color-border)] text-center space-y-1">
              <span className="px-2 py-0.5 rounded bg-[var(--color-surface-sunken)] border border-[var(--color-border)] font-bold block">
                T
              </span>
              <span className="text-[11px] text-[var(--color-text-muted)] block">
                {isRtl ? 'تشغيل المؤقت' : 'Timer Toggle'}
              </span>
            </div>

            <div className="p-2.5 rounded-xl bg-[var(--color-surface)] border border-[var(--color-border)] text-center space-y-1">
              <span className="px-2 py-0.5 rounded bg-[var(--color-surface-sunken)] border border-[var(--color-border)] font-bold block">
                N
              </span>
              <span className="text-[11px] text-[var(--color-text-muted)] block">
                {isRtl ? 'ملاحظات المدرب' : 'Speaker Notes'}
              </span>
            </div>

            <div className="p-2.5 rounded-xl bg-[var(--color-surface)] border border-[var(--color-border)] text-center space-y-1">
              <span className="px-2 py-0.5 rounded bg-[var(--color-surface-sunken)] border border-[var(--color-border)] font-bold block">
                D
              </span>
              <span className="text-[11px] text-[var(--color-text-muted)] block">
                {isRtl ? 'قفز للتطبيق الحي' : 'Jump to Demo'}
              </span>
            </div>

            <div className="p-2.5 rounded-xl bg-[var(--color-surface)] border border-[var(--color-border)] text-center space-y-1">
              <span className="px-2 py-0.5 rounded bg-[var(--color-surface-sunken)] border border-[var(--color-border)] font-bold block">
                C
              </span>
              <span className="text-[11px] text-[var(--color-text-muted)] block">
                {isRtl ? 'قفز للتحدي' : 'Challenge Mode'}
              </span>
            </div>

            <div className="p-2.5 rounded-xl bg-[var(--color-surface)] border border-[var(--color-border)] text-center space-y-1">
              <span className="px-2 py-0.5 rounded bg-[var(--color-surface-sunken)] border border-[var(--color-border)] font-bold block">
                Esc
              </span>
              <span className="text-[11px] text-[var(--color-text-muted)] block">
                {isRtl ? 'خروج / إغلاق' : 'Exit / Close'}
              </span>
            </div>
          </div>
        </div>
      </div>
    </TrainerShell>
  );
}
