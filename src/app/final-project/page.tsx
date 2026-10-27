'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  LearningShell,
  PageContainer,
  PageHeader,
  PageSection,
  Card,
  Badge,
  Button,
  WhatsAppActionFeedback,
} from '@/components';
import { usePreferencesStore } from '@/store';
import {
  getStudentName,
  saveStudentName,
  getStudentSubmissionForActivity,
  saveStudentSubmission,
} from '@/lib/student-storage';
import {
  buildProjectSubmissionMessage,
  isAnswerTooLongForWhatsApp,
  downloadTextFile,
  openWhatsAppChat,
} from '@/lib/whatsapp';
import {
  Award,
  CheckCircle2,
  Rocket,
  MessageCircle,
  Save,
  User,
  Globe,
  FolderGit2,
  ArrowLeft,
  ArrowRight,
} from 'lucide-react';

export default function FinalProjectPage() {
  const { language } = usePreferencesStore();
  const isRtl = language === 'ar';

  const existingSub =
    typeof window !== 'undefined'
      ? getStudentSubmissionForActivity('capstone-final-project')
      : null;

  const [studentName, setStudentName] = useState<string>(() =>
    typeof window !== 'undefined' ? getStudentName() : ''
  );
  const [liveUrl, setLiveUrl] = useState<string>(() => {
    if (!existingSub?.studentAnswer) return '';
    const match = existingSub.studentAnswer.match(/Live URL:\s*(.+)/i);
    return match ? match[1].trim() : '';
  });
  const [repoUrl, setRepoUrl] = useState<string>(() => {
    if (!existingSub?.studentAnswer) return '';
    const match = existingSub.studentAnswer.match(/GitHub URL:\s*(.+)/i);
    return match ? match[1].trim() : '';
  });
  const [projectSummary, setProjectSummary] = useState<string>(() => existingSub?.studentAnswer || '');
  const [savedNotice, setSavedNotice] = useState(false);
  const [whatsAppFeedback, setWhatsAppFeedback] = useState<{
    message: string;
    isLong: boolean;
    fileName?: string;
    fullAnswer?: string;
  } | null>(null);

  const capstoneCriteria = isRtl
    ? [
        'موقع ويب حي منشور على نطاق سحابي ومتاح للزوار.',
        'تصميم متجاوب بالكامل يعمل بسلاسة على الهواتف والحواسيب.',
        'صفحات واضحة تعرض القيمة، الأعمال أو الخدمات، ووسيلة تواصل فعّالة.',
        'تحقيق معايير الأداء الأساسية وتهيئة محركات البحث (SEO).',
        'كود منظم ومرفوع على مستودع GitHub يسهل تطويره مستقبلًا.',
      ]
    : [
        'Live website deployed on a cloud domain and accessible to visitors.',
        'Fully responsive design working smoothly across mobile and desktop.',
        'Clear pages showcasing value, projects/services, and an active contact method.',
        'Solid core web performance and basic SEO readiness.',
        'Clean code pushed to a GitHub repository for future iteration.',
      ];

  const handleNameChange = (val: string) => {
    setStudentName(val);
    saveStudentName(val);
  };

  const composeFullNotes = () => {
    const parts: string[] = [];
    if (liveUrl.trim()) parts.push(`Live URL: ${liveUrl.trim()}`);
    if (repoUrl.trim()) parts.push(`GitHub URL: ${repoUrl.trim()}`);
    if (projectSummary.trim()) parts.push(projectSummary.trim());
    return parts.join('\n\n');
  };

  const handleSaveLocal = () => {
    const combined = composeFullNotes();
    if (!combined) return;
    if (studentName.trim()) {
      saveStudentName(studentName.trim());
    }
    saveStudentSubmission('session-12', 'capstone-final-project', combined);
    setSavedNotice(true);
    setTimeout(() => setSavedNotice(false), 3000);
  };

  const handleSendWhatsApp = () => {
    const combined = composeFullNotes();
    if (!combined) return;

    const projectTitle = isRtl
      ? 'المشروع النهائي للتخرج — WEB CREATOR AI'
      : 'Final Graduation Project — WEB CREATOR AI';

    const isLong = isAnswerTooLongForWhatsApp(combined);
    const fileName = 'web-creator-ai-final-project.txt';

    if (studentName.trim()) {
      saveStudentName(studentName.trim());
    }
    saveStudentSubmission('session-12', 'capstone-final-project', combined, {
      markWhatsAppOpened: true,
    });

    if (isLong) {
      downloadTextFile(
        fileName,
        `${projectTitle}\nTrainee: ${studentName || 'N/A'}\nDate: ${new Date().toLocaleString()}\n\n${combined}`
      );
    }

    const message = buildProjectSubmissionMessage({
      studentName: studentName.trim() || undefined,
      projectTitle,
      deliverableTitle: isRtl ? 'تسليم المشروع النهائي الكامل' : 'Full Capstone Deliverable',
      notes: combined,
      isLongNotes: isLong,
      language,
    });

    setWhatsAppFeedback({
      message,
      isLong,
      fileName: isLong ? fileName : undefined,
      fullAnswer: combined,
    });

    openWhatsAppChat(message);
  };

  return (
    <LearningShell headerTitle={isRtl ? 'المشروع النهائي للتخرج' : 'Final Capstone Project'}>
      <PageContainer>
        <PageHeader
          title={isRtl ? 'المشروع النهائي للتخرج (Capstone Launch)' : 'Final Capstone Project Launch'}
          subtitle={
            isRtl
              ? 'ثمرة رحلتك في البرنامج: بناء موقعك الحقيقي، ونشره على الإنترنت، وتسليمه للمراجعة المباشرة عبر واتساب.'
              : 'The culmination of your learning journey: build your real website, deploy it online, and submit it for direct review via WhatsApp.'
          }
          badge={
            <Badge variant="primary">
              {isRtl ? 'مشروع التخرج التطبيقي' : 'Graduation Capstone'}
            </Badge>
          }
          breadcrumbs={[
            { id: '1', label: isRtl ? 'لوحة التدريب' : 'Dashboard', href: '/web-creator-ai' },
            { id: '2', label: isRtl ? 'المشاريع' : 'Projects', href: '/web-creator-ai/projects' },
            { id: '3', label: isRtl ? 'المشروع النهائي' : 'Final Project', isCurrent: true },
          ]}
        />

        <div className="space-y-8">
          <PageSection
            title={isRtl ? '1. معايير جاهزية المشروع النهائي' : '1. Final Project Readiness Criteria'}
            subtitle={
              isRtl
                ? 'تأكد من استيفاء هذه النقاط الأساسية قبل إرسال مشروعك للمراجعة.'
                : 'Ensure these core milestones are met before submitting your project for review.'
            }
          >
            <Card variant="featured" className="p-6 sm:p-8">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-[var(--color-primary-subtle)] text-[var(--color-primary)] flex items-center justify-center shrink-0">
                  <Award className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-h3 font-bold text-[var(--color-text)] mb-1">
                    {isRtl ? 'موقعك الحقيقي المنشور على الإنترنت' : 'Your Live Production Website'}
                  </h3>
                  <p className="text-body-sm text-[var(--color-text-muted)]">
                    {isRtl
                      ? 'الهدف من البرنامج ليس التوقف عند التمارين النظرية، بل الخروج بموقع حقيقي يعمل على الإنترنت ويعرض مشروعك أو خدماتك بوضوح.'
                      : 'The goal of this program is to launch a real, working website online that clearly presents your work or services.'}
                  </p>
                </div>
              </div>

              <div className="space-y-3 mb-6">
                {capstoneCriteria.map((criterion, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" />
                    <span className="text-body-sm text-[var(--color-text)]">{criterion}</span>
                  </div>
                ))}
              </div>

              <div className="pt-4 border-t border-[var(--color-border)] flex flex-wrap items-center justify-between gap-3">
                <span className="text-xs text-[var(--color-text-subtle)] font-medium">
                  {isRtl
                    ? 'هل تبحث عن خطوات بناء المشروع مرحلة بمرحلة؟'
                    : 'Looking for step-by-step project building stages?'}
                </span>
                <Link href="/web-creator-ai/projects">
                  <Button
                    variant="outline"
                    size="sm"
                    rightIcon={
                      isRtl ? <ArrowLeft className="w-4 h-4" /> : <ArrowRight className="w-4 h-4" />
                    }
                  >
                    {isRtl ? 'انتقل إلى ورشة المشاريع التطبيقية' : 'Open Applied Projects Workshop'}
                  </Button>
                </Link>
              </div>
            </Card>
          </PageSection>

          <PageSection
            title={isRtl ? '2. تسليم المشروع النهائي للمراجعة' : '2. Submit Your Final Project for Review'}
            subtitle={
              isRtl
                ? 'أدخل رابط موقعك المنشور وملخص ما أنجزته، ثم أرسله مباشرة عبر واتساب للحصول على مراجعة عملية.'
                : 'Enter your live website link and a summary of what you built, then send it via WhatsApp for practical feedback.'
            }
          >
            <Card variant="default" className="p-6 sm:p-8 space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="text-xs font-bold text-[var(--color-text)] flex items-center gap-1.5 mb-2">
                    <User className="w-3.5 h-3.5 text-[var(--color-primary)]" />
                    <span>{isRtl ? 'اسم المتدرب' : 'Trainee Name'}</span>
                  </label>
                  <input
                    type="text"
                    value={studentName}
                    onChange={(e) => handleNameChange(e.target.value)}
                    placeholder={isRtl ? 'اسمك الكريم...' : 'Your name...'}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[var(--color-surface-sunken)] border border-[var(--color-border)] text-sm text-[var(--color-text)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]"
                  />
                </div>

                <div>
                  <label className="text-xs font-bold text-[var(--color-text)] flex items-center gap-1.5 mb-2">
                    <Globe className="w-3.5 h-3.5 text-emerald-500" />
                    <span>{isRtl ? 'رابط الموقع المنشور (Vercel / Domain)' : 'Live Website URL'}</span>
                  </label>
                  <input
                    type="url"
                    dir="ltr"
                    value={liveUrl}
                    onChange={(e) => setLiveUrl(e.target.value)}
                    placeholder="https://your-project.vercel.app"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[var(--color-surface-sunken)] border border-[var(--color-border)] text-sm text-[var(--color-text)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]"
                  />
                </div>

                <div>
                  <label className="text-xs font-bold text-[var(--color-text)] flex items-center gap-1.5 mb-2">
                    <FolderGit2 className="w-3.5 h-3.5 text-[var(--color-secondary)]" />
                    <span>{isRtl ? 'رابط مستودع الكود (GitHub)' : 'GitHub Repository URL'}</span>
                  </label>
                  <input
                    type="url"
                    dir="ltr"
                    value={repoUrl}
                    onChange={(e) => setRepoUrl(e.target.value)}
                    placeholder="https://github.com/username/repo"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[var(--color-surface-sunken)] border border-[var(--color-border)] text-sm text-[var(--color-text)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]"
                  />
                </div>
              </div>

              <div>
                <label className="text-xs font-bold text-[var(--color-text)] block mb-2">
                  {isRtl
                    ? 'وصف المشروع وأهم الميزات التي قمت ببنائها:'
                    : 'Project Description & Key Features Built:'}
                </label>
                <textarea
                  rows={5}
                  value={projectSummary}
                  onChange={(e) => setProjectSummary(e.target.value)}
                  placeholder={
                    isRtl
                      ? 'اكتب فكرة المشروع، والجمهور المستهدف، وأهم الصفحات أو الميزات التي نفذتها...'
                      : 'Describe your project idea, target audience, and the main pages or features you built...'
                  }
                  className="w-full p-4 rounded-xl bg-[var(--color-surface-sunken)] border border-[var(--color-border)] text-sm text-[var(--color-text)] leading-relaxed focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]"
                />
              </div>

              <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
                <div className="flex flex-wrap items-center gap-3">
                  <Button
                    variant="primary"
                    size="md"
                    disabled={!composeFullNotes()}
                    onClick={handleSendWhatsApp}
                    leftIcon={<MessageCircle className="w-4 h-4" />}
                    className="bg-emerald-600 hover:bg-emerald-500 text-white"
                  >
                    {isRtl
                      ? 'إرسال المشروع النهائي عبر واتساب'
                      : 'Send Final Project via WhatsApp'}
                  </Button>

                  <Button
                    variant="outline"
                    size="md"
                    disabled={!composeFullNotes()}
                    onClick={handleSaveLocal}
                    leftIcon={<Save className="w-4 h-4" />}
                  >
                    {isRtl ? 'حفظ في جهازي فقط' : 'Save on My Device Only'}
                  </Button>
                </div>

                {savedNotice && (
                  <span className="text-xs font-bold text-emerald-500 flex items-center gap-1.5">
                    <Rocket className="w-4 h-4" />
                    {isRtl
                      ? 'تم حفظ بيانات مشروعك النهائي في متصفحك بنجاح!'
                      : 'Final project saved locally in your browser!'}
                  </span>
                )}
              </div>

              {whatsAppFeedback && (
                <WhatsAppActionFeedback
                  message={whatsAppFeedback.message}
                  language={language}
                  isLongAnswer={whatsAppFeedback.isLong}
                  downloadedFileName={whatsAppFeedback.fileName}
                  fullAnswerText={whatsAppFeedback.fullAnswer}
                  onClose={() => setWhatsAppFeedback(null)}
                />
              )}
            </Card>
          </PageSection>
        </div>
      </PageContainer>
    </LearningShell>
  );
}
