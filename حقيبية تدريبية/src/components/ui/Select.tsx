import React from 'react';
import { cn } from '@/lib/utils';
import { ChevronDown } from 'lucide-react';

export interface SelectOption {
  value: string;
  label: string;
  disabled?: boolean;
}

export interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  helperText?: string;
  error?: string;
  options: SelectOption[];
}

export const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
  ({ className, label, helperText, error, options, id, disabled, ...props }, ref) => {
    const selectId = id || (label ? label.toLowerCase().replace(/\s+/g, '-') : undefined);
    const errorId = error ? `${selectId}-error` : undefined;

    return (
      <div className="w-full flex flex-col space-y-1.5 text-start">
        {label && (
          <label htmlFor={selectId} className="text-label text-[var(--color-text)] cursor-pointer">
            {label}
          </label>
        )}
        <div className="relative flex items-center w-full">
          <select
            id={selectId}
            ref={ref}
            disabled={disabled}
            aria-invalid={Boolean(error)}
            aria-describedby={errorId}
            className={cn(
              'w-full appearance-none bg-[var(--color-surface)] border border-[var(--color-border)] rounded-xl px-3.5 py-2.5 pe-10',
              'text-body-sm text-[var(--color-text)]',
              'transition-all duration-150 cursor-pointer',
              'focus-visible:outline-none focus-visible:border-[var(--color-primary)] focus-visible:ring-2 focus-visible:ring-[var(--color-focus-ring)]',
              'disabled:bg-[var(--color-surface-sunken)] disabled:opacity-60 disabled:cursor-not-allowed',
              error && 'border-[var(--color-error)]',
              className
            )}
            {...props}
          >
            {options.map((opt) => (
              <option key={opt.value} value={opt.value} disabled={opt.disabled}>
                {opt.label}
              </option>
            ))}
          </select>
          <div className="absolute end-3 flex items-center pointer-events-none text-[var(--color-text-subtle)]">
            <ChevronDown className="w-4 h-4" />
          </div>
        </div>
        {error ? (
          <p id={errorId} className="text-caption text-[var(--color-error)] font-medium">
            {error}
          </p>
        ) : helperText ? (
          <p className="text-caption text-[var(--color-text-subtle)]">{helperText}</p>
        ) : null}
      </div>
    );
  }
);

Select.displayName = 'Select';
