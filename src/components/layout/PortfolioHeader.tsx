'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn, getLocalizedText } from '@/lib/utils';
import { usePreferencesStore } from '@/store';
import { PORTFOLIO_NAVIGATION_ITEMS } from '@/content/navigation';
import { INSTRUCTOR_PROFILE } from '@/content/instructor';
import { Dropdown } from '../ui/Dropdown';
import { Menu, X, Sun, Moon, Monitor, Globe } from './IconMapper';
import { ChevronsRight, ChevronsLeft } from 'lucide-react';

export const PortfolioHeader: React.FC = () => {
  const pathname = usePathname();
  const { language, theme, setLanguage, setTheme } = usePreferencesStore();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const isRtl = language === 'ar';
  const name = getLocalizedText(INSTRUCTOR_PROFILE.name, language);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && mobileMenuOpen) setMobileMenuOpen(false);
    };
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [mobileMenuOpen]);

  // Track scroll position to toggle sticky header
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 80);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const themeOptions = [
    {
      id: 'theme-light',
      label: isRtl ? 'نهاري' : 'Light',
      icon: <Sun className="w-4 h-4" />,
      onClick: () => setTheme('light'),
    },
    {
      id: 'theme-dark',
      label: isRtl ? 'داكن' : 'Dark',
      icon: <Moon className="w-4 h-4" />,
      onClick: () => setTheme('dark'),
    },
    {
      id: 'theme-system',
      label: isRtl ? 'تلقائي' : 'System',
      icon: <Monitor className="w-4 h-4" />,
      onClick: () => setTheme('system'),
    },
  ];

  return (
    <>
      {/* =========================================================================
          01 — DESKTOP HEADER (Lendex Authentic 1:1 Architecture)
          Class: header-section sticky-header d-none d-lg-block
          Height: 120px line-height, 18px font, #858792 hover #fff with scribble
          Button: 65px height, 40px padding, 32.5px radius, #3b3d49 border
          ========================================================================= */}
      <header
        className={cn(
          'header-section hidden lg:block w-full z-50 transition-all duration-500',
          isScrolled
            ? 'sticky-header fixed top-0 inset-x-0 bg-[#252734] shadow-md shadow-black/20 py-0 animate-in fade-in-down duration-500'
            : 'absolute top-0 inset-x-0 bg-transparent py-[15px]'
        )}
      >
        <div className="header-wrapper w-full">
          <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between">
              
              {/* Start Header Logo / Personal Brand Identity */}
              <div className="header-logo shrink-0">
                <Link
                  href="/"
                  className="inline-flex items-center gap-3.5 group focus:outline-none select-none"
                  aria-label={name}
                >
                  {/* Distinctive Monogram Emblem */}
                  <div className="relative w-11 h-11 rounded-2xl bg-gradient-to-br from-white/10 to-white/[0.02] border border-white/15 group-hover:border-blue-400/50 flex items-center justify-center transition-all duration-300 group-hover:scale-105 shadow-md shadow-black/20 shrink-0">
                    <span className="font-editorial text-2xl font-bold tracking-tight text-white group-hover:text-blue-400 transition-colors">
                      {isRtl ? 'ق' : 'K'}
                    </span>
                    <span className="absolute -top-1 -end-1 w-2.5 h-2.5 rounded-full bg-emerald-400 ring-2 ring-[#252734] animate-pulse" title={isRtl ? 'متاح للعمل' : 'Available'} />
                  </div>

                  {/* Typographic Name Wordmark */}
                  <div className="flex flex-col text-start justify-center">
                    <span className="font-editorial text-2xl xl:text-[27px] font-bold tracking-tight text-white group-hover:text-slate-200 transition-colors leading-tight">
                      {name}
                      <span className="text-blue-400 font-sans ms-0.5">.</span>
                    </span>
                    <span className="text-[11px] font-mono tracking-wider text-[#858792] group-hover:text-slate-400 transition-colors font-medium mt-0.5 leading-none">
                      {isRtl ? 'مهندس برمجيات' : 'Software Engineer'}
                    </span>
                  </div>
                </Link>
              </div>
              {/* End Header Logo */}

              {/* Start Header Menu (Lendex header-nav with 120px line-height & signature scribble) */}
              <nav className="header-menu">
                <ul className="header-nav flex items-center m-0 p-0 list-none">
                  {PORTFOLIO_NAVIGATION_ITEMS.map((item) => {
                    const isActive =
                      item.href === '/'
                        ? pathname === '/'
                        : pathname === item.href || (item.href !== '/' && !item.href.startsWith('/#') && pathname.startsWith(`${item.href}/`));
                    const label = getLocalizedText(item.label, language);

                    return (
                      <li
                        key={item.id}
                        className="relative px-3.5 xl:px-7"
                      >
                        <Link
                          href={item.href}
                          className={cn(
                            'group relative inline-block text-[18px] font-medium transition-colors duration-500',
                            isScrolled ? 'h-[90px] leading-[90px]' : 'h-[120px] leading-[120px]',
                            isActive ? 'text-white' : 'text-[#858792] hover:text-white'
                          )}
                        >
                          <span className="relative z-10">{label}</span>

                          {/* Lendex Signature Scribble Doodle Hover Shape */}
                          <span
                            aria-hidden="true"
                            className={cn(
                              'pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120px] h-[60px] bg-contain bg-center bg-no-repeat transition-all duration-500 z-0',
                              isActive
                                ? 'opacity-100 scale-100'
                                : 'opacity-0 scale-90 group-hover:opacity-100 group-hover:scale-100'
                            )}
                            style={{
                              backgroundImage: "url('/images/icon/menu-hover-shape.png')",
                            }}
                          />
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </nav>
              {/* End Header Menu */}

              {/* Start Header Action Link (Lendex Hire Me Button + Subtle Lang & Theme) */}
              <div className="header-btn-link flex items-center gap-4 shrink-0">
                {/* Language Switcher Button (Subtle pill matching Lendex palette) */}
                <button
                  type="button"
                  onClick={() => setLanguage(language === 'ar' ? 'en' : 'ar')}
                  className="inline-flex items-center gap-1.5 h-10 px-3.5 rounded-full border border-[#3b3d49] hover:border-white/40 text-xs font-mono font-bold text-[#858792] hover:text-white transition-all cursor-pointer"
                  aria-label="تبديل لغة الواجهة"
                  title={isRtl ? 'Switch to English' : 'التحويل للعربية'}
                >
                  <Globe className="w-3.5 h-3.5 text-[#858792]" />
                  <span>{isRtl ? 'EN' : 'عربي'}</span>
                </button>

                {/* Theme Switcher Dropdown */}
                <Dropdown
                  align="end"
                  items={themeOptions}
                  trigger={
                    <button
                      type="button"
                      className="w-10 h-10 rounded-full flex items-center justify-center border border-[#3b3d49] hover:border-white/40 text-[#858792] hover:text-white transition-all cursor-pointer"
                      aria-label="تغيير المظهر"
                    >
                      {theme === 'dark' ? (
                        <Moon className="w-4 h-4 text-blue-400" />
                      ) : theme === 'light' ? (
                        <Sun className="w-4 h-4 text-amber-400" />
                      ) : (
                        <Monitor className="w-4 h-4 text-[#858792]" />
                      )}
                    </button>
                  }
                />

                {/* Lendex Authentic "Let's Talk" Button (.btn .btn-sm .btn-outline-one) */}
                <Link
                  href="/contact"
                  className="btn btn-sm btn-outline-one group inline-flex items-center justify-center gap-2.5 h-[65px] px-[40px] rounded-[32.5px] border border-[#3b3d49] hover:border-[#2e303d] bg-transparent hover:bg-[#2e303d] text-white text-[16px] xl:text-[18px] font-medium leading-[60px] transition-all duration-500 shadow-md"
                >
                  <span>{isRtl ? 'تواصل معي' : "Let's Talk"}</span>
                  {isRtl ? (
                    <ChevronsLeft className="w-5 h-5 text-white transition-transform group-hover:-translate-x-1" />
                  ) : (
                    <ChevronsRight className="w-5 h-5 text-white transition-transform group-hover:translate-x-1" />
                  )}
                </Link>
              </div>
              {/* End Header Action Link */}

            </div>
          </div>
        </div>
      </header>

      {/* =========================================================================
          02 — MOBILE HEADER (Lendex mobile-header d-block d-lg-none)
          Background: #2a2c39, padding: 20px 0
          ========================================================================= */}
      <div
        className={cn(
          'mobile-header lg:hidden w-full z-50 transition-all duration-300',
          isScrolled
            ? 'fixed top-0 inset-x-0 bg-[#252734]/95 backdrop-blur-md border-b border-white/10 shadow-md py-3.5'
            : 'absolute top-0 inset-x-0 bg-[#2a2c39] py-5'
        )}
      >
        <div className="container max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between">
            {/* Mobile Logo / Personal Brand Identity */}
            <div className="mobile-logo shrink-0">
              <Link href="/" className="inline-flex items-center gap-2.5 focus:outline-none select-none">
                <div className="w-9 h-9 rounded-xl bg-white/10 border border-white/15 flex items-center justify-center text-white shrink-0">
                  <span className="font-editorial text-lg font-bold text-white">
                    {isRtl ? 'ق' : 'K'}
                  </span>
                </div>
                <div className="flex flex-col text-start justify-center leading-tight">
                  <span className="font-editorial text-lg font-bold tracking-tight text-white">
                    {name}
                    <span className="text-blue-400 font-sans ms-0.5">.</span>
                  </span>
                  <span className="text-[10px] font-mono text-[#858792]">
                    {isRtl ? 'مهندس برمجيات' : 'Software Eng'}
                  </span>
                </div>
              </Link>
            </div>

            {/* Mobile Actions: Language + Toggle */}
            <div className="mobile-action-link flex items-center gap-2.5">
              {/* Quick Language Toggle */}
              <button
                type="button"
                onClick={() => setLanguage(language === 'ar' ? 'en' : 'ar')}
                className="inline-flex items-center gap-1 h-9 px-2.5 rounded-full border border-white/15 text-xs font-mono font-bold text-slate-300 hover:text-white"
                aria-label="تبديل اللغة"
              >
                <Globe className="w-3 h-3 text-slate-300" />
                <span>{isRtl ? 'EN' : 'عربي'}</span>
              </button>

              {/* Theme Toggle Button */}
              <button
                type="button"
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                className="w-9 h-9 rounded-full flex items-center justify-center border border-white/15 text-slate-300 hover:text-white"
                aria-label="تبديل المظهر"
              >
                {theme === 'dark' ? (
                  <Moon className="w-3.5 h-3.5 text-blue-400" />
                ) : (
                  <Sun className="w-3.5 h-3.5 text-amber-400" />
                )}
              </button>

              {/* Offcanvas Toggle Hamburger */}
              <button
                type="button"
                onClick={() => setMobileMenuOpen(true)}
                className="offcanvas-toggle w-10 h-10 rounded-full flex items-center justify-center border border-white/15 bg-white/5 text-white hover:bg-white/15 transition-all cursor-pointer"
                aria-label="فتح القائمة"
              >
                <Menu className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* =========================================================================
          03 — OFFCANVAS MOBILE MENU (Lendex offcanvas-mobile-menu-section)
          Width: 300px (sm: 380px), Background: #2a2c39, Slide from right/left
          ========================================================================= */}
      {mobileMenuOpen && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-[9999] bg-black/60 backdrop-blur-xs flex justify-end animate-in fade-in duration-200"
          onClick={() => setMobileMenuOpen(false)}
        >
          <div
            className={cn(
              'offcanvas w-[300px] sm:w-[380px] h-full bg-[#2a2c39] text-white p-6 sm:p-8 flex flex-col justify-between overflow-y-auto shadow-2xl animate-in duration-300',
              isRtl ? 'slide-in-from-left' : 'slide-in-from-right'
            )}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Top section: Close button & Logo */}
            <div>
              <div className="offcanvas-header flex items-center justify-between pb-6 border-b border-white/10">
                <Link
                  href="/"
                  onClick={() => setMobileMenuOpen(false)}
                  className="inline-flex items-center gap-2.5 select-none"
                >
                  <div className="w-9 h-9 rounded-xl bg-white/10 border border-white/15 flex items-center justify-center text-white shrink-0">
                    <span className="font-editorial text-lg font-bold text-white">
                      {isRtl ? 'ق' : 'K'}
                    </span>
                  </div>
                  <div className="flex flex-col text-start justify-center leading-tight">
                    <span className="font-editorial text-lg font-bold tracking-tight text-white">
                      {name}
                      <span className="text-blue-400 font-sans ms-0.5">.</span>
                    </span>
                    <span className="text-[10px] font-mono text-[#858792]">
                      {isRtl ? 'مهندس برمجيات' : 'Software Eng'}
                    </span>
                  </div>
                </Link>

                <button
                  type="button"
                  onClick={() => setMobileMenuOpen(false)}
                  className="offcanvas-close w-10 h-10 rounded-full border border-white/15 hover:border-white/40 flex items-center justify-center text-white transition-all cursor-pointer"
                  aria-label="إغلاق القائمة"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Navigation Links */}
              <nav className="offcanvas-menu mt-6">
                <ul className="space-y-1 list-none p-0 m-0">
                  {PORTFOLIO_NAVIGATION_ITEMS.map((item) => {
                    const isActive =
                      item.href === '/'
                        ? pathname === '/'
                        : pathname === item.href || (item.href !== '/' && !item.href.startsWith('/#') && pathname.startsWith(`${item.href}/`));
                    const label = getLocalizedText(item.label, language);

                    return (
                      <li key={item.id} className="border-b border-white/5">
                        <Link
                          href={item.href}
                          onClick={() => setMobileMenuOpen(false)}
                          className={cn(
                            'block py-3.5 text-base font-semibold uppercase tracking-wider transition-colors',
                            isActive
                              ? 'text-white'
                              : 'text-[#858792] hover:text-white'
                          )}
                        >
                          {label}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </nav>

              {/* Action Button inside Drawer */}
              <div className="mt-8">
                <Link
                  href="/contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="btn btn-sm btn-outline-one flex items-center justify-center gap-2.5 w-full h-[56px] px-6 rounded-full border border-[#3b3d49] hover:border-white/40 bg-transparent hover:bg-[#2e303d] text-white text-base font-medium transition-all duration-300"
                >
                  <span>{isRtl ? 'تواصل معي' : "Let's Talk"}</span>
                  {isRtl ? (
                    <ChevronsLeft className="w-4 h-4" />
                  ) : (
                    <ChevronsRight className="w-4 h-4" />
                  )}
                </Link>
              </div>
            </div>

            {/* Bottom Section: Social Links */}
            <div className="mobile-contact-info pt-8 border-t border-white/10 text-center">
              <p className="text-xs text-[#858792] mb-3">
                {isRtl ? 'تابعني على الشبكات المهنية' : 'Connect with me'}
              </p>
              <div className="flex items-center justify-center gap-3">
                {INSTRUCTOR_PROFILE.socialLinks.map((s) => (
                  <a
                    key={s.platform}
                    href={s.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 rounded-full border border-white/10 hover:border-white/40 flex items-center justify-center text-[#858792] hover:text-white transition-all text-xs"
                    title={s.platform}
                  >
                    <span className="capitalize">{s.platform.slice(0, 2)}</span>
                  </a>
                ))}
              </div>
            </div>

          </div>
        </div>
      )}
    </>
  );
};
