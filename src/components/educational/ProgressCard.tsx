import React from 'react';
import { cn } from '@/lib/utils';
import { Card } from '../ui/Card';
import { Progress } from '../ui/Progress';
import { Trophy, CheckCircle, Zap, Flame } from 'lucide-react';

export interface ProgressCardProps extends React.HTMLAttributes<HTMLDivElement> {
  completedLessons: number;
  totalLessons: number;
  completedProjects: number;
  totalProjects: number;
  completedChallenges: number;
  currentStageTitle: string;
}

export const ProgressCard: React.FC<ProgressCardProps> = ({
  completedLessons,
  totalLessons,
  completedProjects,
  totalProjects,
  completedChallenges,
  currentStageTitle,
  className,
  ...props
}) => {
  const percent =
    totalLessons > 0 ? Math.round((completedLessons / totalLessons) * 100) : 0;

  return (
    <Card
      variant="featured"
      className={cn('text-start p-6 bg-[var(--color-surface)]', className)}
      {...props}
    >
      <div className="flex items-center justify-between gap-4 mb-4">
        <div>
          <span className="text-label text-[var(--color-secondary)]">إنجازك في الدورة</span>
          <h3 className="text-h3 font-bold text-[var(--color-text)]">
            {percent}% مكتمل
          </h3>
        </div>
        <div className="w-12 h-12 rounded-2xl flex items-center justify-center bg-[var(--color-primary-subtle)] text-[var(--color-primary)]">
          <Trophy className="w-6 h-6" />
        </div>
      </div>

      <Progress value={percent} size="md" className="mb-6" />

      <div className="grid grid-cols-3 gap-3 pt-4 border-t border-[var(--color-border)] text-center">
        <div className="flex flex-col items-center">
          <div className="flex items-center gap-1 text-[var(--color-primary)] font-bold text-base">
            <CheckCircle className="w-4 h-4" />
            <span>{completedLessons}/{totalLessons}</span>
          </div>
          <span className="text-caption text-[var(--color-text-subtle)]">دروس منجزة</span>
        </div>

        <div className="flex flex-col items-center">
          <div className="flex items-center gap-1 text-[var(--color-secondary)] font-bold text-base">
            <Zap className="w-4 h-4" />
            <span>{completedProjects}/{totalProjects}</span>
          </div>
          <span className="text-caption text-[var(--color-text-subtle)]">مشاريع عملية</span>
        </div>

        <div className="flex flex-col items-center">
          <div className="flex items-center gap-1 text-[var(--color-primary)] font-bold text-base">
            <Flame className="w-4 h-4" />
            <span>{completedChallenges}</span>
          </div>
          <span className="text-caption text-[var(--color-text-subtle)]">تحديات محلولة</span>
        </div>
      </div>

      <div className="mt-4 pt-3 border-t border-[var(--color-border-subtle)] flex items-center justify-between text-caption">
        <span className="text-[var(--color-text-subtle)]">المرحلة الحالية:</span>
        <span className="font-semibold text-[var(--color-text)]">{currentStageTitle}</span>
      </div>
    </Card>
  );
};
