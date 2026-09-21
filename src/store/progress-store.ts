/**
 * WEB CREATOR AI — Progress Store
 * Central progress management with Local-First persistence,
 * Export/Import, Reset, and Demo Mode capabilities.
 */

import { create } from 'zustand';
import { TraineeProgress, QuizAttempt, NoteEntry } from '@/types';
import { defaultStorageAdapter, INITIAL_PROGRESS } from '@/lib/storage';

interface ProgressState {
  progress: TraineeProgress;
  isLoaded: boolean;

  // Actions
  initializeProgress: () => Promise<void>;
  completeLesson: (lessonId: string) => void;
  toggleLesson: (lessonId: string) => void;
  completeChallenge: (challengeId: string) => void;
  completeProject: (projectId: string) => void;
  recordQuizAttempt: (attempt: QuizAttempt) => void;
  toggleBookmark: (itemId: string) => void;
  saveNote: (targetId: string, targetType: 'lesson' | 'project' | 'prompt', content: string) => void;
  deleteNote: (targetId: string) => void;
  setLastVisited: (route: string, lessonId?: string) => void;
  resetProgress: () => Promise<void>;
  exportProgressJson: () => Promise<string>;
  importProgressJson: (jsonString: string) => Promise<boolean>;
  enableDemoMode: () => Promise<void>;
}

export const useProgressStore = create<ProgressState>((set, get) => ({
  progress: INITIAL_PROGRESS,
  isLoaded: false,

  initializeProgress: async () => {
    try {
      const stored = await defaultStorageAdapter.loadProgress();
      if (stored) {
        set({ progress: stored, isLoaded: true });
      } else {
        await defaultStorageAdapter.saveProgress(INITIAL_PROGRESS);
        set({ progress: INITIAL_PROGRESS, isLoaded: true });
      }
    } catch (err) {
      console.error('Failed to initialize progress store:', err);
      set({ progress: INITIAL_PROGRESS, isLoaded: true });
    }
  },

  completeLesson: (lessonId: string) => {
    const { progress } = get();
    if (progress.completedLessons.includes(lessonId)) return;

    const updated: TraineeProgress = {
      ...progress,
      completedLessons: [...progress.completedLessons, lessonId],
      lastActiveAt: new Date().toISOString(),
    };

    set({ progress: updated });
    defaultStorageAdapter.saveProgress(updated);
  },

  toggleLesson: (lessonId: string) => {
    const { progress } = get();
    const isCompleted = progress.completedLessons.includes(lessonId);
    const completedLessons = isCompleted
      ? progress.completedLessons.filter((id) => id !== lessonId)
      : [...progress.completedLessons, lessonId];

    const updated: TraineeProgress = {
      ...progress,
      completedLessons,
      lastActiveAt: new Date().toISOString(),
    };

    set({ progress: updated });
    defaultStorageAdapter.saveProgress(updated);
  },

  completeChallenge: (challengeId: string) => {
    const { progress } = get();
    if (progress.completedChallenges.includes(challengeId)) return;

    const updated: TraineeProgress = {
      ...progress,
      completedChallenges: [...progress.completedChallenges, challengeId],
      lastActiveAt: new Date().toISOString(),
    };

    set({ progress: updated });
    defaultStorageAdapter.saveProgress(updated);
  },

  completeProject: (projectId: string) => {
    const { progress } = get();
    if (progress.completedProjects.includes(projectId)) return;

    const updated: TraineeProgress = {
      ...progress,
      completedProjects: [...progress.completedProjects, projectId],
      lastActiveAt: new Date().toISOString(),
    };

    set({ progress: updated });
    defaultStorageAdapter.saveProgress(updated);
  },

  recordQuizAttempt: (attempt: QuizAttempt) => {
    const { progress } = get();
    const updated: TraineeProgress = {
      ...progress,
      quizAttempts: {
        ...progress.quizAttempts,
        [attempt.quizId]: attempt,
      },
      lastActiveAt: new Date().toISOString(),
    };

    set({ progress: updated });
    defaultStorageAdapter.saveProgress(updated);
  },

  toggleBookmark: (itemId: string) => {
    const { progress } = get();
    const exists = progress.bookmarkedItems.includes(itemId);
    const bookmarkedItems = exists
      ? progress.bookmarkedItems.filter((id) => id !== itemId)
      : [...progress.bookmarkedItems, itemId];

    const updated: TraineeProgress = {
      ...progress,
      bookmarkedItems,
      lastActiveAt: new Date().toISOString(),
    };

    set({ progress: updated });
    defaultStorageAdapter.saveProgress(updated);
  },

  saveNote: (targetId: string, targetType: 'lesson' | 'project' | 'prompt', content: string) => {
    const { progress } = get();
    const existing = progress.notes[targetId];
    const entry: NoteEntry = {
      id: existing ? existing.id : `note-${Date.now()}`,
      targetId,
      targetType,
      content,
      createdAt: existing ? existing.createdAt : new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };

    const updated: TraineeProgress = {
      ...progress,
      notes: {
        ...progress.notes,
        [targetId]: entry,
      },
      lastActiveAt: new Date().toISOString(),
    };

    set({ progress: updated });
    defaultStorageAdapter.saveProgress(updated);
  },

  deleteNote: (targetId: string) => {
    const { progress } = get();
    const updatedNotes = { ...progress.notes };
    delete updatedNotes[targetId];

    const updated: TraineeProgress = {
      ...progress,
      notes: updatedNotes,
      lastActiveAt: new Date().toISOString(),
    };

    set({ progress: updated });
    defaultStorageAdapter.saveProgress(updated);
  },

  setLastVisited: (route: string, lessonId?: string) => {
    const { progress } = get();
    const updated: TraineeProgress = {
      ...progress,
      lastVisitedRoute: route,
      lastVisitedLessonId: lessonId || progress.lastVisitedLessonId,
      lastActiveAt: new Date().toISOString(),
    };

    set({ progress: updated });
    defaultStorageAdapter.saveProgress(updated);
  },

  resetProgress: async () => {
    const fresh = await defaultStorageAdapter.resetProgress();
    set({ progress: fresh });
  },

  exportProgressJson: async () => {
    return defaultStorageAdapter.exportProgress();
  },

  importProgressJson: async (jsonString: string) => {
    try {
      const imported = await defaultStorageAdapter.importProgress(jsonString);
      set({ progress: imported });
      return true;
    } catch {
      return false;
    }
  },

  enableDemoMode: async () => {
    const demo = await defaultStorageAdapter.seedDemoProgress();
    set({ progress: demo });
  },
}));
