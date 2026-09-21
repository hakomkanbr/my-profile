import React from 'react';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import {
  PortfolioShell,
  PageContainer,
  PageHeader,
  PageSection,
  Button,
} from '@/components';
import {
  PORTFOLIO_PROJECTS,
  getPortfolioProjectBySlug,
} from '@/content';
import {
  ArrowLeft,
  ArrowRight,
  ExternalLink,
  CheckCircle2,
  AlertCircle,
  Layers,
  Server,
  ShieldCheck,
  Cpu,
} from 'lucide-react';

const GithubIcon: React.FC<{ className?: string }> = ({ className = 'w-3.5 h-3.5' }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
    />
  </svg>
);

interface ProjectPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return PORTFOLIO_PROJECTS.map((p) => ({
    slug: p.slug,
  }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getPortfolioProjectBySlug(slug);

  if (!project) {
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

  if (!project) {
    notFound();
  }

  // Related projects for bottom navigation
  const otherProjects = PORTFOLIO_PROJECTS.filter((p) => p.slug !== project.slug).slice(0, 2);

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
      <PageContainer>
        {/* Header Breadcrumbs & Overview */}
        <PageHeader
          title={project.title.en}
          subtitle={project.tagline.en}
          breadcrumbs={[
            { id: '1', label: 'Home', href: '/' },
            { id: '2', label: 'Projects', href: '/projects' },
            { id: '3', label: project.title.en, isCurrent: true },
          ]}
        />

        {/* Project Meta Card */}
        <div className="p-6 sm:p-8 rounded-2xl bg-[var(--color-surface)] border border-[var(--color-border)] shadow-xs mb-8 text-start space-y-6">
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[var(--color-border-subtle)] pb-4">
            <div className="flex items-center gap-3">
              <span className="text-xs font-mono font-bold text-[var(--color-secondary)] uppercase">
                {project.level === 1 ? 'LEVEL 1 — FULL CASE STUDY' : 'LEVEL 2 — ENGINEERING MILESTONE'}
              </span>
              <span className="text-xs font-mono font-semibold px-2.5 py-0.5 rounded-full bg-[var(--color-surface-sunken)] border border-[var(--color-border)] text-[var(--color-text-subtle)]">
                {project.category.en}
              </span>
            </div>

            <div className="flex items-center gap-3 text-xs font-mono text-[var(--color-text-subtle)]">
              {project.status && (
                <span className="text-emerald-600 dark:text-emerald-400 font-semibold">
                  {project.status.en}
                </span>
              )}
              {project.year && <span>· {project.year}</span>}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
            <div>
              <span className="font-mono text-[var(--color-text-subtle)] uppercase block mb-1">Role & Responsibility</span>
              <span className="font-semibold text-[var(--color-text)]">{project.role.en}</span>
            </div>
            <div className="sm:col-span-2">
              <span className="font-mono text-[var(--color-text-subtle)] uppercase block mb-1">Technologies & Stack</span>
              <div className="flex flex-wrap gap-1.5">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-0.5 rounded-md text-[11px] font-mono font-medium bg-[var(--color-surface-sunken)] border border-[var(--color-border-subtle)] text-[var(--color-text-muted)]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Action Links */}
          {(project.liveUrl || project.repoUrl) && (
            <div className="pt-2 flex flex-wrap items-center gap-3 border-t border-[var(--color-border-subtle)]">
              {project.liveUrl && (
                <Link
                  href={project.liveUrl}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold bg-[var(--color-primary)] text-white hover:bg-[var(--color-primary-hover)] transition-all shadow-xs"
                >
                  <span>Open Platform / Live Preview</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </Link>
              )}
              {project.repoUrl && (
                <a
                  href={project.repoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold bg-[var(--color-surface-sunken)] border border-[var(--color-border)] text-[var(--color-text)] hover:border-[var(--color-secondary)] transition-all"
                >
                  <GithubIcon className="w-3.5 h-3.5" />
                  <span>View Repository</span>
                </a>
              )}
            </div>
          )}
        </div>

        {/* 01. Project Overview */}
        <PageSection title="Project Overview">
          <div className="p-7 sm:p-9 rounded-2xl bg-[var(--color-surface)] border border-[var(--color-border)] text-start space-y-4">
            <p className="text-body text-[var(--color-text)] leading-relaxed font-normal">
              {project.overview.en}
            </p>
            {project.role && (
              <div className="pt-3 border-t border-[var(--color-border-subtle)] text-xs text-[var(--color-text-muted)] font-mono">
                <strong className="text-[var(--color-text)]">Engineering Engagement:</strong> {project.role.en}
              </div>
            )}
          </div>
        </PageSection>

        {/* 02. Problem & Context (If available) */}
        {project.problem && (
          <PageSection title="The Problem & Context">
            <div className="p-7 sm:p-9 rounded-2xl bg-[var(--color-surface)] border border-[var(--color-border)] text-start space-y-3">
              <div className="flex items-center gap-2 text-xs font-mono font-bold text-amber-500 uppercase">
                <AlertCircle className="w-4 h-4" />
                <span>Problem Statement</span>
              </div>
              <p className="text-body text-[var(--color-text-muted)] leading-relaxed font-normal">
                {project.problem.en}
              </p>
            </div>
          </PageSection>
        )}

        {/* 03. Architecture & Solution */}
        {(project.solution || project.architecture) && (
          <PageSection title="System Architecture & Approach">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-start">
              {project.solution && (
                <div className="p-7 rounded-2xl bg-[var(--color-surface)] border border-[var(--color-border)] space-y-3">
                  <div className="flex items-center gap-2 text-xs font-mono font-bold text-[var(--color-secondary)] uppercase">
                    <CheckCircle2 className="w-4 h-4" />
                    <span>Engineered Solution</span>
                  </div>
                  <p className="text-body-sm text-[var(--color-text-muted)] leading-relaxed font-normal">
                    {project.solution.en}
                  </p>
                </div>
              )}
              {project.architecture && (
                <div className="p-7 rounded-2xl bg-[var(--color-surface)] border border-[var(--color-border)] space-y-3">
                  <div className="flex items-center gap-2 text-xs font-mono font-bold text-blue-400 uppercase">
                    <Layers className="w-4 h-4" />
                    <span>Architectural Strategy</span>
                  </div>
                  <p className="text-body-sm text-[var(--color-text-muted)] leading-relaxed font-normal">
                    {project.architecture.en}
                  </p>
                </div>
              )}
            </div>
          </PageSection>
        )}

        {/* 04. Technical Implementation Pillars (Level 1 full depth) */}
        {project.technicalImplementation && project.technicalImplementation.length > 0 && (
          <PageSection title="Technical Implementation">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-start">
              {project.technicalImplementation.map((pillar, pIdx) => (
                <div
                  key={pIdx}
                  className="p-7 rounded-2xl bg-[var(--color-surface)] border border-[var(--color-border)] space-y-4"
                >
                  <div className="flex items-center gap-2">
                    <Cpu className="w-4 h-4 text-[var(--color-secondary)]" />
                    <h4 className="text-h4 font-bold text-[var(--color-text)]">
                      {pillar.title.en}
                    </h4>
                  </div>
                  <div className="space-y-2 pt-1">
                    {pillar.details.map((detail, dIdx) => (
                      <div key={dIdx} className="flex items-start gap-2.5 text-xs text-[var(--color-text-muted)] font-medium">
                        <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-secondary)] shrink-0 mt-1.5" />
                        <span>{detail.en}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </PageSection>
        )}

        {/* 05. Infrastructure & Deployment */}
        {project.infrastructure && (
          <PageSection title="Infrastructure & Deployment">
            <div className="p-7 sm:p-9 rounded-2xl bg-[var(--color-surface)] border border-[var(--color-border)] text-start space-y-3">
              <div className="flex items-center gap-2 text-xs font-mono font-bold text-emerald-400 uppercase">
                <Server className="w-4 h-4" />
                <span>Production Environment</span>
              </div>
              <p className="text-body text-[var(--color-text-muted)] leading-relaxed font-normal">
                {project.infrastructure.en}
              </p>
            </div>
          </PageSection>
        )}

        {/* 06. Engineering Challenges (Level 1) */}
        {project.engineeringChallenges && project.engineeringChallenges.length > 0 && (
          <PageSection title="Key Engineering Challenges & Resolutions">
            <div className="space-y-4 text-start">
              {project.engineeringChallenges.map((item, cIdx) => (
                <div
                  key={cIdx}
                  className="p-6 sm:p-7 rounded-2xl bg-[var(--color-surface)] border border-[var(--color-border)] space-y-3"
                >
                  <div className="flex items-start gap-3">
                    <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-amber-500/10 border border-amber-500/20 text-amber-400 uppercase shrink-0 mt-0.5">
                      Challenge
                    </span>
                    <p className="text-body-sm font-semibold text-[var(--color-text)]">
                      {item.challenge.en}
                    </p>
                  </div>
                  <div className="flex items-start gap-3 pt-2 border-t border-[var(--color-border-subtle)]">
                    <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 uppercase shrink-0 mt-0.5">
                      Resolution
                    </span>
                    <p className="text-xs text-[var(--color-text-muted)] leading-relaxed font-normal">
                      {item.solution.en}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </PageSection>
        )}

        {/* 07. Key Features */}
        {project.keyFeatures && project.keyFeatures.length > 0 && (
          <PageSection title="Key System Features">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-start">
              {project.keyFeatures.map((feature, fIdx) => (
                <div
                  key={fIdx}
                  className="p-5 rounded-xl bg-[var(--color-surface)] border border-[var(--color-border)] flex items-start gap-3"
                >
                  <ShieldCheck className="w-4 h-4 text-[var(--color-secondary)] shrink-0 mt-1" />
                  <span className="text-body-sm text-[var(--color-text)] font-medium">
                    {feature.en}
                  </span>
                </div>
              ))}
            </div>
          </PageSection>
        )}

        {/* 08. Lessons Learned */}
        {project.lessonsLearned && project.lessonsLearned.length > 0 && (
          <PageSection title="Pragmatic Lessons & Takeaways">
            <div className="p-7 sm:p-9 rounded-2xl bg-[var(--color-surface)] border border-[var(--color-border)] text-start space-y-3">
              {project.lessonsLearned.map((lesson, lIdx) => (
                <div key={lIdx} className="flex items-start gap-3 text-body-sm text-[var(--color-text-muted)] font-normal">
                  <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-secondary)] shrink-0 mt-2" />
                  <span>{lesson.en}</span>
                </div>
              ))}
            </div>
          </PageSection>
        )}

        {/* Related Projects & Return Navigation */}
        <div className="pt-8 border-t border-[var(--color-border)] flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
          <Link href="/projects">
            <Button
              variant="outline"
              size="md"
              leftIcon={<ArrowLeft className="w-4 h-4" />}
            >
              Back to All Projects
            </Button>
          </Link>

          {otherProjects.length > 0 && (
            <div className="flex items-center gap-3">
              <span className="text-xs font-mono text-[var(--color-text-subtle)]">Next Case Study:</span>
              <Link
                href={`/projects/${otherProjects[0].slug}`}
                className="text-xs font-bold text-[var(--color-secondary)] hover:text-[var(--color-primary)] transition-colors inline-flex items-center gap-1.5"
              >
                <span>{otherProjects[0].title.en}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          )}
        </div>
      </PageContainer>
    </PortfolioShell>
  );
}
