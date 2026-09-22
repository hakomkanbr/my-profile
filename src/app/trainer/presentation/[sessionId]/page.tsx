import React from 'react';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { PresentationEngine } from '@/components/presentation-engine';
import {
  getPresentationSessionById,
  getAllPresentationSessions,
} from '@/content/presentations';

interface PageProps {
  params: Promise<{ sessionId: string }>;
}

export function generateStaticParams() {
  const sessions = getAllPresentationSessions();
  const paramsList: { sessionId: string }[] = [];

  for (const s of sessions) {
    // Canonical slug e.g. "session-01"
    paramsList.push({ sessionId: s.id });
    // Numeric alias e.g. "01" and "1"
    paramsList.push({ sessionId: String(s.number).padStart(2, '0') });
    paramsList.push({ sessionId: String(s.number) });
  }

  return paramsList;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { sessionId } = await params;
  const session = getPresentationSessionById(sessionId);

  if (!session) {
    return {
      title: 'Session Not Found | WEB CREATOR AI',
    };
  }

  return {
    title: `Session ${String(session.number).padStart(2, '0')}: ${session.title.en} | WEB CREATOR AI`,
    description: session.subtitle.en,
  };
}

export default async function PresentationSessionRunnerPage({ params }: PageProps) {
  const { sessionId } = await params;
  const session = getPresentationSessionById(sessionId);

  if (!session) {
    notFound();
  }

  const nextSessionNumber = session.number + 1;
  const nextSessionUrl =
    nextSessionNumber <= 12
      ? `/trainer/presentation/session-${String(nextSessionNumber).padStart(2, '0')}`
      : '/trainer/presentation';

  return (
    <PresentationEngine
      session={session}
      exitHref="/trainer/presentation"
      nextSessionUrl={nextSessionUrl}
    />
  );
}
