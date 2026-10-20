'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { ArrowUpRight, BriefcaseBusiness, Camera, Check, Code2, Copy, GitBranch, Languages, Moon, Share2, Sun } from 'lucide-react';
import { INSTRUCTOR_PROFILE } from '@/content/instructor';
import { PERSONAL_LINKS, type LinkCategory, type LinkIcon } from '@/content/links';
import { getLocalizedText } from '@/lib/utils';
import { usePreferencesStore } from '@/store';
import styles from './links.module.css';

const categories: { id: LinkCategory; title: { ar: string; en: string } }[] = [
  { id: 'social', title: { ar: 'حساباتي', en: 'Find me online' } },
  { id: 'product', title: { ar: 'منتجات ومشاريع', en: 'Products & projects' } },
  { id: 'learning', title: { ar: 'التعلّم والتدريب', en: 'Learning & teaching' } },
];

function BrandMark({ icon }: { icon: LinkIcon }) {
  if (icon === 'instagram') return <Camera aria-hidden="true" size={19} strokeWidth={1.8} />;
  if (icon === 'github') return <Code2 aria-hidden="true" size={19} strokeWidth={1.8} />;
  if (icon === 'gitlab') return <GitBranch aria-hidden="true" size={19} strokeWidth={1.8} />;
  if (icon === 'linkedin') return <span className={styles.linkedinMark} aria-hidden="true">in</span>;
  if (icon === 'masar') return <BriefcaseBusiness aria-hidden="true" size={19} strokeWidth={1.8} />;
  if (icon === 'cashpro') return <span className={styles.cashMark} aria-hidden="true">C</span>;
  return <Code2 aria-hidden="true" size={19} strokeWidth={1.8} />;
}

function LinkRows({ category, language }: { category: LinkCategory; language: 'ar' | 'en' }) {
  const links = PERSONAL_LINKS.filter((item) => item.published && item.category === category).sort((a, b) => a.order - b.order);
  if (links.length === 0) return null;
  return (
    <section className={styles.linkSection} aria-labelledby={`section-${category}`}>
      <h2 id={`section-${category}`} className={styles.sectionTitle}>
        {getLocalizedText(categories.find((item) => item.id === category)!.title, language)}
      </h2>
      <ul className={styles.linkList}>
        {links.map((item) => {
          const title = getLocalizedText(item.title, language);
          const description = item.description ? getLocalizedText(item.description, language) : item.handle ?? '';
          const contents = (
            <>
              <span className={styles.iconTile}><BrandMark icon={item.icon} /></span>
              <span className={styles.linkCopy}>
                <span className={styles.linkTitle}>{title}</span>
                {description && <span className={styles.linkDescription} dir={item.handle && !item.description ? 'ltr' : undefined}><bdi>{description}</bdi></span>}
              </span>
              <ArrowUpRight className={styles.linkArrow} aria-hidden="true" size={17} />
            </>
          );
          return (
            <li key={item.id}>
              {item.external ? (
                <a className={styles.linkRow} href={item.url} target="_blank" rel="noopener noreferrer" aria-label={`${title}${description ? ` — ${description}` : ''}`}>
                  {contents}
                </a>
              ) : (
                <Link className={styles.linkRow} href={item.url} aria-label={`${title}${description ? ` — ${description}` : ''}`}>
                  {contents}
                </Link>
              )}
            </li>
          );
        })}
      </ul>
    </section>
  );
}

