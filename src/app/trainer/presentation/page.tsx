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
    <TrainerShell headerTitle={isRtl ? 'عروض الدروس التفاعلية' : 'Course Presentation Hub'}>
      <div className="space-y-10 text-start pb-12">
        {/* Top Header Banner */}
        <div className="p-8 sm:p-10 rounded-3xl bg-[var(--color-surface)] border border-[var(--color-border)] relative overflow-hidden shadow-xs flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-3 relative z-10 max-w-2xl">
            <div className="flex items-center gap-2">
              <Badge variant="primary" size="md">
                {isRtl ? '12 درساً • 90 دقيقة لكل درس' : '12 LESSONS • 90 MIN EACH'}
              </Badge>
              <span className="text-xs font-mono font-bold text-[var(--color-secondary)] uppercase">
                WEB CREATOR AI
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl font-bold text-[var(--color-text)] tracking-tight">
              {isRtl ? 'عروض الشرح المباشر عبر Zoom' : 'Live Zoom Presentation Decks'}
            </h1>

            <p className="text-sm sm:text-base text-[var(--color-text-muted)] leading-relaxed">
              {isRtl
                ? 'عروض تعليمية واضحة ومرتبة للمبتدئين، مصممة للشرح المباشر خطوة بخطوة مع أمثلة عملية وتطبيقات حية وملاحظات للمدرب.'
                : 'Clear, beginner-friendly presentation decks designed for step-by-step live teaching with practical examples, live demos, and instructor notes.'}
            </p>
          </div>

          {/* Quick Launch Hero CTA */}
          <div className="flex flex-col gap-3 shrink-0 relative z-10 w-full sm:w-auto">
            <Link href="/trainer/presentation/session-01">
              <Button
                size="lg"
                variant="primary"
                className="w-full"
                leftIcon={<MonitorPlay className="w-5 h-5" />}
              >
                {isRtl ? 'بدء الدرس الأول (Session 01)' : 'Start Lesson 01'}
              </Button>
            </Link>
            <span className="text-[11px] font-mono text-[var(--color-text-subtle)] text-center">
              {isRtl ? 'F لملء الشاشة • N لملاحظات المدرب' : 'F for Fullscreen • N for Notes'}
            </span>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <Card className="p-5 space-y-1">
            <span className="text-caption text-[var(--color-text-subtle)] font-medium">
              {isRtl ? 'إجمالي الدروس' : 'Total Lessons'}
            </span>
            <p className="text-3xl font-mono font-bold text-[var(--color-primary)]">
              12
            </p>
          </Card>

          <Card className="p-5 space-y-1">
            <span className="text-caption text-[var(--color-text-subtle)] font-medium">
              {isRtl ? 'ساعات التدريب المباشر' : 'Live Teaching Hours'}
            </span>
            <p className="text-3xl font-mono font-bold text-[var(--color-secondary)]">
              18h
            </p>
          </Card>

          <Card className="p-5 space-y-1">
            <span className="text-caption text-[var(--color-text-subtle)] font-medium">
              {isRtl ? 'مدة كل درس' : 'Per Lesson'}
            </span>
            <p className="text-3xl font-mono font-bold text-[var(--color-accent-strong)]">
              90m
            </p>
          </Card>

          <Card className="p-5 space-y-1">
            <span className="text-caption text-[var(--color-text-subtle)] font-medium">
              {isRtl ? 'وضع الشاشة' : 'Display Mode'}
            </span>
            <p className="text-3xl font-mono font-bold text-[var(--color-text)]">
              Zoom
            </p>
          </Card>
        </div>

        {/* 12 Sessions Master Grid */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="space-y-1">
              <h2 className="text-xl sm:text-2xl font-bold text-[var(--color-text)]">
                {isRtl ? 'فهرس الدروس الـ 12 الكاملة' : 'All 12 Course Lessons'}
              </h2>
              <p className="text-xs text-[var(--color-text-muted)]">
                {isRtl
                  ? 'اختر الدرس لفتحه في وضع العرض التقديمي مع إمكانية التبديل بين وضع المدرب ووضع المتدرب.'
                  : 'Select any lesson to open its presentation deck with Trainer and Trainee view modes.'}
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sessions.map((session) => (
              <Card
                key={session.id}
                className="p-6 flex flex-col justify-between space-y-6 hover:border-[var(--color-primary)] transition-all relative overflow-hidden"
              >
                <div className="space-y-3 relative z-10">
                  <div className="flex items-center justify-between">
                    <span className="px-2.5 py-0.5 rounded text-xs font-mono font-bold bg-[var(--color-primary-subtle)] text-[var(--color-primary)]">
                      {isRtl ? `الدرس ${String(session.number).padStart(2, '0')}` : `LESSON ${String(session.number).padStart(2, '0')}`}
                    </span>
                    <span className="inline-flex items-center gap-1 text-xs font-mono text-[var(--color-text-subtle)]">
                      <Clock className="w-3.5 h-3.5" />
                      <span>{session.durationMinutes} {isRtl ? 'دقيقة' : 'min'}</span>
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
                        {isRtl ? 'هدف الدرس:' : 'Lesson Goal:'}
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
                      {isRtl ? 'فتح العرض' : 'Open Deck'}
                    </Button>
                  </Link>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Keyboard Shortcuts Reference Guide */}
        <div className="p-6 rounded-2xl bg-[var(--color-surface-sunken)] border border-[var(--color-border)] space-y-4">
          <div className="flex items-center gap-2 text-sm font-bold text-[var(--color-primary)]">
            <Keyboard className="w-4 h-4" />
            <span>{isRtl ? 'اختصارات لوحة المفاتيح أثناء العرض' : 'Keyboard Shortcuts'}</span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3 text-xs font-mono">
            <div className="p-2.5 rounded-xl bg-[var(--color-surface)] border border-[var(--color-border)] text-center space-y-1">
              <span className="px-2 py-0.5 rounded bg-[var(--color-surface-sunken)] border border-[var(--color-border)] font-bold block">
                Space / →
              </span>
              <span className="text-[11px] text-[var(--color-text-muted)] block">
                {isRtl ? 'الشريحة التالية' : 'Next Slide'}
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
                {isRtl ? 'تشغيل المؤقت' : 'Timer'}
              </span>
            </div>

            <div className="p-2.5 rounded-xl bg-[var(--color-surface)] border border-[var(--color-border)] text-center space-y-1">
              <span className="px-2 py-0.5 rounded bg-[var(--color-surface-sunken)] border border-[var(--color-border)] font-bold block">
                N
              </span>
              <span className="text-[11px] text-[var(--color-text-muted)] block">
                {isRtl ? 'ملاحظات المدرب' : 'Notes'}
              </span>
            </div>

            <div className="p-2.5 rounded-xl bg-[var(--color-surface)] border border-[var(--color-border)] text-center space-y-1">
              <span className="px-2 py-0.5 rounded bg-[var(--color-surface-sunken)] border border-[var(--color-border)] font-bold block">
                D
              </span>
              <span className="text-[11px] text-[var(--color-text-muted)] block">
                {isRtl ? 'التطبيق العملي' : 'Live Demo'}
              </span>
            </div>

            <div className="p-2.5 rounded-xl bg-[var(--color-surface)] border border-[var(--color-border)] text-center space-y-1">
              <span className="px-2 py-0.5 rounded bg-[var(--color-surface-sunken)] border border-[var(--color-border)] font-bold block">
                C
              </span>
              <span className="text-[11px] text-[var(--color-text-muted)] block">
                {isRtl ? 'النشاط العملي' : 'Activity'}
              </span>
            </div>

            <div className="p-2.5 rounded-xl bg-[var(--color-surface)] border border-[var(--color-border)] text-center space-y-1">
              <span className="px-2 py-0.5 rounded bg-[var(--color-surface-sunken)] border border-[var(--color-border)] font-bold block">
                Esc
              </span>
              <span className="text-[11px] text-[var(--color-text-muted)] block">
                {isRtl ? 'إغلاق اللوحات' : 'Close'}
              </span>
            </div>
          </div>
        </div>
      </div>
    </TrainerShell>
  );
}
