'use client';

import React from 'react';
import { PortfolioShell } from '@/components/layout';
import {
  PortfolioHeroSection,
  EngineeringFocusSection,
  FeaturedProjectsSection,
  DigitalProductsSection,
  EngineeringWritingsSection,
  ResourcesTeaserSection,
  PortfolioCTASection,
} from '@/components/portfolio';

export default function HomePage() {
  return (
    <PortfolioShell>
      {/* 1. التعريف — Introduction */}
      <PortfolioHeroSection />

      {/* 2. كيف أساعد العملاء؟ — How I Help Clients */}
      <EngineeringFocusSection />

      {/* 3. أعمالي — Selected Approved Work */}
      <FeaturedProjectsSection />

      {/* 4. منتجاتي الرقمية — My Digital Products (SaaS) */}
      <DigitalProductsSection />

      {/* 5. المحتوى والمعرفة — Curated Articles, Resources & WEB CREATOR AI */}
      <EngineeringWritingsSection />
      <ResourcesTeaserSection />

      {/* 6. التواصل — Contact CTA */}
      <PortfolioCTASection />
    </PortfolioShell>
  );
}
