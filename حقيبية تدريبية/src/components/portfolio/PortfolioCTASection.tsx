"use client";

import React from "react";
import Link from "next/link";
import { usePreferencesStore } from "@/store";
import { Button } from "@/components/ui";
import { Mail, ArrowLeft, ArrowRight } from "lucide-react";
import { Reveal } from "@/components/motion";

export const PortfolioCTASection: React.FC = () => {
  const { language } = usePreferencesStore();
  const isRtl = language === "ar";

  return (
    <section id="contact" className="py-10 sm:py-20 text-start">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal direction="up" delay={50}>
          <div className="relative overflow-hidden p-6 sm:p-12 rounded-2xl sm:rounded-3xl bg-[var(--color-surface)] border border-[var(--color-border)] shadow-xs space-y-5 sm:space-y-6">
            {/* Subtle background gradient glow */}
            <div
              aria-hidden="true"
              className="absolute -top-24 -end-24 w-72 h-72 rounded-full bg-[var(--color-secondary)]/5 blur-3xl pointer-events-none"
            />

            <div className="relative space-y-2 z-10">
              <span className="text-xs font-mono font-bold text-[var(--color-secondary)] uppercase tracking-wider">
                {isRtl ? "تواصل معي" : "Get in Touch"}
              </span>
              <h2 className="text-h1 font-extrabold text-[var(--color-text)] tracking-tight rtl:tracking-normal">
                {isRtl
                  ? "لديك مشروع، فرصة عمل، أو ترغب في استشارة تقنية؟"
                  : "Have a project, work inquiry, or simply want to connect?"}
              </h2>
              <p className="text-body text-[var(--color-text-muted)] font-normal leading-relaxed max-w-2xl">
                {isRtl
                  ? "متاح للعمل على مشاريع الويب، التعاون البرمجي، والاستشارات التقنية والتدريب. لا تتردد في مراسلتي وسأكون سعيداً بالتواصل."
                  : "Have a project, work inquiry, or simply want to connect? Feel free to reach out. Open for web engineering engagements, architectural consultations, and technical training."}
              </p>
            </div>

            <div className="relative z-10 pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
              <Link href="/contact">
                <Button
                  size="lg"
                  variant="primary"
                  className="w-full sm:w-auto font-bold tracking-tight shadow-2xs group"
                  leftIcon={<Mail className="w-4 h-4 text-white" />}
                  rightIcon={
                    isRtl ? (
                      <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-0.5" />
                    ) : (
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                    )
                  }
                >
                  <span>{isRtl ? "تواصل معي" : "Contact Me"}</span>
                </Button>
              </Link>

              <Link href="/projects">
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full sm:w-auto font-semibold hover:border-[var(--color-secondary)]/60"
                >
                  {isRtl ? "عرض المشاريع" : "View Projects"}
                </Button>
              </Link>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};
