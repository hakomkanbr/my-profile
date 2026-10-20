import React from 'react';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { PortfolioShell } from '@/components';
import {
  getPublishedProjectsWithCaseStudy,
  getPortfolioProjectBySlug,
} from '@/content';
import { ProjectCaseStudyClient } from './ProjectCaseStudyClient';

interface ProjectPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getPublishedProjectsWithCaseStudy().map((p) => ({
    slug: p.slug,
  }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getPortfolioProjectBySlug(slug);

  if (!project || !project.hasCaseStudy) {
    return {
      title: 'Project Not Found | Abdulhakim Kanbr',
      description: 'The requested engineering project could not be found.',
    };
  }

  const title = `${project.title.en} | Case Study | Abdulhakim Kanbr`;
  const description = project.tagline.en;

  return {
    title,
    description,
    alternates: {
      canonical: `/projects/${project.slug}`,
    },
    openGraph: {
      title,
      description,
      type: 'article',
      url: `/projects/${project.slug}`,
      images: [
        {
          url: '/banner.png',
          width: 1200,
          height: 630,
          alt: project.title.en,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: ['/banner.png'],
    },
  };
}

export default async function ProjectCaseStudyPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getPortfolioProjectBySlug(slug);

  if (!project || !project.hasCaseStudy) {
    notFound();
  }

  // Related projects for bottom navigation (only published projects with case studies)
  const otherProjects = getPublishedProjectsWithCaseStudy()
    .filter((p) => p.slug !== project.slug)
    .slice(0, 2);

  // Structured Data (SoftwareApplication / CreativeWork)
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CreativeWork',
    name: project.title.en,
    headline: project.tagline.en,
    description: project.overview.en,
    author: {
      '@type': 'Person',
      name: 'Abdulhakim Kanbr',
      url: 'https://github.com/hakomkanbr',
    },
    keywords: project.techStack.join(', '),
  };

  return (
    <PortfolioShell>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ProjectCaseStudyClient project={project} otherProjects={otherProjects} />
    </PortfolioShell>
  );
}
