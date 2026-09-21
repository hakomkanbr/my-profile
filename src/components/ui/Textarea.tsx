import React from 'react';
import { cn } from '@/lib/utils';

export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  helperText?: string;
  error?: string;
}

export const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, label, helperText, error, id, disabled, rows = 4, ...props }, ref) => {
    const textareaId = id || (label ? label.toLowerCase().replace(/\s+/g, '-') : undefined);
    const errorId = error ? `${textareaId}-error` : undefined;

    return (
      <div className="w-full flex flex-col space-y-1.5 text-start">
        {label && (
          <label
            htmlFor={textareaId}
            className="text-label text-[var(--color-text)] cursor-pointer"
          >
            {label}
          </label>
        )}
        <textarea
          id={textareaId}
          ref={ref}
          rows={rows}
          disabled={disabled}
          aria-invalid={Boolean(error)}
          aria-describedby={errorId}
          className={cn(
            'w-full bg-[var(--color-surface)] border border-[var(--color-border)] rounded-xl px-3.5 py-2.5',
            'text-body-sm text-[var(--color-text)] placeholder:text-[var(--color-text-subtle)] leading-relaxed',
            'transition-all duration-150 resize-y',
            'focus-visible:outline-none focus-visible:border-[var(--color-primary)] focus-visible:ring-2 focus-visible:ring-[var(--color-focus-ring)]',
            'disabled:bg-[var(--color-surface-sunken)] disabled:opacity-60 disabled:cursor-not-allowed',
            error && 'border-[var(--color-error)] focus-visible:ring-[var(--color-error)]/20',
            className
          )}
          {...props}
        />
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

Textarea.displayName = 'Textarea';
