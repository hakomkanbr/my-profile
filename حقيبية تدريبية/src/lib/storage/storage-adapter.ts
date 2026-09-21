/**
 * WEB CREATOR AI — Storage Adapter Interface
 * Abstract interface allowing seamless transition between LocalStorage,
 * IndexedDB, Cloud Backend, or Supabase.
 */

import { TraineeProgress } from '@/types';

export interface StorageAdapter {
  /**
   * Load the current trainee progress.
   */
  loadProgress(): Promise<TraineeProgress | null>;

  /**
   * Save the trainee progress state.
   */
  saveProgress(progress: TraineeProgress): Promise<void>;

  /**
   * Reset progress back to initial empty state.
   */
  resetProgress(): Promise<TraineeProgress>;

  /**
   * Export progress state as a serializable JSON object.
   */
  exportProgress(): Promise<string>;

  /**
   * Import progress state from a serialized JSON string.
   */
  importProgress(jsonContent: string): Promise<TraineeProgress>;

  /**
   * Seed demo data for presentations and course walkthroughs.
   */
  seedDemoProgress(): Promise<TraineeProgress>;
}
