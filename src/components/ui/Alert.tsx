import React from 'react';
import { cn } from '@/lib/utils';
import { Info, CheckCircle2, AlertTriangle, AlertCircle } from 'lucide-react';

export type AlertVariant = 'info' | 'success' | 'warning' | 'error';

export interface AlertProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: AlertVariant;
  title?: string;
  icon?: React.ReactNode;
}

const variantConfig: Record<
  AlertVariant,
  {
    container: string;
    iconColor: string;
    defaultIcon: React.ReactNode;
  }
> = {
  info: {
    container: 'bg-[var(--color-info-bg)] border-[var(--color-info-border)] text-[var(--color-text)]',
    iconColor: 'text-[var(--color-info)]',
    defaultIcon: <Info className="w-5 h-5" />,
  },
  success: {
    container: 'bg-[var(--color-success-bg)] border-[var(--color-success-border)] text-[var(--color-text)]',
    iconColor: 'text-[var(--color-success)]',
    defaultIcon: <CheckCircle2 className="w-5 h-5" />,
  },
  warning: {
    container: 'bg-[var(--color-warning-bg)] border-[var(--color-warning-border)] text-[var(--color-text)]',
    iconColor: 'text-[var(--color-warning)]',
    defaultIcon: <AlertTriangle className="w-5 h-5" />,
  },
  error: {
    container: 'bg-[var(--color-error-bg)] border-[var(--color-error-border)] text-[var(--color-text)]',
    iconColor: 'text-[var(--color-error)]',
    defaultIcon: <AlertCircle className="w-5 h-5" />,
  },
};

export const Alert: React.FC<AlertProps> = ({
  className,
  variant = 'info',
  title,
  icon,
  children,
  ...props
}) => {
  const config = variantConfig[variant];

  return (
    <div
      role="alert"
      className={cn(
        'w-full flex items-start gap-3.5 p-4 rounded-xl border text-start transition-all',
        config.container,
        className
      )}
      {...props}
    >
      <span className={cn('shrink-0 mt-0.5', config.iconColor)}>
        {icon || config.defaultIcon}
      </span>
      <div className="flex flex-col space-y-1 flex-1">
        {title && <h5 className="text-body-sm font-semibold leading-tight">{title}</h5>}
        {children && <div className="text-body-sm text-[var(--color-text-muted)] leading-relaxed">{children}</div>}
      </div>
    </div>
  );
};
