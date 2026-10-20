"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePreferencesStore } from "@/store";
import { INSTRUCTOR_PROFILE } from "@/content/instructor";
import { getLocalizedText } from "@/lib/utils";

/* =========================================================================
   LENDEX AUTHENTIC ORBITAL ICONS (Facebook, Dribbble, Behance, LinkedIn)
   ========================================================================= */

const GithubIcon: React.FC<{ className?: string }> = ({
  className = "w-5 h-5 sm:w-6 sm:h-6",
}) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
  </svg>
);

const GitlabIcon: React.FC<{ className?: string }> = ({
  className = "w-5 h-5 sm:w-6 sm:h-6",
}) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M22.65 14.39L12 22.13 1.35 14.39a.84.84 0 0 1-.3-.94l1.22-3.78 2.44-7.51A.42.42 0 0 1 4.82 2a.43.43 0 0 1 .58 0 .42.42 0 0 1 .11.18l2.44 7.49h8.1l2.44-7.49a.42.42 0 0 1 .11-.18.43.43 0 0 1 .58 0 .42.42 0 0 1 .11.16l2.44 7.51 1.22 3.78a.84.84 0 0 1-.3.94z" />
  </svg>
);

const InstagramIcon: React.FC<{ className?: string }> = ({
  className = "w-5 h-5 sm:w-6 sm:h-6",
}) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
  </svg>
);

const LinkedinIcon: React.FC<{ className?: string }> = ({
  className = "w-5 h-5 sm:w-6 sm:h-6",
}) => (
  <svg
    className={className}
    fill="currentColor"
    viewBox="0 0 24 24"
    aria-hidden="true"
  >
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.45a1.6 1.6 0 0 0-1.6 1.6 1.6 1.6 0 0 0 1.6 1.6 1.6 1.6 0 0 0 1.6-1.6 1.6 1.6 0 0 0-1.6-1.6z" />
  </svg>
);

