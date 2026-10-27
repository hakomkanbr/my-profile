'use client';

import React, { useState, useEffect, useMemo } from 'react';
import {
  LearningShell,
  PageContainer,
  PageHeader,
  Card,
  Badge,
  Button,
  Input,
  Textarea,
  Modal,
  ProjectCard,
  WhatsAppActionFeedback,
} from '@/components';
import { ALL_PROJECTS } from '@/content';
import { usePreferencesStore, useProgressStore } from '@/store';
import { getLocalizedText } from '@/lib/utils';
import { getStudentName, saveStudentName } from '@/lib/student-storage';
import {
  buildProjectSubmissionMessage,
  getCurrentPageUrl,
  openWhatsAppChat,
} from '@/lib/whatsapp';
import {
  Sparkles,
  Layers,
  CheckCircle2,
  Circle,
  Copy,
  Check,
  ExternalLink,
  GitBranch,
  Globe,
  Search,
  ArrowRight,
  ArrowLeft,
  Code2,
  CheckSquare,
  Send,
  Clock,
  Trophy,
  Terminal,
  FileCode,
  MessageCircle,
  Save,
  User,
} from 'lucide-react';

type WorkshopTabId =
  | 'overview'
  | 'milestones'
  | 'ai-copilot'
  | 'starter-code'
  | 'submission';

interface ProjectSubmission {
  liveUrl: string;
  githubUrl: string;
  notes: string;
  submittedAt?: string;
}

