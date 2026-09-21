import React from 'react';
import { cn } from '@/lib/utils';
import { JourneyStageId } from '@/types';

export interface StageBadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  stageId: JourneyStageId;
  stageNumber?: string;
  stageCode?: string;
  size?: 'sm' | 'md';
}

const stageStyles: Record<JourneyStageId, { bg: string; text: string; border: string }> = {
  '01-think': {
    bg: 'bg-[var(--stage-01-bg)]',
    text: 'text-[var(--stage-01-text)]',
    border: 'border-[var(--stage-01-border)]',
  },
  '02-design': {
    bg: 'bg-[var(--stage-02-bg)]',
    text: 'text-[var(--stage-02-text)]',
    border: 'border-[var(--stage-02-border)]',
  },
  '03-build': {
    bg: 'bg-[var(--stage-03-bg)]',
    text: 'text-[var(--stage-03-text)]',
    border: 'border-[var(--stage-03-border)]',
  },
  '04-develop': {
    bg: 'bg-[var(--stage-04-bg)]',
    text: 'text-[var(--stage-04-text)]',
    border: 'border-[var(--stage-04-border)]',
  },
  '05-enhance': {
    bg: 'bg-[var(--stage-05-bg)]',
    text: 'text-[var(--stage-05-text)]',
    border: 'border-[var(--stage-05-border)]',
  },
  '06-launch': {
    bg: 'bg-[var(--stage-06-bg)]',
    text: 'text-[var(--stage-06-text)]',
    border: 'border-[var(--stage-06-border)]',
  },
  '07-grow': {
    bg: 'bg-[var(--stage-07-bg)]',
    text: 'text-[var(--stage-07-text)]',
    border: 'border-[var(--stage-07-border)]',
  },
};

export const StageBadge: React.FC<StageBadgeProps> = ({
  stageId,
  stageNumber,
  stageCode,
  size = 'md',
  className,
  ...props
}) => {
  const style = stageStyles[stageId] || stageStyles['01-think'];

  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5 rounded-full border font-bold uppercase tracking-wider',
        style.bg,
        style.text,
        style.border,
        size === 'sm' ? 'text-[10px] px-2 py-0.5' : 'text-xs px-2.5 py-1',
        className
      )}
      {...props}
    >
      {stageNumber && <span className="opacity-75 font-mono">{stageNumber}</span>}
      <span>{stageCode || stageId.replace(/^\d+-/, '').toUpperCase()}</span>
    </span>
  );
};
