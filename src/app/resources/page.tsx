'use client';

import React, { useState } from 'react';
import {
  PortfolioShell,
  PageContainer,
  PageSection,
  Card,
  Badge,
  Button,
} from '@/components';
import { ALL_RESOURCES } from '@/content/resources';
import { usePreferencesStore } from '@/store';
import { getLocalizedText } from '@/lib/utils';
import {
  ExternalLink,
  Bookmark,
  CheckCircle2,
  Copy,
  Check,
  FileCode2,
  Sparkles,
  Mail,
  ChevronDown,
  ChevronUp,
  ShieldCheck,
  Zap,
} from 'lucide-react';

export default function ResourcesPage() {
  const { language } = usePreferencesStore();
  const isRtl = language === 'ar';

  const [activeCategory, setActiveCategory] = useState<'all' | 'checklists' | 'tools'>('all');
  const [expandedDoc, setExpandedDoc] = useState<string | null>(null);
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [emailSubscribed, setEmailSubscribed] = useState(false);
  const [emailInput, setEmailInput] = useState('');

  const checklists = ALL_RESOURCES.filter(
    (r) => r.category === 'cheat-sheet' || r.category === 'template'
  );
  const toolsAndDocs = ALL_RESOURCES.filter(
    (r) => r.category === 'tool' || r.category === 'documentation'
  );

  const displayedResources =
    activeCategory === 'checklists'
      ? checklists
      : activeCategory === 'tools'
      ? toolsAndDocs
      : ALL_RESOURCES;

  const handleCopy = (id: string, text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2500);
  };

  const adrTemplateContent = `# ADR-[رقم]: [عنوان القرار المعماري]

- **الحالة (Status):** [مقترح | مقبول | ملغي | مستبدل بـ ADR-xxx]
- **التاريخ (Date):** ${new Date().toISOString().slice(0, 10)}
- **المؤلفون (Authors):** [الاسم / الفريق]

## 1. السياق والمشكلة (Context & Problem Statement)
[شرح التحدي الهندسي أو متطلبات العمل التي استدعت اتخاذ هذا القرار وما هي القيود الحالية]

## 2. البدائل المدروسة (Considered Options)
1. **الخيار الأول:** [وصف الخيار + الإيجابيات والسلبيات]
2. **الخيار الثاني:** [وصف الخيار + الإيجابيات والسلبيات]

## 3. القرار المعتمد (Decision Outcome)
[الخيار الذي تم اعتماده بالتحديد وسبب تفضيله على البدائل الأخرى]

## 4. الإيجابيات والتبعات (Consequences)
- **الإيجابيات (Positive):**
  - [فائدة معمارية أو تشغيلية 1]
  - [فائدة معمارية أو تشغيلية 2]
- **السلبيات والمخاطر المقبولة (Trade-offs):**
  - [مقايضة أو تعقيد إضافي وكيفية التعامل معه]
`;

  const webLaunchChecklistContent = `## قائمة فحص إطلاق موقع ويب للإنتاج (Production Launch Checklist)

### 1. الأداء والوسائط (Performance & Media)
- [ ] ضغط الصور واستخدام تنسيقات حديثة (WebP / AVIF).
- [ ] ضبط الأبعاد (width & height) على عناصر الصور لمنع انزياح التخطيط (CLS).
- [ ] التحقق من تحميل الخطوط بنمط font-display: swap.
- [ ] تفعيل ضغط الاستجابات (Gzip / Brotli) على مستوى الخادم.

### 2. التهيئة لمحركات البحث ومشاركة الروابط (SEO & Social Sharing)
- [ ] كتابة عنوان فريد (Title) ووصف دقيق (Meta Description) لكل صفحة.
- [ ] التحقق من بطاقات Open Graph و Twitter Cards عبر أداة فحص المعاينة.
- [ ] توليد ملف خريطة الموقع (sitemap.xml) وملف توجيه العناكب (robots.txt).
- [ ] ضبط الرابط الأساسي (Canonical URL) لتجنب تكرار المحتوى.

### 3. الأمان وسلامة البيانات (Security & Reliability)
- [ ] تفعيل شهادة SSL/TLS وفرض إعادة التوجيه إلى HTTPS.
- [ ] ضبط ترويسات الأمان الأساسية (CSP, X-Frame-Options, HSTS).
- [ ] التأكد من عدم تسريب أي مفاتيح سرية (API Keys) في كود الواجهة الأمامية.
- [ ] توفير صفحة خطأ 404 مخصصة وواضحة للمستخدم.
`;

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (emailInput.trim()) {
      setEmailSubscribed(true);
      setEmailInput('');
    }
  };

  return (
    <PortfolioShell>
      <PageContainer>
        {/* Header Banner */}
        <div className="p-7 sm:p-10 rounded-3xl bg-[var(--color-surface)] border border-[var(--color-border)] shadow-xs text-start mb-10 space-y-3">
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono font-bold text-[var(--color-secondary)] uppercase tracking-wider">
              {isRtl ? 'الموارد والأدوات' : 'Resources & Engineering Tools'}
            </span>
            <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-[var(--color-surface-sunken)] border border-[var(--color-border-subtle)] text-[var(--color-text-subtle)]">
              Open Knowledge Base
            </span>
          </div>
          <h1 className="text-h2 font-extrabold text-[var(--color-text)]">
            {isRtl ? 'الموارد، النماذج، وقوائم المراجعة' : 'Checklists, Templates & Resources'}
          </h1>
          <p className="text-body text-[var(--color-text-muted)] max-w-3xl leading-relaxed">
            {isRtl
              ? 'مجموعة من قوائم الفحص العملية، قوالب اتخاذ القرارات المعمارية، والأدوات التقنية الموثوقة التي أستخدمها في بناء وصيانة البرمجيات.'
              : 'A curated collection of practical checklists, architecture decision templates, and battle-tested developer tools I rely on in daily engineering practice.'}
          </p>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-2 pt-2">
            <button
              onClick={() => setActiveCategory('all')}
              className={`px-4 py-1.5 rounded-full text-xs font-mono font-medium transition-all ${
                activeCategory === 'all'
                  ? 'bg-[var(--color-primary)] text-white shadow-2xs'
                  : 'bg-[var(--color-surface-sunken)] text-[var(--color-text-muted)] hover:text-[var(--color-text)] border border-[var(--color-border-subtle)]'
              }`}
            >
              {isRtl ? 'الكل' : 'All Resources'} ({ALL_RESOURCES.length})
            </button>
            <button
              onClick={() => setActiveCategory('checklists')}
              className={`px-4 py-1.5 rounded-full text-xs font-mono font-medium transition-all ${
                activeCategory === 'checklists'
                  ? 'bg-[var(--color-primary)] text-white shadow-2xs'
                  : 'bg-[var(--color-surface-sunken)] text-[var(--color-text-muted)] hover:text-[var(--color-text)] border border-[var(--color-border-subtle)]'
              }`}
            >
              {isRtl ? 'قوائم المراجعة والنماذج' : 'Checklists & Templates'} ({checklists.length})
            </button>
            <button
              onClick={() => setActiveCategory('tools')}
              className={`px-4 py-1.5 rounded-full text-xs font-mono font-medium transition-all ${
                activeCategory === 'tools'
                  ? 'bg-[var(--color-primary)] text-white shadow-2xs'
                  : 'bg-[var(--color-surface-sunken)] text-[var(--color-text-muted)] hover:text-[var(--color-text)] border border-[var(--color-border-subtle)]'
              }`}
            >
              {isRtl ? 'الأدوات والمراجع الموصى بها' : 'Recommended Tools & Docs'} ({toolsAndDocs.length})
            </button>
          </div>
        </div>

        {/* Resources Grid */}
        <PageSection
          title={
            activeCategory === 'checklists'
              ? isRtl ? 'قوائم المراجعة والنماذج الهندسية' : 'Engineering Checklists & Templates'
              : activeCategory === 'tools'
              ? isRtl ? 'الأدوات والمراجع التقنية الموصى بها' : 'Recommended Tools & Documentation'
              : isRtl ? 'جميع الموارد المتاحة' : 'All Available Resources'
          }
          subtitle={
            isRtl
              ? 'موارد مباشرة وقابلة للتطبيق العملي الفوري بدون تعقيد.'
              : 'Direct, actionable resources designed for immediate practical utility.'
          }
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {displayedResources.map((res) => {
              const isChecklist = res.id === 'res-web-launch-checklist';
              const isAdr = res.id === 'res-adr-template';
              const isExpandable = isChecklist || isAdr;
              const isExpanded = expandedDoc === res.id;

              return (
                <div
                  key={res.id}
                  className="p-6 rounded-2xl bg-[var(--color-surface)] border border-[var(--color-border)] shadow-2xs flex flex-col justify-between text-start transition-all hover:border-[var(--color-border-strong)]"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        {res.category === 'template' ? (
                          <FileCode2 className="w-4 h-4 text-[var(--color-secondary)]" />
                        ) : res.category === 'cheat-sheet' ? (
                          <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                        ) : (
                          <Bookmark className="w-4 h-4 text-[var(--color-primary)]" />
                        )}
                        <span className="text-xs font-mono text-[var(--color-text-subtle)] uppercase">
                          {res.category}
                        </span>
                      </div>
                      {res.badge && (
                        <span className="px-2.5 py-0.5 rounded-full text-[11px] font-mono bg-[var(--color-surface-sunken)] border border-[var(--color-border-subtle)] text-[var(--color-text-subtle)]">
                          {res.badge}
                        </span>
                      )}
                    </div>

                    <h3 className="text-h4 font-bold text-[var(--color-text)]">
                      {getLocalizedText(res.title, language)}
                    </h3>
                    <p className="text-body-sm text-[var(--color-text-muted)] leading-relaxed">
                      {getLocalizedText(res.description, language)}
                    </p>
                  </div>

                  {/* Expandable Preview Section for Templates/Checklists */}
                  {isExpandable && isExpanded && (
                    <div className="mt-4 pt-4 border-t border-[var(--color-border-subtle)] space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-mono text-[var(--color-text-subtle)]">
                          {isRtl ? 'معاينة القالب المباشر' : 'Live Template Preview'}
                        </span>
                        <button
                          onClick={() =>
                            handleCopy(
                              res.id,
                              isAdr ? adrTemplateContent : webLaunchChecklistContent
                            )
                          }
                          className="inline-flex items-center gap-1.5 px-3 py-1 rounded text-xs font-mono bg-[var(--color-surface-sunken)] border border-[var(--color-border-subtle)] hover:border-[var(--color-primary)] text-[var(--color-text)] transition-all"
                        >
                          {copiedId === res.id ? (
                            <>
                              <Check className="w-3.5 h-3.5 text-emerald-500" />
                              <span>{isRtl ? 'تم النسخ!' : 'Copied!'}</span>
                            </>
                          ) : (
                            <>
                              <Copy className="w-3.5 h-3.5 text-[var(--color-text-subtle)]" />
                              <span>{isRtl ? 'نسخ النص (Markdown)' : 'Copy Markdown'}</span>
                            </>
                          )}
                        </button>
                      </div>
                      <pre className="p-4 rounded-xl bg-[var(--color-surface-sunken)] border border-[var(--color-border-subtle)] text-xs font-mono text-[var(--color-text)] overflow-x-auto whitespace-pre leading-relaxed max-h-60 overflow-y-auto">
                        {isAdr ? adrTemplateContent : webLaunchChecklistContent}
                      </pre>
                    </div>
                  )}

                  <div className="pt-4 mt-4 border-t border-[var(--color-border-subtle)] flex items-center justify-between">
                    {isExpandable ? (
                      <button
                        onClick={() =>
                          setExpandedDoc(isExpanded ? null : res.id)
                        }
                        className="inline-flex items-center gap-1.5 text-xs font-mono font-medium text-[var(--color-primary)] hover:underline"
                      >
                        <span>
                          {isExpanded
                            ? isRtl ? 'إخفاء المعاينة' : 'Hide Preview'
                            : isRtl ? 'معاينة ونسخ القالب' : 'View & Copy Template'}
                        </span>
                        {isExpanded ? (
                          <ChevronUp className="w-3.5 h-3.5" />
                        ) : (
                          <ChevronDown className="w-3.5 h-3.5" />
                        )}
                      </button>
                    ) : (
                      <span className="text-xs font-mono text-[var(--color-text-subtle)]">
                        {res.isExternal ? (isRtl ? 'رابط خارجي موثوق' : 'External link') : ''}
                      </span>
                    )}

                    {res.isExternal ? (
                      <a
                        href={res.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono font-semibold bg-[var(--color-surface-sunken)] border border-[var(--color-border-subtle)] hover:border-[var(--color-primary)] text-[var(--color-text)] transition-all"
                      >
                        <span>{isRtl ? 'زيارة المصدر' : 'Open Resource'}</span>
                        <ExternalLink className="w-3.5 h-3.5 text-[var(--color-text-subtle)]" />
                      </a>
                    ) : null}
                  </div>
                </div>
              );
            })}
          </div>
        </PageSection>

        {/* Future Digital Products Notice (Calm & Grounded) */}
        <PageSection
          title={isRtl ? 'قوالب وأدوات برمجية قيد الإعداد' : 'Upcoming Engineering Kits & Templates'}
          subtitle={
            isRtl
              ? 'مجموعة من حلول البدء السريع (Starter Kits) وقوالب البنية التحتية الجاري تجهيزها.'
              : 'Production-ready starters and architecture toolkits currently under development.'
          }
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-2xl bg-[var(--color-surface)] border border-dashed border-[var(--color-border-strong)] space-y-3 text-start">
              <div className="flex items-center justify-between">
                <span className="px-2.5 py-0.5 rounded-full text-[11px] font-mono bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/20 font-bold">
                  {isRtl ? 'قيد التطوير' : 'In Development'}
                </span>
                <span className="text-xs font-mono text-[var(--color-text-subtle)]">
                  Starter Kit
                </span>
              </div>
              <h3 className="text-h4 font-bold text-[var(--color-text)]">
                {isRtl
                  ? 'قالب انطلاق Next.js المتكامل للإنتاج'
                  : 'Next.js Production Ready Starter Kit'}
              </h3>
              <p className="text-body-sm text-[var(--color-text-muted)] leading-relaxed">
                {isRtl
                  ? 'هيكل برمجي مهيأ مسبقاً يجمع بين App Router، ودعم ثنائي اللغة (RTL/LTR)، ونظام تصميم متكامل، وضبط مسبق لمؤشرات الأداء والأمان.'
                  : 'Pre-configured architecture featuring Next.js App Router, bilingual RTL/LTR primitives, typed design system tokens, and baseline SEO.'}
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[var(--color-surface)] border border-dashed border-[var(--color-border-strong)] space-y-3 text-start">
              <div className="flex items-center justify-between">
                <span className="px-2.5 py-0.5 rounded-full text-[11px] font-mono bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/20 font-bold">
                  {isRtl ? 'قيد التطوير' : 'In Development'}
                </span>
                <span className="text-xs font-mono text-[var(--color-text-subtle)]">
                  DevOps Kit
                </span>
              </div>
              <h3 className="text-h4 font-bold text-[var(--color-text)]">
                {isRtl
                  ? 'حزمة تكوينات Docker وخوادم لينكس الإنتاجية'
                  : 'Production Linux & Docker Deployment Kit'}
              </h3>
              <p className="text-body-sm text-[var(--color-text-muted)] leading-relaxed">
                {isRtl
                  ? 'ملفات إعداد جاهزة لـ Dockerfile و Docker Compose و Nginx مع قواعد أمان جدران الحماية، وإدارة شهادات SSL التلقائية لمشاريع الويب.'
                  : 'Tested Docker compose configs, Nginx reverse proxy templates, automated SSL renewals, and hardened firewall scripts.'}
              </p>
            </div>
          </div>
        </PageSection>

        {/* Quiet Email Subscription Form for New Resources */}
        <div className="mt-12 p-8 sm:p-10 rounded-3xl bg-[var(--color-surface)] border border-[var(--color-border)] shadow-xs text-start space-y-4">
          <div className="flex items-center gap-2">
            <Mail className="w-5 h-5 text-[var(--color-primary)]" />
            <span className="text-xs font-mono font-bold text-[var(--color-secondary)] uppercase tracking-wider">
              {isRtl ? 'التحديثات البريدية' : 'Email Updates'}
            </span>
          </div>

          <div className="space-y-1">
            <h3 className="text-h3 font-bold text-[var(--color-text)]">
              {isRtl
                ? 'احصل على الموارد والنماذج الجديدة عند نشرها'
                : 'Receive New Resources Directly in Your Inbox'}
            </h3>
            <p className="text-body-sm text-[var(--color-text-muted)] max-w-2xl leading-relaxed">
              {isRtl
                ? 'أرسل ملخصات دورية هادئة تضم قوائم المراجعة الهندسية، التحليلات المعمارية، والموارد البرمجية الجديدة دون رسائل تسويقية مزعجة.'
                : 'I send occasional, low-frequency updates featuring new checklists, architecture writeups, and tooling without spam.'}
            </p>
          </div>

          {emailSubscribed ? (
            <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 flex items-center gap-2 text-sm font-semibold">
              <Check className="w-4 h-4 shrink-0" />
              <span>
                {isRtl
                  ? 'شكرًا لاهتمامك! تم تسجيل بريدك وستصلك الموارد والنماذج الجديدة عند إطلاقها.'
                  : 'Thank you! You are signed up to receive new resources and templates as they launch.'}
              </span>
            </div>
          ) : (
            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3 pt-2 max-w-lg">
              <input
                type="email"
                required
                value={emailInput}
                onChange={(e) => setEmailInput(e.target.value)}
                placeholder={isRtl ? 'أدخل بريدك الإلكتروني...' : 'Enter your email address...'}
                className="flex-1 px-4 py-2.5 rounded-xl bg-[var(--color-surface-sunken)] border border-[var(--color-border)] text-sm text-[var(--color-text)] placeholder:text-[var(--color-text-subtle)] focus:outline-none focus:border-[var(--color-primary)]"
              />
              <button
                type="submit"
                className="px-5 py-2.5 rounded-xl text-sm font-bold bg-[var(--color-primary)] text-white hover:bg-[var(--color-primary-hover)] transition-all shadow-2xs shrink-0"
              >
                {isRtl ? 'إشعار بالجديد' : 'Notify Me'}
              </button>
            </form>
          )}

          <p className="text-[11px] font-mono text-[var(--color-text-subtle)]">
            {isRtl
              ? '* النموذج حالياً في طور المعاينة التجريبية (Demo Preview). لا يتم إرسال البيانات لخادم خارجي.'
              : '* Preview mode: Form is demonstration only. Data is not stored on external services.'}
          </p>
        </div>
      </PageContainer>
    </PortfolioShell>
  );
}
