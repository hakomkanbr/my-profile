import React from 'react';
import { cn } from '@/lib/utils';
import { Lightbulb, AlertTriangle, Key, BookOpen } from 'lucide-react';

export interface PedagogicalCalloutProps extends React.HTMLAttributes<HTMLDivElement> {
  title?: string;
  children: React.ReactNode;
}

export const Callout: React.FC<PedagogicalCalloutProps> = ({
  title,
  children,
  className,
  ...props
}) => {
  return (
    <div
      className={cn(
        'p-4 sm:p-5 rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] shadow-xs my-4 text-start',
        'border-s-4 border-s-[var(--color-primary)]',
        className
      )}
      {...props}
    >
      <div className="flex items-center gap-2.5 mb-2 text-[var(--color-primary)]">
        <BookOpen className="w-5 h-5 shrink-0" />
        {title && <h5 className="text-body-sm font-bold tracking-tight">{title}</h5>}
      </div>
      <div className="text-body-sm text-[var(--color-text-muted)] leading-relaxed">{children}</div>
    </div>
  );
};

export const Tip: React.FC<PedagogicalCalloutProps> = ({
  title = 'نصيحة تقنية',
  children,
  className,
  ...props
}) => {
  return (
    <div
      className={cn(
        'p-4 sm:p-5 rounded-2xl border border-[var(--color-secondary)]/30 bg-[var(--color-secondary-subtle)] my-4 text-start',
        'border-s-4 border-s-[var(--color-secondary)]',
        className
      )}
      {...props}
    >
      <div className="flex items-center gap-2 mb-1.5 text-[var(--color-secondary)]">
        <Lightbulb className="w-5 h-5 shrink-0" />
        <h5 className="text-body-sm font-bold tracking-tight">{title}</h5>
      </div>
      <div className="text-body-sm text-[var(--color-text)] leading-relaxed">{children}</div>
    </div>
  );
};

export const Warning: React.FC<PedagogicalCalloutProps> = ({
  title = 'تنبيه مهم',
  children,
  className,
  ...props
}) => {
  return (
    <div
      className={cn(
        'p-4 sm:p-5 rounded-2xl border border-[var(--color-warning-border)] bg-[var(--color-warning-bg)] my-4 text-start',
        'border-s-4 border-s-[var(--color-warning)]',
        className
      )}
      {...props}
    >
      <div className="flex items-center gap-2 mb-1.5 text-[var(--color-warning)]">
        <AlertTriangle className="w-5 h-5 shrink-0" />
        <h5 className="text-body-sm font-bold tracking-tight">{title}</h5>
      </div>
      <div className="text-body-sm text-[var(--color-text)] leading-relaxed">{children}</div>
    </div>
  );
};

export const KeyConcept: React.FC<PedagogicalCalloutProps> = ({
  title = 'المفهوم الجوهري',
  children,
  className,
  ...props
}) => {
  return (
    <div
      className={cn(
        'p-4 sm:p-5 rounded-2xl border border-[var(--color-border-strong)] bg-[var(--color-surface-elevated)] shadow-sm my-4 text-start',
        'border-s-4 border-s-[var(--color-primary)]',
        className
      )}
      {...props}
    >
      <div className="flex items-center gap-2 mb-2 text-[var(--color-primary)]">
        <Key className="w-5 h-5 shrink-0" />
        <h5 className="text-body-sm font-bold tracking-tight uppercase">{title}</h5>
      </div>
      <div className="text-body-sm text-[var(--color-text)] leading-relaxed">{children}</div>
    </div>
  );
};
