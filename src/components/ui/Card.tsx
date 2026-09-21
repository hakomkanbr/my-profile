import React from 'react';
import { cn } from '@/lib/utils';

export type CardVariant =
  | 'default'
  | 'interactive'
  | 'featured'
  | 'educational'
  | 'project'
  | 'stage';

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: CardVariant;
  isSelected?: boolean;
  isDisabled?: boolean;
}

const variantStyles: Record<CardVariant, string> = {
  default:
    'bg-[var(--color-surface)] border border-[var(--color-border)] shadow-sm',
  interactive:
    'bg-[var(--color-surface)] border border-[var(--color-border)] shadow-sm hover:border-[var(--color-secondary)] hover:shadow-md transition-all duration-200 cursor-pointer active:scale-[0.99]',
  featured:
    'bg-[var(--color-surface-elevated)] border-2 border-[var(--color-secondary)] shadow-md relative overflow-hidden',
  educational:
    'bg-[var(--color-surface)] border-l-4 border-l-[var(--color-primary)] rtl:border-l-0 rtl:border-r-4 rtl:border-r-[var(--color-primary)] border-[var(--color-border)] shadow-sm hover:shadow-md transition-shadow',
  project:
    'bg-[var(--color-surface)] border border-[var(--color-border)] hover:border-[var(--color-border-strong)] shadow-sm transition-all duration-200',
  stage:
    'bg-[var(--color-surface)] border border-[var(--color-border)] hover:border-[var(--color-secondary)] transition-all duration-200',
};

export const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, variant = 'default', isSelected = false, isDisabled = false, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        aria-disabled={isDisabled}
        className={cn(
          'rounded-2xl p-5 sm:p-6 text-[var(--color-text)]',
          variantStyles[variant],
          isSelected && 'ring-2 ring-[var(--color-primary)] border-[var(--color-primary)]',
          isDisabled && 'opacity-50 pointer-events-none cursor-not-allowed',
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
);

Card.displayName = 'Card';

export const CardHeader = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn('flex flex-col space-y-1.5 pb-4', className)} {...props} />
  )
);
CardHeader.displayName = 'CardHeader';

export const CardTitle = React.forwardRef<HTMLHeadingElement, React.HTMLAttributes<HTMLHeadingElement>>(
  ({ className, ...props }, ref) => (
    <h3 ref={ref} className={cn('text-h3 font-semibold text-[var(--color-text)]', className)} {...props} />
  )
);
CardTitle.displayName = 'CardTitle';

export const CardDescription = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLParagraphElement>>(
  ({ className, ...props }, ref) => (
    <p ref={ref} className={cn('text-body-sm text-[var(--color-text-muted)]', className)} {...props} />
  )
);
CardDescription.displayName = 'CardDescription';

export const CardContent = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn('pt-0', className)} {...props} />
  )
);
CardContent.displayName = 'CardContent';

export const CardFooter = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn('flex items-center pt-4 border-t border-[var(--color-border-subtle)] mt-4', className)} {...props} />
  )
);
CardFooter.displayName = 'CardFooter';
