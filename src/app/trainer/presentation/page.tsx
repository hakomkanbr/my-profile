'use client';

import React from 'react';
import { SharedPresentationView } from '@/components';
import { ALL_PRESENTATION_SLIDES } from '@/content/presentation';

export default function TrainerPresentationPage() {
  return (
    <SharedPresentationView
      slides={ALL_PRESENTATION_SLIDES}
      mode="trainer"
      exitHref="/trainer"
    />
  );
}

