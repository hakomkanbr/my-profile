'use client';

import React, { useState } from 'react';
import {
  PortfolioShell,
  PageContainer,
  PageSection,
  Button,
  WhatsAppActionFeedback,
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
  ChevronDown,
  ChevronUp,
  MessageCircle,
} from 'lucide-react';
import {
  buildResourceRequestMessage,
  getCurrentPageUrl,
  openWhatsAppChat,
} from '@/lib/whatsapp';

const RESOURCE_MARKDOWN_CONTENT: Record<string, string> = {
  'res-web-launch-checklist': `## قائمة فحص إطلاق موقع ويب للإنتاج (Production Launch Checklist)

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
- [ ] توفير صفحة خطأ 404 مخصصة وواضحة للمستخدم.`,

  'res-web-vitals-checklist': `## قائمة فحص تحسين مؤشرات الأداء (Core Web Vitals Checklist)

### 1. سرعة ظهور المحتوى الرئيسي (LCP < 2.5s)
- [ ] إعطاء أولوية تحميل للصورة الرئيسية في أعلى الصفحة (priority / fetchpriority="high").
- [ ] استخدام Server Components لتقليل حجم ملفات JavaScript المرسلة للمتصفح.
- [ ] تخزين الاستجابات الثابتة مؤقتًا عبر CDN أو التخزين المرحلي.

### 2. ثبات عناصر الصفحة أثناء التحميل (CLS < 0.1)
- [ ] تحديد أبعاد صريحة للصور والفيديوهات والبطاقات المتغيرة.
- [ ] حجز مساحة ثابتة للإعلانات أو النوافذ الديناميكية قبل ظهورها.

### 3. سرعة استجابة التفاعل (INP < 200ms)
- [ ] تجنب العمليات الحسابية الثقيلة داخل النقرات المباشرة.
- [ ] تأجيل تحميل السكربتات الخارجية غير الضرورية (lazyOnload).`,

  'res-adr-template': `# ADR-[رقم]: [عنوان القرار التقني أو المعماري]

- **الحالة (Status):** [مقترح | معتمد | مستبدل]
- **التاريخ (Date):** ${new Date().toISOString().slice(0, 10)}
- **المسؤول (Author):** [الاسم / الفريق]

## 1. السياق والمشكلة (Context & Problem Statement)
[ما هي المشكلة العملية أو متطلبات المشروع التي استدعت اتخاذ هذا القرار؟]

## 2. الخيارات المدروسة (Considered Options)
1. **الخيار الأول:** [وصف مختصر + المزايا والعيوب]
2. **الخيار الثاني:** [وصف مختصر + المزايا والعيوب]

## 3. القرار المتخذ (Decision Outcome)
[الخيار الذي تم اعتماده وسبب اختياره]

## 4. الأثر والتبعات (Consequences)
- **المزايا المتحققة:** [كيف سيساعد هذا القرار المشروع؟]
- **النقاط التي تحتاج متابعة:** [أي تكلفة أو متطلبات إضافية]`,

  'res-api-security-checklist': `## قائمة فحص أمان واجهات البرمجة والواجهات الأمامية (API & Frontend Security)

### 1. التحقق من المدخلات والبيانات
- [ ] التحقق من جميع المدخلات على الخادم (Server-Side Validation) وعدم الاكتفاء بتحقق المتصفح.
- [ ] تنظيف المحتوى النصي لمنع ثغرات حقن السكربتات (XSS).
- [ ] استخدام الاستعلامات المعلمية (Parameterized Queries / ORM) لمنع SQL Injection.

### 2. الجلسات والصلاحيات (Auth & Sessions)
- [ ] حفظ رموز الجلسات الحساسة في ملفات تعريف ارتباط محمية (HttpOnly, Secure, SameSite).
- [ ] التحقق من صلاحية المستخدم في كل طلب يصل إلى الخادم (Authorization Check).
- [ ] تفعيل تحديد معدل الطلبات (Rate Limiting) على مسارات تسجيل الدخول والنماذج العامة.`,
};

const RESOURCE_ANCHOR_ID: Record<string, string> = {
  'res-web-launch-checklist': 'launch-checklist',
  'res-web-vitals-checklist': 'vitals-checklist',
  'res-adr-template': 'adr-template',
  'res-api-security-checklist': 'security-checklist',
};

