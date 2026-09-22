import { PresentationSession } from '@/types';

export const SESSION_11: PresentationSession = {
  id: 'session-11',
  number: 11,
  slug: 'session-11',
  title: {
    ar: 'التسويق وجلب العملاء: تحويل المهارة إلى خدمة تجارية',
    en: 'Marketing & Client Acquisition: Transforming Skill into Marketable Service',
  },
  subtitle: {
    ar: 'كيف تنتقل من مجرد مطور تقني إلى مقدم خدمة ذي قيمة عالية يملك بورتفوليو مقنعاً ويجلب عملاء حقيقيين؟',
    en: 'Transitioning from code builder to high-value service provider commanding premium retainers and landing real clients',
  },
  durationMinutes: 90,
  goal: {
    ar: 'تمكين الطالب من بناء معرض أعماله (Portfolio)، صياغة عروض خدمات احترافية (Value Proposition)، وإتقان مسار التواصل مع العملاء وصياغة عروض الأسعار (Proposals).',
    en: 'Master personal branding, packaging projects into high-converting case studies, crafting clear service offers, and running disciplined client outreach.',
  },
  prerequisites: [
    { ar: 'إكمال الجلسة 10 وامتلاك مشروع تقني متكامل ومفحوص أمنياً', en: 'Completion of Session 10 with verified capstone project' },
  ],
  objectives: [
    { ar: 'فهم مسار اكتساب العملاء الواقعي (The Client Acquisition Pipeline) دون أوهام أو وعود كاذبة', en: 'Understand the realistic client acquisition pipeline: Skill → Case Study → Offer → Outreach → Retainer' },
    { ar: 'تحويل مشروع التخرج إلى دراسة حالة تجارية مقنعة (Case Study) تشرح المشكلة والحل والنتيجة', en: 'Package capstone project into a high-trust commercial case study detailing problem, architecture, and business outcome' },
    { ar: 'صياغة عرض قيمة فريد (Value Proposition) موجه لقطاع تجاري محدد (Niche Targeting)', en: 'Formulate a distinct niche value proposition speaking directly to commercial client pain points' },
    { ar: 'إتقان صياغة العروض الفنية والمالية (Proposals) وتحديد الأسعار والتواصل المهني مع العميل', en: 'Master professional client proposals, value-based pricing concepts, and communication cadence' },
  ],
  timeline: [
    { timeRange: '00:00 – 00:10', durationMinutes: 10, label: { ar: 'مقدمة: كيف ينظر العميل وصاحب العمل إلى خدمات الويب اليوم؟', en: 'How clients and businesses perceive web services today' }, type: 'context' },
    { timeRange: '00:10 – 00:25', durationMinutes: 15, label: { ar: 'مسار العميل: SKILL ← PROJECT ← CASE STUDY ← OFFER ← CLIENT', en: 'The Client Pipeline: Skill to Testimonial' }, type: 'concept' },
    { timeRange: '00:25 – 00:45', durationMinutes: 20, label: { ar: 'تطبيق حي: صياغة دراسة حالة (Case Study) احترافية لمشروع المطعم', en: 'Live Demo: Crafting a High-Trust Restaurant Case Study' }, type: 'demo' },
    { timeRange: '00:45 – 01:00', durationMinutes: 15, label: { ar: 'صياغة العرض الفني والمالي (The Professional Proposal) والتسعير', en: 'Crafting Winning Proposals & Value-Based Pricing' }, type: 'concept' },
    { timeRange: '01:00 – 01:20', durationMinutes: 20, label: { ar: 'تحدي الطلاب: كتابة رسالة تواصل بارد (Cold Outreach) وعرض خدمة', en: 'Student Challenge: Author Targeted Client Outreach Spec' }, type: 'practice' },
    { timeRange: '01:20 – 01:25', durationMinutes: 5, label: { ar: 'نقد وتحسين رسائل الطلاب في الشات', en: 'Class critique of student outreach messaging' }, type: 'review' },
    { timeRange: '01:25 – 01:30', durationMinutes: 5, label: { ar: 'الخلاصة والتجهيز لجلسة التخرج والعرض الختامي (Session 12)', en: 'Takeaways & Prep for Final Showcase (Session 12)' }, type: 'takeaway' },
  ],
  projectMilestone: {
    ar: 'توثيق مشروع التخرج كدراسة حالة حقيقية وصياغة صفحة العرض التجاري في معرض الأعمال.',
    en: 'Document capstone project as an authoritative commercial case study and author client offer page.',
  },
  aiRole: {
    ar: 'مساعد تسويقي يصيغ مسودات العروض الفنية (Proposals) ورسائل التواصل ويحلل المنافسين في السوق.',
    en: 'Commercial strategist drafting compelling proposal letters, outreach messaging, and competitor market audits.',
  },
  marketConnection: {
    ar: 'القدرة على إقناع العميل وتوضيح القيمة التجارية للموقع تحول المطور من ساعٍ وراء الصفقات إلى مستشار مرغوب فيه.',
    en: 'Communicating business value and ROI transforms a developer from a cheap commodity into a trusted consultant.',
  },
  startScreen: {
    badge: 'SESSION 11 / 12 • BUSINESS & CLIENTS',
    headline: {
      ar: 'التسويق وجلب العملاء: كيف تحول مهاراتك البرمجية إلى عمل حر مربح؟',
      en: 'Marketing & Client Acquisition: Commercializing Your Web Creation Craft',
    },
    description: {
      ar: 'تعلم أسرار العمل الحر واستقطاب العملاء: صياغة دراسات الحالة، بناء الهوية المهنية، وكتابة العروض المقنعة دون وعود وهمية.',
      en: 'Master freelancing and client acquisition: authoring case studies, personal branding, and closing deals with professional realism.',
    },
    sessionGoal: {
      ar: 'تحويل مشروع تخرجك إلى دراسة حالة تجارية وصياغة رسالة تواصل وعرض سعر احترافي.',
      en: 'Package your capstone into a commercial case study and formulate a bespoke client proposal.',
    },
  },
  endScreen: {
    headline: {
      ar: 'مبارك! أصبحت الآن تملك الرؤية التجارية والأدوات العملية لدخول السوق',
      en: 'Congratulations! You Now Command the Business Strategy to Win Real Clients',
    },
    keyRecap: [
      {
        ar: 'العميل لا يشتري لغات برمجة، بل يستثمر في حل لمشكلة تزيد مبيعاته أو مصداقيته.',
        en: 'Clients never buy code; they invest in solutions that expand revenue, credibility, and operational velocity.',
      },
      {
        ar: 'دراسة الحالة (Case Study) هي أقوى أداة إقناع تملكها لأنها تثبت قدرتك على الإنجاز بالأرقام.',
        en: 'A documented case study is your supreme sales asset, validating capability with concrete metrics.',
      },
      {
        ar: 'التسويق الناجح هو مسار مستمر من بناء العلاقات والتواصل المهني الصادق والمستمر.',
        en: 'Sustainable client acquisition is a continuous discipline of value delivery and transparent relationships.',
      },
    ],
    nextSessionNumber: '12',
    nextSessionTitle: {
      ar: 'المشروع النهائي: من الفكرة إلى الإطلاق الكامل والعرض التقديمي',
      en: 'Final Project Capstone: From Idea to Full Production Launch & Showcase',
    },
  },
  slides: [
    // Slide 1: Title
    {
      id: 's11-slide-01',
      sessionNumber: 11,
      slideNumber: 1,
      totalSlides: 16,
      type: 'title',
      title: { ar: 'التسويق وجلب العملاء', en: 'Marketing & Clients' },
      estimatedMinutes: 2,
      teachingGoal: { ar: 'افتتاح الجلسة وربط المهارات البرمجية بالواقع الاقتصادي والتجاري.', en: 'Open session: bridging technical mastery into economic client engagement.' },
      speakerNotes: { ar: 'رحب بالطلاب: "اليوم ننتقل من مرحلة كيف نبني، إلى مرحلة كيف نستفيد ونقدم هذه القيمة للعالم والشركات والعملاء!".', en: 'Welcome learners: "Today we pivot from how we build to how we monetize and deliver real client value!"' },
      payload: {
        type: 'title',
        data: {
          sessionNumber: '11',
          kicker: { ar: 'الجانب التجاري والمهني', en: 'Commercial Acumen & Monetization' },
          headline: { ar: 'MARKETING & GETTING CLIENTS', en: 'MARKETING & GETTING CLIENTS' },
          subheadline: { ar: 'بناء الهوية المهنية، صياغة دراسات الحالة، واستقطاب العملاء باحترافية', en: 'Personal branding, authoritative case studies, and landing high-trust client retainers' },
          totalSessions: '12',
          durationMinutes: 90,
          tags: ['Personal Brand', 'Case Studies', 'Value Proposition', 'Client Proposals', 'Freelancing'],
        },
      },
    },

    // Slide 2: Context
    {
      id: 's11-slide-02',
      sessionNumber: 11,
      slideNumber: 2,
      totalSlides: 16,
      type: 'context',
      title: { ar: 'الحقيقة الواقعية: كيف يختار العميل مطور موقعه؟', en: 'The Realistic Client Decision Matrix' },
      subtitle: { ar: 'لماذا يفوز مطور متوسط بعقود ممتازة بينما يجلس مبرمج عبقري بلا عملاء؟', en: 'Why an average communicator wins deals while a brilliant coder remains clientless' },
      estimatedMinutes: 4,
      teachingGoal: { ar: 'إيضاح أهمية مهارات التواصل، وفهم مشكلة العميل، وبناء الثقة التجارية.', en: 'Expose the decisive role of communication, empathy, and commercial trust over raw syntax.' },
      speakerNotes: { ar: 'أكد بصراحة: العميل لا يعرف ما إذا كان الكود مكتوباً بـ Next.js أو بـ PHP؛ العميل يختار من يفهم أهدافه، يتواصل بوضوح، ويلتزم بالمواعيد.', en: 'Be honest: clients rarely inspect framework syntax; they hire creators who listen, articulate value, and deliver on time.' },
      payload: {
        type: 'context',
        data: {
          industryShift: {
            ar: 'سوق العمل اليوم مليء بالمطورين القادرين على توليد الأكواد، لكنه يفتقر بشدة للشركاء الرقميين القادرين على فهم بيئة الأعمال.',
            en: 'The market is saturated with prompt typists, but starving for strategic partners who understand business ROI.',
          },
          realWorldProblem: {
            ar: 'معظم المطورين يتحدثون مع العملاء بمصطلحات تقنية معقدة (APIs, Server Rendering) تفقد العميل اهتمامه وثقته.',
            en: 'Most developers alienate clients by drowning conversations in technical jargon instead of business outcomes.',
          },
          whyItMatters: {
            ar: 'عندما تتعلم كيف تتحدث بلغة القيمة (سرعة التحميل = مبيعات أكثر، تجربة هاتف ممتازة = زبائن أكثر)، تصبح أنت الخيار الأول للعميل دون منازع.',
            en: 'When speaking the language of business value (faster speeds = higher conversions), you become the indisputable top pick.',
          },
        },
      },
    },

    // Slide 3: Visual (The Client Acquisition Pipeline)
    {
      id: 's11-slide-03',
      sessionNumber: 11,
      slideNumber: 3,
      totalSlides: 16,
      type: 'visual',
      title: { ar: 'مسار العميل الواقعي (The Client Acquisition Pipeline)', en: 'The Client Acquisition Pipeline' },
      subtitle: { ar: 'الخطوات المنطقية العشر لتحويل المهارة البرمجية إلى عميل دائم وتوصيات مستمرة', en: 'The 10 logical stages converting raw programming skill into recurring client retainers' },
      estimatedMinutes: 5,
      teachingGoal: { ar: 'شرح المسار المتكامل خطوة بخطوة وإثبات أنه مسار منهجي متكرر.', en: 'Map the complete systematic client pipeline from skill mastery to client testimonials.' },
      speakerNotes: { ar: 'استعرض السلسلة: مهارة -> مشروع -> دراسة حالة -> معرض أعمال -> عرض قيمة -> تواصل مدروس -> عميل -> تسليم رائع -> شهادة ثقة -> عميل قادم.', en: 'Walk through: Skill -> Project -> Case Study -> Portfolio -> Offer -> Outreach -> Client -> Delivery -> Testimonial -> Next Deal.' },
      payload: {
        type: 'visual',
        data: {
          caption: { ar: 'لا نعد بنتائج سريعة وهمية؛ هذا مسار هندسي وتجاري حقيقي يثبت نجاحه بالاستمرار.', en: 'Zero get-rich-quick claims; this is an authentic, repeatable commercial pipeline built on rigor.' },
          diagramType: 'pipeline',
          nodes: [
            { id: 'm1', stepNumber: '01', title: { ar: 'المهارة والمشروع', en: 'Skill & Project' }, badge: 'Foundation' },
            { id: 'm2', stepNumber: '02', title: { ar: 'دراسة الحالة (Case Study)', en: 'Case Study' }, badge: 'Proof' },
            { id: 'm3', stepNumber: '03', title: { ar: 'بورتفوليو وعرض القيمة', en: 'Portfolio & Offer' }, badge: 'Asset' },
            { id: 'm4', stepNumber: '04', title: { ar: 'التواصل والاتصال', en: 'Outreach & Pitch' }, badge: 'Action' },
            { id: 'm5', stepNumber: '05', title: { ar: 'إغلاق الصفقة والتسليم', en: 'Close & Ship' }, badge: 'Delivery' },
            { id: 'm6', stepNumber: '06', title: { ar: 'شهادة العميل والفرصة القادمة', en: 'Testimonial & Scale' }, badge: 'Flywheel' },
          ],
        },
      },
    },

    // Slide 4: Concept (The Case Study Framework)
    {
      id: 's11-slide-04',
      sessionNumber: 11,
      slideNumber: 4,
      totalSlides: 16,
      type: 'concept',
      title: { ar: 'هندسة دراسة الحالة: كيف تشرح مشروعك للعميل؟', en: 'The Case Study Architecture' },
      estimatedMinutes: 5,
      teachingGoal: { ar: 'تعليم الطلاب كيف يقدمون مشاريعهم كحلول لمشاكل حقيقية وليس مجرد لقطات شاشة.', en: 'Teach students to present capstone projects as commercial problem-solution case studies.' },
      speakerNotes: { ar: 'اشرح هيكل دراسة الحالة: 1. المشكلة، 2. الفكرة والتحدي، 3. المعمارية والحل التقني، 4. النتيجة والأثر التجاري.', en: 'Explain the 4-part case study: Problem context, Strategic challenge, Technical solution, Measurable outcome.' },
      payload: {
        type: 'concept',
        data: {
          principle: {
            ar: 'دراسة الحالة المحترفة تثبت للعميل أنك لست مجرد كاتب أكواد، بل شريك يحل مشاكل الأعمال بالأرقام.',
            en: 'A rigorous case study proves you are not a code typist, but a strategic partner solving business bottlenecks.',
          },
          tagline: { ar: 'PROOF OVER PROMISES', en: 'PROOF OVER PROMISES' },
          explanation: {
            ar: 'بدل أن تضع صورة للموقع وتقول "هذا موقع مطعم بنيته"، اكتب قصة قصيرة واضحة: كان المطعم يعاني من بطء الحجز عبر الهاتف، فبنينا واجهة تفتح في ثانية واحدة وتتيح حجز طاولة في 3 نقرات.',
            en: 'Instead of posting flat screenshots, articulate the business story: The client lost phone bookings; we engineered a 1-second landing page driving instant reservations.',
          },
          bulletPoints: [
            { ar: 'المشكلة وسياق العميل: ما هو التحدي التجاري الذي كان يواجهه النشاط؟', en: 'Client Problem: The specific commercial friction hindering growth' },
            { ar: 'الحل المعماري والتصميم: لماذا اخترنا Next.js و Tailwind وكيف وزعنا الأقسام؟', en: 'Architectural Solution: Why Next.js and how sections were composed' },
            { ar: 'الأثر التجاري القابل للقياس: سرعة تحميل 98% على Lighthouse وسهولة الحجز بالهاتف', en: 'Measurable Impact: 98% Lighthouse score and effortless mobile booking' },
            { ar: 'الدروس المستفادة: ما الذي يجعل هذا المشروع قابلاً للتطبيق في أنشطة تجارية أخرى؟', en: 'Key Takeaways: Why this solution architecture scales to other businesses' },
          ],
          architecturalRule: {
            ar: 'قاعدة التسويق: العميل لا يصدق الوعود النظرية؛ العميل يصدق دراسات الحالة التي يرى فيها نجاحاً مماثلاً.',
            en: 'Marketing Rule: Clients never buy abstract promises; they buy proven case studies mirroring their own goals.',
          },
        },
      },
    },

    // Slide 5: Code (Case Study Markdown Template Artifact)
    {
      id: 's11-slide-05',
      sessionNumber: 11,
      slideNumber: 5,
      totalSlides: 16,
      type: 'code',
      title: { ar: 'قالب دراسة الحالة كأثر بصري (Case Study Template)', en: 'Case Study Structural Template Artifact' },
      estimatedMinutes: 5,
      teachingGoal: { ar: 'عرض هيكل دراسة الحالة النصي الذي يستطيع كل طالب ملؤه لمشروعه.', en: 'Provide the canonical markdown case study template ready to adapt for portfolios.' },
      speakerNotes: { ar: 'استعرض أقسام هذا القالب. اطلب من الطلاب نسخه والاحتفاظ به لكتابة قصة مشروع تخرجهم في الجلسة 12.', en: 'Review the template sections: Background, Challenge, Solution, Tech Stack, Key Metrics.' },
      payload: {
        type: 'code',
        data: {
          language: 'markdown',
          codeSnippet: `# Case Study: Trattoria Roma — Digital Table Reservation Engine

## 1. The Commercial Challenge
Trattoria Roma, an artisan dining room, relied entirely on phone calls for reservations. 
During dinner rush hours, over 40% of booking inquiries went unanswered, causing lost revenue.

## 2. The Architectural Solution
We architected a bespoke Next.js 16 web platform optimized for mobile visitors:
- Instantaneous First Paint (LCP under 1.2 seconds) on 4G networks
- Zero-friction reservation flow completing bookings in 3 clicks
- Curated visual menu with local currency pricing and high-contrast typography

## 3. Technology Stack & Tradeoffs
- Framework: Next.js 16 App Router (Server-side rendered for SEO)
- Styling: Tailwind CSS v4 with custom warm terracotta design tokens
- Accessibility: W3C WCAG 2.1 AA compliant across all interactive controls

## 4. Measurable Results
- Google Lighthouse Performance: 99 / 100
- Mobile First Input Delay: 14ms
- Over 65 online table reservations registered in the initial launch weekend`,
          what: { ar: 'قالب دراسة حالة احترافي يوثق التحدي، المعمارية الهندسية، والنتائج بالأرقام.', en: 'Production case study template documenting challenge, technical architecture, and results.' },
          why: { ar: 'هذا القالب يرفع قيمتك من مبرمج يطلب وظيفة إلى استشاري موثوق يقدم دراسات أعمال متكاملة.', en: 'This template positions you as an authoritative consultant commanding respect and premium retainers.' },
          when: { ar: 'يُكتب بعد اكتمال كل مشروع تجاري ويوضع في بورتفوليو أعمالك ولينكدإن.', en: 'Authored upon completing each capstone project and published on your portfolio and LinkedIn.' },
        },
      },
    },

    // Slide 6: AI (The Client Proposal & Outreach Prompt)
    {
      id: 's11-slide-06',
      sessionNumber: 11,
      slideNumber: 6,
      totalSlides: 16,
      type: 'ai',
      title: { ar: 'برومبت صياغة العرض الفني والمالي (Client Proposal Prompt)', en: 'Client Proposal & Outreach Prompt' },
      subtitle: { ar: 'كيف تستخدم الذكاء الاصطناعي لكتابة عروض أسعار مقنعة ورسائل تواصل مهنية خالية من الركاكة؟', en: 'Directing AI to craft persuasive commercial proposals, deliverables, and respectful outreach' },
      estimatedMinutes: 6,
      teachingGoal: { ar: 'تدريب الطلاب على صياغة عروض الأسعار المقنعة الموجهة لقيمة العميل.', en: 'Equip students with a prompt generating tailored commercial client proposals.' },
      speakerNotes: { ar: 'وضح كيف يحول هذا البرومبت تفاصيل المشروع إلى عرض احترافي يشمل: النطاق، المخرجات، الميزانية، والجدول الزمني.', en: 'Explain how this prompt synthesizes scope, deliverables, timeline, and value-based pricing tiers.' },
      payload: {
        type: 'ai',
        data: {
          role: 'Senior Digital Agency Director and Expert Client Communications Strategist.',
          context: 'Preparing a high-trust web project proposal for a local business client.',
          task: `Draft a professional, respectful commercial web development proposal based on these parameters:
- Client Business: [Insert Business Name & Sector]
- Problem: Outdated, non-responsive web presence hurting customer inquiries
- Our Proposed Solution: Custom Next.js 16 high-speed landing page with mobile booking
- Deliverables: UI Design, Semantic Markup, SEO Configuration, Hosting Setup
- Timeline: 10 working days`,
          constraints: 'Avoid technical jargon. Focus on business value, clarity, and transparent expectations. Propose 2 pricing tiers: Standard vs Full-Service.',
          output: `Return:
1. Executive Summary & Problem Understanding
2. Detailed Scope of Work & Deliverables
3. 10-Day Implementation Milestones
4. Commercial Investment Tiers (Transparent Pricing)
5. Next Steps to Initiate the Project`,
          acceptanceCriteria: [
            'Zero confusing developer jargon',
            'Clear ROI explanation for the client',
            'Transparent milestone breakdown with zero hidden fees',
          ],
          iterationTip: {
            ar: 'خصص تفاصيل العرض دائماً بناءً على اسم صاحب العمل ونشاطه لتكون الرسالة شخصية ومخلصة.',
            en: 'Always tailor the proposal with the specific business name and pain point for genuine connection.'
          },
        },
      },
    },

    // Slide 7: Challenge (Student Outreach Lab)
    {
      id: 's11-slide-07',
      sessionNumber: 11,
      slideNumber: 16,
      totalSlides: 16,
      type: 'challenge',
      title: { ar: 'تحدي الطلاب: صياغة رسالة تواصل بارد احترافية', en: 'Student Challenge: Author a High-Converting Outreach Message' },
      estimatedMinutes: 8,
      teachingGoal: { ar: 'كتابة كل طالب لرسالة تواصل مهنية مقتضبة تعرض خدمة حقيقية لنشاط تجاري.', en: 'Every student drafts a respectful, value-first client outreach pitch in their editor.' },
      speakerNotes: { ar: 'أطلق مؤقت الـ 5 دقائق. اطلب منهم كتابة رسالة من 4 أسطر: تحية مهنية، ملاحظة مشكلة في موقع العميل، اقتراح حل محدد، ودعوة لمكالمة سريعة.', en: 'Launch 5-minute timer. Have students craft a 4-line value-first outreach message.' },
      payload: {
        type: 'challenge',
        data: {
          mission: {
            ar: 'صياغة رسالة تواصل مهني مقتضبة ومحترمة (Outreach Pitch) تعرض خدمة تطوير ويب لنشاط تجاري حقيقي.',
            en: 'Draft a concise, value-first client outreach message proposing a website enhancement.'
          },
          durationMinutes: 5,
          objective: {
            ar: 'كسر حاجز الخوف من مخاطبة العملاء وتعلم أسلوب العرض المعتمد على القيمة (Value-First).',
            en: 'Overcome client outreach hesitation and master respectful, value-centered communication.'
          },
          instructions: [
            { ar: 'اختر نشاطاً تجارياً حقيقياً في مدينتك (مثال: عيادة أو مطعم ذو موقع قديم أو بطيء)', en: 'Pick a real local business in your area with an outdated or sluggish site' },
            { ar: 'ابدأ بالتحية المهنية واذكر نقطة إعجاب حقيقية بخدماتهم أو طعامهم', en: 'Open with genuine appreciation for their service or cuisine' },
            { ar: 'اذكر باحترام ملاحظة تقنية واحدة تؤثر على مبيعاتهم (مثال: صعوبة الحجز بالهاتف)', en: 'Politely highlight one technical friction point costing them bookings' },
            { ar: 'اعرض رابط دراسة حالة مشروعك كنموذج عملي واقترح مكالمة قصيرة لـ 10 دقائق', en: 'Reference your capstone case study link and propose a brief 10-minute discovery call' },
          ],
          starterPromptOrCode: 'Hello [Name], I noticed your restaurant menu takes 6s to load on phones. I built a prototype loading in 1s...',
          deliverable: {
            ar: 'مسودة رسالة تواصل مهنية جاهزة للإرسال لأول 5 عملاء محتملين.',
            en: 'Polished client outreach message ready for real-world distribution to prospective businesses.'
          },
        },
      },
    },

    // Slide 8: Project (Milestone 11)
    {
      id: 's11-slide-08',
      sessionNumber: 11,
      slideNumber: 16,
      totalSlides: 16,
      type: 'project',
      title: { ar: 'محطة المشروع: حزمة التسويق ودراسة الحالة التجارية', en: 'Project Milestone: Commercial Case Study & Offer' },
      estimatedMinutes: 4,
      teachingGoal: { ar: 'تثبيت اكتمال دراسة الحالة وحزمة العرض التجاري لمشروع التخرج.', en: 'Confirm capstone project is now fully packaged with a commercial case study and proposal.' },
      speakerNotes: { ar: 'هنئ الطلاب: "مشروعك الآن يملك وجهاً تجارياً مقنعاً؛ ليس فقط كوداً ممتازاً، بل قصة نجاح وعرض خدمة واضح يفتح لك أبواب التعاقد!".', en: 'Congratulate learners: "Your repo now carries commercial authority: a living case study ready for client handoffs!"' },
      payload: {
        type: 'project',
        data: {
          phaseName: { ar: 'المرحلة 11: التوثيق التجاري ودراسات الحالة', en: 'Phase 11: Commercial Packaging & Case Studies' },
          stepNumber: '11',
          whatWeBuildNow: {
            ar: 'اكتمال صياغة دراسة الحالة وعرض الخدمات ورسائل استقطاب العملاء لمشروع التخرج.',
            en: 'Complete commercial case study specification and client outreach documentation.',
          },
          deliverables: [
            { ar: 'وثيقة دراسة حالة متكاملة (Case Study) لمشروع التخرج', en: 'Comprehensive commercial case study documenting ROI' },
            { ar: 'عرض خدمات فني ومالي محدد النطاق والأسعار', en: 'Packaged commercial service offer with transparent pricing' },
            { ar: 'رسائل تواصل احترافية جاهزة لبدء أولى محادثات العمل الحر', en: 'Battle-tested outreach scripts ready for client acquisition' },
          ],
          connectionToFinalProject: {
            ar: 'في الجلسة 12 (الجلسة الختامية)، ستعرض مشروعك بالكامل من الفكرة وحتى التسويق في عرض تخرج تفاعلي مباشر!',
            en: 'In Session 12 (our grand finale), you will present your complete end-to-end journey in the live graduation showcase!',
          },
        },
      },
    },

    // Slide 9: Takeaway
    {
      id: 's11-slide-09',
      sessionNumber: 11,
      slideNumber: 16,
      totalSlides: 16,
      type: 'takeaway',
      title: { ar: 'الخلاصة الهندسية للجلسة الحادية عشرة', en: 'Session 11 Commercial Takeaways' },
      estimatedMinutes: 4,
      teachingGoal: { ar: 'تثبيت مبادئ الاحترافية التجارية والتركيز على حل مشاكل العميل.', en: 'Cement business professionalism and client-centered value delivery.' },
      speakerNotes: { ar: 'اقرأ النقاط الثلاث. أكد: "أنت لست بائعاً متجولاً؛ أنت مهندس وشريك حلول رقمية يساعد الشركات على النجاح والنمو".', en: 'Review takeaways: You are not a peddler; you are a strategic digital solutions partner.' },
      payload: {
        type: 'takeaway',
        data: {
          takeaways: [
            {
              number: '01',
              title: { ar: 'تحدث بلغة القيمة لا بلغة التقنيات', en: 'Speak Value, Not Frameworks' },
              description: {
                ar: 'العميل يهتم بالمبيعات والسرعة والمصداقية وسهولة تجربة زبائنه؛ اجعل كل محادثاتك تتمحور حول أهداف عمله.',
                en: 'Clients care about conversions, speed, and customer delight; frame every conversation around business ROI.',
              },
            },
            {
              number: '02',
              title: { ar: 'دراسة الحالة هي شهادة خبرتك الحقيقية', en: 'Case Studies are Your True Credentials' },
              description: {
                ar: 'وثق مشاكلك وحلولك وأرقام أدائك في دراسة حالة نظيفة؛ هي الأداة التي تقنع العميل وتبرر أسعارك المرتفعة.',
                en: 'Document your architectural challenges and performance scores; case studies justify premium client pricing.',
              },
            },
            {
              number: '03',
              title: { ar: 'الاستمرارية في التواصل تصنع الفرص', en: 'Consistent Outreach Builds the Pipeline' },
              description: {
                ar: 'خصص وقتاً أسبوعياً للتواصل المهني المحترم مع أصحاب الأعمال؛ الصفقات الكبرى تأتي من العلاقات المبنية على الثقة.',
                en: 'Dedicate weekly focus to respectful outreach; premier client contracts stem from long-term trust relationships.',
              },
            },
          ],
          coreMotto: {
            ar: 'صانع الويب الناجح يتقن فن البرمجة بيده، ويتقن فن بناء الثقة مع عملائه بعقله.',
            en: 'The masterful Web Creator commands code with their hands, and builds unshakable client trust with their mind.',
          },
        },
      },
    },

    // Slide 10: Next
    {
      id: 's11-slide-10',
      sessionNumber: 11,
      slideNumber: 16,
      totalSlides: 16,
      type: 'next',
      title: { ar: 'المحطة الختامية الكبرى: جلسة التخرج والمشروع النهائي', en: 'The Grand Finale: Capstone Project Showcase (Session 12)' },
      estimatedMinutes: 2,
      teachingGoal: { ar: 'تهيئة وإشعال حماس الطلاب لحفل التخرج وعرض مشاريعهم في الجلسة 12.', en: 'Ignite student anticipation for Session 12: live graduation presentations of their flagship projects.' },
      speakerNotes: { ar: 'اختم بحماس عظيم: "في الجلسة 12 سنحتفل معاً بإتمام الرحلة كاملة! كل طالب سيعرض مشروعه الحي أمام الجميع: الفكرة، التصميم، الكود، الـ SEO، والتسويق!".', en: 'Closing: "In Session 12 we celebrate the complete journey! Every creator presents their live project to the entire class!"' },
      payload: {
        type: 'next',
        data: {
          nextSessionNumber: '12',
          nextSessionTitle: {
            ar: 'المشروع النهائي: من الفكرة إلى الإطلاق الكامل والعرض التقديمي',
            en: 'Final Project Capstone: From Idea to Full Production Launch & Showcase',
          },
          teaser: {
            ar: 'تتويج الـ 18 ساعة تدريبية: استعراض المسار الكامل (IDEA → PROMPT → DESIGN → SETUP → AUDIT → HTML/CSS → JS → REACT → NEXT.JS → SEO → SHIP) وعرض مشاريع الطلاب المكتملة.',
            en: 'The 18-hour culmination: showcasing the end-to-end journey from raw idea to live production release and graduation presentations.',
          },
          preparationHint: {
            ar: 'راجع كود مشروعك، تأكد من تشغيل خادم التطوير، وجهز النقاط الـ 10 لعرض مشروعك الختامي.',
            en: 'Review your codebase, confirm local server runs cleanly, and prepare your 10-point showcase walk.',
          },
        },
      },
    },
  ],
};
