'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
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
  Layers,
  ArrowLeft,
  ArrowRight,
  Lock,
  Eye,
  EyeOff,
  CheckCircle2,
  Clock,
  Plus,
  RotateCcw,
  AlertCircle,
  HelpCircle,
  BookOpen,
} from 'lucide-react';

export default function TrainerCockpitPage() {
  const { language } = usePreferencesStore();
  const isRtl = language === 'ar';

  const { isAuthenticated, isLoading: isAuthLoading, error, checkAuth, login, clearError } = useTrainerAuthStore();
  const {
    sessions,
    initializeSessions,
    getActiveSession,
    updateSessionStatus,
    addStudentToSession,
    resetSessionsToDefault,
  } = useSessionStore();

  const [passwordInput, setPasswordInput] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [selectedStatusFilter, setSelectedStatusFilter] = useState<'all' | SessionStatus>('all');
  const [isAddStudentModalOpen, setIsAddStudentModalOpen] = useState(false);
  const [newStudentName, setNewStudentName] = useState('');
  const [newStudentEmail, setNewStudentEmail] = useState('');
  const [targetSessionForStudent, setTargetSessionForStudent] = useState<string>('session-01');

  useEffect(() => {
    checkAuth();
    initializeSessions();
  }, [checkAuth, initializeSessions]);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!passwordInput.trim()) return;
    await login(passwordInput);
  };

  const handleAddStudent = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newStudentName.trim()) return;
    addStudentToSession(targetSessionForStudent, {
      name: newStudentName.trim(),
      email: newStudentEmail.trim() || undefined,
    });
    setNewStudentName('');
    setNewStudentEmail('');
    setIsAddStudentModalOpen(false);
  };

  // 1. Loading State while checking cookie session
  if (isAuthLoading && !isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[var(--color-background)]">
        <div className="text-center space-y-3">
          <div className="w-10 h-10 border-3 border-[var(--color-primary)] border-t-transparent rounded-full animate-spin mx-auto" />
          <p className="text-xs font-mono text-[var(--color-text-muted)]">
            {isRtl ? 'جاري التحقق من أمان المدرب...' : 'Verifying Trainer Credentials...'}
          </p>
        </div>
      </div>
    );
  }

  // 2. Unauthenticated State -> Password Gate
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center p-4 bg-[var(--color-background)]">
        <Card className="w-full max-w-md p-8 space-y-6 shadow-xl border-2 border-[var(--color-primary)]/20">
          <div className="text-center space-y-2">
            <div className="w-12 h-12 rounded-2xl bg-[var(--color-primary-subtle)] text-[var(--color-primary)] flex items-center justify-center mx-auto mb-3 shadow-xs">
              <Lock className="w-6 h-6" />
            </div>
            <div className="flex items-center justify-center gap-2">
              <Badge variant="primary" size="sm">
                INSTRUCTOR ONLY
              </Badge>
              <span className="text-xs font-mono text-[var(--color-text-subtle)]">
                WEB CREATOR AI
              </span>
            </div>
            <h1 className="text-xl sm:text-2xl font-black text-[var(--color-text)]">
              {isRtl ? 'تسجيل دخول المدرب' : 'Trainer Authentication'}
            </h1>
            <p className="text-xs text-[var(--color-text-muted)] leading-relaxed">
              {isRtl
                ? 'أدخل كلمة مرور المدرب للدخول إلى لوحة القيادة وإدارة الجلسات والطلاب.'
                : 'Enter your instructor passkey to manage classroom sessions, cohorts, and curriculum.'}
            </p>
          </div>

          <form onSubmit={handleLogin} className="space-y-4">
            <div className="space-y-1.5 text-start">
              <label className="text-xs font-bold text-[var(--color-text)] block">
                {isRtl ? 'كلمة المرور' : 'Password'}
              </label>
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={passwordInput}
                  onChange={(e) => {
                    setPasswordInput(e.target.value);
                    if (error) clearError();
                  }}
                  placeholder={isRtl ? 'أدخل كلمة مرور المدرب...' : 'Enter trainer password...'}
                  className="w-full px-4 py-2.5 rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] text-[var(--color-text)] text-sm focus:outline-none focus:border-[var(--color-primary)] focus:ring-1 focus:ring-[var(--color-primary)] transition-all font-mono"
                  autoFocus
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 end-0 px-3 flex items-center text-[var(--color-text-muted)] hover:text-[var(--color-text)] cursor-pointer"
                  tabIndex={-1}
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>

            {error && (
              <div className="p-3 rounded-xl bg-red-500/10 border border-red-500/20 text-red-500 text-xs flex items-center gap-2">
                <AlertCircle className="w-4 h-4 shrink-0" />
                <span>{error}</span>
              </div>
            )}

            <Button
              type="submit"
              variant="primary"
              size="lg"
              className="w-full"
              isLoading={isAuthLoading}
            >
              {isRtl ? 'دخول لوحة التحكم' : 'Unlock Trainer Cockpit'}
            </Button>
          </form>

          <div className="pt-4 border-t border-[var(--color-border)] text-center space-y-2">
            <div className="p-2.5 rounded-xl bg-[var(--color-surface-sunken)] border border-[var(--color-border-subtle)] text-[11px] text-[var(--color-text-muted)] font-mono">
              <span>{isRtl ? 'كلمة المرور للتجربة: ' : 'Dev Passkey: '}</span>
              <strong className="text-[var(--color-primary)] font-bold">trainer2026</strong>
            </div>

            <Link
              href="/web-creator-ai"
              className="inline-block text-xs font-semibold text-[var(--color-text-muted)] hover:text-[var(--color-primary)] transition-colors"
            >
              {isRtl ? '← العودة إلى منصة الطالب' : '← Back to Student Platform'}
            </Link>
          </div>
        </Card>
      </div>
    );
  }

  // 3. Authenticated Trainer View
  const activeSession = getActiveSession();
  const allActiveSessions = sessions.filter((s) => s.status === 'active');
  const allScheduledSessions = sessions.filter((s) => s.status === 'scheduled');

  const filteredSessions = sessions.filter((s) => {
    if (selectedStatusFilter === 'all') return true;
    return s.status === selectedStatusFilter;
  });

  // Calculate cohort stats
  const totalEnrolledStudents = sessions.reduce((sum, s) => sum + s.students.length, 0);

  return (
    <TrainerShell headerTitle={isRtl ? 'غرفة قيادة المدرب' : 'Trainer Cockpit'}>
      <div className="space-y-8 text-start pb-12">
        {/* Top Header Banner */}
        <div className="p-8 sm:p-10 rounded-3xl bg-[var(--color-surface)] border-2 border-[var(--color-primary)]/20 flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm">
          <div className="space-y-2 text-center md:text-start max-w-2xl">
            <div className="flex items-center gap-2 justify-center md:justify-start">
              <Badge variant="primary" size="md">
                INSTRUCTOR COCKPIT
              </Badge>
              <span className="text-xs font-mono text-[var(--color-secondary)] font-bold uppercase">
                WEB CREATOR AI
              </span>
            </div>
            <h1 className="text-2xl sm:text-4xl font-black text-[var(--color-text)] tracking-tight">
              {isRtl ? 'لوحة قيادة وإدارة التدريب' : 'Trainer Command Center'}
            </h1>
            <p className="text-xs sm:text-sm text-[var(--color-text-muted)] leading-relaxed">
              {isRtl
                ? 'إدارة جلسات التدريب المباشرة، متابعة تفاعل المتدربين في الوقت الفعلي، واستعراض الدليل التدريسي الغني لكل نشاط.'
                : 'Direct live cohorts, review structured pedagogy for Zoom teaching, and monitor real-time trainee engagement.'}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 shrink-0 w-full md:w-auto">
            {activeSession && (
              <Link href={`/trainer/presentation/${activeSession.id}`}>
                <Button
                  size="lg"
                  variant="primary"
                  className="w-full shadow-lg shadow-[var(--color-primary)]/20"
                  leftIcon={<MonitorPlay className="w-5 h-5" />}
                >
                  {isRtl
                    ? `إطلاق عرض (Session ${String(activeSession.number).padStart(2, '0')})`
                    : `Launch Presentation (${activeSession.slug})`}
                </Button>
              </Link>
            )}
          </div>
        </div>

        {/* 1. ACTIVE SESSION SPOTLIGHT (What is happening right now?) */}
        {activeSession && (
          <Card className="p-6 sm:p-8 border-2 border-[var(--color-primary)] bg-gradient-to-br from-[var(--color-surface)] to-[var(--color-surface-sunken)] space-y-6">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-[var(--color-border)]">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-mono font-bold bg-green-500/15 text-green-600 border border-green-500/30">
                    <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                    <span>{isRtl ? 'الجلسة النشطة حالياً' : 'CURRENT ACTIVE SESSION'}</span>
                  </span>
                  <span className="text-xs font-mono text-[var(--color-text-subtle)]">
                    {activeSession.scheduledDate || 'LIVE NOW'}
                  </span>
                </div>
                <h2 className="text-xl sm:text-2xl font-black text-[var(--color-text)]">
                  Session {String(activeSession.number).padStart(2, '0')}: {getLocalizedText(activeSession.title, language)}
                </h2>
                <p className="text-xs sm:text-body-sm text-[var(--color-text-muted)] max-w-3xl">
                  {getLocalizedText(activeSession.subtitle, language)}
                </p>
              </div>

              {/* Status Selector & Fast Actions */}
              <div className="flex flex-wrap items-center gap-2 shrink-0">
                <select
                  value={activeSession.status}
                  onChange={(e) => updateSessionStatus(activeSession.id, e.target.value as SessionStatus)}
                  aria-label={isRtl ? 'حالة الجلسة' : 'Session Status'}
                  className="px-3 py-1.5 rounded-lg text-xs font-bold bg-[var(--color-surface)] border border-[var(--color-border)] text-[var(--color-text)] cursor-pointer focus:outline-none focus:border-[var(--color-primary)]"
                >
                  <option value="active">🟢 {isRtl ? 'نشطة (Active)' : 'Active'}</option>
                  <option value="scheduled">🟡 {isRtl ? 'مجدولة (Scheduled)' : 'Scheduled'}</option>
                  <option value="completed">🔵 {isRtl ? 'مكتملة (Completed)' : 'Completed'}</option>
                  <option value="draft">⚪ {isRtl ? 'مسودة (Draft)' : 'Draft'}</option>
                </select>

                <Link href={`/trainer/sessions/${activeSession.id}`}>
                  <Button
                    size="sm"
                    variant="outline"
                    leftIcon={<BookOpen className="w-4 h-4 text-[var(--color-secondary)]" />}
                  >
                    {isRtl ? 'دليل التدريس والأنشطة' : 'Pedagogy Guide'}
                  </Button>
                </Link>

                <Link href={`/trainer/presentation/${activeSession.id}`}>
                  <Button
                    size="sm"
                    variant="primary"
                    leftIcon={<MonitorPlay className="w-4 h-4" />}
                  >
                    {isRtl ? 'عرض الشرائح' : 'Slide Deck'}
                  </Button>
                </Link>
              </div>
            </div>

            {/* Active Session Activities Breakdown */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-4 rounded-2xl bg-[var(--color-surface)] border border-[var(--color-border)] space-y-1">
                <span className="text-[11px] font-mono font-bold text-[var(--color-text-subtle)] uppercase">
                  {isRtl ? 'عدد الأنشطة العملية' : 'Hands-on Activities'}
                </span>
                <p className="text-2xl font-mono font-black text-[var(--color-primary)]">
                  {activeSession.activities.length} {isRtl ? 'أنشطة' : 'Acts'}
                </p>
                <p className="text-caption text-[var(--color-text-muted)]">
                  {isRtl ? 'تحتوي على تعليمات الطالب ودليل المدرب' : 'Includes student tasks & trainer guidance'}
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-[var(--color-surface)] border border-[var(--color-border)] space-y-1">
                <span className="text-[11px] font-mono font-bold text-[var(--color-text-subtle)] uppercase">
                  {isRtl ? 'الطلاب المسجلون بالجلسة' : 'Trainees in Session'}
                </span>
                <p className="text-2xl font-mono font-black text-[var(--color-secondary)]">
                  {activeSession.students.length} {isRtl ? 'طلاب' : 'Learners'}
                </p>
                <p className="text-caption text-[var(--color-text-muted)]">
                  {isRtl ? 'تفاعل مباشر وإكمال للمهام' : 'Live submissions & status tracking'}
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-[var(--color-surface)] border border-[var(--color-border)] space-y-1">
                <span className="text-[11px] font-mono font-bold text-[var(--color-text-subtle)] uppercase">
                  {isRtl ? 'مدة الجلسة التقديرية' : 'Estimated Time'}
                </span>
                <p className="text-2xl font-mono font-black text-[var(--color-accent-strong)]">
                  {activeSession.durationMinutes}m
                </p>
                <p className="text-caption text-[var(--color-text-muted)]">
                  {isRtl ? 'شرح حي وتطبيقات عملية' : 'Interactive Zoom lecture & labs'}
                </p>
              </div>
            </div>
          </Card>
        )}

        {/* Quick Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <Card className="p-5 space-y-1">
            <span className="text-caption text-[var(--color-text-subtle)] font-medium">
              {isRtl ? 'إجمالي الجلسات' : 'Total Sessions'}
            </span>
            <p className="text-3xl font-mono font-black text-[var(--color-primary)]">
              {sessions.length}
            </p>
          </Card>

          <Card className="p-5 space-y-1">
            <span className="text-caption text-[var(--color-text-subtle)] font-medium">
              {isRtl ? 'الجلسات النشطة' : 'Active Sessions'}
            </span>
            <p className="text-3xl font-mono font-black text-green-600">
              {allActiveSessions.length}
            </p>
          </Card>

          <Card className="p-5 space-y-1">
            <span className="text-caption text-[var(--color-text-subtle)] font-medium">
              {isRtl ? 'الجلسات المجدولة' : 'Scheduled'}
            </span>
            <p className="text-3xl font-mono font-black text-[var(--color-secondary)]">
              {allScheduledSessions.length}
            </p>
          </Card>

          <Card className="p-5 space-y-1">
            <span className="text-caption text-[var(--color-text-subtle)] font-medium">
              {isRtl ? 'المتدربون المتابعون' : 'Tracked Students'}
            </span>
            <p className="text-3xl font-mono font-black text-[var(--color-text)]">
              {totalEnrolledStudents || 4}
            </p>
          </Card>
        </div>

        {/* 2. SESSIONS MASTER MANAGEMENT */}
        <div className="space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <h2 className="text-xl sm:text-2xl font-black text-[var(--color-text)]">
                {isRtl ? 'إدارة الجلسات الـ 12 الموحدة' : 'Master Curriculum Sessions (12)'}
              </h2>
              <p className="text-xs text-[var(--color-text-muted)]">
                {isRtl
                  ? 'أي تعديل في حالة الجلسة أو محتواها ينعكس فوراً على ما يراه الطالب في لوحة دراسته.'
                  : 'Any session status update synchronizes immediately with the student view.'}
              </p>
            </div>

            {/* Status Filter Tabs */}
            <div className="flex items-center gap-1.5 p-1 rounded-xl bg-[var(--color-surface-sunken)] border border-[var(--color-border)] text-xs font-bold">
              {(['all', 'active', 'scheduled', 'completed'] as const).map((filter) => (
                <button
                  key={filter}
                  type="button"
                  onClick={() => setSelectedStatusFilter(filter)}
                  className={`px-3 py-1 rounded-lg transition-colors cursor-pointer ${
                    selectedStatusFilter === filter
                      ? 'bg-[var(--color-primary)] text-white'
                      : 'text-[var(--color-text-muted)] hover:text-[var(--color-text)]'
                  }`}
                >
                  {filter === 'all'
                    ? isRtl ? 'الكل' : 'All'
                    : filter === 'active'
                    ? isRtl ? 'النشطة' : 'Active'
                    : filter === 'scheduled'
                    ? isRtl ? 'المجدولة' : 'Scheduled'
                    : isRtl ? 'المكتملة' : 'Completed'}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredSessions.map((session) => (
              <Card
                key={session.id}
                className={`p-6 flex flex-col justify-between space-y-5 transition-all relative overflow-hidden ${
                  session.status === 'active'
                    ? 'border-2 border-[var(--color-primary)] shadow-md'
                    : 'border border-[var(--color-border)] hover:border-[var(--color-border-strong)]'
                }`}
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="px-2.5 py-0.5 rounded text-xs font-mono font-bold bg-[var(--color-primary-subtle)] text-[var(--color-primary)]">
                      SESSION {String(session.number).padStart(2, '0')}
                    </span>

                    {/* Quick Status Dropdown */}
                    <select
                      value={session.status}
                      onChange={(e) => updateSessionStatus(session.id, e.target.value as SessionStatus)}
                      aria-label={`حالة ${session.title.ar}`}
                      className={`text-xs font-bold px-2 py-0.5 rounded border cursor-pointer ${
                        session.status === 'active'
                          ? 'bg-green-500/15 border-green-500/30 text-green-600'
                          : session.status === 'scheduled'
                          ? 'bg-amber-500/15 border-amber-500/30 text-amber-600'
                          : 'bg-[var(--color-surface-sunken)] border-[var(--color-border)] text-[var(--color-text-muted)]'
                      }`}
                    >
                      <option value="active">Active</option>
                      <option value="scheduled">Scheduled</option>
                      <option value="completed">Completed</option>
                      <option value="draft">Draft</option>
                    </select>
                  </div>

                  <h3 className="text-base font-bold text-[var(--color-text)] leading-snug">
                    {getLocalizedText(session.title, language)}
                  </h3>

                  <p className="text-xs text-[var(--color-text-muted)] line-clamp-2 leading-relaxed">
                    {getLocalizedText(session.description, language)}
                  </p>

                  <div className="flex items-center gap-3 text-[11px] font-mono text-[var(--color-text-subtle)] pt-1">
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      <span>{session.durationMinutes}m</span>
                    </span>
                    <span>•</span>
                    <span>{session.activities.length} {isRtl ? 'أنشطة' : 'Acts'}</span>
                    <span>•</span>
                    <span>{session.students.length} {isRtl ? 'طلاب' : 'Learners'}</span>
                  </div>
                </div>

                <div className="pt-3 border-t border-[var(--color-border-subtle)] flex items-center justify-between gap-2">
                  <Link href={`/trainer/sessions/${session.id}`} className="flex-1">
                    <Button
                      size="sm"
                      variant="outline"
                      className="w-full text-xs"
                      rightIcon={isRtl ? <ArrowLeft className="w-3.5 h-3.5" /> : <ArrowRight className="w-3.5 h-3.5" />}
                    >
                      {isRtl ? 'دليل التدريس' : 'Pedagogy Guide'}
                    </Button>
                  </Link>

                  <Link href={`/trainer/presentation/${session.id}`}>
                    <Button
                      size="sm"
                      variant={session.status === 'active' ? 'primary' : 'ghost'}
                      className="text-xs"
                      title={isRtl ? 'بدء العرض التقديمي' : 'Launch Presentation'}
                    >
                      <MonitorPlay className="w-4 h-4" />
                    </Button>
                  </Link>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* 3. COHORT ENGAGEMENT MONITOR (Live Students Table) */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-xl sm:text-2xl font-black text-[var(--color-text)]">
                {isRtl ? 'متابعة تفاعل المتدربين (Cohort Health)' : 'Active Trainees Monitor'}
              </h2>
              <p className="text-xs text-[var(--color-text-muted)]">
                {isRtl
                  ? 'مستويات إنجاز الطلاب للأنشطة والمهام العملية في الجلسة النشطة الحالية.'
                  : 'Live student milestones, activity submissions, and support flags.'}
              </p>
            </div>

            <div className="flex items-center gap-2">
              <Button
                size="sm"
                variant="outline"
                leftIcon={<Plus className="w-4 h-4 text-[var(--color-primary)]" />}
                onClick={() => setIsAddStudentModalOpen(true)}
              >
                {isRtl ? 'إضافة متدرب' : 'Add Trainee'}
              </Button>

              <Link href="/trainer/learners">
                <Button size="sm" variant="ghost">
                  {isRtl ? 'عرض الكل' : 'View Roster'}
                </Button>
              </Link>
            </div>
          </div>

          <Card className="overflow-hidden border border-[var(--color-border)]">
            <div className="overflow-x-auto">
              <table className="w-full text-start text-xs">
                <thead>
                  <tr className="bg-[var(--color-surface-sunken)] border-b border-[var(--color-border)] text-[var(--color-text-muted)] font-mono">
                    <th className="py-3 px-4 text-start font-bold">{isRtl ? 'المتدرب' : 'Trainee'}</th>
                    <th className="py-3 px-4 text-start font-bold">{isRtl ? 'الجلسة' : 'Session'}</th>
                    <th className="py-3 px-4 text-start font-bold">{isRtl ? 'نسبة الإنجاز' : 'Progress'}</th>
                    <th className="py-3 px-4 text-start font-bold">{isRtl ? 'الحالة' : 'Status'}</th>
                    <th className="py-3 px-4 text-start font-bold">{isRtl ? 'آخر نشاط' : 'Last Active'}</th>
                    <th className="py-3 px-4 text-start font-bold">{isRtl ? 'ملاحظات المدرب' : 'Notes'}</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[var(--color-border-subtle)]">
                  {(activeSession?.students || []).map((std) => (
                    <tr key={std.id} className="hover:bg-[var(--color-surface-sunken)]/50 transition-colors">
                      <td className="py-3 px-4 font-bold text-[var(--color-text)]">
                        <div className="flex items-center gap-2">
                          <div className="w-7 h-7 rounded-full bg-[var(--color-primary-subtle)] text-[var(--color-primary)] font-bold flex items-center justify-center text-xs">
                            {std.name.slice(0, 1)}
                          </div>
                          <div>
                            <p className="font-bold">{std.name}</p>
                            {std.email && <p className="text-[10px] text-[var(--color-text-subtle)] font-mono">{std.email}</p>}
                          </div>
                        </div>
                      </td>

                      <td className="py-3 px-4 font-mono text-[var(--color-text-muted)]">
                        Session {activeSession ? String(activeSession.number).padStart(2, '0') : '01'}
                      </td>

                      <td className="py-3 px-4">
                        <div className="flex items-center gap-2">
                          <div className="w-20 bg-[var(--color-surface-sunken)] h-2 rounded-full overflow-hidden border border-[var(--color-border)]">
                            <div
                              className="bg-[var(--color-primary)] h-full transition-all"
                              style={{ width: `${std.progressPercent}%` }}
                            />
                          </div>
                          <span className="font-mono font-bold text-[var(--color-text)]">{std.progressPercent}%</span>
                        </div>
                      </td>

                      <td className="py-3 px-4">
                        <span
                          className={`inline-flex items-center gap-1 px-2 py-0.5 rounded text-[11px] font-bold ${
                            std.status === 'completed'
                              ? 'bg-green-500/15 text-green-600'
                              : std.status === 'needs-help'
                              ? 'bg-red-500/15 text-red-600'
                              : 'bg-blue-500/15 text-blue-600'
                          }`}
                        >
                          {std.status === 'completed' ? (
                            <>
                              <CheckCircle2 className="w-3 h-3" />
                              <span>{isRtl ? 'مكتمل' : 'Done'}</span>
                            </>
                          ) : std.status === 'needs-help' ? (
                            <>
                              <HelpCircle className="w-3 h-3" />
                              <span>{isRtl ? 'يحتاج مساعدة' : 'Needs Help'}</span>
                            </>
                          ) : (
                            <>
                              <Clock className="w-3 h-3" />
                              <span>{isRtl ? 'نشط' : 'Active'}</span>
                            </>
                          )}
                        </span>
                      </td>

                      <td className="py-3 px-4 font-mono text-[var(--color-text-subtle)] text-[11px]">
                        {std.lastActiveAt || 'الآن'}
                      </td>

                      <td className="py-3 px-4 text-xs text-[var(--color-text-muted)] max-w-xs truncate">
                        {std.notes || (isRtl ? 'لا توجد ملاحظات خاصة' : 'No notes')}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>
        </div>

        {/* 4. FAST ACTION TOOLKIT */}
        <div className="p-6 rounded-3xl bg-[var(--color-surface-sunken)] border border-[var(--color-border)] flex flex-wrap items-center justify-between gap-4">
          <div className="space-y-1">
            <h3 className="text-sm font-bold text-[var(--color-text)]">
              {isRtl ? 'إجراءات سريعة وإدارة التخزين المحلي' : 'Quick Actions & Persistence'}
            </h3>
            <p className="text-xs text-[var(--color-text-muted)]">
              {isRtl
                ? 'يمكنك إعادة تعيين الجلسات والبيانات للافتراضي في حال الرغبة ببدء فوج تدريبي جديد.'
                : 'Reset state to defaults when onboarding a new workshop cohort.'}
            </p>
          </div>

          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              size="sm"
              leftIcon={<RotateCcw className="w-4 h-4 text-amber-500" />}
              onClick={() => {
                if (confirm(isRtl ? 'هل تريد استعادة بيانات الجلسات الافتراضية؟' : 'Reset sessions to default?')) {
                  resetSessionsToDefault();
                }
              }}
            >
              {isRtl ? 'استعادة الافتراضي' : 'Reset Data'}
            </Button>

            <Link href="/trainer/curriculum">
              <Button variant="outline" size="sm" leftIcon={<Layers className="w-4 h-4" />}>
                {isRtl ? 'خطة المنهج الكامل' : 'Curriculum Blueprint'}
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Add Student Modal */}
      {isAddStudentModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-xs flex items-center justify-center p-4">
          <Card className="w-full max-w-md p-6 space-y-4 shadow-2xl">
            <div className="flex items-center justify-between border-b border-[var(--color-border)] pb-3">
              <h3 className="text-base font-bold text-[var(--color-text)]">
                {isRtl ? 'إضافة متدرب جديد للجلسة' : 'Add Trainee to Session'}
              </h3>
              <button
                type="button"
                onClick={() => setIsAddStudentModalOpen(false)}
                className="text-[var(--color-text-muted)] hover:text-[var(--color-text)] cursor-pointer"
              >
                ✕
              </button>
            </div>

            <form onSubmit={handleAddStudent} className="space-y-4">
              <div className="space-y-1 text-start">
                <label className="text-xs font-bold text-[var(--color-text)]">
                  {isRtl ? 'اسم المتدرب' : 'Student Name'}
                </label>
                <input
                  type="text"
                  value={newStudentName}
                  onChange={(e) => setNewStudentName(e.target.value)}
                  placeholder="مثال: خالد الشهري"
                  className="w-full px-3 py-2 rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] text-sm focus:outline-none focus:border-[var(--color-primary)]"
                  required
                />
              </div>

              <div className="space-y-1 text-start">
                <label className="text-xs font-bold text-[var(--color-text)]">
                  {isRtl ? 'البريد الإلكتروني (اختياري)' : 'Email (Optional)'}
                </label>
                <input
                  type="email"
                  value={newStudentEmail}
                  onChange={(e) => setNewStudentEmail(e.target.value)}
                  placeholder="student@example.com"
                  className="w-full px-3 py-2 rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] text-sm focus:outline-none focus:border-[var(--color-primary)]"
                />
              </div>

              <div className="space-y-1 text-start">
                <label className="text-xs font-bold text-[var(--color-text)]">
                  {isRtl ? 'إضافة إلى الجلسة' : 'Assign to Session'}
                </label>
                <select
                  value={targetSessionForStudent}
                  onChange={(e) => setTargetSessionForStudent(e.target.value)}
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
                  onClick={() => setIsAddStudentModalOpen(false)}
                >
                  {isRtl ? 'إلغاء' : 'Cancel'}
                </Button>
                <Button type="submit" variant="primary" size="sm">
                  {isRtl ? 'حفظ وإضافة' : 'Save Trainee'}
                </Button>
              </div>
            </form>
          </Card>
        </div>
      )}
    </TrainerShell>
  );
}