export const PortfolioHeroSection: React.FC = () => {
  const { language } = usePreferencesStore();
  const isRtl = language === "ar";

  // Desktop subtle parallax tracking
  const [mouseOffset, setMouseOffset] = useState({ x: 0, y: 0 });
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const checkDesktop = () => {
      const isFinePointer = window.matchMedia("(pointer: fine)").matches;
      const isWideScreen = window.innerWidth >= 1024;
      const prefersReducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;
      setIsDesktop(isFinePointer && isWideScreen && !prefersReducedMotion);
    };

    checkDesktop();
    window.addEventListener("resize", checkDesktop);

    const handleMouseMove = (e: MouseEvent) => {
      if (!isDesktop) return;
      const { innerWidth, innerHeight } = window;
      const x = (e.clientX / innerWidth - 0.5) * 8;
      const y = (e.clientY / innerHeight - 0.5) * 8;
      setMouseOffset({ x, y });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("resize", checkDesktop);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [isDesktop]);

  // =========================================================================
  // SEMICIRCLE OUTSIDE COORDINATES (Radius = 48.00%)
  // Placed on the outer side (away from text column) along a vertical semicircle
  // 100% Guaranteed to be dead-centered on the white semicircle arc!
  // =========================================================================
  const orbitalSocials = [
    {
      id: "github",
      label: "GitHub",
      url:
        INSTRUCTOR_PROFILE.socialLinks.find((s) => s.platform === "github")
          ?.url || "https://github.com/hakomkanbr",
      icon: <GithubIcon />,
      // θ = +48° (Upper outer curve)
      x: isRtl ? 17.9 : 82.1,
      y: 14.3,
    },
    {
      id: "linkedin",
      label: "LinkedIn",
      url:
        INSTRUCTOR_PROFILE.socialLinks.find((s) => s.platform === "linkedin")
          ?.url || "https://tr.linkedin.com/in/abdulhekim-kanbr-872175195",
      icon: <LinkedinIcon />,
      // θ = +16° (Upper-mid outer curve)
      x: isRtl ? 3.9 : 96.1,
      y: 36.8,
    },
    {
      id: "gitlab",
      label: "GitLab",
      url:
        INSTRUCTOR_PROFILE.socialLinks.find((s) => s.platform === "gitlab")
          ?.url || "https://gitlab.com/abdulhekimkanbr",
      icon: <GitlabIcon />,
      // θ = -16° (Lower-mid outer curve)
      x: isRtl ? 3.9 : 96.1,
      y: 63.2,
    },
    {
      id: "instagram",
      label: "Instagram",
      url:
        INSTRUCTOR_PROFILE.socialLinks.find((s) => s.platform === "instagram")
          ?.url || "https://instagram.com/ht_r6k",
      icon: <InstagramIcon />,
      // θ = -48° (Lower outer curve)
      x: isRtl ? 17.9 : 82.1,
      y: 85.7,
    },
  ];

  return (
    <section className="relative w-full overflow-hidden bg-[#252734] text-white border-b border-white/10 text-start min-h-[880px] lg:min-h-[940px] xl:min-h-[1000px] 2xl:min-h-[1060px] flex flex-col justify-end">
      {/* ================================================================= */}
      {/* 1. TOP-LEFT CONCENTRIC SHAPES (.hero-top-shape from Lendex)       */}
      {/* ================================================================= */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-28 -start-28 sm:-top-36 sm:-start-36 lg:-top-44 lg:-start-44 z-0 opacity-30 select-none"
      >
        <div className="relative w-[440px] h-[440px] sm:w-[560px] sm:h-[560px] lg:w-[700px] lg:h-[700px]">
          <span className="absolute inset-0 rounded-full border border-white/10" />
          <span className="absolute inset-14 sm:inset-16 rounded-full border border-white/10" />
          <span className="absolute inset-28 sm:inset-32 rounded-full border border-white/10" />
        </div>
      </div>

      {/* Atmospheric Soft Light glow behind hero */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/4 start-1/4 w-[550px] h-[550px] bg-slate-700/10 blur-[150px] rounded-full"
      />

      {/* ================================================================= */}
      {/* HERO WRAPPER CONTAINER: Sized to eliminate upper empty gap        */}
      {/* ================================================================= */}
      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex-1 flex flex-col justify-end z-10 pt-16 sm:pt-20 lg:pt-20 pb-0">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 w-full min-h-[inherit]">
          {/* ============================================================= */}
          {/* LEFT COLUMN: Dignified, Harmonious Editorial Typography       */}
          {/* ============================================================= */}
          <div className="lg:col-span-6 xl:col-span-6 flex flex-col justify-center pt-10 sm:pt-12 lg:pt-14 sm:pb-16 lg:pb-24 xl:pb-28 z-20">
            {/* 1. "Hello! I’m" / "مرحباً! أنا" */}
            <span className="text-base sm:text-lg font-mono font-medium text-slate-400 mb-2">
              {isRtl ? "مرحباً! أنا" : "Hello! I’m"}
            </span>

            {/* 2. Display Name */}
            <div className="relative inline-block mb-4 sm:mb-5">
              <h1 className="font-editorial text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-[1.08]">
                {isRtl ? "عبد الحكيم قنبر" : "Abdulhakim Kanbr"}
              </h1>

              {/* Signature Hand-drawn Wavy Squiggle Underline */}
              <div className="mt-2 text-[#858792]" aria-hidden="true">
                <svg
                  className="w-36 sm:w-44 lg:w-52 h-3 sm:h-4 stroke-current"
                  viewBox="0 0 180 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M 3 9 C 15 2, 27 16, 39 9 C 51 2, 63 16, 75 9 C 87 2, 99 16, 111 9 C 123 2, 135 16, 147 9 C 159 2, 171 16, 177 9"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>

            {/* 3. Main Headline (Human, Grounded, Problem-Focused) */}
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight leading-snug mb-5 max-w-xl">
              {isRtl
                ? "أعمل على تصميم وبناء تطبيقات ويب وأنظمة برمجية متينة وقابلة للتوسع."
                : "I design and build resilient, scalable web applications and software systems."}
            </h2>

            {/* 4. Short Description Subtitle */}
            <p className="text-base sm:text-lg text-[#858792] font-normal leading-relaxed max-w-xl mb-8 sm:mb-9">
              {isRtl
                ? "أنا عبد الحكيم قنبر، مهندس برمجيات ومطور ويب، لدي أكثر من 8 سنوات من الخبرة العملية في تطوير البرمجيات وتصميم الأنظمة. أشارك هنا مشاريعي، وما أتعلمه من العمل الهندسي، والأفكار التي أجدها مفيدة للمطورين وأصحاب المنتجات التقنية."
                : "I'm Abdulhakim Kanbr, a software engineer and web developer with over 8 years of practical experience in software development and system design. Here I share my projects, engineering learnings, and ideas useful for developers and technical product owners."}
            </p>

            {/* 5. Primary Action Buttons */}
            <div className="flex flex-wrap items-center gap-3.5">
              <Link
                href="/projects"
                className="inline-flex items-center justify-center h-12 sm:h-13 px-7 sm:px-8 rounded-full bg-white text-[#252734] hover:bg-slate-200 font-bold text-sm sm:text-base transition-all duration-300 shadow-xl"
              >
                <span>{isRtl ? "استكشف مشاريعي" : "Explore My Projects"}</span>
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 h-12 sm:h-13 px-7 sm:px-8 rounded-full border border-[#3b3d49] hover:border-white hover:bg-[#2e303d] text-white font-medium text-sm sm:text-base transition-all duration-300 shadow-xl group"
              >
                <span>{isRtl ? "تواصل معي بشأن مشروع" : "Let's Discuss a Project"}</span>
              </Link>
            </div>
          </div>

          {/* ============================================================= */}
          {/* RIGHT COLUMN: VERY LARGE PROMINENT PORTRAIT & PERFECT ORBIT   */}
          {/* ============================================================= */}
          <div className="lg:col-span-6 xl:col-span-6 flex items-end justify-center lg:justify-end relative w-full h-full pb-0 z-10 select-none">
            <div
              className="relative w-full max-w-[620px] sm:max-w-[700px] lg:max-w-[800px] xl:max-w-[880px] 2xl:max-w-[960px] flex items-end justify-center lg:justify-end"
              style={{
                transform: isDesktop
                  ? `translate3d(${mouseOffset.x * 0.3}px, ${mouseOffset.y * 0.15}px, 0)`
                  : undefined,
                transition: "transform 350ms ease-out",
              }}
            >
              {/* ========================================================= */}
              {/* SEMICIRCLE ARC SYSTEM: STATIONARY & 100% ON OUTER SIDE    */}
              {/* - Clean semicircle arc on the side away from text         */}
              {/* - All 4 social badges locked directly on the white line   */}
              {/* - No rotation (completely stationary & stable)            */}
              {/* ========================================================= */}
              <div
                aria-hidden="true"
                style={{ top: "51%" }}
                className={`absolute top-[48%] -translate-y-1/2 w-[540px] h-[540px] sm:w-[640px] sm:h-[640px] lg:w-[740px] lg:h-[740px] xl:w-[820px] xl:h-[820px] pointer-events-none z-0 flex items-center justify-center ${
                  isRtl
                    ? "left-[-184px] -translate-x-1/2 lg:translate-x-0"
                    : "right-[-172px] -translate-x-1/2 lg:translate-x-0"
                }`}
              >
                {/* SVG Semicircle Arc */}
                <svg
                  className="absolute inset-0 w-full h-full pointer-events-none overflow-visible"
                  viewBox="0 0 100 100"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {/* Subtle Inner Faint Dashed Echo Semicircle Arc (R = 42) */}
                  <path
                    d={
                      isRtl
                        ? "M 50,8 A 42,42 0 0,0 50,92"
                        : "M 50,8 A 42,42 0 0,1 50,92"
                    }
                    stroke="rgba(255,255,255,0.08)"
                    strokeWidth="0.8"
                    strokeDasharray="2 3"
                    strokeLinecap="round"
                  />

                  {/* Main Crisp White Semicircle Arc (R = 48) */}
                  <path
                    d={
                      isRtl
                        ? "M 50,2 A 48,48 0 0,0 50,98"
                        : "M 50,2 A 48,48 0 0,1 50,98"
                    }
                    stroke="rgba(255,255,255,0.35)"
                    strokeWidth="1.3"
                    strokeLinecap="round"
                    className="drop-shadow-[0_0_12px_rgba(255,255,255,0.25)]"
                  />
                </svg>

                {/* 4 Stationary Social Link Badges: Centered in the middle of the semicircle line */}
                {orbitalSocials.map((social) => (
                  <div
                    key={social.id}
                    style={{ left: `${social.x}%`, top: `${social.y}%` }}
                    className="absolute -translate-x-1/2 -translate-y-1/2 z-20 pointer-events-auto"
                  >
                    <a
                      href={social.url}
                      target={
                        social.url.startsWith("http") ? "_blank" : undefined
                      }
                      rel={
                        social.url.startsWith("http")
                          ? "noopener noreferrer"
                          : undefined
                      }
                      className="relative w-13 h-13 sm:w-15 sm:h-15 lg:w-16 lg:h-16 rounded-full bg-[#252734] border border-white/40 hover:border-white hover:bg-white text-white hover:text-[#252734] flex items-center justify-center transition-all duration-300 shadow-2xl hover:scale-115 hover:shadow-[0_0_25px_rgba(255,255,255,0.5)] group cursor-pointer"
                      title={social.label}
                      aria-label={social.label}
                    >
                      {/* Subtle Dashed Satellite Ring */}
                      <span
                        aria-hidden="true"
                        className="absolute -inset-1 rounded-full border border-dashed border-white/20 pointer-events-none group-hover:border-white/60 transition-colors"
                      />
                      {/* Icon SVG */}
                      <span className="relative z-10 transition-transform duration-300">
                        {social.icon}
                      </span>
                    </a>
                  </div>
                ))}
              </div>

              {/* ========================================================= */}
              {/* LARGE & PROMINENT STANDING PORTRAIT                       */}
              {/* Head reaches high near navbar to eliminate empty space    */}
              {/* ========================================================= */}
              <div className="relative z-10 flex items-end justify-center lg:justify-end w-full">
                <picture className="flex items-end justify-center lg:justify-end w-full">
                  <source
                    srcSet="/676e2056-0c77-43f9-9720-3935a726f0e6-removebg-preview.png"
                    type="image/png"
                  />
                  <source srcSet="/banner.png" type="image/png" />
                  <source srcSet="/banner.webp" type="image/webp" />
                  <img
                    src="/676e2056-0c77-43f9-9720-3935a726f0e6-removebg-preview.png"
                    alt={getLocalizedText(INSTRUCTOR_PROFILE.name, language)}
                    className="block w-auto h-[680px] sm:h-[780px] lg:h-[880px] xl:h-[960px] 2xl:h-[840px]  max-h-[54vh] lg:max-h-[98vh] object-contain object-bottom select-none drop-shadow-[0_30px_60px_rgba(0,0,0,0.85)] drop-shadow-[0_12px_24px_rgba(0,0,0,0.6)]"
                    loading="eager"
                    onError={(e) => {
                      const target = e.currentTarget;
                      if (!target.src.endsWith("/banner.png")) {
                        target.src = "/banner.png";
                      }
                    }}
                  />
                </picture>
              </div>

              {/* Baseline Floor Shadow */}
              <div
                aria-hidden="true"
                className="absolute bottom-0 inset-x-0 h-8 bg-gradient-to-t from-[#252734] to-transparent pointer-events-none z-20"
              />
            </div>
          </div>
        </div>
      </div>

    </section>
  );
};
