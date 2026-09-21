import React from 'react';
import { cn } from '@/lib/utils';

export type BadgeVariant =
  | 'primary'
  | 'secondary'
  | 'accent'
  | 'success'
  | 'warning'
  | 'error'
  | 'info'
  | 'outline';

export type BadgeSize = 'sm' | 'md';

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: BadgeVariant;
  size?: BadgeSize;
  icon?: React.ReactNode;
}

const variantStyles: Record<BadgeVariant, string> = {
  primary:
    'bg-[var(--color-primary-subtle)] text-[var(--color-primary)] border border-[var(--color-border-strong)]',
  secondary:
    'bg-[var(--color-secondary-subtle)] text-[var(--color-secondary)] border border-[var(--color-border)]',
  accent:
    'bg-[var(--color-accent-subtle)] text-[var(--color-accent)] border border-[var(--color-accent)]/30',
  success:
    'bg-[var(--color-success-bg)] text-[var(--color-success)] border border-[var(--color-success-border)]',
  warning:
    'bg-[var(--color-warning-bg)] text-[var(--color-warning)] border border-[var(--color-warning-border)]',
  error:
    'bg-[var(--color-error-bg)] text-[var(--color-error)] border border-[var(--color-error-border)]',
  info:
    'bg-[var(--color-info-bg)] text-[var(--color-info)] border border-[var(--color-info-border)]',
  outline:
    'bg-transparent text-[var(--color-text)] border border-[var(--color-border-strong)]',
};

const sizeStyles: Record<BadgeSize, string> = {
  sm: 'text-[11px] px-2 py-0.5 rounded-md font-medium gap-1',
  md: 'text-xs px-2.5 py-1 rounded-lg font-semibold gap-1.5',
};

export const Badge: React.FC<BadgeProps> = ({
  className,
  variant = 'primary',
  size = 'md',
  icon,
  children,
  ...props
}) => {
  return (
    <span
      className={cn(
        'inline-flex items-center justify-center shrink-0 leading-none select-none transition-colors',
        variantStyles[variant],
        sizeStyles[size],
        className
      )}
      {...props}
    >
      {icon && <span className="shrink-0">{icon}</span>}
      <span>{children}</span>
    </span>
  );
};
