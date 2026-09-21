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
} from '@/components';
import { usePreferencesStore, useSessionStore, useProgressStore } from '@/store';
import { getLocalizedText } from '@/lib/utils';
import {
  saveStudentSubmission,
  getCompletedActivityIds,
  getStudentSubmissionForActivity,
  getSessionSubmissions,
  StudentSubmission,
} from '@/lib/student-storage';
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  Clock,
  Sparkles,
  Lightbulb,
  Copy,
  Check,
  Send,
  Trophy,
  RotateCcw,
  BookOpen,
  FileCheck2,
  History,
} from 'lucide-react';

export default function StudentSessionRunnerPage() {
  const params = useParams();
  const sessionId = (params?.sessionId as string) || 'session-01';

  const { language } = usePreferencesStore();
  const isRtl = language === 'ar';

  const {
    getSessionById,
    completeStudentActivity,
    initializeSessions,
  } = useSessionStore();

  const { completeLesson, completeChallenge } = useProgressStore();

  const [currentActivityIndex, setCurrentActivityIndex] = useState(0);
  const [studentInput, setStudentInput] = useState('');
  const [isCopiedSnippet, setIsCopiedSnippet] = useState(false);
  const [isCompletedSession, setIsCompletedSession] = useState(false);
  const [completedActivities, setCompletedActivities] = useState<string[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [revealedHints, setRevealedHints] = useState<number[]>([]);
  const [savedSubmissions, setSavedSubmissions] = useState<StudentSubmission[]>([]);

  useEffect(() => {
    initializeSessions();
  }, [initializeSessions]);

  const session = getSessionById(sessionId);
  const activities = session?.activities || [];
  const currentActivity = activities[currentActivityIndex] || activities[0];
  const totalActivities = activities.length;

  // 1. Load persistent completed activities and submissions on mount / session change
  useEffect(() => {
    const timer = setTimeout(() => {
      const savedIds = getCompletedActivityIds(sessionId);
      setCompletedActivities(savedIds);
      const subs = getSessionSubmissions(sessionId);
      setSavedSubmissions(subs);
    }, 0);
    return () => clearTimeout(timer);
  }, [sessionId]);

  // 2. Restore previously submitted answer whenever current activity changes
  useEffect(() => {
    if (!currentActivity) return;
    const timer = setTimeout(() => {
      const prev = getStudentSubmissionForActivity(currentActivity.id);
      setStudentInput(prev?.studentAnswer || '');
    }, 0);
    return () => clearTimeout(timer);
  }, [currentActivity]);

  if (!session) {
    return (
      <LearningShell headerTitle={isRtl ? 'الجلسة غير موجودة' : 'Session Not Found'}>
        <PageContainer>
          <div className="text-center py-20 space-y-4">
            <h2 className="text-2xl font-bold">{isRtl ? 'الجلسة المطلوبة غير متوفرة' : 'Session Not Found'}</h2>
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

  const handleCopySnippet = (text: string) => {
    navigator.clipboard.writeText(text);
    setIsCopiedSnippet(true);
    setTimeout(() => setIsCopiedSnippet(false), 2000);
  };

  const toggleHint = (idx: number) => {
    setRevealedHints((prev) =>
      prev.includes(idx) ? prev.filter((i) => i !== idx) : [...prev, idx]
    );
  };

  const handleCompleteActivity = () => {
    if (!currentActivity) return;

    setIsSubmitting(true);
    setTimeout(() => {
      // 1. Persist submission text to localStorage
      saveStudentSubmission(session.id, currentActivity.id, studentInput);

      // 2. Update session store for trainer cockpit
      completeStudentActivity(session.id, currentActivity.id, 'std-current');

      // 3. Update global progress store
      completeLesson(`session-${session.number}-act-${currentActivity.order}`);
      completeChallenge(`session-${session.number}-challenge`);

      // 4. Update local states
      setCompletedActivities((prev) =>
        prev.includes(currentActivity.id) ? prev : [...prev, currentActivity.id]
      );
      setSavedSubmissions(getSessionSubmissions(session.id));

      setIsSubmitting(false);
      setSubmitSuccess(true);

      setTimeout(() => {
        setSubmitSuccess(false);

        if (currentActivityIndex < totalActivities - 1) {
          setCurrentActivityIndex((prev) => prev + 1);
        } else {
          setIsCompletedSession(true);
        }
      }, 800);
    }, 300);
  };

  const nextSessionNumber = session.number + 1;
  const nextSessionSlug = `session-${String(nextSessionNumber).padStart(2, '0')}`;

  return (
    <LearningShell
      headerTitle={`Session ${String(session.number).padStart(2, '0')}: ${getLocalizedText(session.title, language)}`}
    >
      <PageContainer>
        <div className="max-w-4xl mx-auto space-y-8 text-start pb-20">
          {/* Back breadcrumb & session meta */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-[var(--color-border)]">
            <Link
              href="/web-creator-ai/sessions"
              className="text-xs font-semibold text-[var(--color-primary)] hover:underline inline-flex items-center gap-1.5"
            >
              {isRtl ? <ArrowRight className="w-4 h-4" /> : <ArrowLeft className="w-4 h-4" />}
              <span>{isRtl ? 'العودة لفهرس الجلسات' : 'Back to All Sessions'}</span>
            </Link>

            <div className="flex items-center gap-2 text-xs font-medium text-[var(--color-text-subtle)]">
              <span className="px-2 py-0.5 rounded bg-[var(--color-primary-subtle)] text-[var(--color-primary)] font-bold tracking-wide">
                SESSION {String(session.number).padStart(2, '0')}
              </span>
              <span>•</span>
              <span>{session.durationMinutes} دقيقة</span>
              <span>•</span>
              <span className="text-green-600 font-bold">
                {session.status === 'active' ? (isRtl ? 'نشطة الآن' : 'Active') : session.status}
              </span>
            </div>
          </div>

          {/* Session Overview Header */}
          <div className="space-y-2">
            <h1 className="text-2xl sm:text-3xl font-black text-[var(--color-text)]">
              {getLocalizedText(session.title, language)}
            </h1>
            <p className="text-body-sm text-[var(--color-text-muted)] leading-relaxed">
              {getLocalizedText(session.subtitle, language)}
            </p>
          </div>

          {/* Activity Stepper & Interactive Tabs */}
          {totalActivities > 0 && !isCompletedSession && (
            <div className="space-y-4 p-4 rounded-2xl bg-[var(--color-surface)] border border-[var(--color-border)] shadow-xs">
              <div className="flex items-center justify-between text-xs">
                <div className="flex items-center gap-2">
                  <span className="font-black text-sm text-[var(--color-text)]">
                    {isRtl ? 'أنشطة الجلسة' : 'Session Activities'}
                  </span>
                  <span className="px-2 py-0.5 rounded-full bg-[var(--color-primary-subtle)] text-[var(--color-primary)] font-bold text-xs">
                    {completedActivities.length} / {totalActivities} {isRtl ? 'مكتملة' : 'completed'}
                  </span>
                </div>
                <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-full">
                  {Math.round(((completedActivities.length) / totalActivities) * 100)}% {isRtl ? 'نسبة الإنجاز' : 'Done'}
                </span>
              </div>

              {/* Clickable Activity Tabs */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2.5">
                {activities.map((act, idx) => {
                  const isDone = completedActivities.includes(act.id);
                  const isCurrent = idx === currentActivityIndex;

                  return (
                    <button
                      key={act.id}
                      type="button"
                      onClick={() => setCurrentActivityIndex(idx)}
                      className={`group p-3 rounded-xl text-start transition-all cursor-pointer border flex items-center justify-between gap-2.5 ${
                        isCurrent
                          ? 'border-[var(--color-primary)] bg-[var(--color-primary-subtle)] shadow-xs ring-2 ring-[var(--color-primary)]/20'
                          : isDone
                          ? 'border-emerald-500/30 bg-emerald-500/5 hover:border-emerald-500/60'
                          : 'border-[var(--color-border)] bg-[var(--color-surface-sunken)] hover:border-[var(--color-primary)]/40'
                      }`}
                    >
                      <div className="flex items-center gap-2.5 min-w-0">
                        <div
                          className={`w-7 h-7 rounded-lg flex items-center justify-center text-xs font-black shrink-0 transition-colors ${
                            isDone
                              ? 'bg-emerald-500 text-white'
                              : isCurrent
                              ? 'bg-[var(--color-primary)] text-white'
                              : 'bg-[var(--color-surface)] text-[var(--color-text-subtle)] border border-[var(--color-border)]'
                          }`}
                        >
                          {isDone ? <Check className="w-4 h-4 stroke-[3]" /> : idx + 1}
                        </div>
                        <div className="min-w-0">
                          <p className={`text-xs font-bold truncate ${
                            isCurrent ? 'text-[var(--color-primary)]' : 'text-[var(--color-text)]'
                          }`}>
                            {getLocalizedText(act.title, language)}
                          </p>
                          <p className="text-[10px] text-[var(--color-text-muted)]">
                            {isDone ? (isRtl ? '✓ تم الإنجاز' : '✓ Completed') : `${act.durationMinutes} ${isRtl ? 'د' : 'min'}`}
                          </p>
                        </div>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {/* Main Activity Content Card */}
          {!isCompletedSession && currentActivity ? (
            <div className="space-y-6">
              <Card className="p-6 sm:p-8 space-y-6 shadow-sm border border-[var(--color-border)]">
                {/* Activity Header */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-[var(--color-border)]">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <Badge variant="primary" size="sm">
                        ACTIVITY {currentActivity.order}
                      </Badge>
                      <span className="text-xs font-semibold text-[var(--color-text-subtle)] uppercase">
                        {currentActivity.type}
                      </span>
                    </div>
                    <h2 className="text-xl sm:text-2xl font-black text-[var(--color-text)]">
                      {getLocalizedText(currentActivity.title, language)}
                    </h2>
                  </div>

                  <span className="inline-flex items-center gap-1.5 text-xs font-medium text-[var(--color-text-subtle)] bg-[var(--color-surface-sunken)] px-3 py-1 rounded-full w-fit">
                    <Clock className="w-3.5 h-3.5" />
                    <span>~{currentActivity.durationMinutes} دقيقة</span>
                  </span>
                </div>

                {/* Practical Pedagogical Blocks (What, Why, How, Result) */}
                <div className="space-y-6">
                  {/* Headline Callout */}
                  <div className="p-4 rounded-2xl bg-[var(--color-primary-subtle)] border border-[var(--color-primary)]/20 text-sm font-bold text-[var(--color-primary)] leading-relaxed">
                    🎯 {getLocalizedText(currentActivity.studentContent.headline, language)}
                  </div>

                  {/* 1. What am I doing? */}
                  <div className="space-y-1.5">
                    <h3 className="text-sm font-bold text-[var(--color-secondary)]">
                      {isRtl ? '1. ماذا أفعل في هذا النشاط؟' : '1. What am I doing?'}
                    </h3>
                    <p className="text-sm text-[var(--color-text)] leading-relaxed">
                      {getLocalizedText(currentActivity.studentContent.whatAmIDoing, language)}
                    </p>
                  </div>

                  {/* 2. Why am I doing it? */}
                  <div className="space-y-1.5">
                    <h3 className="text-sm font-bold text-[var(--color-accent-strong)]">
                      {isRtl ? '2. لماذا أفعل ذلك؟ (القيمة الهندسية)' : '2. Why am I doing it?'}
                    </h3>
                    <p className="text-sm text-[var(--color-text-muted)] leading-relaxed">
                      {getLocalizedText(currentActivity.studentContent.whyAmIDoingIt, language)}
                    </p>
                  </div>

                  {/* 3. How do I do it? */}
                  <div className="space-y-2.5">
                    <h3 className="text-sm font-bold text-[var(--color-primary)]">
                      {isRtl ? '3. كيف أنفذه خطوة بخطوة؟' : '3. How do I do it?'}
                    </h3>
                    <div className="space-y-2">
                      {currentActivity.studentContent.howDoIDoIt.map((step, idx) => (
                        <div
                          key={idx}
                          className="p-3.5 rounded-xl bg-[var(--color-surface-sunken)] border border-[var(--color-border-subtle)] text-sm text-[var(--color-text)] flex items-start gap-3"
                        >
                          <span className="w-6 h-6 rounded-full bg-[var(--color-primary)] text-white text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                            {idx + 1}
                          </span>
                          <span className="leading-relaxed font-normal">{getLocalizedText(step, language)}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* 4. Expected Result */}
                  <div className="p-4 rounded-2xl bg-green-500/10 border border-green-500/20 space-y-1.5">
                    <h3 className="text-sm font-bold text-green-700 dark:text-green-400">
                      {isRtl ? '4. ما شكل النتيجة المتوقعة؟' : '4. Expected Result'}
                    </h3>
                    <p className="text-sm text-[var(--color-text)] font-normal leading-relaxed">
                      {getLocalizedText(currentActivity.studentContent.expectedResult, language)}
                    </p>
                  </div>

                  {/* Progressive Hints */}
                  {currentActivity.studentContent.hints && currentActivity.studentContent.hints.length > 0 && (
                    <div className="space-y-2">
                      <span className="text-xs font-bold text-[var(--color-text)] flex items-center gap-1.5">
                        <Lightbulb className="w-4 h-4 text-amber-500" />
                        <span>{isRtl ? 'تلميحات مساعدة (انقر للكشف)' : 'Helpful Hints (Click to Reveal)'}</span>
                      </span>

                      <div className="space-y-2">
                        {currentActivity.studentContent.hints.map((hint, idx) => {
                          const isRevealed = revealedHints.includes(idx);
                          return (
                            <button
                              key={idx}
                              type="button"
                              onClick={() => toggleHint(idx)}
                              className="w-full p-3.5 rounded-xl bg-[var(--color-surface-sunken)] border border-[var(--color-border)] text-start text-xs text-[var(--color-text)] transition-colors hover:border-amber-500/40 cursor-pointer flex items-center justify-between gap-3"
                            >
                              <span>
                                {isRevealed
                                  ? getLocalizedText(hint, language)
                                  : isRtl
                                  ? `💡 تلميح رقم ${idx + 1} (انقر للكشف)`
                                  : `💡 Reveal Hint #${idx + 1}`}
                              </span>
                              <span className="text-xs font-medium text-[var(--color-text-subtle)]">
                                {isRevealed ? (isRtl ? 'إخفاء' : 'كشف') : (isRtl ? 'كشف' : 'Reveal')}
                              </span>
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  )}

                  {/* Starter / Example Snippet */}
                  {currentActivity.studentContent.starterSnippet && (
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-bold text-[var(--color-text-subtle)]">
                          {isRtl ? 'قالب البداية المقترح' : 'Starter Template'}
                        </span>
                        <button
                          type="button"
                          onClick={() => handleCopySnippet(currentActivity.studentContent.starterSnippet || '')}
                          className="inline-flex items-center gap-1.5 text-xs font-bold text-[var(--color-primary)] hover:underline cursor-pointer"
                        >
                          {isCopiedSnippet ? <Check className="w-3.5 h-3.5 text-green-500" /> : <Copy className="w-3.5 h-3.5" />}
                          <span>{isCopiedSnippet ? (isRtl ? 'تم النسخ!' : 'Copied!') : (isRtl ? 'نسخ القالب' : 'Copy')}</span>
                        </button>
                      </div>

                      <pre className="p-4 rounded-xl bg-slate-950 text-slate-100 font-mono text-xs sm:text-sm overflow-x-auto border border-slate-800 leading-relaxed whitespace-pre-wrap">
                        {currentActivity.studentContent.starterSnippet}
                      </pre>
                    </div>
                  )}

                  {currentActivity.studentContent.exampleSnippet && (
                    <div className="space-y-2">
                      <span className="text-xs font-bold text-[var(--color-text-subtle)]">
                        {isRtl ? 'مثال عملي محلول للاسترشاد' : 'Reference Solution Example'}
                      </span>
                      <pre className="p-4 rounded-xl bg-[var(--color-surface-sunken)] text-[var(--color-text)] font-mono text-xs sm:text-sm overflow-x-auto border border-[var(--color-border)] leading-relaxed whitespace-pre-wrap">
                        {currentActivity.studentContent.exampleSnippet}
                      </pre>
                    </div>
                  )}
                </div>
              </Card>

              {/* Student Task Workspace & Submit Box */}
              {(() => {
                const isCurrentDone = currentActivity ? completedActivities.includes(currentActivity.id) : false;
                return (
                  <Card className="p-6 sm:p-8 space-y-4 border-2 border-[var(--color-primary)]/30 bg-[var(--color-surface)]">
                    <div className="space-y-1">
                      <div className="flex items-center justify-between gap-2">
                        <h3 className="text-sm font-bold text-[var(--color-text)] flex items-center gap-2">
                          <Sparkles className="w-4 h-4 text-[var(--color-primary)]" />
                          <span>{isRtl ? 'مساحة إنجاز النشاط وتسليم العمل' : 'Task Workspace & Submission'}</span>
                        </h3>
                        {isCurrentDone && (
                          <Badge variant="success" size="sm">
                            {isRtl ? '✓ منجز ومحفوظ' : '✓ Completed'}
                          </Badge>
                        )}
                      </div>
                      <p className="text-xs text-[var(--color-text-muted)]">
                        {isRtl
                          ? 'اكتب أو الصق إجابتك، ملخصك، أو البرومبت الذي صغته هنا لتسجيل إنجاز النشاط.'
                          : 'Draft or paste your prompt/code solution here to submit your progress.'}
                      </p>
                    </div>

                    {isCurrentDone && (
                      <div className="flex items-center gap-2 p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-xs text-emerald-700 dark:text-emerald-400 font-semibold">
                        <CheckCircle2 className="w-4 h-4 shrink-0" />
                        <span>
                          {isRtl
                            ? 'تم إنجاز هذا النشاط وتوثيقه مسبقاً في متصفحك. يمكنك تعديل النص والضغط على زر التحديث في أي وقت.'
                            : 'This activity was previously completed. You can edit and update your submission anytime.'}
                        </span>
                      </div>
                    )}

                    <textarea
                      rows={5}
                      value={studentInput}
                      onChange={(e) => setStudentInput(e.target.value)}
                      placeholder={
                        isRtl
                          ? 'اكتب مخرجات النشاط هنا (مثل: اسم المشروع، الأقسام، أو صيغة البرومبت)...'
                          : 'Write your response or paste your prompt code here...'
                      }
                      className="w-full p-4 rounded-xl border border-[var(--color-border)] bg-[var(--color-surface-sunken)] text-[var(--color-text)] text-sm font-sans leading-relaxed focus:outline-none focus:border-[var(--color-primary)] focus:ring-1 focus:ring-[var(--color-primary)] transition-all resize-y"
                    />

                    <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-2">
                      <span className="text-xs text-[var(--color-text-subtle)]">
                        {submitSuccess ? (
                          <span className="text-green-600 font-bold flex items-center gap-1">
                            <CheckCircle2 className="w-4 h-4" />
                            <span>{isRtl ? 'تم حفظ وتحديث إنجازك بنجاح ✓' : 'Progress saved successfully! ✓'}</span>
                          </span>
                        ) : (
                          <span>{isRtl ? '💾 يتم حفظ تقدمك تلقائياً في متصفحك ولا يضيع عند التحديث' : '💾 Progress saved locally in browser'}</span>
                        )}
                      </span>

                      <Button
                        size="md"
                        variant="primary"
                        onClick={handleCompleteActivity}
                        isLoading={isSubmitting}
                        leftIcon={<Send className="w-4 h-4" />}
                        className="w-full sm:w-auto font-bold"
                      >
                        {isRtl
                          ? isCurrentDone
                            ? 'تحديث وحفظ الإجابة'
                            : 'تسليم وإكمال النشاط'
                          : isCurrentDone
                          ? 'Update & Save'
                          : 'Submit & Complete'}
                      </Button>
                    </div>
                  </Card>
                );
              })()}

              {/* Saved Submissions Review Panel */}
              {savedSubmissions.length > 0 && (
                <Card className="p-6 sm:p-7 space-y-4 border border-[var(--color-border)] bg-[var(--color-surface)]">
                  <div className="flex items-center justify-between pb-3 border-b border-[var(--color-border)]">
                    <div className="flex items-center gap-2">
                      <History className="w-5 h-5 text-[var(--color-primary)]" />
                      <h3 className="text-sm font-bold text-[var(--color-text)]">
                        {isRtl ? 'سجل إنجازاتي في هذه الجلسة (محفوظ في جهازك)' : 'My Session Submissions (Saved in Browser)'}
                      </h3>
                    </div>
                    <Badge variant="success" size="sm">
                      {savedSubmissions.length} {isRtl ? 'إنجازات محفوظة' : 'Saved'}
                    </Badge>
                  </div>

                  <div className="space-y-3">
                    {savedSubmissions.map((sub) => {
                      const act = activities.find((a) => a.id === sub.activityId);
                      const actTitle = act ? getLocalizedText(act.title, language) : sub.activityId;
                      const formattedDate = new Date(sub.completedAt).toLocaleString(isRtl ? 'ar-SA' : 'en-US', {
                        month: 'short',
                        day: 'numeric',
                        hour: '2-digit',
                        minute: '2-digit',
                      });

                      return (
                        <div
                          key={sub.activityId}
                          className="p-4 rounded-xl border border-[var(--color-border)] bg-[var(--color-surface-sunken)] space-y-2.5"
                        >
                          <div className="flex items-center justify-between gap-2">
                            <div className="flex items-center gap-2">
                              <FileCheck2 className="w-4 h-4 text-emerald-500 shrink-0" />
                              <span className="text-xs font-bold text-[var(--color-text)]">
                                {actTitle}
                              </span>
                            </div>
                            <span className="text-[10px] text-[var(--color-text-subtle)] font-mono">
                              {formattedDate}
                            </span>
                          </div>

                          <div className="p-3 rounded-lg bg-[var(--color-surface)] border border-[var(--color-border)] text-xs text-[var(--color-text)] leading-relaxed whitespace-pre-wrap font-sans">
                            {sub.studentAnswer || (
                              <span className="text-[var(--color-text-subtle)] italic">
                                {isRtl ? '(تم إكمال النشاط بدون إدخال نصي)' : '(Completed without text)'}
                              </span>
                            )}
                          </div>

                          <div className="flex items-center justify-end gap-2 pt-1">
                            <button
                              type="button"
                              onClick={() => {
                                const targetIdx = activities.findIndex((a) => a.id === sub.activityId);
                                if (targetIdx !== -1) {
                                  setCurrentActivityIndex(targetIdx);
                                  setStudentInput(sub.studentAnswer || '');
                                  window.scrollTo({ top: 400, behavior: 'smooth' });
                                }
                              }}
                              className="text-[11px] font-bold text-[var(--color-primary)] hover:underline cursor-pointer"
                            >
                              {isRtl ? 'عرض وتعديل في مساحة العمل ↗' : 'Load into Workspace ↗'}
                            </button>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </Card>
              )}
            </div>
          ) : isCompletedSession ? (
            /* Session Completed Screen */
            <Card className="p-10 sm:p-14 text-center space-y-6 border-2 border-green-500 bg-gradient-to-br from-[var(--color-surface)] to-green-500/5 shadow-xl">
              <div className="w-16 h-16 rounded-3xl bg-green-500 text-white flex items-center justify-center mx-auto shadow-lg shadow-green-500/30">
                <Trophy className="w-8 h-8" />
              </div>

              <div className="space-y-2 max-w-lg mx-auto">
                <Badge variant="primary" size="md">
                  SESSION COMPLETED
                </Badge>
                <h2 className="text-2xl sm:text-3xl font-black text-[var(--color-text)]">
                  {isRtl ? 'أحسنت! أكملت أنشطة هذه الجلسة بنجاح' : 'Session Completed! Outstanding Work'}
                </h2>
                <p className="text-xs sm:text-sm text-[var(--color-text-muted)] leading-relaxed">
                  {isRtl
                    ? `لقد أنجزت جميع الأنشطة العملية المقررة في الجلسة ${session.number}. خطوتك التالية هي تطبيق هذه المهارات في مشروعك المستمر.`
                    : `You have successfully completed all activities in Session ${session.number}.`}
                </p>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-4">
                <Button
                  variant="outline"
                  size="md"
                  onClick={() => {
                    setIsCompletedSession(false);
                    setCurrentActivityIndex(0);
                  }}
                  leftIcon={<RotateCcw className="w-4 h-4" />}
                >
                  {isRtl ? 'مراجعة الأنشطة مجدداً' : 'Review Activities'}
                </Button>

                {nextSessionNumber <= 12 ? (
                  <Link href={`/web-creator-ai/session/${nextSessionSlug}`}>
                    <Button
                      variant="primary"
                      size="md"
                      rightIcon={isRtl ? <ArrowLeft className="w-4 h-4" /> : <ArrowRight className="w-4 h-4" />}
                    >
                      {isRtl ? `الانتقال للجلسة القادمة (${nextSessionNumber})` : `Next Session (${nextSessionNumber})`}
                    </Button>
                  </Link>
                ) : (
                  <Link href="/web-creator-ai/progress">
                    <Button variant="primary" size="md">
                      {isRtl ? 'عرض سجل إنجازاتي' : 'View My Progress'}
                    </Button>
                  </Link>
                )}
              </div>
            </Card>
          ) : (
            <Card className="p-12 text-center space-y-3">
              <BookOpen className="w-8 h-8 text-[var(--color-text-subtle)] mx-auto" />
              <h3 className="text-lg font-bold">{isRtl ? 'لا توجد أنشطة مجهزة لهذه الجلسة بعد' : 'No Activities Found'}</h3>
              <p className="text-xs text-[var(--color-text-muted)]">
                {isRtl ? 'يرجى مراجعة فهرس الجلسات أو التواصل مع المدرب.' : 'Check other sessions.'}
              </p>
            </Card>
          )}
        </div>
      </PageContainer>
    </LearningShell>
  );
}
