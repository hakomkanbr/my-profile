/**
 * WEB CREATOR AI — Preferences Store
 * Manages language (AR/EN), theme (Light/Dark), and active mode (Trainee/Trainer).
 */

import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { AppLanguage, AppTheme, AppMode } from '@/types';

interface PreferencesState {
  language: AppLanguage;
  theme: AppTheme;
  mode: AppMode;
  setLanguage: (lang: AppLanguage) => void;
  toggleLanguage: () => void;
  setTheme: (theme: AppTheme) => void;
  toggleTheme: () => void;
  setMode: (mode: AppMode) => void;
  toggleMode: () => void;
}

export const usePreferencesStore = create<PreferencesState>()(
  persist(
    (set) => ({
      language: 'ar',
      theme: 'light',
      mode: 'trainee',

      setLanguage: (language) => set({ language }),

      toggleLanguage: () =>
        set((state) => ({
          language: state.language === 'ar' ? 'en' : 'ar',
        })),

      setTheme: (theme) => set({ theme }),

      toggleTheme: () =>
        set((state) => ({
          theme: state.theme === 'dark' ? 'light' : 'dark',
        })),

      setMode: (mode) => set({ mode }),

      toggleMode: () =>
        set((state) => ({
          mode: state.mode === 'trainee' ? 'trainer' : 'trainee',
        })),
    }),
    {
      name: 'web_creator_ai_preferences',
    }
  )
);
