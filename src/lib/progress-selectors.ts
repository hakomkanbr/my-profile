/**
 * WEB CREATOR AI — Progress Selectors & Derived State Logic
 * Pure, decoupled helper functions to calculate:
 * - Current Position (Where am I?)
 * - Stage Completion Status (01 THINK -> 07 GROW)
 * - Next Actionable Step (What's next?)
 * - Project Tracking (What am I building?)
 * - Milestones System
 */

import { JourneyStage, Module, Lesson, Project, TraineeProgress, LocalizedString } from '@/types';
import { JOURNEY_STAGES, ALL_MODULES, ALL_PROJECTS, getAllLessons } from '@/content';

export type StageStatus = 'completed' | 'current' | 'upcoming';

export interface StageProgressComputed {
  stage: JourneyStage;
  status: StageStatus;
  totalLessons: number;
  completedLessons: number;
  completionPercent: number;
  isCompleted: boolean;
  isCurrent: boolean;
  associatedModules: Module[];
}

export interface NextActionStep {
  type: 'start_journey' | 'continue_lesson' | 'start_project' | 'next_stage' | 'journey_complete';
  title: LocalizedString;
  subtitle: LocalizedString;
  ctaText: LocalizedString;
  href: string;
  stageCode?: string;
  stageNumber?: string;
  badge?: LocalizedString;
}

export interface ProjectProgressComputed {
  project: Project;
  status: 'completed' | 'in_progress' | 'upcoming';
  isCompleted: boolean;
  stageNumber: string;
  stageCode: string;
}

export interface MilestoneItem {
  id: string;
  title: LocalizedString;
  description: LocalizedString;
  isAchieved: boolean;
  achievedAt?: string;
}

/**
 * 1. Compute progress for each of the 7 stages
 */
export function getStagesProgress(progress: TraineeProgress): StageProgressComputed[] {
  const completedLessonIds = new Set(progress.completedLessons);
  const stagesComputed: StageProgressComputed[] = [];

  let currentAssigned = false;

  for (let i = 0; i < JOURNEY_STAGES.length; i++) {
    const stage = JOURNEY_STAGES[i];
    const associatedModules = ALL_MODULES.filter((m) => stage.associatedModuleIds.includes(m.id));
    const stageLessons: Lesson[] = associatedModules.flatMap((m) => m.lessons);

    const totalLessons = stageLessons.length;
    const completedLessons = stageLessons.filter((l) => completedLessonIds.has(l.id)).length;
    
    // A stage is complete if all its lessons are done (or if total is 0, by checking if next stages have progress)
    const isCompleted = totalLessons > 0 ? completedLessons === totalLessons : false;

    let status: StageStatus = 'upcoming';

    if (isCompleted) {
      status = 'completed';
    } else if (!currentAssigned) {
      // First uncompleted stage is current
      status = 'current';
      currentAssigned = true;
    }

    const completionPercent = totalLessons > 0 ? Math.round((completedLessons / totalLessons) * 100) : 0;

    stagesComputed.push({
      stage,
      status,
      totalLessons,
      completedLessons,
      completionPercent,
      isCompleted,
      isCurrent: status === 'current',
      associatedModules,
    });
  }

  // Edge case: if all stages are completed
  if (!currentAssigned && stagesComputed.length > 0) {
    stagesComputed[stagesComputed.length - 1].status = 'completed';
  }

  return stagesComputed;
}

/**
 * 2. Get current active stage
 */
export function getCurrentStageComputed(progress: TraineeProgress): StageProgressComputed {
  const stages = getStagesProgress(progress);
  const current = stages.find((s) => s.status === 'current');
  return current || stages[0];
}

/**
 * 3. Resolve the next recommended action for the learner
 */
export function getNextActionStep(progress: TraineeProgress): NextActionStep {
  const allLessons = getAllLessons();
  const completedSet = new Set(progress.completedLessons);
  const completedProjectsSet = new Set(progress.completedProjects);

  // Scenario 1: New learner (0 lessons completed)
  if (completedSet.size === 0) {
    const firstLesson = allLessons[0];
    return {
      type: 'start_journey',
      title: {
        ar: 'ابدأ خطوتك الأولى في صناعة الويب',
        en: 'Begin Your Web Creator Journey',
      },
      subtitle: {
        ar: firstLesson ? firstLesson.title.ar : 'فهم معمارية الإنترنت وأساسيات طلبات الويب',
        en: firstLesson ? firstLesson.title.en : 'Understand web architecture & HTTP requests',
      },
      ctaText: {
        ar: 'انطلق في المرحلة 01',
        en: 'Start Stage 01',
      },
      href: '/web-creator-ai/journey',
      stageCode: 'THINK',
      stageNumber: '01',
      badge: { ar: 'الانطلاقة', en: 'Getting Started' },
    };
  }

  // Find next uncompleted lesson
  const nextLesson = allLessons.find((l) => !completedSet.has(l.id));

  // If there's an uncompleted lesson
  if (nextLesson) {
    const parentStage = JOURNEY_STAGES.find((s) => s.id === nextLesson.stageId);
    return {
      type: 'continue_lesson',
      title: nextLesson.title,
      subtitle: {
        ar: `الوحدة ${nextLesson.moduleId.replace('module-', '')} • المدة المقدرة: ${nextLesson.estimatedMinutes} دقيقة`,
        en: `Module ${nextLesson.moduleId.replace('module-', '')} • Est. ${nextLesson.estimatedMinutes} mins`,
      },
      ctaText: {
        ar: 'متابعة الدرس التالي',
        en: 'Continue Next Lesson',
      },
      href: '/web-creator-ai/journey',
      stageCode: parentStage?.code || 'BUILD',
      stageNumber: parentStage?.number || '03',
      badge: { ar: 'الخطوة التالية', en: 'Next Step' },
    };
  }

  // If lessons are done, check uncompleted projects
  const nextProject = ALL_PROJECTS.find((p) => !completedProjectsSet.has(p.id));
  if (nextProject) {
    return {
      type: 'start_project',
      title: nextProject.title,
      subtitle: {
        ar: `مشروع تطبيقي للمرحلة • مخرجات: ${nextProject.targetOutput.ar}`,
        en: `Hands-on Project • Target Output: ${nextProject.targetOutput.en}`,
      },
      ctaText: {
        ar: 'بدء المشروع التطبيقي',
        en: 'Start Practical Project',
      },
      href: '/web-creator-ai/projects',
      badge: { ar: 'مشروع عملي', en: 'Practical Project' },
    };
  }

  // Scenario: All lessons & projects completed
  return {
    type: 'journey_complete',
    title: {
      ar: 'تهانينا! أتممت الرحلة التدريبية بنجاح 🎉',
      en: 'Congratulations! You Completed the Full Journey 🎉',
    },
    subtitle: {
      ar: 'أنت الآن جاهز لإطلاق مشاريعك الحقيقية واقتناص عقود العمل الحر.',
      en: 'You are now ready to launch real products and acquire freelance clients.',
    },
    ctaText: {
      ar: 'مراجعة المنهج والموارد',
      en: 'Review Curriculum & Resources',
    },
    href: '/web-creator-ai/resources',
    badge: { ar: 'مكتمل 100%', en: '100% Completed' },
  };
}

