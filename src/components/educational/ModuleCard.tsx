import React from 'react';
import { cn } from '@/lib/utils';
import { Card } from '../ui/Card';
import { StageBadge } from './StageBadge';
import { Progress } from '../ui/Progress';
import { JourneyStageId } from '@/types';
import { Clock, BookOpen, ArrowRight, ArrowLeft } from 'lucide-react';

export interface ModuleCardProps extends React.HTMLAttributes<HTMLDivElement> {
  number: string;
  stageId: JourneyStageId;
  title: string;
  subtitle: string;
  description: string;
  badge: string;
  estimatedHours: number;
  lessonsCount: number;
  completedLessonsCount?: number;
  targetOutcome?: string;
  isRtl?: boolean;
  onSelect?: () => void;
}

export const ModuleCard: React.FC<ModuleCardProps> = ({
  number,
  stageId,
  title,
  subtitle,
  description,
  badge,
  estimatedHours,
  lessonsCount,
  completedLessonsCount = 0,
  targetOutcome,
  isRtl = true,
  onSelect,
  className,
  ...props
}) => {
  const progressPercent =
    lessonsCount > 0 ? Math.round((completedLessonsCount / lessonsCount) * 100) : 0;

  return (
    <Card
      variant="interactive"
      onClick={onSelect}
      className={cn(
        'group flex flex-col justify-between text-start p-6 rounded-2xl border border-[var(--color-border)] hover:border-[var(--color-primary)]/60 bg-[var(--color-surface)] hover:shadow-md transition-all cursor-pointer relative overflow-hidden',
        className
      )}
      {...props}
    >
      <div>
        <div className="flex items-center justify-between gap-3 mb-4">
          <div className="flex items-center gap-2.5">
            <span className="font-mono text-xs font-black text-white bg-[var(--color-primary)] px-2.5 py-1 rounded-lg shadow-xs">
              MODULE {number}
            </span>
            <StageBadge stageId={stageId} size="sm" />
          </div>

          <span className="text-caption font-semibold px-2.5 py-0.5 rounded-full bg-[var(--color-surface-sunken)] border border-[var(--color-border)] text-[var(--color-text-muted)] text-[11px]">
            {badge}
          </span>
        </div>

        <h3 className="text-lg font-black text-[var(--color-text)] group-hover:text-[var(--color-primary)] transition-colors mb-1 leading-snug">
          {title}
        </h3>
        <h4 className="text-xs font-semibold text-[var(--color-secondary)] mb-2.5">
          {subtitle}
        </h4>
        <p className="text-xs text-[var(--color-text-muted)] line-clamp-2 leading-relaxed mb-4">
          {description}
        </p>

        {targetOutcome && (
          <div className="p-2.5 rounded-xl bg-[var(--color-primary-subtle)]/40 border border-[var(--color-primary)]/15 text-xs text-[var(--color-text)] mb-4">
            <span className="font-bold text-[var(--color-primary)]">🎯 المخرج: </span>
            <span className="text-[var(--color-text-muted)] line-clamp-1">{targetOutcome}</span>
          </div>
        )}
      </div>

      <div className="space-y-3.5 pt-4 border-t border-[var(--color-border-subtle)]">
        <div className="flex items-center justify-between text-xs text-[var(--color-text-subtle)] font-medium">
          <div className="flex items-center gap-1.5">
            <BookOpen className="w-3.5 h-3.5" />
            <span>{lessonsCount} درساً</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Clock className="w-3.5 h-3.5" />
            <span>~{estimatedHours} ساعات</span>
          </div>
        </div>

        <Progress value={progressPercent} size="sm" showLabel={false} />

        <div className="flex items-center justify-between text-xs font-bold text-[var(--color-primary)] pt-1">
          <span className="text-[11px] font-semibold text-[var(--color-text-muted)]">
            {progressPercent === 100 ? (
              <span className="text-emerald-600 font-bold flex items-center gap-1">✓ مكتمل بالكامل</span>
            ) : completedLessonsCount > 0 ? (
              <span className="text-[var(--color-primary)]">{completedLessonsCount}/{lessonsCount} درساً منجزاً</span>
            ) : (
              <span>جاهز للاستكشاف</span>
            )}
          </span>

          <span className="inline-flex items-center gap-1 text-xs group-hover:underline">
            <span>استعراض الدروس</span>
            {isRtl ? (
              <ArrowLeft className="w-3.5 h-3.5 transform group-hover:-translate-x-1 transition-transform" />
            ) : (
              <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" />
            )}
          </span>
        </div>
      </div>
    </Card>
  );
};
