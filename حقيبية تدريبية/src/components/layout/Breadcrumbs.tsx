'use client';

import React from 'react';
import Link from 'next/link';
import { cn, getLocalizedText } from '@/lib/utils';
import { BreadcrumbItem } from '@/types';
import { ChevronLeft, ChevronRight, Home } from 'lucide-react';
import { usePreferencesStore } from '@/store';

export interface BreadcrumbsProps extends React.HTMLAttributes<HTMLElement> {
  items: BreadcrumbItem[];
  showHomeIcon?: boolean;
}

export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({
  items,
  showHomeIcon = true,
  className,
  ...props
}) => {
  const { language } = usePreferencesStore();
  const isRtl = language === 'ar';

  if (!items || items.length === 0) return null;

  return (
    <nav
      aria-label="مسار التصفح"
      className={cn('flex items-center text-caption font-medium overflow-x-auto no-scrollbar py-1', className)}
      {...props}
    >
      <ol className="flex items-center gap-1.5 whitespace-nowrap text-[var(--color-text-subtle)]">
        {showHomeIcon && (
          <li className="inline-flex items-center">
            <Link
              href="/"
              className="inline-flex items-center gap-1 text-[var(--color-text-subtle)] hover:text-[var(--color-primary)] transition-colors p-1 rounded-md"
              aria-label="الصفحة الرئيسية"
            >
              <Home className="w-3.5 h-3.5" />
            </Link>
          </li>
        )}

        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          const label = typeof item.label === 'string' ? item.label : getLocalizedText(item.label, language);

          return (
            <React.Fragment key={item.id || index}>
              <li className="inline-flex items-center text-[var(--color-border-strong)]">
                {isRtl ? (
                  <ChevronLeft className="w-3.5 h-3.5 shrink-0" />
                ) : (
                  <ChevronRight className="w-3.5 h-3.5 shrink-0" />
                )}
              </li>

              <li className="inline-flex items-center">
                {isLast || !item.href ? (
                  <span
                    aria-current={isLast ? 'page' : undefined}
                    className="font-semibold text-[var(--color-text)] px-1.5 py-0.5 rounded-md"
                  >
                    {label}
                  </span>
                ) : (
                  <Link
                    href={item.href}
                    className="hover:text-[var(--color-primary)] transition-colors px-1.5 py-0.5 rounded-md hover:bg-[var(--color-surface-sunken)]"
                  >
                    {label}
                  </Link>
                )}
              </li>
            </React.Fragment>
          );
        })}
      </ol>
    </nav>
  );
};
