import React from 'react';
import { cn } from '@/lib/utils';
import { Sparkles } from 'lucide-react';

export interface EmptyStateProps extends React.HTMLAttributes<HTMLDivElement> {
  icon?: React.ReactNode;
  title: string;
  description?: string;
  action?: React.ReactNode;
}

export const EmptyState: React.FC<EmptyStateProps> = ({
  icon,
  title,
  description,
  action,
  className,
  ...props
}) => {
  return (
    <div
      className={cn(
        'flex flex-col items-center justify-center text-center p-8 sm:p-12 rounded-2xl',
        'border border-dashed border-[var(--color-border-strong)] bg-[var(--color-surface-sunken)]',
        className
      )}
      {...props}
    >
      <div className="w-12 h-12 rounded-2xl flex items-center justify-center bg-[var(--color-primary-subtle)] text-[var(--color-primary)] mb-4">
        {icon || <Sparkles className="w-6 h-6" />}
      </div>
      <h4 className="text-h4 text-[var(--color-text)] mb-1.5">{title}</h4>
      {description && (
        <p className="text-body-sm text-[var(--color-text-muted)] max-w-md mb-6 leading-relaxed">
          {description}
        </p>
      )}
      {action && <div className="inline-flex">{action}</div>}
    </div>
  );
};
