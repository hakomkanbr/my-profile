'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import {
  TrainerShell,
  PageHeader,
  Card,
  Button,
} from '@/components';
import { usePreferencesStore, useTrainerAuthStore, useSessionStore } from '@/store';
import { SessionStudent } from '@/types';
import {
  Plus,
  Lock,
  Search,
} from 'lucide-react';

export default function TrainerLearnersPage() {
  const { language } = usePreferencesStore();
  const isRtl = language === 'ar';

  const { isAuthenticated, isLoading: isAuthLoading } = useTrainerAuthStore();
  const { sessions, initializeSessions, addStudentToSession, updateStudentStatus } = useSessionStore();

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedFilter, setSelectedFilter] = useState<'all' | 'active' | 'needs-help' | 'completed'>('all');
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [studentName, setStudentName] = useState('');
  const [studentEmail, setStudentEmail] = useState('');
  const [targetSessionId, setTargetSessionId] = useState('session-01');

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
            {isRtl ? 'يرجى تسجيل الدخول أولاً من لوحة تحكم المدرب.' : 'Please authenticate from the trainer cockpit.'}
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

  // Flatten students from all sessions
  const allStudentsList: {
    student: SessionStudent;
    sessionId: string;
    sessionNumber: number;
    sessionTitle: string;
  }[] = [];

  sessions.forEach((s) => {
    s.students.forEach((std) => {
      allStudentsList.push({
        student: std,
        sessionId: s.id,
        sessionNumber: s.number,
        sessionTitle: s.title.ar,
      });
    });
  });

  const filteredStudents = allStudentsList.filter((item) => {
    const matchesSearch =
      item.student.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (item.student.email && item.student.email.toLowerCase().includes(searchQuery.toLowerCase()));

    if (!matchesSearch) return false;
    if (selectedFilter === 'all') return true;
    return item.student.status === selectedFilter;
  });

  const handleAddSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!studentName.trim()) return;
    addStudentToSession(targetSessionId, {
      name: studentName.trim(),
      email: studentEmail.trim() || undefined,
    });
    setStudentName('');
    setStudentEmail('');
    setIsAddModalOpen(false);
  };

  return (
    <TrainerShell headerTitle={isRtl ? 'متابعة المتدربين' : 'Learners Engagement'}>
      <div className="space-y-8 text-start pb-16">
        <PageHeader
          title={isRtl ? 'إدارة ومتابعة المتدربين' : 'Learners Engagement & Cohort Tracking'}
          subtitle={
            isRtl
              ? 'متابعة حية لمستويات تفاعل الطلاب في الجلسات الـ 12، إنجاز المهام، وملاحظات التوجيه الميداني.'
              : 'Holistic cohort engagement dashboard, task submissions, and individual mentoring notes.'
          }
          breadcrumbs={[
            { id: '1', label: isRtl ? 'لوحة المدرب' : 'Trainer Cockpit', href: '/trainer' },
            { id: '2', label: isRtl ? 'المتدربون' : 'Learners', isCurrent: true },
          ]}
          actions={
            <Button
              variant="primary"
              size="sm"
              leftIcon={<Plus className="w-4 h-4" />}
              onClick={() => setIsAddModalOpen(true)}
            >
              {isRtl ? 'إضافة متدرب جديد' : 'Add New Trainee'}
            </Button>
          }
        />

        {/* Filters and Search Toolbar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-4 rounded-2xl bg-[var(--color-surface)] border border-[var(--color-border)]">
          {/* Search Input */}
          <div className="relative w-full sm:w-80">
            <Search className="w-4 h-4 absolute inset-y-0 start-3 my-auto text-[var(--color-text-subtle)]" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={isRtl ? 'بحث بالاسم أو البريد...' : 'Search trainees...'}
              className="w-full ps-9 pe-4 py-2 rounded-xl text-xs bg-[var(--color-surface-sunken)] border border-[var(--color-border)] text-[var(--color-text)] focus:outline-none focus:border-[var(--color-primary)]"
            />
          </div>

          {/* Status Tabs */}
          <div className="flex items-center gap-1.5 overflow-x-auto w-full sm:w-auto text-xs font-bold">
            {(['all', 'active', 'needs-help', 'completed'] as const).map((filter) => (
              <button
                key={filter}
                type="button"
                onClick={() => setSelectedFilter(filter)}
                className={`px-3 py-1.5 rounded-lg transition-colors cursor-pointer shrink-0 ${
                  selectedFilter === filter
                    ? 'bg-[var(--color-primary)] text-white'
                    : 'bg-[var(--color-surface-sunken)] text-[var(--color-text-muted)] hover:text-[var(--color-text)]'
                }`}
              >
                {filter === 'all'
                  ? isRtl ? 'جميع المتدربين' : 'All'
                  : filter === 'active'
                  ? isRtl ? 'النشطون' : 'Active'
                  : filter === 'needs-help'
                  ? isRtl ? 'يحتاجون مساعدة' : 'Needs Help'
                  : isRtl ? 'المكتملون' : 'Completed'}
              </button>
            ))}
          </div>
        </div>

        {/* Master Students Roster */}
        <Card className="overflow-hidden border border-[var(--color-border)]">
          <div className="overflow-x-auto">
            <table className="w-full text-start text-xs">
              <thead>
                <tr className="bg-[var(--color-surface-sunken)] border-b border-[var(--color-border)] text-[var(--color-text-muted)] font-mono">
                  <th className="py-3.5 px-4 text-start font-bold">{isRtl ? 'اسم المتدرب' : 'Trainee Name'}</th>
                  <th className="py-3.5 px-4 text-start font-bold">{isRtl ? 'الجلسة المنسوبة' : 'Session'}</th>
                  <th className="py-3.5 px-4 text-start font-bold">{isRtl ? 'نسبة التقدم' : 'Progress'}</th>
                  <th className="py-3.5 px-4 text-start font-bold">{isRtl ? 'حالة التفاعل' : 'Status'}</th>
                  <th className="py-3.5 px-4 text-start font-bold">{isRtl ? 'آخر نشاط' : 'Last Active'}</th>
                  <th className="py-3.5 px-4 text-start font-bold">{isRtl ? 'ملاحظات وتوجيه' : 'Mentoring Notes'}</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[var(--color-border-subtle)]">
                {filteredStudents.length > 0 ? (
                  filteredStudents.map(({ student, sessionId, sessionNumber }) => (
                    <tr key={`${sessionId}-${student.id}`} className="hover:bg-[var(--color-surface-sunken)]/50 transition-colors">
                      <td className="py-3.5 px-4 font-bold text-[var(--color-text)]">
                        <div className="flex items-center gap-2.5">
                          <div className="w-8 h-8 rounded-full bg-[var(--color-primary-subtle)] text-[var(--color-primary)] font-black flex items-center justify-center text-xs shrink-0">
                            {student.name.slice(0, 1)}
                          </div>
                          <div>
                            <p className="font-bold text-sm leading-none">{student.name}</p>
                            {student.email && (
                              <p className="text-[11px] text-[var(--color-text-subtle)] font-mono mt-1">
                                {student.email}
                              </p>
                            )}
                          </div>
                        </div>
                      </td>

                      <td className="py-3.5 px-4">
                        <Link
                          href={`/trainer/sessions/${sessionId}`}
                          className="font-mono text-xs font-bold text-[var(--color-primary)] hover:underline"
                        >
                          Session {String(sessionNumber).padStart(2, '0')}
                        </Link>
                      </td>

                      <td className="py-3.5 px-4">
                        <div className="flex items-center gap-2">
                          <div className="w-24 bg-[var(--color-surface-sunken)] h-2 rounded-full overflow-hidden border border-[var(--color-border)]">
                            <div
                              className="bg-[var(--color-primary)] h-full transition-all"
                              style={{ width: `${student.progressPercent}%` }}
                            />
                          </div>
                          <span className="font-mono font-bold text-xs">{student.progressPercent}%</span>
                        </div>
                      </td>

                      <td className="py-3.5 px-4">
                        <select
                          value={student.status}
                          onChange={(e) =>
                            updateStudentStatus(sessionId, student.id, e.target.value as SessionStudent['status'])
                          }
                          aria-label={`حالة المتدرب ${student.name}`}
                          className={`text-xs font-bold px-2 py-1 rounded border cursor-pointer ${
                            student.status === 'completed'
                              ? 'bg-green-500/15 border-green-500/30 text-green-600'
                              : student.status === 'needs-help'
                              ? 'bg-red-500/15 border-red-500/30 text-red-600'
                              : 'bg-blue-500/15 border-blue-500/30 text-blue-600'
                          }`}
                        >
                          <option value="active">Active (نشط)</option>
                          <option value="needs-help">Needs Help (يحتاج مساعدة)</option>
                          <option value="completed">Completed (مكتمل)</option>
                          <option value="enrolled">Enrolled (مسجل)</option>
                        </select>
                      </td>

                      <td className="py-3.5 px-4 font-mono text-[var(--color-text-subtle)]">
                        {student.lastActiveAt || 'الآن'}
                      </td>

                      <td className="py-3.5 px-4 text-xs text-[var(--color-text-muted)] max-w-sm">
                        <input
                          type="text"
                          defaultValue={student.notes || ''}
                          onBlur={(e) =>
                            updateStudentStatus(sessionId, student.id, student.status, e.target.value)
                          }
                          placeholder={isRtl ? 'اكتب ملاحظة توجيه...' : 'Add mentoring note...'}
                          className="w-full px-2 py-1 rounded bg-[var(--color-surface-sunken)] border border-transparent hover:border-[var(--color-border)] focus:border-[var(--color-primary)] text-xs transition-colors"
                        />
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={6} className="py-8 text-center text-xs text-[var(--color-text-muted)]">
                      {isRtl ? 'لا يوجد متدربون يطابقون خيارات البحث' : 'No trainees found matching criteria'}
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </Card>
      </div>

      {/* Add Trainee Modal */}
      {isAddModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-xs flex items-center justify-center p-4">
          <Card className="w-full max-w-md p-6 space-y-4 shadow-2xl">
            <div className="flex items-center justify-between border-b border-[var(--color-border)] pb-3">
              <h3 className="text-base font-bold text-[var(--color-text)]">
                {isRtl ? 'تسجيل متدرب جديد في الدورة' : 'Register New Trainee'}
              </h3>
              <button
                type="button"
                onClick={() => setIsAddModalOpen(false)}
                className="text-[var(--color-text-muted)] hover:text-[var(--color-text)] cursor-pointer"
              >
                ✕
              </button>
            </div>

            <form onSubmit={handleAddSubmit} className="space-y-4">
              <div className="space-y-1 text-start">
                <label className="text-xs font-bold text-[var(--color-text)]">
                  {isRtl ? 'الاسم الكامل' : 'Full Name'}
                </label>
                <input
                  type="text"
                  value={studentName}
                  onChange={(e) => setStudentName(e.target.value)}
                  placeholder="مثال: ريم السبيعي"
                  className="w-full px-3 py-2 rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] text-sm focus:outline-none focus:border-[var(--color-primary)]"
                  required
                />
              </div>

              <div className="space-y-1 text-start">
                <label className="text-xs font-bold text-[var(--color-text)]">
                  {isRtl ? 'البريد الإلكتروني' : 'Email'}
                </label>
                <input
                  type="email"
                  value={studentEmail}
                  onChange={(e) => setStudentEmail(e.target.value)}
                  placeholder="reem@example.com"
                  className="w-full px-3 py-2 rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] text-sm focus:outline-none focus:border-[var(--color-primary)]"
                />
              </div>

              <div className="space-y-1 text-start">
                <label className="text-xs font-bold text-[var(--color-text)]">
                  {isRtl ? 'تسكين في الجلسة' : 'Assign to Session'}
                </label>
                <select
                  value={targetSessionId}
                  onChange={(e) => setTargetSessionId(e.target.value)}
                  className="w-full px-3 py-2 rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] text-sm focus:outline-none focus:border-[var(--color-primary)] cursor-pointer"
                >
                  {sessions.map((s) => (
                    <option key={s.id} value={s.id}>
                      Session {String(s.number).padStart(2, '0')}: {s.title.ar}
                    </option>
                  ))}
                </select>
              </div>

              <div className="flex items-center justify-end gap-2 pt-2">
                <Button
                  type="button"
                  variant="ghost"
                  size="sm"
                  onClick={() => setIsAddModalOpen(false)}
                >
                  {isRtl ? 'إلغاء' : 'Cancel'}
                </Button>
                <Button type="submit" variant="primary" size="sm">
                  {isRtl ? 'إضافة المتدرب' : 'Add Trainee'}
                </Button>
              </div>
            </form>
          </Card>
        </div>
      )}
    </TrainerShell>
  );
}
