import React from 'react';
import { cn } from '@/lib/utils';

export interface DividerProps extends React.HTMLAttributes<HTMLDivElement> {
  orientation?: 'horizontal' | 'vertical';
  label?: string;
}

export const Divider: React.FC<DividerProps> = ({
  className,
  orientation = 'horizontal',
  label,
  ...props
}) => {
  if (orientation === 'vertical') {
    return (
      <div
        role="separator"
        aria-orientation="vertical"
        className={cn('inline-block w-px bg-[var(--color-border)] self-stretch min-h-[1em]', className)}
        {...props}
      />
    );
  }

  if (label) {
    return (
      <div
        role="separator"
        aria-orientation="horizontal"
        className={cn('relative flex items-center w-full my-4', className)}
        {...props}
      >
        <div className="flex-grow border-t border-[var(--color-border)]" />
        <span className="shrink-0 px-3 text-caption uppercase font-semibold text-[var(--color-text-subtle)] bg-[var(--color-background)]">
          {label}
        </span>
        <div className="flex-grow border-t border-[var(--color-border)]" />
      </div>
    );
  }

  return (
    <div
      role="separator"
      aria-orientation="horizontal"
      className={cn('w-full border-t border-[var(--color-border)] my-4', className)}
      {...props}
    />
  );
};
