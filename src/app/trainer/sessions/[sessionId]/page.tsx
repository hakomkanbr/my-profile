'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import {
  TrainerShell,
  Card,
  Badge,
  Button,
} from '@/components';
import { usePreferencesStore, useTrainerAuthStore, useSessionStore } from '@/store';
import { getLocalizedText } from '@/lib/utils';
import { SessionStatus } from '@/types';
import {
  MonitorPlay,
  ArrowLeft,
  ArrowRight,
  Clock,
  CheckCircle2,
  AlertTriangle,
  HelpCircle,
  Lightbulb,
  Target,
  Sparkles,
  MessageSquare,
  FileCode,
  Lock,
  Users,
} from 'lucide-react';

export default function TrainerSessionDetailPage() {
  const params = useParams();
  const sessionId = (params?.sessionId as string) || 'session-01';

  const { language } = usePreferencesStore();
  const isRtl = language === 'ar';

  const { isAuthenticated, isLoading: isAuthLoading } = useTrainerAuthStore();
  const {
    getSessionById,
    updateSessionStatus,
    initializeSessions,
  } = useSessionStore();

  const [activeActivityIndex, setActiveActivityIndex] = useState(0);

  useEffect(() => {
    initializeSessions();
  }, [initializeSessions]);

  // Auth gate
  if (!isAuthLoading && !isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center p-4 bg-[var(--color-background)]">
        <Card className="p-8 text-center space-y-4 max-w-md">
          <Lock className="w-10 h-10 text-[var(--color-primary)] mx-auto" />
          <h2 className="text-xl font-bold text-[var(--color-text)]">
            {isRtl ? 'تسجيل دخول المدرب مطلوب' : 'Trainer Authentication Required'}
          </h2>
          <p className="text-xs text-[var(--color-text-muted)]">
            {isRtl
              ? 'يرجى تسجيل الدخول أولاً من لوحة تحكم المدرب.'
              : 'Please authenticate from the trainer cockpit.'}
          </p>
          <Link href="/trainer">
            <Button variant="primary" size="md">
              {isRtl ? 'الذهاب لتسجيل الدخول' : 'Go to Trainer Login'}
            </Button>
          </Link>
        </Card>
      </div>
    );
  }

  const session = getSessionById(sessionId);

  if (!session) {
    return (
      <TrainerShell headerTitle={isRtl ? 'الجلسة غير موجودة' : 'Session Not Found'}>
        <div className="text-center py-16 space-y-4">
          <h2 className="text-2xl font-bold">{isRtl ? 'الجلسة المطلوبة غير موجودة' : 'Session Not Found'}</h2>
          <Link href="/trainer">
            <Button variant="primary" size="sm">
              {isRtl ? 'العودة للوحة التحكم' : 'Back to Dashboard'}
            </Button>
          </Link>
        </div>
      </TrainerShell>
    );
  }

  const activities = session.activities || [];
  const currentActivity = activities[activeActivityIndex] || activities[0];
  const trainerGuide = currentActivity?.trainerGuide;

  return (
    <TrainerShell
      headerTitle={`Session ${String(session.number).padStart(2, '0')}: ${getLocalizedText(session.title, language)}`}
    >
      <div className="space-y-8 text-start pb-16">
        {/* Top Header Card */}
        <div className="p-6 sm:p-8 rounded-3xl bg-[var(--color-surface)] border-2 border-[var(--color-primary)]/20 shadow-sm space-y-4">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <Link
                  href="/trainer"
                  className="text-xs font-semibold text-[var(--color-primary)] hover:underline flex items-center gap-1"
                >
                  {isRtl ? <ArrowRight className="w-3.5 h-3.5" /> : <ArrowLeft className="w-3.5 h-3.5" />}
                  <span>{isRtl ? 'لوحة المدرب' : 'Trainer Cockpit'}</span>
                </Link>
                <span className="text-xs text-[var(--color-text-subtle)]">•</span>
                <span className="text-xs font-mono font-bold text-[var(--color-secondary)]">
                  STAGE {session.targetStageNumber}
                </span>
              </div>

              <h1 className="text-xl sm:text-3xl font-black text-[var(--color-text)]">
                Session {String(session.number).padStart(2, '0')}: {getLocalizedText(session.title, language)}
              </h1>
              <p className="text-xs sm:text-sm text-[var(--color-text-muted)] max-w-3xl">
                {getLocalizedText(session.subtitle, language)}
              </p>
            </div>

            {/* Status Selector & Live Presentation launch */}
            <div className="flex flex-wrap items-center gap-3 shrink-0">
              <div className="flex items-center gap-1.5">
                <span className="text-xs font-bold text-[var(--color-text-subtle)]">
                  {isRtl ? 'الحالة:' : 'Status:'}
                </span>
                <select
                  value={session.status}
                  onChange={(e) => updateSessionStatus(session.id, e.target.value as SessionStatus)}
                  aria-label={isRtl ? 'حالة الجلسة' : 'Session Status'}
                  className="px-3 py-1.5 rounded-lg text-xs font-bold bg-[var(--color-surface-sunken)] border border-[var(--color-border)] text-[var(--color-text)] cursor-pointer focus:outline-none focus:border-[var(--color-primary)]"
                >
                  <option value="active">🟢 Active (نشطة)</option>
                  <option value="scheduled">🟡 Scheduled (مجدولة)</option>
                  <option value="completed">🔵 Completed (مكتملة)</option>
                  <option value="draft">⚪ Draft (مسودة)</option>
                </select>
              </div>

              <Link href={`/trainer/presentation/${session.id}`}>
                <Button
                  size="md"
                  variant="primary"
                  leftIcon={<MonitorPlay className="w-4 h-4" />}
                >
                  {isRtl ? 'إطلاق العرض التقديمي (Zoom)' : 'Launch Deck'}
                </Button>
              </Link>
            </div>
          </div>

          {/* Key Objectives */}
          <div className="pt-3 border-t border-[var(--color-border-subtle)] grid grid-cols-1 md:grid-cols-3 gap-3">
            {session.objectives.map((obj, idx) => (
              <div key={idx} className="p-3 rounded-xl bg-[var(--color-surface-sunken)] border border-[var(--color-border-subtle)] text-xs text-[var(--color-text)] flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-[var(--color-primary)] shrink-0 mt-0.5" />
                <span>{getLocalizedText(obj, language)}</span>
              </div>
            ))}
          </div>
        </div>

        {/* 2. ACTIVITY TABS & DEEP PEDAGOGY GUIDE */}
        {activities.length > 0 ? (
          <div className="space-y-6">
            {/* Activity Step Selector */}
            <div className="flex items-center gap-2 overflow-x-auto pb-2 no-scrollbar">
              {activities.map((act, index) => {
                const isCurrent = index === activeActivityIndex;
                return (
                  <button
                    key={act.id}
                    type="button"
                    onClick={() => setActiveActivityIndex(index)}
                    className={`px-4 py-2.5 rounded-2xl text-xs font-bold transition-all shrink-0 cursor-pointer flex items-center gap-2 border ${
                      isCurrent
                        ? 'bg-[var(--color-primary)] text-white border-[var(--color-primary)] shadow-sm'
                        : 'bg-[var(--color-surface)] border-[var(--color-border)] text-[var(--color-text-muted)] hover:text-[var(--color-text)]'
                    }`}
                  >
                    <span className="w-5 h-5 rounded-full bg-black/10 flex items-center justify-center text-[10px] font-bold">
                      {act.order}
                    </span>
                    <span>{getLocalizedText(act.title, language)}</span>
                    <span className="text-[10px] opacity-75 font-medium">({act.durationMinutes}m)</span>
                  </button>
                );
              })}
            </div>

            {/* Current Activity Content & Trainer Guide Grid */}
            {currentActivity && (
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                {/* Left (8 cols): The Rich Pedagogical Toolkit for Trainer */}
                <div className="lg:col-span-8 space-y-6">
                  {/* Teaching Goal Box */}
                  {trainerGuide?.teachingGoal && (
                    <Card className="p-6 border-s-4 border-s-[var(--color-primary)] space-y-2">
                      <div className="flex items-center gap-2 text-xs font-bold uppercase text-[var(--color-primary)]">
                        <Target className="w-4 h-4" />
                        <span>{isRtl ? 'الهدف التعليمي من النشاط (Teaching Goal)' : 'Teaching Goal'}</span>
                      </div>
                      <p className="text-body-sm font-medium text-[var(--color-text)] leading-relaxed">
                        {getLocalizedText(trainerGuide.teachingGoal, language)}
                      </p>
                    </Card>
                  )}

                  {/* What to Explain */}
                  {trainerGuide?.whatToExplain && trainerGuide.whatToExplain.length > 0 && (
                    <Card className="p-6 space-y-3">
                      <div className="flex items-center gap-2 text-xs font-bold uppercase text-[var(--color-secondary)]">
                        <Sparkles className="w-4 h-4" />
                        <span>{isRtl ? 'ما ينبغي على المدرب شرحه (What to Explain)' : 'What to Explain'}</span>
                      </div>
                      <ul className="space-y-2 text-xs text-[var(--color-text)]">
                        {trainerGuide.whatToExplain.map((item, idx) => (
                          <li key={idx} className="flex items-start gap-2.5">
                            <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-secondary)] shrink-0 mt-1.5" />
                            <span className="leading-relaxed">{getLocalizedText(item, language)}</span>
                          </li>
                        ))}
                      </ul>
                    </Card>
                  )}

                  {/* Suggested Questions & Discussion */}
                  {trainerGuide?.suggestedQuestions && trainerGuide.suggestedQuestions.length > 0 && (
                    <Card className="p-6 space-y-3 bg-blue-500/5 border-blue-500/20">
                      <div className="flex items-center gap-2 text-xs font-bold uppercase text-blue-600">
                        <MessageSquare className="w-4 h-4" />
                        <span>{isRtl ? 'أسئلة مقترحة لطرحها على الطلاب في Zoom (Suggested Questions)' : 'Suggested Questions'}</span>
                      </div>
                      <div className="space-y-2">
                        {trainerGuide.suggestedQuestions.map((q, idx) => (
                          <div key={idx} className="p-3 rounded-xl bg-[var(--color-surface)] border border-[var(--color-border)] text-xs font-medium text-[var(--color-text)]">
                            💬 &quot;{getLocalizedText(q, language)}&quot;
                          </div>
                        ))}
                      </div>
                    </Card>
                  )}

                  {/* Live Example */}
                  {trainerGuide?.example && (
                    <Card className="p-6 space-y-2">
                      <div className="flex items-center gap-2 text-xs font-bold uppercase text-[var(--color-accent-strong)]">
                        <FileCode className="w-4 h-4" />
                        <span>{isRtl ? 'مثال جاهز يمكن عرضه للطالب (Example to Show)' : 'Example'}</span>
                      </div>
                      <p className="text-body-sm text-[var(--color-text-muted)] leading-relaxed">
                        {getLocalizedText(trainerGuide.example, language)}
                      </p>
                    </Card>
                  )}

                  {/* Common Mistakes & Hints Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {trainerGuide?.commonMistakes && trainerGuide.commonMistakes.length > 0 && (
                      <Card className="p-5 space-y-2 bg-red-500/5 border-red-500/20">
                        <div className="flex items-center gap-1.5 text-xs font-bold uppercase text-red-600">
                          <AlertTriangle className="w-4 h-4" />
                          <span>{isRtl ? 'الأخطاء الشائعة المتوقعة' : 'Common Mistakes'}</span>
                        </div>
                        <ul className="space-y-1.5 text-xs text-[var(--color-text)]">
                          {trainerGuide.commonMistakes.map((err, idx) => (
                            <li key={idx} className="flex items-start gap-2">
                              <span className="text-red-500">•</span>
                              <span>{getLocalizedText(err, language)}</span>
                            </li>
                          ))}
                        </ul>
                      </Card>
                    )}

                    {trainerGuide?.hints && trainerGuide.hints.length > 0 && (
                      <Card className="p-5 space-y-2 bg-amber-500/5 border-amber-500/20">
                        <div className="flex items-center gap-1.5 text-xs font-bold uppercase text-amber-600">
                          <Lightbulb className="w-4 h-4" />
                          <span>{isRtl ? 'تلميحات تقدم تدريجياً' : 'Progressive Hints'}</span>
                        </div>
                        <ul className="space-y-1.5 text-xs text-[var(--color-text)]">
                          {trainerGuide.hints.map((hint, idx) => (
                            <li key={idx} className="flex items-start gap-2">
                              <span className="text-amber-500">•</span>
                              <span>{getLocalizedText(hint, language)}</span>
                            </li>
                          ))}
                        </ul>
                      </Card>
                    )}
                  </div>

                  {/* If Student is Stuck & Challenge for Advanced */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {trainerGuide?.ifStudentIsStuck && (
                      <Card className="p-5 space-y-2">
                        <div className="flex items-center gap-1.5 text-xs font-bold uppercase text-[var(--color-secondary)]">
                          <HelpCircle className="w-4 h-4" />
                          <span>{isRtl ? 'ماذا تفعل إذا توقف الطالب؟' : 'If Student is Stuck'}</span>
                        </div>
                        <p className="text-xs text-[var(--color-text-muted)] leading-relaxed">
                          {getLocalizedText(trainerGuide.ifStudentIsStuck, language)}
                        </p>
                      </Card>
                    )}

                    {trainerGuide?.challenge && (
                      <Card className="p-5 space-y-2">
                        <div className="flex items-center gap-1.5 text-xs font-bold uppercase text-[var(--color-primary)]">
                          <Sparkles className="w-4 h-4" />
                          <span>{isRtl ? 'تحدي الطالب المتقدم' : 'Advanced Challenge'}</span>
                        </div>
                        <p className="text-xs text-[var(--color-text-muted)] leading-relaxed">
                          {getLocalizedText(trainerGuide.challenge, language)}
                        </p>
                      </Card>
                    )}
                  </div>

                  {/* Secret Teaching Notes (NEVER shown to student) */}
                  {trainerGuide?.teachingNotes && (
                    <Card className="p-6 bg-purple-500/5 border-purple-500/20 space-y-2">
                      <div className="flex items-center gap-2 text-xs font-bold uppercase text-purple-600">
                        <Lock className="w-4 h-4" />
                        <span>{isRtl ? 'ملاحظات سرية للمدرب (Trainer Notes — Never Visible to Student)' : 'Secret Teaching Notes'}</span>
                      </div>
                      <p className="text-xs text-[var(--color-text)] leading-relaxed">
                        {getLocalizedText(trainerGuide.teachingNotes, language)}
                      </p>
                    </Card>
                  )}
                </div>

                {/* Right (4 cols): What the Student Sees + Student Progress Roster */}
                <div className="lg:col-span-4 space-y-6">
                  {/* Student View Mirror (Read-only preview) */}
                  <Card className="p-5 space-y-3 bg-[var(--color-surface-sunken)] border border-[var(--color-border)]">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-bold uppercase text-[var(--color-text-subtle)]">
                        {isRtl ? 'ما يراه الطالب في شاشته' : 'Student Screen Preview'}
                      </span>
                      <Badge variant="outline" size="sm">
                        {currentActivity.type.toUpperCase()}
                      </Badge>
                    </div>

                    <h3 className="text-xs font-bold text-[var(--color-text)]">
                      {getLocalizedText(currentActivity.studentContent.headline, language)}
                    </h3>

                    <div className="space-y-2 text-[11px] text-[var(--color-text-muted)]">
                      <div>
                        <strong className="text-[var(--color-text)] block mb-0.5">
                          {isRtl ? 'ماذا يفعل؟' : 'What am I doing?'}
                        </strong>
                        <p>{getLocalizedText(currentActivity.studentContent.whatAmIDoing, language)}</p>
                      </div>

                      <div>
                        <strong className="text-[var(--color-text)] block mb-0.5">
                          {isRtl ? 'النتيجة المتوقعة:' : 'Expected Result:'}
                        </strong>
                        <p>{getLocalizedText(currentActivity.studentContent.expectedResult, language)}</p>
                      </div>
                    </div>
                  </Card>

                  {/* Student Attendees in this session */}
                  <Card className="p-5 space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-[var(--color-text)] flex items-center gap-1.5">
                        <Users className="w-4 h-4 text-[var(--color-primary)]" />
                        <span>{isRtl ? 'متدربو هذه الجلسة' : 'Session Trainees'}</span>
                      </span>
                      <span className="text-xs font-mono font-bold text-[var(--color-primary)]">
                        {session.students.length}
                      </span>
                    </div>

                    <div className="space-y-2">
                      {session.students.map((std) => (
                        <div
                          key={std.id}
                          className="p-2.5 rounded-xl bg-[var(--color-surface-sunken)] border border-[var(--color-border-subtle)] space-y-1.5 text-xs"
                        >
                          <div className="flex items-center justify-between">
                            <span className="font-bold text-[var(--color-text)]">{std.name}</span>
                            <span className="font-mono text-[10px] font-bold text-[var(--color-primary)]">
                              {std.progressPercent}%
                            </span>
                          </div>

                          <div className="w-full bg-[var(--color-border)] h-1.5 rounded-full overflow-hidden">
                            <div
                              className="bg-[var(--color-primary)] h-full transition-all"
                              style={{ width: `${std.progressPercent}%` }}
                            />
                          </div>

                          <div className="flex items-center justify-between text-[10px] text-[var(--color-text-subtle)]">
                            <span>{std.lastActiveAt || 'الآن'}</span>
                            <span className="font-bold text-green-600">
                              {std.completedActivities.length}/{activities.length} {isRtl ? 'منجز' : 'Done'}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </Card>
                </div>
              </div>
            )}
          </div>
        ) : (
          <Card className="p-12 text-center space-y-3">
            <Clock className="w-8 h-8 text-[var(--color-text-subtle)] mx-auto" />
            <h3 className="text-lg font-bold">{isRtl ? 'الأنشطة قيد التحضير' : 'Activities In Preparation'}</h3>
            <p className="text-xs text-[var(--color-text-muted)] max-w-md mx-auto">
              {isRtl
                ? 'يتم تحضير المحتوى التفاعلي لهذه الجلسة. يمكنك إطلاق العرض التقديمي المباشر مباشرة.'
                : 'Session activities are being finalized. You can launch the presentation deck directly.'}
            </p>
            <Link href={`/trainer/presentation/${session.id}`}>
              <Button size="sm" variant="primary">
                {isRtl ? 'عرض الشرائح التقديمية' : 'Open Slide Deck'}
              </Button>
            </Link>
          </Card>
        )}
      </div>
    </TrainerShell>
  );
}