export default function ResourcesPage() {
  const { language } = usePreferencesStore();
  const isRtl = language === 'ar';

  const [activeCategory, setActiveCategory] = useState<
    'all' | 'checklists' | 'tools'
  >('all');
  const [expandedDoc, setExpandedDoc] = useState<string | null>(
    'res-web-launch-checklist'
  );
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [nameOrEmail, setNameOrEmail] = useState('');
  const [preparedWhatsAppMsg, setPreparedWhatsAppMsg] = useState<string | null>(
    null
  );

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

  const handleRequestUpdatesWhatsApp = (
    e: React.FormEvent,
    customTopic?: string
  ) => {
    e.preventDefault();
    const msg = buildResourceRequestMessage({
      nameOrEmail,
      topic:
        customTopic ||
        'الانضمام لقائمة المهتمين بالقوالب والموارد البرمجية الجديدة',
      pageUrl: getCurrentPageUrl('/resources'),
    });
    setPreparedWhatsAppMsg(msg);
    openWhatsAppChat(msg);
  };

  return (
    <PortfolioShell>
      <PageContainer>
        {/* Header Banner */}
        <div className="p-7 sm:p-10 rounded-3xl bg-[var(--color-surface)] border border-[var(--color-border)] shadow-xs text-start mb-10 space-y-3">
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono font-bold text-[var(--color-secondary)] uppercase tracking-wider">
              {isRtl ? 'الموارد والقوالب العملية' : 'Practical Resources & Templates'}
            </span>
          </div>
          <h1 className="text-h2 font-extrabold text-[var(--color-text)]">
            {isRtl
              ? 'قوائم الفحص، القوالب الجاهزة، وأدوات المطورين'
              : 'Checklists, Starter Templates & Developer Tools'}
          </h1>
          <p className="text-body text-[var(--color-text-muted)] max-w-3xl leading-relaxed">
            {isRtl
              ? 'مجموعة من قوائم الفحص العملية والنماذج الجاهزة للنسخ، أستخدمها في مراجعة المواقع قبل الإطلاق، تحسين السرعة، وتوثيق القرارات التقنية.'
              : 'A collection of practical checklists and ready-to-copy templates I use for website launch reviews, speed optimization, and technical documentation.'}
          </p>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-2 pt-2">
            <button
              type="button"
              onClick={() => setActiveCategory('all')}
              className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
                activeCategory === 'all'
                  ? 'bg-[var(--color-primary)] text-white shadow-2xs'
                  : 'bg-[var(--color-surface-sunken)] text-[var(--color-text-muted)] hover:text-[var(--color-text)] border border-[var(--color-border-subtle)]'
              }`}
            >
              {isRtl ? 'جميع الموارد' : 'All Resources'} ({ALL_RESOURCES.length})
            </button>
            <button
              type="button"
              onClick={() => setActiveCategory('checklists')}
              className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
                activeCategory === 'checklists'
                  ? 'bg-[var(--color-primary)] text-white shadow-2xs'
                  : 'bg-[var(--color-surface-sunken)] text-[var(--color-text-muted)] hover:text-[var(--color-text)] border border-[var(--color-border-subtle)]'
              }`}
            >
              {isRtl ? 'قوائم الفحص والقوالب' : 'Checklists & Templates'} (
              {checklists.length})
            </button>
            <button
              type="button"
              onClick={() => setActiveCategory('tools')}
              className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
                activeCategory === 'tools'
                  ? 'bg-[var(--color-primary)] text-white shadow-2xs'
                  : 'bg-[var(--color-surface-sunken)] text-[var(--color-text-muted)] hover:text-[var(--color-text)] border border-[var(--color-border-subtle)]'
              }`}
            >
              {isRtl ? 'الأدوات والمراجع الموصى بها' : 'Recommended Tools & Docs'}{' '}
              ({toolsAndDocs.length})
            </button>
          </div>
        </div>

        {/* Resources Grid */}
        <PageSection
          title={
            activeCategory === 'checklists'
              ? isRtl
                ? 'قوائم الفحص والقوالب الجاهزة للنسخ'
                : 'Ready-to-Copy Checklists & Templates'
              : activeCategory === 'tools'
                ? isRtl
                  ? 'الأدوات والمراجع التقنية الموصى بها'
                  : 'Recommended Tools & Documentation'
                : isRtl
                  ? 'جميع الموارد المتاحة'
                  : 'All Available Resources'
          }
          subtitle={
            isRtl
              ? 'يمكنك معاينة أي قائمة فحص أو قالب ونسخه مباشرة لاستخدامه في مشروعك.'
              : 'Preview any checklist or template and copy it directly into your project.'
          }
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {displayedResources.map((res) => {
              const markdownText = RESOURCE_MARKDOWN_CONTENT[res.id];
              const isExpandable = Boolean(markdownText);
              const isExpanded = expandedDoc === res.id;
              const anchorId = RESOURCE_ANCHOR_ID[res.id];

              return (
                <div
                  key={res.id}
                  id={anchorId}
                  className="p-6 rounded-2xl bg-[var(--color-surface)] border border-[var(--color-border)] shadow-2xs flex flex-col justify-between text-start transition-all hover:border-[var(--color-secondary)]/50 scroll-mt-24"
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
                          {isRtl
                            ? 'محتوى القالب الجاهز للنسخ'
                            : 'Template Content'}
                        </span>
                        <button
                          type="button"
                          onClick={() => handleCopy(res.id, markdownText)}
                          className="inline-flex items-center gap-1.5 px-3 py-1 rounded text-xs font-mono bg-[var(--color-surface-sunken)] border border-[var(--color-border-subtle)] hover:border-[var(--color-primary)] text-[var(--color-text)] transition-all cursor-pointer"
                        >
                          {copiedId === res.id ? (
                            <>
                              <Check className="w-3.5 h-3.5 text-emerald-500" />
                              <span>{isRtl ? 'تم النسخ!' : 'Copied!'}</span>
                            </>
                          ) : (
                            <>
                              <Copy className="w-3.5 h-3.5 text-[var(--color-text-subtle)]" />
                              <span>
                                {isRtl
                                  ? 'نسخ النص (Markdown)'
                                  : 'Copy Markdown'}
                              </span>
                            </>
                          )}
                        </button>
                      </div>
                      <pre className="p-4 rounded-xl bg-[var(--color-surface-sunken)] border border-[var(--color-border-subtle)] text-xs font-mono text-[var(--color-text)] overflow-x-auto whitespace-pre-wrap leading-relaxed max-h-64 overflow-y-auto">
                        {markdownText}
                      </pre>
                    </div>
                  )}

                  <div className="pt-4 mt-4 border-t border-[var(--color-border-subtle)] flex items-center justify-between">
                    {isExpandable ? (
                      <button
                        type="button"
                        onClick={() =>
                          setExpandedDoc(isExpanded ? null : res.id)
                        }
                        className="inline-flex items-center gap-1.5 text-xs font-bold text-[var(--color-secondary)] hover:underline cursor-pointer"
                      >
                        <span>
                          {isExpanded
                            ? isRtl
                              ? 'إخفاء المحتوى'
                              : 'Hide Content'
                            : isRtl
                              ? 'عرض ونسخ المحتوى'
                              : 'View & Copy Content'}
                        </span>
                        {isExpanded ? (
                          <ChevronUp className="w-3.5 h-3.5" />
                        ) : (
                          <ChevronDown className="w-3.5 h-3.5" />
                        )}
                      </button>
                    ) : (
                      <span className="text-xs font-mono text-[var(--color-text-subtle)]">
                        {res.isExternal
                          ? isRtl
                            ? 'مرجع خارجي موثوق'
                            : 'Official Reference'
                          : ''}
                      </span>
                    )}

                    {res.isExternal ? (
                      <a
                        href={res.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-[var(--color-surface-sunken)] border border-[var(--color-border-subtle)] hover:border-[var(--color-primary)] text-[var(--color-text)] transition-all"
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

        {/* Request Resources / Join Updates via WhatsApp */}
        <div className="mt-12 p-8 sm:p-10 rounded-3xl bg-[var(--color-surface)] border border-[var(--color-border)] shadow-xs text-start space-y-4">
          <div className="flex items-center gap-2">
            <MessageCircle className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
            <span className="text-xs font-mono font-bold text-[var(--color-secondary)] uppercase tracking-wider">
              {isRtl
                ? 'طلب القوالب والتحديثات عبر واتساب'
                : 'Request Templates & Updates via WhatsApp'}
            </span>
          </div>

          <div className="space-y-1">
            <h3 className="text-h3 font-bold text-[var(--color-text)]">
              {isRtl
                ? 'هل تحتاج قالبًا مخصصًا أو ترغب في متابعة الموارد الجديدة؟'
                : 'Need a specific template or want to follow new resources?'}
            </h3>
            <p className="text-body-sm text-[var(--color-text-muted)] max-w-2xl leading-relaxed">
              {isRtl
                ? 'أدخل اسمك أو بريدك (اختياري) واضغط الزر لفتح محادثة واتساب جاهزة لطلب القوالب الجديدة أو الانضمام لقائمة المهتمين بالتحديثات.'
                : 'Enter your name or email (optional) and click to open a ready WhatsApp message to request new templates or join the updates list.'}
            </p>
          </div>

          <form
            onSubmit={handleRequestUpdatesWhatsApp}
            className="flex flex-col sm:flex-row gap-3 pt-2 max-w-xl"
          >
            <input
              type="text"
              value={nameOrEmail}
              onChange={(e) => setNameOrEmail(e.target.value)}
              placeholder={
                isRtl
                  ? 'الاسم أو البريد الإلكتروني (اختياري)...'
                  : 'Your name or email (optional)...'
              }
              aria-label={
                isRtl
                  ? 'الاسم أو البريد الإلكتروني'
                  : 'Your name or email'
              }
              className="flex-1 px-4 py-2.5 rounded-xl bg-[var(--color-surface-sunken)] border border-[var(--color-border)] text-sm text-[var(--color-text)] placeholder:text-[var(--color-text-subtle)] focus:outline-none focus:border-[var(--color-primary)]"
            />
            <Button
              type="submit"
              variant="primary"
              size="md"
              className="font-bold bg-emerald-600 hover:bg-emerald-700 border-emerald-600 text-white shrink-0"
              leftIcon={<MessageCircle className="w-4 h-4" />}
            >
              {isRtl
                ? 'طلب عبر واتساب'
                : 'Request via WhatsApp'}
            </Button>
          </form>

          {preparedWhatsAppMsg && (
            <WhatsAppActionFeedback
              message={preparedWhatsAppMsg}
              isRtl={isRtl}
              onClose={() => setPreparedWhatsAppMsg(null)}
            />
          )}
        </div>
      </PageContainer>
    </PortfolioShell>
  );
}
