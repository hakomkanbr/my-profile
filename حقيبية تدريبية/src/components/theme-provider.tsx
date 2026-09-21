'use client';

/**
 * WEB CREATOR AI — Theme & Language Provider
 * Syncs Zustand preferences store with document HTML root element,
 * managing 'dark' class, 'dir' attribute (rtl/ltr), and system theme changes.
 */

import React, { useEffect } from 'react';
import { usePreferencesStore } from '@/store';

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const { theme, language } = usePreferencesStore();

  useEffect(() => {
    const root = document.documentElement;

    // 1. Sync Direction & Language attribute
    root.setAttribute('lang', language);
    root.setAttribute('dir', language === 'ar' ? 'rtl' : 'ltr');

    // 2. Sync Theme (Light / Dark / System)
    const applyDark = (isDark: boolean) => {
      if (isDark) {
        root.classList.add('dark');
      } else {
        root.classList.remove('dark');
      }
    };

    if (theme === 'system') {
      const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
      applyDark(mediaQuery.matches);

      const handler = (e: MediaQueryListEvent) => applyDark(e.matches);
      mediaQuery.addEventListener('change', handler);
      return () => mediaQuery.removeEventListener('change', handler);
    } else {
      applyDark(theme === 'dark');
    }
  }, [theme, language]);

  return <>{children}</>;
}
