import { PresentationSession } from '@/types';

export const SESSION_02: PresentationSession = {
  id: 'session-02',
  number: 2,
  slug: 'session-02',
  title: {
    ar: 'هندسة البرومبت لتطوير الويب: صياغة التعليمات البرمجية الدقيقة',
    en: 'Prompt Engineering for Web Development: Rigid Technical Schemas',
  },
  subtitle: {
    ar: 'كيف تنتقل من البرومبت الساذج ("Build me a website") إلى إطار العمل الهندسي المتكامل؟',
    en: 'Transitioning from naive prompting to rigorous 8-factor technical prompt architecture',
  },
  durationMinutes: 90,
  goal: {
    ar: 'تمكين الطالب من صياغة برومبت احترافي محكم يوجه الذكاء الاصطناعي لتوليد هياكل واجهات برمجية نظيفة وخالية من الهلوسة.',
    en: 'Master rigid prompt schemas that guide AI to scaffold clean, hallucination-free web interfaces.',
  },
  prerequisites: [
    {
      ar: 'إكمال الجلسة 01 وتحديد فكرة النشاط التجاري للمشروع',
      en: 'Completion of Session 01 and chosen project domain',
    },
  ],
  objectives: [
    {
      ar: 'فهم عيوب البرومبت العفوي وأسباب توليد الذكاء الاصطناعي لكود غير قابل للاستخدام',
      en: 'Diagnose failure modes in naive prompts that lead to generic, bloated code',
    },
    {
      ar: 'إتقان إطار العمل الهندسي المكون من 8 عناصر لصياغة البرومبت التقني',
      en: 'Master the 8-part technical prompt architecture (Role, Context, Goal, Requirements, Constraints, Input, Output, Acceptance)',
    },
    {
      ar: 'التطبيق العملي لتحويل برومبت ضعيف إلى برومبت احترافي لصفحة هبوط حقيقية',
      en: 'Iterate hands-on from Bad Prompt to Professional Production-Ready Prompt',
    },
    {
      ar: 'فحص مخرجات الذكاء الاصطناعي والتحقق من مطابقتها لمعايير الجودة الهندسية',
      en: 'Audit generated AI output against technical acceptance criteria',
    },
  ],
  timeline: [
    {
      timeRange: '00:00 – 00:10',
      durationMinutes: 10,
      label: { ar: 'مراجعة أفكار مشاريع الطلاب وسؤال التحدي الأولي', en: 'Review project ideas & opening challenge' },
      type: 'context',
    },
    {
      timeRange: '00:10 – 00:25',
      durationMinutes: 15,
      label: { ar: 'تشريح البرومبت السيئ مقابل البرومبت المحترف: الفروق المعمارية', en: 'Deconstructing Bad vs Pro Prompts' },
      type: 'concept',
    },
    {
      timeRange: '00:25 – 00:45',
      durationMinutes: 20,
      label: { ar: 'إطار الـ 8 عناصر: ROLE, CONTEXT, GOAL, CONSTRAINTS, OUTPUT', en: 'The 8-Factor Prompt Framework in Action' },
      type: 'demo',
    },
    {
      timeRange: '00:45 – 01:00',
      durationMinutes: 15,
      label: { ar: 'تطبيق حي: صياغة برومبت لمشروع مطعم وفحص النتيجة', en: 'Live Demo: Restaurant Prompt & Output Audit' },
      type: 'ai',
    },
    {
      timeRange: '01:00 – 01:20',
      durationMinutes: 20,
      label: { ar: 'تحدي الطلاب: صياغة برومبت احترافي لصفحة هبوط مشروعهم', en: 'Student Challenge: Crafting Homepage Prompt' },
      type: 'practice',
    },
    {
      timeRange: '01:20 – 01:25',
      durationMinutes: 5,
      label: { ar: 'تقييم نماذج من برومبتات الطلاب في الشات', en: 'Class Critique & Prompt Refinement' },
      type: 'review',
    },
    {
      timeRange: '01:25 – 01:30',
      durationMinutes: 5,
      label: { ar: 'الخلاصة والتجهيز لجلسة Google Stitch (Session 03)', en: 'Takeaways & Prep for Google Stitch' },
      type: 'takeaway',
    },
  ],
  projectMilestone: {
    ar: 'صياغة وثيقة البرومبت التأسيسية لصفحة الهبوط الرئيسية لمشروعك التجاري.',
    en: 'Author the canonical foundational prompt specification for your flagship project homepage.',
  },
  aiRole: {
    ar: 'مفسر ومنفذ للمتطلبات الدقيقة المشروطة بالقيود ومعايير القبول المحددة.',
    en: 'Strict executor of constrained architectural requirements and explicit output schemas.',
  },
  marketConnection: {
    ar: 'تساعد القدرة على توجيه نماذج الذكاء الاصطناعي بدقة على إنتاج كود أوضح وأسهل للمراجعة.',
    en: 'Precise prompt steering helps developers direct models more clearly and review the resulting code.',
  },
  startScreen: {
    badge: 'SESSION 02 / 12 • PROMPT ARCHITECTURE',
    headline: {
      ar: 'هندسة البرومبت: كيف تتحدث مع الذكاء الاصطناعي كمهندس وليس كمستخدم عادي؟',
      en: 'Prompt Engineering: Speaking to AI as a Senior Architect, Not a Casual User',
    },
    description: {
      ar: 'تعلم إطار العمل الصارم لتحويل الأفكار العامة إلى تعليمات فنية دقيقة تنتج أكواداً نظيفة ومعيارية.',
      en: 'Learn the strict 8-factor framework turning fuzzy intents into bulletproof technical instructions.',
    },
    sessionGoal: {
      ar: 'إتقان صياغة البرومبتات الاحترافية القابلة لإعادة الاستخدام في بناء واجهات الويب الحقيقية.',
      en: 'Master reusable, production-grade prompts for scaffolding real-world web interfaces.',
    },
  },
  endScreen: {
    headline: {
      ar: 'مبروك! أصبحت تملك إطار عمل هندسي لصياغة البرومبتات البرمجية',
      en: 'Bravo! You Now Command the Professional Technical Prompt Framework',
    },
    keyRecap: [
      {
        ar: 'البرومبت الاحترافي يحدد الدور والسياق والقيود والمخرجات وصيغة القبول بدقة رياضية.',
        en: 'Professional prompts enforce Role, Context, Constraints, Output schema, and Acceptance criteria.',
      },
      {
        ar: 'تحديد القيود (Constraints) هو ما يمنع الذكاء الاصطناعي من الهلوسة واستخدام حزم قديمة.',
        en: 'Explicit constraints prevent model hallucinations and obsolete dependency drift.',
      },
      {
        ar: 'المراجعة والتحسين التكراري (Iteration) هي جوهر العمل وليست مجرد ضغطة زر واحدة.',
        en: 'Rigorous prompt iteration and output verification are the essence of modern web craftsmanship.',
      },
    ],
    nextSessionNumber: '03',
    nextSessionTitle: {
      ar: 'Google Stitch: تحويل الفكرة المكتوبة إلى تصميم واجهة حقيقي',
      en: 'Google Stitch: Translating Written Ideas into Living UI Prototypes',
    },
  },
  slides: [
    // Slide 1: Title
    {
      id: 's02-slide-01',
      sessionNumber: 2,
      slideNumber: 1,
      totalSlides: 13,
      type: 'title',
      title: { ar: "هندسة البرومبت لتطوير الويب", en: "Prompt Engineering for Web Dev" },
      estimatedMinutes: 2,
      teachingGoal: { ar: 'افتتاح الجلسة وإعلان الانتقال من العشوائية إلى الهندسة.', en: 'Set session tone: engineering precision over random chatting.' },
      speakerNotes: { ar: "نفّذ: اربط الجلسة بالجلسة السابقة: اليوم سنطبق مبدأ \"التفكير قبل البرمجة\" من خلال صياغة أوامر برمجية دقيقة.\nاسأل: ما الهدف الذي تتوقع تحقيقه في جلسة «هندسة البرومبت لتطوير الويب»؟\nتحقق: افتتاح الجلسة وإعلان الانتقال من العشوائية إلى الهندسة.", en: "Cue: Connect to Session 01: today we materialize \"thinking before coding\" via strict prompt schemas.\nAsk: What outcome do you expect from “Prompt Engineering for Web Dev”?\nCheck: Set session tone: engineering precision over random chatting." },
      payload: {
        type: 'title',
        data: {
          sessionNumber: '02',
          kicker: { ar: 'منطق الحوار التقني المنضبط', en: 'Disciplined Technical Dialogue' },
          headline: { ar: 'PROMPT ENGINEERING', en: 'PROMPT ENGINEERING' },
          subheadline: { ar: 'صياغة التعليمات البرمجية الصارمة لبناء مواقع الويب الحديثة', en: 'Crafting rigid technical instructions for modern web construction' },
          totalSessions: '12',
          durationMinutes: 90,
          tags: ['Prompt Framework', 'Role & Context', 'Constraints', 'Acceptance Criteria'],
        },
      },
    },

    // Slide 2: Context
    {
      id: 's02-slide-02',
      sessionNumber: 2,
      slideNumber: 2,
      totalSlides: 13,
      type: 'context',
      title: { ar: "وجّه الذكاء الاصطناعي بوضوح", en: "Give AI Clear Direction" },
      subtitle: { ar: 'الفرق بين الحديث العفوي مع الشات بوت وبين إصدار أوامر معمارية للمترجم', en: 'Conversational chit-chat vs compiling architectural specifications' },
      estimatedMinutes: 4,
      teachingGoal: { ar: 'إيضاح أن الذكاء الاصطناعي يعكس دقة المدخلات (Garbage In = Garbage Out).', en: 'Demonstrate that AI output strictly mirrors input precision (Garbage In = Garbage Out).' },
      speakerNotes: { ar: "نفّذ: اعرض مثال: عندما تطلب \"ابنِ لي موقعاً\"، يضطر الذكاء الاصطناعي لتخمين كثير من التفاصيل. النتيجة: موقع عام بلا روح.\nاسأل: ما المشكلة التي توضّحها «وجّه الذكاء الاصطناعي بوضوح»؟\nتحقق: البرومبت الغامض ينتج كوداً يعتمد على حزم غير ضرورية، ثغرات أمنية، وهيكل غير متناسق.", en: "Cue: When asking \"build me a site\", AI has to guess many of the missing parameters, yielding generic soulless junk.\nAsk: What problem does “Give AI Clear Direction” point to?\nCheck: Vague prompts inject bloated dependencies, security oversights, and fragile architectures." },
      payload: {
        type: 'context',
        data: {
          industryShift: {
            ar: 'النماذج اللغوية تستجيب بدقة للقيود والشروط؛ كلما كانت القيود واضحة، تحسنت ملاءمة الكود بفضل وضوح المطلوب.',
            en: 'LLMs thrive under explicit constraints; defined boundaries improve how well the code matches the request.',
          },
          realWorldProblem: {
            ar: 'البرومبت الغامض ينتج كوداً يعتمد على حزم غير ضرورية، ثغرات أمنية، وهيكل غير متناسق.',
            en: 'Vague prompts inject bloated dependencies, security oversights, and fragile architectures.',
          },
          whyItMatters: {
            ar: 'المطور الذي يكتب مواصفات واضحة يقلل التخمين، ثم يراجع الناتج ويكرّر التحسين عند الحاجة.',
            en: 'Clear prompt specifications reduce guesswork, while review and iteration remain necessary.',
          },
        },
      },
    },

    // Slide 3: Question
    {
      id: 's02-slide-03',
      sessionNumber: 2,
      slideNumber: 3,
      totalSlides: 13,
      type: 'question',
      title: { ar: "ما الخطأ في هذا البرومبت؟", en: "Diagnostic — What is Wrong With This Prompt?" },
      estimatedMinutes: 4,
      teachingGoal: { ar: 'تدريب عيون الطلاب على اكتشاف الغموض في الأوامر الشائعة.', en: 'Train student eyes to spot ambiguity and missing parameters.' },
      speakerNotes: { ar: "نفّذ: اعرض العبارة: \"Build me a modern responsive landing page for a coffee shop with cool animations.\" واسأل الطلاب في الشات عما ينقصها.\nاسأل: اكتب في الشات: اذكر معلومة أساسية واحدة غابت عن هذا الطلب؟\nتحقق: استمع لأفكار مثل: لا يوجد تحديد للتقنية أو الإصدار (Next.js vs HTML)؛ لا توجد قيود على مكتبات الـ CSS أو الـ Icons المستخدمة", en: "Cue: Display the naive prompt and ask students what critical constraints are missing.\nAsk: Drop in Zoom chat: Name one critical missing parameter in this prompt.\nCheck: Listen for ideas such as: No framework or version specified; No styling constraints (Tailwind, pure CSS, etc.)" },
      payload: {
        type: 'question',
        data: {
          question: {
            ar: 'ما الخطأ المعماري في هذا الطلب الشائع: "Build me a modern responsive landing page for a coffee shop"؟',
            en: 'What architectural flaws exist in: "Build me a modern responsive landing page for a coffee shop"?',
          },
          contextHint: {
            ar: 'فكر في التقنيات، هيكل البيانات، الألوان، الخطوط، الأمان، وما هو الهدف التجاري للموقع؟',
            en: 'Consider framework, data schema, palette, fonts, accessibility, and business conversion goal.',
          },
          promptToClass: {
            ar: 'اكتب في الشات: اذكر معلومة أساسية واحدة غابت عن هذا الطلب؟',
            en: 'Drop in Zoom chat: Name one critical missing parameter in this prompt.',
          },
          expectedAnswers: [
            { ar: 'لا يوجد تحديد للتقنية أو الإصدار (Next.js vs HTML)', en: 'No framework or version specified' },
            { ar: 'لا توجد قيود على مكتبات الـ CSS أو الـ Icons المستخدمة', en: 'No styling constraints (Tailwind, pure CSS, etc.)' },
            { ar: 'لم يتم تحديد أقسام الصفحة أو هوية الزبون المستهدف', en: 'No section inventory or target audience persona' },
            { ar: 'غياب معايير القبول وسلوك الهواتف المحمولة', en: 'Missing acceptance criteria and mobile behavior' },
          ],
        },
      },
    },

    // Slide 4: Think (30s Reflection)
    {
      id: 's02-slide-04',
      sessionNumber: 2,
      slideNumber: 4,
      totalSlides: 13,
      type: 'think',
      title: { ar: "تأمل — البرومبت هو مواصفة معمارية", en: "Think — A Prompt is a Specification" },
      estimatedMinutes: 2,
      teachingGoal: { ar: 'ترسيخ أن البرومبت البرمجي ليس محادثة بل هو وثيقة مواصفات فنية (Spec).', en: 'Embed the mental model: A technical prompt is an engineering spec document.' },
      speakerNotes: { ar: "نفّذ: ابدأ العد التنازلي. ذكّرهم: \"لا تتحدث مع الذكاء الاصطناعي كصديق في مقهى، بل اكتب له كمهندس رئيسي يوجه مطوراً مساعداً\".\nاسأل: ما الفكرة التي تغيّرت لديك بعد هذا التأمل؟\nتحقق: إذا لم تكن واضحاً في قيودك، سيتطوع الذكاء الاصطناعي باتخاذ القرارات نيابة عنك.", en: "Cue: Trigger timer. Remind them: write like a lead architect briefing an accelerated junior engineer.\nAsk: What changed in your thinking after this pause?\nCheck: If you do not specify your constraints, the AI will invent them for you." },
      payload: {
        type: 'think',
        data: {
          prompt: {
            ar: 'إذا لم تكن واضحاً في قيودك، سيتطوع الذكاء الاصطناعي باتخاذ القرارات نيابة عنك.',
            en: 'If you do not specify your constraints, the AI will invent them for you.',
          },
          durationSeconds: 30,
          guidancePoints: [
            { ar: 'كل قيد لا تكتبه هو احتمال لخطأ برمجي مستقبلي.', en: 'Every unstated constraint is a future bug vector.' },
            { ar: 'الوضوح الكامل يمنع التخمين والهلوسة العشوائية.', en: 'Explicit parameters eliminate hallucinations.' },
          ],
        },
      },
    },

    // Slide 5: Concept (The 8-Part Framework)
    {
      id: 's02-slide-05',
      sessionNumber: 2,
      slideNumber: 5,
      totalSlides: 13,
      type: 'concept',
      title: { ar: "إطار العمل الهندسي للبرومبت (8 ركائز)", en: "The 8-Factor Prompt Architecture" },
      estimatedMinutes: 5,
      teachingGoal: { ar: 'تقديم عناصر الإطار الثمانية بوضوح وحفظها كقالب معياري.', en: 'Present the canonical 8-factor prompt structure as our course standard.' },
      speakerNotes: { ar: "نفّذ: اشرح العناصر الثمانية: ROLE, CONTEXT, GOAL, REQUIREMENTS, CONSTRAINTS, INPUT, OUTPUT, ACCEPTANCE CRITERIA.\nاسأل: كيف تطبّق هذا المبدأ: إطار العمل الموحد: ROLE + CONTEXT + GOAL + REQUIREMENTS + CONSTRAINTS + INPUT + OUTPUT + CRITERIA؟\nتحقق: القاعدة: كلما كانت الممنوعات (Constraints) صارمة، كان الكود المتولد أنظف وأكثر استقراراً.", en: "Cue: Break down the 8 building blocks: Role, Context, Goal, Requirements, Constraints, Input, Output, Acceptance.\nAsk: How would you apply this principle: Unified Framework: ROLE + CONTEXT + GOAL + REQS + CONSTRAINTS + INPUT + OUTPUT + CRITERIA?\nCheck: Rule: Strict negative constraints produce exponentially cleaner code than vague positive wishes." },
      payload: {
        type: 'concept',
        data: {
          principle: {
            ar: 'إطار العمل الموحد: ROLE + CONTEXT + GOAL + REQUIREMENTS + CONSTRAINTS + INPUT + OUTPUT + CRITERIA',
            en: 'Unified Framework: ROLE + CONTEXT + GOAL + REQS + CONSTRAINTS + INPUT + OUTPUT + CRITERIA',
          },
          tagline: { ar: 'THE RIGID SPECIFICATION FRAMEWORK', en: 'THE RIGID SPECIFICATION FRAMEWORK' },
          explanation: {
            ar: 'هذا الإطار يحول تفكيرك من مجرد تمني النتيجة إلى تصميم تجربة الإخراج بالكامل، مما يضمن كوداً متوافقاً مع أفضل الممارسات.',
            en: 'This framework elevates your instruction into a deterministic spec, ensuring production-grade code output.',
          },
          bulletPoints: [
            { ar: 'ROLE: من هو الذكاء الاصطناعي؟ (Senior Frontend Architect)', en: 'ROLE: Who is the AI? (Senior Frontend Architect)' },
            { ar: 'CONTEXT: ما هو المشروع والتقنيات المستخدمة؟ (Next.js 16 + Tailwind v4)', en: 'CONTEXT: Stack and environment (Next.js 16 + Tailwind v4)' },
            { ar: 'CONSTRAINTS: ما الممنوعات؟ (No external libraries, semantic HTML only)', en: 'CONSTRAINTS: Explicit negatives (No external dependencies)' },
            { ar: 'ACCEPTANCE: كيف نقيس نجاح الكود؟ (Valid HTML, responsive at 375px)', en: 'ACCEPTANCE: Testable pass criteria (Responsive at 375px)' },
          ],
          architecturalRule: {
            ar: 'القاعدة: كلما كانت الممنوعات (Constraints) صارمة، كان الكود المتولد أنظف وأكثر استقراراً.',
            en: 'Rule: Strict negative constraints produce exponentially cleaner code than vague positive wishes.',
          },
        },
      },
    },

    // Slide 6: Comparison (Bad vs Better vs Professional)
    {
      id: 's02-slide-06',
      sessionNumber: 2,
      slideNumber: 6,
      totalSlides: 13,
      type: 'comparison',
      title: { ar: "تطور البرومبت — سيئ ← أفضل ← احترافي", en: "Prompt Evolution — Bad → Better → Pro" },
      subtitle: { ar: 'مقارنة حية لثلاثة مستويات من البرومبت لنفس المهمة البرمجية', en: 'Side-by-side evolution of three prompt tiers for the same feature' },
      estimatedMinutes: 5,
      teachingGoal: { ar: 'إظهار الفارق الهائل في دقة المخرجات بين المستويات الثلاثة.', en: 'Illustrate the vast gulf in output quality between the three tiers.' },
      speakerNotes: { ar: "نفّذ: قارن بين المستوى العفوي الساذج وبين المستوى الاحترافي المقيد. وضح كيف يقضي المستوى الاحترافي على التخمين.\nاسأل: ما معيارك للاختيار بين جانبي «تطور البرومبت — سيئ ← أفضل ← احترافي»؟\nتحقق: كتابة مواصفات واضحة تستغرق وقتاً، لكنها تقلل التخمين وتسهّل مراجعة الناتج.", en: "Cue: Compare the naive casual prompt with the professional spec-driven tier.\nAsk: What would guide your choice between the two sides of “Prompt Evolution — Bad → Better → Pro”?\nCheck: A clear specification takes deliberate effort, but can reduce guesswork and make review easier." },
      payload: {
        type: 'comparison',
        data: {
          leftHeader: { ar: 'برومبت ساذج / عفوي (Bad Prompt)', en: 'Naive / Casual Prompt' },
          rightHeader: { ar: 'برومبت هندسي احترافي (Professional Spec)', en: 'Professional Spec Prompt' },
          dimensions: [
            {
              dimension: { ar: 'الطلب الأساسي', en: 'Core Request' },
              left: { ar: '"Make a header with a logo and links"', en: '"Make a header with a logo and links"' },
              right: { ar: 'مكون Header متجاوب بدقة مع قائمة همبرغر للهواتف', en: 'Accessible <header> with semantic nav & mobile toggle' },
            },
            {
              dimension: { ar: 'التقنيات المحددة', en: 'Tech Specification' },
              left: { ar: 'غير محددة (يختار الذكاء الاصطناعي ما يشاء)', en: 'Unspecified (AI picks random CSS)' },
              right: { ar: 'React 19 + TypeScript + Tailwind CSS v4', en: 'React 19 + TypeScript + Tailwind CSS v4' },
            },
            {
              dimension: { ar: 'الوصولية (Accessibility)', en: 'Accessibility' },
              left: { ar: 'تجاهل تام (divs مع onClick عشوائي)', en: 'Ignored (divs with random onClicks)' },
              right: { ar: 'استخدام <header>, <nav>, aria-expanded, aria-label', en: 'Strict semantic elements & ARIA attributes' },
            },
            {
              dimension: { ar: 'صيغة المخرج (Output)', en: 'Output Format' },
              left: { ar: 'كود مخلوط بشروحات طويلة مكررة', en: 'Code mixed with chatty paragraphs' },
              right: { ar: 'كود TypeScript نقي فقط داخل مكون منفصل', en: 'Single self-contained TSX component block only' },
            },
          ],
          balancedVerdict: {
            ar: 'كتابة مواصفات واضحة تستغرق وقتاً، لكنها تقلل التخمين وتسهّل مراجعة الناتج.',
            en: 'A clear specification takes deliberate effort, but can reduce guesswork and make review easier.',
          },
        },
      },
    },

    // Slide 7: AI (Visual Prompt Artifact)
    {
      id: 's02-slide-07',
      sessionNumber: 2,
      slideNumber: 7,
      totalSlides: 13,
      type: 'ai',
      title: { ar: "نموذج عملي — برومبت هندسي لصفحة هبوط مطعم", en: "Canonical Prompt Artifact — Restaurant Landing" },
      subtitle: { ar: 'أثر بصري يوضح التطبيق الصارم لعناصر إطار العمل الثمانية', en: 'A living visual artifact showcasing the complete 8-factor architecture' },
      estimatedMinutes: 6,
      teachingGoal: { ar: 'عرض برومبت حقيقي متكامل يستطيع الطلاب نسخه وتعديله لمشاريعهم.', en: 'Provide an end-to-end production prompt ready to copy, study, and tailor.' },
      speakerNotes: { ar: "نفّذ: اشرح كل قسم في هذا البرومبت. اطلب من الطلاب الضغط على زر Copy واستكشاف أقسام الـ Constraints والـ Acceptance Criteria.\nاسأل: أي قيد أو معيار قبول سيحمي الناتج من التخمين؟\nتحقق: معيار قابل للفحص: Fully responsive across 375px mobile, 768px tablet, and 1280px desktop viewports", en: "Cue: Deconstruct each section. Encourage learners to click Copy and inspect the constraints and criteria.\nAsk: Which constraint or acceptance criterion will guard against guesswork?\nCheck: A verifiable criterion: Fully responsive across 375px mobile, 768px tablet, and 1280px desktop viewports" },
      payload: {
        type: 'ai',
        data: {
          role: 'Senior Frontend Architect and UI/UX Specialist with deep Next.js and Tailwind expertise.',
          context: 'We are building a production-ready homepage for an artisan Italian restaurant named "Trattoria Roma". Target audience: local food enthusiasts and dinner reservations.',
          task: 'Scaffold the full responsive Landing Page structure including Hero, Signature Menu preview, Chef Story, Table Reservation CTA, and Footer.',
          constraints: 'Use semantic HTML5 elements exclusively. Zero external icon libraries (use inline SVG). Mobile-first layout using Tailwind CSS. High color contrast meeting WCAG AAA.',
          input: 'Brand primary: #641a01, Canvas: #fff8f5, Menu items: 4 signature pastas with prices in local currency.',
          output: 'Return clean, modular, typed React 19 / Next.js code with clear section separation and zero markdown commentary.',
          acceptanceCriteria: [
            'Fully responsive across 375px mobile, 768px tablet, and 1280px desktop viewports',
            'All interactive buttons have visible hover and focus-visible states',
            'Reservation CTA button triggers a clear accessible interaction hook',
            'Page performance budget: minimal DOM depth, zero layout shifts',
          ],
          iterationTip: {
            ar: 'إذا جاء الكود طويلًا جدًا، اطلب أولاً الهيكل العام والمكونات، ثم اطلب كل قسم على حدة في برومبت منفصل.',
            en: 'If output hits token limits, request the page layout skeleton first, then prompt sections individually.',
          },
        },
      },
    },

    // Slide 8: Code (Code Produced by Good Prompt)
    {
      id: 's02-slide-08',
      sessionNumber: 2,
      slideNumber: 8,
      totalSlides: 13,
      type: 'code',
      title: { ar: "كيف يبدو الكود المعماري المنضبط؟", en: "Output Artifact — Disciplined Component Structure" },
      estimatedMinutes: 5,
      teachingGoal: { ar: 'إظهار جودة ونظافة الكود الناتج عن برومبت محكم مقارنة بكود الـ Vibe العشوائي.', en: 'Demonstrate the immaculate clarity of code scaffolded via rigid prompt constraints.' },
      speakerNotes: { ar: "نفّذ: ركز على استخدام <header>, <nav>, semantic tags, والأزرار ذات الـ accessibility. هذا هو الفرق بين كود الهواة وكود المحترفين.\nاسأل: ما وظيفة المثال في «كيف يبدو الكود المعماري المنضبط؟»؟\nتحقق: مكون Hero نقي ودلالي (Semantic) مع عناوين واضحة وأزرار إجراءات بارزة. استخدام aria-labelledby و <section> يمنح محركات البحث وقارئات الشاشة فهماً كاملاً للمحتوى.", en: "Cue: Point out semantic header, accessible buttons, and mobile-friendly utility classes.\nAsk: What does the example in “Output Artifact — Disciplined Component Structure” do?\nCheck: Semantic Hero component with ARIA labeling and prominent conversion CTAs. ARIA attributes and semantic elements satisfy both SEO bots and accessibility tools." },
      payload: {
        type: 'code',
        data: {
          language: 'tsx',
          codeSnippet: `// Trattoria Roma — Production-Grade Hero Component
export function HeroSection() {
  return (
    <section 
      aria-labelledby="hero-title"
      className="relative min-h-[85vh] flex items-center justify-center px-6 py-20 bg-[#fff8f5] text-[#140905]"
    >
      <div className="max-w-4xl mx-auto text-center space-y-6">
        <span className="inline-block px-3 py-1 rounded-full text-xs font-mono font-bold bg-[#641a01]/10 text-[#641a01] uppercase tracking-widest">
          Artisan Italian Dining
        </span>
        <h1 id="hero-title" className="text-4xl sm:text-6xl font-extrabold tracking-tight">
          Handmade Pasta & Timeless Roman Flavors
        </h1>
        <p className="text-lg text-neutral-700 max-w-2xl mx-auto leading-relaxed">
          Crafted fresh daily with heritage semolina and centuries-old tradition in the heart of the city.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
          <a href="#reserve" className="px-6 py-3 rounded-xl bg-[#641a01] text-white font-bold hover:opacity-90 transition-opacity">
            Reserve Your Table
          </a>
          <a href="#menu" className="px-6 py-3 rounded-xl border border-neutral-300 font-semibold hover:bg-neutral-100 transition-colors">
            Explore Menu
          </a>
        </div>
      </div>
    </section>
  );
}`,
          what: { ar: 'مكون Hero نقي ودلالي (Semantic) مع عناوين واضحة وأزرار إجراءات بارزة.', en: 'Semantic Hero component with ARIA labeling and prominent conversion CTAs.' },
          why: { ar: 'استخدام aria-labelledby و <section> يمنح محركات البحث وقارئات الشاشة فهماً كاملاً للمحتوى.', en: 'ARIA attributes and semantic elements satisfy both SEO bots and accessibility tools.' },
          when: { ar: 'الجزء الظاهر من صفحة الهبوط يعرّف بالعرض ويوجه الزائر نحو الحجز.', en: 'The first screen introduces the offer and points visitors toward booking.' },
        },
      },
    },

    // Slide 9: Demo (Live Prompt Iteration)
    {
      id: 's02-slide-09',
      sessionNumber: 2,
      slideNumber: 9,
      totalSlides: 13,
      type: 'demo',
      title: { ar: "مراجعة المخرجات وتدقيق الكود المتولد", en: "Live Demo — Auditing & Refining AI Output" },
      estimatedMinutes: 6,
      teachingGoal: { ar: 'نمذجة عملية المراجعة: فحص الكود، اكتشاف ما نسيه النموذج، وإرسال برومبت تصحيحي مقتضب.', en: 'Demonstrate prompt iteration: inspect output, identify gaps, dispatch surgical follow-up.' },
      speakerNotes: { ar: "نفّذ: أظهر للطلاب كيف نطلب تعديلاً صغيراً دون إعادة توليد كل شيء. مثال: \"Keep the exact layout, but make the reservation button sticky on mobile\".\nاسأل: تدقيق كود صفحة الهبوط وتطبيق برومبت تعديلي مركز لتحسين استجابة الهواتف.\nتحقق: كود محدث يحتوي شارة ساعات العمل وأزرار هاتف متراصة رأسياً بأناقة.", en: "Cue: Demonstrate surgical follow-ups: modify one element without destroying existing architecture.\nAsk: Audit scaffolded page code and execute a surgical follow-up for mobile polish.\nCheck: Polished markup featuring live hours badge and vertically stacked mobile CTAs." },
      payload: {
        type: 'demo',
        data: {
          objective: {
            ar: 'تدقيق كود صفحة الهبوط وتطبيق برومبت تعديلي مركز لتحسين استجابة الهواتف.',
            en: 'Audit scaffolded page code and execute a surgical follow-up for mobile polish.',
          },
          promptToUse: `Review the generated Hero component:
1. Ensure the primary CTA button remains accessible on screens narrower than 400px.
2. Add an accessible badge showing "Open Today: 12:00 PM – 11:00 PM".
3. Return ONLY the updated code snippet without conversational intro.`,
          instructorSteps: [
            { ar: 'فحص الكود المتولد على محاكي الهاتف الصغير (375px)', en: 'Test responsive behavior in mobile viewport emulator (375px)' },
            { ar: 'ملاحظة أي مشاكل في المسافات أو تداخل الأزرار', en: 'Inspect button spacing and visual hierarchy' },
            { ar: 'كتابة برومبت تعديلي موجه ومباشر (Surgical Follow-up)', en: 'Dispatch targeted surgical refinement prompt' },
            { ar: 'التحقق من أن التعديل لم يكسر بقية العناصر', en: 'Verify that change did not regress existing markup' },
          ],
          expectedOutput: {
            ar: 'كود محدث يحتوي شارة ساعات العمل وأزرار هاتف متراصة رأسياً بأناقة.',
            en: 'Polished markup featuring live hours badge and vertically stacked mobile CTAs.',
          },
        },
      },
    },

    // Slide 10: Challenge (Student Prompt Lab)
    {
      id: 's02-slide-10',
      sessionNumber: 2,
      slideNumber: 10,
      totalSlides: 13,
      type: 'challenge',
      title: { ar: "صياغة برومبت احترافي لمشروعك", en: "Student Challenge — Craft Your Project Spec Prompt" },
      estimatedMinutes: 8,
      teachingGoal: { ar: 'قيام كل طالب بكتابة برومبت متكامل لمشروعه الخاص مستخدماً عناصر الإطار الثمانية.', en: 'Each student writes a full 8-factor spec prompt for their chosen business domain.' },
      speakerNotes: { ar: "نفّذ: أطلق مؤقت الـ 5 دقائق. اطلب منهم ملء أقسام: ROLE, TASK, CONSTRAINTS, OUTPUT لمشروعهم (مطعم، عيادة، جيم).\nاسأل: ما الناتج الذي ستسلّمه؟ كتابة برومبت هندسي متكامل لصفحة الهبوط الخاصة بنشاطك التجاري المختار.\nتحقق: مسودة برومبت هندسي جاهزة للإدخال في أدوات التوليد في الجلسة 03.", en: "Cue: Start 5-minute countdown. Have learners draft Role, Task, Constraints, and Output for their niche.\nAsk: What will you submit? Author an 8-factor specification prompt for your flagship project landing page.\nCheck: A battle-tested specification prompt ready for UI generation in Session 03." },
      payload: {
        type: 'challenge',
        data: {
          mission: {
            ar: 'كتابة برومبت هندسي متكامل لصفحة الهبوط الخاصة بنشاطك التجاري المختار.',
            en: 'Author an 8-factor specification prompt for your flagship project landing page.',
          },
          durationMinutes: 5,
          objective: {
            ar: 'التحول من مستهلك عشوائي للذكاء الاصطناعي إلى موجه ومحدد للمواصفات الهندسية.',
            en: 'Transform from a passive AI prompter into an exacting technical spec author.',
          },
          instructions: [
            { ar: 'حدد ROLE و CONTEXT لمشروعك بدقة (المجال، الاسم، الجمهور)', en: 'State explicit Role and Context (domain, brand name, audience)' },
            { ar: 'اكتب TASK يحدد الأقسام الأربعة التي اخترتها في الجلسة 01', en: 'Define Task with the 4 core sections chosen in Session 01' },
            { ar: 'ضع 3 قيود صارمة على الأقل (CONSTRAINTS) تمنع الأكواد غير المرغوبة', en: 'Enforce at least 3 strict negative constraints' },
            { ar: 'حدد معيارين للقبول (ACCEPTANCE CRITERIA) يمكن اختبارهما', en: 'Specify 2 testable acceptance criteria' },
          ],
          starterPromptOrCode: `ROLE: Senior Web Architect
CONTEXT: [Your Business Name & Sector]
TASK: Scaffold responsive landing page with [Section 1, 2, 3, 4]
CONSTRAINTS: Semantic HTML, Tailwind CSS, no external libraries, mobile-first
OUTPUT: Clean TypeScript React component`,
          deliverable: {
            ar: 'مسودة برومبت هندسي جاهزة للإدخال في أدوات التوليد في الجلسة 03.',
            en: 'A battle-tested specification prompt ready for UI generation in Session 03.',
          },
        },
      },
    },

    // Slide 11: Project (Milestone 02)
    {
      id: 's02-slide-11',
      sessionNumber: 2,
      slideNumber: 11,
      totalSlides: 13,
      type: 'project',
      title: { ar: "وثيقة المواصفات البرمجية", en: "Project Milestone — The Specification Spec" },
      estimatedMinutes: 4,
      teachingGoal: { ar: 'ربط مخرجات تحدي اليوم بمشروع التخرج المستمر.', en: 'Ground today deliverable into the ongoing capstone project repository.' },
      speakerNotes: { ar: "نفّذ: أكد للطلاب أن هذا البرومبت ليس تمريناً ورقياً، بل هو ما سنستخدمه في الجلسة القادمة مباشرة داخل Google Stitch لإنتاج التصميم.\nاسأل: أي مخرج من هذه المرحلة يحتاج إلى استكمال؟\nتحقق: برومبت صفحة الهبوط المكتمل وفق إطار العمل الهندسي؛ قائمة الأقسام والمكونات المستهدفة بدقة؛ نصوص العناوين الرئيسية وأزرار الدعوة لاتخاذ إجراء", en: "Cue: Stress that this prompt will be fed directly into Google Stitch in Session 03.\nAsk: Which deliverable from this phase still needs work?\nCheck: Complete 8-factor landing page specification prompt; Exact inventory of intended components and sections; Draft headlines and primary conversion callouts" },
      payload: {
        type: 'project',
        data: {
          phaseName: { ar: 'المرحلة 02: وثيقة المتطلبات والبرومبت التأسيسي', en: 'Phase 02: Prompt Spec & Requirements Blueprint' },
          stepNumber: '02',
          whatWeBuildNow: {
            ar: 'تجهيز وثيقة البرومبت المعتمدة التي ستقود توليد الواجهات والتصميم البصري في الجلسة القادمة.',
            en: 'Finalize the approved specification prompt steering UI generation in the next session.',
          },
          deliverables: [
            { ar: 'برومبت صفحة الهبوط المكتمل وفق إطار العمل الهندسي', en: 'Complete 8-factor landing page specification prompt' },
            { ar: 'قائمة الأقسام والمكونات المستهدفة بدقة', en: 'Exact inventory of intended components and sections' },
            { ar: 'نصوص العناوين الرئيسية وأزرار الدعوة لاتخاذ إجراء', en: 'Draft headlines and primary conversion callouts' },
          ],
          connectionToFinalProject: {
            ar: 'جودة هذا البرومبت تؤثر في وضوح الواجهة وسرعة تنفيذها في Google Stitch والأكواد اللاحقة.',
            en: 'The fidelity of this prompt helps shape the visual quality in Google Stitch in Session 03.',
          },
        },
      },
    },

    // Slide 12: Takeaway
    {
      id: 's02-slide-12',
      sessionNumber: 2,
      slideNumber: 12,
      totalSlides: 13,
      type: 'takeaway',
      title: { ar: "خلاصة: هندسة البرومبت", en: "Recap: Prompt Engineering" },
      estimatedMinutes: 4,
      teachingGoal: { ar: 'تثبيت القواعد الثلاث الأساسية لهندسة البرومبت التقني.', en: 'Crystallize the 3 unbreakable rules of technical prompt engineering.' },
      speakerNotes: { ar: "نفّذ: اقرأ القواعد الثلاث بوضوح. كرر: \"البرومبت هو كود، عامل النص ككود مصدري يحتاج هندسة وتدقيقاً\".\nاسأل: أي مبدأ من «خلاصة: هندسة البرومبت» ستستخدمه في مشروعك؟\nتحقق: الدقة في كتابة التعليمات البرمجية تصنع الفارق بين كود الهواة وبنية المحترفين.", en: "Cue: Deliver takeaways: \"A prompt is code. Treat your prompt like source code requiring versioning and audit\".\nAsk: Which principle from “Recap: Prompt Engineering” will you use in your project?\nCheck: Precision in technical instruction marks the divide between amateur play and professional engineering." },
      payload: {
        type: 'takeaway',
        data: {
          takeaways: [
            {
              number: '01',
              title: { ar: 'البرومبت وثيقة مواصفات وليس دردشة', en: 'Prompt is a Spec, Not a Chat' },
              description: {
                ar: 'عامل البرومبت كملف مواصفات فنية يحدد بدقة متناهية الدور والهدف والقيود والشكل النهائي للمخرج.',
                en: 'Treat prompts as technical architecture contracts defining role, context, constraints, and schema.',
              },
            },
            {
              number: '02',
              title: { ar: 'قوة القيود الصارمة (Constraints)', en: 'The Power of Negative Constraints' },
              description: {
                ar: 'تحديد ما لا تريده يمنع الذكاء الاصطناعي من إضافة مكتبات خارجية ثقيلة أو أكواد قديمة غير آمنة.',
                en: 'Specifying what NOT to do eliminates bloated packages and legacy anti-patterns.',
              },
            },
            {
              number: '03',
              title: { ar: 'التدقيق والتعديل الجراحي (Surgical Iteration)', en: 'Surgical Output Auditing' },
              description: {
                ar: 'لا تعيد توليد الصفحة كاملة عند حدوث خطأ بسيط؛ اطلب تعديلاً دقيقاً ومستهدفاً للسطر أو المكون المطلوب.',
                en: 'Never re-scaffold whole pages for minor bugs; dispatch surgical follow-up prompts.',
              },
            },
          ],
          coreMotto: {
            ar: 'الدقة في كتابة التعليمات البرمجية تصنع الفارق بين كود الهواة وبنية المحترفين.',
            en: 'Precision in technical instruction marks the divide between amateur play and professional engineering.',
          },
        },
      },
    },

    // Slide 13: Next
    {
      id: 's02-slide-13',
      sessionNumber: 2,
      slideNumber: 13,
      totalSlides: 13,
      type: 'next',
      title: { ar: "التالي: من الفكرة إلى التصميم", en: "Next: Idea to Interface" },
      estimatedMinutes: 2,
      teachingGoal: { ar: 'تشويق الطلاب لرؤية أفكارهم تتحول إلى واجهات بصرية حقيقية في الجلسة 03.', en: 'Build excitement for translating text prompts into live UI layouts in Session 03.' },
      speakerNotes: { ar: "نفّذ: اختم الجلسة: \"في الجلسة القادمة سنأخذ هذا البرومبت وندخله في Google Stitch لنشاهد الواجهة تتولد أمام أعيننا في ثوانٍ!\".\nاسأل: ما الذي ستجهزه قبل الجلسة القادمة؟\nتحقق: احتفظ بمسودة البرومبت التي كتبتها اليوم جاهزة على جهازك لنبدأ بها فوراً في الجلسة القادمة.", en: "Cue: Close session: \"Next session we feed our spec prompt into Google Stitch and watch our UI ignite live!\"\nAsk: What will you prepare before the next session?\nCheck: Have your Session 02 prompt spec ready on your clipboard for immediate launch in Session 03." },
      payload: {
        type: 'next',
        data: {
          nextSessionNumber: '03',
          nextSessionTitle: {
            ar: 'Google Stitch: تحويل الفكرة المكتوبة إلى تصميم واجهة حقيقي',
            en: 'Google Stitch: Translating Written Ideas into Living UI Prototypes',
          },
          teaser: {
            ar: 'سنحول وثيقة البرومبت التي بنيناها اليوم إلى تصاميم UI ملموسة، وسنتعلم كيف نراجع التصميم ونستخرج عناصر الهوية.',
            en: 'We will convert our prompt specs into live interactive UI designs, review layouts, and export design tokens.',
          },
          preparationHint: {
            ar: 'احتفظ بمسودة البرومبت التي كتبتها اليوم جاهزة على جهازك لنبدأ بها فوراً في الجلسة القادمة.',
            en: 'Have your Session 02 prompt spec ready on your clipboard for immediate launch in Session 03.',
          },
        },
      },
    },
  ],
};
