'use client';

import React from 'react';
import { SharedPresentationView } from '@/components';
import { ALL_PRESENTATION_SLIDES } from '@/content/presentation';

export default function LearnerPresentationPage() {
  return (
    <SharedPresentationView
      slides={ALL_PRESENTATION_SLIDES}
      mode="learner"
      exitHref="/web-creator-ai/journey"
    />
  );
}
