'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import {
  LearningShell,
  PageContainer,
  PageHeader,
  Card,
  Button,
} from '@/components';
import { usePreferencesStore, useSessionStore } from '@/store';
import { getLocalizedText } from '@/lib/utils';
import { getSessionCompletionStats } from '@/lib/student-storage';
import { Clock, ArrowLeft, ArrowRight, CheckCircle2 } from 'lucide-react';

export default function StudentSessionsCatalogPage() {
  const { language } = usePreferencesStore();
  const isRtl = language === 'ar';
  const { sessions, initializeSessions } = useSessionStore();

  const [filter, setFilter] = useState<'all' | 'active' | 'scheduled' | 'completed'>('all');

  useEffect(() => {
    initializeSessions();
  }, [initializeSessions]);

  const filteredSessions = sessions.filter((s) => {
    if (filter === 'all') return true;
    return s.status === filter;
  });

  return (
    <LearningShell headerTitle={isRtl ? 'فهرس الجلسات التدريبية' : 'Curriculum Sessions'}>
      <PageContainer>
        <div className="space-y-8 text-start pb-16">
          <PageHeader
            title={isRtl ? 'الجلسات التدريبية الـ 12 المباشرة' : 'The 12 Live Curriculum Sessions'}
            subtitle={
              isRtl
                ? 'جلسات تفاعلية عملية تنقلك من الفكرة المجردة إلى بناء وإطلاق وتسويق موقعك التجاري.'
                : 'Interactive hands-on workshops guiding you from architectural concept to full web launch.'
            }
            breadcrumbs={[
              { id: '1', label: isRtl ? 'الرئيسية' : 'Home', href: '/' },
              { id: '2', label: 'WEB CREATOR AI', href: '/web-creator-ai' },
              { id: '3', label: isRtl ? 'الجلسات' : 'Sessions', isCurrent: true },
            ]}
          />

          {/* Filter Toolbar */}
          <div className="flex items-center gap-1.5 p-1.5 rounded-2xl bg-[var(--color-surface)] border border-[var(--color-border)] text-xs font-bold w-fit">
            {(['all', 'active', 'scheduled', 'completed'] as const).map((tab) => (
              <button
                key={tab}
                type="button"
                onClick={() => setFilter(tab)}
                className={`px-4 py-2 rounded-xl transition-colors cursor-pointer ${
                  filter === tab
                    ? 'bg-[var(--color-primary)] text-white'
                    : 'text-[var(--color-text-muted)] hover:text-[var(--color-text)]'
                }`}
              >
                {tab === 'all'
                  ? isRtl ? 'جميع الجلسات (12)' : 'All Sessions (12)'
                  : tab === 'active'
                  ? isRtl ? 'النشطة' : 'Active'
                  : tab === 'scheduled'
                  ? isRtl ? 'المجدولة' : 'Scheduled'
                  : isRtl ? 'المكتملة' : 'Completed'}
              </button>
            ))}
          </div>

          {/* Sessions Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredSessions.map((session) => {
              const isActive = session.status === 'active';
              const isCompleted = session.status === 'completed';

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
                          ? isRtl ? '✓ مكتملة' : '✓ Completed'
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
                      <div className="flex items-center gap-2 text-xs font-medium text-[var(--color-text-subtle)]">
                        <span className="flex items-center gap-1">
                          <Clock className="w-3.5 h-3.5" />
                          <span>{session.durationMinutes} دقيقة</span>
                        </span>
                        <span>•</span>
                        <span>{session.activities.length} أنشطة</span>
                      </div>

                      {(() => {
                        const studentStats = getSessionCompletionStats(session.id, session.activities.length);
                        if (studentStats.completedCount === 0) return null;
                        return (
                          <span className="inline-flex items-center gap-1 text-[11px] font-bold text-emerald-600 bg-emerald-500/10 px-2 py-0.5 rounded-full">
                            <CheckCircle2 className="w-3 h-3" />
                            {studentStats.isAllCompleted
                              ? isRtl ? 'مكتملة بالكامل' : 'Completed'
                              : `${studentStats.completedCount}/${studentStats.totalCount}`}
                          </span>
                        );
                      })()}
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
                          ? (isRtl ? 'دخول الجلسة النشطة' : 'Enter Active Session')
                          : (isRtl ? 'استعراض الأنشطة والمهام' : 'Explore Activities')}
                      </Button>
                    </Link>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </PageContainer>
    </LearningShell>
  );
}
