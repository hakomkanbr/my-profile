'use client';

import React from 'react';
import Link from 'next/link';
import {
  TrainerShell,
  PageHeader,
  Card,
  EmptyState,
  Button,
} from '@/components';
import { usePreferencesStore } from '@/store';
import { ArrowLeft, ArrowRight } from 'lucide-react';


export default function TrainerLearnersPage() {
  const { language } = usePreferencesStore();
  const isRtl = language === 'ar';

  return (
    <TrainerShell headerTitle="متابعة المتدربين">
      <div className="space-y-8 text-start">
        <PageHeader
          title={isRtl ? 'متابعة أداء وتفاعل المتدربين' : 'Learners Engagement'}
          subtitle={
            isRtl
              ? 'إحصائيات إنجاز الطلاب وملاحظات المتابعة الميدانية أثناء ورش العمل.'
              : 'Cohort progression metrics, workshop participation, and individual milestones.'
          }
          breadcrumbs={[
            { id: '1', label: isRtl ? 'لوحة المدرب' : 'Trainer Cockpit', href: '/trainer' },
            { id: '2', label: isRtl ? 'المتدربون' : 'Learners', isCurrent: true },
          ]}
        />

        <Card className="p-12">
          <EmptyState
            title={isRtl ? 'وضع المتابعة بدون اتصال (Offline-First)' : 'Offline-First Trainee Tracking'}
            description={
              isRtl
                ? 'يتم تخزين تقدم المتدربين حالياً محلياً على متصفح كل متدرب عبر نظام التخزين المحلي الآمن. سيتم إتاحة المزامنة المتقدمة وإدارة الأفواج في المراحل اللاحقة.'
                : 'Trainee progress is currently maintained offline-first via local storage adapters. Advanced multi-cohort synchronization will be introduced in future updates.'
            }
            action={
              <Link href="/trainer/presentation">
                <Button
                  variant="primary"
                  size="md"
                  rightIcon={isRtl ? <ArrowLeft className="w-4 h-4" /> : <ArrowRight className="w-4 h-4" />}
                >
                  {isRtl ? 'الانتقال إلى وضع العرض المباشر' : 'Launch Live Presentation'}
                </Button>
              </Link>
            }
          />
        </Card>
      </div>
    </TrainerShell>
  );
}
