import { PresentationSession } from '@/types';

export const SESSION_01: PresentationSession = {
  id: 'session-01',
  number: 1,
  slug: 'session-01',
  title: {
    ar: 'مدخل إلى صناعة المواقع: المواقع سابقًا والآن، وتجهيز أدوات العمل',
    en: 'Introduction to Web Creation: Websites Past & Present, and Setting Up Your Tools',
  },
  subtitle: {
    ar: 'الدرس الأول (90 دقيقة): كيف تطورت صناعة المواقع، وما الأدوات التي سنثبتها على أجهزتنا، وكيف نختار فكرة مشروعنا؟',
    en: 'Lesson 01 (90 min): How websites evolved, what tools to install on your computer, and choosing your project idea',
  },
  durationMinutes: 90,
  goal: {
    ar: 'أن يفهم المتدرب كيف كانت المواقع تُبنى سابقًا وكيف أصبحت تُبنى اليوم بمساعدة الذكاء الاصطناعي، ويثبّت الأدوات الأساسية على جهازه، ويحدد فكرة موقعه الذي سيبنيه خلال الدورة.',
    en: 'Understand how websites evolved from the past to today, install the required tools on your machine, and define your course project idea.',
  },
  prerequisites: [
    {
      ar: 'جهاز كمبيوتر متصل بالإنترنت — لا يشترط أي خبرة برمجية سابقة',
      en: 'A computer with internet connection — no prior coding experience required',
    },
  ],
  objectives: [
    {
      ar: 'معرفة الفرق بين المواقع في السابق والمواقع الحديثة اليوم من حيث الشكل وطريقة البناء والوقت',
      en: 'Understand the difference between websites in the past and modern websites today',
    },
    {
      ar: 'التعرف على المكونات الثلاثة لأي موقع ويب (الهيكل HTML، المظهر CSS، والتفاعل JavaScript) بلغة مبسطة',
      en: 'Learn the 3 building blocks of any website (HTML, CSS, JavaScript) in plain language',
    },
    {
      ar: 'تنزيل وتثبيت الأدوات الأساسية على الجهاز (Google Chrome، محرر الأكواد VS Code / Antigravity، و Node.js)',
      en: 'Download and install the essential tools on your computer (Chrome, Code Editor, Node.js)',
    },
    {
      ar: 'اختيار فكرة المشروع العملي وتحديد الجمهور المستهدف والأقسام الأساسية للصفحة الرئيسية',
      en: 'Choose your practical project idea and define its target visitor and core homepage sections',
    },
  ],
  timeline: [
    {
      timeRange: '00:00 – 00:25',
      durationMinutes: 25,
      label: {
        ar: 'الجزء الأول: المواقع سابقًا والآن — كيف تطورت صناعة الويب؟',
        en: 'Part 1: Websites Past vs. Present — How Web Creation Evolved',
      },
      type: 'context',
    },
    {
      timeRange: '00:25 – 00:45',
      durationMinutes: 20,
      label: {
        ar: 'الجزء الثاني: مما يتكون أي موقع إلكتروني وكيف يعمل؟',
        en: 'Part 2: What Makes Up a Website and How It Works',
      },
      type: 'concept',
    },
    {
      timeRange: '00:45 – 01:10',
      durationMinutes: 25,
      label: {
        ar: 'الجزء الثالث: الأدوات التي يجب تنزيلها وتثبيتها على جهازك اليوم',
        en: 'Part 3: Downloading and Installing Essential Tools on Your Computer',
      },
      type: 'demo',
    },
    {
      timeRange: '01:10 – 01:30',
      durationMinutes: 20,
      label: {
        ar: 'الجزء الرابع: النشاط العملي — فحص جاهزية الجهاز وتحديد فكرة موقعك',
        en: 'Part 4: Hands-On Activity — Tool Check & Defining Your Website Idea',
      },
      type: 'practice',
    },
  ],
  projectMilestone: {
    ar: 'تثبيت بيئة العمل الكاملة على جهازك + اعتماد بطاقة فكرة موقعك وأقسامه الرئيسية.',
    en: 'Install your complete local workspace + finalize your website idea card and core sections.',
  },
  aiRole: {
    ar: 'مساعد في تنفيذ الكود وتنظيم الأقسام بعد أن يحدد الإنسان الفكرة والخطة.',
    en: 'Execution assistant that builds sections after the human defines the idea and plan.',
  },
  marketConnection: {
    ar: 'أصحاب الأعمال اليوم يبحثون عمن ينجز لهم موقعًا واضحًا وسريعًا يخدم عملاءهم على الهاتف والكمبيوتر.',
    en: 'Business owners today want a clear, fast website that serves customers on phone and desktop.',
  },
  startScreen: {
    badge: 'الدرس 01 من 12 • مدة الدرس: 90 دقيقة (ساعة ونصف)',
    headline: {
      ar: 'الدرس الأول: المواقع سابقًا والآن، وتجهيز أدوات العمل على جهازك',
      en: 'Lesson 01: Websites Past & Present, and Setting Up Your Tools',
    },
    description: {
      ar: 'نبدأ رحلتنا بفهم كيف تغيرت صناعة المواقع بين الماضي واليوم، ونتعرف على مكونات أي موقع إلكتروني، ثم ننزل ونثبّت الأدوات التي سنعمل عليها طوال الدورة.',
      en: 'Understand how web development evolved, learn what makes up a website, and install the tools we will use throughout the course.',
    },
    sessionGoal: {
      ar: 'الخروج من الدرس الأول بفهم واضح لطريقة بناء المواقع الحديثة، وتثبيت الأدوات على جهازك، وتحديد فكرة مشروعك.',
      en: 'Finish Lesson 01 with a clear understanding of modern websites, installed tools, and a chosen project idea.',
    },
  },
  endScreen: {
    headline: {
      ar: 'أحسنت! أتممت الدرس الأول وجهزت أدواتك وفكرة مشروعك',
      en: 'Well Done! You Completed Lesson 01 and Prepared Your Tools & Project Idea',
    },
    keyRecap: [
      {
        ar: 'تطورت صناعة المواقع من كتابة كل سطر يدويًا لشهور طويلة إلى بناء منظم وسريع بمساعدة الذكاء الاصطناعي.',
        en: 'Web creation evolved from months of manual coding to fast, structured building with AI.',
      },
      {
        ar: 'الأدوات الأساسية على جهازك هي: متصفح Chrome، محرر الأكواد (VS Code / Antigravity)، وبيئة التشغيل Node.js.',
        en: 'Your core local tools are Google Chrome, a Code Editor (VS Code / Antigravity), and Node.js.',
      },
      {
        ar: 'نجاح الموقع يبدأ من وضوح الفكرة وتحديد ما يحتاجه الزائر قبل كتابة أي أمر أو كود.',
        en: 'A successful website starts with a clear idea and visitor needs before writing any code.',
      },
    ],
    nextSessionNumber: '02',
    nextSessionTitle: {
      ar: 'تخطيط صفحات الموقع وتصميم تجربة واضحة ومريحة للزائر',
      en: 'Planning Website Pages & Designing a Clear Visitor Experience',
    },
  },
  slides: [
    // SLIDE 01: TITLE
    {
      id: 's01-slide-01',
      sessionNumber: 1,
      slideNumber: 1,
      totalSlides: 15,
      type: 'title',
      realWorldExample: {
        ar: 'خطة الساعة والنصف اليوم: 1. المواقع سابقًا والآن (25 د) — 2. كيف يعمل الموقع؟ (20 د) — 3. تنزيل وتثبيت الأدوات على جهازك (25 د) — 4. اختيار فكرة موقعك (20 د).',
        en: 'Today’s 90-Minute Agenda: 1. Websites Past & Present (25m) — 2. How Websites Work (20m) — 3. Installing Your Tools (25m) — 4. Choosing Your Project Idea (20m).',
      },
      title: {
        ar: 'مدخل إلى صناعة المواقع وتجهيز الأدوات',
        en: 'Introduction to Web Creation & Tool Setup',
      },
      estimatedMinutes: 5,
      teachingGoal: {
        ar: 'الترحيب بالمتدربين واستعراض محاور الدرس الأول الأربعة وتوزيع وقت الساعة والنصف بوضوح.',
        en: 'Welcome trainees and present the 4 parts of the 90-minute introductory lesson.',
      },
      speakerNotes: {
        ar: 'نفّذ: رحّب بالمتدربين في الدرس الأول، واشرح لهم تقسيم الساعة والنصف (90 دقيقة) إلى 4 أجزاء واضحة: نبدأ بفهم كيف كانت المواقع سابقًا وكيف أصبحت اليوم، ثم نفهم مما يتكون الموقع، ثم ننزل الأدوات معًا على أجهزتنا، ونختم باختيار فكرة المشروع الذي سيبنيه كل متدرب.\nاسأل: من منكم جرب بناء موقع من قبل، ومن هذه هي تجربته الأولى تمامًا؟\nتحقق: طمئن المبتدئين أننا نسير خطوة بخطوة من الصفر.',
        en: 'Welcome trainees and walk through the 4 parts of today’s 90-minute session.',
      },
      payload: {
        type: 'title',
        data: {
          sessionNumber: '01',
          totalSessions: '12',
          durationMinutes: 90,
          kicker: {
            ar: 'الدرس التأسيسي الأول • مدخل شامل وتجهيز بيئة العمل',
            en: 'Lesson 01 • Comprehensive Introduction & Workspace Setup',
          },
          headline: {
            ar: 'المواقع سابقًا والآن، وكيف نجهز أدواتنا لنبني موقعنا الأول؟',
            en: 'Websites Past & Present, and Preparing Our Tools to Build',
          },
          subheadline: {
            ar: 'تعرف على تطور المواقع الإلكترونية، ومكونات أي موقع ناجح، والبرامج الأساسية التي سننزلها على أجهزتنا اليوم للبدء بالتطبيق العملي.',
            en: 'Learn how websites evolved, what makes up a successful site, and the essential programs we will install on our computers today.',
          },
          tags: [
            'المواقع سابقًا والآن',
            'مكونات الموقع الثلاثة',
            'تنزيل البرامج والأدوات',
            'اختيار فكرة المشروع',
          ],
        },
      },
    },

    // SLIDE 02: WEBSITES IN THE PAST
    {
      id: 's01-slide-02',
      sessionNumber: 1,
      slideNumber: 2,
      totalSlides: 15,
      type: 'context',
      realWorldExample: {
        ar: 'في السابق، كان تغيير حجم صورة أو نقل زر من يمين الصفحة إلى يسارها قد يحتاج إلى التواصل مع المبرمج والانتظار عدة أيام.',
        en: 'In the past, resizing an image or moving a button could require contacting a developer and waiting several days.',
      },
      title: {
        ar: 'كيف كانت المواقع الإلكترونية في السابق؟',
        en: 'What Were Websites Like in the Past?',
      },
      subtitle: {
        ar: 'المرحلة التقليدية: صفحات جامدة، وقت طويل في الكتابة اليدوية، وتكلفة عالية',
        en: 'The Traditional Era: Static pages, long manual coding, and high cost',
      },
      estimatedMinutes: 7,
      teachingGoal: {
        ar: 'توضيح شكل المواقع قديمًا وطريقة بنائها التقليدية ليدرك المتدرب حجم التطور والتسهيل الذي نعيشه اليوم.',
        en: 'Explain how websites looked and were built in the past so trainees appreciate today’s tools.',
      },
      speakerNotes: {
        ar: 'نفّذ: اشرح للمتدربين كيف كانت المواقع في بدايات الإنترنت وحتى سنوات قريبة: كانت أشبه بنشرات ورقية معروضة على شاشة كمبيوتر فقط (قبل انتشار الهواتف الذكية).\nاسأل: هل تتذكرون شكل المواقع القديمة عندما كنت تفتحها من الهاتف فتضطر لتكبير الشاشة بإصبعيك لقراءة سطر واحد؟\nتحقق: وضح أن المشكلة لم تكن في الشكل فقط، بل في صعوبة وطول وقت البناء اليدوي.',
        en: 'Describe old desktop-only websites and how slow manual coding from scratch used to be.',
      },
      payload: {
        type: 'context',
        data: {
          industryShift: {
            ar: 'كانت المواقع في السابق صفحات نصية ثابتة مصممة لشاشات الكمبيوتر الكبيرة فقط، ولا تتكيف مع شاشات الهواتف.',
            en: 'Websites used to be static text pages designed only for large desktop monitors, not phones.',
          },
          whyItMatters: {
            ar: 'كان بناء موقع بسيط يتطلب كتابة آلاف الأسطر البرمجية يدويًا حرفًا بحرف، ويستغرق أسابيع أو شهورًا من العمل.',
            en: 'Building a simple site required typing thousands of lines of code manually over weeks or months.',
          },
          realWorldProblem: {
            ar: 'كان صاحب المشروع الصغير يعجز غالبًا عن امتلاك موقع خاص به بسبب التكلفة المرتفعة والحاجة إلى فريق تقني كامل.',
            en: 'Small business owners often could not afford a website due to high cost and needing a full tech team.',
          },
        },
      },
    },

    // SLIDE 03: WEBSITES TODAY
    {
      id: 's01-slide-03',
      sessionNumber: 1,
      slideNumber: 3,
      totalSlides: 15,
      type: 'context',
      realWorldExample: {
        ar: 'اليوم يستطيع زبون المقهى أو المتجر أن يفتح الرابط من هاتفه، يتصفح الأصناف بالصور والأسعار، ويضغط زرًا واحدًا فيصل طلبه جاهزًا عبر واتساب.',
        en: 'Today, a café customer can open a link on their phone, browse items with prices, and tap one button to send their order via WhatsApp.',
      },
      title: {
        ar: 'كيف أصبحت المواقع الإلكترونية اليوم؟',
        en: 'What Are Websites Like Today?',
      },
      subtitle: {
        ar: 'المرحلة الحديثة: واجهات مريحة للهاتف، تفاعل مباشر، وبناء سريع بمساعدة الذكاء الاصطناعي',
        en: 'The Modern Era: Mobile-first interfaces, direct interaction, and fast AI-assisted building',
      },
      estimatedMinutes: 7,
      teachingGoal: {
        ar: 'توضيح خصائص الموقع الحديث اليوم وكيف غير الذكاء الاصطناعي طريقة بنائه.',
        en: 'Explain the characteristics of modern websites and how AI transformed building them.',
      },
      speakerNotes: {
        ar: 'نفّذ: انتقل الآن إلى الحاضر: كيف تغيرت المواقع اليوم في نقطتين أساسيتين: (1) تجربة الزائر أصبحت مصممة للهاتف أولًا ومربوطة بالتواصل الفوري، و(2) طريقة البناء أصبحت تعتمد على أدوات حديثة ومساعد ذكي يختصر الوقت.\nاسأل: كم نسبة الزوار الذين يفتحون مواقع المطاعم والمتاجر من هواتفهم اليوم في رأيكم؟ (أكثر من 80%!).\nتحقق: لذلك سنركز طوال الدورة على أن يكون موقعنا واضحًا ومريحًا على الهاتف والكمبيوتر معًا.',
        en: 'Explain how modern websites are mobile-first, interactive, and built much faster with AI assistance.',
      },
      payload: {
        type: 'context',
        data: {
          industryShift: {
            ar: 'أصبحت المواقع اليوم تطبيقات حية وسريعة تفتح في ثوانٍ، وتتكيف تلقائيًا مع شاشة الهاتف والتابلت والكمبيوتر.',
            en: 'Websites today are fast, living interfaces that adapt automatically to phones, tablets, and desktops.',
          },
          whyItMatters: {
            ar: 'بفضل أدوات الذكاء الاصطناعي الحديثة، لم نعد نكتب الكود الروتيني المتكرر يدويًا؛ بل نركز على الفكرة وتنظيم الصفحة ومراجعة النتيجة.',
            en: 'With modern AI tools, we no longer type repetitive code manually; we focus on the idea, page structure, and review.',
          },
          realWorldProblem: {
            ar: 'ما كان يستغرق شهرًا من العمل اليدوي سابقًا، أصبح بالإمكان تخطيطه وبناؤه ومراجعته ونشره في ساعات قليلة عندما نسير بخطة منظمة.',
            en: 'What used to take a month of manual work can now be planned, built, reviewed, and published in hours with a clear plan.',
          },
        },
      },
    },

    // SLIDE 04: COMPARISON (PAST VS PRESENT)
    {
      id: 's01-slide-04',
      sessionNumber: 1,
      slideNumber: 4,
      totalSlides: 15,
      type: 'comparison',
      title: {
        ar: 'مقارنة شاملة: المواقع وطريقة بنائها سابقًا والآن',
        en: 'Comprehensive Comparison: Websites & Building Methods Past vs. Present',
      },
      subtitle: {
        ar: 'كيف تغير دور صانع الموقع من كاتب أسطر يدوية إلى مخطط وموجه للمشروع؟',
        en: 'How the web creator role shifted from manual typist to project planner and director',
      },
      estimatedMinutes: 7,
      teachingGoal: {
        ar: 'مقارنة منظمة في جدول واضح بين المواقع وطريقة العمل سابقًا والآن.',
        en: 'Provide a clear side-by-side table comparing past and present web creation.',
      },
      speakerNotes: {
        ar: 'نفّذ: اقرأ مع المتدربين صفوف المقارنة الأربعة. هذه الشريحة تلخص التحول الكبير الذي جعل تعلم بناء المواقع متاحًا وممتعًا للمبتدئين اليوم.\nاسأل: في العمود الأيمن (الآن)، ما المهارة الأهم التي يحتاجها الإنسان؟ (فهم حاجة الزائر، التخطيط الواضح، ومراجعة النتيجة!).\nتحقق: أكد أن الذكاء الاصطناعي لم يلغِ دور الإنسان، بل رفع دوره من الكتابة اليدوية المرهقة إلى التخطيط والقيادة.',
        en: 'Walk through the 4 comparison rows contrasting traditional web development with modern AI-assisted creation.',
      },
      payload: {
        type: 'comparison',
        data: {
          leftHeader: {
            ar: 'المواقع وطريقة بنائها اليوم (الحديثة)',
            en: 'Websites & Building Today (Modern)',
          },
          rightHeader: {
            ar: 'المواقع وطريقة بنائها سابقًا (التقليدية)',
            en: 'Websites & Building in the Past (Traditional)',
          },
          dimensions: [
            {
              dimension: { ar: 'شكل الموقع وتجربة الزائر', en: 'Site Look & Visitor Experience' },
              left: {
                ar: 'واجهة مرتبة ومريحة تتكيف مع الهاتف والكمبيوتر وتقود الزائر مباشرة للطلب أو التواصل',
                en: 'Clean layout adapting to phone and desktop with direct ordering/contact actions',
              },
              right: {
                ar: 'صفحات مزدحمة بالنصوص مصممة لشاشة الكمبيوتر فقط وصعبة القراءة على الجوال',
                en: 'Text-heavy pages built only for desktop monitors and hard to use on phones',
              },
            },
            {
              dimension: { ar: 'طريقة كتابة وبناء الموقع', en: 'How the Site Is Built' },
              left: {
                ar: 'نخطط الأقسام بوضوح، ثم نوجه المساعد الذكي لبناء كل قسم ونراجعه خطوة بخطوة',
                en: 'Plan sections clearly, then guide the AI assistant to build and review step by step',
              },
              right: {
                ar: 'كتابة جميع الأكواد والأسطر التأسيسية يدويًا من الصفر وحفظ مئات القواعد غيبًا',
                en: 'Typing all boilerplate code manually from scratch and memorizing syntax rules',
              },
            },
            {
              dimension: { ar: 'الوقت اللازم لإطلاق النسخة الأولى', en: 'Time to First Live Version' },
              left: {
                ar: 'ساعات أو أيام قليلة للوصول إلى موقع حقيقي يعمل على الإنترنت',
                en: 'Hours or a few days to launch a real working website online',
              },
              right: {
                ar: 'أسابيع أو شهور طويلة قبل أن يرى صاحب المشروع أول شاشة حية',
                en: 'Weeks or months before the business owner sees a live working screen',
              },
            },
            {
              dimension: { ar: 'سهولة التعديل والتحديث', en: 'Ease of Updating' },
              left: {
                ar: 'سهلة وسريعة لأن الموقع مقسم إلى أجزاء واضحة (ترحيب، بطاقات، تذييل)',
                en: 'Fast and easy because the site is organized into clear modular sections',
              },
              right: {
                ar: 'صعبة ومعقدة لأن الكود متشابك في ملفات طويلة يصعب قراءتها',
                en: 'Slow and risky because code was tangled in long monolithic files',
              },
            },
          ],
          balancedVerdict: {
            ar: 'اليوم لا تحتاج إلى قضاء سنوات في حفظ الأكواد لتبدأ؛ تحتاج إلى فهم صحيح لمكونات الموقع وخطة عمل واضحة تقود بها أدواتك.',
            en: 'Today you do not need years of memorizing syntax to start; you need a clear understanding of website structure and a disciplined workflow.',
          },
        },
      },
    },

    // SLIDE 05: QUESTION
    {
      id: 's01-slide-05',
      sessionNumber: 1,
      slideNumber: 5,
      totalSlides: 15,
      type: 'question',
      title: {
        ar: 'سؤال للنقاش: ما دورك أنت إذا كان الذكاء الاصطناعي يكتب الكود؟',
        en: 'Discussion: What Is Your Role If AI Writes the Code?',
      },
      estimatedMinutes: 5,
      teachingGoal: {
        ar: 'إشراك المتدربين في استنتاج الدور الحقيقي للإنسان (تحديد الهدف، فهم الزبون، تنظيم المعلومات، واختبار النتيجة).',
        en: 'Engage trainees in identifying the essential human role (goal, visitor empathy, organization, verification).',
      },
      speakerNotes: {
        ar: 'نفّذ: اطرح السؤال على المتدربين وانتظر إجاباتهم في شات Zoom.\nاسأل: إذا كان الذكاء الاصطناعي يستطيع كتابة الكود في ثوانٍ، فلماذا تخرج بعض المواقع المصنوعة به عشوائية ومليئة بالأخطاء بينما تخرج مواقع أخرى احترافية جدًا؟\nتحقق: الفرق كله يكمن في الشخص الذي يوجه الأداة ويراجع خلفها!',
        en: 'Ask why some AI-built sites look messy while others look professional—the difference is human planning and review.',
      },
      expectedResponse: {
        ar: 'تحديد فكرة الموقع، معرفة ما يريده الزبون، ترتيب الأقسام، ومراجعة النتيجة للتأكد من خلوها من الأخطاء.',
        en: 'Defining the idea, understanding the customer, ordering sections, and testing the result.',
      },
      payload: {
        type: 'question',
        data: {
          question: {
            ar: 'إذا كان الذكاء الاصطناعي يكتب الكود بسرعة، فما المهمة التي لا يستطيع القيام بها بدونك؟',
            en: 'If AI can write code quickly, what essential task can it NOT do without you?',
          },
          contextHint: {
            ar: 'فكر في صاحب مقهى أو عيادة يريد موقعًا يخدم زبائنه الحقيقيين في مدينته.',
            en: 'Think about a real café or clinic owner serving real local customers.',
          },
          promptToClass: {
            ar: 'شارك رأيك في جملة قصيرة في شات Zoom 💬',
            en: 'Share your thought in one short sentence in Zoom chat 💬',
          },
          expectedAnswers: [
            {
              ar: 'فهم المشكلة الحقيقية للعميل وما الذي يبحث عنه الزائر عند دخول الموقع.',
              en: 'Understanding the client’s real problem and what visitors look for.',
            },
            {
              ar: 'اختيار المعلومات الأساسية وترتيبها في الصفحة دون ازدحام أو حشو.',
              en: 'Selecting essential information and ordering it cleanly without clutter.',
            },
            {
              ar: 'فحص الموقع وتجربة الأزرار على الهاتف للتأكد من أنه يعمل فعلًا كما نريد.',
              en: 'Testing the site and buttons on mobile to verify everything actually works.',
            },
          ],
        },
      },
    },

    // SLIDE 06: CONCEPT (3 BUILDING BLOCKS OF ANY WEBSITE)
    {
      id: 's01-slide-06',
      sessionNumber: 1,
      slideNumber: 6,
      totalSlides: 15,
      type: 'concept',
      realWorldExample: {
        ar: 'تشبيه المبنى: الهيكل الخرساني وتقسيم الغرف هو (HTML)، والدهان والديكور والإضاءة هو (CSS)، والكهرباء والمصعد الذي يتحرك بضغطة زر هو (JavaScript).',
        en: 'Building Analogy: Concrete walls and rooms are HTML, paint and lighting are CSS, and electricity/elevators triggered by buttons are JavaScript.',
      },
      title: {
        ar: 'مما يتكون أي موقع إلكتروني في العالم؟',
        en: 'What Are the 3 Building Blocks of Every Website?',
      },
      estimatedMinutes: 8,
      teachingGoal: {
        ar: 'شرح المكونات التقنية الثلاثة لأي موقع (`HTML`, `CSS`, `JavaScript`) بالإضافة إلى إطار العمل (`React / Next.js`) بلغة بسيطة جدًا.',
        en: 'Explain HTML, CSS, JavaScript, and React/Next.js in beginner-friendly terms.',
      },
      speakerNotes: {
        ar: 'نفّذ: اشرح للمتدربين أن كل موقع يفتحونه في حياتهم (من أصغر متجر إلى أكبر منصة) يتكون من هذه الطبقات الثلاث التي تعمل معًا.\nاسأل: عندما نريد تغيير لون زر التواصل إلى الأخضر، في أي طبقة يكون هذا التعديل؟ (في طبقة المظهر CSS!).\nتحقق: هذا الفهم البسيط يجعل المتدرب يعرف المصطلحات الأساسية التي سيراها في الدروس القادمة دون أي خوف.',
        en: 'Explain the 3 core web layers so trainees understand the terms they will see throughout the course.',
      },
      payload: {
        type: 'concept',
        data: {
          tagline: {
            ar: 'الجزء الثاني • كيف يعمل الموقع الإلكتروني؟',
            en: 'Part 2 • How a Website Works',
          },
          principle: {
            ar: 'كل صفحة ويب تتكون من 3 طبقات أساسية تكمل بعضها',
            en: 'Every Webpage Is Made of 3 Complementary Layers',
          },
          explanation: {
            ar: 'لست بحاجة إلى حفظ قواميس برمجية، بل يكفيك أن تعرف وظيفة كل طبقة من هذه الطبقات الثلاث التي سنبنيها بمساعدة الذكاء الاصطناعي:',
            en: 'You do not need to memorize coding dictionaries—just understand the role of each of these 3 layers:',
          },
          bulletPoints: [
            {
              ar: 'الهيكل والمحتوى (HTML): يحدد العناصر الموجودة في الصفحة (أين العنوان الرئيسي؟ أين النص؟ أين الصورة؟ وأين الزر؟).',
              en: 'Structure & Content (HTML): Defines what elements are on the page (headline, text, image, button).',
            },
            {
              ar: 'المظهر والتنسيق (CSS / Tailwind): يمنح الصفحة جمالها (الألوان، نوع الخط، المسافات المريحة، وترتيب البطاقات على الهاتف والكمبيوتر).',
              en: 'Styling & Layout (CSS / Tailwind): Gives the page its colors, fonts, spacing, and mobile/desktop arrangement.',
            },
            {
              ar: 'التفاعل والحركة (JavaScript & React): يجعل الصفحة تستجيب لضغطة الزائر (فتح قائمة الهاتف، تصفية المنتجات، أو تجهيز رسالة الطلب).',
              en: 'Interactivity (JavaScript & React): Makes the page respond to visitor clicks (menus, filters, order actions).',
            },
            {
              ar: 'محرك الموقع الكامل (Next.js): الإطار الحديث الذي يجمع هذه الأجزاء الثلاثة معًا ويجعل الموقع سريعًا وجاهزًا لمحرك بحث Google.',
              en: 'Full Website Framework (Next.js): Combines all parts into a fast, search-friendly website.',
            },
          ],
        },
      },
    },

    // SLIDE 07: VISUAL (THE SINGLE INFOGRAPHIC IN LESSON 01)
    {
      id: 's01-slide-07',
      sessionNumber: 1,
      slideNumber: 7,
      totalSlides: 15,
      type: 'visual',
      title: {
        ar: 'مراحل بناء الموقع الأربع في دورتنا التدريبية',
        en: 'The 4 Website Building Stages in Our Course',
      },
      subtitle: {
        ar: 'التسلسل العملي الذي سنسير عليه من الدرس الأول حتى إطلاق المشروع النهائي',
        en: 'The practical sequence we follow from Lesson 01 to final project launch',
      },
      estimatedMinutes: 6,
      teachingGoal: {
        ar: 'عرض مخطط انسيابي واحد نظيف يوضح المراحل الأربع لبناء الموقع بالترتيب الصحيح.',
        en: 'Show a single clean 4-step flowchart of the website building lifecycle.',
      },
      speakerNotes: {
        ar: 'نفّذ: استعرض المراحل الأربع بالترتيب من اليمين إلى اليسار. وضح للمتدربين لماذا لا نبدأ بالبناء قبل الفهم والتخطيط.\nاسأل: ماذا يحدث لو قفزنا إلى المرحلة 03 (البناء) قبل المرحلة 01 و02؟\nتحقق: سنبني شيئًا لا نعرف لمن هو ولا كيف تترتب صفحاته!',
        en: 'Walk through the 4 stages in order: Understand -> Design -> Build with AI -> Test & Launch.',
      },
      payload: {
        type: 'visual',
        data: {
          diagramType: 'pipeline',
          caption: {
            ar: 'كل مرحلة تسلم المرحلة التي تليها بوضوح، مما يجعل بناء الموقع سهلًا ومنظمًا للمبتدئ.',
            en: 'Each stage feeds cleanly into the next, making web creation structured and approachable.',
          },
          nodes: [
            {
              id: 'st-1',
              stepNumber: '01',
              badge: 'المرحلة الأولى',
              title: { ar: 'فهم الفكرة والزائر', en: 'Understand Idea & Visitor' },
              description: {
                ar: 'نحدد هدف الموقع، ومن سيزوره، وما المعلومات الأساسية التي يبحث عنها.',
                en: 'Define the site goal, target visitor, and essential information needed.',
              },
            },
            {
              id: 'st-2',
              stepNumber: '02',
              badge: 'المرحلة الثانية',
              title: { ar: 'تخطيط الصفحات والتصميم', en: 'Plan Pages & Design' },
              description: {
                ar: 'نرتب أقسام الصفحة من الأعلى للأسفل ونختار ألوانًا وخطوطًا مريحة للعين.',
                en: 'Order page sections top-to-bottom and pick clean colors and fonts.',
              },
            },
            {
              id: 'st-3',
              stepNumber: '03',
              badge: 'المرحلة الثالثة',
              title: { ar: 'البناء مع المساعد الذكي', en: 'Build with AI Assistant' },
              description: {
                ar: 'نكتب وصفًا واضحًا لكل قسم، ونبنيه ونراجعه ونحسنه خطوة بخطوة.',
                en: 'Write clear section prompts, build, review, and refine step by step.',
              },
            },
            {
              id: 'st-4',
              stepNumber: '04',
              badge: 'المرحلة الرابعة',
              title: { ar: 'الاختبار والنشر الحي', en: 'Test & Publish Live' },
              description: {
                ar: 'نجرب الموقع على الهاتف ونتأكد من عمل أزرار واتساب ثم ننشره على رابط حي.',
                en: 'Test on mobile, verify WhatsApp buttons, and publish on a live URL.',
              },
            },
          ],
        },
      },
    },

    // SLIDE 08: COMPARISON (RANDOM VIBE CODING VS STRUCTURED BUILDING)
    {
      id: 's01-slide-08',
      sessionNumber: 1,
      slideNumber: 8,
      totalSlides: 15,
      type: 'comparison',
      title: {
        ar: 'الفرق بين البناء العشوائي السريع وبين البناء المنظم',
        en: 'Random Blind Prompting vs. Structured Step-by-Step Building',
      },
      subtitle: {
        ar: 'كيف تتجنب أخطاء المبتدئين الشائعة عند استخدام الذكاء الاصطناعي؟',
        en: 'How to avoid common beginner mistakes when working with AI',
      },
      estimatedMinutes: 6,
      teachingGoal: {
        ar: 'توضيح الفرق العملي بين الـ Vibe Coding العشوائي وبين البناء المنظم خطوة بخطوة.',
        en: 'Contrast blind "Vibe Coding" with structured step-by-step web building.',
      },
      speakerNotes: {
        ar: 'نفّذ: اشرح للمتدربين مصطلحًا قد يسمعونه كثيرًا اليوم وهو (Vibe Coding) أي الطلب العشوائي من الذكاء الاصطناعي بدون خطة ولا مراجعة، وقارنه بطريقتنا المنظمة.\nاسأل: أيهما يوفر وقتك في النهاية: أن تخطط 10 دقائق قبل البناء، أم أن تقضي 5 ساعات في إصلاح موقع عشوائي؟\nتحقق: التخطيط البسيط المسبق هو سر السرعة الحقيقية.',
        en: 'Compare unstructured Vibe Coding with our planned step-by-step approach.',
      },
      payload: {
        type: 'comparison',
        data: {
          leftHeader: {
            ar: 'البناء المنظم خطوة بخطوة (منهجنا في الدورة)',
            en: 'Structured Step-by-Step Building (Our Method)',
          },
          rightHeader: {
            ar: 'البناء العشوائي بدون خطة (Vibe Coding)',
            en: 'Unplanned Blind Prompting (Vibe Coding)',
          },
          dimensions: [
            {
              dimension: { ar: 'نقطة البداية', en: 'Starting Point' },
              left: {
                ar: 'نحدد هدف الموقع والزائر والأقسام الأربعة على الورق أولًا',
                en: 'Define the site goal, visitor, and 4 main sections upfront',
              },
              right: {
                ar: 'كتابة جملة عامة مستعجلة مثل: «اصنع لي موقع متجر كامل» دفعة واحدة',
                en: 'Typing a vague one-liner like "Make me a full store website" all at once',
              },
            },
            {
              dimension: { ar: 'طريقة التنفيذ والتعديل', en: 'Execution & Editing' },
              left: {
                ar: 'نبني الصفحة قسمًا بقسم، ونفحص كل قسم قبل الانتقال للذي يليه',
                en: 'Build section by section, inspecting each part before moving on',
              },
              right: {
                ar: 'قبول مئات الأسطر دفعة واحدة دون معرفة ما بداخلها، وعندما يحدث خطأ يتعطل الموقع كله',
                en: 'Accepting hundreds of lines blindly; when a bug happens, everything breaks',
              },
            },
            {
              dimension: { ar: 'النتيجة النهائية للزائر', en: 'Final Result for Visitors' },
              left: {
                ar: 'موقع مرتب، واضح الرسالة، وتعمل جميع أزراره على الهاتف والكمبيوتر',
                en: 'A clean, clear website where every button works on phone and desktop',
              },
              right: {
                ar: 'صفحة مزدحمة بنصوص عشوائية وأزرار شكلية لا تعمل عند الضغط عليها',
                en: 'A cluttered page with placeholder text and broken decorative buttons',
              },
            },
          ],
          balancedVerdict: {
            ar: 'الذكاء الاصطناعي أداة قوية جدًا عندما تقوده بخطة واضحة وتفحص نتيجته خطوة بخطوة.',
            en: 'AI is an extraordinary tool when guided by a clear plan and verified step by step.',
          },
        },
      },
    },

    // SLIDE 09: REVEAL (TOOLS TO DOWNLOAD ON YOUR COMPUTER - PART 1)
    {
      id: 's01-slide-09',
      sessionNumber: 1,
      slideNumber: 9,
      totalSlides: 15,
      type: 'reveal',
      title: {
        ar: 'الأدوات الأساسية التي يجب تنزيلها على جهازك (1/2)',
        en: 'Essential Programs to Download & Install on Your Computer (1/2)',
      },
      estimatedMinutes: 8,
      teachingGoal: {
        ar: 'تعريف المتدرب بالبرامج الأربعة التي يجب تنزيلها وتثبيتها على جهازه الشخصي ووظيفة كل برنامج ببساطة.',
        en: 'Introduce the 4 desktop programs trainees need to download and install on their machines.',
      },
      speakerNotes: {
        ar: 'نفّذ: انتقل الآن إلى الجزء الثالث والمهم جدًا من الدرس: الأدوات التي يجب تنزيلها على الكمبيوتر. اشرح كل أداة من الأدوات الأربع ولماذا نحتاجها بلغة بسيطة.\nاسأل: من منكم لديه متصفح Google Chrome مثبتًا بالفعل؟ ومن قام بتنزيل VS Code أو Antigravity؟\nتحقق: شارك روابط التنزيل الرسمية في شات Zoom (`nodejs.org`, `code.visualstudio.com`, `git-scm.com`).',
        en: 'Walk through the 4 programs to install: Google Chrome, Code Editor (VS Code / Antigravity), Node.js LTS, and Git.',
      },
      payload: {
        type: 'reveal',
        data: {
          premise: {
            ar: 'للعمل بشكل عملي طوال الدورة، سنقوم بتنزيل وتثبيت هذه البرامج المجانية الأربعة على جهاز الكمبيوتر:',
            en: 'To work hands-on throughout the course, download and install these 4 free programs on your computer:',
          },
          steps: [
            {
              number: '01',
              title: {
                ar: 'متصفح Google Chrome',
                en: '1. Google Chrome Browser',
              },
              description: {
                ar: 'نستخدمه لمعاينة الموقع الذي نبنيه، ولتجربة شكل الصفحات على مقاسات شاشات الهواتف المختلفة عبر أداة الفحص المدمجة (F12).',
                en: 'Used to preview the website we build and test mobile screen sizes using built-in DevTools (F12).',
              },
            },
            {
              number: '02',
              title: {
                ar: 'محرر الأكواد والمساعد الذكي (VS Code / Antigravity / Cursor)',
                en: '2. Code Editor & AI Assistant (VS Code / Antigravity / Cursor)',
              },
              description: {
                ar: 'غرفة العمل الرئيسية التي نفتح فيها مجلد المشروع، ونكتب فيها تعليماتنا للمساعد الذكي ليبني ويعدل ملفات الموقع.',
                en: 'Your main workspace where you open the project folder and instruct the AI assistant to build and edit files.',
              },
            },
            {
              number: '03',
              title: {
                ar: 'بيئة التشغيل Node.js (اختر نسخة LTS المستقرة من nodejs.org)',
                en: '3. Node.js Runtime (Download the LTS version from nodejs.org)',
              },
              description: {
                ar: 'المحرك الأساسي الذي يسمح لجهازك بتشغيل مشاريع الويب الحديثة (React و Next.js) ومعاينتها محليًا على جهازك.',
                en: 'The core engine that lets your computer run modern web projects (React & Next.js) locally.',
              },
            },
            {
              number: '04',
              title: {
                ar: 'أداة حفظ النسخ Git (من git-scm.com)',
                en: '4. Git Version Control (from git-scm.com)',
              },
              description: {
                ar: 'أداة تحفظ مراحل تقدمك في المشروع، وتتيح لك رفع موقعك إلى الإنترنت أو التراجع عن أي تعديل غير مرغوب فيه بأمان.',
                en: 'Saves checkpoints of your project progress and lets you push your website online safely.',
              },
            },
          ],
        },
      },
    },

    // SLIDE 10: REVEAL (PLATFORMS & ACCOUNTS - PART 2)
    {
      id: 's01-slide-10',
      sessionNumber: 1,
      slideNumber: 10,
      totalSlides: 15,
      type: 'reveal',
      title: {
        ar: 'المنصات والحسابات المجانية المكملة لعملنا (2/2)',
        en: 'Free Online Platforms & Accounts We Will Use (2/2)',
      },
      estimatedMinutes: 7,
      teachingGoal: {
        ar: 'تعريف المتدرب بالمنصات السحابية المجانية التي سيستخدمها للتصميم وحفظ الكود ونشر الموقع على رابط حي.',
        en: 'Introduce the free web platforms used for UI design, cloud backup, and live hosting.',
      },
      speakerNotes: {
        ar: 'نفّذ: اشرح المنصات الأربع التي تعمل من المتصفح مباشرة بدون تثبيت، وكيف تكمل البرامج التي نزلناها في الشريحة السابقة.\nاسأل: كيف سيفتح العميل أو صديقك الموقع الذي بنيته على جهازك؟ (عبر نشره على منصة Vercel التي تعطينا رابطًا حيًا مجانيًا!).\nتحقق: اطلب من المتدربين إنشاء حساب مجاني على GitHub و Vercel بالبريد الإلكتروني.',
        en: 'Explain the 4 online platforms: AI Assistant, Google Stitch, GitHub, and Vercel.',
      },
      payload: {
        type: 'reveal',
        data: {
          premise: {
            ar: 'إلى جانب البرامج المثبتة على جهازك، سننشئ حسابات مجانية في هذه المنصات الأربع عبر المتصفح:',
            en: 'Alongside your installed desktop programs, create free accounts on these 4 web platforms:',
          },
          steps: [
            {
              number: '01',
              title: {
                ar: 'منصة الذكاء الاصطناعي (Claude أو ChatGPT أو Antigravity)',
                en: '1. AI Assistant (Claude, ChatGPT, or Antigravity)',
              },
              description: {
                ar: 'نستعين بها في ترتيب أفكار الموقع، وصياغة نصوص الصفحات، وتوليد ومراجعة الكود البرمجي خطوة بخطوة.',
                en: 'Helps structure website ideas, draft page copy, and generate/review code step by step.',
              },
            },
            {
              number: '02',
              title: {
                ar: 'أداة التصميم البصري (Google Stitch)',
                en: '2. Visual Prototyping Tool (Google Stitch)',
              },
              description: {
                ar: 'نستخدمها في مرحلة التصميم لتحويل وصف الصفحة المكتوب إلى تصميم واجهة مرئي نختار منه الألوان والترتيب.',
                en: 'Turns written page descriptions into visual screen designs before coding.',
              },
            },
            {
              number: '03',
              title: {
                ar: 'منصة حفظ المشاريع (GitHub.com)',
                en: '3. Cloud Code Repository (GitHub.com)',
              },
              description: {
                ar: 'خزنة سحابية آمنة نحفظ فيها ملفات مشروعنا على الإنترنت حتى لا تضيع أبدًا.',
                en: 'Secure cloud storage where we back up our project files online.',
              },
            },
            {
              number: '04',
              title: {
                ar: 'منصة النشر والاستضافة المجانية (Vercel.com)',
                en: '4. Free Live Hosting Platform (Vercel.com)',
              },
              description: {
                ar: 'تربط مشروعك من GitHub وتنشره على رابط حي حقيقي (https://...) يفتحه أي شخص من هاتفه في العالم.',
                en: 'Connects to GitHub and publishes your website on a live URL accessible from any phone or computer.',
              },
            },
          ],
        },
      },
    },

    // SLIDE 11: DEMO (LIVE INSTALLATION & VERIFICATION WALKTHROUGH)
    {
      id: 's01-slide-11',
      sessionNumber: 1,
      slideNumber: 11,
      totalSlides: 15,
      type: 'demo',
      title: {
        ar: 'تطبيق عملي مباشر: تثبيت الأدوات والتأكد من جاهزية الجهاز',
        en: 'Live Walkthrough: Installing the Tools & Verifying Your Computer Setup',
      },
      estimatedMinutes: 10,
      teachingGoal: {
        ar: 'تنفيذ خطوات التحقق من تثبيت Node.js ومحرر الأكواد أمام المتدربين مباشرة على الشاشة.',
        en: 'Demonstrate verifying Node.js and the code editor live on screen with trainees.',
      },
      speakerNotes: {
        ar: 'نفّذ: افتح موقع `nodejs.org` أمام المتدربين وأرهم زر نسخة `LTS`، ثم افتح محرر الأكواد (VS Code أو Antigravity)، وافتح نافذة الأوامر المدمجة (`Terminal`) واكتب `node -v` و `npm -v` ليروا كيف يظهر رقم النسخة.\nاسأل: من ظهر لديه رقم النسخة عند كتابة `node -v`؟\nتحقق: ساعد أي متدرب يواجه سؤالًا أثناء التثبيت حتى يطمئن الجميع أن أجهزتهم جاهزة.',
        en: 'Show nodejs.org (LTS button), open the editor terminal, and run `node -v` and `npm -v`.',
      },
      demoInstructions: {
        ar: 'افتح المحرر، ثم افتح الـ Terminal عبر القائمة العلوية (Terminal -> New Terminal) وشغّل أوامر الفحص.',
        en: 'Open the editor, open a New Terminal, and run the verification commands.',
      },
      payload: {
        type: 'demo',
        data: {
          objective: {
            ar: 'التأكد من تثبيت Node.js ومحرر الأكواد بنجاح على جهاز الكمبيوتر',
            en: 'Verify that Node.js and the Code Editor are properly installed on your computer',
          },
          instructorSteps: [
            {
              ar: 'ندخل إلى الموقع الرسمي (nodejs.org) ونقوم بتنزيل وتثبيت النسخة المكتوب بجانبها (LTS - الموصى بها لمعظم المستخدمين).',
              en: 'Visit nodejs.org and download/install the version labeled LTS (Recommended for Most Users).',
            },
            {
              ar: 'نفتح محرر الأكواد (VS Code أو Antigravity) وننشئ مجلدًا جديدًا على سطح المكتب باسم (my-first-website).',
              en: 'Open the code editor (VS Code or Antigravity) and create a new folder named `my-first-website`.',
            },
            {
              ar: 'نفتح نافذة الأوامر داخل المحرر (Terminal) ونكتب الأمر البسيط أدناه للتأكد من أن المحرك يعمل بنجاح.',
              en: 'Open the built-in Terminal inside the editor and run the command below to verify installation.',
            },
          ],
          promptToUse: `node -v
npm -v
git --version`,
          expectedOutput: {
            ar: 'ظهور أرقام الإصدارات (مثل v20.x أو v22.x) تحت كل أمر، مما يعني أن جهازك جاهز تمامًا لبناء وتشغيل المواقع.',
            en: 'Version numbers (such as v20.x or v22.x) appear below each command, confirming your computer is ready.',
          },
        },
      },
    },

    // SLIDE 12: CONCEPT (CHOOSING YOUR PROJECT IDEA)
    {
      id: 's01-slide-12',
      sessionNumber: 1,
      slideNumber: 12,
      totalSlides: 15,
      type: 'concept',
      realWorldExample: {
        ar: 'مثال واضح: «مقهى قهوة مختصة» — الزائر: محبو القهوة في المدينة — الأقسام: 1. ترحيب ووصف 2. قائمة المشروبات والأسعار 3. موقع الفرع وساعات العمل — الزر الأساسي: اطلب الآن عبر واتساب.',
        en: 'Clear Example: "Specialty Café" — Visitor: Local coffee lovers — Sections: 1. Welcome 2. Drinks Menu & Prices 3. Location & Hours — Main Button: Order via WhatsApp.',
      },
      title: {
        ar: 'كيف تختار فكرة الموقع الذي ستبنيه خلال الدورة؟',
        en: 'How to Choose the Website Idea You Will Build During the Course',
      },
      estimatedMinutes: 6,
      teachingGoal: {
        ar: 'توجيه المتدرب لاختيار فكرة مشروع واقعية ومحددة يطبق عليها جميع مهارات الدروس القادمة.',
        en: 'Guide trainees to pick a concrete, realistic website idea to build across the 12 lessons.',
      },
      speakerNotes: {
        ar: 'نفّذ: اشرح للمتدربين أننا في هذه الدورة لن نتعلم نظريات منفصلة، بل كل متدرب سيختار اليوم مشروعًا واحدًا حقيقيًا (مقهى، مطعم، متجر عطور، عيادة، معرض أعمال شخصي، أو مكتب استشارات) ويبنيه خطوة بخطوة في كل درس حتى ينشره في نهاية الدورة.\nاسأل: ما الأسئلة الأربعة التي نحدد بها بطاقة مشروعنا اليوم؟\nتحقق: استعرض الأسئلة الأربعة الواضحة على الشريحة.',
        en: 'Explain that each trainee picks one real project today and builds it progressively across all 12 lessons.',
      },
      payload: {
        type: 'concept',
        data: {
          tagline: {
            ar: 'الجزء الرابع • مشروعك العملي في الدورة',
            en: 'Part 4 • Your Practical Course Project',
          },
          principle: {
            ar: 'اختر فكرة واقعية وحدد ملامحها في 4 نقاط بسيطة',
            en: 'Choose a Real-World Idea and Define It in 4 Simple Points',
          },
          explanation: {
            ar: 'لتكون تجربتك عملية ومثمرة، اختر مشروعًا حقيقيًا (خاصًا بك أو لعميل تعرفه) وأجب عن هذه الأسئلة الأربعة قبل البدء:',
            en: 'Pick a real project (for yourself or a local business) and answer these 4 questions:',
          },
          bulletPoints: [
            {
              ar: 'ما هو المشروع ونوع النشاط؟ (مثال: مقهى، متجر عطور، عيادة أسنان، مدرب شخصي، أو معرض أعمال).',
              en: 'What is the project and domain? (e.g., café, perfume shop, dental clinic, personal trainer, portfolio).',
            },
            {
              ar: 'من هو الزائر المستهدف؟ وما أهم معلومة يبحث عنها فور دخوله للموقع؟',
              en: 'Who is the target visitor, and what is the main info they look for first?',
            },
            {
              ar: 'ما الأقسام الثلاثة أو الأربعة الأساسية التي يجب أن تظهر في الصفحة الرئيسية؟',
              en: 'What 3 or 4 essential sections should appear on the homepage?',
            },
            {
              ar: 'ما هو الإجراء الأساسي المطلوب من الزائر؟ (مثال: زر «اطلب الآن عبر واتساب» أو «احجز موعدك عبر واتساب»).',
              en: 'What is the primary visitor action? (e.g., "Order via WhatsApp" or "Book Appointment via WhatsApp").',
            },
          ],
        },
      },
    },

    // SLIDE 13: CHALLENGE (HANDS-ON ACTIVITY)
    {
      id: 's01-slide-13',
      sessionNumber: 1,
      slideNumber: 13,
      totalSlides: 15,
      type: 'challenge',
      title: {
        ar: 'النشاط العملي للدرس الأول: تجهيز الأدوات وبطاقة فكرة الموقع',
        en: 'Lesson 01 Practical Activity: Tool Setup & Website Idea Card',
      },
      estimatedMinutes: 12,
      teachingGoal: {
        ar: 'تخصيص وقت عملي داخل الدرس للتأكد من تثبيت البرامج وكتابة بطاقة تعريف المشروع لكل متدرب.',
        en: 'Give trainees hands-on time to verify their tool installation and write their project idea card.',
      },
      speakerNotes: {
        ar: 'نفّذ: شغّل المؤقت لمدة 12–15 دقيقة. اطلب من كل متدرب إنجاز المهمتين المحددتين: التأكد من تنزيل الأدوات، وكتابة النقاط الأربع لمشروعه في شات Zoom أو إرسالها عبر زر واتساب في صفحة الجلسة.\nاسأل: من يشاركنا فكرة مشروعه والأقسام الثلاثة التي اختارها لنناقشها معًا؟\nتحقق: اقرأ مشاركات المتدربين وشجعهم وتأكد من وضوح زر الإجراء الأساسي في كل فكرة.',
        en: 'Start the activity timer and review trainee project ideas and tool setup status in Zoom chat.',
      },
      payload: {
        type: 'challenge',
        data: {
          mission: {
            ar: 'تأكد من تثبيت أدواتك واكتب بطاقة فكرة موقعك من 4 نقاط',
            en: 'Verify Your Installed Tools and Write Your 4-Point Website Idea Card',
          },
          durationMinutes: 15,
          objective: {
            ar: 'الخروج من الدرس الأول بجهاز جاهز للعمل وفكرة موقع واضحة المعالم.',
            en: 'Finish Lesson 01 with a ready computer workspace and a clearly defined website idea.',
          },
          instructions: [
            {
              ar: 'تأكد من تنزيل وتثبيت متصفح Chrome ومحرر الأكواد (VS Code أو Antigravity) ونسخة Node.js LTS على جهازك.',
              en: 'Confirm Chrome, your Code Editor (VS Code / Antigravity), and Node.js LTS are installed on your machine.',
            },
            {
              ar: 'اختر فكرة الموقع الذي ستبنيه خلال الدورة، واكتب اسمه ونوع الخدمة أو المنتج الذي يقدمه.',
              en: 'Pick the website idea you will build during the course and write its name and service/product.',
            },
            {
              ar: 'حدد 3 أقسام رئيسية ستظهر في الصفحة الرئيسية لموقعك (مثل: قسم الترحيب، قسم الخدمات/المنتجات، قسم التواصل).',
              en: 'List 3 main sections that will appear on your homepage (e.g., Welcome, Services/Products, Contact).',
            },
            {
              ar: 'اكتب نص الزر الرئيسي الذي سيضغط عليه الزائر للتواصل أو الطلب عبر واتساب.',
              en: 'Write the exact text of the main WhatsApp button visitors will tap to order or contact you.',
            },
          ],
          deliverable: {
            ar: 'شارك بطاقة فكرة موقعك وحالة تثبيت الأدوات في شات Zoom أو أرسلها مباشرة عبر واتساب من صفحة الدرس.',
            en: 'Share your website idea card and tool setup status in Zoom chat or send it via WhatsApp.',
          },
        },
      },
    },

    // SLIDE 14: PROJECT MILESTONE
    {
      id: 's01-slide-14',
      sessionNumber: 1,
      slideNumber: 14,
      totalSlides: 15,
      type: 'project',
      title: {
        ar: 'الحصيلة العملية للدرس الأول في مشروعك',
        en: 'Lesson 01 Practical Milestone in Your Project',
      },
      estimatedMinutes: 3,
      teachingGoal: {
        ar: 'تلخيص المخرجات الملموسة التي أنجزها المتدرب في الدرس الأول وكيف تؤسس للدرس الثاني.',
        en: 'Summarize the tangible deliverables completed in Lesson 01 and how they set up Lesson 02.',
      },
      speakerNotes: {
        ar: 'نفّذ: راجع مع المتدربين ما أنجزوه اليوم: بيئة العمل أصبحت مثبتة وجاهزة، وفكرة المشروع أصبحت محددة وواضحة.\nاسأل: هل الجميع احتفظ بملف أو ملاحظة فيها النقاط الأربع لموقعه؟\nتحقق: في الدرس الثاني سنأخذ هذه النقاط الأربع ونحولها إلى خريطة صفحات وتصميم بصري مريح للعين.',
        en: 'Review today’s completed deliverables and connect them to Lesson 02.',
      },
      payload: {
        type: 'project',
        data: {
          stepNumber: '01',
          phaseName: {
            ar: 'المرحلة الأولى: تجهيز بيئة العمل وتحديد فكرة الموقع',
            en: 'Phase 1: Workspace Setup & Defining the Website Idea',
          },
          whatWeBuildNow: {
            ar: 'بيئة عمل جاهزة على الكمبيوتر + وثيقة تعريف المشروع وأقسامه الأساسية',
            en: 'Ready Local Computer Workspace + Project Definition Card',
          },
          deliverables: [
            {
              ar: 'تثبيت متصفح Google Chrome ومحرر الأكواد وبيئة Node.js LTS بنجاح',
              en: 'Installed Google Chrome, Code Editor, and Node.js LTS',
            },
            {
              ar: 'إنشاء حساب مجاني على GitHub و Vercel لحفظ ونشر المشاريع',
              en: 'Created free GitHub and Vercel accounts for saving and publishing projects',
            },
            {
              ar: 'تحديد اسم الموقع، والزائر المستهدف، والأقسام الثلاثة الرئيسية للصفحة',
              en: 'Defined website name, target visitor, and 3 main homepage sections',
            },
            {
              ar: 'تحديد نص زر الإجراء المباشر عبر واتساب',
              en: 'Defined the primary WhatsApp action button text',
            },
          ],
          connectionToFinalProject: {
            ar: 'في الدرس القادم سنحول بطاقة فكرة موقعك هذه إلى تخطيط صفحات وتصميم واجهة مرئية واضحة خطوة بخطوة.',
            en: 'In the next lesson, we will turn this project card into a clear page layout and visual interface design.',
          },
        },
      },
    },

    // SLIDE 15: TAKEAWAYS
    {
      id: 's01-slide-15',
      sessionNumber: 1,
      slideNumber: 15,
      totalSlides: 15,
      type: 'takeaway',
      title: {
        ar: 'خلاصة الدرس الأول في 3 نقاط',
        en: 'Lesson 01 Summary in 3 Points',
      },
      estimatedMinutes: 2,
      teachingGoal: {
        ar: 'ختم الدرس الأول بتلخيص النقاط الثلاث الأهم وتذكير المتدربين بموضوع الدرس الثاني.',
        en: 'Conclude Lesson 01 with 3 key takeaways and preview Lesson 02.',
      },
      speakerNotes: {
        ar: 'نفّذ: اختم الدرس الأول بمراجعة النقاط الثلاث بهدوء، واشكر المتدربين على تفاعلهم وتجهيز أدواتهم.\nاسأل: هل بقي لدى أي شخص سؤال حول تثبيت أي أداة من الأدوات قبل لقاء الدرس القادم؟\nتحقق: ذكّرهم بإرسال بطاقة فكرة الموقع عبر زر واتساب في صفحة الدرس ليراجعها المدرب.',
        en: 'Review the 3 key takeaways and answer any final tool installation questions.',
      },
      payload: {
        type: 'takeaway',
        data: {
          takeaways: [
            {
              number: '01',
              title: {
                ar: 'بناء المواقع اليوم يعتمد على وضوح الفكرة والتخطيط',
                en: 'Building Websites Today Relies on Clear Ideas & Planning',
              },
              description: {
                ar: 'انتقلنا من عصر كتابة كل سطر يدويًا لشهور طويلة إلى عصر قيادة أدوات الذكاء الاصطناعي بخطة منظمة.',
                en: 'We moved from months of manual typing to guiding AI tools with a clear, structured plan.',
              },
            },
            {
              number: '02',
              title: {
                ar: 'كل موقع يتكون من هيكل ومظهر وتفاعل',
                en: 'Every Website Combines Structure, Style & Interactivity',
              },
              description: {
                ar: 'HTML يبني الهيكل والعناوين، وCSS ينسق الألوان والمسافات للهاتف، وJavaScript/React يضيف التفاعل الحي.',
                en: 'HTML builds structure, CSS styles colors and mobile spacing, and JavaScript/React adds interactivity.',
              },
            },
            {
              number: '03',
              title: {
                ar: 'أدواتك جاهزة وفكرة مشروعك واضحة',
                en: 'Your Tools Are Ready & Your Project Idea Is Clear',
              },
              description: {
                ar: 'بتثبيت المتصفح والمحرر وNode.js وتحديد فكرة موقعك، أصبحت جاهزًا للبدء بالتخطيط والتصميم العملي.',
                en: 'With Chrome, your editor, and Node.js installed and your idea chosen, you are ready to design and build.',
              },
            },
          ],
          coreMotto: {
            ar: 'في الدرس الثاني (الجلسة 02): سنتعلم كيف نخطط صفحات الموقع ونرتب أقسامه ونصمم واجهته البصرية.',
            en: 'Up Next in Lesson 02: How to plan website pages, order sections, and design its visual interface.',
          },
        },
      },
    },
  ],
};
