import React from 'react';
import {
  AppShell,
  PageContainer,
  PageHeader,
  PageSection,
  Card,
  Badge,
  Button,
} from '@/components';
import { Award, CheckCircle2, Rocket } from 'lucide-react';

export default function FinalProjectPage() {
  const capstoneCriteria = [
    'موقع ويب حي منشور على نطاق سحابي مخصص ومتاح للعالم.',
    'تصميم متجاوب 100% مبني بـ Next.js و Tailwind CSS.',
    'ميزة تفاعلية واحدة على الأقل مدعومة بالذكاء الاصطناعي.',
    'درجة 90%+ في تدقيق أداء Google Lighthouse والـ SEO.',
    'معرض أعمال مجهز لاستقبال طلبات العملاء أو مسؤولي التوظيف.',
  ];

  return (
    <AppShell headerTitle="المشروع النهائي">
      <PageContainer>
        <PageHeader
          title="المشروع النهائي (The Capstone Launch)"
          subtitle="تتويج مسار التعلم: بناء موقعك الحقيقي ونشره للعالم وتجهيز خطة التسويق واقتناص العملاء."
          badge={<Badge variant="primary">The Graduation Capstone</Badge>}
          breadcrumbs={[
            { id: '1', label: 'الرئيسية', href: '/' },
            { id: '2', label: 'المشروع النهائي', isCurrent: true },
          ]}
        />

        <PageSection
          title="معايير تسليم المشروع النهائي"
          subtitle="الشروط الواجب توافرها للحصول على اعتماد إتمام الدورة الكاملة"
        >
          <Card variant="featured" className="p-6 sm:p-8">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 rounded-2xl bg-[var(--color-primary-subtle)] text-[var(--color-primary)] flex items-center justify-center shrink-0">
                <Award className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-h3 font-bold text-[var(--color-text)] mb-1">
                  المشروع النهائي المتكامل: الموقع الحي
                </h3>
                <p className="text-body-sm text-[var(--color-text-muted)]">
                  الهدف ليس مجرد تمرين أو كود محلي، بل موقع إنتاجي حقيقي على الإنترنت يعكس هويتك البرمجية.
                </p>
              </div>
            </div>

            <div className="space-y-3 mb-8">
              {capstoneCriteria.map((criterion, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[var(--color-primary)] shrink-0" />
                  <span className="text-body-sm text-[var(--color-text)]">{criterion}</span>
                </div>
              ))}
            </div>

            <div className="pt-4 border-t border-[var(--color-border)] flex items-center justify-between">
              <span className="text-caption text-[var(--color-text-subtle)] font-medium">
                جاهز للتسليم في المرحلة 07 (GROW)
              </span>
              <Button
                variant="primary"
                size="md"
                rightIcon={<Rocket className="w-4 h-4" />}
              >
                بدء تجهيز المشروع
              </Button>
            </div>
          </Card>
        </PageSection>
      </PageContainer>
    </AppShell>
  );
}
