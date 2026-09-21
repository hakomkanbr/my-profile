import { PresentationSession } from '@/types';

export const SESSION_10: PresentationSession = {
  id: 'session-10',
  number: 10,
  slug: 'session-10',
  title: {
    ar: 'الذكاء الاصطناعي كمسار عمل مهني متكامل (Full SDLC)',
    en: 'AI as a Professional Development Workflow: Architecture to Ship',
  },
  subtitle: {
    ar: 'الذكاء الاصطناعي ليس مجرد توليد كود: كيف توظفه في التخطيط، الاختبارات، التوثيق، والمراجعة مع تجنب الهلوسات والمخاطر الأمنية؟',
    en: 'Beyond raw code generation: orchestrating AI across planning, testing, documentation, and security audits',
  },
  durationMinutes: 90,
  goal: {
    ar: 'تمكين الطالب من قيادة دورة حياة تطوير البرمجيات الكاملة (SDLC) مع الذكاء الاصطناعي، وفهم حدوده ومخاطره بدقة، وترسيخ قاعدة: "AI generates. Human validates".',
    en: 'Master the full AI-assisted Software Development Lifecycle (SDLC), understand critical AI failure modes, and enforce the golden rule: "AI generates. Human validates".',
  },
  prerequisites: [
    { ar: 'إكمال الجلسة 09 وامتلاك مشروع Next.js متكامل وجاهز للإنتاج', en: 'Completion of Session 09 with production-ready Next.js site' },
  ],
  objectives: [
    { ar: 'إتقان توظيف الذكاء الاصطناعي في الـ 10 مراحل الهندسية: من البحث والتخطيط حتى كتابة الاختبارات والتوثيق', en: 'Master AI deployment across all 10 SDLC stages: research, specs, planning, code, tests, docs, and ship' },
    { ar: 'تشخيص وتفادي فخاخ الذكاء الاصطناعي الكبرى: الهلوسة، الافتراضات الخاطئة، الثغرات الأمنية، والمكتبات الوهمية', en: 'Diagnose and mitigate AI failure modes: hallucinations, security oversights, and phantom packages' },
    { ar: 'استخدام الذكاء الاصطناعي لكتابة حالات اختبار آلية (Unit & Integration Tests) تضمن سلامة الكود', en: 'Direct AI to scaffold automated unit and integration tests verifying application invariants' },
    { ar: 'ممارسة مراجعة الكود الصارمة (Code Review) كمهندس رئيسي يعتمد ما يصلح ويرفض ما يضر', en: 'Execute senior-level code reviews critically auditing AI proposals before merging' },
  ],
  timeline: [
    { timeRange: '00:00 – 00:10', durationMinutes: 10, label: { ar: 'مقدمة: الذكاء الاصطناعي كشريك معماري وليس مجرد كاتب أكواد', en: 'Intro: AI as architectural partner, not just a typist' }, type: 'context' },
    { timeRange: '00:10 – 00:25', durationMinutes: 15, label: { ar: 'مسار الـ SDLC المعزز: الـ 10 محطات الهندسية من الفكرة للشحن', en: 'The 10-Stage AI-Augmented SDLC Pipeline' }, type: 'concept' },
    { timeRange: '00:25 – 00:45', durationMinutes: 20, label: { ar: 'فخاخ ومخاطر الذكاء الاصطناعي: الهلوسة، الأمان، والتضخيم الهندسي', en: 'AI Failure Modes: Hallucinations, Security & Bloat' }, type: 'comparison' },
    { timeRange: '00:45 – 01:00', durationMinutes: 15, label: { ar: 'تطبيق حي: استخدام AI لكتابة اختبارات وتوثيق لمشروع المطعم', en: 'Live Demo: Automated Testing & API Documentation' }, type: 'demo' },
    { timeRange: '01:00 – 01:20', durationMinutes: 20, label: { ar: 'تحدي الطلاب: تشغيل فحص أمني وتوليد وثيقة README متكاملة لمشروعهم', en: 'Student Challenge: Security Audit & README Spec' }, type: 'practice' },
    { timeRange: '01:20 – 01:25', durationMinutes: 5, label: { ar: 'مراجعة الملاحظات الأمنية المكتشفة في الشات', en: 'Review discovered security and documentation findings' }, type: 'review' },
    { timeRange: '01:25 – 01:30', durationMinutes: 5, label: { ar: 'الخلاصة والتجهيز للتسويق وجلب العملاء (Session 11)', en: 'Takeaways & Prep for Marketing & Clients (Session 11)' }, type: 'takeaway' },
  ],
  projectMilestone: {
    ar: 'إجراء التدقيق الأمني الشامل، كتابة حالات الاختبار الآلية، وتجهيز ملف التوثيق README لمشروع التخرج.',
    en: 'Complete comprehensive security audit, automated test suite, and production README documentation.',
  },
  aiRole: {
    ar: 'شريك مراجعة فاحص ومولد لاختبارات الحواف وثغرات الأمان تحت إشراف وتدقيق المهندس البشري.',
    en: 'Adversarial code reviewer and test generator operating under human oversight and approval.',
  },
  marketConnection: {
    ar: 'المهندس الذي يقدم كوداً موثقاً ومختبراً وخالياً من الثغرات الأمنية يبني سمعة احترافية تدوم لسنوات.',
    en: 'Engineers who deliver audited, tested, and secure codebases earn premier reputation and repeat client retainers.',
  },
  startScreen: {
    badge: 'SESSION 10 / 12 • ENTERPRISE WORKFLOW',
    headline: {
      ar: 'الذكاء الاصطناعي كمسار عمل مهني: من التخطيط إلى الشحن الآمن',
      en: 'AI as a Professional SDLC Workflow: From Blueprint to Secure Ship',
    },
    description: {
      ar: 'تعلم كيف يوظف كبار المطورين الذكاء الاصطناعي في كامل دورة حياة المنتج: الاختبارات، التوثيق، مراجعة الأمان، وتجنب فخاخ الهلوسة.',
      en: 'Discover how lead engineers command AI across the full product lifecycle: automated testing, documentation, and security reviews.',
    },
    sessionGoal: {
      ar: 'تنفيذ فحص الأمان الشامل، كتابة حالات الاختبار، وتوثيق مشروع تخرجك كمنتج برمجي مكتمل.',
      en: 'Execute an exhaustive security audit, author automated tests, and produce enterprise documentation for your project.',
    },
  },
  endScreen: {
    headline: {
      ar: 'إنجاز استثنائي! مشروعك الآن محصن هندسياً، مختبر، وموثق باحترافية',
      en: 'Outstanding! Your Codebase is Now Audited, Tested, and Securely Documented',
    },
    keyRecap: [
      {
        ar: 'القاعدة الدائمة: "AI generates. Human validates" — أنت صمام الأمان والمسؤول الوحيد عن الكود.',
        en: 'Permanent Rule: "AI generates. Human validates" — you are the ultimate guardian and owner of the code.',
      },
      {
        ar: 'الذكاء الاصطناعي يكتب الاختبارات والتوثيق ببراعة تفوق كتابته للكود الأساسي.',
        en: 'AI excels exceptionally at authoring exhaustive edge-case test suites and technical documentation.',
      },
      {
        ar: 'الحذر من الهلوسة والمكتبات غير الموجودة يحميك من ثغرات سلاسل الإمداد البرمجية (Supply Chain Attacks).',
        en: 'Guarding against hallucinated phantom packages shields your platform from supply chain vulnerabilities.',
      },
    ],
    nextSessionNumber: '11',
    nextSessionTitle: {
      ar: 'التسويق وجلب العملاء: تحويل مهارة صناعة الويب إلى خدمة مربحة',
      en: 'Marketing & Client Acquisition: Turning Web Creation into a Marketable Business',
    },
  },
  slides: [
    // Slide 1: Title
    {
      id: 's10-slide-01',
      sessionNumber: 10,
      slideNumber: 1,
      totalSlides: 16,
      type: 'title',
      title: { ar: 'الذكاء الاصطناعي كمسار عمل مهني', en: 'AI as a Professional SDLC' },
      estimatedMinutes: 2,
      teachingGoal: { ar: 'افتتاح الجلسة وإعلان الانتقال من كتابة الأكواد إلى إدارة دورة حياة البرمجيات بالكامل.', en: 'Open session: ascending from isolated coding to full lifecycle software engineering.' },
      speakerNotes: { ar: 'رحب بالطلاب: "اليوم نتعلم كيف يعمل كبار مهندسي الشركات العالمية مع AI: لا نطلب منه فقط توليد أزرار، بل نوظفه في الاختبار والمراجعة والتوثيق!".', en: 'Welcome learners: "Today we discover how enterprise leads pair with AI across testing, security, and audits!"' },
      payload: {
        type: 'title',
        data: {
          sessionNumber: '10',
          kicker: { ar: 'دورة حياة البرمجيات المتقدمة', en: 'Advanced Software Lifecycle' },
          headline: { ar: 'AI AS A PROFESSIONAL WORKFLOW', en: 'AI AS A PROFESSIONAL WORKFLOW' },
          subheadline: { ar: 'التخطيط، الاختبار، التوثيق، وفهم حدود ومخاطر الذكاء الاصطناعي', en: 'Planning, testing, documentation, and mitigating critical AI failure modes' },
          totalSessions: '12',
          durationMinutes: 90,
          tags: ['Full SDLC', 'Automated Testing', 'Security Audit', 'AI Hallucinations', 'Human Validation'],
        },
      },
    },

    // Slide 2: Context
    {
      id: 's10-slide-02',
      sessionNumber: 10,
      slideNumber: 2,
      totalSlides: 16,
      type: 'context',
      title: { ar: 'الذكاء الاصطناعي أكثر بكثير من مجرد "Generate Code"', en: 'AI is Vastly More Than Code Generation' },
      subtitle: { ar: 'لماذا يمثل توليد الكود 20% فقط من القيمة الحقيقية للذكاء الاصطناعي في هندسة البرمجيات؟', en: 'Why code generation represents barely 20% of the true value of AI in software engineering' },
      estimatedMinutes: 4,
      teachingGoal: { ar: 'توسيع مدارك الطلاب لاستخدام الذكاء الاصطناعي في المراحل التسع الأخرى من المشروع.', en: 'Broaden student horizons to deploy AI across the other 9 phases of software delivery.' },
      speakerNotes: { ar: 'وضح: كتابة الكود سهلة وسريعة؛ التحدي الأكبر هو التفكير في حالات الفشل، كتابة الاختبارات، توثيق النظام، وضمان عدم وجود ثغرات.', en: 'Generating code is fast; the true bottleneck is edge-case testing, system documentation, and security verification.' },
      payload: {
        type: 'context',
        data: {
          industryShift: {
            ar: 'المهندسون المحترفون يوظفون الذكاء الاصطناعي كمحرك بحث معماري ومولد للاختبارات ومراجع للكود قبل كتابة أي سطر إنتاجي.',
            en: 'Senior engineers deploy AI as an architectural sounding board, test generator, and code reviewer.',
          },
          realWorldProblem: {
            ar: 'الاعتماد الأعمى على الكود المتولد دون اختبارات وتدقيق أمني يتسبب في تسريب بيانات العملاء وتوقف الخوادم.',
            en: 'Blind reliance on unverified AI code leads directly to data leaks, performance regressions, and downtime.',
          },
          whyItMatters: {
            ar: 'عندما تفهم دورة حياة المشروع كاملة، تصبح قادراً على قيادة وتسليم مشاريع برمجية متكاملة تضاهي عمل فِرق هندسية كاملة.',
            en: 'When mastering the end-to-end SDLC with AI, a single creator commands the throughput of an entire agile team.',
          },
        },
      },
    },

    // Slide 3: Visual (The 10-Stage SDLC Pipeline)
    {
      id: 's10-slide-03',
      sessionNumber: 10,
      slideNumber: 3,
      totalSlides: 16,
      type: 'visual',
      title: { ar: 'مسار دورة حياة البرمجيات المتكامل (The 10-Stage SDLC)', en: 'The 10-Stage Engineering SDLC Pipeline' },
      subtitle: { ar: 'الرحلة الكاملة لكل ميزة برمجية من الفكرة والبحث وحتى الاختبار والشحن', en: 'The comprehensive lifecycle of every production feature from research to deployment' },
      estimatedMinutes: 5,
      teachingGoal: { ar: 'رسم المسار المكتمل المكون من 10 مراحل وتوضيح دور AI في كل منها.', en: 'Map the complete 10-phase engineering lifecycle and highlight AI role in each.' },
      speakerNotes: { ar: 'استعرض المراحل: 1. البحث -> 2. المتطلبات -> 3. التخطيط -> 4. المعمارية -> 5. الكود -> 6. التصحيح -> 7. إعادة الهيكلة -> 8. الاختبار -> 9. التوثيق -> 10. الشحن.', en: 'Walk through: Research -> Specs -> Planning -> Architecture -> Code -> Debug -> Refactor -> Test -> Docs -> Ship.' },
      payload: {
        type: 'visual',
        data: {
          caption: { ar: 'دورة حياة هندسية منضبطة تضمن أعلى درجات الموثوقية والأمان.', en: 'Disciplined engineering pipeline ensuring absolute uptime and maintainability.' },
          diagramType: 'pipeline',
          nodes: [
            { id: 's1', stepNumber: '01', title: { ar: 'البحث والاستكشاف', en: 'Research' }, badge: 'Ideation' },
            { id: 's2', stepNumber: '02', title: { ar: 'تحديد المتطلبات', en: 'Requirements' }, badge: 'Specs' },
            { id: 's3', stepNumber: '03', title: { ar: 'المعمارية والتخطيط', en: 'Architecture' }, badge: 'Plan' },
            { id: 's4', stepNumber: '04', title: { ar: 'التنفيذ البرمجي', en: 'Coding' }, badge: 'Build' },
            { id: 's5', stepNumber: '05', title: { ar: 'الاختبار والتوثيق', en: 'Test & Docs' }, badge: 'Verify' },
            { id: 's6', stepNumber: '06', title: { ar: 'المراجعة والشحن', en: 'Review & Ship' }, badge: 'Production' },
          ],
        },
      },
    },

    // Slide 4: Comparison (AI Failure Modes & Human Audits)
    {
      id: 's10-slide-04',
      sessionNumber: 10,
      slideNumber: 4,
      totalSlides: 16,
      type: 'comparison',
      title: { ar: 'مخاطر الذكاء الاصطناعي: أين يخطئ وكيف تحمي مشروعك؟', en: 'AI Failure Modes & The Human Shield' },
      subtitle: { ar: 'فحص موضوعي للثغرات والافتراضات الخاطئة الشائعة التي تنتجها النماذج اللغوية', en: 'An objective audit of common LLM failure modes, hallucinations, and security flaws' },
      estimatedMinutes: 5,
      teachingGoal: { ar: 'توعية الطلاب بالثغرات الخفية للـ AI مثل اقتراح مكتبات غير موجودة أو تجاهل التحقق من المدخلات.', en: 'Educate students on phantom package hallucinations and missing input sanitization.' },
      speakerNotes: { ar: 'اشرح ظاهرة الهلوسة وحزم الشبح (Phantom Packages) وثغرات SQL Injection أو XSS التي قد يولدها AI إذا لم تفحصها.', en: 'Explain hallucinated dependencies, XSS injection risks, and over-engineered abstractions.' },
      payload: {
        type: 'comparison',
        data: {
          leftHeader: { ar: 'خطر وثغرة الذكاء الاصطناعي (AI Risk)', en: 'AI Failure Mode' },
          rightHeader: { ar: 'صمام الأمان البشري (Human Engineering Defense)', en: 'Human Engineering Defense' },
          dimensions: [
            {
              dimension: { ar: 'الهلوسة وحزم الشبح', en: 'Phantom Package Hallucinations' },
              left: { ar: 'اقتراح مكتبات npm غير موجودة أو ملغاة تمثل ثغرة أمنية', en: 'Inventing non-existent npm packages or deprecated libraries' },
              right: { ar: 'التحقق من سجل npm الرسمي وتفضيل الحلول الأصيلة (Zero-Dep)', en: 'Verifying official npm registry and mandating zero-dep primitives' },
            },
            {
              dimension: { ar: 'الافتراضات الخاطئة والمنطق', en: 'Flawed Logical Assumptions' },
              left: { ar: 'افتراض وجود بيانات مثالية وتجاهل سيناريوهات الخطأ', en: 'Assuming ideal happy paths while ignoring network failures' },
              right: { ar: 'كتابة حدود الأمان (Error Boundaries) وتدقيق حالات الفراغ', en: 'Enforcing strict error boundaries and empty state resilience' },
            },
            {
              dimension: { ar: 'التضخيم البرمجي (Over-Engineering)', en: 'Over-Engineering Bloat' },
              left: { ar: 'إنشاء 10 ملفات ومئات الأسطر لحل مشكلة تتطلب 5 أسطر', en: 'Generating 10 files and hundreds of lines for a 5-line problem' },
              right: { ar: 'الحذف الصارم وتطبيق مبدأ البساطة الهندسية (KISS Principle)', en: 'Pruning ruthlessly and mandating architectural simplicity (KISS)' },
            },
            {
              dimension: { ar: 'الثغرات الأمنية والتحقق', en: 'Security & Sanitization Flaws' },
              left: { ar: 'استخدام dangerouslySetInnerHTML دون تعقيم المدخلات', en: 'Blindly injecting unescaped user inputs into the DOM' },
              right: { ar: 'التعقيم الصارم للمدخلات وتطبيق حماية XSS و CSRF', en: 'Strict sanitization, schema validation, and defense-in-depth' },
            },
          ],
          balancedVerdict: {
            ar: 'القاعدة الذهبية الأبدية: الذكاء الاصطناعي يولد المقترحات — والمهندس البشري يملك الفحص والمسؤولية.',
            en: 'The inviolable golden rule: AI Generates Proposals — Human Engineers Validate & Own Responsibility.',
          },
        },
      },
    },

    // Slide 5: Code (Automated Unit Test Artifact)
    {
      id: 's10-slide-05',
      sessionNumber: 10,
      slideNumber: 5,
      totalSlides: 16,
      type: 'code',
      title: { ar: 'الكود كأثر بصري: اختبار آلي مولد بـ AI يحمي المكون من الانهيار', en: 'Code Artifact: Automated Component Test' },
      estimatedMinutes: 5,
      teachingGoal: { ar: 'إظهار كيف يكتب الذكاء الاصطناعي اختبارات نقية وسريعة تتحقق من صحة عمل المكونات.', en: 'Demonstrate AI scaffolding clean automated test suites verifying component correctness.' },
      speakerNotes: { ar: 'اشرح كيف يختبر هذا الكود أطباق المطعم: هل يتم عرض الاسم والسعر؟ هل يعمل زر الطلب؟ إذا انكسر الكود مستقبلاً سينبهنا الاختبار فوراً.', en: 'Explain: test verifies item name, price, and click trigger. If future code breaks, tests catch it instantly.' },
      payload: {
        type: 'code',
        data: {
          language: 'tsx',
          codeSnippet: `// tests/DishCard.test.tsx — Production Component Invariant Test
import { render, screen, fireEvent } from '@testing-library/react';
import { DishCard } from '@/components/DishCard';

describe('DishCard Component Invariants', () => {
  const mockDish = {
    id: 'pasta-1',
    name: 'Truffle Tagliolini',
    price: 24,
    description: 'Fresh black truffles with handmade butter pasta.',
  };

  it('renders dish name, description, and formatted price correctly', () => {
    render(<DishCard {...mockDish} />);
    expect(screen.getByText('Truffle Tagliolini')).toBeInTheDocument();
    expect(screen.getByText(/\$24/)).toBeInTheDocument();
  });

  it('triggers onOrder handler when reservation button is clicked', () => {
    const handleOrder = jest.fn();
    render(<DishCard {...mockDish} onOrder={handleOrder} />);
    
    const orderBtn = screen.getByRole('button', { name: /order/i });
    fireEvent.click(orderBtn);
    
    expect(handleOrder).toHaveBeenCalledTimes(1);
    expect(handleOrder).toHaveBeenCalledWith('pasta-1');
  });
});`,
          what: { ar: 'اختبار برمجي آلي يتحقق من ظهور اسم الوجبة وسعرها واستجابة زر الطلب للنقر.', en: 'Automated unit test verifying component rendering, price formatting, and click dispatch.' },
          why: { ar: 'وجود الاختبارات الآلية يتيح لك إعادة كتابة أو تحسين الكود مستقبلاً دون خوف من كسر أي ميزة سابقة.', en: 'Automated tests grant fearless refactoring confidence by preventing silent regression bugs.' },
          when: { ar: 'يُكتب بعد إنهاء كل مكون أساسي وقبل اعتماد الكود للإطلاق النهائي.', en: 'Authored upon completing core components ahead of final production deployment.' },
        },
      },
    },

    // Slide 6: AI (The Rigorous Code Review & Security Prompt)
    {
      id: 's10-slide-06',
      sessionNumber: 10,
      slideNumber: 6,
      totalSlides: 16,
      type: 'ai',
      title: { ar: 'برومبت مراجعة الكود وفحص الأمان (Adversarial Review)', en: 'Adversarial Code Review & Security Prompt' },
      subtitle: { ar: 'أمر تشغيل الذكاء الاصطناعي كمهندس أمني معارض يبحث عن أدق الثغرات في مشروعك', en: 'Commanding AI as an adversarial security engineer hunting for vulnerabilities' },
      estimatedMinutes: 6,
      teachingGoal: { ar: 'تدريب الطلاب على استخدام نبرة المراجع المعارض لاستخراج الثغرات بدلاً من المجاملات.', en: 'Train students to mandate adversarial critique over superficial model flattery.' },
      speakerNotes: { ar: 'اقرأ عبارة: "Be ruthlessly critical. Do not praise the code". هذه العبارة تجعل الذكاء الاصطناعي يركز 100% على اكتشاف الأخطاء.', en: 'Highlight: "Be ruthlessly critical". This removes conversational pleasantries and surfaces real vulnerabilities.' },
      payload: {
        type: 'ai',
        data: {
          role: 'Principal Security Engineer and Cynical Senior Code Reviewer.',
          context: 'Conducting pre-merge code review for our capstone web application.',
          task: `Perform an adversarial audit of this codebase. Hunt specifically for:
1. Security Risks (Unsanitized inputs, dangerous DOM injections, token exposure)
2. Dependency Risks (Unnecessary or deprecated external packages)
3. Performance Anti-Patterns (Unnecessary re-renders, unmemoized expensive calls)
4. Dead Code or Over-Engineered Abstractions`,
          constraints: 'Do not compliment the code. Be ruthlessly objective. For every issue found, explain the exploit vector and provide a hardened patch.',
          output: `Return:
- Severity Classification (Critical, Medium, Low)
- Exploit Scenario
- Hardened Production Patch`,
          acceptanceCriteria: [
            'All security risks flagged with explicit remediation',
            'Zero hallucinated packages',
            'Defensive programming safeguards validated',
          ],
          iterationTip: {
            ar: 'شغل هذا البرومبت على أي كود تولده قبل أن تقبل دمجه في مشروعك الأساسي.',
            en: 'Run this adversarial review on all AI-scaffolded logic before merging into main.'
          },
        },
      },
    },

    // Slide 7: Challenge (Student Security & README Lab)
    {
      id: 's10-slide-07',
      sessionNumber: 10,
      slideNumber: 16,
      totalSlides: 16,
      type: 'challenge',
      title: { ar: 'تحدي الطلاب: فحص الأمان وتوثيق README لمشروعك', en: 'Student Challenge: Security Audit & Project README' },
      estimatedMinutes: 8,
      teachingGoal: { ar: 'قيام كل طالب بتوليد ملف README احترافي وإجراء فحص أمني لكود مشروعه.', en: 'Every student runs a security scan and authors an executive README for their capstone.' },
      speakerNotes: { ar: 'أطلق مؤقت الـ 5 دقائق. اطلب منهم إرسال برومبت المراجعة الأمنية وتوليد وثيقة README تشرح المشروع وكيفية تشغيله.', en: 'Start 5-minute timer. Instruct students to run adversarial review and draft their project README.' },
      payload: {
        type: 'challenge',
        data: {
          mission: {
            ar: 'إجراء فحص أمني معارض لكود مشروعك وتوليد ملف توثيق README.md احترافي.',
            en: 'Execute an adversarial security audit and author a comprehensive README.md specification.'
          },
          durationMinutes: 5,
          objective: {
            ar: 'تحويل مشروعك إلى منتج برمجي موثق ومحصن أمنياً يثير إعجاب أي مهندس أو عميل يفتحه.',
            en: 'Transform your repo into a hardened, self-documenting asset commanding client respect.'
          },
          instructions: [
            { ar: 'أرسل كود مكوناتك الرئيسية لبرومبت المراجعة الأمنية المعارضة', en: 'Submit your core components to the adversarial security review prompt' },
            { ar: 'تحقق من عدم وجود أي ثغرات أو نصوص غير معقمة في الأكواد', en: 'Confirm zero unescaped inputs or phantom package dependencies' },
            { ar: 'أنشئ ملف README.md يوضح اسم المشروع، التقنيات، وكيفية تشغيل الكود', en: 'Create README.md detailing project vision, architecture, and run commands' },
            { ar: 'شارك جملة التوثيق الافتتاحية لمشروعك في شات Zoom', en: 'Share your project opening README tagline in Zoom chat' },
          ],
          starterPromptOrCode: '# [Project Name]\n\nProduction-ready web platform built with Next.js 16, React 19, and Tailwind CSS.',
          deliverable: {
            ar: 'ملف README.md احترافي مع تقرير فحص أمني يؤكد جاهزية المشروع.',
            en: 'Professional README.md specification and verified clean security audit report.'
          },
        },
      },
    },

    // Slide 8: Project (Milestone 10)
    {
      id: 's10-slide-08',
      sessionNumber: 10,
      slideNumber: 16,
      totalSlides: 16,
      type: 'project',
      title: { ar: 'محطة المشروع: الحصانة الهندسية والتوثيق المكتمل', en: 'Project Milestone: Hardened & Documented Repository' },
      estimatedMinutes: 4,
      teachingGoal: { ar: 'تثبيت أن المشروع البرمجي قد اكتمل هندسياً وأمنياً بنسبة 100%.', en: 'Confirm capstone codebase is now 100% architecturally hardened, tested, and documented.' },
      speakerNotes: { ar: 'هنئ الطلاب: "مشروعك الآن ليس مجرد واجهة؛ إنه منتج برمجي مكتمل المعالم، مفحوص أمنياً، وموثق بأعلى معايير الصناعة!".', en: 'Congratulate learners: "Your codebase is now an enterprise-grade asset: tested, documented, and secure!"' },
      payload: {
        type: 'project',
        data: {
          phaseName: { ar: 'المرحلة 10: التحصين الأمني والتوثيق والاختبار', en: 'Phase 10: Enterprise Security, Testing & Documentation' },
          stepNumber: '10',
          whatWeBuildNow: {
            ar: 'اكتمال الفحص الأمني الشامل، كتابة ملف التوثيق README، والتأكد من سلامة المعمارية البرمجية.',
            en: 'Complete exhaustive security audit, author README documentation, and verify architectural integrity.',
          },
          deliverables: [
            { ar: 'تقرير فحص أمني يؤكد خلو المشروع من الثغرات وحزم الشبح', en: 'Clean security audit report confirming zero vulnerable dependencies' },
            { ar: 'ملف README.md احترافي يشرح معمارية المشروع وكيفية تشغيله', en: 'Production-grade README.md explaining architecture and setup' },
            { ar: 'مستودع كود نظيف وخالٍ من الأخطاء والتحذيرات جاهز للنشر النهائي', en: 'Pristine repository tree ready for production cloud deployment' },
          ],
          connectionToFinalProject: {
            ar: 'في الجلسة 11 سننتقل إلى تحويل هذه المهارة البرمجية إلى خدمة تجارية: التسويق، البورتفوليو، وجلب العملاء.',
            en: 'In Session 11 we pivot to market monetization: portfolio building, proposals, and landing clients.',
          },
        },
      },
    },

    // Slide 9: Takeaway
    {
      id: 's10-slide-09',
      sessionNumber: 10,
      slideNumber: 16,
      totalSlides: 16,
      type: 'takeaway',
      title: { ar: 'الخلاصة الهندسية للجلسة العاشرة', en: 'Session 10 Engineering Takeaways' },
      estimatedMinutes: 4,
      teachingGoal: { ar: 'تثبيت مبدأ المسؤولية الهندسية الصارمة وقاعدة التحقق البشري الدائم.', en: 'Cement engineering accountability and the immutable human validation contract.' },
      speakerNotes: { ar: 'اقرأ النقاط الثلاث. أكد: "أنت كمهندس لست مجرد مستخدم للأداة؛ أنت المراجع النهائي الذي يضمن أمان وسلامة المنتج أمام العميل والعالم".', en: 'Review takeaways: You are the ultimate reviewer guaranteeing safety, uptime, and integrity.' },
      payload: {
        type: 'takeaway',
        data: {
          takeaways: [
            {
              number: '01',
              title: { ar: 'الذكاء الاصطناعي يقترح — والمهندس يعتمد ويتحمل المسؤولية', en: 'AI Proposes — Humans Audit & Own' },
              description: {
                ar: 'لا تنشر كوداً لم تقرأه وتفهم منطقه؛ أنت المسؤول الأول والأخير عن أمان واستقرار موقعك أمام العميل.',
                en: 'Never ship code you have not reviewed; you bear sole accountability for uptime, security, and integrity.',
              },
            },
            {
              number: '02',
              title: { ar: 'التوثيق والاختبارات هما علامة المطور المحترف', en: 'Documentation & Tests Define the Pro' },
              description: {
                ar: 'أي شخص يستطيع توليد كود سريع، لكن المهندس الحقيقي هو الذي يرفق معه وثيقة تشغيل وحالات اختبار تضمن استمراريته.',
                en: 'Anyone can scaffold quick code; true engineers provide documentation and automated tests ensuring longevity.',
              },
            },
            {
              number: '03',
              title: { ar: 'الحذر من حزم الشبح والافتراضات الوردية', en: 'Guard Against Phantom Dependencies' },
              description: {
                ar: 'درب عينك على اكتشاف المكتبات غير الموثوقة أو الأكواد المفرطة في التعقيد، وحافظ على بساطة المشروع.',
                en: 'Train your critical eye to prune unverified packages and over-engineered bloat; simplicity is durability.',
              },
            },
          ],
          coreMotto: {
            ar: 'السرعة دون انضباط هندسي هي دين تقني مؤجل؛ السرعة مع الانضباط هي قمة الاحتراف.',
            en: 'Speed without engineering discipline is deferred technical debt; speed with discipline is pure mastery.',
          },
        },
      },
    },

    // Slide 10: Next
    {
      id: 's10-slide-10',
      sessionNumber: 10,
      slideNumber: 16,
      totalSlides: 16,
      type: 'next',
      title: { ar: 'المحطة القادمة: التسويق وجلب العملاء — تحويل المهارة لخدمة', en: 'Next Waypoint: Marketing & Clients — Monetizing Skill' },
      estimatedMinutes: 2,
      teachingGoal: { ar: 'تشويق الطلاب للجلسة 11 لدخول الجانب التجاري والمهني وصناعة البورتفوليو.', en: 'Build intense anticipation for Session 11: business acquisition, portfolios, and freelancing.' },
      speakerNotes: { ar: 'اختم الجلسة: "في الجلسة 11 سنتعلم كيف تحول هذا الكود الرائع إلى خدمة تجارية: كيف تبني بورتفوليو، تصيغ العروض، وتجلب أول عميل!".', en: 'Closing: "In Session 11 we learn how to commercialize your skill: packaging portfolios, proposals, and landing clients!"' },
      payload: {
        type: 'next',
        data: {
          nextSessionNumber: '11',
          nextSessionTitle: {
            ar: 'التسويق وجلب العملاء: تحويل مهارة صناعة الويب إلى خدمة مربحة',
            en: 'Marketing & Client Acquisition: Turning Web Creation into a Marketable Business',
          },
          teaser: {
            ar: 'كيف تبني هويتك المهنية (Personal Brand)، توثق مشروعك كدراسة حالة (Case Study)، تصيغ عرض خدمات مقنع (Service Offer)، وتتواصل مع العملاء باحترافية.',
            en: 'Discover how to craft your personal brand, package your capstone into a compelling case study, formulate service offers, and conduct professional client outreach.',
          },
          preparationHint: {
            ar: 'فكر في القطاع التجاري الذي تريد التخصص فيه لخدمة عملائه (مطاعم، عيادات، متاجر، شركات ناشئة).',
            en: 'Consider the commercial niche you wish to specialize in (dining, healthcare, e-commerce, startups).',
          },
        },
      },
    },
  ],
};
