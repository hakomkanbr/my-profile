'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import {
  LearningShell,
  PageContainer,
  PageHeader,
  Card,
  Badge,
  Button,
  Input,
  Modal,
  StageBadge,
  ModuleCard,
  Progress,
} from '@/components';
import { ALL_MODULES, JOURNEY_STAGES } from '@/content';
import { usePreferencesStore, useProgressStore } from '@/store';
import { getLocalizedText } from '@/lib/utils';
import { JourneyStageId, Lesson } from '@/types';
import {
  BookOpen,
  Clock,
  Sparkles,
  CheckCircle2,
  Circle,
  Search,
  ArrowLeft,
  ArrowRight,
  Compass,
  Target,
  Layers,
  GraduationCap,
  ListOrdered,
} from 'lucide-react';

export default function WebCreatorModulesPage() {
  const { language } = usePreferencesStore();
  const isRtl = language === 'ar';

  const { progress, toggleLesson } = useProgressStore();

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedStage, setSelectedStage] = useState<string>('all');
  const [selectedStatus, setSelectedStatus] = useState<'all' | 'completed' | 'in_progress'>('all');
  const [selectedModuleId, setSelectedModuleId] = useState<string | null>(null);

  // Overall Statistics
  const totalModules = ALL_MODULES.length;
  const totalLessons = useMemo(
    () => ALL_MODULES.reduce((acc, m) => acc + m.lessons.length, 0),
    []
  );
  const totalHours = useMemo(
    () => ALL_MODULES.reduce((acc, m) => acc + m.estimatedHours, 0),
    []
  );

  const completedLessonsInModules = useMemo(() => {
    const allLessonIds = new Set(ALL_MODULES.flatMap((m) => m.lessons.map((l) => l.id)));
    return progress.completedLessons.filter((id) => allLessonIds.has(id)).length;
  }, [progress.completedLessons]);

  const overallPercent =
    totalLessons > 0 ? Math.round((completedLessonsInModules / totalLessons) * 100) : 0;

  // Selected Module Object for Detailed Deep-Dive Modal
  const selectedModule = useMemo(
    () => ALL_MODULES.find((m) => m.id === selectedModuleId) || null,
    [selectedModuleId]
  );

  // Filtered Modules
  const filteredModules = useMemo(() => {
    return ALL_MODULES.filter((mod) => {
      // 1. Stage filter
      if (selectedStage !== 'all' && mod.stageId !== selectedStage) {
        return false;
      }

      // 2. Status filter
      const modCompletedLessons = mod.lessons.filter((l) =>
        progress.completedLessons.includes(l.id)
      ).length;
      const isCompleted = modCompletedLessons === mod.lessons.length && mod.lessons.length > 0;
      const isInProgress = modCompletedLessons > 0 && !isCompleted;

      if (selectedStatus === 'completed' && !isCompleted) return false;
      if (selectedStatus === 'in_progress' && !isInProgress) return false;

      // 3. Search query
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase().trim();
        const titleMatch =
          getLocalizedText(mod.title, language).toLowerCase().includes(q) ||
          getLocalizedText(mod.subtitle, language).toLowerCase().includes(q) ||
          getLocalizedText(mod.description, language).toLowerCase().includes(q) ||
          getLocalizedText(mod.badge, language).toLowerCase().includes(q) ||
          mod.lessons.some((l) =>
            getLocalizedText(l.title, language).toLowerCase().includes(q)
          );
        if (!titleMatch) return false;
      }

      return true;
    });
  }, [selectedStage, selectedStatus, searchQuery, language, progress.completedLessons]);

  // Quick helper to map module to suggested session
  const getSessionNumberForModule = (modNum: string) => {
    const n = parseInt(modNum, 10);
    if (isNaN(n)) return '01';
    // 10 modules align comfortably across the 12 sessions
    if (n === 1) return '01';
    if (n === 2) return '02';
    if (n === 3) return '03';
    if (n === 4) return '04';
    if (n === 5) return '06';
    if (n === 6) return '07';
    if (n === 7) return '09';
    if (n === 8) return '10';
    if (n === 9) return '11';
    return '12';
  };

  return (
    <LearningShell headerTitle={isRtl ? 'الوحدات التدريبية' : 'Curriculum Modules'}>
      <PageContainer>
        <div className="space-y-10 text-start pb-20">
          {/* Header */}
          <PageHeader
            title={isRtl ? 'الوحدات التدريبية العشر (The 10 Core Modules)' : 'The 10 Core Modules'}
            subtitle={
              isRtl
                ? 'منهج هندسي عملي متكامل يغطي معمارية الويب، تصميم UI/UX، الواجهات الحديثة، الذكاء الاصطناعي، والنشر السحابي.'
                : 'A comprehensive, disciplined engineering curriculum taking you from architectural concepts to live, marketed products.'
            }
            breadcrumbs={[
              { id: '1', label: isRtl ? 'الرئيسية' : 'Home', href: '/' },
              { id: '2', label: 'WEB CREATOR AI', href: '/web-creator-ai' },
              { id: '3', label: isRtl ? 'الوحدات التدريبية' : 'Modules', isCurrent: true },
            ]}
            actions={
              <div className="flex flex-wrap items-center gap-2.5">
                <Link href="/web-creator-ai/sessions">
                  <Button
                    variant="outline"
                    size="sm"
                    leftIcon={<BookOpen className="w-4 h-4 text-[var(--color-primary)]" />}
                  >
                    {isRtl ? 'الجلسات الـ 12 المباشرة' : '12 Live Sessions'}
                  </Button>
                </Link>
                <Link href="/web-creator-ai/progress">
                  <Button
                    variant="primary"
                    size="sm"
                    leftIcon={<Compass className="w-4 h-4" />}
                  >
                    {isRtl ? 'رحلتي وسجل إنجازاتي' : 'My Learning Journey'}
                  </Button>
                </Link>
              </div>
            }
          />

          {/* Curriculum Hero Overview Metrics */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            <Card className="p-5 sm:p-6 border border-[var(--color-border)] bg-[var(--color-surface)] flex flex-col justify-between">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-[var(--color-text-subtle)] uppercase">
                  {isRtl ? 'الوحدات' : 'Modules'}
                </span>
                <span className="p-2 rounded-xl bg-blue-500/10 text-blue-600 dark:text-blue-400">
                  <Layers className="w-4 h-4" />
                </span>
              </div>
              <div className="mt-3">
                <p className="text-2xl sm:text-3xl font-black text-[var(--color-text)]">
                  {totalModules}
                </p>
                <p className="text-xs text-[var(--color-text-muted)] mt-1">
                  {isRtl ? 'وحدات متسلسلة هندسياً' : 'Sequential modules'}
                </p>
              </div>
            </Card>

            <Card className="p-5 sm:p-6 border border-[var(--color-border)] bg-[var(--color-surface)] flex flex-col justify-between">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-[var(--color-text-subtle)] uppercase">
                  {isRtl ? 'الدروس' : 'Lessons'}
                </span>
                <span className="p-2 rounded-xl bg-purple-500/10 text-purple-600 dark:text-purple-400">
                  <GraduationCap className="w-4 h-4" />
                </span>
              </div>
              <div className="mt-3">
                <p className="text-2xl sm:text-3xl font-black text-[var(--color-text)]">
                  {totalLessons}
                </p>
                <p className="text-xs text-[var(--color-text-muted)] mt-1">
                  {isRtl ? 'درساً نظرياً وتطبيقياً' : 'Deep-dive lessons'}
                </p>
              </div>
            </Card>

            <Card className="p-5 sm:p-6 border border-[var(--color-border)] bg-[var(--color-surface)] flex flex-col justify-between">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-[var(--color-text-subtle)] uppercase">
                  {isRtl ? 'ساعات التعلم' : 'Est. Hours'}
                </span>
                <span className="p-2 rounded-xl bg-amber-500/10 text-amber-600 dark:text-amber-400">
                  <Clock className="w-4 h-4" />
                </span>
              </div>
              <div className="mt-3">
                <p className="text-2xl sm:text-3xl font-black text-[var(--color-text)]">
                  ~{totalHours}
                </p>
                <p className="text-xs text-[var(--color-text-muted)] mt-1">
                  {isRtl ? 'ساعة تدريب وبناء مشاريع' : 'Applied hours'}
                </p>
              </div>
            </Card>

            <Card className="p-5 sm:p-6 border border-[var(--color-border)] bg-[var(--color-surface)] flex flex-col justify-between">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-[var(--color-text-subtle)] uppercase">
                  {isRtl ? 'إنجازك' : 'My Progress'}
                </span>
                <span className="p-2 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
                  <CheckCircle2 className="w-4 h-4" />
                </span>
              </div>
              <div className="mt-3 space-y-1.5">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-2xl sm:text-3xl font-black text-[var(--color-text)]">
                    {overallPercent}%
                  </span>
                  <span className="font-bold text-emerald-600">
                    {completedLessonsInModules}/{totalLessons}
                  </span>
                </div>
                <Progress value={overallPercent} size="sm" showLabel={false} />
              </div>
            </Card>
          </div>

          {/* Filter & Search Bar */}
          <div className="space-y-4">
            <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-3">
              {/* Search input */}
              <div className="relative flex-1">
                <Search className="absolute start-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[var(--color-text-subtle)] pointer-events-none" />
                <Input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder={
                    isRtl
                      ? 'ابحث باسم الوحدة، المهارة، أو موضوع الدرس (مثل: React, Next.js, API, UI/UX)...'
                      : 'Search modules or lessons...'
                  }
                  className="ps-10"
                />
              </div>

              {/* Status Filter */}
              <div className="flex items-center gap-1.5 p-1 rounded-xl bg-[var(--color-surface)] border border-[var(--color-border)] text-xs font-bold shrink-0">
                {(['all', 'in_progress', 'completed'] as const).map((st) => (
                  <button
                    key={st}
                    type="button"
                    onClick={() => setSelectedStatus(st)}
                    className={`px-3 py-1.5 rounded-lg transition-colors cursor-pointer ${
                      selectedStatus === st
                        ? 'bg-[var(--color-primary)] text-white'
                        : 'text-[var(--color-text-muted)] hover:text-[var(--color-text)]'
                    }`}
                  >
                    {st === 'all'
                      ? isRtl ? 'جميع الحالات' : 'All'
                      : st === 'in_progress'
                      ? isRtl ? 'قيد الإنجاز' : 'In Progress'
                      : isRtl ? 'مكتملة' : 'Completed'}
                  </button>
                ))}
              </div>
            </div>

            {/* Stage Filter Pills */}
            <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
              <button
                type="button"
                onClick={() => setSelectedStage('all')}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition-colors cursor-pointer border ${
                  selectedStage === 'all'
                    ? 'bg-[var(--color-primary)] text-white border-[var(--color-primary)] shadow-xs'
                    : 'bg-[var(--color-surface)] text-[var(--color-text-muted)] border-[var(--color-border)] hover:border-[var(--color-primary)]/40'
                }`}
              >
                {isRtl ? `كافة المراحل (${totalModules})` : `All Stages (${totalModules})`}
              </button>

              {JOURNEY_STAGES.map((stg) => {
                const count = ALL_MODULES.filter((m) => m.stageId === stg.id).length;
                const isSelected = selectedStage === stg.id;

                return (
                  <button
                    key={stg.id}
                    type="button"
                    onClick={() => setSelectedStage(stg.id)}
                    className={`px-3.5 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition-colors cursor-pointer border flex items-center gap-2 ${
                      isSelected
                        ? 'bg-[var(--color-primary)] text-white border-[var(--color-primary)] shadow-xs'
                        : 'bg-[var(--color-surface)] text-[var(--color-text-muted)] border-[var(--color-border)] hover:border-[var(--color-primary)]/40'
                    }`}
                  >
                    <span className="font-mono text-[11px] opacity-80">{stg.number}</span>
                    <span>{getLocalizedText(stg.title, language)}</span>
                    <span
                      className={`text-[10px] px-1.5 py-0.2 rounded-full font-mono ${
                        isSelected ? 'bg-white/20 text-white' : 'bg-[var(--color-surface-sunken)] text-[var(--color-text-subtle)]'
                      }`}
                    >
                      {count}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Modules Grid */}
          {filteredModules.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredModules.map((mod) => {
                const completedInThisModule = mod.lessons.filter((l) =>
                  progress.completedLessons.includes(l.id)
                ).length;

                return (
                  <ModuleCard
                    key={mod.id}
                    number={mod.number}
                    stageId={mod.stageId as JourneyStageId}
                    title={getLocalizedText(mod.title, language)}
                    subtitle={getLocalizedText(mod.subtitle, language)}
                    description={getLocalizedText(mod.description, language)}
                    badge={getLocalizedText(mod.badge, language)}
                    targetOutcome={getLocalizedText(mod.targetOutcome, language)}
                    estimatedHours={mod.estimatedHours}
                    lessonsCount={mod.lessons.length}
                    completedLessonsCount={completedInThisModule}
                    isRtl={isRtl}
                    onSelect={() => setSelectedModuleId(mod.id)}
                  />
                );
              })}
            </div>
          ) : (
            <Card className="p-12 text-center space-y-4 border border-[var(--color-border)]">
              <Search className="w-8 h-8 text-[var(--color-text-subtle)] mx-auto" />
              <div className="space-y-1">
                <h3 className="text-lg font-bold text-[var(--color-text)]">
                  {isRtl ? 'لم نجد أي وحدات مطابقة لبحثك' : 'No matching modules found'}
                </h3>
                <p className="text-xs text-[var(--color-text-muted)]">
                  {isRtl
                    ? 'جرب البحث بكلمات أخرى أو اختر "كافة المراحل" لعرض كل الوحدات العشر.'
                    : 'Try clearing your search query or switching filters.'}
                </p>
              </div>
              <Button
                variant="outline"
                size="sm"
                onClick={() => {
                  setSearchQuery('');
                  setSelectedStage('all');
                  setSelectedStatus('all');
                }}
              >
                {isRtl ? 'إعادة تعيين الفلاتر' : 'Reset Filters'}
              </Button>
            </Card>
          )}
        </div>
      </PageContainer>

      {/* Interactive Module Deep-Dive Modal */}
      {selectedModule && (
        <Modal
          isOpen={Boolean(selectedModule)}
          onClose={() => setSelectedModuleId(null)}
          size="xl"
          title={`${isRtl ? 'الوحدة' : 'Module'} ${selectedModule.number}: ${getLocalizedText(
            selectedModule.title,
            language
          )}`}
          description={getLocalizedText(selectedModule.subtitle, language)}
        >
          <div className="space-y-6 pt-2 max-h-[75vh] overflow-y-auto px-1">
            {/* Meta & Target Outcome Header */}
            <div className="p-5 rounded-2xl bg-[var(--color-surface-sunken)] border border-[var(--color-border)] space-y-4">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div className="flex items-center gap-2">
                  <StageBadge stageId={selectedModule.stageId as JourneyStageId} size="md" />
                  <Badge variant="primary" size="sm">
                    {getLocalizedText(selectedModule.badge, language)}
                  </Badge>
                </div>

                <div className="flex items-center gap-3 text-xs font-semibold text-[var(--color-text-subtle)]">
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" />
                    <span>~{selectedModule.estimatedHours} {isRtl ? 'ساعات تدريبية' : 'hours'}</span>
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-1">
                    <BookOpen className="w-3.5 h-3.5" />
                    <span>{selectedModule.lessons.length} {isRtl ? 'دروس تفصيلية' : 'lessons'}</span>
                  </span>
                </div>
              </div>

              {/* Description */}
              <p className="text-xs sm:text-sm text-[var(--color-text)] leading-relaxed">
                {getLocalizedText(selectedModule.description, language)}
              </p>

              {/* Target Outcome */}
              <div className="p-3.5 rounded-xl bg-[var(--color-surface)] border border-[var(--color-primary)]/20 flex items-start gap-3">
                <Target className="w-4 h-4 text-[var(--color-primary)] shrink-0 mt-0.5" />
                <div className="space-y-0.5">
                  <span className="text-xs font-bold text-[var(--color-primary)]">
                    {isRtl ? 'المخرج التعليمي النهائي للوحدة:' : 'Target Learning Outcome:'}
                  </span>
                  <p className="text-xs text-[var(--color-text-muted)] leading-relaxed">
                    {getLocalizedText(selectedModule.targetOutcome, language)}
                  </p>
                </div>
              </div>
            </div>

            {/* Lessons Accordion List */}
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <h4 className="text-sm font-bold text-[var(--color-text)] flex items-center gap-2">
                  <ListOrdered className="w-4 h-4 text-[var(--color-primary)]" />
                  <span>{isRtl ? 'الدروس المقررة في هذه الوحدة' : 'Scheduled Lessons'}</span>
                </h4>
                <span className="text-xs font-bold text-emerald-600 bg-emerald-500/10 px-2.5 py-0.5 rounded-full">
                  {
                    selectedModule.lessons.filter((l) => progress.completedLessons.includes(l.id))
                      .length
                  }{' '}
                  / {selectedModule.lessons.length} {isRtl ? 'مكتملة' : 'done'}
                </span>
              </div>

              <div className="space-y-3">
                {selectedModule.lessons.map((lesson: Lesson) => {
                  const isDone = progress.completedLessons.includes(lesson.id);

                  return (
                    <div
                      key={lesson.id}
                      className={`p-4 sm:p-5 rounded-2xl border transition-all space-y-3 ${
                        isDone
                          ? 'border-emerald-500/30 bg-emerald-500/5'
                          : 'border-[var(--color-border)] bg-[var(--color-surface)]'
                      }`}
                    >
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5">
                        <div className="flex items-center gap-2.5">
                          <span
                            className={`w-7 h-7 rounded-lg flex items-center justify-center text-xs font-black shrink-0 ${
                              isDone
                                ? 'bg-emerald-500 text-white'
                                : 'bg-[var(--color-surface-sunken)] text-[var(--color-text)] border border-[var(--color-border)]'
                            }`}
                          >
                            {isDone ? <CheckCircle2 className="w-4 h-4" /> : lesson.order}
                          </span>
                          <div>
                            <h5 className="text-sm font-bold text-[var(--color-text)]">
                              {getLocalizedText(lesson.title, language)}
                            </h5>
                            <p className="text-[11px] text-[var(--color-text-subtle)] font-medium">
                              {getLocalizedText(lesson.subtitle, language)}
                            </p>
                          </div>
                        </div>

                        <div className="flex items-center gap-2 shrink-0">
                          <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-[var(--color-surface-sunken)] text-[var(--color-text-subtle)]">
                            ~{lesson.estimatedMinutes} د
                          </span>
                          <span className="text-[10px] uppercase font-bold px-2 py-0.5 rounded bg-[var(--color-primary-subtle)] text-[var(--color-primary)]">
                            {lesson.type}
                          </span>
                        </div>
                      </div>

                      {/* Summary */}
                      <p className="text-xs text-[var(--color-text-muted)] leading-relaxed">
                        {getLocalizedText(lesson.summary, language)}
                      </p>

                      {/* Learning Objectives */}
                      {lesson.learningObjectives && lesson.learningObjectives.length > 0 && (
                        <div className="space-y-1.5 pt-2 border-t border-[var(--color-border-subtle)]">
                          <span className="text-[11px] font-bold text-[var(--color-text-subtle)] flex items-center gap-1.5">
                            <Sparkles className="w-3.5 h-3.5 text-amber-500" />
                            <span>{isRtl ? 'الأهداف المعرفية للدرس:' : 'Learning Objectives:'}</span>
                          </span>
                          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1 text-[11px] text-[var(--color-text)]">
                            {lesson.learningObjectives.map((obj, idx) => (
                              <li key={idx} className="flex items-start gap-1.5">
                                <span className="text-emerald-500 font-bold shrink-0">✓</span>
                                <span>{getLocalizedText(obj, language)}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {/* Lesson Action Row */}
                      <div className="flex items-center justify-between pt-2">
                        <span className="text-[11px] text-[var(--color-text-subtle)]">
                          {isDone ? (
                            <span className="text-emerald-600 font-bold">
                              ✓ {isRtl ? 'تم توثيق إكمال هذا الدرس' : 'Lesson completed'}
                            </span>
                          ) : (
                            <span>{isRtl ? 'جاهز للدراسة والتطبيق' : 'Ready to study'}</span>
                          )}
                        </span>

                        <Button
                          size="sm"
                          variant={isDone ? 'outline' : 'primary'}
                          onClick={() => toggleLesson(lesson.id)}
                          leftIcon={
                            isDone ? (
                              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                            ) : (
                              <Circle className="w-3.5 h-3.5" />
                            )
                          }
                          className="font-bold text-xs"
                        >
                          {isDone
                            ? isRtl
                              ? '✓ مكتمل (انقر للتراجع)'
                              : '✓ Done (Click to Undo)'
                            : isRtl
                            ? 'تعليم كمكتمل ✓'
                            : 'Mark Complete'}
                        </Button>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Bottom Actions */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-4 border-t border-[var(--color-border)]">
              <Link
                href={`/web-creator-ai/session/session-${getSessionNumberForModule(
                  selectedModule.number
                )}`}
                className="w-full sm:w-auto"
              >
                <Button
                  variant="primary"
                  size="md"
                  rightIcon={isRtl ? <ArrowLeft className="w-4 h-4" /> : <ArrowRight className="w-4 h-4" />}
                  className="w-full sm:w-auto font-bold"
                >
                  {isRtl
                    ? `الانتقال للجلسة العملية المرتبطة (${getSessionNumberForModule(selectedModule.number)})`
                    : `Jump to Session ${getSessionNumberForModule(selectedModule.number)}`}
                </Button>
              </Link>

              <Button
                variant="outline"
                size="md"
                onClick={() => setSelectedModuleId(null)}
                className="w-full sm:w-auto"
              >
                {isRtl ? 'إغلاق النافذة' : 'Close'}
              </Button>
            </div>
          </div>
        </Modal>
      )}
    </LearningShell>
  );
}
