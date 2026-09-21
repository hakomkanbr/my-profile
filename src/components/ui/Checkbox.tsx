import React from 'react';
import { cn } from '@/lib/utils';
import { Check } from 'lucide-react';

export interface CheckboxProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> {
  label?: string;
  description?: string;
}

export const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
  ({ className, label, description, id, checked, disabled, ...props }, ref) => {
    const checkboxId = id || (label ? label.toLowerCase().replace(/\s+/g, '-') : undefined);

    return (
      <label
        htmlFor={checkboxId}
        className={cn(
          'inline-flex items-start gap-3 select-none cursor-pointer',
          disabled && 'opacity-60 cursor-not-allowed'
        )}
      >
        <div className="relative flex items-center justify-center mt-0.5 shrink-0">
          <input
            id={checkboxId}
            ref={ref}
            type="checkbox"
            checked={checked}
            disabled={disabled}
            className="peer sr-only"
            {...props}
          />
          <div
            className={cn(
              'w-5 h-5 rounded-md border border-[var(--color-border-strong)] bg-[var(--color-surface)]',
              'transition-all duration-150 flex items-center justify-center',
              'peer-focus-visible:ring-2 peer-focus-visible:ring-[var(--color-focus-ring)] peer-focus-visible:border-[var(--color-primary)]',
              'peer-checked:bg-[var(--color-primary)] peer-checked:border-[var(--color-primary)] text-white',
              className
            )}
          >
            <Check className="w-3.5 h-3.5 opacity-0 peer-checked:opacity-100 transition-opacity stroke-[3]" />
          </div>
        </div>
        {(label || description) && (
          <div className="flex flex-col text-start">
            {label && (
              <span className="text-body-sm font-medium text-[var(--color-text)]">
                {label}
              </span>
            )}
            {description && (
              <span className="text-caption text-[var(--color-text-subtle)]">
                {description}
              </span>
            )}
          </div>
        )}
      </label>
    );
  }
);

Checkbox.displayName = 'Checkbox';
