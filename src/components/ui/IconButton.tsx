import React from 'react';
import { cn } from '@/lib/utils';
import { ButtonVariant, ButtonSize } from './Button';
import { Loader2 } from 'lucide-react';

export interface IconButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  isLoading?: boolean;
  'aria-label': string; // strictly required for accessibility
}

const iconSizeStyles: Record<ButtonSize, string> = {
  sm: 'w-8 h-8 rounded-md p-1.5',
  md: 'w-10 h-10 rounded-lg p-2',
  lg: 'w-12 h-12 rounded-xl p-2.5',
};

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    'bg-[var(--color-primary)] text-[var(--color-text-inverse)] hover:bg-[var(--color-primary-hover)] active:bg-[var(--color-primary-active)] shadow-sm border border-transparent',
  secondary:
    'bg-[var(--color-secondary)] text-white hover:bg-[var(--color-secondary-hover)] active:opacity-90 shadow-sm border border-transparent',
  outline:
    'bg-transparent text-[var(--color-text)] border border-[var(--color-border-strong)] hover:bg-[var(--color-surface-sunken)] active:bg-[var(--color-border)]',
  ghost:
    'bg-transparent text-[var(--color-text)] hover:bg-[var(--color-surface-sunken)] active:bg-[var(--color-border-subtle)] border border-transparent',
  destructive:
    'bg-[var(--color-error)] text-white hover:opacity-90 active:opacity-100 shadow-sm border border-transparent',
};

export const IconButton = React.forwardRef<HTMLButtonElement, IconButtonProps>(
  (
    {
      className,
      variant = 'ghost',
      size = 'md',
      isLoading = false,
      children,
      disabled,
      'aria-label': ariaLabel,
      ...props
    },
    ref
  ) => {
    const isDisabled = disabled || isLoading;

    return (
      <button
        ref={ref}
        disabled={isDisabled}
        aria-busy={isLoading}
        aria-disabled={isDisabled}
        aria-label={ariaLabel}
        title={ariaLabel}
        className={cn(
          'inline-flex items-center justify-center transition-all duration-150 select-none cursor-pointer',
          'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-primary)]',
          'disabled:opacity-50 disabled:cursor-not-allowed disabled:pointer-events-none',
          variantStyles[variant],
          iconSizeStyles[size],
          className
        )}
        {...props}
      >
        {isLoading ? <Loader2 className="w-4 h-4 animate-spin" /> : children}
      </button>
    );
  }
);

IconButton.displayName = 'IconButton';
