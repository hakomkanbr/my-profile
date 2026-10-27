'use client';

import React from 'react';
import Link from 'next/link';
import { usePreferencesStore } from '@/store';
import { getPortfolioProjectBySlug } from '@/content/portfolio-projects';
import { getLocalizedText } from '@/lib/utils';
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  ExternalLink,
  MessageCircle,
  Sparkles,
} from 'lucide-react';
import { Reveal } from '@/components/motion';
import { buildClientInquiryMessage, buildWhatsAppUrl } from '@/lib/whatsapp';

const SAAS_SLUGS = ['share2sells', 'masar', 'cashpro'] as const;

export const DigitalProductsSection: React.FC = () => {
  const { language } = usePreferencesStore();
  const isRtl = language === 'ar';

  const saasProducts = SAAS_SLUGS.map((slug) =>
    getPortfolioProjectBySlug(slug)
  ).filter((p): p is NonNullable<typeof p> => Boolean(p));

  return (
    <section
      id="digital-products"
      className="py-12 sm:py-20 border-b border-[var(--color-border)] text-start bg-[var(--color-surface-sunken)]/50"
    >
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 sm:space-y-10">
        {/* Section Header */}
        <Reveal direction="up" delay={0}>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div className="space-y-2 max-w-2xl">
              <span className="inline-flex items-center gap-1.5 text-xs font-mono font-bold uppercase tracking-wider text-[var(--color-secondary)]">
                <Sparkles className="w-3.5 h-3.5" />
                <span>{isRtl ? 'منصات SaaS حية' : 'Live SaaS Platforms'}</span>
              </span>
              <h2 className="text-h1 font-extrabold text-[var(--color-text)] tracking-tight rtl:tracking-normal">
                {isRtl ? 'منتجاتي الرقمية' : 'My Digital Products'}
              </h2>
              <p className="text-body text-[var(--color-text-muted)] font-normal leading-relaxed">
                {isRtl
                  ? 'منتجات سحابية مستقلة طوّرتها لمساعدة المتاجر والشركات والمؤسسات المالية على إدارة أعمالها اليومية بسهولة وسرعة.'
                  : 'Independent cloud products I built to help merchants, businesses, and financial counters run their daily operations smoothly and quickly.'}
              </p>
            </div>
          </div>
        </Reveal>

        {/* 3 SaaS Products Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {saasProducts.map((product, idx) => {
            const title = getLocalizedText(product.title, language);
            const tagline = getLocalizedText(product.tagline, language);
            const audience = product.productAudience
              ? getLocalizedText(product.productAudience, language)
              : '';
            const features = product.keyFeatures.slice(0, 3);

            const waInquiryUrl = buildWhatsAppUrl(
              buildClientInquiryMessage({
                projectType: `استفسار حول منتج ${getLocalizedText(product.title, 'ar')}`,
                details: `أرغب في معرفة المزيد عن منتج (${getLocalizedText(product.title, 'ar')}) أو طلب حل مشابه لعملي.`,
                pageUrl: `https://abdulhakimkanbr.com/projects/${product.slug}`,
              })
            );

            return (
              <Reveal key={product.id} direction="up" delay={80 + idx * 90}>
                <div className="p-6 sm:p-7 rounded-2xl bg-[var(--color-surface)] border border-[var(--color-border)] shadow-2xs flex flex-col justify-between space-y-6 hover:border-[var(--color-secondary)]/60 transition-all duration-300 h-full">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between gap-2">
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-emerald-700 dark:text-emerald-400 text-[11px] font-bold">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                        <span>{isRtl ? 'يعمل مباشرة' : 'Live Product'}</span>
                      </span>
                      <span className="text-xs font-mono font-bold text-[var(--color-text-subtle)] uppercase">
                        {product.slug}
                      </span>
                    </div>

                    <div className="space-y-2">
                      <h3 className="text-h3 font-extrabold text-[var(--color-text)] leading-snug">
                        {title}
                      </h3>
                      <p className="text-body-sm text-[var(--color-text-muted)] leading-relaxed">
                        {tagline}
                      </p>
                    </div>

                    {audience && (
                      <div className="p-3.5 rounded-xl bg-[var(--color-surface-sunken)] border border-[var(--color-border-subtle)] space-y-1">
                        <span className="text-[11px] font-bold text-[var(--color-secondary)] block">
                          {isRtl ? 'لمن هذا المنتج؟' : 'Who is it for?'}
                        </span>
                        <p className="text-xs text-[var(--color-text)] leading-relaxed">
                          {audience}
                        </p>
                      </div>
                    )}

                    {features.length > 0 && (
                      <ul className="space-y-2 pt-1">
                        {features.map((feat, fIdx) => (
                          <li
                            key={fIdx}
                            className="flex items-start gap-2 text-xs text-[var(--color-text-muted)]"
                          >
                            <CheckCircle2 className="w-3.5 h-3.5 text-[var(--color-secondary)] shrink-0 mt-0.5" />
                            <span className="leading-relaxed">
                              {getLocalizedText(feat, language)}
                            </span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>

                  {/* Card Footer Actions */}
                  <div className="pt-4 border-t border-[var(--color-border-subtle)] space-y-3">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      {product.liveUrl && (
                        <a
                          href={product.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-[var(--color-primary)] text-white text-xs font-bold hover:opacity-95 transition-opacity"
                        >
                          <span>
                            {isRtl ? 'زيارة موقع المنتج' : 'Visit Live Product'}
                          </span>
                          <ExternalLink className="w-3.5 h-3.5" />
                        </a>
                      )}

                      <Link
                        href={`/projects/${product.slug}`}
                        className="inline-flex items-center gap-1 text-xs font-bold text-[var(--color-secondary)] hover:underline"
                      >
                        <span>
                          {isRtl ? 'تفاصيل المنتج' : 'Product Details'}
                        </span>
                        {isRtl ? (
                          <ArrowLeft className="w-3.5 h-3.5" />
                        ) : (
                          <ArrowRight className="w-3.5 h-3.5" />
                        )}
                      </Link>
                    </div>

                    <a
                      href={waInquiryUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-[11px] font-semibold text-[var(--color-text-muted)] hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
                    >
                      <MessageCircle className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                      <span>
                        {isRtl
                          ? 'اسأل عن هذا المنتج أو اطلب نظامًا مشابهًا عبر واتساب'
                          : 'Ask about this product or request a similar system on WhatsApp'}
                      </span>
                    </a>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};
