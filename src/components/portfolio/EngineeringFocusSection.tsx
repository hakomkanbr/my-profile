'use client';

import React from 'react';
import { usePreferencesStore } from '@/store';
import { Layers, Server, Code2, Network, HardDrive, Gauge, GraduationCap } from 'lucide-react';
import { Reveal } from '@/components/motion';

export const EngineeringFocusSection: React.FC = () => {
  const { language } = usePreferencesStore();
  const isRtl = language === 'ar';

  const focusDomains = [
    {
      id: 'software-eng',
      title: { ar: 'هندسة البرمجيات', en: 'Software Engineering' },
      subtitle: {
        ar: 'تصميم وبناء تطبيقات ويب وأنظمة برمجية قابلة للصيانة والتطوير.',
        en: 'Designing and building maintainable web applications and backend systems.',
      },
      skills: ['Modular Architecture', 'Clean Code', 'Maintainability', 'Code Review'],
      icon: <Layers className="w-5 h-5 text-[var(--color-secondary)]" />,
    },
    {
      id: 'backend-api',
      title: { ar: 'الأنظمة الخلفية وتطوير الـ APIs', en: 'Backend & API Development' },
      subtitle: {
        ar: 'بناء واجهات برمجية مهيكلة، منطق الأعمال، آليات المصادقة، والخدمات المعتمدة على البيانات.',
        en: 'Building structured APIs, business logic, authentication, authorization, and data-driven services.',
      },
      skills: ['ASP.NET Core', 'REST APIs', 'PostgreSQL', 'Auth & Security', 'Data Flows'],
      icon: <Server className="w-5 h-5 text-[var(--color-secondary)]" />,
    },
    {
      id: 'frontend',
      title: { ar: 'هندسة الواجهات الأمامية', en: 'Frontend Engineering' },
      subtitle: {
        ar: 'تطوير واجهات متجاوبة وقابلة للصيانة باستخدام أحدث تقنيات الويب.',
        en: 'Developing responsive and maintainable interfaces using modern frontend technologies.',
      },
      skills: ['React.js', 'Next.js App Router', 'TypeScript', 'Tailwind CSS', 'RTL/LTR'],
      icon: <Code2 className="w-5 h-5 text-[var(--color-secondary)]" />,
    },
    {
      id: 'system-design',
      title: { ar: 'تصميم ومعمارية النظم', en: 'System Design' },
      subtitle: {
        ar: 'تصميم معمارية التطبيقات، حدود الخدمات، قواعد البيانات، والواجهات البرمجية للمدى الطويل.',
        en: 'Designing application architecture, service boundaries, databases, APIs, and infrastructure with long-term maintainability in mind.',
      },
      skills: ['Service Boundaries', 'Data Modeling', 'Decoupled Systems', 'Architecture Planning'],
      icon: <Network className="w-5 h-5 text-[var(--color-secondary)]" />,
    },
    {
      id: 'infrastructure',
      title: { ar: 'الخوادم والبنية التحتية', en: 'Server & Infrastructure' },
      subtitle: {
        ar: 'إدارة خوادم لينكس، بيئات دوكر، قواعد البيانات، النطاقات، والبنية التحتية للإنتاج.',
        en: 'Managing Linux servers, deployments, Docker-based environments, databases, domains, networking, and production infrastructure.',
      },
      skills: ['Linux (Ubuntu/Debian)', 'Docker', 'Nginx', 'SSL & DNS', 'Deployments'],
      icon: <HardDrive className="w-5 h-5 text-[var(--color-secondary)]" />,
    },
    {
      id: 'performance',
      title: { ar: 'الأداء وموثوقية التشغيل', en: 'Performance & Reliability' },
      subtitle: {
        ar: 'تحسين سرعة التطبيقات، موثوقية النشر، كفاءة استعلامات البيانات، واستقرار الأنظمة.',
        en: 'Improving application performance, deployment reliability, database performance, and system stability.',
      },
      skills: ['Core Web Vitals', 'Load Optimization', 'System Stability', 'Technical SEO'],
      icon: <Gauge className="w-5 h-5 text-[var(--color-secondary)]" />,
    },
    {
      id: 'mentoring',
      title: { ar: 'التوجيه والتدريب التقني', en: 'Technical Mentoring' },
      subtitle: {
        ar: 'مساعدة المطورين على استيعاب المفاهيم الهندسية العملية والمعمارية وسير العمل الاحترافي.',
        en: 'Helping developers understand practical software engineering concepts, architecture, APIs, and development workflows.',
      },
      skills: ['Engineering Mindset', 'Curriculum Design', 'Applied AI Tooling', 'Workshops'],
      icon: <GraduationCap className="w-5 h-5 text-[var(--color-secondary)]" />,
    },
  ];

  const engineeringPrinciples = [
    {
      number: '01',
      title: { ar: 'فهم المشكلة قبل البدء', en: 'Understand Before Building' },
      desc: {
        ar: 'فهم المشكلة واحتياجات النظام بدقة قبل اختيار تفاصيل التنفيذ أو التقنيات.',
        en: 'Understand the business problem and system requirements before choosing implementation details.',
      },
    },
    {
      number: '02',
      title: { ar: 'البساطة وقابلية الصيانة', en: 'Simple & Maintainable' },
      desc: {
        ar: 'تفضيل المعمارية الواضحة والكود النظيف القابل للصيانة على التعقيد غير المبرر.',
        en: 'Prefer clear architecture and maintainable code over unnecessary complexity.',
      },
    },
    {
      number: '03',
      title: { ar: 'التفكير الشامل للمنظومة', en: 'System Thinking' },
      desc: {
        ar: 'النظر إلى الكود وقواعد البيانات والـ APIs والبنية التحتية والأمان كأجزاء من منظومة واحدة.',
        en: 'Consider application code, databases, APIs, infrastructure, deployment, security, and performance as parts of one system.',
      },
    },
    {
      number: '04',
      title: { ar: 'الهندسة العملية', en: 'Practical Engineering' },
      desc: {
        ar: 'اختيار الحلول المناسبة للمتطلبات الواقعية بدلاً من اتباع التوجهات والتريندات بلا حاجة.',
        en: 'Choose solutions that are appropriate for the actual requirements rather than following trends blindly.',
      },
    },
    {
      number: '05',
      title: { ar: 'التعلم المستمر', en: 'Continuous Learning' },
      desc: {
        ar: 'الاستمرار في التعلم من خلال المشاريع الواقعية والتجربة العملية وحل المشكلات.',
        en: 'Keep learning through real projects, experimentation, and practical problem solving.',
      },
    },
  ];

  return (
    <section className="py-10 sm:py-20 border-b border-[var(--color-border)] text-start">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 sm:space-y-12">
        {/* Section Header */}
        <Reveal direction="up" distance={16}>
          <div className="space-y-2">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-[var(--color-secondary)]">
              {isRtl ? 'مجالات العمل' : 'Focus'}
            </span>
            <h2 className="text-h1 font-extrabold text-[var(--color-text)]">
              {isRtl ? 'مجالات التركيز الهندسي' : 'Engineering Focus'}
            </h2>
            <p className="text-body text-[var(--color-text-muted)] max-w-2xl font-normal leading-relaxed">
              {isRtl
                ? 'التقنيات والمجالات التي أعمل بها وأبني من خلالها أنظمة ويب حديثة.'
                : 'Core technical domains and engineering competencies applied across production systems.'}
            </p>
          </div>
        </Reveal>

        {/* Focus Domains Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {focusDomains.map((domain, idx) => (
            <Reveal key={domain.id} direction="up" delayMs={idx * 70} distance={18}>
              <div className="h-full p-5 sm:p-6 rounded-2xl bg-[var(--color-surface)] border border-[var(--color-border)] shadow-2xs flex flex-col justify-between space-y-4 hover:border-[var(--color-secondary)]/50 hover:-translate-y-1 transition-all duration-300">
                <div className="space-y-3">
                  <div className="w-10 h-10 rounded-xl bg-[var(--color-surface-sunken)] border border-[var(--color-border-subtle)] flex items-center justify-center">
                    {domain.icon}
                  </div>
                  <h3 className="text-h4 font-bold text-[var(--color-text)]">
                    {isRtl ? domain.title.ar : domain.title.en}
                  </h3>
                  <p className="text-body-sm text-[var(--color-text-muted)] leading-relaxed font-normal">
                    {isRtl ? domain.subtitle.ar : domain.subtitle.en}
                  </p>
                </div>

                <div className="flex flex-wrap gap-1.5 pt-2 border-t border-[var(--color-border-subtle)]">
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

        {/* Engineering Approach Sub-Section (Rule 12) */}
        <div className="pt-8 space-y-6">
          <Reveal direction="up" distance={14}>
            <div className="space-y-1">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-[var(--color-text-subtle)]">
                {isRtl ? 'منهجية التفكير' : 'Methodology'}
              </span>
              <h3 className="text-h2 font-bold text-[var(--color-text)]">
                {isRtl ? 'النهج الهندسي في العمل (Engineering Approach)' : 'Engineering Approach'}
              </h3>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
            {engineeringPrinciples.map((p, idx) => (
              <Reveal key={p.number} direction="up" delayMs={idx * 60} distance={14}>
                <div className="h-full p-5 rounded-xl bg-[var(--color-surface)] border border-[var(--color-border)] space-y-2.5 shadow-2xs hover:border-[var(--color-border-strong)] transition-colors">
                  <span className="font-mono text-xs font-bold text-[var(--color-secondary)]">
                    {p.number}
                  </span>
                  <h4 className="text-sm font-bold text-[var(--color-text)]">
                    {isRtl ? p.title.ar : p.title.en}
                  </h4>
                  <p className="text-xs text-[var(--color-text-muted)] leading-relaxed font-normal">
                    {isRtl ? p.desc.ar : p.desc.en}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
