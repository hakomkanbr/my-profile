"use client";

import React from "react";
import { usePreferencesStore } from "@/store";
import { Server, Code2, Network, HardDrive } from "lucide-react";
import { Reveal } from "@/components/motion";

export const EngineeringFocusSection: React.FC = () => {
  const { language } = usePreferencesStore();
  const isRtl = language === "ar";

  const focusDomains = [
    {
      id: "web-apps",
      title: { ar: "تطبيقات الويب الحديثة", en: "Modern Web Applications" },
      subtitle: {
        ar: "تطوير واجهات متجاوبة وسريعة بالاعتماد على Next.js و React مع معمارية مكونات نظيفة وسهلة التوسع.",
        en: "Building fast, responsive web applications using Next.js and React with clean, modular component architecture.",
      },
      skills: ["Next.js App Router", "React", "TypeScript", "Tailwind CSS"],
      icon: <Code2 className="w-5 h-5 text-[var(--color-secondary)]" />,
    },
    {
      id: "backend-api",
      title: {
        ar: "الأنظمة الخلفية وتطوير الـ APIs",
        en: "Backend Systems & APIs",
      },
      subtitle: {
        ar: "تصميم واجهات برمجية مهيكلة، منطق أعمال متماسك، آليات مصادقة آمنة، واستعلامات قواعد بيانات محسنة.",
        en: "Designing structured APIs, business logic, secure authentication, and optimized database queries.",
      },
      skills: ["REST APIs", "ASP.NET Core", "PostgreSQL", "Auth & Security"],
      icon: <Server className="w-5 h-5 text-[var(--color-secondary)]" />,
    },
    {
      id: "system-design",
      title: { ar: "تصميم ومعمارية النظم", en: "System Architecture" },
      subtitle: {
        ar: "تحديد حدود الخدمات، نمذجة البيانات، وفصل المكونات بما يضمن استقرار المنظومة على المدى البعيد.",
        en: "Defining service boundaries, data modeling, and decoupling components to ensure long-term system stability.",
      },
      skills: ["Modular Design", "Data Modeling", "Clean Architecture", "Code Review"],
      icon: <Network className="w-5 h-5 text-[var(--color-secondary)]" />,
    },
    {
      id: "infrastructure",
      title: { ar: "الخوادم والبنية التحتية", en: "Servers & Infrastructure" },
      subtitle: {
        ar: "إدارة بيئات تشغيل Linux، حاويات Docker، ضبط النطاقات وشهادات الأمان، ومراقبة أداء التشغيل.",
        en: "Managing Linux server environments, Docker containers, domain and SSL configuration, and deployment reliability.",
      },
      skills: ["Linux", "Docker", "Nginx", "Deployments"],
      icon: <HardDrive className="w-5 h-5 text-[var(--color-secondary)]" />,
    },
  ];

  return (
    <section className="py-10 sm:py-20 border-b border-[var(--color-border)] text-start">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 sm:space-y-10">
        {/* Section Header */}
        <Reveal direction="up" distance={16}>
          <div className="space-y-2">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-[var(--color-secondary)]">
              {isRtl ? "مجالات العمل" : "Areas of Work"}
            </span>
            <h2 className="text-h1 font-extrabold text-[var(--color-text)] tracking-tight rtl:tracking-normal">
              {isRtl ? "مجالات التركيز الهندسي" : "Engineering Focus"}
            </h2>
            <p className="text-body text-[var(--color-text-muted)] max-w-2xl font-normal leading-relaxed">
              {isRtl
                ? "الخدمات والمجالات التقنية التي أساعد العملاء والفرق على بنائها وتطويرها."
                : "The core technical domains and systems I help clients and teams build and maintain."}
            </p>
          </div>
        </Reveal>

        {/* 4 Focused Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
          {focusDomains.map((domain, idx) => (
            <Reveal
              key={domain.id}
              direction="up"
              delayMs={idx * 70}
              distance={18}
            >
              <div className="h-full p-5 sm:p-7 rounded-2xl bg-[var(--color-surface)] border border-[var(--color-border)] shadow-2xs flex flex-col justify-between space-y-4 hover:border-[var(--color-secondary)]/50 hover:-translate-y-0.5 transition-all duration-300">
                <div className="space-y-3">
                  <div className="w-10 h-10 rounded-xl bg-[var(--color-surface-sunken)] border border-[var(--color-border-subtle)] flex items-center justify-center">
                    {domain.icon}
                  </div>
                  <h3 className="text-xl font-bold text-[var(--color-text)] tracking-tight rtl:tracking-normal">
                    {isRtl ? domain.title.ar : domain.title.en}
                  </h3>
                  <p className="text-body-sm text-[var(--color-text-muted)] leading-relaxed font-normal">
                    {isRtl ? domain.subtitle.ar : domain.subtitle.en}
                  </p>
                </div>

                <div className="flex flex-wrap gap-1.5 pt-3 border-t border-[var(--color-border-subtle)]">
                  {domain.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2.5 py-1 rounded-md text-[11px] font-mono font-medium bg-[var(--color-surface-sunken)] border border-[var(--color-border-subtle)] text-[var(--color-text-muted)]"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};
