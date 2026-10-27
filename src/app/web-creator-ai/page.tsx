'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { LearningShell } from '@/components/layout';
import { usePreferencesStore, useProgressStore, useSessionStore } from '@/store';
import { getLocalizedText } from '@/lib/utils';
import { getSessionCompletionStats } from '@/lib/student-storage';
import { Button, Card, WhatsAppActionFeedback } from '@/components/ui';
import {
  ArrowLeft,
  ArrowRight,
  Bookmark,
  CheckCircle2,
  ChevronDown,
  ChevronUp,
  Clock,
  Layers,
  MessageCircle,
  Play,
  Sparkles,
} from 'lucide-react';
import {
  WHATSAPP_CONFIG,
  buildClientInquiryMessage,
  openWhatsAppChat,
} from '@/lib/whatsapp';

interface PhaseGroup {
  id: string;
  title: { ar: string; en: string };
  subtitle: { ar: string; en: string };
  sessionNumbers: number[];
}

const CURRICULUM_PHASES: PhaseGroup[] = [
  {
    id: 'phase-1',
    title: {
      ar: 'المرحلة الأولى: الفكرة والتخطيط (الجلسات 01 – 02)',
      en: 'Phase 1: Idea & Planning (Sessions 01 – 02)',
    },
    subtitle: {
      ar: 'فهم أساسيات بناء المواقع الحديثة، وتحديد فكرة مشروعك وأقسامه قبل كتابة الكود.',
      en: 'Understanding modern web creation and planning your project structure before writing code.',
    },
    sessionNumbers: [1, 2],
  },
  {
    id: 'phase-2',
    title: {
      ar: 'المرحلة الثانية: التصميم والبناء (الجلسات 03 – 08)',
      en: 'Phase 2: Design & Building (Sessions 03 – 08)',
    },
    subtitle: {
      ar: 'بناء هيكل الموقع، تنسيق الواجهات المتجاوبة مع الهواتف، إضافة التفاعل البرمجي، والاستفادة من الذكاء الاصطناعي.',
      en: 'Building page structure, styling responsive mobile-first interfaces, adding interactivity, and using AI tools.',
    },
    sessionNumbers: [3, 4, 5, 6, 7, 8],
  },
  {
    id: 'phase-3',
    title: {
      ar: 'المرحلة الثالثة: الإطلاق والتطوير (الجلسات 09 – 12)',
      en: 'Phase 3: Launch & Growth (Sessions 09 – 12)',
    },
    subtitle: {
      ar: 'مراجعة جودة الموقع، نشره على رابط حي على الإنترنت، وتجهيزه للعرض على العملاء.',
      en: 'Auditing site quality, publishing live to the internet, and preparing your project for clients.',
    },
    sessionNumbers: [9, 10, 11, 12],
  },
];

