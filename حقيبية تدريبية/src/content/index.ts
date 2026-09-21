/**
 * WEB CREATOR AI — Unified Content Access Layer
 * Provides typed accessor methods for all educational materials.
 */

import { JOURNEY_STAGES } from './stages';
import { ALL_MODULES } from './modules';
import { ALL_PROJECTS } from './projects';
import { ALL_AI_PROMPTS } from './ai-lab';
import { ALL_RESOURCES } from './resources';
import { JourneyStage, Module, Lesson, Project, JourneyStageId } from '@/types';

export * from './stages';
export * from './instructor';
export * from './modules';
export * from './projects';
export * from './ai-lab';
export * from './resources';
export * from './presentation';
export * from './portfolio-projects';
export * from './sessions-data';

export function getStageById(stageId: JourneyStageId): JourneyStage | undefined {
  return JOURNEY_STAGES.find((s) => s.id === stageId);
}

export function getModuleById(moduleId: string): Module | undefined {
  return ALL_MODULES.find((m) => m.id === moduleId);
}

export function getAllModules(): Module[] {
  return ALL_MODULES;
}

export function getLessonById(lessonId: string): Lesson | undefined {
  for (const mod of ALL_MODULES) {
    const lesson = mod.lessons.find((l) => l.id === lessonId);
    if (lesson) return lesson;
  }
  return undefined;
}

export function getProjectById(projectId: string): Project | undefined {
  return ALL_PROJECTS.find((p) => p.id === projectId);
}

export function getAllLessons(): Lesson[] {
  return ALL_MODULES.flatMap((m) => m.lessons);
}

export function getTotalStats() {
  const allLessons = getAllLessons();
  return {
    totalStages: JOURNEY_STAGES.length,
    totalModules: ALL_MODULES.length,
    totalLessons: allLessons.length,
    totalProjects: ALL_PROJECTS.length,
    totalAIPrompts: ALL_AI_PROMPTS.length,
    totalResources: ALL_RESOURCES.length,
  };
}
