"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePreferencesStore } from "@/store";
import { Reveal } from "@/components/motion";
import { Button } from "@/components/ui";
import { CheckSquare, FileCode, GraduationCap, ArrowLeft, ArrowRight, Mail, CheckCircle } from "lucide-react";

export const ResourcesTeaserSection: React.FC = () => {
  const { language } = usePreferencesStore();
  const isRtl = language === "ar";

  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email && email.includes("@")) {
      setSubscribed(true);
    }
  };

  const resourcePillars = [
    {
      id: "checklists",
      icon: <CheckSquare className="w-5 h-5 text-[var(--color-secondary)]" />,
      title: { ar: "قوائم الفحص الهندسية", en: "Engineering Checklists" },
      description: {
        ar: "قوائم عملية تغطي فحص الأداء، ومعايير إطلاق الويب، وأمان الـ APIs لضمان جاهزية الإنتاج.",
        en: "Actionable checklists covering Core Web Vitals, launch readiness, and API security.",
      },
      badge: { ar: "مجاني ومتاح", en: "Free & Open" },
      href: "/resources#launch-checklist",
    },
    {
      id: "templates",
      icon: <FileCode className="w-5 h-5 text-[var(--color-secondary)]" />,
      title: { ar: "قوالب التوثيق والمعمارية", en: "Architecture & ADR Templates" },
      description: {
        ar: "نماذج جاهزة لتوثيق القرارات المعمارية (ADR) وهيكلة كود المشاريع بطريقة معيارية قابلة للتوسع.",
        en: "Battle-tested templates for Architecture Decision Records (ADRs) and modular project scaffolds.",
      },
      badge: { ar: "قوالب توثيق", en: "Documentation" },
      href: "/resources#adr-template",
    },
    {
      id: "learning",
      icon: <GraduationCap className="w-5 h-5 text-[var(--color-secondary)]" />,
      title: { ar: "مسار WEB CREATOR AI", en: "WEB CREATOR AI Curriculum" },
      description: {
        ar: "مسار تدريبي منظم يغطي دورة حياة تطوير الويب كاملة من التصميم وحتى الإنتاج الحقيقي.",
        en: "A structured engineering curriculum covering the full web lifecycle from concept to production.",
      },
      badge: { ar: "مسار تعليمي", en: "Curriculum" },
      href: "/web-creator-ai",
    },
  ];

  return (
    <section className="py-12 sm:py-20 border-b border-[var(--color-border)] text-start">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 sm:space-y-12">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <Reveal direction="up" distance={16}>
            <div className="space-y-2">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-[var(--color-secondary)]">
                {isRtl ? "الموارد والمعرفة" : "Resources & Knowledge"}
              </span>
              <h2 className="text-h1 font-extrabold text-[var(--color-text)] tracking-tight rtl:tracking-normal">
                {isRtl ? "أدوات وقوائم فحص وموارد للمطورين" : "Tools, Checklists & Developer Resources"}
              </h2>
              <p className="text-body text-[var(--color-text-muted)] max-w-2xl font-normal leading-relaxed">
                {isRtl
                  ? "أشارك موارد عملية ونماذج كود وقوالب تساعد المطورين وأصحاب المنتجات على بناء برمجيات أفضل."
                  : "Practical checklists, architecture templates, and open tools to help developers and product owners build better software."}
              </p>
            </div>
          </Reveal>

          <Reveal direction="up" delayMs={100} distance={16}>
            <Link
              href="/resources"
              className="inline-flex items-center gap-2 text-sm font-bold text-[var(--color-secondary)] hover:text-[var(--color-primary)] transition-colors shrink-0"
            >
              <span>{isRtl ? "استكشف كل الموارد" : "View all resources"}</span>
              {isRtl ? <ArrowLeft className="w-4 h-4" /> : <ArrowRight className="w-4 h-4" />}
            </Link>
          </Reveal>
        </div>

        {/* 3 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {resourcePillars.map((item, idx) => (
            <Reveal key={item.id} direction="up" delayMs={100 + idx * 80} distance={18}>
              <Link
                href={item.href}
                className="group h-full p-6 sm:p-7 rounded-2xl bg-[var(--color-surface)] border border-[var(--color-border)] hover:border-[var(--color-secondary)]/60 flex flex-col justify-between space-y-5 hover:-translate-y-1 transition-all duration-300 shadow-2xs block"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="w-10 h-10 rounded-xl bg-[var(--color-surface-sunken)] border border-[var(--color-border-subtle)] flex items-center justify-center">
                      {item.icon}
                    </div>
                    <span className="text-[11px] font-mono font-semibold px-2.5 py-0.5 rounded-full bg-[var(--color-surface-sunken)] border border-[var(--color-border-subtle)] text-[var(--color-text-subtle)]">
                      {isRtl ? item.badge.ar : item.badge.en}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-[var(--color-text)] group-hover:text-[var(--color-secondary)] transition-colors">
                    {isRtl ? item.title.ar : item.title.en}
                  </h3>

                  <p className="text-body-sm text-[var(--color-text-muted)] font-normal leading-relaxed">
                    {isRtl ? item.description.ar : item.description.en}
                  </p>
                </div>

                <div className="pt-3 border-t border-[var(--color-border-subtle)] flex items-center gap-1.5 text-xs font-bold text-[var(--color-secondary)] group-hover:text-[var(--color-primary)] transition-colors">
                  <span>{isRtl ? "استكشف المحتوى" : "Explore Content"}</span>
                  {isRtl ? (
                    <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-1 transition-transform" />
                  ) : (
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  )}
                </div>
              </Link>
            </Reveal>
          ))}
        </div>

        {/* Calm Newsletter / Updates Opt-in */}
        <Reveal direction="up" delayMs={240} distance={16}>
          <div className="p-6 sm:p-8 rounded-2xl bg-[var(--color-surface-sunken)] border border-[var(--color-border)] flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="space-y-1 max-w-xl">
              <span className="text-xs font-mono font-bold text-[var(--color-secondary)] uppercase">
                {isRtl ? "النشرة البريدية الهندسية" : "Engineering Newsletter"}
              </span>
              <h3 className="text-h3 font-bold text-[var(--color-text)]">
                {isRtl ? "تصلك الموارد والمقالات الجديدة أولاً بأول" : "Get new resources & articles in your inbox"}
              </h3>
              <p className="text-body-sm text-[var(--color-text-muted)] font-normal leading-relaxed">
                {isRtl
                  ? "أشارك أفكاراً وتلخيصات وموارد جديدة فقط، بدون رسائل مزعجة أو ترويج فارغ. يمكنك إلغاء الاشتراك في أي وقت."
                  : "Occasional technical summaries, new checklists, and tools. Zero spam, unsubscribe anytime."}
              </p>
            </div>

            <div className="w-full md:w-auto shrink-0">
              {subscribed ? (
                <div className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-500/15 border border-emerald-500/30 text-emerald-600 dark:text-emerald-400 text-xs font-bold font-mono">
                  <CheckCircle className="w-4 h-4" />
                  <span>{isRtl ? "شكراً لك! تم تسجيل بريدك بنجاح." : "Thank you! You're subscribed."}</span>
                </div>
              ) : (
                <div className="space-y-2 w-full sm:w-auto">
                  <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-2.5 w-full sm:w-auto">
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder={isRtl ? "أدخل بريدك الإلكتروني..." : "Enter your email..."}
                      className="h-11 px-4 rounded-xl text-xs font-mono bg-[var(--color-surface)] border border-[var(--color-border)] text-[var(--color-text)] placeholder:text-[var(--color-text-subtle)] focus:outline-none focus:border-[var(--color-secondary)] transition-colors w-full sm:w-64"
                    />
                    <Button
                      type="submit"
                      variant="primary"
                      size="sm"
                      className="font-bold text-xs h-11 px-5 shadow-2xs whitespace-nowrap"
                      leftIcon={<Mail className="w-4 h-4" />}
                    >
                      <span>{isRtl ? "اشتراك تجريبي" : "Subscribe"}</span>
                    </Button>
                  </form>
                  <span className="text-[10px] font-mono text-[var(--color-text-subtle)] block text-start">
                    {isRtl
                      ? "* النموذج حالياً في طور المعاينة التجريبية؛ لا يتم تخزين البيانات خارجياً."
                      : "* Preview mode: Form is demonstration only; no external storage is connected."}
                  </span>
                </div>
              )}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};
