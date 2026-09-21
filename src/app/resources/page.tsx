import React from 'react';
import {
  AppShell,
  PageContainer,
  PageHeader,
  PageSection,
  ContentGrid,
  Card,
  Badge,
  Button,
} from '@/components';
import { ALL_RESOURCES } from '@/content';
import { ExternalLink, Bookmark } from 'lucide-react';

export default function ResourcesPage() {
  return (
    <AppShell headerTitle="الموارد والمراجع">
      <PageContainer>
        <PageHeader
          title="بنك الموارد والمراجع (Developer Bank)"
          subtitle="أدلة الاستخدام السريع، التوثيق الرسمي، أوراق المساعدة وأدوات فحص الأداء للمطورين."
          breadcrumbs={[
            { id: '1', label: 'الرئيسية', href: '/' },
            { id: '2', label: 'الموارد والأدوات', isCurrent: true },
          ]}
        />

        <PageSection
          title="المراجع الأساسية الموصى بها"
          subtitle="مصادر موثوقة ومختارة بعناية لتعزيز رحلتك البرمجية"
        >
          <ContentGrid columns={2}>
            {ALL_RESOURCES.map((res) => (
              <Card key={res.id} variant="default" className="flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <Bookmark className="w-4 h-4 text-[var(--color-primary)]" />
                      <Badge variant="outline" size="sm">
                        {res.category}
                      </Badge>
                    </div>
                    {res.badge && (
                      <Badge variant="secondary" size="sm">
                        {res.badge}
                      </Badge>
                    )}
                  </div>

                  <h3 className="text-h4 font-bold text-[var(--color-text)] mb-1">
                    {res.title.ar}
                  </h3>
                  <p className="text-body-sm text-[var(--color-text-muted)] mb-4">
                    {res.description.ar}
                  </p>
                </div>

                <div className="pt-3 border-t border-[var(--color-border-subtle)] flex justify-end">
                  <a href={res.url} target="_blank" rel="noopener noreferrer">
                    <Button
                      size="sm"
                      variant="outline"
                      rightIcon={<ExternalLink className="w-3.5 h-3.5" />}
                    >
                      زيارة الرابط
                    </Button>
                  </a>
                </div>
              </Card>
            ))}
          </ContentGrid>
        </PageSection>
      </PageContainer>
    </AppShell>
  );
}
