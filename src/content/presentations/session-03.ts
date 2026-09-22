import { PresentationSession } from '@/types';

export const SESSION_03: PresentationSession = {
  id: 'session-03',
  number: 3,
  slug: 'session-03',
  title: {
    ar: 'Google Stitch: تحويل الفكرة المكتوبة إلى تصميم واجهة حقيقي',
    en: 'Google Stitch: Transforming Written Ideas into Living UI Interfaces',
  },
  subtitle: {
    ar: 'كيف تصمم واجهات مستخدم حديثة من خلال الذكاء الاصطناعي وتستخرج نظام التصميم (Design Tokens)؟',
    en: 'Designing modern user interfaces with generative UI and extracting production design tokens',
  },
  durationMinutes: 90,
  goal: {
    ar: 'تمكين الطالب من استخدام أدوات توليد الواجهات مثل Google Stitch لتحويل البرومبت إلى نموذج بصري تفاعلي واستخراج ألوانه وخطوطه.',
    en: 'Master UI generation tools like Google Stitch to transform prompt specs into high-fidelity visual prototypes.',
  },
  prerequisites: [
    { ar: 'إكمال الجلسة 02 وامتلاك برومبت مواصفات صفحة الهبوط', en: 'Completion of Session 02 with ready prompt spec' },
  ],
  objectives: [
    { ar: 'فهم دور أدوات التوليد البصري ومتى نلجأ إليها في رحلة تطوير الويب', en: 'Understand generative UI tools and their exact role in the development lifecycle' },
    { ar: 'تحويل وثيقة البرومبت المكتوبة إلى شاشات واجهة مستخدم متناسقة بصرياً', en: 'Translate written prompt specs into cohesive visual user interfaces' },
    { ar: 'إتقان حلقة التغذية الراجعة (Review → Iterate → Refine) لتحسين التصميم', en: 'Master the Review → Iterate → Refine visual feedback loop' },
    { ar: 'استخراج الألوان والخطوط والمسافات كنظام تصميم (Design Tokens) تمهيداً للبرمجة', en: 'Extract colors, typography, and spacing as portable design tokens for code' },
  ],
  timeline: [
    { timeRange: '00:00 – 00:10', durationMinutes: 10, label: { ar: 'مقدمة: ما هو Google Stitch وما دوره في هندسة الواجهات؟', en: 'Intro: What is Stitch and its role in frontend?' }, type: 'context' },
    { timeRange: '00:10 – 00:25', durationMinutes: 15, label: { ar: 'مسار العمل: الفكرة ← المتطلبات ← التوليد ← المراجعة ← التصدير', en: 'Workflow: Idea → Prompt → Generate → Iterate → Export' }, type: 'concept' },
    { timeRange: '00:25 – 00:45', durationMinutes: 20, label: { ar: 'تطبيق حي: توليد صفحة هبوط مطعم واستخراج الـ Tokens', en: 'Live Demo: Scaffolding Restaurant Landing & Exporting Tokens' }, type: 'demo' },
    { timeRange: '00:45 – 01:00', durationMinutes: 15, label: { ar: 'قرارات التصميم: التسلسل الهرمي البصري والمساحات البيضاء', en: 'Design Decisions: Hierarchy, Spacing & Restraint' }, type: 'concept' },
    { timeRange: '01:00 – 01:20', durationMinutes: 20, label: { ar: 'تحدي الطلاب: توليد صفحة الهبوط لمشروعهم وتعديل ألوانها', en: 'Student Challenge: Generate & Style Project Landing Page' }, type: 'practice' },
    { timeRange: '01:20 – 01:25', durationMinutes: 5, label: { ar: 'استعراض تصاميم الطلاب ونقدها هندسياً', en: 'Critique student UI iterations live' }, type: 'review' },
    { timeRange: '01:25 – 01:30', durationMinutes: 5, label: { ar: 'الخلاصة والتجهيز للانتقال إلى الكود الحقيقي (Session 04)', en: 'Takeaways & Prep for Real Codebase (Session 04)' }, type: 'takeaway' },
  ],
  projectMilestone: {
    ar: 'إنشاء التصميم البصري الأول لصفحة الهبوط واستخراج ألوان الهوية ومقاسات الخطوط.',
    en: 'Establish the visual UI foundation of your flagship project and export brand design tokens.',
  },
  aiRole: {
    ar: 'محرك رسم وتجسيد بصري يحول الكلمات والأفكار إلى عناصر شاشة فورية.',
    en: 'Visual rendering engine translating semantic prompts into instant viewport layouts.',
  },
  marketConnection: {
    ar: 'عرض نموذج أولي بصري تفاعلي للعميل في أول 24 ساعة يضاعف احتمالية توقيع العقد بنسبة 80%.',
    en: 'Presenting an interactive visual prototype within 24 hours doubles client closing rates.',
  },
  startScreen: {
    badge: 'SESSION 03 / 12 • UI PROTOTYPING',
    headline: {
      ar: 'Google Stitch: من الفكرة المجردة إلى واجهة بصرية تخطف الأنظار',
      en: 'Google Stitch: From Abstract Concept to Striking Visual Interface',
    },
    description: {
      ar: 'تعلم كيف توظف أدوات التصميم التوليدي لإنشاء شاشات ويب احترافية دون الغرق في تعقيدات برامج التصميم اليدوية.',
      en: 'Harness generative UI tools to construct high-fidelity web screens without manual Figma drag-and-drop.',
    },
    sessionGoal: {
      ar: 'تحويل برومبت الجلسة 02 إلى واجهة تفاعلية كاملة واستخراج معالمها البصرية.',
      en: 'Transform your Session 02 prompt into a complete visual UI prototype ready for codebase ingestion.',
    },
  },
  endScreen: {
    headline: {
      ar: 'رائع! أصبحت تملك واجهة بصرية جاهزة للتحويل إلى كود حقيقي',
      en: 'Stunning! You Now Possess a Visual UI Ready for Codebase Transition',
    },
    keyRecap: [
      {
        ar: 'التصميم التوليدي يختصر أسابيع من الرسم اليدوي، لكنه يتطلب عيناً نقدية تحذف الفوضى.',
        en: 'Generative UI cuts weeks of manual wireframing; your eye must prune noise and clutter.',
      },
      {
        ar: 'التسلسل الهرمي والمساحات البيضاء هي ما يجعل الموقع يبدو فخماً واحترافياً.',
        en: 'Visual hierarchy, typography scale, and generous whitespace define premium web products.',
      },
      {
        ar: 'التصميم ليس رسماً جامداً، بل هو نظام من الألوان والمسافات والرموز (Design Tokens).',
        en: 'Design is not flat art; it is a system of structured tokens (colors, spacing, typography).',
      },
    ],
    nextSessionNumber: '04',
    nextSessionTitle: {
      ar: 'من التصميم إلى المشروع الحقيقي: تفكيك الواجهة وتأسيس الكود',
      en: 'From Design to Real Project: Deconstructing UI into Code Components',
    },
  },
  slides: [
    // Slide 1: Title
    {
      id: 's03-slide-01',
      sessionNumber: 3,
      slideNumber: 1,
      totalSlides: 16,
      type: 'title',
      title: { ar: 'Google Stitch: من الفكرة للتصميم', en: 'Google Stitch: Idea to Interface' },
      estimatedMinutes: 2,
      teachingGoal: { ar: 'افتتاح الجلسة وإعلان دخول مرحلة التجسيد البصري.', en: 'Open session: entering the visual materialized stage.' },
      speakerNotes: { ar: 'رحب بالطلاب. أخبرهم: "اليوم سنرى الكلمات التي كتبناها بالأمس تتحول إلى أزرار وألوان وأقسام حقيقية أمامنا".', en: 'Welcome students. Today words from Session 02 turn into buttons, colors, and live sections.' },
      payload: {
        type: 'title',
        data: {
          sessionNumber: '03',
          kicker: { ar: 'التجسيد البصري السريع', en: 'Rapid Generative Prototyping' },
          headline: { ar: 'GOOGLE STITCH', en: 'GOOGLE STITCH' },
          subheadline: { ar: 'تحويل المواصفات المكتوبة إلى واجهات تفاعلية وأنظمة تصميم منضبطة', en: 'Transforming written specs into interactive UI systems and design tokens' },
          totalSessions: '12',
          durationMinutes: 90,
          tags: ['Generative UI', 'Visual Hierarchy', 'Design Tokens', 'Rapid Prototyping'],
        },
      },
    },

    // Slide 2: Context
    {
      id: 's03-slide-02',
      sessionNumber: 3,
      slideNumber: 2,
      totalSlides: 16,
      type: 'context',
      title: { ar: 'ما هي أدوات التوليد البصري ومتى نلجأ إليها؟', en: 'Generative UI Tools: When & Why' },
      subtitle: { ar: 'لماذا لم نعد نبدأ برسم مستطيلات فارغة في Figma لكل مشروع صغير؟', en: 'Why we no longer draw empty boxes from scratch in Figma for every project' },
      estimatedMinutes: 4,
      teachingGoal: { ar: 'توضيح الموقع الصحيح لأدوات Generative UI في مسار العمل المعاصر.', en: 'Demarcate the exact position of generative UI tools in modern frontend workflows.' },
      speakerNotes: { ar: 'وضح أن Figma أداة عملاقة للأنظمة الضخمة، لكن في مراحل البداية واختبار الأفكار مع العملاء، أدوات مثل Stitch توفر 80% من الوقت.', en: 'Clarify that Figma is for massive design systems, but for rapid client prototypes, tools like Stitch save 80% of time.' },
      payload: {
        type: 'context',
        data: {
          industryShift: {
            ar: 'الانتقال من مرحلة الرسم اليدوي للمستطيلات إلى مرحلة التوليد الفوري المبني على البرومبت الهندسي.',
            en: 'Moving from drawing manual canvas boxes to prompt-compiled visual generation.',
          },
          realWorldProblem: {
            ar: 'العميل لا يفهم وثائق الكود أو المخططات النصية؛ العميل يحتاج أن "يرى" الواجهة ليتخذ قرار الاستثمار.',
            en: 'Clients cannot visualize text specs; they need tangible visual interfaces to commit capital.',
          },
          whyItMatters: {
            ar: 'القدرة على إظهار تصميم مبهر في 15 دقيقة تفصلك عن المنافسين التقليديين الذين يحتاجون أسبوعين للرسم.',
            en: 'Delivering a striking visual prototype in 15 minutes separates you from 2-week traditional design agencies.',
          },
        },
      },
    },

    // Slide 3: Visual (The Stitch Pipeline)
    {
      id: 's03-slide-03',
      sessionNumber: 3,
      slideNumber: 3,
      totalSlides: 16,
      type: 'visual',
      title: { ar: 'مسار التوليد البصري المتكامل (Visual Pipeline)', en: 'The Generative Visual Pipeline' },
      subtitle: { ar: 'الخطوات الست من الفكرة إلى استخراج الكود والـ Tokens', en: 'The 6 phases from raw idea to code-ready tokens' },
      estimatedMinutes: 5,
      teachingGoal: { ar: 'توضيح دورة حياة التصميم في Stitch خطوة بخطوة.', en: 'Map the complete step-by-step UI generation workflow in Stitch.' },
      speakerNotes: { ar: 'اشرح الخطوات: الفكرة -> المتطلبات -> البرومبت -> التوليد -> المراجعة النقدية -> استخراج الـ Tokens.', en: 'Walk through: Idea -> Requirements -> Prompt Spec -> Scaffolding -> Audit -> Token Extraction.' },
      payload: {
        type: 'visual',
        data: {
          caption: { ar: 'التوليد البصري ليس ضغطة زر عشوائية، بل مسار تحسين تدريجي مدروس.', en: 'Generative UI is a disciplined iterative feedback loop, not magic.' },
          diagramType: 'pipeline',
          nodes: [
            { id: 'p1', stepNumber: '01', title: { ar: 'الفكرة والمتطلبات', en: 'Requirements' }, badge: 'Input' },
            { id: 'p2', stepNumber: '02', title: { ar: 'البرومبت الهندسي', en: 'Spec Prompt' }, badge: 'Spec' },
            { id: 'p3', stepNumber: '03', title: { ar: 'التوليد البصري', en: 'UI Generation' }, badge: 'Stitch' },
            { id: 'p4', stepNumber: '04', title: { ar: 'الفحص والتهذيب', en: 'Audit & Prune' }, badge: 'Human' },
            { id: 'p5', stepNumber: '05', title: { ar: 'ضبط التباين والألوان', en: 'Refine Theme' }, badge: 'Palette' },
            { id: 'p6', stepNumber: '06', title: { ar: 'استخراج الـ Tokens', en: 'Export Tokens' }, badge: 'Code-Ready' },
          ],
        },
      },
    },

    // Slide 4: Think (Restrained UI)
    {
      id: 's03-slide-04',
      sessionNumber: 3,
      slideNumber: 4,
      totalSlides: 16,
      type: 'think',
      title: { ar: 'تأمل: التصميم الاحترافي هو فن الحذف', en: 'Think: Design is the Art of Subtraction' },
      estimatedMinutes: 2,
      teachingGoal: { ar: 'تحذير الطلاب من فخ الألوان الزاعقة والتدرجات المبالغ فيها التي تنتجها أدوات AI أحياناً.', en: 'Warn students against excessive gradients, neon glows, and AI visual clutter.' },
      speakerNotes: { ar: 'شغل مؤقت 30 ثانية. ذكرهم: "الموقع الراقي لا يصرخ بالألوان؛ الموقع الراقي يهمس بالبساطة والمساحات البيضاء".', en: 'Trigger 30s timer: "Luxury interfaces whisper through typography and whitespace, they never scream with neon".' },
      payload: {
        type: 'think',
        data: {
          prompt: {
            ar: 'التصميم لا يكتمل عندما لا يتبقى شيء تضيفه، بل عندما لا يتبقى شيء يمكنك حذفه دون الإخلال بالمعنى.',
            en: 'Design is achieved not when there is nothing more to add, but when there is nothing left to take away.',
          },
          durationSeconds: 30,
          guidancePoints: [
            { ar: 'تجنب التدرجات النيونية والبطاقات الزائدة عن الحاجة.', en: 'Resist neon gradients and decorative card clutter.' },
            { ar: 'المساحة البيضاء ليست فراغاً ضائعاً، بل هي هواء تتنفسه عناصر الواجهة.', en: 'Whitespace is not empty space; it is breathing room for content hierarchy.' },
          ],
        },
      },
    },

    // Slide 5: Concept (Design Tokens)
    {
      id: 's03-slide-05',
      sessionNumber: 3,
      slideNumber: 5,
      totalSlides: 16,
      type: 'concept',
      title: { ar: 'ما هي رموز التصميم (Design Tokens)؟', en: 'What are Design Tokens?' },
      estimatedMinutes: 5,
      teachingGoal: { ar: 'شرح مفهوم الـ Tokens كجسر التواصل بين التصميم والكود.', en: 'Explain design tokens as the immutable bridge between visual UI and code.' },
      speakerNotes: { ar: 'اشرح أن الـ Token هو متغير مثل --color-primary أو font-sans. عندما نغير الـ Token يتحدث الموقع بأكمله.', en: 'Explain that tokens are variables (--color-primary, font-display). Updating a token cascades across the app.' },
      payload: {
        type: 'concept',
        data: {
          principle: {
            ar: 'رموز التصميم (Tokens) هي أصغر ذرات الهوية البصرية التي تُترجم مباشرة إلى كود.',
            en: 'Design Tokens are the atomic building blocks translating visual aesthetics into code variables.',
          },
          tagline: { ar: 'THE CODE-DESIGN CONTRACT', en: 'THE CODE-DESIGN CONTRACT' },
          explanation: {
            ar: 'بدل أن نكتب ألواناً عشوائية مثل `#641a01` في كل ملف، نحدد Tokens مركزية للألوان والخطوط والمسافات والظلال تستخدمها جميع المكونات.',
            en: 'Instead of hardcoding hex values across files, we define centralized semantic variables for colors, typography, and spacing.',
          },
          bulletPoints: [
            { ar: 'Color Tokens: اللون الرئيسي، اللون الثانوي، وألوان الخلفية والأسطح', en: 'Color Tokens: Primary, Secondary, Canvas & Surface variables' },
            { ar: 'Typography Tokens: خط العناوين (Display)، خط النصوص (Body)، وأحجام الخطوط', en: 'Typography Tokens: Display font, Body font, and typographic scale' },
            { ar: 'Spacing Tokens: المسافات المتناسقة بين الأقسام والبطاقات (8px, 16px, 24px)', en: 'Spacing Tokens: Harmonic spatial rhythms across components' },
            { ar: 'Elevation Tokens: الظلال الهادئة وحواف التدوير (Border Radius)', en: 'Elevation & Radius Tokens: Restrained shadows and corner curvature' },
          ],
          architecturalRule: {
            ar: 'قاعدة المعمارية: التصميم الذي لا يُبنى على Tokens يتحول إلى فوضى مستحيلة الصيانة في الكود.',
            en: 'Architectural Rule: Designs lacking tokens dissolve into unmaintainable CSS spaghetti in code.',
          },
        },
      },
    },

    // Slide 6: Demo (Live Stitch Run)
    {
      id: 's03-slide-06',
      sessionNumber: 3,
      slideNumber: 6,
      totalSlides: 16,
      type: 'demo',
      title: { ar: 'تطبيق حي: تشغيل برومبت المطعم في Google Stitch', en: 'Live Demo: Executing Restaurant Prompt in Stitch' },
      estimatedMinutes: 6,
      teachingGoal: { ar: 'إظهار عملية التوليد المباشرة وتعديل الألوان أمام أعين الطلاب.', en: 'Demonstrate live generation, critique, and color tuning in real time.' },
      speakerNotes: { ar: 'انسخ برومبت Trattoria Roma من الجلسة 02، أدخله في الأداة، وشاهد الواجهة تتشكل. اطلب من الطلاب ملاحظة التباين وتسلسل العناوين.', en: 'Copy Trattoria Roma prompt from Session 02, paste into the tool, and watch UI construct live.' },
      payload: {
        type: 'demo',
        data: {
          objective: {
            ar: 'توليد نموذج واجهة تفاعلي لصفحة هبوط مطعم واستخراج هوية ألوان Terracotta الدافئة.',
            en: 'Scaffold an interactive restaurant landing page and extract warm Terracotta palette tokens.',
          },
          promptToUse: `Generate an editorial, warm-terracotta landing page for "Trattoria Roma" Italian Restaurant.
Include:
- Elegant Hero with headline, subheadline, and Table Reservation CTA
- Signature Pasta Menu grid (4 items with photos and prices)
- Heritage Story section with clean editorial typography
- Footer with operating hours and address
Color Palette: #641a01 (Primary Rust), #fff8f5 (Cream Background), #140905 (Deep Espresso Text).`,
          instructorSteps: [
            { ar: 'إدخال البرومبت الهندسي المنضبط ومراجعة الخيارات المبدئية', en: 'Input specification prompt and inspect initial layout render' },
            { ar: 'فحص التباين البصري وتعديل درجات الألوان لتكون مريحة للعين', en: 'Verify WCAG color contrast and soften stark contrasts' },
            { ar: 'حذف أي عناصر ديكورية زائدة تشوش على زر الحجز الأساسي', en: 'Prune unnecessary visual gimmicks distracting from reservation CTA' },
            { ar: 'نسخ نظام الألوان والـ CSS المتولد لتجهيزه للمشروع', en: 'Extract generated CSS variables and tokens for Session 04' },
          ],
          expectedOutput: {
            ar: 'واجهة متوازنة بخلفية كريمية دافئة ونصوص إسبراسو عميقة وأزرار تيرّاكوتّا واضحة.',
            en: 'Balanced layout with warm cream canvas, deep espresso text, and bold terracotta CTAs.',
          },
        },
      },
    },

    // Slide 7: Challenge (Student Landing UI Generation)
    {
      id: 's03-slide-07',
      sessionNumber: 3,
      slideNumber: 16,
      totalSlides: 16,
      type: 'challenge',
      title: { ar: 'تحدي الطلاب: توليد وتنسيق واجهة مشروعك', en: 'Student Challenge: Generate & Refine Your UI' },
      estimatedMinutes: 8,
      teachingGoal: { ar: 'توليد كل طالب لتصميم واجهته واستخراج 3 ألوان أساسية لمشروعه.', en: 'Each student generates a prototype UI and locks in 3 core brand colors.' },
      speakerNotes: { ar: 'شغل مؤقت الـ 5 دقائق. اطلب منهم إدخال برومبت مشروعهم الخاص في أداة التوليد ومشاركة لقطة أو كود الألوان في الشات.', en: 'Start 5-minute timer. Have students feed their spec prompt and share their 3 brand hex codes in chat.' },
      payload: {
        type: 'challenge',
        data: {
          mission: {
            ar: 'توليد صفحة الهبوط لمشروعك التجاري وضبط هوية ألوانها الأساسية.',
            en: 'Generate your project landing page prototype and configure brand color tokens.',
          },
          durationMinutes: 5,
          objective: {
            ar: 'تطبيق التغذية الراجعة البصرية وتحديد نظام ألوان احترافي متزن لمشروعك.',
            en: 'Apply visual critique and establish a cohesive, high-contrast brand palette.',
          },
          instructions: [
            { ar: 'أدخل برومبت مشروعك الذي كتبته في الجلسة 02', en: 'Input your Session 02 spec prompt into the UI generation tool' },
            { ar: 'اختر 3 ألوان لهويتك: لون رئيسي (Primary)، لون للخلفية، ولون للنصوص', en: 'Lock in 3 tokens: Primary accent, Canvas background, Deep text' },
            { ar: 'تأكد من أن زر الدعوة لاتخاذ إجراء (CTA) هو العنصر الأوضح في الشاشة', en: 'Ensure your primary CTA stands out with supreme visual weight' },
            { ar: 'شارك كود لونك الرئيسي (Hex Code) في شات Zoom', en: 'Share your primary brand hex code in Zoom chat' },
          ],
          starterPromptOrCode: 'Palette: Primary: #641a01 | Canvas: #fff8f5 | Text: #140905 | Hero CTA: Reserve Table',
          deliverable: {
            ar: 'تصميم واجهة معتمد مع لوحة الألوان الأساسية الخاصة بمشروع التخرج.',
            en: 'Approved visual UI prototype with defined core brand tokens.',
          },
        },
      },
    },

    // Slide 8: Project (Milestone 03)
    {
      id: 's03-slide-08',
      sessionNumber: 3,
      slideNumber: 16,
      totalSlides: 16,
      type: 'project',
      title: { ar: 'محطة المشروع: التصميم المعتمد ونظام الـ Tokens', en: 'Project Milestone: Approved UI & Token Architecture' },
      estimatedMinutes: 4,
      teachingGoal: { ar: 'ربط مخرجات الجلسة 03 بالخطوة القادمة: تحويل التصميم إلى كود حقيقي في الجلسة 04.', en: 'Bridge today UI design output to Session 04 codebase scaffolding.' },
      speakerNotes: { ar: 'وضح للطلاب: "في الجلسة 04 سنأخذ هذا التصميم الذي أنشأناه، ونفككه إلى Components و Codebase حقيقية".', en: 'Reassure students: Session 04 translates this exact design into Next.js components and real files.' },
      payload: {
        type: 'project',
        data: {
          phaseName: { ar: 'المرحلة 03: الاعتماد البصري ورموز التصميم', en: 'Phase 03: Visual Approval & Design Tokens' },
          stepNumber: '03',
          whatWeBuildNow: {
            ar: 'تثبيت التصميم البصري المعتمد واستخراج ملف الـ Tokens تمهيداً لتأسيس المشروع البرمجي الحقيقي.',
            en: 'Lock the approved visual prototype and export design tokens for codebase setup.',
          },
          deliverables: [
            { ar: 'واجهة بصرية متكاملة الأقسام لصفحة الهبوط', en: 'Complete sectioned visual landing page prototype' },
            { ar: 'جدول الـ Design Tokens (الألوان، الخطوط، والمسافات)', en: 'Design tokens matrix (palette, typography, spatial rhythm)' },
            { ar: 'قائمة الصور والأيقونات المطلوبة للواجهة', en: 'Inventory of necessary photo assets and inline SVGs' },
          ],
          connectionToFinalProject: {
            ar: 'هذا التصميم هو المخطط المعماري الذي ستبني عليه جميع أكواد HTML و CSS و React و Next.js القادمة.',
            en: 'This visual prototype is the exact architectural blueprint for all forthcoming code sessions.',
          },
        },
      },
    },

    // Slide 9: Takeaway
    {
      id: 's03-slide-09',
      sessionNumber: 3,
      slideNumber: 16,
      totalSlides: 16,
      type: 'takeaway',
      title: { ar: 'الخلاصة الهندسية للجلسة الثالثة', en: 'Session 03 Engineering Takeaways' },
      estimatedMinutes: 4,
      teachingGoal: { ar: 'تثبيت مبادئ التصميم المتزن واستخراج الـ Tokens كمعيار هندسي.', en: 'Cement balanced visual design and token extraction as core standards.' },
      speakerNotes: { ar: 'اقرأ النقاط الثلاث وركز على أن التصميم الجيد في الويب هو هندسة تخدم الاستخدام وليس مجرد زينة.', en: 'Deliver takeaways emphasizing that web design is ergonomic engineering, not decorative art.' },
      payload: {
        type: 'takeaway',
        data: {
          takeaways: [
            {
              number: '01',
              title: { ar: 'التوليد البصري يسرع الاستكشاف — والمهندس يهذب', en: 'Generative UI Accelerates — Humans Refine' },
              description: {
                ar: 'أدوات مثل Stitch تمنحك خيارات بصرية مبهرة في ثوانٍ، لكن دورك هو ضبط التباين، حذف الحشو، وتثبيت الهوية.',
                en: 'Generative tools draft layouts in seconds; your task is pruning excess, tuning contrast, and locking identity.',
              },
            },
            {
              number: '02',
              title: { ar: 'رموز التصميم (Tokens) هي لغة التواصل مع الكود', en: 'Tokens are the Bridge to Code' },
              description: {
                ar: 'لا تنقل التصميم كصورة جامدة، بل استخرج ألوانه وخطوطه ومسافاته كمتغيرات برمجية قابلة لإعادة الاستخدام.',
                en: 'Never export designs as flat screenshots; extract reusable CSS variables and typography tokens.',
              },
            },
            {
              number: '03',
              title: { ar: 'الوضوح البصري يخدم الهدف التجاري (Conversion)', en: 'Visual Clarity Drives Business Conversion' },
              description: {
                ar: 'التصميم الاحترافي يجعل زر الحجز أو الشراء واضحاً في أول 3 ثوانٍ من وصول الزائر للموقع.',
                en: 'Professional design ensures primary conversion triggers are unmistakably clear within 3 seconds.',
              },
            },
          ],
          coreMotto: {
            ar: 'التصميم العظيم لا يلفت الانتباه لنفسه؛ التصميم العظيم يخدم المستخدم والمنتج بسلاسة تامة.',
            en: 'Great design never calls attention to itself; it empowers the user and product with effortless clarity.',
          },
        },
      },
    },

    // Slide 10: Next
    {
      id: 's03-slide-10',
      sessionNumber: 3,
      slideNumber: 16,
      totalSlides: 16,
      type: 'next',
      title: { ar: 'المحطة القادمة: من التصميم إلى المشروع الحقيقي', en: 'Next Waypoint: From Design to Real Project' },
      estimatedMinutes: 2,
      teachingGoal: { ar: 'بناء الحماس للانتقال إلى كتابة الكود وتأسيس مجلد المشروع الحقيقي في الجلسة 04.', en: 'Ignite enthusiasm for translating visual mockups into a real Next.js repository in Session 04.' },
      speakerNotes: { ar: 'اختم بحماس: "في الجلسة 04 سنفتح الـ Terminal ونؤسس مشروعاً حقيقياً ونبدأ بتحويل هذه الشاشات إلى مكونات كود حية!".', en: 'Close with energy: "In Session 04 we fire up our terminals and scaffold our real code repository!"' },
      payload: {
        type: 'next',
        data: {
          nextSessionNumber: '04',
          nextSessionTitle: {
            ar: 'من التصميم إلى المشروع الحقيقي: تفكيك الواجهة وتأسيس الكود',
            en: 'From Design to Real Project: Deconstructing UI into Code Components',
          },
          teaser: {
            ar: 'سنأخذ التصميم الذي ولدناه اليوم، وسنتعلم كيف نقرأه كمهندسين برمجيات: تفكيكه إلى أقسام، مكونات (Components)، وملفات مشروع حقيقي.',
            en: 'We will read our generated UI like software engineers: breaking layouts into sections, components, and project files.',
          },
          preparationHint: {
            ar: 'تأكد من تثبيت Node.js ومحرر VS Code على جهازك إن لم تكن قد ثبتهما بعد.',
            en: 'Ensure Node.js and your code editor are installed and operational on your machine.',
          },
        },
      },
    },
  ],
};
