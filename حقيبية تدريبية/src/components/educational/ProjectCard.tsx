import React from 'react';
import { cn } from '@/lib/utils';
import { Card } from '../ui/Card';
import { Badge } from '../ui/Badge';
import { Button } from '../ui/Button';
import { Layers, ArrowRight, ArrowLeft, CheckCircle2, Circle } from 'lucide-react';

export interface ProjectCardProps extends React.HTMLAttributes<HTMLDivElement> {
  code: string;
  title: string;
  tagline: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced' | 'Capstone';
  targetOutput: string;
  techStack: string[];
  isCompleted?: boolean;
  onOpenWorkshop?: () => void;
  onToggleComplete?: () => void;
  completedTasksCount?: number;
  totalTasksCount?: number;
}

const levelBadgeMap: Record<
  'Beginner' | 'Intermediate' | 'Advanced' | 'Capstone',
  { label: string; variant: 'outline' | 'primary' | 'secondary' | 'accent' }
> = {
  Beginner: { label: 'تأسيسي', variant: 'outline' },
  Intermediate: { label: 'متوسط', variant: 'secondary' },
  Advanced: { label: 'متقدم', variant: 'primary' },
  Capstone: { label: 'المشروع النهائي', variant: 'accent' },
};

export const ProjectCard: React.FC<ProjectCardProps> = ({
  code,
  title,
  tagline,
  level = 'Beginner',
  targetOutput,
  techStack = [],
  isCompleted = false,
  onOpenWorkshop,
  onToggleComplete,
  completedTasksCount,
  totalTasksCount,
  className,
  ...props
}) => {
  const levelConfig = levelBadgeMap[level];

  return (
    <Card
      variant="project"
      className={cn(
        'group flex flex-col justify-between text-start transition-all relative cursor-pointer hover:shadow-md hover:border-[var(--color-primary)]/50',
        level === 'Capstone' && 'border-2 border-[var(--color-primary)] bg-[var(--color-surface-elevated)]',
        isCompleted && 'border-green-500/30 bg-green-500/5 dark:bg-green-950/10',
        className
      )}
      onClick={onOpenWorkshop}
      {...props}
    >
      <div>
        <div className="flex items-center justify-between gap-3 mb-3">
          <div className="flex items-center gap-2">
            <span className="font-mono text-xs font-bold text-[var(--color-primary)] px-2.5 py-1 rounded-md bg-[var(--color-primary-subtle)]">
              {code}
            </span>
            <Badge variant={levelConfig.variant} size="sm">
              {levelConfig.label}
            </Badge>
          </div>

          <div className="flex items-center gap-2">
            {isCompleted ? (
              <Badge variant="success" size="sm" className="flex items-center gap-1 font-bold">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>تم الإنجاز</span>
              </Badge>
            ) : totalTasksCount !== undefined && totalTasksCount > 0 ? (
              <span className="text-[11px] font-mono px-2 py-0.5 rounded-full bg-[var(--color-surface-sunken)] text-[var(--color-text-subtle)] border border-[var(--color-border-subtle)]">
                {completedTasksCount ?? 0}/{totalTasksCount} مهام
              </span>
            ) : null}

            {onToggleComplete && (
              <button
                type="button"
                aria-label={isCompleted ? 'إلغاء التحديد كمكتمل' : 'تحديد كمكتمل'}
                onClick={(e) => {
                  e.stopPropagation();
                  onToggleComplete();
                }}
                className={cn(
                  'p-1 rounded-lg border transition-all text-xs flex items-center justify-center',
                  isCompleted
                    ? 'bg-green-500/15 border-green-500/40 text-green-600 hover:bg-green-500/25'
                    : 'border-[var(--color-border)] text-[var(--color-text-subtle)] hover:text-green-600 hover:border-green-500/40 hover:bg-green-500/10'
                )}
                title={isCompleted ? 'إلغاء تحديد التسليم' : 'تحديد المشروع كمنجز'}
              >
                {isCompleted ? (
                  <CheckCircle2 className="w-4 h-4 fill-green-500 text-white dark:text-slate-900" />
                ) : (
                  <Circle className="w-4 h-4" />
                )}
              </button>
            )}
          </div>
        </div>

        <h3 className="text-h3 font-bold text-[var(--color-text)] group-hover:text-[var(--color-primary)] transition-colors mb-2 leading-snug">
          {title}
        </h3>
        <p className="text-body-sm text-[var(--color-secondary)] font-medium mb-3">
          {tagline}
        </p>

        <div className="p-3 rounded-xl bg-[var(--color-surface-sunken)] border border-[var(--color-border-subtle)] mb-4">
          <span className="text-caption font-bold text-[var(--color-text-subtle)] block mb-1">
            مخرجات المشروع الحقيقية:
          </span>
          <p className="text-caption text-[var(--color-text-muted)] leading-relaxed">
            {targetOutput}
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-1.5 mb-5">
          {techStack.map((tech) => (
            <span
              key={tech}
              className="text-[11px] font-mono px-2 py-0.5 rounded-md bg-[var(--color-surface-sunken)] border border-[var(--color-border)] text-[var(--color-text-muted)]"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      <div className="pt-4 border-t border-[var(--color-border-subtle)] flex items-center justify-between">
        <div className="flex items-center gap-1.5 text-xs text-[var(--color-text-subtle)]">
          <Layers className="w-4 h-4" />
          <span>مشروع تطبيقي موجه</span>
        </div>

        <Button
          size="sm"
          variant={level === 'Capstone' ? 'primary' : 'outline'}
          onClick={(e) => {
            e.stopPropagation();
            if (onOpenWorkshop) onOpenWorkshop();
          }}
          rightIcon={
            <>
              <ArrowRight className="w-3.5 h-3.5 rtl:hidden" />
              <ArrowLeft className="w-3.5 h-3.5 ltr:hidden" />
            </>
          }
        >
          {level === 'Capstone' ? 'دليل المشروع النهائي' : 'دخول ورشة المشروع'}
        </Button>
      </div>
    </Card>
  );
};
