'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import {
  LearningShell,
  PageContainer,
  Card,
  Button,
} from '@/components';
import { usePreferencesStore, useProgressStore, useSessionStore } from '@/store';
import { getLocalizedText } from '@/lib/utils';
import { getSessionCompletionStats } from '@/lib/student-storage';
import {
  Play,
  ArrowRight,
  ArrowLeft,
  Clock,
  Sparkles,
  Briefcase,
  TrendingUp,
  Bookmark,
  CheckCircle2,
} from 'lucide-react';

export default function WebCreatorAIHomePage() {
  const { language } = usePreferencesStore();
  const isRtl = language === 'ar';
  const { progress } = useProgressStore();
  const { sessions, getActiveSession, initializeSessions } = useSessionStore();
  const [filter, setFilter] = useState<'all' | 'active' | 'completed' | 'scheduled'>('all');

  useEffect(() => {
    initializeSessions();
  }, [initializeSessions]);

  const activeSession = getActiveSession() || sessions[0];

  return (
    <LearningShell headerTitle={isRtl ? 'لوحة الطالب التعليمية' : 'Student Dashboard'}>
      <PageContainer>
        <div className="space-y-10 text-start pb-16">
          {/* 1. ACTIVE SESSION SPOTLIGHT HERO */}
          {activeSession && (
            <div className="p-8 sm:p-10 rounded-3xl bg-[var(--color-surface)] border-2 border-[var(--color-primary)] relative overflow-hidden shadow-sm flex flex-col lg:flex-row items-center justify-between gap-8">
              <div className="space-y-3 relative z-10 max-w-2xl text-start">
                <div className="flex items-center gap-2">
                  <span className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full text-xs font-mono font-bold bg-green-500/15 text-green-600 border border-green-500/30">
                    <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                    <span>{isRtl ? 'الجلسة التدريبية الحالية' : 'CURRENT ACTIVE SESSION'}</span>
                  </span>
                  <span className="text-xs font-mono text-[var(--color-secondary)] font-bold">
                    SESSION {String(activeSession.number).padStart(2, '0')}
                  </span>
                </div>

                <h1 className="text-2xl sm:text-4xl font-black text-[var(--color-text)] tracking-tight">
                  {getLocalizedText(activeSession.title, language)}
                </h1>

                <p className="text-xs sm:text-body-sm text-[var(--color-text-muted)] leading-relaxed">
                  {getLocalizedText(activeSession.subtitle, language)}
                </p>

                <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-[var(--color-text-subtle)] pt-1">
                  <span className="flex items-center gap-1.5">
                    <Clock className="w-4 h-4 text-[var(--color-primary)]" />
                    <span>{activeSession.durationMinutes} دقيقة</span>
                  </span>
                  <span>•</span>
                  <span>{activeSession.activities.length} أنشطة تطبيقية</span>
                  <span>•</span>
                  <span>المدرب: {getLocalizedText(activeSession.trainer.name, language)}</span>
                </div>
              </div>

              {/* Enter Session CTA */}
              <div className="flex flex-col gap-3 shrink-0 relative z-10 w-full sm:w-auto">
                <Link href={`/web-creator-ai/session/${activeSession.id}`}>
                  <Button
                    size="lg"
                    variant="primary"
                    className="w-full shadow-lg shadow-[var(--color-primary)]/20 text-sm font-bold"
                    leftIcon={<Play className="w-5 h-5 fill-current" />}
                  >
                    {isRtl ? 'دخول الجلسة ومتابعة الأنشطة' : 'Enter Active Session'}
                  </Button>
                </Link>

                <Link
                  href="/web-creator-ai/sessions"
                  className="text-xs font-semibold text-center text-[var(--color-text-muted)] hover:text-[var(--color-primary)] transition-colors"
                >
                  {isRtl ? 'استعراض كل الجلسات الـ 12 ←' : 'View all 12 sessions →'}
                </Link>
              </div>
            </div>
          )}

          {/* 2. QUICK STATS & STUDENT PROGRESS OVERVIEW */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Card className="p-5 space-y-1">
              <span className="text-caption text-[var(--color-text-subtle)] font-medium">
                {isRtl ? 'الدروس المنجزة' : 'Completed Lessons'}
              </span>
              <p className="text-3xl font-mono font-black text-[var(--color-primary)]">
                {progress.completedLessons.length}
              </p>
            </Card>

            <Card className="p-5 space-y-1">
              <span className="text-caption text-[var(--color-text-subtle)] font-medium">
                {isRtl ? 'التحديات المكتملة' : 'Completed Challenges'}
              </span>
              <p className="text-3xl font-mono font-black text-[var(--color-secondary)]">
                {progress.completedChallenges.length}
              </p>
            </Card>

            <Card className="p-5 space-y-1">
              <span className="text-caption text-[var(--color-text-subtle)] font-medium">
                {isRtl ? 'المشاريع الجاري بناؤها' : 'Projects in Progress'}
              </span>
              <p className="text-3xl font-mono font-black text-[var(--color-accent-strong)]">
                {progress.completedProjects.length}/5
              </p>
            </Card>

            <Card className="p-5 space-y-1">
              <span className="text-caption text-[var(--color-text-subtle)] font-medium">
                {isRtl ? 'جلسات المنهج' : 'Curriculum Sessions'}
              </span>
              <p className="text-3xl font-mono font-black text-[var(--color-text)]">
                12
              </p>
            </Card>
          </div>

          {/* 3. SESSIONS ROADMAP (THE 12 DIRECT SESSIONS) */}
          <div className="space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div>
                <h2 className="text-xl sm:text-2xl font-black text-[var(--color-text)]">
                  {isRtl ? 'الجلسات التعليمية الـ 12 المباشرة' : 'The 12 Curriculum Sessions'}
                </h2>
                <p className="text-xs text-[var(--color-text-muted)]">
                  {isRtl
                    ? 'جلسات عملية تفاعلية مرتبطة بمسارك التدريبي، تحتوي على مهام وأكواد وتطبيقات خطوة بخطوة.'
                    : 'Hands-on practical sessions with step-by-step tasks and interactive outputs.'}
                </p>
              </div>

              <Link href="/web-creator-ai/sessions">
                <Button size="sm" variant="ghost" className="text-xs font-bold">
                  {isRtl ? 'عرض فهرس الجلسات الكامل' : 'View Full Catalog'}
                </Button>
              </Link>
            </div>

            {/* Filter Tabs */}
            <div className="flex flex-wrap items-center gap-2 pt-1 pb-2">
              <button
                type="button"
                onClick={() => setFilter('all')}
                className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
                  filter === 'all'
                    ? 'bg-[var(--color-primary)] text-white shadow-xs'
                    : 'bg-[var(--color-surface-sunken)] text-[var(--color-text-muted)] hover:text-[var(--color-text)]'
                }`}
              >
                {isRtl ? `جميع الجلسات (${sessions.length})` : `All (${sessions.length})`}
              </button>
              <button
                type="button"
                onClick={() => setFilter('active')}
                className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
                  filter === 'active'
                    ? 'bg-green-600 text-white shadow-xs'
                    : 'bg-[var(--color-surface-sunken)] text-[var(--color-text-muted)] hover:text-[var(--color-text)]'
                }`}
              >
                {isRtl ? 'النشطة حالياً' : 'Live Active'}
              </button>
              <button
                type="button"
                onClick={() => setFilter('completed')}
                className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
                  filter === 'completed'
                    ? 'bg-blue-600 text-white shadow-xs'
                    : 'bg-[var(--color-surface-sunken)] text-[var(--color-text-muted)] hover:text-[var(--color-text)]'
                }`}
              >
                {isRtl ? 'المكتملة' : 'Completed'}
              </button>
              <button
                type="button"
                onClick={() => setFilter('scheduled')}
                className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
                  filter === 'scheduled'
                    ? 'bg-indigo-600 text-white shadow-xs'
                    : 'bg-[var(--color-surface-sunken)] text-[var(--color-text-muted)] hover:text-[var(--color-text)]'
                }`}
              >
                {isRtl ? 'المجدولة' : 'Scheduled'}
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {sessions
                .filter((s) => {
                  if (filter === 'active') return s.status === 'active';
                  if (filter === 'completed') return s.status === 'completed';
                  if (filter === 'scheduled') return s.status === 'scheduled';
                  return true;
                })
                .map((session) => {
                  const isActive = session.status === 'active';
                  const isCompleted = session.status === 'completed';
                  const studentStats = getSessionCompletionStats(session.id, session.activities.length);

                  return (
                    <Card
                      key={session.id}
                      className={`p-6 flex flex-col justify-between space-y-5 transition-all relative overflow-hidden ${
                        isActive
                          ? 'border-2 border-[var(--color-primary)] shadow-md bg-[var(--color-surface)]'
                          : 'border border-[var(--color-border)] hover:border-[var(--color-border-strong)]'
                      }`}
                    >
                      <div className="space-y-3">
                        <div className="flex items-center justify-between">
                          <span className="px-2.5 py-0.5 rounded text-xs font-mono font-bold bg-[var(--color-primary-subtle)] text-[var(--color-primary)]">
                            SESSION {String(session.number).padStart(2, '0')}
                          </span>

                          <span
                            className={`text-[11px] font-bold px-2 py-0.5 rounded ${
                              isActive
                                ? 'bg-green-500/15 text-green-600'
                                : isCompleted
                                ? 'bg-blue-500/15 text-blue-600'
                                : 'bg-[var(--color-surface-sunken)] text-[var(--color-text-subtle)]'
                            }`}
                          >
                            {isActive
                              ? isRtl ? '● نشطة الآن' : '● Live'
                              : isCompleted
                              ? isRtl ? '✓ مكتملة' : '✓ Done'
                              : isRtl ? 'مجدولة' : 'Scheduled'}
                          </span>
                        </div>

                        <h3 className="text-base font-bold text-[var(--color-text)] leading-snug">
                          {getLocalizedText(session.title, language)}
                        </h3>

                        <p className="text-xs text-[var(--color-text-muted)] line-clamp-2 leading-relaxed">
                          {getLocalizedText(session.description, language)}
                        </p>

                        <div className="flex items-center justify-between pt-1">
                          <div className="flex items-center gap-2 text-[11px] font-mono text-[var(--color-text-subtle)]">
                            <span>{session.durationMinutes} دقيقة</span>
                            <span>•</span>
                            <span>{session.activities.length} أنشطة</span>
                          </div>

                          {studentStats.completedCount > 0 && (
                            <span className="inline-flex items-center gap-1 text-[11px] font-bold text-emerald-600 bg-emerald-500/10 px-2 py-0.5 rounded-full">
                              <CheckCircle2 className="w-3 h-3" />
                              {studentStats.isAllCompleted
                                ? isRtl ? 'مكتملة بالكامل' : 'Completed'
                                : `${studentStats.completedCount}/${studentStats.totalCount}`}
                            </span>
                          )}
                        </div>
                      </div>

                      <div className="pt-3 border-t border-[var(--color-border-subtle)]">
                        <Link href={`/web-creator-ai/session/${session.id}`}>
                          <Button
                            size="sm"
                            variant={isActive ? 'primary' : 'outline'}
                            className="w-full text-xs font-bold"
                            rightIcon={isRtl ? <ArrowLeft className="w-3.5 h-3.5" /> : <ArrowRight className="w-3.5 h-3.5" />}
                          >
                            {isActive
                              ? (isRtl ? 'دخول الجلسة النشطة' : 'Enter Session')
                              : studentStats.completedCount > 0
                              ? (isRtl ? 'مراجعة الأنشطة المنجزة' : 'Review Activities')
                              : (isRtl ? 'استعراض الأنشطة والمهام' : 'Explore Activities')}
                          </Button>
                        </Link>
                      </div>
                    </Card>
                  );
                })}
            </div>
          </div>

          {/* 4. LEARNING LABS & TRACKS SHORTCUTS */}
          <div className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-black text-[var(--color-text)]">
              {isRtl ? 'المختبرات والمشاريع المساعدة' : 'Learning Labs & Toolkits'}
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <Link href="/web-creator-ai/ai-lab">
                <Card className="p-5 space-y-2 hover:border-[var(--color-primary)] transition-all cursor-pointer h-full">
                  <div className="w-9 h-9 rounded-xl bg-[var(--color-primary-subtle)] text-[var(--color-primary)] flex items-center justify-center font-bold">
                    <Sparkles className="w-5 h-5" />
                  </div>
                  <h3 className="text-sm font-bold text-[var(--color-text)]">
                    {isRtl ? 'مختبر الذكاء الاصطناعي' : 'AI Prompt Lab'}
                  </h3>
                  <p className="text-xs text-[var(--color-text-muted)]">
                    {isRtl
                      ? 'موجهات برمجية جاهزة ونماذج متقدمة لتوليد كود الويب.'
                      : 'Production-ready prompts to accelerate web coding.'}
                  </p>
                </Card>
              </Link>

              <Link href="/web-creator-ai/projects">
                <Card className="p-5 space-y-2 hover:border-[var(--color-secondary)] transition-all cursor-pointer h-full">
                  <div className="w-9 h-9 rounded-xl bg-[var(--color-secondary)]/15 text-[var(--color-secondary)] flex items-center justify-center font-bold">
                    <Briefcase className="w-5 h-5" />
                  </div>
                  <h3 className="text-sm font-bold text-[var(--color-text)]">
                    {isRtl ? 'المشاريع التطبيقية' : 'Applied Projects'}
                  </h3>
                  <p className="text-xs text-[var(--color-text-muted)]">
                    {isRtl
                      ? 'بناء مواقع تجارية كاملة خطوة بخطوة من الفكرة للإطلاق.'
                      : 'End-to-end web products ready for your portfolio.'}
                  </p>
                </Card>
              </Link>

              <Link href="/web-creator-ai/marketing-lab">
                <Card className="p-5 space-y-2 hover:border-[var(--color-accent-strong)] transition-all cursor-pointer h-full">
                  <div className="w-9 h-9 rounded-xl bg-[var(--color-accent-strong)]/15 text-[var(--color-accent-strong)] flex items-center justify-center font-bold">
                    <TrendingUp className="w-5 h-5" />
                  </div>
                  <h3 className="text-sm font-bold text-[var(--color-text)]">
                    {isRtl ? 'مختبر التسويق والـ SEO' : 'Marketing & SEO Lab'}
                  </h3>
                  <p className="text-xs text-[var(--color-text-muted)]">
                    {isRtl
                      ? 'أدوات تهيئة محركات البحث وجلب أول عميل تجاري.'
                      : 'SEO, client proposals, and freelancing strategies.'}
                  </p>
                </Card>
              </Link>

              <Link href="/web-creator-ai/resources">
                <Card className="p-5 space-y-2 hover:border-[var(--color-text)] transition-all cursor-pointer h-full">
                  <div className="w-9 h-9 rounded-xl bg-[var(--color-surface-sunken)] text-[var(--color-text)] flex items-center justify-center font-bold">
                    <Bookmark className="w-5 h-5" />
                  </div>
                  <h3 className="text-sm font-bold text-[var(--color-text)]">
                    {isRtl ? 'الموارد والمراجع' : 'Developer Resources'}
                  </h3>
                  <p className="text-xs text-[var(--color-text-muted)]">
                    {isRtl
                      ? 'أوراق مساعدة وروابط التوثيق الرسمي للمطورين.'
                      : 'Curated cheat sheets and modern engineering tools.'}
                  </p>
                </Card>
              </Link>
            </div>
          </div>
        </div>
      </PageContainer>
    </LearningShell>
  );
}
