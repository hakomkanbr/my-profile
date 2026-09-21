'use client';

import { create } from 'zustand';

interface TrainerAuthState {
  isAuthenticated: boolean;
  isLoading: boolean;
  error: string | null;

  // Actions
  checkAuth: () => Promise<boolean>;
  login: (password: string) => Promise<boolean>;
  logout: () => Promise<void>;
  clearError: () => void;
}

export const useTrainerAuthStore = create<TrainerAuthState>((set) => ({
  isAuthenticated: false,
  isLoading: true,
  error: null,

  checkAuth: async () => {
    try {
      set({ isLoading: true });
      const res = await fetch('/api/trainer/auth');
      if (res.ok) {
        const data = await res.json();
        set({ isAuthenticated: Boolean(data.authenticated), isLoading: false });
        return Boolean(data.authenticated);
      }
      set({ isAuthenticated: false, isLoading: false });
      return false;
    } catch {
      set({ isAuthenticated: false, isLoading: false });
      return false;
    }
  },

  login: async (password: string) => {
    try {
      set({ isLoading: true, error: null });
      const res = await fetch('/api/trainer/auth', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ password }),
      });

      const data = await res.json();
      if (res.ok && data.success) {
        set({ isAuthenticated: true, isLoading: false, error: null });
        return true;
      }

      set({
        isAuthenticated: false,
        isLoading: false,
        error: data.error || 'كلمة المرور غير صحيحة',
      });
      return false;
    } catch {
      set({
        isAuthenticated: false,
        isLoading: false,
        error: 'تعذر الاتصال بالخادم. يرجى المحاولة مرة أخرى.',
      });
      return false;
    }
  },

  logout: async () => {
    try {
      await fetch('/api/trainer/auth', { method: 'DELETE' });
    } finally {
      set({ isAuthenticated: false, error: null });
    }
  },

  clearError: () => set({ error: null }),
}));
