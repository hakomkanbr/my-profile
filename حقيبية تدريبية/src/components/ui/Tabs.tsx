'use client';

import React, { useState } from 'react';
import { cn } from '@/lib/utils';

export interface TabItem {
  id: string;
  label: string;
  icon?: React.ReactNode;
  badge?: string | number;
  disabled?: boolean;
}

export interface TabsProps {
  tabs: TabItem[];
  activeTabId?: string;
  defaultTabId?: string;
  onTabChange?: (tabId: string) => void;
  className?: string;
  children?: React.ReactNode;
}

export const Tabs: React.FC<TabsProps> = ({
  tabs,
  activeTabId,
  defaultTabId,
  onTabChange,
  className,
}) => {
  const [internalActive, setInternalActive] = useState(
    defaultTabId || (tabs.length > 0 ? tabs[0].id : '')
  );

  const currentActive = activeTabId !== undefined ? activeTabId : internalActive;

  const handleSelect = (id: string, disabled?: boolean) => {
    if (disabled) return;
    if (activeTabId === undefined) {
      setInternalActive(id);
    }
    onTabChange?.(id);
  };

  return (
    <div
      role="tablist"
      className={cn(
        'inline-flex items-center gap-1.5 p-1 rounded-xl bg-[var(--color-surface-sunken)] border border-[var(--color-border)]',
        'overflow-x-auto max-w-full no-scrollbar',
        className
      )}
    >
      {tabs.map((tab) => {
        const isSelected = currentActive === tab.id;
        return (
          <button
            key={tab.id}
            role="tab"
            aria-selected={isSelected}
            disabled={tab.disabled}
            onClick={() => handleSelect(tab.id, tab.disabled)}
            className={cn(
              'inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-body-sm font-medium transition-all duration-150 whitespace-nowrap cursor-pointer',
              'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-focus-ring)]',
              isSelected
                ? 'bg-[var(--color-surface)] text-[var(--color-primary)] font-semibold shadow-sm'
                : 'text-[var(--color-text-muted)] hover:text-[var(--color-text)] hover:bg-[var(--color-surface)]/50',
              tab.disabled && 'opacity-40 cursor-not-allowed pointer-events-none'
            )}
          >
            {tab.icon && <span className="shrink-0">{tab.icon}</span>}
            <span>{tab.label}</span>
            {tab.badge !== undefined && (
              <span
                className={cn(
                  'text-[10px] px-1.5 py-0.5 rounded-full font-bold',
                  isSelected
                    ? 'bg-[var(--color-primary-subtle)] text-[var(--color-primary)]'
                    : 'bg-[var(--color-border)] text-[var(--color-text-subtle)]'
                )}
              >
                {tab.badge}
              </span>
            )}
          </button>
        );
      })}
    </div>
  );
};
