'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import {
  LearningShell,
  PageContainer,
  Card,
  Badge,
  Button,
  WhatsAppActionFeedback,
} from '@/components';
import { usePreferencesStore, useSessionStore, useProgressStore } from '@/store';
import { getLocalizedText } from '@/lib/utils';
import {
  saveStudentSubmission,
  getCompletedActivityIds,
  getStudentSubmissionForActivity,
  getSessionSubmissions,
  getStudentDraft,
  saveStudentDraft,
  getStudentName,
  saveStudentName,
  StudentSubmission,
} from '@/lib/student-storage';
import {
  WHATSAPP_CONFIG,
  buildActivitySubmissionMessage,
  downloadTextFile,
  getCurrentPageUrl,
  isAnswerTooLongForWhatsApp,
  openWhatsAppChat,
} from '@/lib/whatsapp';
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  Clock,
  Sparkles,
  Lightbulb,
  Copy,
  Check,
  Trophy,
  RotateCcw,
  BookOpen,
  FileCheck2,
  History,
  MessageCircle,
  Save,
  Download,
  User,
  HelpCircle,
} from 'lucide-react';

export default function StudentSessionRunnerPage() {
  const params = useParams();
  const sessionId = (params?.sessionId as string) || 'session-01';

  const { language } = usePreferencesStore();
  const isRtl = language === 'ar';

  const {
    sessions,
    getSessionById,
    completeStudentActivity,
    initializeSessions,
  } = useSessionStore();

  const { completeLesson, completeChallenge } = useProgressStore();

  const [currentActivityIndex, setCurrentActivityIndex] = useState(0);
  const [studentName, setStudentName] = useState('');
  const [studentInput, setStudentInput] = useState('');
  const [isCopiedSnippet, setIsCopiedSnippet] = useState(false);
  const [isCompletedSessionView, setIsCompletedSessionView] = useState(false);
  const [completedActivities, setCompletedActivities] = useState<string[]>([]);
  const [localSaveBanner, setLocalSaveBanner] = useState(false);
  const [whatsAppFeedbackState, setWhatsAppFeedbackState] = useState<{
    message: string;
    isLong: boolean;
    fullAnswer: string;
    fileName: string;
  } | null>(null);
  const [savedSubmissions, setSavedSubmissions] = useState<StudentSubmission[]>([]);
  const [draftSaved, setDraftSaved] = useState(true);

  useEffect(() => {
    initializeSessions();
  }, [initializeSessions]);

  const session = getSessionById(sessionId);
  const activities = session?.activities || [];
  const currentActivity = activities[currentActivityIndex] || activities[0];
  const totalActivities = activities.length;

  // Load student name and completed activities on mount / session change
  useEffect(() => {
    const timer = setTimeout(() => {
      setStudentName(getStudentName());
      const savedIds = getCompletedActivityIds(sessionId);
      setCompletedActivities(savedIds);
      const subs = getSessionSubmissions(sessionId);
      setSavedSubmissions(subs);
    }, 0);
    return () => clearTimeout(timer);
  }, [sessionId]);

  // Restore previously submitted answer or draft whenever current activity changes
  useEffect(() => {
    if (!currentActivity) return;
    const timer = setTimeout(() => {
      const prev = getStudentSubmissionForActivity(currentActivity.id);
      setStudentInput(prev?.studentAnswer || getStudentDraft(currentActivity.id));
      setDraftSaved(true);
      setLocalSaveBanner(false);
      setWhatsAppFeedbackState(null);
    }, 0);
    return () => clearTimeout(timer);
  }, [currentActivity]);

  if (!session) {
    return (
      <LearningShell headerTitle={isRtl ? 'الجلسة غير موجودة' : 'Session Not Found'}>
        <PageContainer>
          <div className="text-center py-20 space-y-4">
            <h2 className="text-2xl font-bold">
              {isRtl ? 'الجلسة المطلوبة غير متوفرة' : 'Session Not Found'}
            </h2>
            <Link href="/web-creator-ai/sessions">
              <Button variant="primary" size="sm">
                {isRtl ? 'العودة لفهرس الجلسات' : 'Back to Sessions'}
              </Button>
            </Link>
          </div>
        </PageContainer>
      </LearningShell>
    );
  }

  const sortedSessions = [...sessions].sort((a, b) => a.number - b.number);
  const nextSession = sortedSessions.find((s) => s.number === session.number + 1);

  const handleCopySnippet = (text: string) => {
    navigator.clipboard.writeText(text);
    setIsCopiedSnippet(true);
    setTimeout(() => setIsCopiedSnippet(false), 2000);
  };

  const handleStudentNameChange = (value: string) => {
    setStudentName(value);
    saveStudentName(value);
  };

  const persistCurrentActivityLocally = (markWhatsAppOpened: boolean) => {
    if (!currentActivity) return;

    saveStudentSubmission(session.id, currentActivity.id, studentInput, {
      markWhatsAppOpened,
    });
    completeStudentActivity(session.id, currentActivity.id, 'std-current');
    completeLesson(`session-${session.number}-act-${currentActivity.order}`);
    completeChallenge(`session-${session.number}-challenge`);

    const updatedIds = getCompletedActivityIds(session.id);
    setCompletedActivities(updatedIds);
    setSavedSubmissions(getSessionSubmissions(session.id));
  };

  const handleSaveLocallyOnly = () => {
    if (!currentActivity || !studentInput.trim()) return;
    persistCurrentActivityLocally(false);
    setLocalSaveBanner(true);
    setTimeout(() => setLocalSaveBanner(false), 4000);
  };

  const handleSendViaWhatsApp = () => {
    if (!currentActivity || !studentInput.trim()) return;

    // 1. Always save locally first so the student's work is never lost
    persistCurrentActivityLocally(true);

    const trimmedAnswer = studentInput.trim();
    const isLong = isAnswerTooLongForWhatsApp(trimmedAnswer);
    const fileName = `session-${String(session.number).padStart(2, '0')}-activity-${String(currentActivity.order).padStart(2, '0')}.txt`;

    // 2. If answer is very long, trigger .txt download automatically so the student can attach it
    if (isLong) {
      const fileHeader = [
        `WEB CREATOR AI — نتيجة نشاط متدرب`,
        `الجلسة: ${session.number} — ${getLocalizedText(session.title, 'ar')}`,
        `النشاط: ${currentActivity.order} — ${getLocalizedText(currentActivity.title, 'ar')}`,
        ...(studentName.trim() ? [`اسم المتدرب: ${studentName.trim()}`] : []),
        `التاريخ: ${new Date().toLocaleString('ar-EG')}`,
        `----------------------------------------`,
        '',
      ].join('\n');
      downloadTextFile(fileName, `${fileHeader}${trimmedAnswer}`);
    }

    // 3. Build structured WhatsApp message
    const message = buildActivitySubmissionMessage({
      sessionNumber: session.number,
      sessionTitle: getLocalizedText(session.title, 'ar'),
      activityOrder: currentActivity.order,
      activityTitle: getLocalizedText(currentActivity.title, 'ar'),
      studentName,
      answer: trimmedAnswer,
      activityUrl: getCurrentPageUrl(`/web-creator-ai/session/${session.id}`),
      attachedFileName: fileName,
    });

    setWhatsAppFeedbackState({
      message,
      isLong,
      fullAnswer: trimmedAnswer,
      fileName,
    });

    // 4. Open WhatsApp Click-to-Chat in a new tab
    openWhatsAppChat(message);
  };

  const handleSendSavedSubmissionToWhatsApp = (sub: StudentSubmission) => {
    const act = activities.find((a) => a.id === sub.activityId);
    if (!act) return;

    const fileName = `session-${String(session.number).padStart(2, '0')}-activity-${String(act.order).padStart(2, '0')}.txt`;
    const isLong = isAnswerTooLongForWhatsApp(sub.studentAnswer);
    if (isLong) {
      downloadTextFile(fileName, sub.studentAnswer);
    }

    const message = buildActivitySubmissionMessage({
      sessionNumber: session.number,
      sessionTitle: getLocalizedText(session.title, 'ar'),
      activityOrder: act.order,
      activityTitle: getLocalizedText(act.title, 'ar'),
      studentName,
      answer: sub.studentAnswer,
      activityUrl: getCurrentPageUrl(`/web-creator-ai/session/${session.id}`),
      attachedFileName: fileName,
    });

    saveStudentSubmission(session.id, act.id, sub.studentAnswer, {
      markWhatsAppOpened: true,
    });
    setSavedSubmissions(getSessionSubmissions(session.id));
    openWhatsAppChat(message);
  };

  const progressPercent =
    totalActivities > 0
      ? Math.round((completedActivities.length / totalActivities) * 100)
      : 0;

  const isCurrentActivityCompleted =
    currentActivity && completedActivities.includes(currentActivity.id);
  const currentSubmissionRecord = currentActivity
    ? savedSubmissions.find((s) => s.activityId === currentActivity.id)
    : undefined;
  const isCurrentInputLong = isAnswerTooLongForWhatsApp(studentInput);

  return (
    <LearningShell
      headerTitle={`${isRtl ? 'جلسة' : 'Session'} ${String(session.number).padStart(2, '0')}: ${getLocalizedText(session.title, language)}`}
    >
      <PageContainer className="max-w-4xl mx-auto space-y-6 pb-20 text-start">
        {/* Top Session Header & Progress Bar */}
        <div className="p-5 sm:p-6 rounded-2xl bg-[var(--color-surface)] border border-[var(--color-border)] shadow-xs space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div className="space-y-1">
              <div className="flex flex-wrap items-center gap-2">
                <Link
                  href="/web-creator-ai"
                  className="text-xs font-bold text-[var(--color-secondary)] hover:underline"
                >
                  {isRtl ? '← العودة للوحة التدريب' : '← Back to Training Hub'}
                </Link>
                <span className="text-[var(--color-border)]">•</span>
                <span className="text-xs font-mono font-bold text-[var(--color-text-subtle)]">
                  {isRtl
                    ? `الجلسة ${String(session.number).padStart(2, '0')} من 12`
                    : `Session ${String(session.number).padStart(2, '0')} of 12`}
                </span>
              </div>
              <h1 className="text-lg sm:text-2xl font-extrabold text-[var(--color-text)] leading-snug">
                {getLocalizedText(session.title, language)}
              </h1>
              <p className="text-xs sm:text-sm text-[var(--color-text-muted)] leading-relaxed">
                {getLocalizedText(session.subtitle, language)}
              </p>
            </div>

            <div className="shrink-0 flex items-center gap-2 self-start sm:self-center">
              <span className="px-3 py-1.5 rounded-xl bg-[var(--color-surface-sunken)] border border-[var(--color-border)] text-xs font-mono font-bold text-[var(--color-text)]">
                {completedActivities.length} / {totalActivities}{' '}
                {isRtl ? 'أنشطة مكتملة' : 'completed'} ({progressPercent}%)
              </span>
            </div>
          </div>

          {/* Collapsible Session Objectives Summary */}
          {session.objectives && session.objectives.length > 0 && (
            <details className="group rounded-xl bg-[var(--color-surface-sunken)] border border-[var(--color-border-subtle)] px-4 py-3">
              <summary className="cursor-pointer list-none flex items-center justify-between text-xs sm:text-sm font-bold text-[var(--color-text)]">
                <span className="inline-flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-[var(--color-secondary)]" />
                  <span>
                    {isRtl
                      ? 'ماذا ستتعلم وتنجز في هذه الجلسة؟ (اضغط للعرض)'
                      : 'What will you learn in this session? (Click to expand)'}
                  </span>
                </span>
                <span className="text-xs text-[var(--color-secondary)] group-open:rotate-180 transition-transform">
                  ▼
                </span>
              </summary>
              <ul className="mt-3 pt-3 border-t border-[var(--color-border-subtle)] space-y-2 text-xs sm:text-sm text-[var(--color-text-muted)]">
                {session.objectives.map((obj, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    <span>{getLocalizedText(obj, language)}</span>
                  </li>
                ))}
              </ul>
            </details>
          )}

          {/* Ordered Activities Stepper */}
          <div className="pt-2 border-t border-[var(--color-border-subtle)] space-y-2">
            <span className="text-xs font-bold text-[var(--color-text-muted)] block">
              {isRtl
                ? 'أنشطة الجلسة بالترتيب (اختر النشاط):'
                : 'Session Activities in Order (Select an activity):'}
            </span>
            <div className="flex items-center gap-2 overflow-x-auto pb-1">
              {activities.map((act, index) => {
                const isDone = completedActivities.includes(act.id);
                const isCurrent =
                  index === currentActivityIndex && !isCompletedSessionView;
                return (
                  <button
                    key={act.id}
                    type="button"
                    onClick={() => {
                      setIsCompletedSessionView(false);
                      setCurrentActivityIndex(index);
                    }}
                    className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-bold transition-all shrink-0 border ${
                      isCurrent
                        ? 'bg-[var(--color-primary)] text-white border-[var(--color-primary)] shadow-xs'
                        : isDone
                          ? 'bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border-emerald-500/30 hover:bg-emerald-500/20'
                          : 'bg-[var(--color-surface-sunken)] text-[var(--color-text-muted)] border-[var(--color-border)] hover:text-[var(--color-text)]'
                    }`}
                  >
                    {isDone ? (
                      <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
                    ) : (
                      <span className="w-4 h-4 rounded-full bg-current/15 flex items-center justify-center text-[10px] font-mono">
                        {index + 1}
                      </span>
                    )}
                    <span className="truncate max-w-[180px]">
                      {getLocalizedText(act.title, language)}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Session Completed Celebration View OR Active Activity Workspace */}
        {isCompletedSessionView ? (
          <Card className="p-8 sm:p-10 text-center space-y-6 border-2 border-emerald-500/40 bg-[var(--color-surface)]">
            <div className="w-16 h-16 rounded-2xl bg-emerald-500/15 text-emerald-500 flex items-center justify-center mx-auto">
              <Trophy className="w-8 h-8" />
            </div>

            <div className="space-y-2 max-w-xl mx-auto">
              <Badge variant="success" size="md">
                {isRtl
                  ? `ملخص الجلسة ${String(session.number).padStart(2, '0')}`
                  : `Session ${String(session.number).padStart(2, '0')} Summary`}
              </Badge>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[var(--color-text)]">
                {isRtl
                  ? 'أحسنت! راجعت أنشطة هذه الجلسة'
                  : 'Great job reviewing this session’s activities!'}
              </h2>
              <p className="text-sm text-[var(--color-text-muted)] leading-relaxed">
                {isRtl
                  ? 'جميع إجاباتك محفوظة في متصفحك. تأكد من إرسال نتائج الأنشطة عبر واتساب للمدرب لتلقي الملاحظات قبل الانتقال للجلسة التالية.'
                  : 'All your answers are saved in your browser. Make sure you send your activity results via WhatsApp to receive instructor feedback.'}
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
              <Button
                variant="outline"
                size="md"
                onClick={() => {
                  setIsCompletedSessionView(false);
                  setCurrentActivityIndex(0);
                }}
                leftIcon={<RotateCcw className="w-4 h-4" />}
              >
                {isRtl ? 'العودة لأنشطة الجلسة' : 'Back to Session Activities'}
              </Button>

              {nextSession && (
                <Link href={`/web-creator-ai/session/${nextSession.id}`}>
                  <Button
                    variant="primary"
                    size="md"
                    rightIcon={
                      isRtl ? (
                        <ArrowLeft className="w-4 h-4" />
                      ) : (
                        <ArrowRight className="w-4 h-4" />
                      )
                    }
                  >
                    {isRtl
                      ? `الانتقال إلى الجلسة ${String(nextSession.number).padStart(2, '0')}`
                      : `Go to Session ${String(nextSession.number).padStart(2, '0')}`}
                  </Button>
                </Link>
              )}

              <Link href="/web-creator-ai">
                <Button variant="ghost" size="md">
                  {isRtl ? 'لوحة التدريب الرئيسية' : 'Training Hub'}
                </Button>
              </Link>
            </div>
          </Card>
        ) : currentActivity ? (
          <div className="space-y-6">
            {/* Activity Instructions Card */}
            <Card className="p-6 sm:p-8 space-y-6 border border-[var(--color-border)]">
              {/* Activity Header */}
              <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-[var(--color-border-subtle)]">
                <div className="flex flex-wrap items-center gap-2">
                  <Badge variant="primary" size="sm">
                    {isRtl
                      ? `النشاط ${currentActivityIndex + 1} من ${totalActivities}`
                      : `Activity ${currentActivityIndex + 1} of ${totalActivities}`}
                  </Badge>
                  {isCurrentActivityCompleted ? (
                    <span className="inline-flex items-center gap-1.5 text-xs font-bold px-2.5 py-1 rounded-full bg-emerald-500/15 text-emerald-700 dark:text-emerald-400">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      <span>
                        {currentSubmissionRecord?.sentViaWhatsAppAt
                          ? isRtl
                            ? 'تم الحفظ وتجهيز الإرسال لواتساب'
                            : 'Saved & Prepared for WhatsApp'
                          : isRtl
                            ? 'محفوظ في جهازك'
                            : 'Saved on Device'}
                      </span>
                    </span>
                  ) : (
                    <span className="inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded-full bg-[var(--color-surface-sunken)] text-[var(--color-text-muted)]">
                      {isRtl ? 'قيد التنفيذ' : 'In Progress'}
                    </span>
                  )}
                </div>

                <div className="flex items-center gap-1.5 text-xs font-mono text-[var(--color-text-muted)]">
                  <Clock className="w-3.5 h-3.5 text-[var(--color-secondary)]" />
                  <span>
                    {currentActivity.durationMinutes}{' '}
                    {isRtl ? 'دقيقة تقريبًا' : 'mins'}
                  </span>
                </div>
              </div>

              {/* Activity Title & Headline */}
              <div className="space-y-2">
                <h2 className="text-xl sm:text-2xl font-extrabold text-[var(--color-text)] leading-snug">
                  {getLocalizedText(currentActivity.title, language)}
                </h2>
                <p className="text-sm sm:text-base font-semibold text-[var(--color-secondary)] leading-relaxed">
                  {getLocalizedText(
                    currentActivity.studentContent.headline,
                    language
                  )}
                </p>
              </div>

              {/* 1. What is required & Why */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 sm:p-5 rounded-2xl bg-[var(--color-surface-sunken)] border border-[var(--color-border)] space-y-2">
                  <div className="flex items-center gap-2 text-xs font-bold text-[var(--color-secondary)]">
                    <BookOpen className="w-4 h-4" />
                    <span>
                      {isRtl
                        ? '1. ما المطلوب في هذا النشاط؟'
                        : '1. What is required in this activity?'}
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-[var(--color-text)] leading-relaxed">
                    {getLocalizedText(
                      currentActivity.studentContent.whatAmIDoing,
                      language
                    )}
                  </p>
                </div>

                <div className="p-4 sm:p-5 rounded-2xl bg-[var(--color-surface-sunken)] border border-[var(--color-border)] space-y-2">
                  <div className="flex items-center gap-2 text-xs font-bold text-amber-600 dark:text-amber-400">
                    <Sparkles className="w-4 h-4" />
                    <span>
                      {isRtl
                        ? 'ما الفائدة العملية من هذا النشاط؟'
                        : 'Why does this step matter?'}
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-[var(--color-text-muted)] leading-relaxed">
                    {getLocalizedText(
                      currentActivity.studentContent.whyAmIDoingIt,
                      language
                    )}
                  </p>
                </div>
              </div>

              {/* 2. Step-by-Step Instructions */}
              <div className="space-y-3">
                <h3 className="text-sm sm:text-base font-extrabold text-[var(--color-text)]">
                  {isRtl
                    ? '2. خطوات التنفيذ خطوة بخطوة:'
                    : '2. Step-by-Step Instructions:'}
                </h3>
                <div className="space-y-2.5">
                  {currentActivity.studentContent.howDoIDoIt.map(
                    (step, sIdx) => (
                      <div
                        key={sIdx}
                        className="flex items-start gap-3 p-3.5 rounded-xl bg-[var(--color-surface-sunken)]/60 border border-[var(--color-border-subtle)]"
                      >
                        <span className="w-6 h-6 rounded-lg bg-[var(--color-primary)] text-white font-mono text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                          {sIdx + 1}
                        </span>
                        <p className="text-xs sm:text-sm text-[var(--color-text)] leading-relaxed">
                          {getLocalizedText(step, language)}
                        </p>
                      </div>
                    )
                  )}
                </div>
              </div>

              {/* 3. How to know the result is ready (Expected Result) */}
              {currentActivity.studentContent.expectedResult && (
                <div className="p-4 rounded-xl bg-emerald-500/5 border border-emerald-500/25 flex items-start gap-3">
                  <FileCheck2 className="w-5 h-5 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                  <div className="space-y-1">
                    <span className="text-xs font-bold text-emerald-700 dark:text-emerald-400 block">
                      {isRtl
                        ? '3. كيف تعرف أن النتيجة جاهزة؟'
                        : '3. How do you know your result is ready?'}
                    </span>
                    <p className="text-xs sm:text-sm text-[var(--color-text)] leading-relaxed">
                      {getLocalizedText(
                        currentActivity.studentContent.expectedResult,
                        language
                      )}
                    </p>
                  </div>
                </div>
              )}

              {/* Collapsible Starter Code / Template */}
              {currentActivity.studentContent.starterSnippet && (
                <details className="group rounded-2xl border border-[var(--color-border)] overflow-hidden bg-[var(--color-surface-sunken)]">
                  <summary className="cursor-pointer list-none px-4 py-3 flex items-center justify-between text-xs sm:text-sm font-bold text-[var(--color-text)]">
                    <span>
                      {isRtl
                        ? '📄 قالب البداية أو الكود المساعد (اضغط للعرض أو النسخ)'
                        : '📄 Starter Template / Helper Code (Click to view or copy)'}
                    </span>
                    <span className="text-xs text-[var(--color-secondary)] group-open:rotate-180 transition-transform">
                      ▼
                    </span>
                  </summary>
                  <div className="border-t border-[var(--color-border)] bg-slate-950 text-slate-100">
                    <div className="px-4 py-2 bg-slate-900 border-b border-slate-800 flex flex-wrap items-center justify-between gap-2">
                      <span className="text-xs font-mono text-slate-400">
                        template
                      </span>
                      <div className="flex items-center gap-2">
                        <button
                          type="button"
                          onClick={() => {
                            setStudentInput(
                              currentActivity.studentContent.starterSnippet || ''
                            );
                            saveStudentDraft(
                              currentActivity.id,
                              currentActivity.studentContent.starterSnippet || ''
                            );
                          }}
                          className="px-2.5 py-1 rounded-md bg-blue-600/20 hover:bg-blue-600/30 text-blue-300 text-xs font-semibold transition-colors"
                        >
                          {isRtl
                            ? 'نسخ إلى مساحة الحل'
                            : 'Insert into Workspace'}
                        </button>
                        <button
                          type="button"
                          onClick={() =>
                            handleCopySnippet(
                              currentActivity.studentContent.starterSnippet!
                            )
                          }
                          className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-slate-800 hover:bg-slate-700 text-xs font-medium text-slate-200 transition-colors"
                        >
                          {isCopiedSnippet ? (
                            <>
                              <Check className="w-3.5 h-3.5 text-emerald-400" />
                              <span className="text-emerald-400">
                                {isRtl ? 'تم النسخ' : 'Copied'}
                              </span>
                            </>
                          ) : (
                            <>
                              <Copy className="w-3.5 h-3.5" />
                              <span>{isRtl ? 'نسخ' : 'Copy'}</span>
                            </>
                          )}
                        </button>
                      </div>
                    </div>
                    <pre
                      className="p-4 text-xs sm:text-sm font-mono overflow-x-auto leading-relaxed"
                      dir="ltr"
                    >
                      <code>{currentActivity.studentContent.starterSnippet}</code>
                    </pre>
                  </div>
                </details>
              )}

              {/* Collapsible Hints & Sample Answer */}
              {(currentActivity.studentContent.hints?.length ||
                currentActivity.studentContent.exampleSnippet) && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                  {currentActivity.studentContent.hints &&
                    currentActivity.studentContent.hints.length > 0 && (
                      <details className="group rounded-xl border border-[var(--color-border)] bg-[var(--color-surface-sunken)] p-3.5">
                        <summary className="cursor-pointer list-none flex items-center justify-between text-xs font-bold text-[var(--color-text)]">
                          <span className="inline-flex items-center gap-1.5">
                            <Lightbulb className="w-4 h-4 text-amber-500" />
                            <span>
                              {isRtl
                                ? `تلميحات مساعدة (${currentActivity.studentContent.hints.length})`
                                : `Helpful Hints (${currentActivity.studentContent.hints.length})`}
                            </span>
                          </span>
                          <span className="text-xs text-[var(--color-secondary)] group-open:rotate-180 transition-transform">
                            ▼
                          </span>
                        </summary>
                        <ul className="mt-3 pt-2.5 border-t border-[var(--color-border-subtle)] space-y-2 text-xs text-[var(--color-text-muted)]">
                          {currentActivity.studentContent.hints.map(
                            (hint, hIdx) => (
                              <li key={hIdx} className="leading-relaxed">
                                • {getLocalizedText(hint, language)}
                              </li>
                            )
                          )}
                        </ul>
                      </details>
                    )}

                  {currentActivity.studentContent.exampleSnippet && (
                    <details className="group rounded-xl border border-[var(--color-border)] bg-[var(--color-surface-sunken)] p-3.5">
                      <summary className="cursor-pointer list-none flex items-center justify-between text-xs font-bold text-[var(--color-text)]">
                        <span className="inline-flex items-center gap-1.5">
                          <HelpCircle className="w-4 h-4 text-[var(--color-secondary)]" />
                          <span>
                            {isRtl
                              ? 'مثال استرشادي للحل (للمقارنة بعد المحاولة)'
                              : 'Sample Reference Solution'}
                          </span>
                        </span>
                        <span className="text-xs text-[var(--color-secondary)] group-open:rotate-180 transition-transform">
                          ▼
                        </span>
                      </summary>
                      <div className="mt-3 pt-2.5 border-t border-[var(--color-border-subtle)] space-y-2">
                        <pre className="text-xs text-[var(--color-text)] whitespace-pre-wrap font-sans leading-relaxed">
                          {currentActivity.studentContent.exampleSnippet}
                        </pre>
                      </div>
                    </details>
                  )}
                </div>
              )}
            </Card>

            {/* Trainee Answer Workspace & WhatsApp Submission Card */}
            <Card className="p-6 sm:p-8 space-y-5 border-2 border-[var(--color-secondary)]/30 bg-[var(--color-surface)]">
              <div className="space-y-1.5">
                <h3 className="text-base sm:text-lg font-extrabold text-[var(--color-text)]">
                  {isRtl
                    ? '4. مساحة الحل وتسليم النتيجة عبر واتساب'
                    : '4. Your Workspace & WhatsApp Submission'}
                </h3>
                <p className="text-xs text-[var(--color-text-muted)] leading-relaxed">
                  {isRtl
                    ? `اكتب إجابتك أو الكود أو رابط عملك في الصندوق أدناه. تُحفظ مسودتك تلقائيًا في متصفحك، وعند الضغط على «إرسال النتيجة عبر واتساب» سيتم حفظ الإجابة في سجل تقدمك وفتح رسالة واتساب جاهزة لإرسالها للمدرب (${WHATSAPP_CONFIG.phoneDisplay}).`
                    : `Write your answer, code, or project link below. Your draft is saved automatically in your browser, and clicking "Send Result via WhatsApp" saves your progress and opens a ready WhatsApp message to (${WHATSAPP_CONFIG.phoneDisplay}).`}
                </p>
              </div>

              {/* Optional Trainee Name Input */}
              <div className="space-y-1.5">
                <label
                  htmlFor="trainee-name-input"
                  className="text-xs font-bold text-[var(--color-text)] flex items-center gap-1.5"
                >
                  <User className="w-3.5 h-3.5 text-[var(--color-secondary)]" />
                  <span>
                    {isRtl
                      ? 'اسم المتدرب (يُحفظ تلقائيًا ليظهر في رسالة واتساب)'
                      : 'Trainee Name (saved automatically for WhatsApp messages)'}
                  </span>
                </label>
                <input
                  id="trainee-name-input"
                  type="text"
                  value={studentName}
                  onChange={(e) => handleStudentNameChange(e.target.value)}
                  placeholder={
                    isRtl
                      ? 'اكتب اسمك هنا (مثال: أحمد محمد)...'
                      : 'Enter your name (e.g. Ahmed)...'
                  }
                  className="w-full sm:max-w-md px-3.5 py-2 rounded-xl bg-[var(--color-surface-sunken)] border border-[var(--color-border)] text-sm text-[var(--color-text)] focus:outline-none focus:border-[var(--color-secondary)]"
                />
              </div>

              {/* Answer / Code Textarea */}
              <div className="space-y-2">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <label
                    htmlFor="activity-workspace-input"
                    className="text-xs font-bold text-[var(--color-text)]"
                  >
                    {isRtl
                      ? 'النتيجة أو الإجابة أو الكود:'
                      : 'Your Result, Answer, or Code:'}
                  </label>
                  <div className="flex items-center gap-3 text-[11px] font-mono text-[var(--color-text-muted)]">
                    <span>
                      {studentInput.trim().length}{' '}
                      {isRtl ? 'حرف' : 'chars'}
                    </span>
                    <span>•</span>
                    <span>
                      {draftSaved
                        ? isRtl
                          ? 'تم الحفظ التلقائي في المتصفح'
                          : 'Auto-saved in browser'
                        : isRtl
                          ? 'جاري الحفظ...'
                          : 'Saving...'}
                    </span>
                  </div>
                </div>

                <textarea
                  id="activity-workspace-input"
                  value={studentInput}
                  onChange={(e) => {
                    const nextValue = e.target.value;
                    setStudentInput(nextValue);
                    setDraftSaved(false);
                    if (currentActivity) {
                      setDraftSaved(
                        saveStudentDraft(currentActivity.id, nextValue)
                      );
                    }
                  }}
                  rows={8}
                  placeholder={
                    isRtl
                      ? 'اكتب إجابتك، أو الصق الكود، أو ضع رابط المشروع هنا...'
                      : 'Write your answer, paste your code, or add your project URL here...'
                  }
                  className="w-full p-4 rounded-xl bg-[var(--color-surface-sunken)] border border-[var(--color-border)] text-sm text-[var(--color-text)] placeholder:text-[var(--color-text-subtle)] focus:outline-none focus:border-[var(--color-secondary)] leading-relaxed font-mono"
                />

                {isCurrentInputLong && (
                  <div className="p-3 rounded-xl bg-amber-500/10 border border-amber-500/30 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs text-amber-800 dark:text-amber-300">
                    <span>
                      {isRtl
                        ? 'إجابتك أو الكود طويل (أكثر من 1500 حرف). عند الضغط على زر واتساب، سيتم تنزيل النتيجة الكاملة كملف نصي (.txt) تلقائيًا لتتمكن من إرفاقه في المحادثة دون أن ينقطع النص.'
                        : 'Your answer is long (>1500 chars). Clicking the WhatsApp button will automatically download a .txt file with your full answer so you can attach it in chat.'}
                    </span>
                    <button
                      type="button"
                      onClick={() =>
                        downloadTextFile(
                          `session-${String(session.number).padStart(2, '0')}-activity-${String(currentActivity.order).padStart(2, '0')}.txt`,
                          studentInput
                        )
                      }
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-amber-500/20 hover:bg-amber-500/30 font-bold shrink-0"
                    >
                      <Download className="w-3.5 h-3.5" />
                      <span>
                        {isRtl ? 'تنزيل كملف (.txt)' : 'Download (.txt)'}
                      </span>
                    </button>
                  </div>
                )}
              </div>

              {/* Primary & Secondary Action Buttons */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 pt-2">
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                  <Button
                    variant="primary"
                    size="lg"
                    onClick={handleSendViaWhatsApp}
                    disabled={!studentInput.trim()}
                    className="font-bold bg-emerald-600 hover:bg-emerald-700 border-emerald-600 text-white shadow-sm"
                    leftIcon={<MessageCircle className="w-4 h-4" />}
                  >
                    {isRtl
                      ? 'إرسال النتيجة عبر واتساب'
                      : 'Send Result via WhatsApp'}
                  </Button>

                  <Button
                    variant="outline"
                    size="md"
                    onClick={handleSaveLocallyOnly}
                    disabled={!studentInput.trim()}
                    className="font-bold"
                    leftIcon={<Save className="w-4 h-4" />}
                  >
                    {isRtl
                      ? 'حفظ النتيجة في جهازي فقط'
                      : 'Save on My Device Only'}
                  </Button>
                </div>

                { !studentInput.trim() && (
                  <span className="text-xs text-[var(--color-text-subtle)]">
                    {isRtl
                      ? '* اكتب إجابتك أولًا لتفعيل أزرار الحفظ والإرسال'
                      : '* Enter your answer first to enable saving & sending'}
                  </span>
                )}
              </div>

              {/* Local Save Confirmation */}
              {localSaveBanner && (
                <div className="p-3.5 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-xs font-bold text-emerald-700 dark:text-emerald-400 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 shrink-0" />
                  <span>
                    {isRtl
                      ? 'تم حفظ إجابتك في متصفحك وتسجيل النشاط كمكتمل. يمكنك إرسالها للمدرب عبر واتساب في أي وقت.'
                      : 'Your answer has been saved in your browser and marked completed. You can send it via WhatsApp anytime.'}
                  </span>
                </div>
              )}

              {/* Honest WhatsApp Post-Click Feedback Box */}
              {whatsAppFeedbackState && (
                <WhatsAppActionFeedback
                  message={whatsAppFeedbackState.message}
                  isRtl={isRtl}
                  isLongAnswer={whatsAppFeedbackState.isLong}
                  fullTextToDownload={whatsAppFeedbackState.fullAnswer}
                  downloadFileName={whatsAppFeedbackState.fileName}
                  savedLocallyNote={
                    isRtl
                      ? '✓ تم حفظ إجابتك في جهازك أيضًا ولن تضيع عند إغلاق الصفحة.'
                      : '✓ Your answer is also saved locally on your device.'
                  }
                  onClose={() => setWhatsAppFeedbackState(null)}
                />
              )}

              {/* Activity Prev / Next Navigation Footer */}
              <div className="pt-5 border-t border-[var(--color-border-subtle)] flex items-center justify-between gap-3">
                <Button
                  variant="ghost"
                  size="sm"
                  disabled={currentActivityIndex === 0}
                  onClick={() =>
                    setCurrentActivityIndex((prev) => Math.max(0, prev - 1))
                  }
                  leftIcon={
                    isRtl ? (
                      <ArrowRight className="w-4 h-4" />
                    ) : (
                      <ArrowLeft className="w-4 h-4" />
                    )
                  }
                >
                  {isRtl ? 'النشاط السابق' : 'Previous Activity'}
                </Button>

                {currentActivityIndex < totalActivities - 1 ? (
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() =>
                      setCurrentActivityIndex((prev) =>
                        Math.min(totalActivities - 1, prev + 1)
                      )
                    }
                    rightIcon={
                      isRtl ? (
                        <ArrowLeft className="w-4 h-4" />
                      ) : (
                        <ArrowRight className="w-4 h-4" />
                      )
                    }
                  >
                    {isRtl ? 'النشاط التالي' : 'Next Activity'}
                  </Button>
                ) : (
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setIsCompletedSessionView(true)}
                    rightIcon={<Trophy className="w-4 h-4 text-emerald-500" />}
                  >
                    {isRtl ? 'عرض ملخص الجلسة' : 'View Session Summary'}
                  </Button>
                )}
              </div>
            </Card>
          </div>
        ) : null}

        {/* Saved Submissions Log for This Session */}
        {savedSubmissions.length > 0 && (
          <Card className="p-6 space-y-4 border border-[var(--color-border)] bg-[var(--color-surface)]">
            <div className="flex items-center justify-between border-b border-[var(--color-border-subtle)] pb-3">
              <div className="flex items-center gap-2">
                <History className="w-5 h-5 text-emerald-500" />
                <h3 className="text-sm sm:text-base font-extrabold text-[var(--color-text)]">
                  {isRtl
                    ? 'سجل إجاباتي المحفوظة في هذه الجلسة'
                    : 'My Saved Answers in This Session'}
                </h3>
              </div>
              <Badge variant="success" size="sm">
                {savedSubmissions.length} / {totalActivities}
              </Badge>
            </div>

            <div className="space-y-3">
              {activities.map((act, idx) => {
                const sub = savedSubmissions.find(
                  (s) => s.activityId === act.id
                );
                if (!sub) return null;

                return (
                  <div
                    key={act.id}
                    className="p-4 rounded-xl bg-[var(--color-surface-sunken)] border border-[var(--color-border)] space-y-2.5"
                  >
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                        <span className="text-xs sm:text-sm font-bold text-[var(--color-text)]">
                          {getLocalizedText(act.title, language)}
                        </span>
                      </div>

                      <div className="flex flex-wrap items-center gap-2">
                        <button
                          type="button"
                          onClick={() => {
                            setIsCompletedSessionView(false);
                            setCurrentActivityIndex(idx);
                          }}
                          className="text-xs font-semibold px-2.5 py-1 rounded-lg bg-[var(--color-surface)] border border-[var(--color-border)] text-[var(--color-secondary)] hover:underline"
                        >
                          {isRtl ? 'فتح وتعديل' : 'Open & Edit'}
                        </button>

                        <button
                          type="button"
                          onClick={() => handleSendSavedSubmissionToWhatsApp(sub)}
                          className="inline-flex items-center gap-1 text-xs font-bold px-2.5 py-1 rounded-lg bg-emerald-600 text-white hover:bg-emerald-700 transition-colors"
                        >
                          <MessageCircle className="w-3 h-3" />
                          <span>
                            {isRtl ? 'إرسال عبر واتساب' : 'Send on WhatsApp'}
                          </span>
                        </button>
                      </div>
                    </div>

                    <pre className="p-3 rounded-lg bg-[var(--color-surface)] border border-[var(--color-border-subtle)] text-xs text-[var(--color-text)] font-mono whitespace-pre-wrap leading-relaxed max-h-40 overflow-y-auto">
                      {sub.studentAnswer}
                    </pre>
                  </div>
                );
              })}
            </div>
          </Card>
        )}
      </PageContainer>
    </LearningShell>
  );
}
