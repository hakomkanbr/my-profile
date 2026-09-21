'use client';

import React from 'react';
import Link from 'next/link';
import {
  TrainerShell,
  Card,
  Badge,
  Button,
} from '@/components';
import { getTotalStats } from '@/content';
import { usePreferencesStore } from '@/store';
import { MonitorPlay, Layers, UserCheck, ArrowLeft, ArrowRight } from 'lucide-react';


export default function TrainerCockpitPage() {
  const { language } = usePreferencesStore();
  const isRtl = language === 'ar';
  const totalStats = getTotalStats();

  return (
    <TrainerShell headerTitle="غرفة قيادة المدرب">
      <div className="space-y-8 text-start">
        {/* Top Banner */}
        <div className="p-8 rounded-3xl bg-[var(--color-surface)] border-2 border-[var(--color-primary)]/20 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-start">
            <div className="flex items-center gap-2 justify-center md:justify-start">
              <Badge variant="primary" size="md">
                INSTRUCTOR COCKPIT
              </Badge>
              <span className="text-xs font-mono text-[var(--color-secondary)]">
                WEB CREATOR AI
              </span>
            </div>
            <h1 className="text-display sm:text-h1 font-extrabold text-[var(--color-text)]">
              {isRtl ? 'لوحة تحكم المدرب' : 'Trainer Cockpit'}
            </h1>
            <p className="text-body-sm text-[var(--color-text-muted)] max-w-xl">
              {isRtl
                ? 'إدارة جلسات التدريب، إطلاق العرض التقديمي المباشر، وتتبع جهوزية الوحدات والدروس التعليمية.'
                : 'Manage classroom sessions, launch fullscreen presentations, and review curriculum assets.'}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 shrink-0">
            <Link href="/trainer/presentation">
              <Button
                size="lg"
                variant="primary"
                leftIcon={<MonitorPlay className="w-5 h-5" />}
              >
                {isRtl ? 'بدء وضع العرض المباشر' : 'Launch Presentation'}
              </Button>
            </Link>
          </div>
        </div>

        {/* Quick Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <Card className="p-5 space-y-1">
            <span className="text-caption text-[var(--color-text-subtle)] font-medium">
              {isRtl ? 'إجمالي المراحل' : 'Total Stages'}
            </span>
            <p className="text-h2 font-mono font-bold text-[var(--color-primary)]">
              {totalStats.totalStages}
            </p>
          </Card>
          <Card className="p-5 space-y-1">
            <span className="text-caption text-[var(--color-text-subtle)] font-medium">
              {isRtl ? 'الوحدات التعليمية' : 'Total Modules'}
            </span>
            <p className="text-h2 font-mono font-bold text-[var(--color-secondary)]">
              {totalStats.totalModules}
            </p>
          </Card>
          <Card className="p-5 space-y-1">
            <span className="text-caption text-[var(--color-text-subtle)] font-medium">
              {isRtl ? 'الدروس والشرائح' : 'Total Lessons'}
            </span>
            <p className="text-h2 font-mono font-bold text-[var(--color-accent-strong)]">
              {totalStats.totalLessons}
            </p>
          </Card>
          <Card className="p-5 space-y-1">
            <span className="text-caption text-[var(--color-text-subtle)] font-medium">
              {isRtl ? 'المشاريع التطبيقية' : 'Total Projects'}
            </span>
            <p className="text-h2 font-mono font-bold text-[var(--color-text)]">
              {totalStats.totalProjects}
            </p>
          </Card>
        </div>

        {/* Fast Action Panels */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="p-6 flex flex-col justify-between space-y-4">
            <div className="space-y-2">
              <div className="w-9 h-9 rounded-xl bg-[var(--color-primary-subtle)] text-[var(--color-primary)] flex items-center justify-center font-bold">
                <Layers className="w-4 h-4" />
              </div>
              <h3 className="text-h4 font-bold text-[var(--color-text)]">
                {isRtl ? 'استعراض المنهج والدروس' : 'Curriculum Blueprint'}
              </h3>
              <p className="text-body-sm text-[var(--color-text-muted)]">
                {isRtl
                  ? 'فهرس الوحدات العشر الكاملة ومحتوياتها المجهزة للشرح التفاعلي.'
                  : 'Review structured modules, topics, and slide materials ready for delivery.'}
              </p>
            </div>
            <Link href="/trainer/curriculum">
              <Button
                variant="outline"
                size="sm"
                className="w-full"
                rightIcon={isRtl ? <ArrowLeft className="w-4 h-4" /> : <ArrowRight className="w-4 h-4" />}
              >
                {isRtl ? 'إدارة المنهج' : 'Open Curriculum'}
              </Button>
            </Link>
          </Card>

          <Card className="p-6 flex flex-col justify-between space-y-4">
            <div className="space-y-2">
              <div className="w-9 h-9 rounded-xl bg-[var(--color-secondary)]/15 text-[var(--color-secondary)] flex items-center justify-center font-bold">
                <UserCheck className="w-4 h-4" />
              </div>
              <h3 className="text-h4 font-bold text-[var(--color-text)]">
                {isRtl ? 'متابعة المتدربين' : 'Learners Progress'}
              </h3>
              <p className="text-body-sm text-[var(--color-text-muted)]">
                {isRtl
                  ? 'إشراف على تقدم الطلاب ومستويات إنجازهم في المراحل السبع.'
                  : 'Monitor cohort engagement and individual milestone completions.'}
              </p>
            </div>
            <Link href="/trainer/learners">
              <Button
                variant="outline"
                size="sm"
                className="w-full"
                rightIcon={isRtl ? <ArrowLeft className="w-4 h-4" /> : <ArrowRight className="w-4 h-4" />}
              >
                {isRtl ? 'قائمة المتدربين' : 'Open Learners'}
              </Button>
            </Link>
          </Card>

          <Card className="p-6 flex flex-col justify-between space-y-4">
            <div className="space-y-2">
              <div className="w-9 h-9 rounded-xl bg-[var(--color-primary-subtle)] text-[var(--color-primary)] flex items-center justify-center font-bold">
                <MonitorPlay className="w-4 h-4" />
              </div>
              <h3 className="text-h4 font-bold text-[var(--color-text)]">
                {isRtl ? 'العرض التقديمي الحي' : 'Live Presentation Mode'}
              </h3>
              <p className="text-body-sm text-[var(--color-text-muted)]">
                {isRtl
                  ? 'بيئة عرض شاشة كاملة نظيفة مع ملاحظات المدرب والمؤقت للشرح المباشر.'
                  : 'Distraction-free fullscreen presenter canvas with speaker notes and controls.'}
              </p>
            </div>
            <Link href="/trainer/presentation">
              <Button
                variant="primary"
                size="sm"
                className="w-full"
                rightIcon={isRtl ? <ArrowLeft className="w-4 h-4" /> : <ArrowRight className="w-4 h-4" />}
              >
                {isRtl ? 'دخول وضع العرض' : 'Launch Mode'}
              </Button>
            </Link>
          </Card>
        </div>
      </div>
    </TrainerShell>
  );
}
