'use client';

import React from 'react';
import Link from 'next/link';
import { MessageCircle } from 'lucide-react';
import { usePreferencesStore } from '@/store';
import { INSTRUCTOR_PROFILE } from '@/content/instructor';
import { getLocalizedText } from '@/lib/utils';
import { WHATSAPP_CONFIG, buildWhatsAppUrl } from '@/lib/whatsapp';

const GithubIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
  </svg>
);

const GitlabIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M22.65 14.39L12 22.13 1.35 14.39a.84.84 0 0 1-.3-.94l1.22-3.78 2.44-7.51A.42.42 0 0 1 4.82 2a.43.43 0 0 1 .58 0 .42.42 0 0 1 .11.18l2.44 7.49h8.1l2.44-7.49a.42.42 0 0 1 .11-.18.43.43 0 0 1 .58 0 .42.42 0 0 1 .11.16l2.44 7.51 1.22 3.78a.84.84 0 0 1-.3.94z" />
  </svg>
);

const LinkedinIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
  </svg>
);

const InstagramIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
  </svg>
);

const socialIconMap: Record<string, React.ReactNode> = {
  github: <GithubIcon className="w-3.5 h-3.5" />,
  gitlab: <GitlabIcon className="w-3.5 h-3.5" />,
  linkedin: <LinkedinIcon className="w-3.5 h-3.5" />,
  instagram: <InstagramIcon className="w-3.5 h-3.5" />,
};

export const PortfolioFooter: React.FC = () => {
  const { language } = usePreferencesStore();
  const isRtl = language === 'ar';
  const name = getLocalizedText(INSTRUCTOR_PROFILE.name, language);
  const whatsappHref = buildWhatsAppUrl(
    'مرحبًا أستاذ عبد الحكيم، أتواصل معك من خلال موقعك الشخصي.'
  );

  return (
    <footer className="w-full border-t border-[var(--color-border)] bg-[var(--color-surface)] py-10 sm:py-12 px-4 sm:px-8 mt-auto text-start">
      <div className="w-full max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-6 sm:gap-8">
        {/* Personal Info */}
        <div className="flex items-center gap-3">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/myphoto.jfif"
            alt={name}
            width={44}
            height={44}
            className="w-10 h-10 sm:w-11 sm:h-11 rounded-full object-cover ring-2 ring-[var(--color-border)] shadow-xs shrink-0"
          />
          <div className="flex flex-col">
            <span className="font-extrabold text-sm text-[var(--color-text)]">
              {name}
            </span>
            <span className="text-xs text-[var(--color-text-subtle)] font-medium">
              {isRtl
                ? 'أحوّل الأفكار إلى مواقع ومنتجات رقمية'
                : 'Turning ideas into websites & digital products'}
            </span>
            <div className="flex flex-wrap items-center gap-3 mt-1">
              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                dir="ltr"
                className="inline-flex items-center gap-1 text-[11px] font-mono text-emerald-600 dark:text-emerald-400 hover:underline"
              >
                <MessageCircle className="w-3 h-3" />
                <span>{WHATSAPP_CONFIG.phoneDisplay}</span>
              </a>
              <span className="text-[var(--color-border)]">•</span>
              <a
                href="mailto:abdulhekimkanbr@gmail.com"
                className="text-[11px] font-mono text-[var(--color-text-muted)] hover:text-[var(--color-secondary)] transition-colors"
              >
                abdulhekimkanbr@gmail.com
              </a>
            </div>
          </div>
        </div>

        {/* Essential Navigation Links */}
        <div className="flex flex-wrap items-center gap-x-5 gap-y-2.5 text-xs font-bold text-[var(--color-text-muted)]">
          <Link href="/" className="hover:text-[var(--color-secondary)] transition-colors">
            {isRtl ? 'الرئيسية' : 'Home'}
          </Link>
          <Link href="/projects" className="hover:text-[var(--color-secondary)] transition-colors">
            {isRtl ? 'أعمالي ومنتجاتي' : 'Work & Products'}
          </Link>
          <Link href="/web-creator-ai" className="hover:text-[var(--color-secondary)] transition-colors">
            WEB CREATOR AI
          </Link>
          <Link href="/writings" className="hover:text-[var(--color-secondary)] transition-colors">
            {isRtl ? 'المقالات' : 'Articles'}
          </Link>
          <Link href="/resources" className="hover:text-[var(--color-secondary)] transition-colors">
            {isRtl ? 'الموارد' : 'Resources'}
          </Link>
          <Link href="/about" className="hover:text-[var(--color-secondary)] transition-colors">
            {isRtl ? 'عنّي' : 'About'}
          </Link>
          <Link href="/links" className="hover:text-[var(--color-secondary)] transition-colors">
            {isRtl ? 'روابطي' : 'Links'}
          </Link>
          <Link href="/contact" className="hover:text-[var(--color-secondary)] transition-colors">
            {isRtl ? 'تواصل معي' : 'Contact'}
          </Link>
        </div>

        {/* Social Links & Copyright */}
        <div className="flex flex-col md:items-end gap-2.5 text-xs">
          <div className="flex flex-wrap items-center gap-2 text-[var(--color-text-subtle)]">
            {INSTRUCTOR_PROFILE.socialLinks.map((s) => (
              <a
                key={s.platform}
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                title={s.label}
                className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[11px] font-mono font-medium bg-[var(--color-surface-sunken)] border border-[var(--color-border-subtle)] text-[var(--color-text-muted)] hover:text-[var(--color-secondary)] hover:border-[var(--color-secondary)]/50 transition-all shadow-2xs"
              >
                {socialIconMap[s.platform]}
                <span>{s.label}</span>
              </a>
            ))}
          </div>
          <span className="text-[11px] text-[var(--color-text-subtle)] font-mono">
            © {new Date().getFullYear()} {name}.
          </span>
        </div>
      </div>
    </footer>
  );
};
