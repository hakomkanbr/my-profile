import React from 'react';
import { cn } from '@/lib/utils';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  helperText?: string;
  error?: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type = 'text', label, helperText, error, leftIcon, rightIcon, id, disabled, ...props }, ref) => {
    const inputId = id || (label ? label.toLowerCase().replace(/\s+/g, '-') : undefined);
    const errorId = error ? `${inputId}-error` : undefined;

    return (
      <div className="w-full flex flex-col space-y-1.5 text-start">
        {label && (
          <label
            htmlFor={inputId}
            className="text-label text-[var(--color-text)] cursor-pointer"
          >
            {label}
          </label>
        )}
        <div className="relative flex items-center w-full">
          {leftIcon && (
            <div className="absolute start-3 flex items-center pointer-events-none text-[var(--color-text-subtle)]">
              {leftIcon}
            </div>
          )}
          <input
            id={inputId}
            ref={ref}
            type={type}
            disabled={disabled}
            aria-invalid={Boolean(error)}
            aria-describedby={errorId}
            className={cn(
              'w-full bg-[var(--color-surface)] border border-[var(--color-border)] rounded-xl px-3.5 py-2.5',
              'text-body-sm text-[var(--color-text)] placeholder:text-[var(--color-text-subtle)]',
              'transition-all duration-150',
              'focus-visible:outline-none focus-visible:border-[var(--color-primary)] focus-visible:ring-2 focus-visible:ring-[var(--color-focus-ring)]',
              'disabled:bg-[var(--color-surface-sunken)] disabled:opacity-60 disabled:cursor-not-allowed',
              leftIcon && 'ps-10',
              rightIcon && 'pe-10',
              error && 'border-[var(--color-error)] focus-visible:ring-[var(--color-error)]/20',
              className
            )}
            {...props}
          />
          {rightIcon && (
            <div className="absolute end-3 flex items-center pointer-events-none text-[var(--color-text-subtle)]">
              {rightIcon}
            </div>
          )}
        </div>
        {error ? (
          <p id={errorId} className="text-caption text-[var(--color-error)] font-medium">
            {error}
          </p>
        ) : helperText ? (
          <p className="text-caption text-[var(--color-text-subtle)]">
            {helperText}
          </p>
        ) : null}
      </div>
    );
  }
);

Input.displayName = 'Input';
