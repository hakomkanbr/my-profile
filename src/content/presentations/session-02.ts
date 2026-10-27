import { PresentationSession } from '@/types';

export const SESSION_02: PresentationSession = {
  id: 'session-02',
  number: 2,
  slug: 'session-02',
  title: {
    ar: 'تخطيط صفحات الموقع وتصميم تجربة واضحة ومريحة للزائر',
    en: 'Planning Website Pages & Designing a Clear Visitor Experience',
  },
  subtitle: {
    ar: 'كيف نختار الصفحات الرئيسية، ونرتب المعلومات من الأعلى للأسفل، ونحول الفكرة إلى تصميم بصري واضح؟',
    en: 'How to choose main pages, order information from top to bottom, and create a clean visual design',
  },
  durationMinutes: 90,
  goal: {
    ar: 'تمكين المتدرب من رسم خريطة صفحات موقعه وترتيب أقسام الصفحة الرئيسية بصريًا وتجربة توليد تصميم أولي واضح عبر أدوات التصميم الذكية مثل Google Stitch.',
    en: 'Enable trainees to map their website pages, arrange homepage sections, and generate a clean visual prototype.',
  },
  prerequisites: [
    {
      ar: 'إكمال الجلسة 01 وتحديد فكرة المشروع والزائر المستهدف',
      en: 'Completion of Session 01 and choosing a project idea',
    },
  ],
  objectives: [
    {
      ar: 'تحديد الصفحات الرئيسية للموقع وترتيب تنقل الزائر بينها بسهولة',
      en: 'Identify main website pages and simple visitor navigation',
    },
    {
      ar: 'ترتيب أقسام الصفحة الواحدة من الأعلى إلى الأسفل بحسب أهمية المعلومة للزائر',
      en: 'Order page sections from top to bottom based on visitor priority',
    },
    {
      ar: 'التفريق بين العناصر الأساسية الضرورية والعناصر الثانوية التي تسبب الازدحام',
      en: 'Distinguish between essential elements and decorative clutter',
    },
    {
      ar: 'تحويل خطة الصفحة المكتوبة إلى تصميم بصري واضح باستخدام Google Stitch وأدوات الذكاء الاصطناعي',
      en: 'Turn a written page plan into a clean visual mockup using Google Stitch and AI',
    },
  ],
  timeline: [
    {
      timeRange: '00:00 – 00:15',
      durationMinutes: 15,
      label: { ar: 'مراجعة أفكار المتدربين ورسم خريطة الصفحات الرئيسية', en: 'Review trainee ideas & map main pages' },
      type: 'context',
    },
    {
      timeRange: '00:15 – 00:30',
      durationMinutes: 15,
      label: { ar: 'ترتيب المعلومات داخل الصفحة: ماذا يرى الزائر أولًا ثم ثانيًا؟', en: 'Information order inside a page' },
      type: 'concept',
    },
    {
      timeRange: '00:30 – 00:45',
      durationMinutes: 15,
      label: { ar: 'العناصر الأساسية مقابل العناصر الثانوية وتناسق الألوان والخطوط', en: 'Essential vs decorative elements & visual harmony' },
      type: 'comparison',
    },
    {
      timeRange: '00:45 – 01:05',
      durationMinutes: 20,
      label: { ar: 'تطبيق عملي: توليد تصميم واجهة مقهى عبر Google Stitch ومراجعته', en: 'Live Demo: Designing a Café UI with Google Stitch' },
      type: 'demo',
    },
    {
      timeRange: '01:05 – 01:20',
      durationMinutes: 15,
      label: { ar: 'نشاط المتدرب: رسم ترتيب أقسام صفحته الرئيسية واختيار ألوانه', en: 'Trainee Activity: Arrange homepage sections & colors' },
      type: 'practice',
    },
    {
      timeRange: '01:20 – 01:30',
      durationMinutes: 10,
      label: { ar: 'مراجعة التصاميم وخلاصة الجلسة الثانية', en: 'Review layouts & Session 02 summary' },
      type: 'takeaway',
    },
  ],
  projectMilestone: {
    ar: 'إعداد خريطة أقسام الصفحة الرئيسية والتصميم البصري الأولي مع اختيار لونين متناسقين وخط واضح.',
    en: 'Create the homepage section map and initial visual design with a clean color palette.',
  },
  aiRole: {
    ar: 'أداة رسم بصري تحول وصف الأقسام المكتوب إلى نموذج شاشة مرئي نراجعه ونختار الأفضل منه.',
    en: 'Visual design assistant turning written section plans into visible screen mockups.',
  },
  marketConnection: {
    ar: 'عرض تصميم بصري واضح للعميل قبل البرمجة يختصر التعديلات ويمنحه ثقة كبيرة في مشروعك.',
    en: 'Showing a clear visual prototype before coding reduces revisions and builds client trust.',
  },
  startScreen: {
    badge: 'الجلسة 02 من 12 • التخطيط والتصميم البصري',
    headline: {
      ar: 'تخطيط صفحات الموقع وتصميم تجربة واضحة ومريحة',
      en: 'Planning Website Pages & Designing a Clear Experience',
    },
    description: {
      ar: 'في هذه الجلسة نتعلم كيف نرتب المعلومات داخل الصفحة بحيث يفهمها الزائر بدون جهد، وكيف نحول فكرتنا إلى تصميم مرئي جذاب.',
      en: 'Learn how to arrange information on a page effortlessly and turn your idea into a clean visual mockup.',
    },
    sessionGoal: {
      ar: 'تحديد ترتيب أقسام صفحتك الرئيسية وتصميم نموذجها البصري الأول بوضوح.',
      en: 'Define the section order of your homepage and create its first clean visual mockup.',
    },
  },
  endScreen: {
    headline: {
      ar: 'رائع! أصبح لموقعك الآن خريطة صفحات وتصميم بصري واضح',
      en: 'Awesome! Your Website Now Has a Clear Page Map and Visual Design',
    },
    keyRecap: [
      {
        ar: 'الصفحة الواضحة تبدأ بالعنوان والهدف في الأعلى، ثم التفاصيل والأسعار، ثم زر التواصل.',
        en: 'A clear page starts with the headline and goal at the top, then details, then the contact button.',
      },
      {
        ar: 'حذف العناصر غير الضرورية والمساحات المريحة حول النصوص يجعل الموقع يبدو احترافيًا.',
        en: 'Removing unnecessary elements and keeping comfortable spacing makes the site look professional.',
      },
      {
        ar: 'أدوات التصميم بالذكاء الاصطناعي مثل Google Stitch تساعدنا على رؤية شكل الموقع قبل بنائه.',
        en: 'AI design tools like Google Stitch help us preview the website layout before building it.',
      },
    ],
    nextSessionNumber: '03',
    nextSessionTitle: {
      ar: 'كيف تصف فكرتك للذكاء الاصطناعي بوضوح؟ (صياغة الطلب خطوة بخطوة)',
      en: 'How to Describe Your Idea Clearly to AI (Step-by-Step Prompting)',
    },
  },
  slides: [
    {
      id: 's02-slide-01',
      sessionNumber: 2,
      slideNumber: 1,
      totalSlides: 10,
      type: 'title',
      visualType: 'site-pages-map',
      realWorldExample: {
        ar: 'عندما تدخل متجرًا مرتبًا تجد لوحة الأقسام عند المدخل، والمنتجات الأكثر طلبًا أمامك، وصندوق الدفع في مكان واضح.',
        en: 'In a well-organized store, signs are at the entrance, popular items are upfront, and checkout is easy to spot.',
      },
      title: {
        ar: 'تخطيط الصفحات وتصميم الواجهة',
        en: 'Planning Pages & Designing the Interface',
      },
      estimatedMinutes: 5,
      teachingGoal: {
        ar: 'تقديم مفهوم تخطيط الصفحات وتجربة المستخدم البسيطة بلغة الحياة اليومية.',
        en: 'Introduce page planning and simple UX using everyday real-world analogies.',
      },
      speakerNotes: {
        ar: 'نفّذ: اربط الجلسة الأولى بالجلسة الثانية: بعد أن اخترنا فكرة الموقع في الجلسة السابقة، سنتعلم اليوم كيف نرتب صفحاته وأقسامه على الشاشة.\nاسأل: لماذا نرتب الغرف والأبواب على الورق قبل بناء أي منزل؟\nتحقق: تأكد أن الجميع يفهم أن التصميم الجيد هو «ترتيب واضح للمعلومات» وليس مجرد تلوين.',
        en: 'Connect Session 01 to Session 02: now that we have our idea, we organize its pages and layout.',
      },
      payload: {
        type: 'title',
        data: {
          sessionNumber: '02',
          totalSessions: '12',
          durationMinutes: 90,
          kicker: {
            ar: 'المرحلة الثانية • التخطيط والتصميم البصري',
            en: 'Phase 2 • Planning & Visual Design',
          },
          headline: {
            ar: 'كيف نخطط صفحات الموقع ونرتب المعلومات بوضوح؟',
            en: 'How Do We Plan Website Pages and Arrange Information Clearly?',
          },
          subheadline: {
            ar: 'نتعرف على خريطة الموقع، وترتيب الأقسام من الأعلى للأسفل، وتحويل الفكرة إلى تصميم مرئي مريح للعين.',
            en: 'Learn website sitemaps, top-to-bottom section ordering, and turning ideas into clean visual designs.',
          },
          tags: ['خريطة الصفحات', 'ترتيب الأقسام', 'تصميم مريح للزائر', 'Google Stitch'],
        },
      },
    },
    {
      id: 's02-slide-02',
      sessionNumber: 2,
      slideNumber: 2,
      totalSlides: 10,
      type: 'visual',
      visualType: 'site-pages-map',
      title: {
        ar: 'الصفحات الرئيسية للموقع وكيف ترتبط ببعضها',
        en: 'Main Website Pages and How They Connect',
      },
      subtitle: {
        ar: 'ابدأ بصفحة رئيسية قوية تقود الزائر إلى ما يبحث عنه في خطوة واحدة',
        en: 'Start with a strong homepage that guides visitors in one step',
      },
      estimatedMinutes: 8,
      teachingGoal: {
        ar: 'تعليم المبتدئ أن الموقع البسيط لا يحتاج إلى 20 صفحة؛ بل يكفيه هيكل واضح من 3 أو 4 أقسام/صفحات أساسية.',
        en: 'Teach beginners that a great starter website only needs 3–4 clear sections or pages.',
      },
      speakerNotes: {
        ar: 'نفّذ: اشرح خريطة الموقع المعروضة: الصفحة الرئيسية هي نقطة الانطلاق، ومنها يصل الزائر إلى القائمة/الخدمات، ولماذا يختارنا، وزر الطلب عبر واتساب.\nاسأل: هل الأفضل للمبتدئ أن يبني 10 صفحات نصفها فارغ أم صفحة رئيسية واحدة متكاملة وواضحة؟\nتحقق: وجه المتدربين للتركيز على إتقان الصفحة الرئيسية أولًا.',
        en: 'Explain the sitemap diagram: Homepage -> Menu/Services, Why Us, and WhatsApp Contact.',
      },
      payload: {
        type: 'visual',
        data: {
          diagramType: 'flow',
          caption: {
            ar: 'كلما كان عدد الخطوات للوصول إلى المنتج أو زر الطلب أقل، كان الموقع أسهل وأنجح.',
            en: 'The fewer steps needed to reach the product or order button, the better the website.',
          },
          nodes: [
            {
              id: 'p1',
              stepNumber: '01',
              badge: 'المدخل',
              title: { ar: 'الصفحة الرئيسية', en: 'Homepage' },
              description: { ar: 'تعريف سريع بالمشروع وما يقدمه للزائر.', en: 'Quick intro to the project and what it offers.' },
            },
            {
              id: 'p2',
              stepNumber: '02',
              badge: 'العرض',
              title: { ar: 'الخدمات أو المنتجات', en: 'Services or Products' },
              description: { ar: 'بطاقات واضحة بالصور والأسعار والتفاصيل.', en: 'Clear cards with photos, prices, and details.' },
            },
            {
              id: 'p3',
              stepNumber: '03',
              badge: 'الثقة',
              title: { ar: 'لماذا نحن؟ والآراء', en: 'Why Us & Reviews' },
              description: { ar: 'مميزات الخدمة وتجارب العملاء السابقين.', en: 'Service benefits and customer testimonials.' },
            },
            {
              id: 'p4',
              stepNumber: '04',
              badge: 'الهدف',
              title: { ar: 'الطلب عبر واتساب', en: 'WhatsApp Ordering' },
              description: { ar: 'زر تواصل مباشر وساعات العمل والعنوان.', en: 'Direct WhatsApp button, hours, and location.' },
            },
          ],
        },
      },
    },
    {
      id: 's02-slide-03',
      sessionNumber: 2,
      slideNumber: 3,
      totalSlides: 10,
      type: 'concept',
      visualType: 'page-anatomy',
      realWorldExample: {
        ar: 'الصفحة المرتبة تشبه الصفحة الأولى من جريدة واضحة: عنوان رئيسي كبير في الأعلى، ثم تفاصيل الخبر، ثم أرقام التواصل في الأسفل.',
        en: 'A clean webpage is like a clear front page: big headline at the top, key details in the middle, contact info at the bottom.',
      },
      title: {
        ar: 'ترتيب المعلومات داخل الصفحة من الأعلى إلى الأسفل',
        en: 'Ordering Information Inside a Page from Top to Bottom',
      },
      estimatedMinutes: 10,
      teachingGoal: {
        ar: 'توضيح التسلسل الطبيعي لأقسام الصفحة الأربعة (الشريط العلوي، القسم الترحيبي، البطاقات، التذييل).',
        en: 'Clarify the natural 4-part anatomy of a webpage (Header, Hero, Cards, Footer).',
      },
      speakerNotes: {
        ar: 'نفّذ: تتبع الرسم التوضيحي من رقم 1 إلى رقم 4 مع المتدربين. هذا الترتيب القياسي مألوف لكل مستخدم إنترنت في العالم.\nاسأل: ماذا لو وضعنا ساعات العمل في أعلى الصفحة وخبأنا اسم المقهى في الأسفل؟ سيشعر الزائر بالارتباك!\nتحقق: تأكد أن الجميع يحفظ الأقسام الأربعة بالترتيب.',
        en: 'Trace sections 1 to 4 on the Page Anatomy illustration.',
      },
      payload: {
        type: 'concept',
        data: {
          tagline: { ar: 'تشريح الصفحة القياسي', en: 'Standard Page Structure' },
          principle: {
            ar: 'نرتب الصفحة بحسب الأسئلة التي تدور في ذهن الزائر',
            en: 'Arrange the Page in the Order Visitors Ask Questions',
          },
          explanation: {
            ar: 'عندما يفتح الزائر الصفحة، تتحرك عينه من الأعلى إلى الأسفل بحثًا عن إجابات سريعة ومرتبة.',
            en: 'When a visitor opens a page, their eyes scan from top to bottom looking for quick answers.',
          },
          bulletPoints: [
            {
              ar: '1. الشريط العلوي (Header) والقسم الترحيبي (Hero): من نحن وماذا نقدم؟ مع زر طلب سريع.',
              en: '1. Header & Hero: Who are we and what do we offer? Plus a quick action button.',
            },
            {
              ar: '2. قسم البطاقات والمميزات: ما الأصناف أو الخدمات المتوفرة وكم أسعارها؟',
              en: '2. Cards & Benefits Section: What items or services are available and at what price?',
            },
            {
              ar: '3. قسم التواصل والتذييل (Footer): كيف أطلب الآن وأين يقع المكان؟',
              en: '3. Contact & Footer: How do I order right now and where are you located?',
            },
          ],
          architecturalRule: {
            ar: 'ضع المعلومة الأهم في أعلى الصفحة دائمًا قبل أن يحتاج الزائر للتمرير إلى الأسفل.',
            en: 'Always place the most important message at the top before scrolling.',
          },
        },
      },
    },
    {
      id: 's02-slide-04',
      sessionNumber: 2,
      slideNumber: 4,
      totalSlides: 10,
      type: 'comparison',
      visualType: 'before-after-ui',
      title: {
        ar: 'الفرق بين العناصر الأساسية والعناصر الثانوية',
        en: 'Essential Elements vs. Secondary Decorative Elements',
      },
      subtitle: {
        ar: 'كيف نبرز المعلومة المهمة ونحذف الفوضى التي تشتت عين الزائر؟',
        en: 'How to highlight what matters and remove distracting clutter',
      },
      estimatedMinutes: 9,
      teachingGoal: {
        ar: 'تدريب عين المبتدئ على تمييز العناصر الأساسية (العنوان، السعر، زر الطلب) وإعطائها حجمًا وتباينًا أوضح.',
        en: 'Train beginners to prioritize essential elements (Title, Price, Action Button) with size and spacing.',
      },
      speakerNotes: {
        ar: 'نفّذ: قارن بين بطاقة القهوة قبل التحسين وبعد التحسين في الرسم التوضيحي. لاحظ كيف أن نفس الكلمات أصبحت مريحة وجذابة فقط عندما كبرنا العنوان وفصلنا السعر وأبرزنا زر واتساب.\nاسأل: في البطاقة المحسنة (الخضراء)، ما أول شيء تقع عليه عينك؟\nتحقق: هذا ما نسميه في التصميم «ترتيب الأهمية البصرية (Visual Hierarchy)».',
        en: 'Compare the Before and After coffee cards in the illustration.',
      },
      payload: {
        type: 'comparison',
        data: {
          leftHeader: {
            ar: 'العناصر الأساسية (نبرزها بوضوح)',
            en: 'Essential Elements (Highlight Clearly)',
          },
          rightHeader: {
            ar: 'العناصر الثانوية أو الزائدة (نقللها أو نحذفها)',
            en: 'Secondary or Extra Elements (Minimize or Remove)',
          },
          dimensions: [
            {
              dimension: { ar: 'النصوص والعناوين', en: 'Text & Headings' },
              left: {
                ar: 'اسم المنتج أو الخدمة بخط كبير ووصف مختصر في سطر واحد',
                en: 'Product/service name in bold and a 1-line description',
              },
              right: {
                ar: 'فقرات إنشائية طويلة تتحدث عن تاريخ الشركة بالتفصيل الممل',
                en: 'Long paragraphs of filler text that distract from the offer',
              },
            },
            {
              dimension: { ar: 'الألوان والخلفيات', en: 'Colors & Backgrounds' },
              left: {
                ar: 'خلفية هادئة ومريحة مع لون مميز واحد فقط للأزرار المهمة',
                en: 'Calm background with one accent color for main buttons',
              },
              right: {
                ar: '5 أو 6 ألوان صارخة في نفس القسم تسبب إجهادًا للعين',
                en: '5 or 6 loud colors competing in the same section',
              },
            },
            {
              dimension: { ar: 'الأزرار في القسم الواحد', en: 'Buttons per Section' },
              left: {
                ar: 'زر إجراء أساسي واحد واضح (مثل: اطلب عبر واتساب)',
                en: 'One clear primary action button (e.g., Order via WhatsApp)',
              },
              right: {
                ar: 'عدة أزرار متزاحمة بنفس الحجم تجعل الزائر يحتار أيها يضغط',
                en: 'Multiple crowded buttons of the same size',
              },
            },
          ],
          balancedVerdict: {
            ar: 'كل عنصر تضيفه للصفحة إما أن يساعد الزائر على الفهم والطلب، أو يشوش عليه؛ احذف كل ما لا يخدم الزائر.',
            en: 'Every element either helps the visitor act or distracts them—keep only what helps.',
          },
        },
      },
    },
    {
      id: 's02-slide-05',
      sessionNumber: 2,
      slideNumber: 5,
      totalSlides: 10,
      type: 'question',
      visualType: 'cluttered-vs-clean',
      title: {
        ar: 'اختبر عينك التصميمية الآن',
        en: 'Test Your Design Eye Now',
      },
      estimatedMinutes: 6,
      teachingGoal: {
        ar: 'تفعيل مشاركة المتدربين في نقد تصميم مزدحم واقتراح تحسينه.',
        en: 'Engage trainees in spotting clutter and suggesting improvements.',
      },
      speakerNotes: {
        ar: 'نفّذ: اطرح السؤال واطلب من المتدربين كتابة عنصر واحد سيحذفونه أو يرتبونه لو رأوا صفحة مزدحمة.\nاسأل: كم لونًا أساسيًا يكفي لتصميم موقع أنيق ومرتب؟\nتحقق: أكد لهم أن لونًا أساسيًا واحدًا (مثل الأخضر أو الأزرق أو البرتقالي الدافئ) مع خلفية فاتحة أو داكنة مريحة يكفي تمامًا.',
        en: 'Ask trainees how many primary colors are needed for a clean site (1 main accent + calm neutrals).',
      },
      payload: {
        type: 'question',
        data: {
          question: {
            ar: 'لو طلب منك صاحب متجر وضع 10 أزرار و6 ألوان مختلفة في أول الصفحة، بماذا تنصحه؟',
            en: 'If a store owner asks for 10 buttons and 6 colors at the top of the page, what would you advise?',
          },
          contextHint: {
            ar: 'تذكر كيف يتصفح الزبون الموقع من شاشة هاتفه الصغيرة.',
            en: 'Remember how customers browse on a small phone screen.',
          },
          promptToClass: {
            ar: 'اكتب نصيحتك لصاحب المتجر في جملة واحدة في شات Zoom 💬',
            en: 'Write your 1-sentence advice in Zoom chat 💬',
          },
          expectedAnswers: [
            {
              ar: 'نكتفي بزر أساسي واحد واضح في الأعلى (اطلب الآن) حتى لا يتشتت الزبون.',
              en: 'Keep one clear main button at the top so the customer is not confused.',
            },
            {
              ar: 'نستخدم لونًا أساسيًا واحدًا للهوية مع خلفية هادئة تبرز صور المنتجات.',
              en: 'Use one main brand color with a calm background so product photos stand out.',
            },
          ],
        },
      },
    },
    {
      id: 's02-slide-06',
      sessionNumber: 2,
      slideNumber: 6,
      totalSlides: 10,
      type: 'concept',
      visualType: 'idea-to-website',
      realWorldExample: {
        ar: 'بدل رسم الواجهة يدويًا لساعات، نصف الأقسام الأربعة لأداة مثل Google Stitch فترسم لنا نموذجًا مرئيًا في ثوانٍ لنختار منه.',
        en: 'Instead of drawing manually for hours, we describe our 4 sections to Google Stitch and get a visual draft in seconds.',
      },
      title: {
        ar: 'كيف تساعدنا أدوات الذكاء الاصطناعي في تصميم شكل الموقع؟',
        en: 'How AI Tools Help Us Design the Website Look',
      },
      estimatedMinutes: 10,
      teachingGoal: {
        ar: 'تعريف المتدرب بكيفية استخدام أدوات التصميم بالذكاء الاصطناعي (مثل Google Stitch) لتحويل خطة الأقسام إلى صورة مرئية.',
        en: 'Show how AI UI tools like Google Stitch turn a written section plan into a visual screen design.',
      },
      speakerNotes: {
        ar: 'نفّذ: اشرح للمتدربين أننا لا نحتاج إلى إتقان برامج تصميم معقدة؛ نحن نكتب وصف الأقسام التي خططناها، وأداة التصميم الذكية ترسم لنا الشاشة.\nاسأل: هل نقبل أول رسم يخرجه الذكاء الاصطناعي كما هو أم نراجعه ونطلب تبسيطه؟\nتحقق: نراجعه دائمًا ونحذف أي عناصر زائدة ونختار الألوان والخطوط الواضحة (Design Tokens).',
        en: 'Explain how Google Stitch generates visual UI mockups from our section list.',
      },
      payload: {
        type: 'concept',
        data: {
          tagline: { ar: 'التصميم الذكي بدون تعقيد', en: 'Smart Visual Prototyping' },
          principle: {
            ar: 'نحول خطة الأقسام المكتوبة إلى شاشة مرئية قبل كتابة الكود',
            en: 'Turn Your Written Plan into a Visible Screen Before Coding',
          },
          explanation: {
            ar: 'تساعدنا أدوات مثل Google Stitch على رؤية شكل الصفحة وتجربة الألوان والمسافات بسرعة كبيرة.',
            en: 'Tools like Google Stitch help us see the page layout and test colors and spacing quickly.',
          },
          bulletPoints: [
            {
              ar: '1. نكتب للأداة: نوع الموقع + الأقسام الأربعة بالترتيب + اللون المفضل.',
              en: '1. Give the tool: site type + 4 ordered sections + preferred color.',
            },
            {
              ar: '2. نفحص التصميم الناتج: هل العنوان واضح؟ هل البطاقات مريحة للعين؟',
              en: '2. Inspect the result: Is the headline clear? Are the cards comfortable to read?',
            },
            {
              ar: '3. نحتفظ بدرجات الألوان المختارة (لون الخلفية، لون النص، ولون الأزرار) لنستخدمها في موقعنا.',
              en: '3. Save the chosen colors (background, text, button color) to use in our project.',
            },
          ],
          architecturalRule: {
            ar: 'رؤية شكل الصفحة قبل بنائها يوفر عليك نصف وقت العمل والتعديل.',
            en: 'Seeing the page layout before building saves half your time.',
          },
        },
      },
    },
    {
      id: 's02-slide-07',
      sessionNumber: 2,
      slideNumber: 7,
      totalSlides: 10,
      type: 'demo',
      visualType: 'page-anatomy',
      title: {
        ar: 'تطبيق عملي: تصميم واجهة مقهى القهوة المختصة خطوة بخطوة',
        en: 'Live Demo: Designing the Specialty Café Interface Step by Step',
      },
      estimatedMinutes: 15,
      teachingGoal: {
        ar: 'عرض تجربة حية لتوليد تصميم واجهة المقهى ومراجعة ترتيب الأقسام والألوان أمام المتدربين.',
        en: 'Demonstrate live generation of the café UI mockup and review its sections and colors.',
      },
      speakerNotes: {
        ar: 'نفّذ: افتح أداة التصميم أو اعرض النموذج الحي، وأدخل الوصف البسيط للمقهى، ثم ناقش مع المتدربين كيف ظهرت الأقسام الأربعة.\nاسأل: ما رأيكم في تباين لون زر الطلب مع لون الخلفية؟ هل هو واضح؟\nتحقق: أرِ المتدربين كيف نحدد 3 ألوان أساسية فقط للمشروع (لون خلفية هادئ، لون نص واضح، ولون مميز للأزرار).',
        en: 'Run the live demo showing the café interface layout and its 3 core colors.',
      },
      payload: {
        type: 'demo',
        data: {
          objective: {
            ar: 'تحويل خطة موقع المقهى إلى تصميم مرئي مرتب من 4 أقسام',
            en: 'Turn our café website plan into a clean 4-section visual design',
          },
          instructorSteps: [
            {
              ar: 'ندخل وصف الأقسام الأربعة: الشريط العلوي، الترحيب، بطاقات المشروبات الست، والتذييل.',
              en: 'Enter the 4 sections: Header, Hero, 6 drink cards, and Footer.',
            },
            {
              ar: 'نختار ألوانًا مريحة تناسب المقهى (خلفية كريمية فاتحة، نص بني داكن، وزر أخضر واضح للطلب).',
              en: 'Choose warm café colors (light cream background, dark espresso text, emerald order button).',
            },
            {
              ar: 'نراجع المسافات بين البطاقات ونتأكد أن كل بطاقة تعرض (الاسم + السعر + زر الطلب) بوضوح.',
              en: 'Verify card spacing so each card clearly shows Name + Price + Order button.',
            },
          ],
          promptToUse:
            'صمم واجهة صفحة رئيسية لمقهى قهوة مختصة تتكون من 4 أقسام بالترتيب: 1. شريط علوي بسيط 2. قسم ترحيبي بعنوان واضح وزر طلب عبر واتساب 3. شبكة من 6 بطاقات مشروبات مع السعر 4. تذييل بساعات العمل والعنوان. استخدم ألواناً هادئة ومريحة للعين.',
          expectedOutput: {
            ar: 'تصميم بصري واضح ومرتب نعرف منه شكل كل قسم وألوان الموقع قبل البدء بالبناء.',
            en: 'A clean visual layout showing every section and color before we start building.',
          },
        },
      },
    },
    {
      id: 's02-slide-08',
      sessionNumber: 2,
      slideNumber: 8,
      totalSlides: 10,
      type: 'challenge',
      visualType: 'page-anatomy',
      title: {
        ar: 'نشاطك العملي: رتب أقسام صفحتك الرئيسية واختر ألوانها',
        en: 'Your Practical Activity: Order Your Homepage Sections & Pick Colors',
      },
      estimatedMinutes: 15,
      teachingGoal: {
        ar: 'جعل كل متدرب يكتب الترتيب النهائي لأقسام صفحته الرئيسية من الأعلى للأسفل ويختار ألوانها الهادئة.',
        en: 'Have each trainee write the top-to-bottom section order and color palette for their homepage.',
      },
      speakerNotes: {
        ar: 'نفّذ: شغّل المؤقت لمدة 15 دقيقة واطلب من كل متدرب ترتيب أقسام مشروعه الأربعة من الأعلى للأسفل.\nاسأل: ماذا ستكتب في العنوان الرئيسي (Hero) في أعلى صفحتك ليجذب الزائر؟\nتحقق: راجع مشاركات المتدربين وتأكد من عدم وجود ازدحام في الأقسام.',
        en: 'Run the 15-minute timer and review trainee section plans in Zoom chat.',
      },
      payload: {
        type: 'challenge',
        data: {
          mission: {
            ar: 'ارسم خطة أقسام صفحتك الرئيسية من الأعلى إلى الأسفل',
            en: 'Map Your Homepage Sections from Top to Bottom',
          },
          durationMinutes: 15,
          objective: {
            ar: 'تحديد ترتيب المعلومات والعناوين والألوان التي سيراها زائر موقعك.',
            en: 'Define the exact order of sections, headlines, and colors your visitor will see.',
          },
          instructions: [
            {
              ar: 'اكتب العنوان الترحيبي الكبير الذي سيظهر في أعلى صفحتك (من 4 إلى 8 كلمات واضحة).',
              en: 'Write the main welcome headline at the top of your page (4–8 clear words).',
            },
            {
              ar: 'رتب 4 أقسام لصفحتك من الأعلى إلى الأسفل (مثال: ترحيب ← خدماتنا ← آراء العملاء ← تواصل عبر واتساب).',
              en: 'Order 4 sections from top to bottom (e.g., Welcome -> Services -> Reviews -> WhatsApp Contact).',
            },
            {
              ar: 'اختر لونًا أساسيًا واحدًا للأزرار المهمة ولون خلفية مريحًا يناسب فكرة موقعك.',
              en: 'Pick 1 primary button color and a calm background color that fits your project.',
            },
          ],
          deliverable: {
            ar: 'أرسل ترتيب أقسام صفحتك وألوانك المختارة في شات Zoom أو عبر زر واتساب في صفحة الجلسة.',
            en: 'Share your section order and chosen colors in Zoom chat or via WhatsApp.',
          },
        },
      },
    },
    {
      id: 's02-slide-09',
      sessionNumber: 2,
      slideNumber: 9,
      totalSlides: 10,
      type: 'project',
      visualType: 'before-after-ui',
      title: {
        ar: 'الخطوة الثانية في مشروعك: خريطة التصميم البصري',
        en: 'Step 2 in Your Project: Visual Design Map',
      },
      estimatedMinutes: 4,
      teachingGoal: {
        ar: 'ربط خريطة الأقسام والألوان بالمشروع المتكامل الذي يبنيه المتدرب.',
        en: 'Connect the section map and color palette to the trainee ongoing project.',
      },
      speakerNotes: {
        ar: 'نفّذ: وضح للمتدربين كيف أصبحت فكرتهم الآن أقرب للواقع بعد تحديد ترتيب الأقسام والألوان.\nاسأل: هل أصبحتم تتخيلون شكل موقعكم على الشاشة الآن بوضوح أكبر؟\nتحقق: في الجلسة القادمة سنتعلم كيف نصف هذا التصميم للذكاء الاصطناعي بدقة ليبنيه لنا.',
        en: 'Show how today’s visual layout prepares us for Session 03 prompting.',
      },
      payload: {
        type: 'project',
        data: {
          stepNumber: '02',
          phaseName: {
            ar: 'المرحلة الثانية: التخطيط والتصميم البصري',
            en: 'Phase 2: Planning & Visual Design',
          },
          whatWeBuildNow: {
            ar: 'مخطط ترتيب أقسام الصفحة الرئيسية + لوحة الألوان الأساسية',
            en: 'Homepage Section Order Blueprint + Core Color Palette',
          },
          deliverables: [
            {
              ar: 'العنوان الترحيبي الرئيسي والرسالة التوضيحية في أول الصفحة',
              en: 'Main welcome headline and short subtitle at the top of the page',
            },
            {
              ar: 'ترتيب واضح للأقسام الأربعة من الأعلى إلى الأسفل',
              en: 'Clear top-to-bottom order of the 4 main sections',
            },
            {
              ar: 'تحديد محتوى البطاقات (الاسم + الوصف المختصر + السعر أو الميزة)',
              en: 'Card content structure (Title + Short description + Price/Benefit)',
            },
            {
              ar: 'اختيار لون الخلفية ولون النص ولون زر الإجراء الأساسي',
              en: 'Selected background color, text color, and primary action button color',
            },
          ],
          connectionToFinalProject: {
            ar: 'هذا المخطط البصري هو المرجع الذي سنعتمد عليه في الجلسة القادمة عندما نطلب من الذكاء الاصطناعي بناء الصفحة.',
            en: 'This visual blueprint is what we will hand to AI in the next session to build our page.',
          },
        },
      },
    },
    {
      id: 's02-slide-10',
      sessionNumber: 2,
      slideNumber: 10,
      totalSlides: 10,
      type: 'takeaway',
      title: {
        ar: 'خلاصة الجلسة الثانية في 3 نقاط',
        en: 'Session 02 Summary in 3 Points',
      },
      estimatedMinutes: 3,
      teachingGoal: {
        ar: 'تلخيص قواعد التخطيط والتصميم البسيط والتمهيد للجلسة الثالثة.',
        en: 'Summarize page planning and simple UX rules and preview Session 03.',
      },
      speakerNotes: {
        ar: 'نفّذ: اختم الجلسة بمراجعة النقاط الثلاث وتذكير المتدربين بحفظ مخطط صفحتهم.\nاسأل: أي قسم في صفحتك متحمس لرؤيته مبنيًا في الجلسة القادمة؟\nتحقق: شجع المتدربين على إرسال نشاط الجلسة عبر واتساب للمراجعة.',
        en: 'Wrap up with the 3 key takeaways and preview Session 03.',
      },
      payload: {
        type: 'takeaway',
        data: {
          takeaways: [
            {
              number: '01',
              title: {
                ar: 'ابدأ بالأهم في أعلى الصفحة',
                en: 'Start with What Matters Most at the Top',
              },
              description: {
                ar: 'العنوان الواضح وزر الطلب السريع يجب أن يظهرا فور فتح الموقع دون بحث.',
                en: 'A clear headline and quick action button should be visible immediately.',
              },
            },
            {
              number: '02',
              title: {
                ar: 'البساطة والمساحات المريحة سر الجمال',
                en: 'Simplicity and Breathing Room Create Beauty',
              },
              description: {
                ar: 'عدد قليل من الأقسام المرتبة وألوان هادئة أفضل دائمًا من شاشة مزدحمة.',
                en: 'A few organized sections and calm colors always beat a crowded screen.',
              },
            },
            {
              number: '03',
              title: {
                ar: 'التصميم البصري يختصر وقت البناء',
                en: 'Visual Planning Saves Building Time',
              },
              description: {
                ar: 'عندما تعرف ترتيب أقسامك مسبقًا، يصبح توجيه الذكاء الاصطناعي لبنائها سهلًا ودقيقًا.',
                en: 'Knowing your section order upfront makes guiding AI fast and accurate.',
              },
            },
          ],
          coreMotto: {
            ar: 'الخطوة القادمة في الجلسة 03: كيف تصف فكرتك وتصميمك للذكاء الاصطناعي بوضوح ليبني لك الصفحة؟',
            en: 'Up Next in Session 03: How to describe your idea and layout clearly to AI.',
          },
        },
      },
    },
  ],
};