export default function WebCreatorAiHomePage() {
  const { language } = usePreferencesStore();
  const isRtl = language === 'ar';

  const { initializeProgress } = useProgressStore();
  const { sessions, initializeSessions, getActiveSession } = useSessionStore();

  const [openPhases, setOpenPhases] = useState<Record<string, boolean>>({
    'phase-1': true,
    'phase-2': false,
    'phase-3': false,
  });
  const [preparedWhatsAppMsg, setPreparedWhatsAppMsg] = useState<string | null>(
    null
  );

  useEffect(() => {
    initializeProgress();
    initializeSessions();
  }, [initializeProgress, initializeSessions]);

  const sortedSessions = [...sessions].sort((a, b) => a.number - b.number);
  const activeSession = getActiveSession() || sortedSessions[0];

  const totalActivitiesCount = sortedSessions.reduce(
    (acc, s) => acc + s.activities.length,
    0
  );

  const completedActivitiesCount = sortedSessions.reduce((acc, s) => {
    const stats = getSessionCompletionStats(s.id, s.activities.length);
    return acc + stats.completedCount;
  }, 0);

  const completedSessionsCount = sortedSessions.filter((s) => {
    const stats = getSessionCompletionStats(s.id, s.activities.length);
    return stats.isAllCompleted || s.status === 'completed';
  }).length;

  const overallPercent =
    totalActivitiesCount > 0
      ? Math.min(
          100,
          Math.round((completedActivitiesCount / totalActivitiesCount) * 100)
        )
      : 0;

  const togglePhase = (phaseId: string) => {
    setOpenPhases((prev) => ({ ...prev, [phaseId]: !prev[phaseId] }));
  };

  const handleAskInstructorWhatsApp = () => {
    const msg = buildClientInquiryMessage({
      projectType: 'استفسار متدرب في WEB CREATOR AI',
      details: activeSession
        ? `أنا في الجلسة ${String(activeSession.number).padStart(2, '0')} (${getLocalizedText(activeSession.title, 'ar')}) ولدي سؤال حول التدريب.`
        : 'لدي استفسار حول مسار WEB CREATOR AI التدريبي.',
      pageUrl: 'https://abdulhakimkanbr.com/web-creator-ai',
    });
    setPreparedWhatsAppMsg(msg);
    openWhatsAppChat(msg);
  };

  return (
    <LearningShell>
      <div className="space-y-8 sm:space-y-10 pb-12 text-start">
        {/* 1. Title + Simple Description + 2. Current Session Card + 3. Continue Learning Button */}
        <section className="rounded-3xl bg-[var(--color-surface)] border border-[var(--color-border)] p-6 sm:p-8 lg:p-10 shadow-xs space-y-6">
          <div className="space-y-3 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--color-primary-subtle)] text-[var(--color-secondary)] text-xs font-bold font-mono">
              <Sparkles className="w-3.5 h-3.5" />
              <span>WEB CREATOR AI</span>
            </div>

            <h1 className="text-2xl sm:text-4xl font-extrabold text-[var(--color-text)] tracking-tight rtl:tracking-normal leading-tight">
              {isRtl
                ? 'تعلّم بناء موقعك خطوة بخطوة بمساعدة الذكاء الاصطناعي'
                : 'Learn to Build Your Website Step by Step with AI'}
            </h1>

            <p className="text-sm sm:text-base text-[var(--color-text-muted)] leading-relaxed">
              {isRtl
                ? 'برنامج تدريبي عملي من 12 جلسة، يأخذك من تخطيط الفكرة وتصميم الصفحات إلى كتابة الكود الأساسي ونشر موقعك على الإنترنت، مع إرسال أنشطتك عبر واتساب لتلقي الملاحظات المباشرة.'
                : 'A practical 12-session program taking you from planning your idea and designing pages to writing core code and publishing your site online, with direct activity review via WhatsApp.'}
            </p>
          </div>

          {/* 2. Current Session Card & 3. Primary "متابعة التعلّم" Button */}
          {activeSession && (
            <div className="p-5 sm:p-6 rounded-2xl bg-[var(--color-surface-sunken)] border border-[var(--color-border)] flex flex-col lg:flex-row items-start lg:items-center justify-between gap-5">
              <div className="space-y-2 max-w-2xl">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-emerald-700 dark:text-emerald-400 text-xs font-bold">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    <span>
                      {isRtl
                        ? `الجلسة الحالية (${String(activeSession.number).padStart(2, '0')} من ${sortedSessions.length})`
                        : `Current Session (${String(activeSession.number).padStart(2, '0')} of ${sortedSessions.length})`}
                    </span>
                  </span>
                  <span className="inline-flex items-center gap-1 text-xs text-[var(--color-text-subtle)] font-mono">
                    <Clock className="w-3.5 h-3.5" />
                    <span>
                      {activeSession.durationMinutes}{' '}
                      {isRtl ? 'دقيقة' : 'min'} •{' '}
                      {activeSession.activities.length}{' '}
                      {isRtl ? 'أنشطة عملية' : 'activities'}
                    </span>
                  </span>
                </div>

                <h2 className="text-lg sm:text-xl font-extrabold text-[var(--color-text)]">
                  {getLocalizedText(activeSession.title, language)}
                </h2>

                <p className="text-xs sm:text-sm text-[var(--color-text-muted)] leading-relaxed">
                  {getLocalizedText(activeSession.description, language)}
                </p>
              </div>

              <div className="w-full lg:w-auto shrink-0">
                <Link
                  href={`/web-creator-ai/session/${activeSession.id}`}
                  className="block w-full lg:w-auto"
                >
                  <Button
                    variant="primary"
                    size="lg"
                    className="w-full lg:w-auto font-bold shadow-sm"
                    leftIcon={<Play className="w-4 h-4 fill-current" />}
                  >
                    {isRtl ? 'متابعة التعلّم' : 'Continue Learning'}
                  </Button>
                </Link>
              </div>
            </div>
          )}

          {/* 4. Real Data-Backed Progress Summary */}
          <div className="pt-4 border-t border-[var(--color-border-subtle)] grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="p-4 rounded-xl bg-[var(--color-background)] border border-[var(--color-border-subtle)] flex items-center justify-between">
              <div>
                <span className="text-xs text-[var(--color-text-muted)] block">
                  {isRtl ? 'الأنشطة المكتملة' : 'Completed Activities'}
                </span>
                <span className="text-xl font-extrabold text-[var(--color-text)] font-mono">
                  {completedActivitiesCount} / {totalActivitiesCount}
                </span>
              </div>
              <CheckCircle2 className="w-6 h-6 text-emerald-500 shrink-0" />
            </div>

            <div className="p-4 rounded-xl bg-[var(--color-background)] border border-[var(--color-border-subtle)] flex items-center justify-between">
              <div>
                <span className="text-xs text-[var(--color-text-muted)] block">
                  {isRtl ? 'الجلسات المنجزة' : 'Completed Sessions'}
                </span>
                <span className="text-xl font-extrabold text-[var(--color-text)] font-mono">
                  {completedSessionsCount} / {sortedSessions.length}
                </span>
              </div>
              <Layers className="w-6 h-6 text-[var(--color-secondary)] shrink-0" />
            </div>

            <div className="p-4 rounded-xl bg-[var(--color-background)] border border-[var(--color-border-subtle)] space-y-2">
              <div className="flex items-center justify-between text-xs">
                <span className="text-[var(--color-text-muted)]">
                  {isRtl ? 'نسبة الإنجاز الكلية' : 'Overall Completion'}
                </span>
                <span className="font-bold font-mono text-[var(--color-secondary)]">
                  {overallPercent}%
                </span>
              </div>
              <div className="w-full h-2 rounded-full bg-[var(--color-surface-sunken)] overflow-hidden">
                <div
                  className="h-full bg-[var(--color-secondary)] transition-all duration-500 rounded-full"
                  style={{ width: `${overallPercent}%` }}
                />
              </div>
            </div>
          </div>
        </section>

        {/* 5. Organized Collapsible Curriculum Roadmap (All 12 Sessions) */}
        <section className="space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2">
            <div>
              <h2 className="text-xl sm:text-2xl font-extrabold text-[var(--color-text)]">
                {isRtl ? 'خارطة المنهج والجلسات' : 'Curriculum Roadmap & Sessions'}
              </h2>
              <p className="text-xs sm:text-sm text-[var(--color-text-muted)]">
                {isRtl
                  ? 'جميع الجلسات الـ 12 مرتبة في 3 مراحل واضحة. اضغط على أي مرحلة لعرض جلساتها وأنشطتها.'
                  : 'All 12 sessions organized into 3 clear phases. Click any phase to view its sessions and activities.'}
              </p>
            </div>
            <Link
              href="/web-creator-ai/sessions"
              className="text-xs font-bold text-[var(--color-secondary)] hover:underline"
            >
              {isRtl ? 'عرض جدول الجلسات الكامل ←' : 'View Full Sessions Directory →'}
            </Link>
          </div>

          <div className="space-y-3.5">
            {CURRICULUM_PHASES.map((phase) => {
              const isOpen = !!openPhases[phase.id];
              const phaseSessions = sortedSessions.filter((s) =>
                phase.sessionNumbers.includes(s.number)
              );

              const phaseCompletedCount = phaseSessions.filter((s) => {
                const stats = getSessionCompletionStats(
                  s.id,
                  s.activities.length
                );
                return stats.isAllCompleted || s.status === 'completed';
              }).length;

              return (
                <div
                  key={phase.id}
                  className="rounded-2xl bg-[var(--color-surface)] border border-[var(--color-border)] overflow-hidden shadow-2xs"
                >
                  <button
                    type="button"
                    onClick={() => togglePhase(phase.id)}
                    aria-expanded={isOpen}
                    className="w-full p-5 sm:p-6 flex items-center justify-between gap-4 text-start hover:bg-[var(--color-surface-sunken)]/50 transition-colors"
                  >
                    <div className="space-y-1">
                      <div className="flex flex-wrap items-center gap-2.5">
                        <h3 className="text-base sm:text-lg font-extrabold text-[var(--color-text)]">
                          {isRtl ? phase.title.ar : phase.title.en}
                        </h3>
                        <span className="px-2.5 py-0.5 rounded-full text-[11px] font-mono font-bold bg-[var(--color-surface-sunken)] border border-[var(--color-border)] text-[var(--color-text-muted)]">
                          {phaseCompletedCount} / {phaseSessions.length}{' '}
                          {isRtl ? 'مكتملة' : 'done'}
                        </span>
                      </div>
                      <p className="text-xs sm:text-sm text-[var(--color-text-muted)]">
                        {isRtl ? phase.subtitle.ar : phase.subtitle.en}
                      </p>
                    </div>

                    <div className="w-9 h-9 rounded-xl bg-[var(--color-surface-sunken)] border border-[var(--color-border)] flex items-center justify-center shrink-0 text-[var(--color-text-muted)]">
                      {isOpen ? (
                        <ChevronUp className="w-4 h-4" />
                      ) : (
                        <ChevronDown className="w-4 h-4" />
                      )}
                    </div>
                  </button>

                  {isOpen && (
                    <div className="p-4 sm:p-6 pt-0 border-t border-[var(--color-border-subtle)] divide-y divide-[var(--color-border-subtle)]">
                      {phaseSessions.map((session) => {
                        const stats = getSessionCompletionStats(
                          session.id,
                          session.activities.length
                        );
                        const isCurrent = activeSession?.id === session.id;

                        return (
                          <div
                            key={session.id}
                            className="py-4 first:pt-4 last:pb-0 flex flex-col sm:flex-row sm:items-center justify-between gap-4"
                          >
                            <div className="space-y-1 max-w-2xl">
                              <div className="flex flex-wrap items-center gap-2">
                                <span className="font-mono text-xs font-bold px-2 py-0.5 rounded bg-[var(--color-primary-subtle)] text-[var(--color-secondary)]">
                                  {isRtl
                                    ? `جلسة ${String(session.number).padStart(2, '0')}`
                                    : `Session ${String(session.number).padStart(2, '0')}`}
                                </span>
                                {isCurrent && (
                                  <span className="text-[11px] font-bold px-2 py-0.5 rounded-full bg-emerald-500/15 text-emerald-700 dark:text-emerald-400">
                                    {isRtl ? 'الجلسة الحالية' : 'Current'}
                                  </span>
                                )}
                                {stats.isAllCompleted && (
                                  <span className="inline-flex items-center gap-1 text-[11px] font-bold text-emerald-600 dark:text-emerald-400">
                                    <CheckCircle2 className="w-3.5 h-3.5" />
                                    <span>{isRtl ? 'مكتملة' : 'Completed'}</span>
                                  </span>
                                )}
                                <span className="text-xs text-[var(--color-text-subtle)] font-mono">
                                  {stats.completedCount}/{stats.totalCount}{' '}
                                  {isRtl ? 'أنشطة' : 'activities'}
                                </span>
                              </div>

                              <h4 className="text-sm sm:text-base font-bold text-[var(--color-text)]">
                                {getLocalizedText(session.title, language)}
                              </h4>

                              <p className="text-xs text-[var(--color-text-muted)] leading-relaxed">
                                {getLocalizedText(session.subtitle, language)}
                              </p>
                            </div>

                            <Link
                              href={`/web-creator-ai/session/${session.id}`}
                              className="shrink-0"
                            >
                              <Button
                                size="sm"
                                variant={isCurrent ? 'primary' : 'outline'}
                                className="w-full sm:w-auto font-bold"
                                rightIcon={
                                  isRtl ? (
                                    <ArrowLeft className="w-3.5 h-3.5" />
                                  ) : (
                                    <ArrowRight className="w-3.5 h-3.5" />
                                  )
                                }
                              >
                                {stats.completedCount > 0
                                  ? isRtl
                                    ? 'مراجعة أو متابعة الجلسة'
                                    : 'Continue Session'
                                  : isRtl
                                    ? 'دخول الجلسة'
                                    : 'Open Session'}
                              </Button>
                            </Link>
                          </div>
                        );
                      })}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>

        {/* 6. Single Clear Entry Point for Resources, Templates & Labs + 7. WhatsApp Submission Guide */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* 6. Single Unified Resources, Templates & Labs Entry */}
          <Card className="lg:col-span-7 p-6 sm:p-7 flex flex-col justify-between space-y-5">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-xl bg-[var(--color-primary-subtle)] text-[var(--color-secondary)] flex items-center justify-center">
                <Bookmark className="w-5 h-5" />
              </div>
              <h2 className="text-lg sm:text-xl font-extrabold text-[var(--color-text)]">
                {isRtl
                  ? 'مركز الموارد والقوالب والمختبرات المساعدة'
                  : 'Resources, Templates & Labs Hub'}
              </h2>
              <p className="text-xs sm:text-sm text-[var(--color-text-muted)] leading-relaxed">
                {isRtl
                  ? 'جمعنا لك في مكان واحد كل ما تحتاجه أثناء التطبيق: قوائم الفحص، القوالب الجاهزة، موجهات الذكاء الاصطناعي (AI Lab)، وورش المشاريع التطبيقية.'
                  : 'Everything you need while practicing in one place: checklists, starter templates, AI prompts (AI Lab), and hands-on project workshops.'}
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <Link href="/web-creator-ai/resources">
                <Button
                  variant="primary"
                  size="md"
                  className="font-bold"
                  rightIcon={
                    isRtl ? (
                      <ArrowLeft className="w-4 h-4" />
                    ) : (
                      <ArrowRight className="w-4 h-4" />
                    )
                  }
                >
                  {isRtl
                    ? 'فتح الموارد والمختبرات'
                    : 'Open Resources & Labs'}
                </Button>
              </Link>

              <Link href="/web-creator-ai/projects">
                <Button variant="outline" size="md" className="font-bold">
                  {isRtl ? 'ورش المشاريع التطبيقية' : 'Project Workshops'}
                </Button>
              </Link>
            </div>
          </Card>

          {/* 7. How Activity Submission & Feedback via WhatsApp Works */}
          <Card className="lg:col-span-5 p-6 sm:p-7 bg-[var(--color-surface-sunken)] border border-[var(--color-border)] flex flex-col justify-between space-y-4">
            <div className="space-y-2.5">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 text-xs font-bold">
                <MessageCircle className="w-3.5 h-3.5" />
                <span>
                  {isRtl
                    ? 'تسليم الأنشطة والمراجعة عبر واتساب'
                    : 'WhatsApp Activity Review'}
                </span>
              </div>

              <h2 className="text-base sm:text-lg font-extrabold text-[var(--color-text)]">
                {isRtl
                  ? 'كيف تسلّم أنشطتك وتحصل على ملاحظات المدرب؟'
                  : 'How to Submit Activities & Get Feedback'}
              </h2>

              <ol className="space-y-1.5 text-xs text-[var(--color-text-muted)] leading-relaxed list-decimal list-inside">
                <li>
                  {isRtl
                    ? 'افتح الجلسة الحالية واقرأ المطلوب في النشاط خطوة بخطوة.'
                    : 'Open the current session and read the activity instructions.'}
                </li>
                <li>
                  {isRtl
                    ? 'اكتب إجابتك أو الكود في مساحة العمل (يُحفظ تلقائيًا في متصفحك).'
                    : 'Write your answer or code in the workspace (saved automatically in your browser).'}
                </li>
                <li>
                  {isRtl
                    ? `اضغط «إرسال النتيجة عبر واتساب» لتفتح محادثة جاهزة مع المدرب على الرقم (${WHATSAPP_CONFIG.phoneDisplay}) لمراجعة عملك.`
                    : `Click "Send Result via WhatsApp" to open a pre-filled chat with the instructor (${WHATSAPP_CONFIG.phoneDisplay}) for review.`}
                </li>
              </ol>
            </div>

            <div className="pt-2 space-y-3">
              <Button
                variant="outline"
                size="sm"
                onClick={handleAskInstructorWhatsApp}
                className="w-full font-bold bg-[var(--color-surface)] justify-center"
                leftIcon={
                  <MessageCircle className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                }
              >
                {isRtl
                  ? 'اسأل المدرب عبر واتساب'
                  : 'Ask Instructor on WhatsApp'}
              </Button>

              {preparedWhatsAppMsg && (
                <WhatsAppActionFeedback
                  message={preparedWhatsAppMsg}
                  isRtl={isRtl}
                  onClose={() => setPreparedWhatsAppMsg(null)}
                />
              )}
            </div>
          </Card>
        </section>
      </div>
    </LearningShell>
  );
}
