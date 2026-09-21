'use client';

import React from 'react';
import { cn } from '@/lib/utils';
import { Breadcrumbs } from './Breadcrumbs';
import { BreadcrumbItem } from '@/types';

/* 1. PageContainer */
export interface PageContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  maxWidth?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '7xl' | 'full';
}

const maxWidthMap = {
  sm: 'max-w-screen-sm',
  md: 'max-w-screen-md',
  lg: 'max-w-screen-lg',
  xl: 'max-w-screen-xl',
  '2xl': 'max-w-screen-2xl',
  '7xl': 'max-w-7xl',
  full: 'max-w-full',
};

export const PageContainer: React.FC<PageContainerProps> = ({
  className,
  maxWidth = '7xl',
  children,
  ...props
}) => {
  return (
    <div
      className={cn(
        'w-full mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8',
        maxWidthMap[maxWidth],
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};

/* 2. PageHeader */
export interface PageHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  subtitle?: string;
  badge?: React.ReactNode;
  breadcrumbs?: BreadcrumbItem[];
  actions?: React.ReactNode;
}

export const PageHeader: React.FC<PageHeaderProps> = ({
  title,
  subtitle,
  badge,
  breadcrumbs,
  actions,
  className,
  ...props
}) => {
  return (
    <header className={cn('mb-8 sm:mb-10 text-start', className)} {...props}>
      {breadcrumbs && <Breadcrumbs items={breadcrumbs} className="mb-3" />}

      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="space-y-1.5 max-w-3xl">
          <div className="flex items-center gap-3">
            <h1 className="text-h1 font-bold text-[var(--color-text)] tracking-tight">
              {title}
            </h1>
            {badge && <div>{badge}</div>}
          </div>
          {subtitle && (
            <p className="text-body text-[var(--color-text-muted)] leading-relaxed">
              {subtitle}
            </p>
          )}
        </div>

        {actions && <div className="flex items-center gap-2.5 shrink-0">{actions}</div>}
      </div>
    </header>
  );
};

/* 3. PageSection */
export interface PageSectionProps extends React.HTMLAttributes<HTMLElement> {
  title?: string;
  subtitle?: string;
  action?: React.ReactNode;
}

export const PageSection: React.FC<PageSectionProps> = ({
  title,
  subtitle,
  action,
  children,
  className,
  ...props
}) => {
  return (
    <section className={cn('my-8 sm:my-12 text-start', className)} {...props}>
      {(title || action) && (
        <div className="flex items-end justify-between gap-4 mb-4 sm:mb-6 border-b border-[var(--color-border-subtle)] pb-3">
          <div>
            {title && <h2 className="text-h2 font-bold text-[var(--color-text)]">{title}</h2>}
            {subtitle && (
              <p className="text-body-sm text-[var(--color-text-muted)] mt-1">{subtitle}</p>
            )}
          </div>
          {action && <div>{action}</div>}
        </div>
      )}
      {children}
    </section>
  );
};

/* 4. ContentGrid */
export interface ContentGridProps extends React.HTMLAttributes<HTMLDivElement> {
  columns?: 1 | 2 | 3 | 4;
}

export const ContentGrid: React.FC<ContentGridProps> = ({
  columns = 3,
  children,
  className,
  ...props
}) => {
  const columnStyles = {
    1: 'grid-cols-1',
    2: 'grid-cols-1 md:grid-cols-2',
    3: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
    4: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4',
  };

  return (
    <div
      className={cn('grid gap-4 sm:gap-6', columnStyles[columns], className)}
      {...props}
    >
      {children}
    </div>
  );
};

/* 5. TwoColumnLayout */
export interface TwoColumnLayoutProps extends React.HTMLAttributes<HTMLDivElement> {
  main: React.ReactNode;
  aside: React.ReactNode;
  asideWidth?: 'normal' | 'wide';
}

export const TwoColumnLayout: React.FC<TwoColumnLayoutProps> = ({
  main,
  aside,
  asideWidth = 'normal',
  className,
  ...props
}) => {
  return (
    <div
      className={cn('grid grid-cols-1 lg:grid-cols-12 gap-8 items-start', className)}
      {...props}
    >
      <div
        className={cn(
          asideWidth === 'normal' ? 'lg:col-span-8 xl:col-span-9' : 'lg:col-span-7'
        )}
      >
        {main}
      </div>
      <aside
        className={cn(
          'lg:sticky lg:top-20 space-y-6',
          asideWidth === 'normal' ? 'lg:col-span-4 xl:col-span-3' : 'lg:col-span-5'
        )}
      >
        {aside}
      </aside>
    </div>
  );
};

/* 6. ReadingLayout */
export interface ReadingLayoutProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export const ReadingLayout: React.FC<ReadingLayoutProps> = ({
  children,
  className,
  ...props
}) => {
  return (
    <article
      className={cn(
        'max-w-3xl mx-auto py-4 text-start leading-relaxed',
        className
      )}
      {...props}
    >
      {children}
    </article>
  );
};
