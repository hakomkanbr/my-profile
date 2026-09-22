/**
 * Abdulhakim Kanbr — Engineering Writings & Architectural Insights Registry
 * High-depth technical essays and architectural notes.
 */

import { EngineeringWriting } from '@/types';

export const ALL_WRITINGS: EngineeringWriting[] = [
  {
    slug: 'distributed-systems-resiliency-patterns',
    title: {
      ar: 'أنماط المعمارية الموزعة: المرونة وضمان الاتساق في الأنظمة عالية الضغط',
      en: 'Distributed Systems Architecture: Resiliency & Consistency Under High Throughput',
    },
    summary: {
      ar: 'تحليل معماري لأنماط عزل الفشل (Failure Isolation)، اتساق البيانات النهائي (Eventual Consistency)، ونمط Outbox في الخدمات المصغرة الحديثة.',
      en: 'Architectural deep-dive into failure isolation, eventual consistency patterns, and transactional outbox implementations in distributed systems.',
    },
    category: 'architecture',
    categoryLabel: {
      ar: 'معمارية الأنظمة',
      en: 'System Architecture',
    },
    publishedAt: '2026-02-15T09:00:00Z',
    readTimeMinutes: 8,
    featured: true,
    tags: ['System Design', 'Microservices', 'Distributed Systems', 'Event-Driven', '.NET', 'Resilience'],
    keyTakeaways: [
      {
        ar: 'الافتراض المسبق بفشل الشبكة هو الركيزة الأساسية لأي تصميم موزع متين.',
        en: 'Assuming network unreliability by default is the foundation of robust distributed systems.',
      },
      {
        ar: 'نمط Transactional Outbox يحل معضلة التحديث المزدوج (Dual-Write) بين قاعدة البيانات وناقل الرسائل.',
        en: 'The Transactional Outbox pattern reliably eliminates the dual-write problem across databases and message brokers.',
      },
      {
        ar: 'استخدام قواطع الدوائر (Circuit Breakers) وسياسات التراجع الأسي (Exponential Backoff) يمنع انهيار الخدمات التسلسلي.',
        en: 'Circuit breakers paired with exponential backoff prevent cascading service degradations.',
      },
    ],
    sections: [
      {
        heading: {
          ar: '1. معضلة الاتساق والشبكات غير الموثوقة',
          en: '1. The Fallacy of Network Reliability and Consistency',
        },
        paragraphs: [
          {
            ar: 'عند بناء أنظمة موزعة لمعالجة ملايين المعاملات، فإن أكبر خطأ يمكن للمهندس ارتكابه هو افتراض أن الشبكة مستقرة أو أن زمن الاستجابة صفر. في البيئات الإنتاجية، تفشل الشبكات جزئياً بشكل مستمر، مما يفرض الانتقال الحتمي من نموذج المعاملات الخطية (ACID) إلى نماذج الاتساق النهائي (Eventual Consistency).',
            en: 'When engineering distributed systems designed for high throughput, assuming zero latency or deterministic networks is catastrophic. In real production workloads, partial network partitions are continuous, mandating a transition from classic ACID transactions to structured eventual consistency.',
          },
          {
            ar: 'الحل لا يكمن في محاولة منع الفشل، بل في تصميمه كجزء طبيعي من مسار النظام عبر تطبيق مبدأ Bulkhead لعزل الخدمات وقواطع الدوائر (Circuit Breakers).',
            en: 'Resilience is not about preventing failure, but isolating it through the Bulkhead principle and active Circuit Breaker policies.',
          },
        ],
      },
      {
        heading: {
          ar: '2. حل معضلة التحديث المزدوج عبر نمط Transactional Outbox',
          en: '2. Eliminating Dual-Write Hazards with the Transactional Outbox',
        },
        paragraphs: [
          {
            ar: 'في العديد من المعماريات المعتمدة على الأحداث، يحتاج النظام إلى حفظ حالة في قاعدة البيانات وفي الوقت ذاته إرسال حدث إلى Kafka أو RabbitMQ. إذا فشلت إحداهما بعد نجاح الأخرى، يقع النظام في حالة عدم اتساق كارثية. يحل نمط Outbox هذه المشكلة عبر حفظ الحدث في جدول Outbox داخل نفس المعاملة المحلية، ثم يقوم عامل خلفي بنشره وضمان تسليمه.',
            en: 'In event-driven architectures, persisting state to a primary database while simultaneously dispatching a message to Kafka or RabbitMQ introduces the dangerous dual-write pitfall. The Transactional Outbox solves this by staging domain events inside an Outbox table within the exact same atomic transaction.',
          },
        ],
        codeSnippet: {
          language: 'csharp',
          code: `// Atomic outbox persistence inside domain transaction
await using var transaction = await _dbContext.Database.BeginTransactionAsync(ct);

_dbContext.Orders.Add(order);
_dbContext.OutboxMessages.Add(new OutboxMessage
{
    Id = Guid.NewGuid(),
    OccurredOnUtc = DateTime.UtcNow,
    Type = nameof(OrderPlacedEvent),
    Payload = JsonSerializer.Serialize(new OrderPlacedEvent(order.Id, order.Amount))
});

await _dbContext.SaveChangesAsync(ct);
await transaction.CommitAsync(ct);`,
          caption: {
            ar: 'تخزين الأحداث ذرياً في جدول Outbox مع أمر الشراء',
            en: 'Atomic persistence of Outbox events alongside domain state in .NET',
          },
        },
      },
      {
        heading: {
          ar: '3. نمط Idempotency كصمام أمان أساسي',
          en: '3. Guaranteed Idempotency as an Architectural Imperative',
        },
        paragraphs: [
          {
            ar: 'في أنظمة الرسائل، القاعدة الذهبية هي "At-least-once delivery" (التسليم مرة واحدة على الأقل). هذا يعني حتمية وصول رسائل مكررة. المعمارية الناجحة تشترط أن تكون جميع معالجات الرسائل والـ APIs غير قابلة للتكرار العكسي (Idempotent) عبر تتبع معرفات الطلبات (Idempotency Keys).',
            en: 'Modern message brokers guarantee at-least-once delivery, making duplicate events inevitable. Clean distributed systems require every consumer and public API endpoint to be strictly idempotent via idempotency keys.',
          },
        ],
      },
    ],
  },
  {
    slug: 'nextjs-performance-and-core-web-vitals',
    title: {
      ar: 'هندسة الأداء الفائق في Next.js: كيف تضمن علامة 100 في Core Web Vitals',
      en: 'Next.js High-Performance Engineering: Dominating Core Web Vitals & Hydration',
    },
    summary: {
      ar: 'استراتيجيات تحسين وقت الإتاحة التفاعلية (INP)، تقليص حمولة الجافاسكريبت، وتحميل الموارد غير المعيق عبر Server Components.',
      en: 'Practical strategies for minimizing Interaction to Next Paint (INP), zero-bundle Server Components, and non-blocking resource pipelines.',
    },
    category: 'web-engineering',
    categoryLabel: {
      ar: 'هندسة الويب',
      en: 'Web Engineering',
    },
    publishedAt: '2026-01-20T10:30:00Z',
    readTimeMinutes: 7,
    featured: true,
    tags: ['Next.js 15', 'React 19', 'Web Vitals', 'Performance', 'Turbopack', 'PWA'],
    keyTakeaways: [
      {
        ar: 'مؤشر INP (Interaction to Next Paint) يتأثر مباشرة بحجم كود الجافاسكريبت المنفذ على الخيط الرئيسي (Main Thread).',
        en: 'Interaction to Next Paint (INP) is heavily degraded by long tasks blocking the browser main thread.',
      },
      {
        ar: 'مكونات الخادم (RSC) هي أفضل سلاح لتقليص حزمة العميل (Client Bundle) إلى الصفر.',
        en: 'React Server Components (RSC) are the ultimate tool to achieve zero-bundle server logic.',
      },
      {
        ar: 'تأخير تحميل السكربتات التحليلية والخدمية بعد التفاعل الأولي يوفر الثواني الحرجة لتجربة المستخدم.',
        en: 'Deferring analytical tags and non-critical workers after load secures optimal First Input & LCP.',
      },
    ],
    sections: [
      {
        heading: {
          ar: '1. الانتقال من FID إلى INP: لماذا اختلف معيار الأداء؟',
          en: '1. The Paradigm Shift from FID to INP',
        },
        paragraphs: [
          {
            ar: 'مع اعتماد Google لمؤشر INP رسمياً، لم يعد يكفي قياس أول تفاعل فقط. يقيس INP استجابة الصفحة لكل نقرة أو تفاعل طوال مدة زيارة المستخدم. إذا كان الخيط الرئيسي مشغولاً بـ Hydration ثقيل أو معالجة حالات زائدة، سينهار تقييم الموقع فوراً.',
            en: 'With INP replacing FID as a core ranking signal, measuring only the initial interaction is obsolete. INP samples interactions throughout the entire lifecycle of the session. Heavy client-side hydration or unthrottled state updates will immediately downgrade the experience.',
          },
        ],
      },
      {
        heading: {
          ar: '2. استراتيجية السكربتات المتقدمة وإدارة الـ Service Worker',
          en: '2. Optimal Script Loading and Progressive Web App Integration',
        },
        paragraphs: [
          {
            ar: 'استخدام استراتيجية afterInteractive مع next/script، وتسجيل Service Worker فقط بعد حدث load، يمنح المتصفح أولوية تامة لرسم العناصر التفاعلية الأساسية دون منافسة على الموارد.',
            en: 'Leveraging strategy="afterInteractive" with next/script and deferring Service Worker registration until after the window load event ensures the browser renders the primary viewport without thread contention.',
          },
        ],
        codeSnippet: {
          language: 'tsx',
          code: `// Zero-impact Service Worker registration
useEffect(() => {
  if (typeof window !== 'undefined' && 'serviceWorker' in navigator) {
    const registerWorker = () => {
      navigator.serviceWorker.register('/sw.js', { scope: '/' });
    };
    
    if (document.readyState === 'complete') {
      registerWorker();
    } else {
      window.addEventListener('load', registerWorker, { once: true });
    }
  }
}, []);`,
          caption: {
            ar: 'تسجيل الـ Service Worker بعد اكتمال التحميل لضمان سرعة LCP القصوى',
            en: 'Non-blocking Service Worker registration preserving peak LCP and TBT',
          },
        },
      },
    ],
  },
  {
    slug: 'clean-architecture-dotnet-enterprise',
    title: {
      ar: 'المعمارية النظيفة (Clean Architecture) في بيئات المؤسسات: من المفهوم النظري إلى الكود المستدام',
      en: 'Clean Architecture in Enterprise Environments: From Abstract Theory to Resilient Code',
    },
    summary: {
      ar: 'دليل عملي لفصل الاهتمامات بين طبقات المجال، التطبيق، والبنية التحتية باستخدام C# و .NET مع الحفاظ على مرونة الاختبار.',
      en: 'Pragmatic domain-driven boundaries, dependency inversion, and scalable test harnesses in enterprise .NET systems.',
    },
    category: 'architecture',
    categoryLabel: {
      ar: 'هندسة المعمارية',
      en: 'Clean Architecture',
    },
    publishedAt: '2026-01-05T14:00:00Z',
    readTimeMinutes: 9,
    featured: true,
    tags: ['Clean Architecture', 'Domain-Driven Design', 'C#', '.NET 9', 'Enterprise Systems', 'API Design'],
    keyTakeaways: [
      {
        ar: 'طبقة الـ Domain لا يجب أن تعتمد على أي مكتبة خارجية أو إطار عمل مهما كانت المغريات.',
        en: 'The Domain Core must never depend on any external ORM or framework.',
      },
      {
        ar: 'استخدام نمط CQRS مع مكتبة MediatR يتيح تنظيماً محكماً للمسارات ويسمح بالتوسع الأفقي للاستعلامات.',
        en: 'CQRS patterns cleanly separate mutation pipelines from high-throughput query projections.',
      },
      {
        ar: 'الاختبارات المعمارية (Architecture Tests) تحمي قواعد التصميم وتمنع تسرب الاعتماديات تلقائياً.',
        en: 'Automated architecture unit tests guarantee boundary rules are enforced in CI.',
      },
    ],
    sections: [
      {
        heading: {
          ar: '1. تشريح الطبقات وحماية قلب النظام (The Domain Core)',
          en: '1. Layer Segregation and Domain Purity',
        },
        paragraphs: [
          {
            ar: 'المعمارية النظيفة ليست تعقيداً بل هي استثمار في قابلية النظام للتغيير. عندما تضع قواعد العمل (Business Rules) في مركز المنظومة وتجعل قواعد البيانات ومزودي الخدمات السحابية مجرد تفاصيل خارجية قابلة للاستبدال، تصبح ترقية التقنيات أمراً روتينياً خالياً من المخاطر.',
            en: 'Clean Architecture is not over-engineering; it is an insurance policy against obsolescence. By placing core business logic at the center and treating databases and cloud providers as replaceable plugins, framework upgrades become routine and low-risk.',
          },
        ],
      },
      {
        heading: {
          ar: '2. قواعد الاختبارات المعمارية التلقائية',
          en: '2. Enforcing Invariants with Architecture Tests',
        },
        paragraphs: [
          {
            ar: 'أفضل طريقة لضمان عدم انتهاك المطورين لقواعد المعمارية هي كتابة اختبارات معمارية باستخدام NetArchTest، تفشل في الـ CI/CD فوراً إذا اعتمدت طبقة الـ Domain على طبقة الـ Infrastructure.',
            en: 'The most foolproof strategy to preserve architectural integrity is automated unit tests verifying layer dependencies with NetArchTest directly inside your CI pipeline.',
          },
        ],
        codeSnippet: {
          language: 'csharp',
          code: `[Fact]
public void Domain_Should_Not_Have_Dependency_On_Other_Projects()
{
    var result = Types.InAssembly(DomainAssembly)
        .ShouldNot()
        .HaveDependencyOnAny("Infrastructure", "WebApi", "Persistence")
        .GetResult();

    Assert.True(result.IsSuccessful);
}`,
          caption: {
            ar: 'اختبار معماري آلي لمنع تسرب الاعتماديات إلى طبقة المجال',
            en: 'Automated architectural enforcement test preventing dependency leakage',
          },
        },
      },
    ],
  },
  {
    slug: 'containerization-devops-reliability',
    title: {
      ar: 'إدارة الحاويات وهندسة الموثوقية: الانتقال من Dockerfile محلي إلى بيئة إنتاج آمنة',
      en: 'Containerization & Site Reliability: Transitioning from Local Docker to Production Resilience',
    },
    summary: {
      ar: 'أفضل ممارسات تقليص حجم الصور، مبادئ الأمان متعدد المراحل (Multi-stage builds)، واستراتيجيات المراقبة والتشغيل الذاتي.',
      en: 'Production-grade multi-stage builds, non-root container security, zero-downtime rolling deploys, and automated telemetry.',
    },
    category: 'devops-cloud',
    categoryLabel: {
      ar: 'DevOps والسحابة',
      en: 'DevOps & Cloud',
    },
    publishedAt: '2025-12-18T11:00:00Z',
    readTimeMinutes: 6,
    featured: false,
    tags: ['Docker', 'DevOps', 'CI/CD', 'Linux Administration', 'SRE', 'Cloud Security'],
    keyTakeaways: [
      {
        ar: 'استخدام البناء متعدد المراحل (Multi-stage) يقلل مساحة الهجوم ويخفض حجم الصورة لأقل من 100MB.',
        en: 'Multi-stage builds drastically reduce image footprint and eliminate compile-time build tools from runtime.',
      },
      {
        ar: 'تشغيل الحاويات بمستخدم غير جذري (non-root) هو خط الدفاع الأول لمنع اختراق الخادم المضيف.',
        en: 'Executing containers as non-root users is the foundational safeguard against host privilege escalation.',
      },
    ],
    sections: [
      {
        heading: {
          ar: '1. مبادئ الحاويات الآمنة وخفيفة الوزن',
          en: '1. Hardened, Minimalist Container Principles',
        },
        paragraphs: [
          {
            ar: 'في بيئات العمل الجادة، لا يمكن شحن صور Docker تحتوي على مجمّعات الكود (Compilers) أو أدوات الصيانة غير الضرورية. الحاوية الإنتاجية يجب أن تحوي الملف التنفيذي المترجم فقط مع بيئة تشغيل مجردة (Distroless or Alpine)، ويتم تشغيلها تحت مستخدم مخصص بدون صلاحيات root.',
            en: 'In mission-critical environments, runtime images must never contain compilers or maintenance utilities. Production containers should only encapsulate the compiled artifact and minimalist runtime binaries, running strictly with dedicated non-root credentials.',
          },
        ],
      },
    ],
  },
];

export function getWritingBySlug(slug: string): EngineeringWriting | undefined {
  return ALL_WRITINGS.find((w) => w.slug === slug);
}

export function getFeaturedWritings(): EngineeringWriting[] {
  return ALL_WRITINGS.filter((w) => w.featured);
}
