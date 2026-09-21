/**
 * WEB CREATOR AI — Trainer / Presentation Store
 * Lightweight initial state for Presentation Mode, Timer, and Trainer Notes.
 */

import { create } from 'zustand';

interface TrainerStoreState {
  isPresenterActive: boolean;
  isFullscreen: boolean;
  showTrainerNotes: boolean;
  activeSlideIndex: number;
  timerMinutes: number;
  timerSeconds: number;
  isTimerRunning: boolean;

  // Actions
  togglePresenter: () => void;
  setPresenterActive: (active: boolean) => void;
  toggleFullscreen: () => void;
  toggleTrainerNotes: () => void;
  setActiveSlideIndex: (index: number) => void;
  nextSlide: () => void;
  prevSlide: () => void;
  setTimer: (minutes: number, seconds: number) => void;
  startTimer: () => void;
  pauseTimer: () => void;
  tickTimer: () => void;
  resetTimer: (minutes?: number) => void;
}

export const useTrainerStore = create<TrainerStoreState>((set) => ({
  isPresenterActive: false,
  isFullscreen: false,
  showTrainerNotes: false,
  activeSlideIndex: 0,
  timerMinutes: 15,
  timerSeconds: 0,
  isTimerRunning: false,

  togglePresenter: () =>
    set((state) => ({ isPresenterActive: !state.isPresenterActive })),

  setPresenterActive: (active) => set({ isPresenterActive: active }),

  toggleFullscreen: () =>
    set((state) => ({ isFullscreen: !state.isFullscreen })),

  toggleTrainerNotes: () =>
    set((state) => ({ showTrainerNotes: !state.showTrainerNotes })),

  setActiveSlideIndex: (index) => set({ activeSlideIndex: Math.max(0, index) }),

  nextSlide: () => set((state) => ({ activeSlideIndex: state.activeSlideIndex + 1 })),

  prevSlide: () =>
    set((state) => ({ activeSlideIndex: Math.max(0, state.activeSlideIndex - 1) })),

  setTimer: (minutes, seconds) =>
    set({ timerMinutes: minutes, timerSeconds: seconds }),

  startTimer: () => set({ isTimerRunning: true }),

  pauseTimer: () => set({ isTimerRunning: false }),

  tickTimer: () =>
    set((state) => {
      if (!state.isTimerRunning) return state;
      if (state.timerSeconds > 0) {
        return { timerSeconds: state.timerSeconds - 1 };
      }
      if (state.timerMinutes > 0) {
        return { timerMinutes: state.timerMinutes - 1, timerSeconds: 59 };
      }
      return { isTimerRunning: false };
    }),

  resetTimer: (minutes = 15) =>
    set({ timerMinutes: minutes, timerSeconds: 0, isTimerRunning: false }),
}));
