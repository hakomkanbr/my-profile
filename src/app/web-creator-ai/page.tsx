'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { LearningShell, PageContainer, Card, Button } from '@/components';
import { usePreferencesStore, useSessionStore } from '@/store';
import { getLocalizedText } from '@/lib/utils';
import { getSessionCompletionStats } from '@/lib/student-storage';
import { ArrowLeft, ArrowRight, BookOpen, Bookmark, Briefcase, CheckCircle2, ChevronDown, ChevronUp, Sparkles } from 'lucide-react';

const phases = [
  { key: 'plan', from: 1, to: 2, ar: 'الفكرة والتخطيط', en: 'Idea & Planning' },
  { key: 'build', from: 3, to: 8, ar: 'التصميم والبناء', en: 'Design & Build' },
  { key: 'launch', from: 9, to: 12, ar: 'الإطلاق والعمل', en: 'Launch & Work' },
] as const;

export default function WebCreatorAIHomePage() {
  const { language } = usePreferencesStore();
  const isRtl = language === 'ar';
  const { sessions, getActiveSession, initializeSessions } = useSessionStore();
  const [expandedPhase, setExpandedPhase] = useState<string | null>(null);
  const stats = Object.fromEntries(sessions.map((s) => [s.id, getSessionCompletionStats(s.id, s.activities.length)]));
  useEffect(() => { initializeSessions(); }, [initializeSessions]);

  const current = getActiveSession() || sessions[0];
  const total = sessions.reduce((sum, s) => sum + s.activities.length, 0);
  const done = Object.values(stats).reduce((sum, s) => sum + s.completedCount, 0);
  const percent = total ? Math.round(done / total * 100) : 0;
  const currentStats = current ? stats[current.id] : undefined;

  return <LearningShell headerTitle={isRtl ? 'مساري التدريبي' : 'My learning path'}><PageContainer>
    <div className="mx-auto max-w-5xl space-y-8 pb-16 text-start">
      <header className="space-y-2">
        <p className="text-xs font-bold uppercase tracking-[0.16em] text-[var(--color-primary)]">WEB CREATOR AI</p>
        <h1 className="text-2xl font-black tracking-tight text-[var(--color-text)] sm:text-3xl">{isRtl ? 'من الفكرة إلى موقع جاهز للإطلاق' : 'From idea to a launch-ready website'}</h1>
        <p className="max-w-2xl text-sm leading-relaxed text-[var(--color-text-muted)]">{isRtl ? 'مسار عملي لبناء مواقع الويب خطوة بخطوة باستخدام أدوات الذكاء الاصطناعي بعقلية هندسية.' : 'A practical path to build websites step by step with AI tools and an engineering mindset.'}</p>
      </header>

      {current && <Card className="border-[var(--color-primary)]/30 p-5 sm:p-7"><div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-center">
        <div className="space-y-2"><p className="text-xs font-bold text-[var(--color-primary)]">{isRtl ? `الجلسة ${String(current.number).padStart(2, '0')} · ${current.status === 'active' ? 'نشطة الآن' : current.status === 'completed' ? 'مكتملة' : 'قادمة'}` : `SESSION ${String(current.number).padStart(2, '0')} · ${current.status}`}</p>
          <h2 className="text-lg font-bold text-[var(--color-text)] sm:text-xl">{getLocalizedText(current.title, language)}</h2><p className="max-w-2xl text-sm text-[var(--color-text-muted)]">{getLocalizedText(current.description, language)}</p>
          {currentStats && <p className="text-xs text-[var(--color-text-subtle)]">{isRtl ? `أنجزت ${currentStats.completedCount} من ${currentStats.totalCount} أنشطة` : `${currentStats.completedCount} of ${currentStats.totalCount} activities complete`}</p>}
        </div><Link href={`/web-creator-ai/session/${current.id}`} className="shrink-0"><Button variant="primary" rightIcon={isRtl ? <ArrowLeft className="h-4 w-4" /> : <ArrowRight className="h-4 w-4" />}>{isRtl ? (currentStats?.completedCount ? 'متابعة التعلّم' : 'ابدأ الجلسة') : (currentStats?.completedCount ? 'Continue learning' : 'Start session')}</Button></Link>
      </div></Card>}

      <section aria-labelledby="progress-heading" className="space-y-3"><div className="flex items-end justify-between gap-4"><div><h2 id="progress-heading" className="text-base font-bold">{isRtl ? 'تقدمك في الأنشطة' : 'Your activity progress'}</h2><p className="text-xs text-[var(--color-text-muted)]">{isRtl ? `${done} من ${total} نشاطًا` : `${done} of ${total} activities`}</p></div><span className="font-mono text-sm font-bold text-[var(--color-primary)]">{percent}%</span></div>
        <div className="h-2 overflow-hidden rounded-full bg-[var(--color-surface-sunken)]" role="progressbar" aria-label={isRtl ? 'التقدم في أنشطة المسار' : 'Curriculum activity progress'} aria-valuenow={percent} aria-valuemin={0} aria-valuemax={100}><div className="h-full rounded-full bg-[var(--color-primary)] transition-[width]" style={{ width: `${percent}%` }} /></div>
        <p className="text-xs text-[var(--color-text-subtle)]">{isRtl ? `${sessions.length} جلسة تدريبية` : `${sessions.length} learning sessions`}</p>
      </section>

      <section className="space-y-4" aria-labelledby="curriculum-heading"><div className="flex flex-wrap items-end justify-between gap-3"><div><h2 id="curriculum-heading" className="text-xl font-bold">{isRtl ? 'خارطة المنهج' : 'Curriculum roadmap'}</h2><p className="text-sm text-[var(--color-text-muted)]">{isRtl ? 'افتح مرحلة لاستعراض جلساتها.' : 'Open a phase to browse its sessions.'}</p></div><Link href="/web-creator-ai/sessions" className="text-sm font-semibold text-[var(--color-primary)] hover:underline">{isRtl ? 'فهرس الجلسات' : 'Sessions catalog'} <span aria-hidden="true">{isRtl ? '←' : '→'}</span></Link></div>
        <div className="space-y-3">{phases.map((phase) => { const open = expandedPhase === phase.key; const phaseSessions = sessions.filter((s) => s.number >= phase.from && s.number <= phase.to); const phaseDone = phaseSessions.reduce((sum, s) => sum + (stats[s.id]?.completedCount || 0), 0); const phaseTotal = phaseSessions.reduce((sum, s) => sum + s.activities.length, 0); return <Card key={phase.key} className="overflow-hidden">
          <button type="button" aria-expanded={open} onClick={() => setExpandedPhase(open ? null : phase.key)} className="flex w-full items-center justify-between gap-4 p-4 text-start sm:p-5"><span><span className="block font-bold">{isRtl ? phase.ar : phase.en}</span><span className="mt-1 block text-xs text-[var(--color-text-muted)]">{isRtl ? `الجلسات ${String(phase.from).padStart(2, '0')}–${String(phase.to).padStart(2, '0')} · ${phaseDone}/${phaseTotal} نشاطًا` : `Sessions ${String(phase.from).padStart(2, '0')}–${String(phase.to).padStart(2, '0')} · ${phaseDone}/${phaseTotal} activities`}</span></span>{open ? <ChevronUp className="h-5 w-5 shrink-0" /> : <ChevronDown className="h-5 w-5 shrink-0" />}</button>
          {open && <ol className="divide-y divide-[var(--color-border-subtle)] border-t border-[var(--color-border-subtle)]">{phaseSessions.map((s) => { const itemStats = stats[s.id]; return <li key={s.id}><Link href={`/web-creator-ai/session/${s.id}`} className="flex items-center justify-between gap-4 px-4 py-3.5 hover:bg-[var(--color-surface-sunken)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[var(--color-primary)] sm:px-5"><span className="flex min-w-0 items-center gap-3"><span className="font-mono text-xs text-[var(--color-text-subtle)]">{String(s.number).padStart(2, '0')}</span><span className="truncate text-sm font-medium">{getLocalizedText(s.title, language)}</span></span><span className="flex shrink-0 items-center gap-2 text-xs text-[var(--color-text-muted)]">{itemStats?.isAllCompleted ? <><CheckCircle2 className="h-4 w-4 text-emerald-600"/><span className="hidden sm:inline">{isRtl ? 'مكتملة' : 'Complete'}</span></> : <>{itemStats?.completedCount ? `${itemStats.completedCount}/${itemStats.totalCount}` : isRtl ? 'عرض' : 'Open'}<span aria-hidden="true">{isRtl ? '←' : '→'}</span></>}</span></Link></li>; })}</ol>}
        </Card>; })}</div>
      </section>

      <Link href="/web-creator-ai/resources" className="block rounded-2xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-[var(--color-primary)]"><Card className="flex items-center justify-between gap-4 p-5 transition-colors hover:border-[var(--color-primary)] sm:p-6"><span className="flex items-start gap-4"><span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[var(--color-primary-subtle)] text-[var(--color-primary)]"><BookOpen className="h-5 w-5"/></span><span><span className="block font-bold">{isRtl ? 'مكتبة الموارد' : 'Resource library'}</span><span className="mt-1 block text-sm text-[var(--color-text-muted)]">{isRtl ? 'المختبرات، المشاريع التطبيقية، والأدلة والمراجع في مكان واحد.' : 'Labs, hands-on projects, guides, and references in one place.'}</span><span className="mt-2 flex flex-wrap gap-3 text-xs text-[var(--color-text-subtle)]"><span className="inline-flex items-center gap-1"><Sparkles className="h-3.5 w-3.5"/>{isRtl ? 'المختبرات' : 'Labs'}</span><span className="inline-flex items-center gap-1"><Briefcase className="h-3.5 w-3.5"/>{isRtl ? 'المشاريع' : 'Projects'}</span><span className="inline-flex items-center gap-1"><Bookmark className="h-3.5 w-3.5"/>{isRtl ? 'المراجع' : 'References'}</span></span></span></span><span className="shrink-0 text-[var(--color-primary)]" aria-hidden="true">{isRtl ? '←' : '→'}</span></Card></Link>
    </div>
  </PageContainer></LearningShell>;
}
