import { PresentationSession } from '@/types';

export const SESSION_04: PresentationSession = {
  id: 'session-04',
  number: 4,
  slug: 'session-04',
  title: {
    ar: 'مراجعة النتيجة وتحسينها خطوة بخطوة مع الذكاء الاصطناعي',
    en: 'Reviewing & Improving the Result Step by Step with AI',
  },
  subtitle: {
    ar: 'كيف نفحص النتيجة الأولى، ونعرف ما يحتاج إلى تعديل، ونطلب التحسين بأمان دون إفساد الموقع؟',
    en: 'How to inspect the first draft, spot what needs fixing, and request safe step-by-step improvements',
  },
  durationMinutes: 90,
  goal: {
    ar: 'تمكين المتدرب من تطبيق حلقة التحسين الخماسية (الفكرة ← وصف المطلوب ← النتيجة الأولى ← المراجعة ← التحسين) واستخدام قاعدة الفحص والتخطيط قبل التعديل في Antigravity.',
    en: 'Master the 5-step AI refinement loop and the Inspect-and-Plan-Before-Editing rule in Antigravity.',
  },
  prerequisites: [
    {
      ar: 'إكمال الجلسة 03 وكتابة طلب بناء الصفحة الرئيسية',
      en: 'Completion of Session 03 with a homepage generation prompt',
    },
  ],
  objectives: [
    {
      ar: 'إتقان حلقة العمل الخماسية مع الذكاء الاصطناعي من الفكرة إلى التحسين المستمر',
      en: 'Master the 5-step AI workflow loop from idea to continuous improvement',
    },
    {
      ar: 'مراجعة النتيجة الأولى بعين فاحصة (وضوح العنوان، تناسق البطاقات، وعمل زر واتساب)',
      en: 'Review the first output critically (headline clarity, card spacing, WhatsApp button)',
    },
    {
      ar: 'تطبيق القاعدة الذهبية عند تعديل مشروع قائم في Antigravity: افحص وخطط أولًا قبل تعديل أي ملف',
      en: 'Apply the Golden Rule in Antigravity: Inspect and plan first before modifying any file',
    },
    {
      ar: 'كتابة طلب تحسين محدد لمعالجة ملاحظتين في الصفحة دون هدم الأقسام السليمة',
      en: 'Write a targeted improvement prompt fixing two issues without breaking working sections',
    },
  ],
  timeline: [
    {
      timeRange: '00:00 – 00:15',
      durationMinutes: 15,
      label: { ar: 'حلقة العمل الخماسية: الفكرة ← الوصف ← النتيجة الأولى ← المراجعة ← التحسين', en: 'The 5-step AI refinement loop' },
      type: 'concept',
    },
    {
      timeRange: '00:15 – 00:30',
      durationMinutes: 15,
      label: { ar: 'كيف نراجع النتيجة الأولى؟ 4 أسئلة بسيطة تكشف ما يحتاج إلى تعديل', en: 'How to review the first draft: 4 simple questions' },
      type: 'concept',
    },
    {
      timeRange: '00:30 – 00:50',
      durationMinutes: 20,
      label: { ar: 'القاعدة الذهبية في Antigravity: افحص وخطط قبل تعديل الملفات', en: 'Golden Rule in Antigravity: Inspect & plan before editing' },
      type: 'comparison',
    },
    {
      timeRange: '00:50 – 01:05',
      durationMinutes: 15,
      label: { ar: 'تطبيق عملي: فحص صفحة المقهى وتحسينها خطوة بخطوة', en: 'Live Demo: Inspecting and refining the Café page' },
      type: 'demo',
    },
    {
      timeRange: '01:05 – 01:20',
      durationMinutes: 15,
      label: { ar: 'نشاط المتدرب: مراجعة النتيجة الأولى لموقعه وكتابة طلب تحسين محدد', en: 'Trainee Activity: Review first draft & write refinement prompt' },
      type: 'practice',
    },
    {
      timeRange: '01:20 – 01:30',
      durationMinutes: 10,
      label: { ar: 'مناقشة تحسينات المتدربين وخلاصة الجلسة الرابعة', en: 'Discuss improvements & Session 04 summary' },
      type: 'takeaway',
    },
  ],
  projectMilestone: {
    ar: 'مراجعة المسودة الأولى للصفحة الرئيسية وإجراء جولة تحسين منظمة بناءً على خطة واضحة.',
    en: 'Review the first homepage draft and run a structured improvement round based on a clear plan.',
  },
  aiRole: {
    ar: 'فاحص ومنفذ تعديلات دقيقة يحترم الملفات الموجودة ولا يغير إلا ما نعتمدة في الخطة.',
    en: 'Careful inspector and editor that respects existing files and only changes approved items.',
  },
  marketConnection: {
    ar: 'المهندس المحترف لا يكسر ميزات الموقع أثناء التعديل؛ بل يفحص ويخطط ثم يعدل خطوة واحدة في كل مرة.',
    en: 'Professionals never break working features during edits; they inspect, plan, and modify one step at a time.',
  },
  startScreen: {
    badge: 'الجلسة 04 من 12 • العمل مع الذكاء الاصطناعي (2)',
    headline: {
      ar: 'مراجعة النتيجة وتحسينها خطوة بخطوة مع الذكاء الاصطناعي',
      en: 'Reviewing & Improving the Result Step by Step with AI',
    },
    description: {
      ar: 'النتيجة الأولى من الذكاء الاصطناعي هي نقطة البداية وليست النهاية؛ سنتعلم اليوم كيف نفحصها ونطلب تحسينها بأمان وتنظيم.',
      en: 'The first AI result is the starting point, not the finish line; learn how to inspect and refine it safely.',
    },
    sessionGoal: {
      ar: 'إتقان مراجعة النتيجة الأولى وكتابة طلب تحسين آمن ومحدد.',
      en: 'Master reviewing the first result and writing a safe, targeted improvement request.',
    },
  },
  endScreen: {
    headline: {
      ar: 'رائع! أصبحت تقود تعديلات الذكاء الاصطناعي بثقة وأمان',
      en: 'Awesome! You Now Guide AI Edits with Confidence and Safety',
    },
    keyRecap: [
      {
        ar: 'نطوّر الموقع دائمًا عبر حلقة واضحة: الفكرة ← الوصف ← النتيجة الأولى ← المراجعة ← التحسين.',
        en: 'We always develop through a clear loop: Idea -> Prompt -> First Result -> Review -> Improve.',
      },
      {
        ar: 'عند تعديل مشروع قائم، اطلب الفحص والخطة أولًا قبل السماح بتعديل الملفات.',
        en: 'When editing an existing project, ask for inspection and a plan before modifying files.',
      },
      {
        ar: 'عدّل شيئًا واحدًا أو اثنين في كل خطوة واختبر النتيجة فورًا على الشاشة.',
        en: 'Change one or two things per step and test the result immediately on screen.',
      },
    ],
    nextSessionNumber: '05',
    nextSessionTitle: {
      ar: 'تقسيم الصفحة إلى أجزاء منظمة وتجهيز ملفات المشروع',
      en: 'Breaking the Page into Organized Parts & Setting Up Project Files',
    },
  },
  slides: [
    {
      id: 's04-slide-01',
      sessionNumber: 4,
      slideNumber: 1,
      totalSlides: 10,
      type: 'title',
      visualType: 'ai-loop',
      realWorldExample: {
        ar: 'مثل كتابة مقال أو تجهيز طبق جديد: نجهز المحاولة الأولى، نتذوقها ونلاحظ ما ينقصها، ثم نضيف اللمسة التي تجعلها ممتازة.',
        en: 'Like preparing a dish: make the first batch, taste it to see what it needs, then adjust carefully.',
      },
      title: {
        ar: 'مراجعة النتيجة وتحسينها خطوة بخطوة',
        en: 'Reviewing & Improving the Result Step by Step',
      },
      estimatedMinutes: 5,
      teachingGoal: {
        ar: 'ترسيخ فكرة أن بناء الموقع مع الذكاء الاصطناعي هو حوار متدرج (مراجعة وتحسين) وليس ضغطة زر واحدة.',
        en: 'Establish that building with AI is an iterative conversation of review and improvement.',
      },
      speakerNotes: {
        ar: 'نفّذ: رحب بالمتدربين وأشر إلى حلقة العمل الخماسية في الرسم التوضيحي. الكثير من المبتدئين يحبطون إذا لم تكن النتيجة الأولى مثالية 100%، بينما المحترف يعلم أن النتيجة الأولى هي المسودة التي نطورها.\nاسأل: هل سبق أن طلبت شيئًا من الذكاء الاصطناعي وأردت تعديل جزء بسيط منه؟\nتحقق: اليوم سنتعلم كيف نعدل أي جزء بسهولة دون أن نخرب الأجزاء الجميلة الأخرى.',
        en: 'Point to the 5-step AI loop and explain that the first result is a draft we refine.',
      },
      payload: {
        type: 'title',
        data: {
          sessionNumber: '04',
          totalSessions: '12',
          durationMinutes: 90,
          kicker: {
            ar: 'المرحلة الثالثة • العمل مع الذكاء الاصطناعي (الجزء الثاني)',
            en: 'Phase 3 • Working with AI (Part 2)',
          },
          headline: {
            ar: 'كيف نراجع النتيجة الأولى ونحسنها خطوة بخطوة؟',
            en: 'How Do We Review the First Result and Improve It Step by Step?',
          },
          subheadline: {
            ar: 'نتعلم حلقة التحسين الخماسية، وكيف نفحص الصفحة ونطلب تعديلها بأمان دون إفساد ما بنيناه.',
            en: 'Learn the 5-step improvement loop and how to inspect and refine your page safely.',
          },
          tags: ['حلقة التحسين', 'مراجعة النتيجة', 'التخطيط قبل التعديل', 'Antigravity'],
        },
      },
    },
    {
      id: 's04-slide-02',
      sessionNumber: 4,
      slideNumber: 2,
      totalSlides: 10,
      type: 'visual',
      visualType: 'ai-loop',
      title: {
        ar: 'حلقة العمل الخماسية مع الذكاء الاصطناعي',
        en: 'The 5-Step Workflow Loop with AI',
      },
      subtitle: {
        ar: 'الفكرة ← وصف المطلوب ← النتيجة الأولى ← المراجعة ← التحسين',
        en: 'Idea -> Clear Prompt -> First Result -> Review -> Improve',
      },
      estimatedMinutes: 8,
      teachingGoal: {
        ar: 'تثبيت المخطط البصري للخطوات الخمس في ذهن المتدرب.',
        en: 'Cement the 5-step visual workflow in the trainee mind.',
      },
      speakerNotes: {
        ar: 'نفّذ: اشرح المربعات الخمسة في الرسم العلوي والبطاقات الأربع في الأسفل. نحن أنجزنا (1. الفكرة) في الجلسة الأولى والثانية، و(2. وصف المطلوب) في الجلسة الثالثة، والآن نتقن (3 و4 و5: النتيجة الأولى، المراجعة، والتحسين).\nاسأل: ما الخطوة التي تفصل بين «النتيجة الأولى» و«التحسين»؟ إنها «المراجعة بعين الزائر»!\nتحقق: لا نطلب تحسينًا قبل أن نفحص النتيجة الأولى بهدوء.',
        en: 'Walk through the 5 steps in the visual diagram.',
      },
      payload: {
        type: 'visual',
        data: {
          diagramType: 'pipeline',
          caption: {
            ar: 'كل جولة مراجعة وتحسين تستغرق دقيقتين فقط وترفع جودة موقعك درجة كاملة.',
            en: 'Each review-and-improve round takes just two minutes and upgrades your website quality.',
          },
          nodes: [
            {
              id: 'loop-1',
              stepNumber: '01',
              badge: 'البداية',
              title: { ar: 'الفكرة ووصف المطلوب', en: 'Idea & Clear Prompt' },
              description: { ar: 'نرسل طلبنا المرتب من 4 نقاط للذكاء الاصطناعي.', en: 'Send our structured 4-point prompt to AI.' },
            },
            {
              id: 'loop-2',
              stepNumber: '02',
              badge: 'المسودة',
              title: { ar: 'النتيجة الأولى', en: 'First Result' },
              description: { ar: 'نحصل على النسخة الأولى من الصفحة ونعرضها على الشاشة.', en: 'Get the first draft of the page on screen.' },
            },
            {
              id: 'loop-3',
              stepNumber: '03',
              badge: 'الفحص',
              title: { ar: 'المراجعة الهادئة', en: 'Calm Review' },
              description: { ar: 'نسجل ملاحظتين أو ثلاثًا تحتاج إلى توضيح أو ترتيب.', en: 'Note 2 or 3 things that need clearer text or layout.' },
            },
            {
              id: 'loop-4',
              stepNumber: '04',
              badge: 'التطوير',
              title: { ar: 'طلب التحسين المحدد', en: 'Targeted Improvement' },
              description: { ar: 'نطلب تعديل النقاط المحددة فقط ونفحص النتيجة الجديدة.', en: 'Request those specific fixes and verify the new result.' },
            },
          ],
        },
      },
    },
    {
      id: 's04-slide-03',
      sessionNumber: 4,
      slideNumber: 3,
      totalSlides: 10,
      type: 'concept',
      visualType: 'before-after-ui',
      realWorldExample: {
        ar: 'عندما ننظر إلى صفحة المقهى الأولى قد نلاحظ: العنوان ممتاز، لكن لون زر واتساب باهت قليلًا والأسعار صغيرة؛ فنطلب تكبير الأسعار وإبراز الزر.',
        en: 'Looking at the first café draft, we might see: great headline, but the WhatsApp button is pale and prices are small—so we ask to fix just those two.',
      },
      title: {
        ar: 'كيف نفحص النتيجة الأولى؟ 3 أشياء نبحث عنها فورًا',
        en: 'How Do We Inspect the First Result? 3 Things to Check Immediately',
      },
      estimatedMinutes: 9,
      teachingGoal: {
        ar: 'إعطاء المتدرب معيارًا بسيطًا من 3 نقاط لفحص أي صفحة يولدها الذكاء الاصطناعي.',
        en: 'Give trainees a simple 3-point checklist to inspect any AI-generated webpage.',
      },
      speakerNotes: {
        ar: 'نفّذ: اشرح للمتدربين كيف ينظرون إلى النتيجة الأولى: لا نبحث عن الكمال دفعة واحدة، بل نفحص هذه النقاط الثلاث بالترتيب.\nاسأل: لو كانت النصوص ممتازة لكن البطاقات ملتصقة ببعضها، ماذا نطلب من الذكاء الاصطناعي؟\nتحقق: نطلب منه ببساطة: «زد المسافات الفارغة بين بطاقات المشروبات لتصبح مريحة للعين».',
        en: 'Explain the 3 inspection points: Headline & Text, Spacing & Colors, and Action Button.',
      },
      payload: {
        type: 'concept',
        data: {
          tagline: { ar: 'عين المراجع الذكي', en: 'The Smart Reviewer Eye' },
          principle: {
            ar: 'افحص الصفحة من 3 زوايا بسيطة قبل طلب أي تعديل',
            en: 'Check the Page from 3 Simple Angles Before Requesting Edits',
          },
          explanation: {
            ar: 'عندما تظهر النتيجة الأولى أمامك، اسأل نفسك هذه الأسئلة الثلاثة وسجل ملاحظاتك في نقاط قصيرة:',
            en: 'When the first draft appears, ask yourself these 3 questions and jot down short notes:',
          },
          bulletPoints: [
            {
              ar: '1. وضوح النصوص: هل العنوان الترحيبي وأسماء الخدمات مكتوبة بعربية طبيعية وواضحة؟',
              en: '1. Text Clarity: Are the welcome headline and service names written in natural, clear Arabic?',
            },
            {
              ar: '2. الترتيب والمسافات: هل الأقسام مرتبة وهل توجد مسافة مريحة بين البطاقات؟',
              en: '2. Order & Spacing: Are sections ordered cleanly with comfortable space between cards?',
            },
            {
              ar: '3. بروز زر الطلب: هل زر «اطلب عبر واتساب» واضح بلون مميز يسهل الضغط عليه من الهاتف؟',
              en: '3. Action Button Visibility: Does the WhatsApp button stand out clearly on phone screens?',
            },
          ],
          architecturalRule: {
            ar: 'سجّل ما أعجبك لتبقيه، وسجّل ملاحظتين محددتين لتحسينهما في الخطوة التالية.',
            en: 'Note what works well so you keep it, and pick 2 specific items to improve next.',
          },
        },
      },
    },
    {
      id: 's04-slide-04',
      sessionNumber: 4,
      slideNumber: 4,
      totalSlides: 10,
      type: 'comparison',
      visualType: 'analyze-plan-build',
      title: {
        ar: 'القاعدة الذهبية عند تعديل الموقع: افحص وخطط قبل التعديل',
        en: 'The Golden Rule When Editing: Inspect & Plan Before Modifying',
      },
      subtitle: {
        ar: 'لماذا نطلب من مساعد البرمجة الذكي (Antigravity) شرح الخطة قبل لمس الملفات؟',
        en: 'Why we ask our AI coding assistant (Antigravity) to explain the plan before touching files',
      },
      estimatedMinutes: 10,
      teachingGoal: {
        ar: 'تعليم المتدرب بروتوكول الأمان في Antigravity: الفحص أولًا (بدون تعديل) ثم اعتماد الخطة ثم التنفيذ.',
        en: 'Teach the safe Antigravity workflow: Inspect first (no file edits) -> Approve Plan -> Execute.',
      },
      speakerNotes: {
        ar: 'نفّذ: قارن بين الطريقتين في الشريحة. في المشاريع الحقيقية داخل بيئة مثل Antigravity، إذا قلت للذكاء الاصطناعي «عدّل الموقع» مباشرة دون خطة، قد يمسح قسمًا كنت تحبه! أما عندما تقول له: «افحص الملفات أولًا واعرض لي خطة التعديل دون تغيير أي ملف»، فإنك تضمن سلامة موقعك 100%.\nاسأل: ما الجملة السحرية التي تحمي ملفاتنا أثناء الفحص؟ («افحص واشرح الخطة أولاً دون تعديل الملفات»).\nتحقق: تأكد أن الجميع حفظ هذا التسلسل الثلاثي: الفحص ← الخطة ← التنفيذ.',
        en: 'Contrast blind editing with the safe Inspect -> Plan -> Build workflow in Antigravity.',
      },
      payload: {
        type: 'comparison',
        data: {
          leftHeader: {
            ar: 'الطريقة الآمنة والمنظمة (افحص ← خطط ← نفّذ)',
            en: 'Safe Organized Way (Inspect -> Plan -> Build)',
          },
          rightHeader: {
            ar: 'التعديل العشوائي المباشر (بدون فحص أو خطة)',
            en: 'Blind Direct Editing (No Inspection or Plan)',
          },
          dimensions: [
            {
              dimension: { ar: 'كيف نبدأ التعديل؟', en: 'How We Start Editing' },
              left: {
                ar: 'نطلب من الذكاء الاصطناعي قراءة المشروع وعرض خطة التعديل أولًا دون لمس الملفات',
                en: 'Ask AI to read the project and show an edit plan first without touching files',
              },
              right: {
                ar: 'نعطيه أمر تعديل سريع وعام ونتركه يغير الملفات مباشرة كما يشاء',
                en: 'Give a vague quick edit command and let it overwrite files immediately',
              },
            },
            {
              dimension: { ar: 'سلامة الأقسام السابقة', en: 'Safety of Existing Sections' },
              left: {
                ar: 'تبقى جميع الأقسام الناجحة محفوظة وسليمة لأننا راجعنا الخطة مسبقًا',
                en: 'All working sections stay safe because we reviewed the plan first',
              },
              right: {
                ar: 'قد تتغير ألوان أو أقسام لم نطلب تعديلها أصلًا',
                en: 'Colors or sections we never wanted to touch might get altered',
              },
            },
            {
              dimension: { ar: 'النتيجة النهائية', en: 'Final Outcome' },
              left: {
                ar: 'موقع يتطور خطوة بخطوة بثبات ووضوح تام',
                en: 'A website that improves steadily step by step',
              },
              right: {
                ar: 'دوران في حلقة مفرغة من إصلاح خطأ وظهور خطأ آخر',
                en: 'Endless cycle of fixing one thing and breaking another',
              },
            },
          ],
          balancedVerdict: {
            ar: 'خطوة «اعرض لي الخطة أولًا قبل تعديل الملفات» تستغرق 30 ثانية وتحمي مشروعك بالكامل.',
            en: 'Asking "Show me the plan first before editing files" takes 30 seconds and protects your whole project.',
          },
        },
      },
    },
    {
      id: 's04-slide-05',
      sessionNumber: 4,
      slideNumber: 5,
      totalSlides: 10,
      type: 'reveal',
      visualType: 'analyze-plan-build',
      title: {
        ar: 'الخطوات الثلاث لطلب تعديل آمن على موقعك',
        en: 'The 3 Steps to Request a Safe Edit on Your Website',
      },
      estimatedMinutes: 8,
      teachingGoal: {
        ar: 'تلخيص خطوات التعديل الآمن في 3 جمل عملية يطبقها المتدرب في كل جلسة.',
        en: 'Summarize safe editing into 3 actionable steps trainees can use in every session.',
      },
      speakerNotes: {
        ar: 'نفّذ: اقرأ الخطوات الثلاث مع المتدربين. هذه الخطوات الثلاث تجعل المتدرب المبتدئ يعمل بنفس أسلوب المهندسين الكبار ولكن بلغة بسيطة جدًا.\nاسأل: كم تعديلًا نطلب في المرة الواحدة؟ (تعديلًا واحدًا أو اثنين كحد أقصى حتى يسهل فحصهما).\nتحقق: اربط بين الخطوة الثالثة ومعاينة الموقع في المتصفح.',
        en: 'Walk through the 3 steps: Inspect & Plan -> Execute One Change -> Verify in Browser.',
      },
      payload: {
        type: 'reveal',
        data: {
          premise: {
            ar: 'في كل مرة تريد فيها تطوير موقعك أو إضافة ميزة جديدة، سر على هذه الخطوات الثلاث:',
            en: 'Whenever you want to improve your site or add a feature, follow these 3 steps:',
          },
          steps: [
            {
              number: '01',
              title: { ar: 'اطلب الفحص والخطة أولًا', en: 'Ask for Inspection & Plan First' },
              description: {
                ar: 'قل للمساعد الذكي: «افحص الصفحة الحالية واشرح لي كيف سنضيف قسم آراء العملاء دون تعديل الملفات الآن».',
                en: 'Say: "Inspect the current page and explain how we will add customer reviews without editing files yet."',
              },
            },
            {
              number: '02',
              title: { ar: 'اعتمد الخطة واطلب التنفيذ المحدد', en: 'Approve the Plan & Request Execution' },
              description: {
                ar: 'بعد أن تقرأ خطته البسيطة وتقتنع بها، قل له: «ممتاز، نفّذ هذه الخطة الآن مع الحفاظ على باقي الأقسام».',
                en: 'Once the simple plan looks good, say: "Great, execute this plan now while keeping other sections intact."',
              },
            },
            {
              number: '03',
              title: { ar: 'عاين النتيجة على الشاشة فورًا', en: 'Preview the Result on Screen Immediately' },
              description: {
                ar: 'افتح الصفحة وتأكد أن القسم الجديد ظهر بوضوح وأن الأزرار السابقة ما زالت تعمل.',
                en: 'Open the page and verify the new section looks clean and existing buttons still work.',
              },
            },
          ],
        },
      },
    },
    {
      id: 's04-slide-06',
      sessionNumber: 4,
      slideNumber: 6,
      totalSlides: 10,
      type: 'question',
      visualType: 'ai-loop',
      title: {
        ar: 'سؤال سريع: كيف تتصرف في هذا الموقف؟',
        en: 'Quick Question: What Would You Do in This Situation?',
      },
      estimatedMinutes: 6,
      teachingGoal: {
        ar: 'التأكد من استيعاب المتدربين لطريقة طلب التحسين المحدد بدل الغضب أو إعادة البناء من الصفر.',
        en: 'Check that trainees know how to request a targeted fix instead of starting over.',
      },
      speakerNotes: {
        ar: 'نفّذ: اطرح السؤال واستمع لإجابات المتدربين في الشات.\nاسأل: هل نمسح المشروع كله لأن لون الزر لم يعجبنا، أم نطلب تعديل لون الزر فقط؟\nتحقق: نطلب تعديل الجزء المحدد فقط!',
        en: 'Ask trainees how to fix a small issue in the first draft without starting over.',
      },
      payload: {
        type: 'question',
        data: {
          question: {
            ar: 'أعجبتك الصفحة التي أنشأها الذكاء الاصطناعي لموقعك، لكن الخط في قسم البطاقات صغير قليلًا. ماذا تفعل؟',
            en: 'You like the page AI built for your site, but the text inside the cards is a bit too small. What do you do?',
          },
          contextHint: {
            ar: 'تذكر قاعدة التعديل المحدد خطوة بخطوة.',
            en: 'Remember the rule of targeted step-by-step refinement.',
          },
          promptToClass: {
            ar: 'اكتب في شات Zoom الجملة التي ستقولها للذكاء الاصطناعي 💬',
            en: 'Type in Zoom chat the exact sentence you would tell AI 💬',
          },
          expectedAnswers: [
            {
              ar: 'أطلب منه: «في قسم البطاقات فقط، كبّر حجم خط العنوان والسعر قليلًا، ولا تغير باقي الصفحة».',
              en: 'Ask: "In the cards section only, increase the title and price font size slightly, and keep the rest unchanged."',
            },
            {
              ar: 'أحدد له القسم والتعديل المطلوب بدقة بدل إعادة توليد الموقع من الصفر.',
              en: 'Specify the exact section and change instead of regenerating the whole website.',
            },
          ],
        },
      },
    },
    {
      id: 's04-slide-07',
      sessionNumber: 4,
      slideNumber: 7,
      totalSlides: 10,
      type: 'demo',
      visualType: 'before-after-ui',
      title: {
        ar: 'تطبيق عملي: فحص صفحة المقهى وتحسينها في خطوتين',
        en: 'Live Demo: Inspecting & Improving the Café Page in 2 Steps',
      },
      estimatedMinutes: 15,
      teachingGoal: {
        ar: 'تنفيذ جولة مراجعة وتحسين حية أمام المتدربين باستخدام قاعدة الفحص والتخطيط أولًا.',
        en: 'Run a live review-and-refine round using the Inspect-and-Plan-First approach.',
      },
      speakerNotes: {
        ar: 'نفّذ: اعرض صفحة المقهى الأولية، ثم أرسل أمر الفحص والتخطيط، ثم نفّذ تحسين إبراز الأسعار وزر واتساب أمام المتدربين.\nاسأل: لاحظوا الفرق بين النسخة الأولى والنسخة المحسنة؛ كم استغرق منا هذا التحسين؟\nتحقق: أقل من 3 دقائق وبأمان تام!',
        en: 'Demonstrate inspecting the café page, reviewing the plan, and applying the improvement.',
      },
      payload: {
        type: 'demo',
        data: {
          objective: {
            ar: 'تحسين وضوح الأسعار وإضافة قسم «لماذا قهوتنا مميزة؟» بأمان',
            en: 'Safely improve price visibility and add a "Why Our Coffee?" section',
          },
          instructorSteps: [
            {
              ar: 'نطلب من المساعد الذكي فحص الصفحة الحالية واقتراح خطة لإضافة 3 مميزات للمقهى دون تعديل الملفات بعد.',
              en: 'Ask AI to inspect the current page and propose a plan to add 3 café highlights without editing yet.',
            },
            {
              ar: 'نقرأ الخطة المقترحة ونتأكد أنها تحافظ على الشريط العلوي والقسم الترحيبي وقائمة المشروبات.',
              en: 'Read the proposed plan and verify it preserves the header, hero, and drinks menu.',
            },
            {
              ar: 'نعتمد الخطة ونطلب تنفيذها مع إبراز شارة السعر باللون الأخضر داخل بطاقات المشروبات.',
              en: 'Approve the plan and execute it while highlighting drink prices in green badges.',
            },
          ],
          promptToUse:
            'افحص الصفحة الرئيسية الحالية للمقهى دون تعديل أي ملف الآن، واعرض لي خطة مختصرة من 3 نقاط لإضافة قسم «لماذا تختار قهوتنا؟» وإبراز أسعار المشروبات بوضوح، مع الحفاظ على جميع الأقسام الحالية سليمة.',
          expectedOutput: {
            ar: 'خطة تعديل واضحة ومطمئنة يتبعها تحسين دقيق للصفحة دون أي أخطاء.',
            en: 'A clear, reassuring edit plan followed by an accurate page improvement with zero breakage.',
          },
        },
      },
    },
    {
      id: 's04-slide-08',
      sessionNumber: 4,
      slideNumber: 8,
      totalSlides: 10,
      type: 'challenge',
      visualType: 'ai-loop',
      title: {
        ar: 'نشاطك العملي: راجع النتيجة الأولى لموقعك واكتب طلب تحسينها',
        en: 'Your Activity: Review Your First Draft & Write an Improvement Request',
      },
      estimatedMinutes: 18,
      teachingGoal: {
        ar: 'تدريب كل متدرب على فحص المسودة الأولى لمشروعه وصياغة طلب تحسين آمن ومحدد.',
        en: 'Have each trainee inspect their project first draft and write a targeted improvement prompt.',
      },
      speakerNotes: {
        ar: 'نفّذ: شغّل المؤقت لمدة 18 دقيقة. اطلب من كل متدرب تحديد شيئين أعجباه في نتيجته الأولى، وشيئين يريد تحسينهما.\nاسأل: من يشاركنا الملاحظتين اللتين قرر تحسينهما في موقعه؟\nتحقق: تأكد أن طلبات التحسين التي كتبوها تبدأ بتحديد القسم المطلوب والحفاظ على باقي الصفحة.',
        en: 'Run the timer and review trainee improvement prompts in Zoom chat.',
      },
      payload: {
        type: 'challenge',
        data: {
          mission: {
            ar: 'افحص النسخة الأولى من صفحتك واكتب رسالة تحسين محددة وآمنة',
            en: 'Inspect Your First Page Draft and Write a Safe, Targeted Improvement Request',
          },
          durationMinutes: 18,
          objective: {
            ar: 'ممارسة حلقة (المراجعة ← التحسين) على مشروعك الخاص بخطوات منظمة.',
            en: 'Practice the Review -> Improve loop on your own project systematically.',
          },
          instructions: [
            {
              ar: '1. انظر إلى النسخة الأولى من صفحتك وسجل شيئين واضحين أعجباك وتريد الحفاظ عليهما.',
              en: '1. Look at your first page draft and note 2 things you like and want to keep.',
            },
            {
              ar: '2. حدد ملاحظتين تحتاجان إلى تحسين (مثل: توضيح العنوان، تكبير السعر، أو إبراز زر واتساب).',
              en: '2. Identify 2 things to improve (e.g., clearer headline, larger price, or bolder WhatsApp button).',
            },
            {
              ar: '3. اكتب رسالة تطلب فيها خطة تعديل هاتين الملاحظتين فقط مع الحفاظ على باقي الصفحة.',
              en: '3. Write a request asking to fix only those 2 items while keeping the rest of the page intact.',
            },
          ],
          deliverable: {
            ar: 'شارك ملاحظاتك ورسالة التحسين في شات Zoom أو أرسلها عبر واتساب من صفحة الجلسة.',
            en: 'Share your notes and improvement prompt in Zoom chat or via WhatsApp.',
          },
        },
      },
    },
    {
      id: 's04-slide-09',
      sessionNumber: 4,
      slideNumber: 9,
      totalSlides: 10,
      type: 'project',
      visualType: 'analyze-plan-build',
      title: {
        ar: 'الخطوة الرابعة في مشروعك: نسخة محسنة ومعتمدة من الصفحة',
        en: 'Step 4 in Your Project: An Improved & Verified Page Draft',
      },
      estimatedMinutes: 4,
      teachingGoal: {
        ar: 'إبراز تقدم المتدرب في مشروعه بعد إتمام مرحلة العمل الأساسي مع الذكاء الاصطناعي.',
        en: 'Highlight trainee progress after completing Phase 3 (Working with AI).',
      },
      speakerNotes: {
        ar: 'نفّذ: هنئ المتدربين بإتمام المرحلة الثالثة (العمل مع الذكاء الاصطناعي). الآن أصبحوا يعرفون كيف يطلبون وكيف يراجعون ويحسنون.\nاسأل: هل تشعرون الآن أنكم تتحكمون في نتيجة الذكاء الاصطناعي بدل أن يتحكم هو بكم؟\nتحقق: مهد للجلسة الخامسة حيث سنبدأ المرحلة الرابعة: بناء الموقع وتنظيم أجزائه وملفاته.',
        en: 'Congratulate trainees on completing Phase 3 and preview Phase 4.',
      },
      payload: {
        type: 'project',
        data: {
          stepNumber: '04',
          phaseName: {
            ar: 'المرحلة الثالثة: المراجعة والتحسين مع الذكاء الاصطناعي',
            en: 'Phase 3: Review & Improvement with AI',
          },
          whatWeBuildNow: {
            ar: 'النسخة المحسنة من الصفحة الرئيسية بعد فحص النصوص والألوان والأزرار',
            en: 'Refined Homepage Draft After Inspecting Text, Colors, and Buttons',
          },
          deliverables: [
            {
              ar: 'تطبيق قائمة الفحص الثلاثية على الصفحة الرئيسية',
              en: 'Applied 3-point inspection checklist on the homepage',
            },
            {
              ar: 'تحسين وضوح العناوين والمسافات بين البطاقات',
              en: 'Improved headline clarity and spacing between cards',
            },
            {
              ar: 'التأكد من بروز زر الطلب عبر واتساب وسهولة قراءته',
              en: 'Verified prominent, easy-to-read WhatsApp action button',
            },
          ],
          connectionToFinalProject: {
            ar: 'هذه المهارة سترافقك في كل خطوة قادمة لبناء موقعك وتطويره بأمان حتى يوم الإطلاق.',
            en: 'This skill will accompany you in every upcoming step until launch day.',
          },
        },
      },
    },
    {
      id: 's04-slide-10',
      sessionNumber: 4,
      slideNumber: 10,
      totalSlides: 10,
      type: 'takeaway',
      title: {
        ar: 'خلاصة الجلسة الرابعة في 3 نقاط',
        en: 'Session 04 Summary in 3 Points',
      },
      estimatedMinutes: 3,
      teachingGoal: {
        ar: 'تثبيت خلاصة المراجعة والتحسين الآمن والتمهيد للجلسة الخامسة.',
        en: 'Reinforce safe review and refinement rules and preview Session 05.',
      },
      speakerNotes: {
        ar: 'نفّذ: راجع النقاط الثلاث مع المتدربين.\nاسأل: ما القاعدة الذهبية قبل تعديل أي مشروع قائم؟ (افحص وخطط أولًا!).\nتحقق: ذكّرهم بإرسال نشاط الجلسة عبر واتساب والاستعداد للجلسة الخامسة.',
        en: 'Review the 3 takeaways and preview Session 05.',
      },
      payload: {
        type: 'takeaway',
        data: {
          takeaways: [
            {
              number: '01',
              title: {
                ar: 'النتيجة الأولى هي بداية التحسين',
                en: 'The First Result Is the Starting Point',
              },
              description: {
                ar: 'أفضل المواقع تُبنى عبر جولات قصيرة من المراجعة الهادئة وطلب التحسين المحدد.',
                en: 'The best websites are built through short rounds of calm review and targeted refinement.',
              },
            },
            {
              number: '02',
              title: {
                ar: 'افحص وخطط قبل تعديل الملفات',
                en: 'Inspect & Plan Before Modifying Files',
              },
              description: {
                ar: 'اطلب من المساعد الذكي عرض خطة التعديل أولًا لتضمن سلامة الأقسام الناجحة في موقعك.',
                en: 'Ask AI to show an edit plan first so your working sections stay safe.',
              },
            },
            {
              number: '03',
              title: {
                ar: 'عدّل خطوة واحدة واختبرها فورًا',
                en: 'Change One Step at a Time and Test Immediately',
              },
              description: {
                ar: 'التعديلات الصغيرة المتدرجة تجعل تقدمك سريعًا وواضحًا وخاليًا من الأخطاء.',
                en: 'Small, steady edits keep your progress fast, clear, and error-free.',
              },
            },
          ],
          coreMotto: {
            ar: 'الخطوة القادمة في الجلسة 05: كيف نقسّم الصفحة إلى أجزاء منظمة ونجهز ملفات المشروع؟',
            en: 'Up Next in Session 05: How to break the page into organized parts and set up project files.',
          },
        },
      },
    },
  ],
};
