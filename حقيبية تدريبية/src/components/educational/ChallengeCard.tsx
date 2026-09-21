import React from 'react';
import { cn } from '@/lib/utils';
import { Card } from '../ui/Card';
import { Badge } from '../ui/Badge';
import { Button } from '../ui/Button';
import { CheckCircle2, Flame, Bot } from 'lucide-react';

export interface ChallengeCardProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  objective: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  isCompleted?: boolean;
  hasAIAssist?: boolean;
  onStart?: () => void;
}

const difficultyBadgeMap: Record<
  'beginner' | 'intermediate' | 'advanced',
  { label: string; variant: 'success' | 'warning' | 'error' }
> = {
  beginner: { label: 'مستوى مبتدئ', variant: 'success' },
  intermediate: { label: 'مستوى متوسط', variant: 'warning' },
  advanced: { label: 'مستوى متقدم', variant: 'error' },
};

export const ChallengeCard: React.FC<ChallengeCardProps> = ({
  title,
  objective,
  difficulty = 'beginner',
  isCompleted = false,
  hasAIAssist = true,
  onStart,
  className,
  ...props
}) => {
  const diffConfig = difficultyBadgeMap[difficulty];

  return (
    <Card
      variant="educational"
      className={cn(
        'group flex flex-col justify-between text-start transition-all',
        isCompleted && 'border-[var(--color-success-border)]',
        className
      )}
      {...props}
    >
      <div>
        <div className="flex items-center justify-between gap-3 mb-3">
          <div className="flex items-center gap-2">
            <Badge variant={diffConfig.variant} size="sm">
              {diffConfig.label}
            </Badge>
            {hasAIAssist && (
              <Badge variant="accent" size="sm" icon={<Bot className="w-3 h-3" />}>
                مدعوم بموجه AI
              </Badge>
            )}
          </div>

          {isCompleted && (
            <div className="flex items-center gap-1 text-caption font-bold text-[var(--color-success)]">
              <CheckCircle2 className="w-4 h-4" />
              <span>تم الحل</span>
            </div>
          )}
        </div>

        <h4 className="text-body font-bold text-[var(--color-text)] mb-2 flex items-center gap-2">
          <Flame className="w-4 h-4 text-[var(--color-secondary)] shrink-0" />
          <span>{title}</span>
        </h4>
        <p className="text-body-sm text-[var(--color-text-muted)] leading-relaxed mb-4">
          {objective}
        </p>
      </div>

      <div className="pt-3 border-t border-[var(--color-border-subtle)] flex items-center justify-end">
        <Button
          size="sm"
          variant={isCompleted ? 'outline' : 'primary'}
          onClick={onStart}
        >
          {isCompleted ? 'إعادة التحدي' : 'بدء حل التحدي'}
        </Button>
      </div>
    </Card>
  );
};
