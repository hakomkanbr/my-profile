import React from 'react';
import { cn } from '@/lib/utils';

export interface SkeletonProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'rectangular' | 'circular' | 'rounded';
}

export const Skeleton: React.FC<SkeletonProps> = ({
  className,
  variant = 'rounded',
  ...props
}) => {
  const variantStyles = {
    rectangular: 'rounded-none',
    circular: 'rounded-full',
    rounded: 'rounded-xl',
  };

  return (
    <div
      aria-hidden="true"
      className={cn(
        'animate-pulse bg-[var(--color-surface-sunken)] border border-[var(--color-border-subtle)]',
        variantStyles[variant],
        className
      )}
      {...props}
    />
  );
};