/**
 * 4. Get projects progress list
 */
export function getProjectsProgress(progress: TraineeProgress): ProjectProgressComputed[] {
  const completedProjectsSet = new Set(progress.completedProjects);
  const completedLessonsSet = new Set(progress.completedLessons);

  return ALL_PROJECTS.map((proj) => {
    const isCompleted = completedProjectsSet.has(proj.id);
    const parentStage = JOURNEY_STAGES.find((s) => s.id === proj.stageId);
    
    // Status resolution: if completed -> completed; if user has done lessons in that stage -> in_progress; else upcoming
    let status: 'completed' | 'in_progress' | 'upcoming' = 'upcoming';
    if (isCompleted) {
      status = 'completed';
    } else {
      const stageModules = ALL_MODULES.filter((m) => parentStage?.associatedModuleIds.includes(m.id));
      const stageLessonIds = stageModules.flatMap((m) => m.lessons.map((l) => l.id));
      const hasTouchedStage = stageLessonIds.some((id) => completedLessonsSet.has(id));
      if (hasTouchedStage || proj.id === 'PRJ-01') {
        status = 'in_progress';
      }
    }

    return {
      project: proj,
      status,
      isCompleted,
      stageNumber: parentStage?.number || '01',
      stageCode: parentStage?.code || 'BUILD',
    };
  });
}

/**
 * 5. Milestone architecture (derived purely from verified content data)
 */
export function getLearnerMilestones(progress: TraineeProgress): MilestoneItem[] {
  const completedLessonsCount = progress.completedLessons.length;
  const completedProjectsCount = progress.completedProjects.length;
  const completedChallengesCount = progress.completedChallenges.length;

  return [
    {
      id: 'ms-first-step',
      title: {
        ar: 'الخطوة الأولى (First Step)',
        en: 'First Step',
      },
      description: {
        ar: 'إتمام أول درس واستيعاب معمارية الويب.',
        en: 'Completed first lesson in web fundamentals.',
      },
      isAchieved: completedLessonsCount >= 1,
    },
    {
      id: 'ms-first-challenge',
      title: {
        ar: 'أول تحدٍ برمجي (First Challenge)',
        en: 'First Code Challenge',
      },
      description: {
        ar: 'حل واجتياز أول تحدٍ تفاعلي في الـ DevTools أو الكود.',
        en: 'Solved first interactive challenge.',
      },
      isAchieved: completedChallengesCount >= 1,
    },
    {
      id: 'ms-first-project',
      title: {
        ar: 'إطلاق أول مشروع (First Project Launch)',
        en: 'First Project Launch',
      },
      description: {
        ar: 'تسليم صفحة هبوط حقيقية متجاوبة بـ HTML5 و Tailwind.',
        en: 'Delivered first responsive landing page.',
      },
      isAchieved: completedProjectsCount >= 1,
    },
    {
      id: 'ms-capstone-complete',
      title: {
        ar: 'إتمام مسار صناعة الويب (Full Journey Completion)',
        en: 'Full Journey Completion',
      },
      description: {
        ar: 'إتمام المراحل السبع والمشروع النهائي وجاهزية الإطلاق.',
        en: 'Completed all 7 stages and capstone ready to market.',
      },
      isAchieved: completedProjectsCount >= 3 && completedLessonsCount >= getAllLessons().length,
    },

  ];
}

/**
 * 6. Get last completed item name
 */
export function getLastCompletedItem(progress: TraineeProgress): { title: LocalizedString; type: string } | null {
  if (progress.completedLessons.length === 0 && progress.completedProjects.length === 0) {
    return null;
  }

  if (progress.completedProjects.length > 0) {
    const lastProjectId = progress.completedProjects[progress.completedProjects.length - 1];
    const project = ALL_PROJECTS.find((p) => p.id === lastProjectId);
    if (project) {
      return { title: project.title, type: 'project' };
    }
  }

  const lastLessonId = progress.completedLessons[progress.completedLessons.length - 1];
  const allLessons = getAllLessons();
  const lesson = allLessons.find((l) => l.id === lastLessonId);
  if (lesson) {
    return { title: lesson.title, type: 'lesson' };
  }

  return null;
}
