import React from 'react';
import { cn } from '@/lib/utils';
import { CheckCircle2 } from 'lucide-react';

export interface LearningObjectiveProps extends React.HTMLAttributes<HTMLDivElement> {
  objective: string;
  isAchieved?: boolean;
}

export const LearningObjective: React.FC<LearningObjectiveProps> = ({
  objective,
  isAchieved = false,
  className,
  ...props
}) => {
  return (
    <div
      className={cn(
        'flex items-start gap-3 py-2 text-start',
        className
      )}
      {...props}
    >
      <div
        className={cn(
          'w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5 border transition-colors',
          isAchieved
            ? 'bg-[var(--color-success-bg)] text-[var(--color-success)] border-[var(--color-success-border)]'
            : 'bg-[var(--color-surface-sunken)] text-[var(--color-text-subtle)] border-[var(--color-border)]'
        )}
      >
        <CheckCircle2 className="w-3.5 h-3.5" />
      </div>
      <span
        className={cn(
          'text-body-sm leading-relaxed',
          isAchieved ? 'text-[var(--color-text-muted)] line-through' : 'text-[var(--color-text)]'
        )}
      >
        {objective}
      </span>
    </div>
  );
};
