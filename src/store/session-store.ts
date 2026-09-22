'use client';

import { create } from 'zustand';
import { EducationalSession, SessionStatus, SessionStudent } from '@/types';
import { INITIAL_EDUCATIONAL_SESSIONS } from '@/content/sessions-data';

const STORAGE_KEY = 'web_creator_ai_sessions_v2';

interface SessionStoreState {
  sessions: EducationalSession[];
  isLoaded: boolean;

  // Actions
  initializeSessions: () => void;
  getSessionById: (idOrSlug: string) => EducationalSession | undefined;
  getActiveSession: () => EducationalSession | undefined;
  updateSessionStatus: (sessionId: string, status: SessionStatus) => void;
  updateSession: (sessionId: string, updates: Partial<EducationalSession>) => void;
  createSession: (data: Omit<EducationalSession, 'id' | 'createdAt' | 'updatedAt'>) => EducationalSession;
  deleteSession: (sessionId: string) => void;
  completeStudentActivity: (sessionId: string, activityId: string, studentId?: string) => void;
  addStudentToSession: (sessionId: string, student: { name: string; email?: string }) => void;
  updateStudentStatus: (sessionId: string, studentId: string, status: SessionStudent['status'], notes?: string) => void;
  resetSessionsToDefault: () => void;
}

