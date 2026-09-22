'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn, getLocalizedText } from '@/lib/utils';
import { TRAINER_NAVIGATION_ITEMS } from '@/content/navigation';
import { usePreferencesStore, useTrainerAuthStore, useSessionStore } from '@/store';
import { IconMapper, Sun, Moon, Monitor, Globe, MonitorPlay, LogOut } from './IconMapper';
import { Dropdown } from '../ui/Dropdown';

export interface TrainerShellProps {
  children: React.ReactNode;
  headerTitle?: string;
}

export const TrainerShell: React.FC<TrainerShellProps> = ({
  children,
  headerTitle,
}) => {
  const pathname = usePathname();
  const { language, theme, setLanguage, setTheme } = usePreferencesStore();
  const { isAuthenticated, logout } = useTrainerAuthStore();
  const { initializeSessions } = useSessionStore();

  React.useEffect(() => {
    initializeSessions();
  }, [initializeSessions]);

  const isRtl = language === 'ar';


  const themeOptions = [
    {
      id: 'theme-light',
      label: isRtl ? 'نهاري (Light)' : 'Light',
      icon: <Sun className="w-4 h-4" />,
      onClick: () => setTheme('light'),
    },
    {
      id: 'theme-dark',
      label: isRtl ? 'داكن (Dark)' : 'Dark',
      icon: <Moon className="w-4 h-4" />,
      onClick: () => setTheme('dark'),
    },
    {
      id: 'theme-system',
      label: isRtl ? 'تلقائي (System)' : 'System',
      icon: <Monitor className="w-4 h-4" />,
      onClick: () => setTheme('system'),
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-[var(--color-background)] text-[var(--color-text)] antialiased transition-colors">
      {/* Dedicated Trainer Header */}
      <header className="sticky top-0 z-40 w-full bg-[var(--color-surface)]/95 backdrop-blur-md border-b-2 border-[var(--color-primary)] px-4 sm:px-6 py-3 transition-colors">
        <div className="flex items-center justify-between gap-3 max-w-7xl mx-auto">
          {/* Left: Brand + Cockpit Tag */}
          {/* Left: Brand + Cockpit Context */}
          <div className="flex items-center gap-3 shrink-0">
            <Link href="/trainer" className="flex items-center gap-2.5 group select-none shrink-0">
              <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-indigo-600 to-violet-700 text-white flex items-center justify-center font-extrabold text-xs shadow-xs group-hover:scale-105 transition-transform">
                TR
              </div>
              <div className="flex flex-col text-start leading-tight">
                <div className="flex items-center gap-2">
                  <span className="font-extrabold text-sm tracking-tight text-[var(--color-text)]">
                    TRAINER COCKPIT
                  </span>
                  <span className="text-[9px] px-1.5 py-0.5 rounded-full bg-[var(--color-primary-subtle)] text-[var(--color-primary)] font-bold">
                    INSTRUCTOR
                  </span>
                </div>
                <span className="text-[10px] text-[var(--color-text-subtle)] font-medium">
                  {isRtl ? 'لوحة تحكم المدرب' : 'Trainer Control Hub'}
                </span>
              </div>
            </Link>

            {headerTitle && (
              <div className="hidden 2xl:flex items-center gap-2 ps-3 border-s border-[var(--color-border)] max-w-[200px] shrink-0">
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-secondary)] inline-block shrink-0" />
                <span className="text-xs font-semibold text-[var(--color-text-muted)] truncate" title={headerTitle}>{headerTitle}</span>
              </div>
            )}
          </div>

          {/* Center Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 bg-[var(--color-surface-sunken)]/70 p-1 rounded-xl border border-[var(--color-border-subtle)]">
            {TRAINER_NAVIGATION_ITEMS.map((item) => {
              const isActive =
                item.href === '/trainer'
                  ? pathname === '/trainer'
                  : pathname === item.href || pathname.startsWith(`${item.href}/`);
              const label = getLocalizedText(item.label, language);

              return (
                <Link
                  key={item.id}
                  href={item.href}
                  className={cn(
                    'inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold whitespace-nowrap shrink-0 transition-all select-none',
                    isActive
                      ? 'bg-[var(--color-surface)] text-[var(--color-primary)] shadow-xs'
                      : 'text-[var(--color-text-muted)] hover:text-[var(--color-text)] hover:bg-[var(--color-surface)]/50'
                  )}
                >
                  <IconMapper name={item.icon} className="w-3.5 h-3.5" />
                  <span>{label}</span>
                </Link>
              );
            })}
          </nav>

          {/* Right Controls: Fullscreen Presentation Launch + Return Links */}
          <div className="flex items-center gap-2 shrink-0">
            <Link
              href="/trainer/presentation"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold whitespace-nowrap shrink-0 bg-[var(--color-primary)] text-white shadow-xs hover:bg-[var(--color-primary-hover)] transition-colors"
            >
              <MonitorPlay className="w-4 h-4" />
              <span className="hidden sm:inline">{isRtl ? 'العرض الحي' : 'Live Deck'}</span>
            </Link>

            <Link
              href="/web-creator-ai"
              className="hidden lg:inline-flex items-center gap-1 px-2.5 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap shrink-0 bg-[var(--color-surface-sunken)] border border-[var(--color-border)] text-[var(--color-text-muted)] hover:text-[var(--color-text)] transition-colors"
              title="العودة لتجربة المتدرب"
            >
              <span>{isRtl ? 'عرض كمتدرب' : 'Trainee'}</span>
            </Link>

            {/* Language */}
            <button
              type="button"
              onClick={() => setLanguage(language === 'ar' ? 'en' : 'ar')}
              className="inline-flex items-center gap-1 px-2 py-1.5 rounded-lg text-xs font-bold border whitespace-nowrap shrink-0 bg-[var(--color-surface-sunken)] border-[var(--color-border)] text-[var(--color-text)] hover:bg-[var(--color-border-subtle)] cursor-pointer"
            >
              <Globe className="w-3.5 h-3.5 text-[var(--color-secondary)]" />
              <span>{isRtl ? 'EN' : 'عربي'}</span>
            </button>

            {/* Theme Dropdown */}
            <Dropdown
              align="end"
              items={themeOptions}
              trigger={
                <button
                  type="button"
                  className="w-8 h-8 rounded-lg flex items-center justify-center bg-[var(--color-surface-sunken)] border border-[var(--color-border)] text-[var(--color-text)] hover:bg-[var(--color-border-subtle)] transition-colors cursor-pointer"
                  aria-label="تغيير المظهر"
                >
                  {theme === 'dark' ? (
                    <Moon className="w-4 h-4 text-[var(--color-secondary)]" />
                  ) : theme === 'light' ? (
                    <Sun className="w-4 h-4 text-[var(--color-primary)]" />
                  ) : (
                    <Monitor className="w-4 h-4" />
                  )}
                </button>
              }
            />

            {/* Logout button */}
            {isAuthenticated && (
              <button
                type="button"
                onClick={() => logout()}
                className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs font-semibold bg-[var(--color-surface-sunken)] border border-[var(--color-border)] text-red-500 hover:bg-red-500/10 transition-colors cursor-pointer"
                title={isRtl ? 'تسجيل الخروج' : 'Logout'}
              >
                <LogOut className="w-3.5 h-3.5" />
                <span className="hidden md:inline">{isRtl ? 'خروج' : 'Logout'}</span>
              </button>
            )}
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main id="main-content" className="flex-1 w-full p-4 sm:p-6 lg:p-8 max-w-7xl mx-auto">
        {children}
      </main>

      {/* Trainer Minimal Footer */}
      <footer className="w-full border-t border-[var(--color-border)] bg-[var(--color-surface)] py-4 px-4 sm:px-8 text-center text-xs text-[var(--color-text-subtle)] flex items-center justify-between">
        <span>WEB CREATOR AI — Trainer Administration Layer</span>
        <div className="flex items-center gap-4">
          <Link href="/web-creator-ai" className="hover:text-[var(--color-primary)]">
            منصة المتدرب
          </Link>
          <span>•</span>
          <Link href="/" className="hover:text-[var(--color-primary)]">
            موقع عبد الحكيم قنبر
          </Link>
        </div>
      </footer>
    </div>
  );
};
