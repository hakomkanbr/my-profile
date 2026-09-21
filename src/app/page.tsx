'use client';

import React from 'react';
import { PortfolioShell } from '@/components';
import {
  PortfolioHeroSection,
  PortfolioAboutSection,
  EngineeringFocusSection,
  ExperienceTimelineSection,
  FeaturedProjectsSection,
  CoursesSection,
  PortfolioCTASection,
} from '@/components/portfolio';

export default function HomePage() {
  return (
    <PortfolioShell>
      {/* 01 — HERO: Lendex Full-bleed Personal Portfolio Hero */}
      <PortfolioHeroSection />

      {/* 02 — ABOUT: Professional profile & craftsmanship philosophy */}
      <PortfolioAboutSection />

      {/* 03 — ENGINEERING FOCUS: What I work with + Engineering Approach */}
      <EngineeringFocusSection />

      {/* 04 — EXPERIENCE: Professional practice & milestones */}
      <ExperienceTimelineSection />

      {/* 05 — FEATURED PROJECTS: What I have built (Case study depth, architecture) */}
      <FeaturedProjectsSection />

      {/* 06 — TRAINING: What I teach (Extensible courses architecture) */}
      <CoursesSection />

      {/* 07 — CONTACT: Direct, calm communication & inquiries */}
      <PortfolioCTASection />
    </PortfolioShell>
  );
}
