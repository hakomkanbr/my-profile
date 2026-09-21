/**
 * WEB CREATOR AI — Local Storage Adapter Implementation
 * Local-First client storage with SSR safety and robust validation.
 */

import { StorageAdapter } from './storage-adapter';
import { TraineeProgress } from '@/types';

const STORAGE_KEY = 'web_creator_ai_progress_v1';

export const INITIAL_PROGRESS: TraineeProgress = {
  version: 1,
  completedLessons: [],
  completedChallenges: [],
  completedProjects: [],
  quizAttempts: {},
  bookmarkedItems: [],
  notes: {},
  startedAt: new Date().toISOString(),
  lastActiveAt: new Date().toISOString(),
  isDemoMode: false,
};

export class LocalStorageAdapter implements StorageAdapter {
  private isClient(): boolean {
    return typeof window !== 'undefined' && typeof window.localStorage !== 'undefined';
  }

  async loadProgress(): Promise<TraineeProgress | null> {
    if (!this.isClient()) return null;
    try {
      const raw = window.localStorage.getItem(STORAGE_KEY);
      if (!raw) return null;
      const parsed = JSON.parse(raw) as TraineeProgress;
      return parsed;
    } catch (error) {
      console.error('[StorageAdapter] Failed to load progress from localStorage:', error);
      return null;
    }
  }

  async saveProgress(progress: TraineeProgress): Promise<void> {
    if (!this.isClient()) return;
    try {
      const updated: TraineeProgress = {
        ...progress,
        lastActiveAt: new Date().toISOString(),
      };
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
    } catch (error) {
      console.error('[StorageAdapter] Failed to save progress to localStorage:', error);
    }
  }

  async resetProgress(): Promise<TraineeProgress> {
    const fresh: TraineeProgress = {
      ...INITIAL_PROGRESS,
      startedAt: new Date().toISOString(),
      lastActiveAt: new Date().toISOString(),
    };
    if (this.isClient()) {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(fresh));
    }
    return fresh;
  }

  async exportProgress(): Promise<string> {
    const current = (await this.loadProgress()) || INITIAL_PROGRESS;
    return JSON.stringify(
      {
        appName: 'WEB CREATOR AI',
        exportedAt: new Date().toISOString(),
        data: current,
      },
      null,
      2
    );
  }

  async importProgress(jsonContent: string): Promise<TraineeProgress> {
    try {
      const parsed = JSON.parse(jsonContent);
      const data: TraineeProgress = parsed.data || parsed;

      // Basic schema verification
      if (!Array.isArray(data.completedLessons)) {
        throw new Error('Invalid format: completedLessons array missing');
      }

      const validated: TraineeProgress = {
        version: 1,
        completedLessons: data.completedLessons || [],
        completedChallenges: data.completedChallenges || [],
        completedProjects: data.completedProjects || [],
        quizAttempts: data.quizAttempts || {},
        bookmarkedItems: data.bookmarkedItems || [],
        notes: data.notes || {},
        lastVisitedRoute: data.lastVisitedRoute,
        lastVisitedLessonId: data.lastVisitedLessonId,
        startedAt: data.startedAt || new Date().toISOString(),
        lastActiveAt: new Date().toISOString(),
        isDemoMode: false,
      };

      await this.saveProgress(validated);
      return validated;
    } catch (error) {
      console.error('[StorageAdapter] Failed to import progress JSON:', error);
      throw new Error('Invalid progress JSON file format');
    }
  }

  async seedDemoProgress(): Promise<TraineeProgress> {
    const demoProgress: TraineeProgress = {
      version: 1,
      completedLessons: [
        'lesson-01-01',
        'lesson-01-02',
        'lesson-02-01',
        'lesson-03-01',
        'lesson-04-01',
      ],
      completedChallenges: ['challenge-01', 'challenge-02'],
      completedProjects: ['PRJ-01'],
      quizAttempts: {
        'quiz-01-01': {
          quizId: 'quiz-01-01',
          lessonId: 'lesson-01-01',
          scorePercentage: 100,
          totalQuestions: 3,
          correctAnswers: 3,
          completedAt: new Date().toISOString(),
        },
      },
      bookmarkedItems: ['lesson-01-01', 'prompt-01'],
      notes: {
        'lesson-01-01': {
          id: 'note-1',
          targetId: 'lesson-01-01',
          targetType: 'lesson',
          content: 'Web architecture is divided into Client, Server, and Cloud layers.',
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString(),
        },
      },
      startedAt: new Date().toISOString(),
      lastActiveAt: new Date().toISOString(),
      isDemoMode: true,
    };

    await this.saveProgress(demoProgress);
    return demoProgress;
  }
}

export const defaultStorageAdapter = new LocalStorageAdapter();