export default function LinksHub() {
  const { language, toggleLanguage, theme, toggleTheme } = usePreferencesStore();
  const [shareState, setShareState] = useState<'idle' | 'copied' | 'shared'>('idle');
  const isArabic = language === 'ar';
  const labels = isArabic
    ? { lang: 'English', theme: theme === 'dark' ? 'تفعيل الوضع الفاتح' : 'تفعيل الوضع الداكن', share: 'مشاركة الصفحة أو نسخ الرابط', contact: 'للتواصل المهني', copied: 'تم نسخ الرابط', shared: 'تمت المشاركة' }
    : { lang: 'العربية', theme: theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode', share: 'Share or copy this page', contact: 'Get in touch', copied: 'Link copied', shared: 'Shared' };

  const sharePage = async () => {
    const url = window.location.href;
    let copied = false;
    try {
      if (navigator.share) {
        await navigator.share({ title: 'Abdulhakim Kanbr — Links', url });
        setShareState('shared');
        window.setTimeout(() => setShareState('idle'), 2200);
        return;
      }
    } catch (error) {
      if (error instanceof DOMException && error.name === 'AbortError') return;
    }

    try {
      if (navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(url);
        copied = true;
      } else {
        const input = document.createElement('textarea');
        input.value = url;
        input.setAttribute('readonly', '');
        input.style.position = 'fixed';
        input.style.opacity = '0';
        document.body.append(input);
        input.select();
        copied = document.execCommand('copy');
        input.remove();
      }
    } catch {
      copied = false;
    }
    if (!copied) return;
    setShareState('copied');
    window.setTimeout(() => setShareState('idle'), 2200);
  };

  return (
    <main className={styles.page} dir={isArabic ? 'rtl' : 'ltr'}>
      <div className={styles.shell}>
        <nav className={styles.utilityBar} aria-label={isArabic ? 'إعدادات العرض' : 'Display preferences'}>
          <button className={styles.utilityButton} type="button" onClick={toggleLanguage} aria-label={isArabic ? 'Switch language to English' : 'تغيير اللغة إلى العربية'}>
            <Languages size={16} aria-hidden="true" /><span>{labels.lang}</span>
          </button>
          <button className={styles.utilityButton} type="button" onClick={toggleTheme} aria-label={labels.theme}>
            {theme === 'dark' ? <Sun size={16} aria-hidden="true" /> : <Moon size={16} aria-hidden="true" />}
            <span>{isArabic ? (theme === 'dark' ? 'فاتح' : 'داكن') : (theme === 'dark' ? 'Light' : 'Dark')}</span>
          </button>
        </nav>

        <header className={styles.profile}>
          <div className={styles.identityLine}>
            <div className={styles.portraitFrame}>
              <Image src="/myphoto.jpg" alt={getLocalizedText(INSTRUCTOR_PROFILE.name, language)} fill priority sizes="88px" className={styles.portrait} />
            </div>
            <div className={styles.identityText}>
              <p className={styles.eyebrow}>{isArabic ? 'الموقع الرسمي' : 'PERSONAL LINK PAGE'}</p>
              <h1>{getLocalizedText(INSTRUCTOR_PROFILE.name, language)}</h1>
            </div>
          </div>
          <p className={styles.role}>{getLocalizedText(INSTRUCTOR_PROFILE.roleTitle, language)}</p>
          <p className={styles.bio}>{isArabic
            ? 'أصمّم وأبني تطبيقات ويب وأنظمة برمجية، وأشارك خبرتي في هندسة البرمجيات والتعلّم العملي.'
            : 'I design and build web applications and software systems, and share practical engineering knowledge.'}</p>
          <div className={styles.signatureRule} aria-hidden="true"><span /></div>
          <button className={styles.shareButton} type="button" onClick={sharePage} aria-label={shareState === 'copied' ? labels.copied : shareState === 'shared' ? labels.shared : labels.share}>
            {shareState === 'copied' ? <Check size={17} aria-hidden="true" /> : shareState === 'shared' ? <Share2 size={17} aria-hidden="true" /> : <Copy size={16} aria-hidden="true" />}
            <span aria-live="polite" aria-atomic="true">{shareState === 'copied' ? labels.copied : shareState === 'shared' ? labels.shared : (isArabic ? 'شارك هذه الصفحة' : 'Share this page')}</span>
          </button>
        </header>

        <div className={styles.sections}>
          {categories.map(({ id }) => <LinkRows key={id} category={id} language={language} />)}
        </div>

        <footer className={styles.footer}>
          <Link className={styles.contactLink} href="/contact">
            <span>{labels.contact}</span><ArrowUpRight size={16} aria-hidden="true" />
          </Link>
          <span className={styles.footerCaption}>{isArabic ? 'عبد الحكيم قنبر · مهندس برمجيات' : 'Abdulhakim Kanbr · Software Engineer'}</span>
        </footer>
      </div>
    </main>
  );
}
