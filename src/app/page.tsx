'use client';

import React from 'react';
import { PortfolioShell } from '@/components';
import {
  PortfolioHeroSection,
  FeaturedProjectsSection,
  EngineeringFocusSection,
  EngineeringWritingsSection,
  ResourcesTeaserSection,
  PortfolioCTASection,
} from '@/components/portfolio';

export default function HomePage() {
  return (
    <PortfolioShell>
      {/* 1. عنوان رئيسي ونبذة شخصية قصيرة وأزرار التوجيه */}
      <PortfolioHeroSection />

      {/* 2. ثلاثة مشاريع مختارة فقط */}
      <FeaturedProjectsSection />

      {/* 3. نبذة موجزة عن مجالات عملي */}
      <EngineeringFocusSection />

      {/* 4. أحدث ثلاثة مقالات أو فيديوهات مفيدة */}
      <EngineeringWritingsSection />

      {/* 5. تعريف قصير بالمحتوى والموارد التي أشاركها */}
      <ResourcesTeaserSection />

      {/* 6 & 7. دعوة واضحة للتواصل ورابط مختصر إلى صفحة «عنّي» */}
      <PortfolioCTASection />
    </PortfolioShell>
  );
}

