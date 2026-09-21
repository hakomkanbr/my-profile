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
      className={cn('group flex flex-col justify-between text-start', className)}
      {...props}
    >
      <div>
        <div className="flex items-center justify-between gap-3 mb-4">
          <div className="flex items-center gap-2.5">
            <span className="font-mono text-xs font-extrabold text-[var(--color-text-inverse)] bg-[var(--color-primary)] px-2.5 py-1 rounded-lg">
              {number}
            </span>
            <StageBadge stageId={stageId} size="sm" />
          </div>

          <span className="text-caption font-semibold px-2 py-0.5 rounded-md bg-[var(--color-surface-sunken)] border border-[var(--color-border)] text-[var(--color-text-muted)]">
            {badge}
          </span>
        </div>

        <h3 className="text-h3 font-bold text-[var(--color-text)] group-hover:text-[var(--color-primary)] transition-colors mb-1">
          {title}
        </h3>
        <h4 className="text-body-sm font-medium text-[var(--color-secondary)] mb-2.5">
          {subtitle}
        </h4>
        <p className="text-body-sm text-[var(--color-text-muted)] line-clamp-2 leading-relaxed mb-6">
          {description}
        </p>
      </div>

      <div className="space-y-4 pt-4 border-t border-[var(--color-border-subtle)]">
        <div className="flex items-center justify-between text-xs text-[var(--color-text-subtle)]">
          <div className="flex items-center gap-1.5">
            <BookOpen className="w-4 h-4" />
            <span>{lessonsCount} درساً</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Clock className="w-4 h-4" />
            <span>{estimatedHours} ساعات</span>
          </div>
        </div>

        <Progress value={progressPercent} size="sm" showLabel={false} />

        <div className="flex items-center justify-between text-xs font-semibold text-[var(--color-primary)] pt-1">
          <span>{progressPercent === 100 ? 'مكتمل بالكامل' : `${completedLessonsCount}/${lessonsCount} منجز`}</span>
          <span className="rtl:hidden inline-flex transform group-hover:translate-x-1 transition-transform">
            <ArrowRight className="w-4 h-4" />
          </span>
          <span className="ltr:hidden inline-flex transform group-hover:-translate-x-1 transition-transform">
            <ArrowLeft className="w-4 h-4" />
          </span>
        </div>
      </div>
    </Card>
  );
};