export default function WebCreatorProjectsPage() {
  const { language } = usePreferencesStore();
  const isRtl = language === 'ar';

  const { progress, completeProject, toggleProject, saveNote } =
    useProgressStore();

  // Active filters and query
  const [selectedLevel, setSelectedLevel] = useState<string>('all');
  const [selectedStatus, setSelectedStatus] = useState<
    'all' | 'completed' | 'in_progress'
  >('all');
  const [searchQuery, setSearchQuery] = useState('');

  // Workshop modal state
  const [selectedProjectId, setSelectedProjectId] = useState<string | null>(
    null
  );
  const [activeWorkshopTab, setActiveWorkshopTab] =
    useState<WorkshopTabId>('overview');

  // Copy feedback state
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  // Student name
  const [studentName, setStudentName] = useState('');

  // Local storage state for task checkboxes per project
  const [checkedTasks, setCheckedTasks] = useState<Record<string, string[]>>(
    {}
  );

  // Submissions state per project
  const [submissions, setSubmissions] = useState<
    Record<string, ProjectSubmission>
  >({});
  const [submissionFeedback, setSubmissionFeedback] = useState<string | null>(
    null
  );
  const [whatsAppProjectMsg, setWhatsAppProjectMsg] = useState<string | null>(
    null
  );

  // Load saved task checks and submissions from localStorage on mount
  useEffect(() => {
    const timer = setTimeout(() => {
      try {
        setStudentName(getStudentName());
        const savedTasks = window.localStorage.getItem(
          'web_creator_ai_project_tasks_v1'
        );
        if (savedTasks) {
          setCheckedTasks(JSON.parse(savedTasks));
        }
        const savedSubmissions = window.localStorage.getItem(
          'web_creator_ai_project_submissions_v1'
        );
        if (savedSubmissions) {
          setSubmissions(JSON.parse(savedSubmissions));
        }

        // Support opening project directly from URL (?project=PRJ-01)
        const params = new URLSearchParams(window.location.search);
        const urlProj = params.get('project');
        if (urlProj && ALL_PROJECTS.some((p) => p.id === urlProj)) {
          setSelectedProjectId(urlProj);
        }
      } catch (e) {
        console.error('Failed to load project state from localStorage', e);
      }
    }, 0);

    return () => clearTimeout(timer);
  }, []);

  // Sync checked tasks to localStorage
  const handleToggleTask = (projectId: string, taskId: string) => {
    setCheckedTasks((prev) => {
      const currentList = prev[projectId] || [];
      const updated = currentList.includes(taskId)
        ? currentList.filter((id) => id !== taskId)
        : [...currentList, taskId];

      const nextState = { ...prev, [projectId]: updated };
      if (typeof window !== 'undefined') {
        window.localStorage.setItem(
          'web_creator_ai_project_tasks_v1',
          JSON.stringify(nextState)
        );
      }
      return nextState;
    });
  };

  // Copy helper
  const handleCopy = (text: string, key: string) => {
    if (typeof navigator !== 'undefined') {
      navigator.clipboard.writeText(text);
      setCopiedKey(key);
      setTimeout(() => setCopiedKey(null), 2200);
    }
  };

  // Submissions form handlers
  const handleSubmissionChange = (
    projectId: string,
    field: keyof ProjectSubmission,
    val: string
  ) => {
    setSubmissions((prev) => {
      const current = prev[projectId] || {
        liveUrl: '',
        githubUrl: '',
        notes: '',
      };
      return {
        ...prev,
        [projectId]: { ...current, [field]: val },
      };
    });
  };

  const persistProjectSubmissionLocally = (projectId: string) => {
    const current = submissions[projectId] || {
      liveUrl: '',
      githubUrl: '',
      notes: '',
    };
    const finalized: ProjectSubmission = {
      ...current,
      submittedAt: new Date().toISOString(),
    };

    const nextSubmissions = {
      ...submissions,
      [projectId]: finalized,
    };

    setSubmissions(nextSubmissions);

    if (typeof window !== 'undefined') {
      window.localStorage.setItem(
        'web_creator_ai_project_submissions_v1',
        JSON.stringify(nextSubmissions)
      );
    }

    saveNote(
      projectId,
      'project',
      JSON.stringify({
        liveUrl: finalized.liveUrl,
        githubUrl: finalized.githubUrl,
        notes: finalized.notes,
        submittedAt: finalized.submittedAt,
        checkedTasksCount: (checkedTasks[projectId] || []).length,
      })
    );

    completeProject(projectId);
    return finalized;
  };

  const handleSaveSubmissionLocally = (projectId: string) => {
    persistProjectSubmissionLocally(projectId);
    setSubmissionFeedback(
      isRtl
        ? 'تم حفظ بيانات المشروع في جهازك بنجاح ✓'
        : 'Project deliverables saved on your device ✓'
    );
    setTimeout(() => setSubmissionFeedback(null), 3500);
  };

  const handleSendSubmissionViaWhatsApp = (projectId: string) => {
    const proj = ALL_PROJECTS.find((p) => p.id === projectId);
    if (!proj) return;

    const finalized = persistProjectSubmissionLocally(projectId);
    const totalTasks = proj.milestones.reduce(
      (sum, ms) => sum + ms.tasks.length,
      0
    );
    const completedCount = (checkedTasks[projectId] || []).length;

    const message = buildProjectSubmissionMessage({
      projectCode: proj.code,
      projectTitle: getLocalizedText(proj.title, 'ar'),
      studentName,
      liveUrl: finalized.liveUrl,
      githubUrl: finalized.githubUrl,
      notes: finalized.notes,
      completedTasksCount: completedCount,
      totalTasksCount: totalTasks,
      pageUrl: getCurrentPageUrl(`/web-creator-ai/projects?project=${proj.id}`),
    });

    setWhatsAppProjectMsg(message);
    openWhatsAppChat(message);
  };

  // Filtered projects
  const filteredProjects = useMemo(() => {
    return ALL_PROJECTS.filter((proj) => {
      const isCompleted = progress.completedProjects.includes(proj.id);

      if (selectedLevel !== 'all' && proj.level !== selectedLevel) {
        return false;
      }

      if (selectedStatus === 'completed' && !isCompleted) return false;
      if (selectedStatus === 'in_progress' && isCompleted) return false;

      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const titleAr = proj.title.ar.toLowerCase();
        const titleEn = proj.title.en.toLowerCase();
        const code = proj.code.toLowerCase();
        const techMatch = proj.techStack.some((t) =>
          t.toLowerCase().includes(q)
        );
        if (
          !titleAr.includes(q) &&
          !titleEn.includes(q) &&
          !code.includes(q) &&
          !techMatch
        ) {
          return false;
        }
      }

      return true;
    });
  }, [selectedLevel, selectedStatus, searchQuery, progress.completedProjects]);

  const activeProject =
    ALL_PROJECTS.find((p) => p.id === selectedProjectId) || null;
  const activeSubmission = activeProject
    ? submissions[activeProject.id] || {
        liveUrl: '',
        githubUrl: '',
        notes: '',
      }
    : { liveUrl: '', githubUrl: '', notes: '' };
  const activeCheckedList = activeProject
    ? checkedTasks[activeProject.id] || []
    : [];

  const activeTotalTasks = activeProject
    ? activeProject.milestones.reduce((sum, ms) => sum + ms.tasks.length, 0)
    : 0;

  const activeCompletionPercentage =
    activeTotalTasks > 0
      ? Math.round((activeCheckedList.length / activeTotalTasks) * 100)
      : 0;

  const totalProjectsCount = ALL_PROJECTS.length;
  const completedProjectsCount = progress.completedProjects.length;
  const globalProgressPercentage =
    totalProjectsCount > 0
      ? Math.round((completedProjectsCount / totalProjectsCount) * 100)
      : 0;

  return (
    <LearningShell
      headerTitle={isRtl ? 'المشاريع التطبيقية' : 'Hands-On Projects'}
    >
      <PageContainer>
        <PageHeader
          title={
            isRtl ? 'ورش المشاريع التطبيقية' : 'Hands-On Project Workshops'
          }
          subtitle={
            isRtl
              ? 'طبّق ما تعلمته في الجلسات من خلال بناء مشاريع ويب حقيقية خطوة بخطوة، ثم أرسل مشروعك عبر واتساب للمراجعة.'
              : 'Apply what you learned in the sessions by building real web projects step by step, then submit your work via WhatsApp for review.'
          }
          breadcrumbs={[
            { id: '1', label: isRtl ? 'الرئيسية' : 'Home', href: '/' },
            { id: '2', label: 'WEB CREATOR AI', href: '/web-creator-ai' },
            {
              id: '3',
              label: isRtl ? 'المشاريع التطبيقية' : 'Applied Projects',
              isCurrent: true,
            },
          ]}
        />

        <div className="space-y-8 pb-16 text-start">
          {/* 1. PROGRESS & STATS BANNER */}
          <div className="p-6 sm:p-8 rounded-3xl bg-[var(--color-surface)] border border-[var(--color-border)] shadow-xs relative overflow-hidden flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="space-y-2 max-w-xl">
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-0.5 rounded-full text-xs font-mono font-bold bg-[var(--color-primary-subtle)] text-[var(--color-primary)]">
                  {isRtl ? 'ورش العمل التطبيقية' : 'PROJECT WORKSHOPS'}
                </span>
                <span className="text-xs font-medium text-[var(--color-text-subtle)]">
                  {completedProjectsCount} {isRtl ? 'من' : 'of'}{' '}
                  {totalProjectsCount}{' '}
                  {isRtl ? 'مشاريع مكتملة' : 'projects finished'}
                </span>
              </div>

              <h2 className="text-xl sm:text-2xl font-black text-[var(--color-text)]">
                {isRtl
                  ? 'ابنِ مشاريع حقيقية وأضفها لمعرض أعمالك'
                  : 'Build real projects for your portfolio'}
              </h2>

              <p className="text-xs sm:text-body-sm text-[var(--color-text-muted)] leading-relaxed">
                {isRtl
                  ? 'افتح أي مشروع لاستعراض قائمة المهام، قالب الكود، وموجهات الذكاء الاصطناعي المساعدة، ثم سلّم رابط مشروعك عبر واتساب.'
                  : 'Open any project to view the task checklist, starter code, and AI prompts, then submit your project link via WhatsApp.'}
              </p>
            </div>

            <div className="flex items-center gap-5 p-4 rounded-2xl bg-[var(--color-surface-sunken)] border border-[var(--color-border-subtle)] shrink-0">
              <div className="text-center space-y-0.5">
                <span className="text-3xl font-mono font-black text-[var(--color-primary)]">
                  {globalProgressPercentage}%
                </span>
                <span className="text-[11px] text-[var(--color-text-subtle)] font-medium block">
                  {isRtl ? 'نسبة الإنجاز الكلية' : 'Overall Completion'}
                </span>
              </div>

              <div className="w-32 space-y-2">
                <div className="w-full h-2.5 rounded-full bg-[var(--color-border)] overflow-hidden">
                  <div
                    className="h-full bg-linear-to-r from-[var(--color-primary)] to-[var(--color-secondary)] transition-all duration-500 rounded-full"
                    style={{ width: `${globalProgressPercentage}%` }}
                  />
                </div>
                <span className="text-[10px] font-mono text-[var(--color-text-muted)] block text-end">
                  {completedProjectsCount}/{totalProjectsCount}{' '}
                  {isRtl ? 'مشاريع' : 'done'}
                </span>
              </div>
            </div>
          </div>

          {/* 2. CONTROLS, SEARCH & FILTERS */}
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
            <div className="flex flex-wrap items-center gap-1.5 p-1 rounded-xl bg-[var(--color-surface-sunken)] border border-[var(--color-border-subtle)]">
              {[
                { key: 'all', label: isRtl ? 'كل المستويات' : 'All Levels' },
                { key: 'Beginner', label: isRtl ? 'تأسيسي' : 'Beginner' },
                { key: 'Intermediate', label: isRtl ? 'متوسط' : 'Intermediate' },
                { key: 'Advanced', label: isRtl ? 'متقدم' : 'Advanced' },
                { key: 'Capstone', label: isRtl ? 'المشروع النهائي' : 'Capstone' },
              ].map((tab) => (
                <button
                  key={tab.key}
                  type="button"
                  onClick={() => setSelectedLevel(tab.key)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                    selectedLevel === tab.key
                      ? 'bg-[var(--color-surface)] text-[var(--color-primary)] shadow-xs border border-[var(--color-border)]'
                      : 'text-[var(--color-text-muted)] hover:text-[var(--color-text)]'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <div className="flex items-center gap-1 p-1 rounded-xl bg-[var(--color-surface-sunken)] border border-[var(--color-border-subtle)] text-xs">
                <button
                  type="button"
                  onClick={() => setSelectedStatus('all')}
                  className={`px-2.5 py-1 rounded-lg font-medium transition-colors ${
                    selectedStatus === 'all'
                      ? 'bg-[var(--color-surface)] text-[var(--color-text)] font-bold shadow-xs'
                      : 'text-[var(--color-text-muted)]'
                  }`}
                >
                  {isRtl ? 'الكل' : 'All'}
                </button>
                <button
                  type="button"
                  onClick={() => setSelectedStatus('in_progress')}
                  className={`px-2.5 py-1 rounded-lg font-medium transition-colors ${
                    selectedStatus === 'in_progress'
                      ? 'bg-[var(--color-surface)] text-[var(--color-primary)] font-bold shadow-xs'
                      : 'text-[var(--color-text-muted)]'
                  }`}
                >
                  {isRtl ? 'قيد التنفيذ' : 'In Progress'}
                </button>
                <button
                  type="button"
                  onClick={() => setSelectedStatus('completed')}
                  className={`px-2.5 py-1 rounded-lg font-medium transition-colors ${
                    selectedStatus === 'completed'
                      ? 'bg-[var(--color-surface)] text-green-600 font-bold shadow-xs'
                      : 'text-[var(--color-text-muted)]'
                  }`}
                >
                  {isRtl ? 'مكتملة' : 'Completed'}
                </button>
              </div>

              <div className="relative min-w-[220px] max-w-xs">
                <Search className="w-3.5 h-3.5 absolute start-3 top-1/2 -translate-y-1/2 text-[var(--color-text-subtle)]" />
                <input
                  type="text"
                  placeholder={
                    isRtl
                      ? 'بحث باسم المشروع أو التقنية...'
                      : 'Search by name or tech...'
                  }
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full ps-8 pe-3 py-1.5 text-xs rounded-xl bg-[var(--color-surface)] border border-[var(--color-border)] focus:outline-hidden focus:border-[var(--color-primary)] transition-colors text-[var(--color-text)]"
                />
              </div>
            </div>
          </div>

          {/* 3. PROJECTS GRID */}
          {filteredProjects.length === 0 ? (
            <Card className="p-12 text-center space-y-4">
              <Layers className="w-12 h-12 mx-auto text-[var(--color-text-subtle)] stroke-1" />
              <div className="space-y-1">
                <h3 className="text-base font-bold text-[var(--color-text)]">
                  {isRtl
                    ? 'لا توجد مشاريع تطابق المعايير المحددة'
                    : 'No matching projects found'}
                </h3>
                <p className="text-xs text-[var(--color-text-muted)]">
                  {isRtl
                    ? 'جرب تغيير خيارات الفلترة أو مسح عبارة البحث.'
                    : 'Try changing your filter options or clearing the search.'}
                </p>
              </div>
              <Button
                size="sm"
                variant="outline"
                onClick={() => {
                  setSelectedLevel('all');
                  setSelectedStatus('all');
                  setSearchQuery('');
                }}
              >
                {isRtl ? 'إعادة ضبط الفلاتر' : 'Reset Filters'}
              </Button>
            </Card>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProjects.map((proj) => {
                const isCompleted = progress.completedProjects.includes(proj.id);
                const projectTasks = proj.milestones.reduce(
                  (acc, m) => acc + m.tasks.length,
                  0
                );
                const checkedCount = (checkedTasks[proj.id] || []).length;
                const submission = submissions[proj.id];

                return (
                  <div
                    key={proj.id}
                    className="relative flex flex-col justify-between"
                  >
                    <ProjectCard
                      code={proj.code}
                      title={getLocalizedText(proj.title, language)}
                      tagline={getLocalizedText(proj.tagline, language)}
                      level={proj.level}
                      targetOutput={getLocalizedText(
                        proj.targetOutput,
                        language
                      )}
                      techStack={proj.techStack}
                      isCompleted={isCompleted}
                      completedTasksCount={checkedCount}
                      totalTasksCount={projectTasks}
                      onOpenWorkshop={() => {
                        setSelectedProjectId(proj.id);
                        setActiveWorkshopTab('overview');
                        setWhatsAppProjectMsg(null);
                      }}
                      onToggleComplete={() => toggleProject(proj.id)}
                    />

                    {submission?.liveUrl && (
                      <div className="mt-2 px-3 py-1.5 rounded-lg bg-[var(--color-surface-sunken)] border border-[var(--color-border-subtle)] flex items-center justify-between text-xs">
                        <span className="text-[11px] text-[var(--color-text-subtle)] flex items-center gap-1 font-mono">
                          <Globe className="w-3.5 h-3.5 text-green-600" />
                          <span>{isRtl ? 'رابط النشر الحي' : 'Live Demo'}</span>
                        </span>
                        <a
                          href={submission.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-bold text-[var(--color-primary)] hover:underline flex items-center gap-0.5 text-xs"
                        >
                          <span>{isRtl ? 'زيارة الموقع' : 'Open Demo'}</span>
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          )}
        </div>

        {/* 4. COMPREHENSIVE INTERACTIVE PROJECT WORKSHOP MODAL */}
        {activeProject && (
          <Modal
            isOpen={Boolean(activeProject)}
            onClose={() => setSelectedProjectId(null)}
            size="xl"
            className="max-h-[90vh] flex flex-col overflow-hidden p-0"
          >
            {/* Modal Header */}
            <div className="p-6 border-b border-[var(--color-border)] bg-[var(--color-surface)] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="space-y-1.5 text-start">
                <div className="flex items-center gap-2">
                  <span className="font-mono text-xs font-bold text-[var(--color-primary)] px-2.5 py-0.5 rounded-md bg-[var(--color-primary-subtle)]">
                    {activeProject.code}
                  </span>
                  <Badge
                    variant={
                      activeProject.level === 'Capstone' ? 'accent' : 'secondary'
                    }
                    size="sm"
                  >
                    {activeProject.level}
                  </Badge>
                  {activeProject.estimatedHours && (
                    <span className="text-xs font-mono text-[var(--color-text-subtle)] flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      <span>
                        {activeProject.estimatedHours}{' '}
                        {isRtl ? 'ساعات تقديرية' : 'hours'}
                      </span>
                    </span>
                  )}
                </div>

                <h2 className="text-xl sm:text-2xl font-bold text-[var(--color-text)]">
                  {getLocalizedText(activeProject.title, language)}
                </h2>
                <p className="text-xs sm:text-body-sm text-[var(--color-text-muted)]">
                  {getLocalizedText(activeProject.tagline, language)}
                </p>
              </div>

              <div className="flex items-center gap-2 shrink-0">
                <Button
                  size="sm"
                  variant={
                    progress.completedProjects.includes(activeProject.id)
                      ? 'primary'
                      : 'outline'
                  }
                  onClick={() => toggleProject(activeProject.id)}
                  leftIcon={
                    progress.completedProjects.includes(activeProject.id) ? (
                      <CheckCircle2 className="w-4 h-4 text-white" />
                    ) : (
                      <Circle className="w-4 h-4" />
                    )
                  }
                  className="text-xs font-bold"
                >
                  {progress.completedProjects.includes(activeProject.id)
                    ? isRtl
                      ? 'تم اعتماد الإنجاز ✓'
                      : 'Completed ✓'
                    : isRtl
                      ? 'تحديد كمكتمل'
                      : 'Mark as Done'}
                </Button>
              </div>
            </div>

            {/* Modal Tabs Navigation */}
            <div className="px-6 border-b border-[var(--color-border)] bg-[var(--color-surface-sunken)] flex items-center gap-1 overflow-x-auto text-xs py-2">
              {[
                {
                  id: 'overview',
                  label: isRtl ? 'نظرة عامة ومخرجات' : 'Overview & Goals',
                  icon: Layers,
                },
                {
                  id: 'milestones',
                  label: `${isRtl ? 'قائمة المهام والمراحل' : 'Milestones'} (${activeCheckedList.length}/${activeTotalTasks})`,
                  icon: CheckSquare,
                },
                {
                  id: 'ai-copilot',
                  label: isRtl
                    ? 'مساعد الذكاء الاصطناعي'
                    : 'AI Copilot Prompts',
                  icon: Sparkles,
                },
                {
                  id: 'starter-code',
                  label: isRtl
                    ? 'كود البداية والهيكلية'
                    : 'Starter Architecture',
                  icon: Code2,
                },
                {
                  id: 'submission',
                  label: isRtl
                    ? 'تسليم المشروع عبر واتساب'
                    : 'Submit via WhatsApp',
                  icon: Send,
                },
              ].map((tab) => {
                const Icon = tab.icon;
                const isActive = activeWorkshopTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    type="button"
                    onClick={() =>
                      setActiveWorkshopTab(tab.id as WorkshopTabId)
                    }
                    className={`flex items-center gap-1.5 px-3 py-2 rounded-xl font-bold whitespace-nowrap transition-all cursor-pointer ${
                      isActive
                        ? 'bg-[var(--color-surface)] text-[var(--color-primary)] shadow-xs border border-[var(--color-border)]'
                        : 'text-[var(--color-text-muted)] hover:text-[var(--color-text)]'
                    }`}
                  >
                    <Icon className="w-3.5 h-3.5" />
                    <span>{tab.label}</span>
                  </button>
                );
              })}
            </div>

            {/* Modal Body */}
            <div className="p-6 overflow-y-auto max-h-[65vh] space-y-6 text-start">
              {/* TAB 1: OVERVIEW */}
              {activeWorkshopTab === 'overview' && (
                <div className="space-y-6">
                  <div className="space-y-2">
                    <h4 className="text-xs font-bold text-[var(--color-primary)] uppercase tracking-wider">
                      {isRtl ? 'وصف الورشة التطبيقية' : 'Workshop Description'}
                    </h4>
                    <p className="text-body-sm text-[var(--color-text)] leading-relaxed bg-[var(--color-surface-sunken)] p-4 rounded-2xl border border-[var(--color-border-subtle)]">
                      {getLocalizedText(activeProject.description, language)}
                    </p>
                  </div>

                  <div className="p-4 rounded-2xl bg-blue-50/50 dark:bg-blue-950/20 border border-blue-200/60 dark:border-blue-800/40 space-y-1">
                    <span className="text-caption font-bold text-blue-700 dark:text-blue-400 block">
                      🎯{' '}
                      {isRtl
                        ? 'المخرجات الحقيقية المستهدفة:'
                        : 'Target Concrete Output:'}
                    </span>
                    <p className="text-xs sm:text-body-sm text-blue-900 dark:text-blue-200 leading-relaxed font-medium">
                      {getLocalizedText(activeProject.targetOutput, language)}
                    </p>
                  </div>

                  <div className="space-y-2">
                    <h4 className="text-xs font-bold text-[var(--color-text-subtle)]">
                      {isRtl
                        ? 'التقنيات وحزم العمل المستخدمة'
                        : 'Tech Stack & Libraries'}
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {activeProject.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 text-xs font-mono font-bold rounded-lg bg-[var(--color-surface-sunken)] border border-[var(--color-border)] text-[var(--color-text)]"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {activeProject.aiToolsRecommended?.length > 0 && (
                    <div className="space-y-2">
                      <h4 className="text-xs font-bold text-[var(--color-text-subtle)] flex items-center gap-1.5">
                        <Sparkles className="w-3.5 h-3.5 text-[var(--color-primary)]" />
                        <span>
                          {isRtl
                            ? 'أدوات الذكاء الاصطناعي الموصى بها لهذا المشروع'
                            : 'Recommended AI Tooling'}
                        </span>
                      </h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                        {activeProject.aiToolsRecommended.map((tool, idx) => (
                          <div
                            key={idx}
                            className="p-3 rounded-xl bg-[var(--color-surface-sunken)] border border-[var(--color-border-subtle)] text-xs text-[var(--color-text)] font-medium flex items-center gap-2"
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-primary)] shrink-0" />
                            <span>{tool}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {activeProject.tipsForSuccess?.length > 0 && (
                    <div className="space-y-2 pt-2">
                      <h4 className="text-xs font-bold text-[var(--color-text-subtle)]">
                        💡{' '}
                        {isRtl
                          ? 'توجيهات عملية لضمان نجاح المشروع'
                          : 'Practical Tips for Success'}
                      </h4>
                      <ul className="space-y-2">
                        {activeProject.tipsForSuccess.map((tip, idx) => (
                          <li
                            key={idx}
                            className="text-xs text-[var(--color-text-muted)] flex items-start gap-2 leading-relaxed"
                          >
                            <span className="text-[var(--color-primary)] font-bold shrink-0">
                              •
                            </span>
                            <span>{getLocalizedText(tip, language)}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  <div className="pt-4 flex justify-end">
                    <Button
                      size="sm"
                      variant="primary"
                      onClick={() => setActiveWorkshopTab('milestones')}
                      rightIcon={
                        isRtl ? (
                          <ArrowLeft className="w-3.5 h-3.5" />
                        ) : (
                          <ArrowRight className="w-3.5 h-3.5" />
                        )
                      }
                    >
                      {isRtl
                        ? 'الانتقال لقائمة المهام والمراحل ←'
                        : 'Proceed to Tasks Checklist →'}
                    </Button>
                  </div>
                </div>
              )}

              {/* TAB 2: MILESTONES & INTERACTIVE CHECKLIST */}
              {activeWorkshopTab === 'milestones' && (
                <div className="space-y-6">
                  <div className="p-4 rounded-2xl bg-[var(--color-surface-sunken)] border border-[var(--color-border)] flex items-center justify-between gap-4">
                    <div className="space-y-1">
                      <span className="text-xs font-bold text-[var(--color-text)]">
                        {isRtl
                          ? 'نسبة إنجاز مهام المشروع'
                          : 'Task Completion Status'}
                      </span>
                      <p className="text-[11px] text-[var(--color-text-muted)]">
                        {isRtl
                          ? 'حدد كل مهمة تنجزها لحفظ تقدمك تلقائياً في المتصفح.'
                          : 'Check off tasks as you finish them; your state persists automatically.'}
                      </p>
                    </div>

                    <div className="text-end shrink-0 space-y-1">
                      <span className="text-xl font-mono font-black text-[var(--color-primary)]">
                        {activeCompletionPercentage}%
                      </span>
                      <div className="w-24 h-2 rounded-full bg-[var(--color-border)] overflow-hidden">
                        <div
                          className="h-full bg-green-500 rounded-full transition-all duration-300"
                          style={{ width: `${activeCompletionPercentage}%` }}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="space-y-6">
                    {activeProject.milestones.map((milestone, mIdx) => {
                      const msTasks = milestone.tasks || [];
                      const completedInMs = msTasks.filter((t) =>
                        activeCheckedList.includes(t.id)
                      ).length;

                      return (
                        <div
                          key={milestone.id}
                          className="p-5 rounded-2xl bg-[var(--color-surface)] border border-[var(--color-border)] space-y-4"
                        >
                          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[var(--color-border-subtle)] pb-3">
                            <div>
                              <div className="flex items-center gap-2">
                                <span className="font-mono text-[11px] font-bold text-[var(--color-secondary)]">
                                  MILESTONE {String(mIdx + 1).padStart(2, '0')}
                                </span>
                                <span className="text-xs font-bold text-[var(--color-text)]">
                                  {getLocalizedText(milestone.title, language)}
                                </span>
                              </div>
                              <p className="text-[11px] text-[var(--color-text-muted)] mt-0.5">
                                {getLocalizedText(
                                  milestone.description,
                                  language
                                )}
                              </p>
                            </div>

                            <span className="text-xs font-mono font-bold text-[var(--color-text-subtle)] self-start sm:self-center">
                              {completedInMs}/{msTasks.length}{' '}
                              {isRtl ? 'مهام' : 'tasks'}
                            </span>
                          </div>

                          <div className="space-y-2">
                            {msTasks.map((task) => {
                              const isChecked = activeCheckedList.includes(
                                task.id
                              );

                              return (
                                <div
                                  key={task.id}
                                  onClick={() =>
                                    handleToggleTask(activeProject.id, task.id)
                                  }
                                  className={`p-3 rounded-xl border transition-all cursor-pointer flex items-center justify-between gap-3 select-none ${
                                    isChecked
                                      ? 'bg-green-500/5 border-green-500/30 text-slate-800 dark:text-slate-200'
                                      : 'bg-[var(--color-surface-sunken)] border-[var(--color-border-subtle)] hover:border-[var(--color-border)]'
                                  }`}
                                >
                                  <div className="flex items-center gap-3">
                                    <button
                                      type="button"
                                      aria-label="Toggle task"
                                      className="shrink-0 text-green-600 focus:outline-hidden"
                                    >
                                      {isChecked ? (
                                        <CheckCircle2 className="w-5 h-5 fill-green-500 text-white dark:text-slate-900" />
                                      ) : (
                                        <Circle className="w-5 h-5 text-[var(--color-text-subtle)]" />
                                      )}
                                    </button>

                                    <span
                                      className={`text-xs leading-relaxed ${
                                        isChecked
                                          ? 'line-through text-[var(--color-text-muted)]'
                                          : 'text-[var(--color-text)] font-medium'
                                      }`}
                                    >
                                      {getLocalizedText(task.title, language)}
                                    </span>
                                  </div>

                                  {task.isKeyDeliverable && (
                                    <Badge
                                      variant="accent"
                                      size="sm"
                                      className="shrink-0 text-[10px]"
                                    >
                                      {isRtl
                                        ? 'تسليم رئيسي'
                                        : 'Key Deliverable'}
                                    </Badge>
                                  )}
                                </div>
                              );
                            })}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* TAB 3: AI COPILOT PROMPTS */}
              {activeWorkshopTab === 'ai-copilot' && (
                <div className="space-y-6">
                  <div className="space-y-1 bg-amber-500/10 border border-amber-500/30 p-4 rounded-2xl">
                    <span className="text-xs font-bold text-amber-700 dark:text-amber-400 flex items-center gap-1.5">
                      <Sparkles className="w-4 h-4" />
                      <span>
                        {isRtl
                          ? 'موجه البناء الرئيسي (Master Prompt)'
                          : 'Project Master Prompt'}
                      </span>
                    </span>
                    <p className="text-xs text-[var(--color-text-muted)] leading-relaxed">
                      {isRtl
                        ? 'انسخ هذا الموجه واستخدمه في أداة الذكاء الاصطناعي المفضلة لديك (مثل Claude أو ChatGPT أو Cursor) لمساعدتك في بناء هيكل المشروع.'
                        : 'Copy and paste this master prompt into Claude, ChatGPT, or Cursor to help scaffold this project.'}
                    </p>
                  </div>

                  {activeProject.aiMasterPrompt && (
                    <div className="relative rounded-2xl bg-slate-900 border border-slate-800 p-5 text-slate-100 font-mono text-xs overflow-x-auto shadow-inner">
                      <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-800">
                        <span className="text-[11px] text-slate-400 flex items-center gap-1.5">
                          <Terminal className="w-3.5 h-3.5 text-blue-400" />
                          <span>master-prompt.txt</span>
                        </span>

                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() =>
                            handleCopy(
                              getLocalizedText(
                                activeProject.aiMasterPrompt!,
                                language
                              ),
                              'master-prompt'
                            )
                          }
                          className="text-xs font-bold text-white border-slate-700 hover:bg-slate-800"
                          leftIcon={
                            copiedKey === 'master-prompt' ? (
                              <Check className="w-3.5 h-3.5 text-green-400" />
                            ) : (
                              <Copy className="w-3.5 h-3.5" />
                            )
                          }
                        >
                          {copiedKey === 'master-prompt'
                            ? isRtl
                              ? 'تم النسخ!'
                              : 'Copied!'
                            : isRtl
                              ? 'نسخ الموجه'
                              : 'Copy Prompt'}
                        </Button>
                      </div>

                      <pre className="whitespace-pre-wrap leading-relaxed text-[12px] font-sans">
                        {getLocalizedText(
                          activeProject.aiMasterPrompt,
                          language
                        )}
                      </pre>
                    </div>
                  )}
                </div>
              )}

              {/* TAB 4: STARTER CODE & ARCHITECTURE */}
              {activeWorkshopTab === 'starter-code' && (
                <div className="space-y-6">
                  {activeProject.fileStructureTree && (
                    <div className="space-y-2">
                      <h4 className="text-xs font-bold text-[var(--color-text-subtle)] flex items-center gap-1.5">
                        <FileCode className="w-3.5 h-3.5 text-[var(--color-primary)]" />
                        <span>
                          {isRtl
                            ? 'شجرة الملفات المقترحة للمشروع'
                            : 'Recommended Project File Tree'}
                        </span>
                      </h4>
                      <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800 font-mono text-xs text-emerald-400 overflow-x-auto">
                        <pre className="whitespace-pre">
                          {activeProject.fileStructureTree}
                        </pre>
                      </div>
                    </div>
                  )}

                  {activeProject.starterCodeSnippet && (
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <h4 className="text-xs font-bold text-[var(--color-text-subtle)] flex items-center gap-1.5">
                          <Code2 className="w-3.5 h-3.5 text-[var(--color-primary)]" />
                          <span>
                            {isRtl
                              ? 'كود البداية التأسيسي (Starter Code)'
                              : 'Starter Code'}
                          </span>
                        </h4>

                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() =>
                            handleCopy(
                              activeProject.starterCodeSnippet!,
                              'starter-code'
                            )
                          }
                          className="text-xs"
                          leftIcon={
                            copiedKey === 'starter-code' ? (
                              <Check className="w-3.5 h-3.5 text-green-600" />
                            ) : (
                              <Copy className="w-3.5 h-3.5" />
                            )
                          }
                        >
                          {copiedKey === 'starter-code'
                            ? isRtl
                              ? 'تم النسخ!'
                              : 'Copied!'
                            : isRtl
                              ? 'نسخ الكود'
                              : 'Copy Code'}
                        </Button>
                      </div>

                      <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 font-mono text-xs text-slate-200 overflow-x-auto shadow-inner leading-relaxed">
                        <pre className="whitespace-pre">
                          {activeProject.starterCodeSnippet}
                        </pre>
                      </div>
                    </div>
                  )}
                </div>
              )}

              {/* TAB 5: SUBMISSION VIA WHATSAPP */}
              {activeWorkshopTab === 'submission' && (
                <div className="space-y-6">
                  <div className="p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 space-y-1">
                    <span className="text-xs font-bold text-emerald-700 dark:text-emerald-400 flex items-center gap-1.5">
                      <Trophy className="w-4 h-4" />
                      <span>
                        {isRtl
                          ? 'تسليم المشروع ومراجعته عبر واتساب'
                          : 'Submit Project for Review via WhatsApp'}
                      </span>
                    </span>
                    <p className="text-xs text-[var(--color-text-muted)] leading-relaxed">
                      {isRtl
                        ? 'أدخل رابط مشروعك المنشور أو رابط الكود وملاحظاتك، ثم اضغط «إرسال مخرجات المشروع عبر واتساب» لحفظ عملك في جهازك وفتح رسالة واتساب جاهزة للمدرب.'
                        : 'Enter your live deployment URL or repository link and notes, then click "Send Project via WhatsApp" to save locally and open a ready WhatsApp message for the instructor.'}
                    </p>
                  </div>

                  {submissionFeedback && (
                    <div className="p-3.5 rounded-xl bg-emerald-500/15 border border-emerald-500/40 text-emerald-700 dark:text-emerald-300 text-xs font-bold flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4" />
                      <span>{submissionFeedback}</span>
                    </div>
                  )}

                  {/* Submission Form */}
                  <div className="space-y-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-[var(--color-text)] flex items-center gap-1.5">
                        <User className="w-3.5 h-3.5 text-[var(--color-secondary)]" />
                        <span>
                          {isRtl
                            ? 'اسم المتدرب (يُحفظ تلقائيًا)'
                            : 'Trainee Name (saved automatically)'}
                        </span>
                      </label>
                      <Input
                        type="text"
                        placeholder={
                          isRtl ? 'اكتب اسمك الكامل...' : 'Your full name...'
                        }
                        value={studentName}
                        onChange={(e) => {
                          setStudentName(e.target.value);
                          saveStudentName(e.target.value);
                        }}
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-[var(--color-text)] flex items-center gap-1.5">
                        <Globe className="w-3.5 h-3.5 text-blue-500" />
                        <span>
                          {isRtl
                            ? 'رابط الموقع المنشور الحي (Live URL)'
                            : 'Live Preview URL'}
                        </span>
                      </label>
                      <Input
                        type="url"
                        placeholder="https://my-app.vercel.app"
                        value={activeSubmission.liveUrl}
                        onChange={(e) =>
                          handleSubmissionChange(
                            activeProject.id,
                            'liveUrl',
                            e.target.value
                          )
                        }
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-[var(--color-text)] flex items-center gap-1.5">
                        <GitBranch className="w-3.5 h-3.5 text-slate-700 dark:text-slate-300" />
                        <span>
                          {isRtl
                            ? 'رابط مستودع الكود على GitHub (اختياري)'
                            : 'GitHub Repository URL (Optional)'}
                        </span>
                      </label>
                      <Input
                        type="url"
                        placeholder="https://github.com/username/my-project"
                        value={activeSubmission.githubUrl}
                        onChange={(e) =>
                          handleSubmissionChange(
                            activeProject.id,
                            'githubUrl',
                            e.target.value
                          )
                        }
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-[var(--color-text)]">
                        {isRtl
                          ? 'ملخص ما أنجزته أو ملاحظاتك للمدرب'
                          : 'Summary of What You Built / Notes'}
                      </label>
                      <Textarea
                        rows={3}
                        placeholder={
                          isRtl
                            ? 'اكتب ملخصًا لما قمت ببنائه أو أي نقطة تريد من المدرب مراجعتها...'
                            : 'Write a brief summary of what you built or any questions for the instructor...'
                        }
                        value={activeSubmission.notes}
                        onChange={(e) =>
                          handleSubmissionChange(
                            activeProject.id,
                            'notes',
                            e.target.value
                          )
                        }
                      />
                    </div>

                    {/* Action Submit Buttons */}
                    <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
                      <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                        <Button
                          size="md"
                          variant="primary"
                          onClick={() =>
                            handleSendSubmissionViaWhatsApp(activeProject.id)
                          }
                          className="font-bold bg-emerald-600 hover:bg-emerald-700 border-emerald-600 text-white shadow-sm"
                          leftIcon={<MessageCircle className="w-4 h-4" />}
                        >
                          {isRtl
                            ? 'إرسال مخرجات المشروع عبر واتساب'
                            : 'Send Project via WhatsApp'}
                        </Button>

                        <Button
                          size="md"
                          variant="outline"
                          onClick={() =>
                            handleSaveSubmissionLocally(activeProject.id)
                          }
                          className="font-bold"
                          leftIcon={<Save className="w-4 h-4" />}
                        >
                          {isRtl
                            ? 'حفظ في جهازي فقط'
                            : 'Save on My Device Only'}
                        </Button>
                      </div>

                      <div className="text-xs text-[var(--color-text-subtle)]">
                        {activeSubmission.submittedAt && (
                          <span>
                            {isRtl ? 'آخر حفظ:' : 'Last saved:'}{' '}
                            {new Date(
                              activeSubmission.submittedAt
                            ).toLocaleDateString(
                              language === 'ar' ? 'ar-SA' : 'en-US'
                            )}
                          </span>
                        )}
                      </div>
                    </div>

                    {whatsAppProjectMsg && (
                      <WhatsAppActionFeedback
                        message={whatsAppProjectMsg}
                        isRtl={isRtl}
                        savedLocallyNote={
                          isRtl
                            ? '✓ تم حفظ روابط وملاحظات مشروعك في متصفحك أيضًا.'
                            : '✓ Your project links and notes are also saved in your browser.'
                        }
                        onClose={() => setWhatsAppProjectMsg(null)}
                      />
                    )}
                  </div>

                  {/* Direct Link Preview if already submitted */}
                  {activeSubmission.liveUrl && (
                    <div className="pt-4 border-t border-[var(--color-border-subtle)] flex flex-wrap items-center gap-3">
                      <a
                        href={activeSubmission.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 rounded-xl bg-blue-600 text-white text-xs font-bold hover:bg-blue-700 transition-colors inline-flex items-center gap-1.5"
                      >
                        <Globe className="w-3.5 h-3.5" />
                        <span>
                          {isRtl ? 'فتح الرابط المباشر ↗' : 'Open Live App ↗'}
                        </span>
                      </a>

                      {activeSubmission.githubUrl && (
                        <a
                          href={activeSubmission.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-4 py-2 rounded-xl border border-[var(--color-border)] text-xs font-bold hover:bg-[var(--color-surface-sunken)] transition-colors inline-flex items-center gap-1.5 text-[var(--color-text)]"
                        >
                          <GitBranch className="w-3.5 h-3.5" />
                          <span>
                            {isRtl
                              ? 'زيارة مستودع GitHub ↗'
                              : 'Visit GitHub Repo ↗'}
                          </span>
                        </a>
                      )}
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* Modal Footer */}
            <div className="p-4 border-t border-[var(--color-border)] bg-[var(--color-surface)] flex items-center justify-between text-xs">
              <span className="text-[11px] font-mono text-[var(--color-text-subtle)]">
                {activeProject.id} • {activeProject.level}
              </span>

              <Button
                size="sm"
                variant="ghost"
                onClick={() => setSelectedProjectId(null)}
              >
                {isRtl ? 'إغلاق ورشة العمل' : 'Close Workshop'}
              </Button>
            </div>
          </Modal>
        )}
      </PageContainer>
    </LearningShell>
  );
}