export const useSessionStore = create<SessionStoreState>((set, get) => ({
  sessions: INITIAL_EDUCATIONAL_SESSIONS,
  isLoaded: false,

  initializeSessions: () => {
    if (typeof window === 'undefined') return;
    try {
      const stored = window.localStorage.getItem(STORAGE_KEY);
      if (stored) {
        const parsed = JSON.parse(stored) as EducationalSession[];
        if (Array.isArray(parsed) && parsed.length > 0) {
          // Merge to guarantee all 12 sessions and their full activities exist
          const merged = INITIAL_EDUCATIONAL_SESSIONS.map((initSession) => {
            const existing = parsed.find((p) => p.id === initSession.id);
            if (!existing) return initSession;
            return {
              ...initSession,
              status: existing.status || initSession.status,
              students: existing.students?.length ? existing.students : initSession.students,
            };
          });
          set({ sessions: merged, isLoaded: true });
          window.localStorage.setItem(STORAGE_KEY, JSON.stringify(merged));
          return;
        }
      }
      // Save default
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(INITIAL_EDUCATIONAL_SESSIONS));
      set({ sessions: INITIAL_EDUCATIONAL_SESSIONS, isLoaded: true });
    } catch (e) {
      console.error('Failed to load sessions from localStorage:', e);
      set({ sessions: INITIAL_EDUCATIONAL_SESSIONS, isLoaded: true });
    }
  },

  getSessionById: (idOrSlug: string) => {
    const { sessions } = get();
    const query = idOrSlug.toLowerCase().trim();
    return sessions.find(
      (s) =>
        s.id.toLowerCase() === query ||
        s.slug.toLowerCase() === query ||
        String(s.number) === query ||
        String(s.number).padStart(2, '0') === query
    );
  },

  getActiveSession: () => {
    const { sessions } = get();
    // Return first active, or first scheduled, or first session
    const active = sessions.find((s) => s.status === 'active');
    if (active) return active;
    const scheduled = sessions.find((s) => s.status === 'scheduled');
    if (scheduled) return scheduled;
    return sessions[0];
  },

  updateSessionStatus: (sessionId: string, status: SessionStatus) => {
    const { sessions } = get();
    const updated = sessions.map((s) => {
      if (s.id === sessionId) {
        return {
          ...s,
          status,
          updatedAt: new Date().toISOString(),
        };
      }
      // If setting to active, we can optionally set other active ones to completed or scheduled
      return s;
    });

    set({ sessions: updated });
    if (typeof window !== 'undefined') {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
    }
  },

  updateSession: (sessionId: string, updates: Partial<EducationalSession>) => {
    const { sessions } = get();
    const updated = sessions.map((s) => {
      if (s.id === sessionId) {
        return {
          ...s,
          ...updates,
          updatedAt: new Date().toISOString(),
        };
      }
      return s;
    });

    set({ sessions: updated });
    if (typeof window !== 'undefined') {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
    }
  },

  createSession: (data) => {
    const { sessions } = get();
    const newId = `session-${String(sessions.length + 1).padStart(2, '0')}-${Date.now().toString(36)}`;
    const newSession: EducationalSession = {
      ...data,
      id: newId,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };

    const updated = [...sessions, newSession];
    set({ sessions: updated });
    if (typeof window !== 'undefined') {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
    }
    return newSession;
  },

  deleteSession: (sessionId: string) => {
    const { sessions } = get();
    const updated = sessions.filter((s) => s.id !== sessionId);
    set({ sessions: updated });
    if (typeof window !== 'undefined') {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
    }
  },

  completeStudentActivity: (sessionId: string, activityId: string, studentId = 'std-current') => {
    const { sessions } = get();
    const updated = sessions.map((session) => {
      if (session.id !== sessionId) return session;

      const totalActs = session.activities.length || 1;
      const existingStudent = session.students.find((std) => std.id === studentId);

      let updatedStudents: SessionStudent[];
      if (existingStudent) {
        const completed = existingStudent.completedActivities.includes(activityId)
          ? existingStudent.completedActivities
          : [...existingStudent.completedActivities, activityId];
        const progressPercent = Math.min(100, Math.round((completed.length / totalActs) * 100));

        updatedStudents = session.students.map((std) =>
          std.id === studentId
            ? {
                ...std,
                completedActivities: completed,
                progressPercent,
                status: progressPercent === 100 ? 'completed' : 'active',
                lastActiveAt: 'الآن',
              }
            : std
        );
      } else {
        const completed = [activityId];
        const progressPercent = Math.min(100, Math.round((completed.length / totalActs) * 100));
        const newStudent: SessionStudent = {
          id: studentId,
          name: 'المتدرب الحالي',
          status: 'active',
          completedActivities: completed,
          progressPercent,
          lastActiveAt: 'الآن',
        };
        updatedStudents = [...session.students, newStudent];
      }

      return {
        ...session,
        students: updatedStudents,
        updatedAt: new Date().toISOString(),
      };
    });

    set({ sessions: updated });
    if (typeof window !== 'undefined') {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
    }
  },

  addStudentToSession: (sessionId: string, studentData: { name: string; email?: string }) => {
    const { sessions } = get();
    const updated = sessions.map((session) => {
      if (session.id !== sessionId) return session;
      const newStudent: SessionStudent = {
        id: `std-${Date.now().toString(36)}`,
        name: studentData.name,
        email: studentData.email,
        status: 'enrolled',
        progressPercent: 0,
        completedActivities: [],
        lastActiveAt: 'تمت الإضافة للتو',
      };
      return {
        ...session,
        students: [...session.students, newStudent],
        updatedAt: new Date().toISOString(),
      };
    });

    set({ sessions: updated });
    if (typeof window !== 'undefined') {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
    }
  },

  updateStudentStatus: (
    sessionId: string,
    studentId: string,
    status: SessionStudent['status'],
    notes?: string
  ) => {
    const { sessions } = get();
    const updated = sessions.map((session) => {
      if (session.id !== sessionId) return session;
      const students = session.students.map((std) =>
        std.id === studentId
          ? {
              ...std,
              status,
              notes: notes !== undefined ? notes : std.notes,
              lastActiveAt: 'الآن',
            }
          : std
      );
      return {
        ...session,
        students,
        updatedAt: new Date().toISOString(),
      };
    });

    set({ sessions: updated });
    if (typeof window !== 'undefined') {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
    }
  },

  resetSessionsToDefault: () => {
    set({ sessions: INITIAL_EDUCATIONAL_SESSIONS });
    if (typeof window !== 'undefined') {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(INITIAL_EDUCATIONAL_SESSIONS));
    }
  },
}));
