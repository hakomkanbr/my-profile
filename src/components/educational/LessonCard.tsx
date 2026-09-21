import React from 'react';
import { cn } from '@/lib/utils';
import { Card } from '../ui/Card';
import { Badge } from '../ui/Badge';
import { CheckCircle2, Clock, ArrowRight, ArrowLeft } from 'lucide-react';
import { LessonType } from '@/types';

export interface LessonCardProps extends React.HTMLAttributes<HTMLDivElement> {
  order: number;
  title: string;
  summary: string;
  estimatedMinutes: number;
  type: LessonType;
  isCompleted?: boolean;
  onSelect?: () => void;
}

const typeLabelMap: Record<LessonType, { label: string; variant: 'primary' | 'secondary' | 'accent' | 'outline' }> = {
  theory: { label: 'تأسيس نظري', variant: 'outline' },
  interactive: { label: 'درس تفاعلي', variant: 'primary' },
  'code-lab': { label: 'مختبر كود', variant: 'secondary' },
  'ai-prompt': { label: 'موجه AI', variant: 'accent' },
  'project-walkthrough': { label: 'ورشة مشروع', variant: 'primary' },
};

export const LessonCard: React.FC<LessonCardProps> = ({
  order,
  title,
  summary,
  estimatedMinutes,
  type,
  isCompleted = false,
  onSelect,
  className,
  ...props
}) => {
  const typeConfig = typeLabelMap[type] || { label: 'درس', variant: 'outline' };

  return (
    <Card
      variant="interactive"
      onClick={onSelect}
      className={cn(
        'group flex flex-col justify-between text-start transition-all',
        isCompleted && 'border-[var(--color-success-border)] bg-[var(--color-surface)]',
        className
      )}
      {...props}
    >
      <div>
        <div className="flex items-center justify-between gap-3 mb-3">
          <div className="flex items-center gap-2">
            <span className="font-mono text-xs font-bold text-[var(--color-primary)] px-2 py-0.5 rounded-md bg-[var(--color-primary-subtle)]">
              {String(order).padStart(2, '0')}
            </span>
            <Badge variant={typeConfig.variant} size="sm">
              {typeConfig.label}
            </Badge>
          </div>

          <div className="flex items-center gap-2 text-caption text-[var(--color-text-subtle)]">
            <Clock className="w-3.5 h-3.5" />
            <span>{estimatedMinutes} دقيقة</span>
            {isCompleted && (
              <CheckCircle2 className="w-4 h-4 text-[var(--color-success)] ms-1" />
            )}
          </div>
        </div>

        <h4 className="text-body font-bold text-[var(--color-text)] group-hover:text-[var(--color-primary)] transition-colors mb-1.5 leading-snug">
          {title}
        </h4>
        <p className="text-body-sm text-[var(--color-text-muted)] line-clamp-2 leading-relaxed mb-4">
          {summary}
        </p>
      </div>

      <div className="flex items-center justify-between pt-3 border-t border-[var(--color-border-subtle)] text-xs font-semibold text-[var(--color-primary)]">
        <span>{isCompleted ? 'مكتمل — مراجعة الدرس' : 'ابدأ الدرس الآن'}</span>
        <span className="rtl:hidden inline-flex transform group-hover:translate-x-1 transition-transform">
          <ArrowRight className="w-4 h-4" />
        </span>
        <span className="ltr:hidden inline-flex transform group-hover:-translate-x-1 transition-transform">
          <ArrowLeft className="w-4 h-4" />
        </span>
      </div>
    </Card>
  );
};
