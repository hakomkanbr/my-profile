import React from 'react';
import { cn } from '@/lib/utils';

export interface ProgressProps extends React.HTMLAttributes<HTMLDivElement> {
  value: number; // 0 to 100
  max?: number;
  showLabel?: boolean;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'primary' | 'secondary' | 'success';
}

const heightStyles = {
  sm: 'h-1.5',
  md: 'h-2.5',
  lg: 'h-4',
};

const variantFillStyles = {
  primary: 'bg-[var(--color-primary)]',
  secondary: 'bg-[var(--color-secondary)]',
  success: 'bg-[var(--color-success)]',
};

export const Progress: React.FC<ProgressProps> = ({
  className,
  value = 0,
  max = 100,
  showLabel = false,
  size = 'md',
  variant = 'primary',
  ...props
}) => {
  const percentage = Math.min(100, Math.max(0, Math.round((value / max) * 100)));

  return (
    <div className="w-full flex flex-col gap-1.5" {...props}>
      {showLabel && (
        <div className="flex justify-between items-center text-caption font-semibold text-[var(--color-text-muted)]">
          <span>التقدم الإجمالي</span>
          <span className="font-mono">{percentage}%</span>
        </div>
      )}
      <div
        role="progressbar"
        aria-valuenow={percentage}
        aria-valuemin={0}
        aria-valuemax={100}
        className={cn(
          'w-full bg-[var(--color-surface-sunken)] border border-[var(--color-border)] rounded-full overflow-hidden relative',
          heightStyles[size],
          className
        )}
      >
        <div
          className={cn(
            'h-full transition-all duration-300 ease-out rounded-full',
            variantFillStyles[variant]
          )}
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
};
