import { PresentationSession } from '@/types';

export const SESSION_01: PresentationSession = {
  id: 'session-01',
  number: 1,
  slug: 'session-01',
  title: {
    ar: 'المبتكر الجديد للويب: كيف يغير الذكاء الاصطناعي تطوير المواقع؟',
    en: 'The New Web Creator: How AI is Transforming Web Development',
  },
  subtitle: {
    ar: 'فهم التحول المعماري وسوق العمل، وتحديد الفرق الجوهري بين هندسة البرمجيات والـ Vibe Coding',
    en: 'Understanding industry evolution, job market reality, and Software Engineering vs Vibe Coding',
  },
  durationMinutes: 90,
  goal: {
    ar: 'فهم موقعك الجديد كـ Web Creator يتحكم في أدوات الذكاء الاصطناعي بعقلية هندسية منضبطة، والتعرف على خارطة طريق الدورة الممتدة لـ 12 جلسة.',
    en: 'Understand your role as a Web Creator directing AI with rigorous engineering judgment, and grasp the 12-session course journey.',
  },
  prerequisites: [
    {
      ar: 'شغف ببناء منتجات رقمية حقيقية للمتصفح',
      en: 'Curiosity to build tangible web products for browsers',
    },
    {
      ar: 'معرفة أساسية بكيفية تصفح الإنترنت واستخدام الحاسوب',
      en: 'Basic familiarity with browsing and computer workflows',
    },
  ],
  objectives: [
    {
      ar: 'إدراك أثر أدوات الذكاء الاصطناعي على سرعة النمذجة مع الحفاظ على أهمية الأساسيات الهندسية',
      en: 'Appreciate AI-accelerated prototyping while upholding engineering fundamentals',
    },
    {
      ar: 'التمييز الموضوعي بين منهجية هندسة البرمجيات (Software Engineering) وأسلوب الـ Vibe Coding',
      en: 'Differentiate Software Engineering methodology from the Vibe Coding approach',
    },
    {
      ar: 'استيعاب خريطة طريق الدورة كاملة من الفكرة وحتى الإطلاق والتسويق',
      en: 'Internalize the full 12-session curriculum pipeline from idea to launch and client acquisition',
    },
    {
      ar: 'التدريب العملي على تفكيك طلب العميل واستخراج متطلبات العمل قبل كتابة أول سطر أو برومبت',
      en: 'Hands-on practice decomposing client requirements into structural specs before writing prompts',
    },
  ],
  timeline: [
    {
      timeRange: '00:00 – 00:15',
      durationMinutes: 15,
      label: {
        ar: 'الترحيب، التعارف، والرؤية الكبرى لـ WEB CREATOR AI',
        en: 'Welcome, orientation & the core vision of WEB CREATOR AI',
      },
      type: 'context',
    },
    {
      timeRange: '00:15 – 00:35',
      durationMinutes: 20,
      label: {
        ar: 'مفهوم التحول: التطوير التقليدي مقابل التطوير المعزز بالذكاء الاصطناعي',
        en: 'The Paradigm Shift: Traditional vs AI-assisted development workflows',
      },
      type: 'concept',
    },
    {
      timeRange: '00:35 – 00:50',
      durationMinutes: 15,
      label: {
        ar: 'هندسة البرمجيات مقابل أسلوب الـ Vibe Coding: مقارنة موضوعية متزنة',
        en: 'Software Engineering vs Vibe Coding Approach: Balanced comparison',
      },
      type: 'concept',
    },
    {
      timeRange: '00:50 – 01:05',
      durationMinutes: 15,
      label: {
        ar: 'تطبيق حي: كيف يحلل صانع الويب فكرة مشروع تجاري حقيقي؟',
        en: 'Live Demo: Deconstructing a commercial web project with engineering eye',
      },
      type: 'demo',
    },
    {
      timeRange: '01:05 – 01:20',
      durationMinutes: 15,
      label: {
        ar: 'تحدي الطلاب: تفكيك طلب عميل مطعم إلى متطلبات وصفحات',
        en: 'Student Challenge: Requirement breakdown for a restaurant business',
      },
      type: 'practice',
    },
    {
      timeRange: '01:20 – 01:25',
      durationMinutes: 5,
      label: {
        ar: 'مراجعة جماعية وتقييم مخرجات الطلاب في الشات',
        en: 'Class review and evaluating student breakdowns',
      },
      type: 'review',
    },
    {
      timeRange: '01:25 – 01:30',
      durationMinutes: 5,
      label: {
        ar: 'الخلاصة الهندسية والتجهيز لجلسة هندسة البرومبت (Session 02)',
        en: 'Core takeaways & preparing for Session 02 (Prompt Engineering)',
      },
      type: 'takeaway',
    },
  ],
  projectMilestone: {
    ar: 'تحديد معالم فكرة المشروع التجاري واختيار قطاع الأعمال للمشروع المستمر طوال الدورة.',
    en: 'Define project scope and select business domain for the semester-long portfolio project.',
  },
  aiRole: {
    ar: 'مساعد تسريع البحث الأولي وتلخيص متطلبات السوق دون ترك القرارات الهندسية له.',
    en: 'Research accelerator and market requirement synthesizer under human architectural supervision.',
  },
  marketConnection: {
    ar: 'فهم احتياجات العملاء والشركات اليوم: حلول سريعة ومتقنة وموثوقة تحل مشكلة تجارية واضحة.',
    en: 'Modern client demand: high-reliability, fast-iteration solutions that solve actual business problems.',
  },
  startScreen: {
    badge: 'SESSION 01 / 12 • FOUNDATION',
    headline: {
      ar: 'المبتكر الجديد للويب: من متلقٍ للأوامر إلى قائد للمنتج الرقمي',
      en: 'The New Web Creator: From Ticket Taker to Product Orchestrator',
    },
    description: {
      ar: 'جلسة التأسيس الذهني: كيف تبني مواقع ويب متقدمة بالذكاء الاصطناعي دون التنازل عن معايير هندسة البرمجيات الرصينة.',
      en: 'Foundational mental models: leveraging AI velocity without sacrificing rigorous engineering standards.',
    },
    sessionGoal: {
      ar: 'إعادة ضبط بوصلتك المهنية: فهم كيف يفكر صانع الويب المعاصر، وكيف يحول فكرة عميل مجردة إلى نظام رقمي قابل للإطلاق.',
      en: 'Recalibrate your mental model: think like a modern Web Creator turning abstract client ideas into shippable systems.',
    },
  },
  endScreen: {
    headline: {
      ar: 'أحسنت! أكملت بنجاح الجلسة التأسيسية الأولى',
      en: 'Session 01 Complete! Foundation Successfully Built',
    },
    keyRecap: [
      {
        ar: 'الذكاء الاصطناعي أداة تسريع تنفيذ خارقة، لكن الحكم الهندسي والمسؤولية تظل مسؤولية الإنسان.',
        en: 'AI is a powerful execution accelerator, but engineering judgment and accountability remain a human responsibility.',
      },
      {
        ar: 'الـ Vibe Coding أسلوب مفيد للاستكشاف والـ MVP، بينما هندسة البرمجيات تضمن الجودة وقابلية الصيانة.',
        en: 'Vibe Coding excels at quick exploration and prototypes; Software Engineering ensures maintainability and scale.',
      },
      {
        ar: 'العميل لا يشتري أسطر كود مجردة، بل يشتري حلولاً رقمية سريعة وموثوقة تحقق أهدافه التجارية.',
        en: 'Clients do not buy raw code lines; they invest in reliable digital solutions that solve real business needs.',
      },
    ],
    nextSessionNumber: '02',
    nextSessionTitle: {
      ar: 'هندسة البرومبت لتطوير الويب: صياغة التعليمات البرمجية الدقيقة',
      en: 'Prompt Engineering for Web Development: Crafting Rigid Technical Instructions',
    },
  },
  slides: [
    // Slide 1: Title
    {
      id: 's01-slide-01',
      sessionNumber: 1,
      slideNumber: 1,
      totalSlides: 16,
      type: 'title',
      title: { ar: "المبتكر الجديد للويب", en: "The New Web Creator" },
      estimatedMinutes: 2,
      teachingGoal: {
        ar: 'افتتاح الجلسة بطاقة عالية وتركيز مباشر على الهوية الجديدة للمتعلم في عصر الذكاء الاصطناعي.',
        en: 'Open session with high energy and set the student identity in the AI era.',
      },
      speakerNotes: { ar: "نفّذ: ابدأ بالترحيب بالطلاب في Zoom. اطلب منهم كتابة مدنهم وخلفياتهم البرمجية السابقة في الشات. أكد أن هذه الدورة لا تتطلب حفظًا مسبقًا للأكواد، بل تتطلب عقلية فضولية هندسية منظمة.\nاسأل: ما الهدف الذي تتوقع تحقيقه في جلسة «المبتكر الجديد للويب»؟\nتحقق: افتتاح الجلسة بطاقة عالية وتركيز مباشر على الهوية الجديدة للمتعلم في عصر الذكاء الاصطناعي.", en: "Cue: Welcome learners on Zoom. Ask them to share backgrounds in chat. Reassure them that memorization is obsolete; curiosity and mental architecture are what matter.\nAsk: What outcome do you expect from “The New Web Creator”?\nCheck: Open session with high energy and set the student identity in the AI era." },
      payload: {
        type: 'title',
        data: {
          sessionNumber: '01',
          kicker: {
            ar: 'جلسة الافتتاح والتأسيس المعماري',
            en: 'Kickoff & Architectural Foundation',
          },
          headline: {
            ar: 'THE NEW WEB CREATOR',
            en: 'THE NEW WEB CREATOR',
          },
          subheadline: {
            ar: 'كيف تبني مواقع ويب متقدمة بالذكاء الاصطناعي مع الحفاظ على الانضباط الهندسي الصارم؟',
            en: 'How to build state-of-the-art web apps with AI without abandoning rigorous engineering discipline',
          },
          totalSessions: '12',
          durationMinutes: 90,
          tags: ['AI-Assisted', 'Software Engineering', 'Mental Models', 'Live Classroom'],
        },
      },
    },

    // Slide 2: Context
    {
      id: 's01-slide-02',
      sessionNumber: 1,
      slideNumber: 2,
      totalSlides: 16,
      type: 'context',
      title: { ar: "التحول الكبير في صناعة الويب", en: "The Great Shift in Web Development" },
      subtitle: {
        ar: 'لماذا تختلف بيئة تطوير الويب اليوم جذرياً عما كانت عليه قبل عامين فقط؟',
        en: 'Why web development today fundamentally differs from two years ago',
      },
      estimatedMinutes: 4,
      teachingGoal: {
        ar: 'وضع الطلاب في قلب الواقع الصناعي والتقني المعاصر بأسلوب موضوعي دون تهويل أو تقليل.',
        en: 'Contextualize the current market state realistically without hype or fear.',
      },
      speakerNotes: { ar: "نفّذ: ركز على أن حواجز الدخول انخفضت جداً، مما يعني أن كتابة Syntax لم تعد وحدها ميزة تنافسية. القيمة الحقيقية انتقلت إلى فهم المنتج، معمارية الحل، والتسليم السريع.\nاسأل: ما المشكلة التي توضّحها «التحول الكبير في صناعة الويب»؟\nتحقق: توليد الكود أصبح سهلاً، لكن التأكد من أمانه، بنيته المعمارية، وسرعة أدائه أصبح يتطلب عيناً هندسية فاحصة.", en: "Cue: Emphasize that syntax barriers collapsed. Competitive advantage shifted to product understanding, architecture, and reliable delivery.\nAsk: What problem does “The Great Shift in Web Development” point to?\nCheck: Generating code is easy; ensuring security, clean architecture, and performance demands sharp engineering review." },
      payload: {
        type: 'context',
        data: {
          industryShift: {
            ar: 'يمكن لأدوات الذكاء الاصطناعي تسريع كتابة الأكواد التأسيسية (Boilerplate)، مع ضرورة مراجعة الناتج.',
            en: 'AI tools can speed up boilerplate drafting, while the result still needs review.',
          },
          realWorldProblem: {
            ar: 'توليد الكود أصبح سهلاً، لكن التأكد من أمانه، بنيته المعمارية، وسرعة أدائه أصبح يتطلب عيناً هندسية فاحصة.',
            en: 'Generating code is easy; ensuring security, clean architecture, and performance demands sharp engineering review.',
          },
          whyItMatters: {
            ar: 'الجمع بين سرعة الذكاء الاصطناعي والانضباط الهندسي يساعد على تقديم عمل موثوق.',
            en: 'Creators combining AI speed with engineering fundamentals work more effectively than either approach alone.',
          },
        },
      },
    },

    // Slide 3: Question
    {
      id: 's01-slide-03',
      sessionNumber: 1,
      slideNumber: 3,
      totalSlides: 16,
      type: 'question',
      title: { ar: "سؤال افتتاحي", en: "Opening question" },
      estimatedMinutes: 4,
      teachingGoal: {
        ar: 'تحفيز الطلاب على التفكير في جوهر مهنة المطور في ظل انتشار نماذج LLMs.',
        en: 'Ignite student reflection on what defines an engineer in the LLM era.',
      },
      speakerNotes: { ar: "نفّذ: اطرح السؤال بصوت واضح: \"ماذا يعني أن تكون مطور ويب اليوم؟ هل دورك هو كتابة الحلقات التكرارية والـ CSS فقط؟\" اقرأ إجابات الشات المباشرة وعلّق عليها.\nاسأل: اكتب في شات Zoom بكلمة أو اثنتين: ما هي وظيفتك الحقيقية الآن؟\nتحقق: استمع لأفكار مثل: فهم رغبة العميل وتحويلها لمتطلبات دقيقة؛ اتخاذ القرارات المعمارية واختيار التقنيات المناسبة", en: "Cue: Ask clearly: \"What does it mean to be a web developer today?\" Read live Zoom chat responses and validate insightful points.\nAsk: Drop in Zoom chat in 1-2 words: What is your primary role now?\nCheck: Listen for ideas such as: Deconstructing client intent into precise technical requirements; Making architectural decisions and technology tradeoffs" },
      payload: {
        type: 'question',
        data: {
          question: {
            ar: 'ماذا يعني أن تكون "مطور ويب" في عصر الذكاء الاصطناعي التوليدي؟',
            en: 'What does it truly mean to be a "Web Developer" in the generative AI era?',
          },
          contextHint: {
            ar: 'إذا كان الذكاء الاصطناعي يستطيع كتابة صفحة هبوط في 30 ثانية، فأين تكمن قيمتك المضافة؟',
            en: 'If AI can quickly scaffold a landing page, where does your human value lie?',
          },
          promptToClass: {
            ar: 'اكتب في شات Zoom بكلمة أو اثنتين: ما هي وظيفتك الحقيقية الآن؟',
            en: 'Drop in Zoom chat in 1-2 words: What is your primary role now?',
          },
          expectedAnswers: [
            {
              ar: 'فهم رغبة العميل وتحويلها لمتطلبات دقيقة',
              en: 'Deconstructing client intent into precise technical requirements',
            },
            {
              ar: 'اتخاذ القرارات المعمارية واختيار التقنيات المناسبة',
              en: 'Making architectural decisions and technology tradeoffs',
            },
            {
              ar: 'مراجعة الكود، اختبار الأمان، وضمان تجربة المستخدم',
              en: 'Code review, security verification, and UX fidelity',
            },
            {
              ar: 'ربط الأنظمة وتجهيز المنتج للنشر والنمو',
              en: 'System integration, production deployment, and business alignment',
            },
          ],
        },
      },
    },

    // Slide 4: Think (30s Reflection)
    {
      id: 's01-slide-04',
      sessionNumber: 1,
      slideNumber: 4,
      totalSlides: 16,
      type: 'think',
      title: { ar: "توقف وتأمل — الأداة مقابل العقلية", en: "Think & Reflect — Tool vs Mindset" },
      estimatedMinutes: 2,
      teachingGoal: {
        ar: 'تهدئة وتيرة الشرح لدقيقة واحدة وإتاحة 30 ثانية للطالب لترسيخ مفهوم أن الذكاء الاصطناعي أداة وليس قائداً.',
        en: 'Provide a 30-second silent contemplative window: AI is an instrument, not the orchestrator.',
      },
      speakerNotes: { ar: "نفّذ: شغل المؤقت لـ 30 ثانية. اطلب من الجميع الصمت والتأمل في العبارة المعروضة على الشاشة.\nاسأل: ما الفكرة التي تغيّرت لديك بعد هذا التأمل؟\nتحقق: الذكاء الاصطناعي يمنحك سرعة الرياح، لكن عقلك الهندسي هو الذي يمسك بدفة السفينة.", en: "Cue: Trigger the 30-second countdown. Encourage silence and reflection on the principle displayed.\nAsk: What changed in your thinking after this pause?\nCheck: AI provides the speed of the wind; your engineering mind holds the ship rudder." },
      payload: {
        type: 'think',
        data: {
          prompt: {
            ar: 'الذكاء الاصطناعي يمنحك سرعة الرياح، لكن عقلك الهندسي هو الذي يمسك بدفة السفينة.',
            en: 'AI provides the speed of the wind; your engineering mind holds the ship rudder.',
          },
          durationSeconds: 30,
          guidancePoints: [
            {
              ar: 'سرعة التنفيذ بلا توجيه معماري تؤدي لكوارث أمنية وفوضى في الكود.',
              en: 'Execution speed without architectural guidance yields technical debt.',
            },
            {
              ar: 'المطور المحترف يقود المحادثة مع الذكاء الاصطناعي ولا يتبعها بشكل أعمى.',
              en: 'Professional creators lead the conversation with AI rather than following blindly.',
            },
          ],
        },
      },
    },

    // Slide 5: Comparison (Before AI vs AI-Assisted)
    {
      id: 's01-slide-05',
      sessionNumber: 1,
      slideNumber: 5,
      totalSlides: 16,
      type: 'comparison',
      title: { ar: "مقارنة مساري التطوير", en: "Two Development Workflows" },
      subtitle: {
        ar: 'كيف أعاد الذكاء الاصطناعي هيكلة خطوات بناء مواقع الويب من الفكرة إلى النشر؟',
        en: 'How AI restructured the end-to-end web construction lifecycle',
      },
      estimatedMinutes: 5,
      teachingGoal: {
        ar: 'توضيح المسار الحقيقي خطوة بخطوة وإثبات أن خطوات التفكير والمراجعة لم تختف بل ازدادت أهميتها.',
        en: 'Demonstrate step-by-step how the pipeline transformed without discarding verification.',
      },
      speakerNotes: { ar: "نفّذ: اشرح المقارنة بين العمودين. لاحظ أن مرحلة \"Research with AI\" و\"AI-assisted Architecture\" و\"Human Review\" أصبحت محطات صريحة تمنع الأخطاء.\nاسأل: ما معيارك للاختيار بين جانبي «مقارنة مساري التطوير»؟\nتحقق: الذكاء الاصطناعي يختصر وقت التنفيذ اليدوي، لكنه لا يقرر بالنيابة عنك ما الذي يجب بناؤه.", en: "Cue: Walk through both columns. Point out that Research, AI Scaffolding, and Human Review are now explicit stages.\nAsk: What would guide your choice between the two sides of “Two Development Workflows”?\nCheck: AI compresses manual execution time, but never decides what should be built for the user." },
      payload: {
        type: 'comparison',
        data: {
          leftHeader: {
            ar: 'التطوير التقليدي (Before AI)',
            en: 'Traditional Workflow (Before AI)',
          },
          rightHeader: {
            ar: 'التطوير المعزز بالذكاء الاصطناعي (AI-Assisted)',
            en: 'AI-Assisted Workflow',
          },
          dimensions: [
            {
              dimension: { ar: 'البحث والاستكشاف', en: 'Research & Exploration' },
              left: { ar: 'ساعات في تصفح المقالات والتوثيق والمنتديات', en: 'Hours manually combing docs and forums' },
              right: { ar: 'استكشاف موجه مع LLMs وتلخيص الخيارات في ثوانٍ', en: 'Targeted synthesis and trade-off evaluation with AI' },
            },
            {
              dimension: { ar: 'تصميم الواجهة والـ Wireframe', en: 'UI Wireframing' },
              left: { ar: 'رسم يدوي بطيء على Figma من الصفر', en: 'Manual wireframing from empty canvas' },
              right: { ar: 'توليد سريع للنماذج الأولية عبر أدوات مثل Stitch', en: 'Rapid interface generation via generative UI tools' },
            },
            {
              dimension: { ar: 'كتابة الهيكل التأسيسي (Boilerplate)', en: 'Boilerplate Scaffolding' },
              left: { ar: 'كتابة ملفات التكوين والـ CSS يدوياً سطر بسطر', en: 'Writing configs and layout CSS line by line' },
              right: { ar: 'توليد الهيكل المنضبط ومراجعته هندسياً فوراً', en: 'Instant scaffolding followed by architectural audit' },
            },
            {
              dimension: { ar: 'تصحيح الأخطاء (Debugging)', en: 'Debugging & Fixes' },
              left: { ar: 'البحث عن أخطاء الـ Syntax والطباعة المفقودة', en: 'Hours tracking typos and syntax quirks' },
              right: { ar: 'تحليل دقيق لأسباب الخلل واقتراح حلول بديلة فورية', en: 'Root-cause analysis and instant regression remedies' },
            },
            {
              dimension: { ar: 'المسؤولية النهائية', en: 'Final Responsibility' },
              left: { ar: 'المطور البشري', en: 'Human Developer' },
              right: { ar: 'المطور البشري (لا تتغير أبداً)', en: 'Human Developer (Never changes)' },
            },
          ],
          balancedVerdict: {
            ar: 'الذكاء الاصطناعي يختصر وقت التنفيذ اليدوي، لكنه لا يقرر بالنيابة عنك ما الذي يجب بناؤه.',
            en: 'AI compresses manual execution time, but never decides what should be built for the user.',
          },
        },
      },
    },

    // Slide 6: Concept (Developer vs Web Creator)
    {
      id: 's01-slide-06',
      sessionNumber: 1,
      slideNumber: 6,
      totalSlides: 16,
      type: 'concept',
      title: { ar: "من مطور أكواد إلى صانع ويب متكامل", en: "From Coder to Web Creator" },
      estimatedMinutes: 5,
      teachingGoal: {
        ar: 'ترسيخ مفهوم "Web Creator" كشخص يفهم المنتج بالكامل من التصميم وحتى التسويق والعملاء.',
        en: 'Define "Web Creator" as a full-spectrum orchestrator covering design, engineering, and market delivery.',
      },
      speakerNotes: { ar: "نفّذ: اشرح أن العميل لا يهتم إن كنت تستخدم Flexbox أو Grid بقدر ما يهتم بأن موقعه سريع، أنيق، ويجلب له مبيعات ومستخدمين.\nاسأل: كيف تطبّق هذا المبدأ: صانع الويب (Web Creator) لا ينحصر في كتابة الدوال، بل يقود رحلة المنتج كاملة.؟\nتحقق: التقنية وسيلة لتحقيق قيمة تجارية وإنسانية، وليست غاية في حد ذاتها.", en: "Cue: Explain that clients care less about whether you chose Flexbox vs Grid and care most that the site is fast, stunning, and converts.\nAsk: How would you apply this principle: A Web Creator orchestrates the entire product journey from concept to revenue.?\nCheck: Technology is an instrument for delivering human and business value, never an end in itself." },
      payload: {
        type: 'concept',
        data: {
          principle: {
            ar: 'صانع الويب (Web Creator) لا ينحصر في كتابة الدوال، بل يقود رحلة المنتج كاملة.',
            en: 'A Web Creator orchestrates the entire product journey from concept to revenue.',
          },
          tagline: {
            ar: 'ORCHESTRATOR OVER TICKET TAKER',
            en: 'ORCHESTRATOR OVER TICKET TAKER',
          },
          explanation: {
            ar: 'المطور التقليدي ينتظر تذكرة (Ticket) مكتوبة بدقة لينفذها. صانع الويب يجلس مع صاحب الفكرة، يفهم جمهوره، يولد التصميم، يبني الكود بالذكاء الاصطناعي، يربطه بمحركات البحث، ويطلقه للعالم.',
            en: 'Traditional coders wait for tickets. Web Creators collaborate with stakeholders, define audience needs, scaffold UI, audit code, optimize SEO, and ship.',
          },
          bulletPoints: [
            {
              ar: 'فهم تجربة المستخدم (UI/UX) والتسلسل البصري الواضح',
              en: 'Grasping UI/UX hierarchy and responsive visual rhythm',
            },
            {
              ar: 'القدرة على توظيف الذكاء الاصطناعي كمهندس مساعد فائق السرعة',
              en: 'Harnessing AI models as hyper-accelerated junior pair programmers',
            },
            {
              ar: 'معرفة أساسيات تحسين محركات البحث (SEO) والأداء الرقمي',
              en: 'Commanding performance budgets and SEO discoverability',
            },
            {
              ar: 'تحويل المشروع البرمجي إلى دراسة حالة تجلب عملاء مستمرين',
              en: 'Packaging deployed code into high-trust client case studies',
            },
          ],
          architecturalRule: {
            ar: 'التقنية وسيلة لتحقيق قيمة تجارية وإنسانية، وليست غاية في حد ذاتها.',
            en: 'Technology is an instrument for delivering human and business value, never an end in itself.',
          },
        },
      },
    },

    // Slide 7: Comparison (Software Engineering vs Vibe Coding Approach)
    {
      id: 's01-slide-07',
      sessionNumber: 1,
      slideNumber: 7,
      totalSlides: 16,
      type: 'comparison',
      title: { ar: "هندسة البرمجيات مقابل أسلوب الـ Vibe Coding", en: "Software Engineering vs Vibe Coding Approach" },
      subtitle: {
        ar: 'مقارنة موضوعية ومتزنة تفكك المفاهيم دون تحيز أو تبسيط تسويقي',
        en: 'An objective, balanced comparison without marketing hype or oversimplification',
      },
      estimatedMinutes: 6,
      teachingGoal: {
        ar: 'تعليم الطلاب متى يفيد الـ Vibe Coding السريع (النماذج الأولية) ولماذا تحتاج المشاريع الحقيقية إلى منهجية هندسية منضبطة.',
        en: 'Teach students where Vibe Coding shines (rapid prototypes) and why production requires disciplined engineering.',
      },
      speakerNotes: { ar: "نفّذ: أكد بقوة على ألا نصف أي أسلوب بأنه \"سيء\" أو \"خاطئ\". الـ Vibe Coding ممتع وسريع للـ MVP، لكن عندما يتعلق الأمر بالأمان والـ scalability، نحتاج عقلية المهندس.\nاسأل: ما معيارك للاختيار بين جانبي «هندسة البرمجيات مقابل أسلوب الـ Vibe Coding»؟\nتحقق: النموذج الأمثل للدورة: نستخدم سرعة الـ Vibe Coding لتوليد الخيارات، ونطبق انضباط هندسة البرمجيات لاعتمادها وتأمينها.", en: "Cue: Do not label either approach as bad. Vibe Coding is fantastic for weekend MVPs, while Software Engineering is vital for uptime, security, and scale.\nAsk: What would guide your choice between the two sides of “Software Engineering vs Vibe Coding Approach”?\nCheck: Our course synthesis: Use Vibe velocity for rapid options, apply Engineering rigor for production safety." },
      payload: {
        type: 'comparison',
        data: {
          leftHeader: {
            ar: 'منهجية هندسة البرمجيات (Software Engineering)',
            en: 'Software Engineering Methodology',
          },
          rightHeader: {
            ar: 'أسلوب الـ Vibe Coding التوليدي',
            en: 'Vibe Coding Approach',
          },
          dimensions: [
            {
              dimension: { ar: 'نقطة الانطلاق', en: 'Starting Point' },
              left: { ar: 'متطلبات واضحة، معمارية مدروسة، ونموذج بيانات', en: 'System requirements, architectural schema & data flow' },
              right: { ar: 'برومبت استكشافي عفوي ووصف شعوري للواجهة', en: 'Conversational prompt and intuitive vibe descriptions' },
            },
            {
              dimension: { ar: 'سرعة النمذجة الأولى', en: 'Initial Prototyping Speed' },
              left: { ar: 'متأنية ومحسوبة بالمللي ثانية', en: 'Measured and methodically deliberate' },
              right: { ar: 'توليد سريع لنموذج أولي يحتاج إلى مراجعة', en: 'Rapid prototype generation that still needs review' },
            },
            {
              dimension: { ar: 'قابلية الصيانة على المدى الطويل', en: 'Long-Term Maintainability' },
              left: { ar: 'عالية جداً بفضل المكونات المعزولة والاختبارات', en: 'High due to modular boundaries and automated tests' },
              right: { ar: 'تتدهور بسرعة كلما كبر حجم المشروع', en: 'Fragile and degrades as file complexity compounds' },
            },
            {
              dimension: { ar: 'الأمان والتعامل مع الأخطاء', en: 'Security & Error Boundaries' },
              left: { ar: 'تدقيق صارم للثغرات والتحقق من المدخلات', en: 'Strict validation, sanitization & boundary defense' },
              right: { ar: 'اعتماد على ما ينتجه النموذج دون فحص عميق', en: 'Implicit trust in model defaults until breakage' },
            },
            {
              dimension: { ar: 'ملكية الكود وفهمه', en: 'Code Ownership & Mastery' },
              left: { ar: 'المهندس يفهم كل سطر ويعرف سبب وجوده', en: 'Engineer understands every abstraction & tradeoff' },
              right: { ar: 'المستخدم يرجو أن يعمل الكود دون فهم بنيته الداخلية', en: 'User hopes it works without inspecting inner mechanics' },
            },
          ],
          balancedVerdict: {
            ar: 'النموذج الأمثل للدورة: نستخدم سرعة الـ Vibe Coding لتوليد الخيارات، ونطبق انضباط هندسة البرمجيات لاعتمادها وتأمينها.',
            en: 'Our course synthesis: Use Vibe velocity for rapid options, apply Engineering rigor for production safety.',
          },
        },
      },
    },

    // Slide 8: Concept (What AI Can Do)
    {
      id: 's01-slide-08',
      sessionNumber: 1,
      slideNumber: 8,
      totalSlides: 16,
      type: 'concept',
      title: { ar: "ما الذي يتقنه الذكاء الاصطناعي بكفاءة خارقة؟", en: "What AI Excels At Exceptionally Well" },
      estimatedMinutes: 4,
      teachingGoal: {
        ar: 'تحديد نقاط القوة الحقيقية لأدوات الذكاء الاصطناعي لتوظيفها دون إضاعة الوقت في مهام لا تناسبها.',
        en: 'Pinpoint the true super-strengths of AI tools so students leverage them effectively.',
      },
      speakerNotes: { ar: "نفّذ: وضّح أن الذكاء الاصطناعي قد يساعد في تحويل JSON إلى واجهة، وصياغة Regex، وتوليد بيانات تجريبية، وتحويل التصميم إلى CSS.\nاسأل: أيّ مهمة من هذه المهام ستجرّب فيها مساعدًا ذكيًا، وكيف ستراجع الناتج؟\nتحقق: يذكر الطالب مهمة محددة، ثم يوضح أن الناتج يحتاج إلى مراجعة وتجربة.", en: "Cue: Explain that AI can help turn JSON into a UI, draft a regular expression, generate sample data, or translate a design into CSS.\nAsk: Which task would you try with an AI assistant, and how would you review its output?\nCheck: Learners name a concrete task and explain that the result still needs review and testing." },
      payload: {
        type: 'concept',
        data: {
          principle: {
            ar: 'الذكاء الاصطناعي هو أعظم مُعامل تسريع تنفيذي في تاريخ صناعة البرمجيات.',
            en: 'AI is the most potent execution multiplier in software engineering history.',
          },
          tagline: {
            ar: 'UNLEASH THE EXECUTION ENGINE',
            en: 'UNLEASH THE EXECUTION ENGINE',
          },
          explanation: {
            ar: 'يمكن للنماذج اللغوية اقتراح أنماط برمجية مألوفة، لكن على المطور مراجعة ملاءمتها واختبارها.',
            en: 'Language models can suggest familiar coding patterns, but developers still need to review and test their fit.',
          },
          bulletPoints: [
            {
              ar: 'توليد الهياكل المكررة (Scaffolding & Boilerplate) في ثوانٍ',
              en: 'Instant generation of repetitive boilerplate and route files',
            },
            {
              ar: 'شرح الأخطاء البرمجية المعقدة ورسائل الـ Terminal المحيرة',
              en: 'Deconstructing cryptic terminal stack traces and build errors',
            },
            {
              ar: 'تحويل التصاميم البصرية إلى كود HTML و Tailwind CSS نظيف',
              en: 'Translating visual layouts into modern HTML & Tailwind tokens',
            },
            {
              ar: 'كتابة حالات الاختبار (Unit Tests) وتوليد بيانات وهمية للاختبار',
              en: 'Authoring unit tests and synthetic data fixtures',
            },
          ],
        },
      },
    },

    // Slide 9: Concept (What AI Cannot Replace)
    {
      id: 's01-slide-09',
      sessionNumber: 1,
      slideNumber: 9,
      totalSlides: 16,
      type: 'concept',
      title: { ar: "ما الذي يعجز الذكاء الاصطناعي عن تعويضه؟", en: "What AI Cannot Replace — The Human Frontier" },
      estimatedMinutes: 5,
      teachingGoal: {
        ar: 'طمأنة الطلاب وبناء ثقتهم بأن قيمتهم الإنسانية والفكرية هي صمام الأمان لأي مشروع ناجح.',
        en: 'Reassure students and solidify confidence in human critical thinking, ethics, and empathy.',
      },
      speakerNotes: { ar: "نفّذ: هذه شريحة محورية جداً. أكد أن الذكاء الاصطناعي لا يملك حس التذوق الجمالي الدقيق، ولا يفهم مشاعر العميل، ولا يتحمل المسؤولية القانونية أو الأخلاقية عند حدوث اختراق.\nاسأل: كيف تطبّق هذا المبدأ: المسؤولية، الحكم الهندسي، والتواصل الإنساني تظل حكراً على العقل البشري.؟\nتحقق: القاعدة الذهبية: الذكاء الاصطناعي يولد الاقتراحات — والمهندس البشري يقرر ويعتمد.", en: "Cue: Crucial slide. Reiterate that AI lacks design taste, cannot empathize with a client, and never shoulders legal liability when data breaches occur.\nAsk: How would you apply this principle: Accountability, architectural judgment, and client empathy remain uniquely human.?\nCheck: Golden Rule: AI Generates Proposals — Human Engineers Audit and Approve." },
      payload: {
        type: 'concept',
        data: {
          principle: {
            ar: 'المسؤولية، الحكم الهندسي، والتواصل الإنساني تظل حكراً على العقل البشري.',
            en: 'Accountability, architectural judgment, and client empathy remain uniquely human.',
          },
          tagline: {
            ar: 'THE IRREPLACEABLE HUMAN CORE',
            en: 'THE IRREPLACEABLE HUMAN CORE',
          },
          explanation: {
            ar: 'الذكاء الاصطناعي لا يعرف أهداف العميل الخفية، ولا يتحمل مسؤولية تعطل السيرفر في ليلة إطلاق منتج، ولا يمتلك الذوق الذي يجعل الموقع محبوباً للمستخدمين.',
            en: 'AI models cannot decipher hidden client anxieties, assume legal liability for downtime, or inject genuine brand charisma.',
          },
          bulletPoints: [
            {
              ar: 'فهم أهداف العمل الحقيقية والموازنة بين التكلفة وسرعة الإطلاق',
              en: 'Synthesizing business goals with budget and timeline tradeoffs',
            },
            {
              ar: 'التحقق الأمني واختبار سيناريوهات الفشل والاختراق المحتملة',
              en: 'Rigorous security verification and threat boundary modeling',
            },
            {
              ar: 'التواصل المقنع مع العميل وبناء علاقة ثقة طويلة الأمد',
              en: 'High-trust client relationships and empathetic communication',
            },
            {
              ar: 'الحس الجمالي والتناسق البصري الذي يميز المواقع الاحترافية',
              en: 'Curating refined visual typography and distinctive brand presence',
            },
          ],
          architecturalRule: {
            ar: 'القاعدة الذهبية: الذكاء الاصطناعي يولد الاقتراحات — والمهندس البشري يقرر ويعتمد.',
            en: 'Golden Rule: AI Generates Proposals — Human Engineers Audit and Approve.',
          },
        },
      },
    },

    // Slide 10: Visual (The 12-Session Journey)
    {
      id: 's01-slide-10',
      sessionNumber: 1,
      slideNumber: 10,
      totalSlides: 16,
      type: 'visual',
      title: { ar: "خارطة طريق رحلة الـ 12 جلسة (18 ساعة)", en: "The 12-Session Learning Roadmap (18 Hours)" },
      subtitle: {
        ar: 'مسار تصاعدي مترابط ينقلك من الفكرة المجردة إلى إطلاق منتج ويب متكامل وقابل للبيع',
        en: 'A progressive end-to-end flight path from abstract idea to market-ready web service',
      },
      estimatedMinutes: 6,
      teachingGoal: {
        ar: 'إعطاء الطلاب الصورة البانورامية الكبرى للدورة ليرى كل طالب موقعه الحالي وأين سيصل.',
        en: 'Present the grand architectural curriculum roadmap so students see how every session connects.',
      },
      speakerNotes: { ar: "نفّذ: استعرض المحطات الست الرئيسية في الخريطة: التأسيس -> هندسة البرومبت والتصميم -> المشروع والتحليل -> أساسيات الويب وReact -> Next.js والـ AI الاحترافي -> التسويق والمشروع النهائي.\nاسأل: اشرح ترتيب المراحل في «خارطة طريق رحلة الـ 12 جلسة (18 ساعة)» بصوتك.\nتحقق: المبتكر الجديد ← هندسة البرومبت ← Google Stitch ← تأسيس المشروع ← Antigravity ← HTML + CSS", en: "Cue: Walk through the 6 major pipeline stages: Foundation -> Prompt & Design -> Setup & Antigravity -> Fundamentals & React -> Production Next.js -> Marketing & Launch.\nAsk: Ask learners to walk through the stages in “The 12-Session Learning Roadmap (18 Hours)”.\nCheck: New Creator → Prompt Eng → UI Design → Project Setup → Analyze First → Web Basics" },
      payload: {
        type: 'visual',
        data: {
          caption: {
            ar: 'رحلة متصلة: كل جلسة تبني مباشرة على مخرجات الجلسة السابقة دون انقطاع.',
            en: 'Continuous progression: Every session compounds directly on previous milestones.',
          },
          diagramType: 'pipeline',
          nodes: [
            { id: 'n1', stepNumber: '01', title: { ar: 'المبتكر الجديد', en: 'New Creator' }, badge: 'Mindset' },
            { id: 'n2', stepNumber: '02', title: { ar: 'هندسة البرومبت', en: 'Prompt Eng' }, badge: 'Syntax' },
            { id: 'n3', stepNumber: '03', title: { ar: 'Google Stitch', en: 'UI Design' }, badge: 'Visual' },
            { id: 'n4', stepNumber: '04', title: { ar: 'تأسيس المشروع', en: 'Project Setup' }, badge: 'Codebase' },
            { id: 'n5', stepNumber: '05', title: { ar: 'Antigravity', en: 'Analyze First' }, badge: 'Audit' },
            { id: 'n6', stepNumber: '06', title: { ar: 'HTML + CSS', en: 'Web Basics' }, badge: 'Structure' },
          ],
        },
      },
    },

    // Slide 11: Concept (Market Changes)
    {
      id: 's01-slide-11',
      sessionNumber: 1,
      slideNumber: 11,
      totalSlides: 16,
      type: 'concept',
      title: { ar: "ما الذي يقدّره العملاء؟", en: "What Clients Value" },
      estimatedMinutes: 4,
      teachingGoal: {
        ar: 'ربط المعرفة التقنية بسوق العمل والفرص المالية الواقعية بدون وعود تسويقية وهمية.',
        en: 'Ground technical competencies in economic reality without fraudulent earning guarantees.',
      },
      speakerNotes: { ar: "نفّذ: اشرح أن العميل يبحث عن حل يناسب حاجته، وأن وضوح النطاق والاتفاق على الأولويات يساعدان على تقدير وقت التنفيذ.\nاسأل: كيف تطبّق هذا المبدأ: العملاء لا يشترون لغات برمجة؛ العملاء يشترون حلولاً تزيد مبيعاتهم ومصداقيتهم؟\nتحقق: يربط الطالب بين احتياج العميل ومخرج قابل للتسليم، ويتجنب الوعد بوقت أو نتيجة قبل فهم نطاق العمل.", en: "Cue: Explain that clients seek a solution to a need, and that clear scope and priorities help estimate delivery time.\nAsk: How would you apply this principle: clients are buying solutions to business needs, not a programming language?\nCheck: Learners connect a client need to a deliverable and avoid promising a timeline or outcome before understanding the scope." },
      payload: {
        type: 'concept',
        data: {
          principle: {
            ar: 'العملاء لا يشترون لغات برمجة؛ العملاء يشترون حلولاً تزيد مبيعاتهم ومصداقيتهم.',
            en: 'Clients never buy programming languages; they invest in solutions that expand revenue.',
          },
          tagline: {
            ar: 'MARKET REALITY & ECONOMIC VALUE',
            en: 'MARKET REALITY & ECONOMIC VALUE',
          },
          explanation: {
            ar: 'يقدّر العملاء فهم احتياجهم والاتفاق على نطاق واضح وتسليم تجربة سريعة الاستجابة مع مراعاة البحث والأداء والأمان.',
            en: 'Clients value a clear understanding of their needs, agreed scope, and responsive experiences built with search, performance, and security in mind.',
          },
          bulletPoints: [
            {
              ar: 'سرعة الإطلاق واختبار الفكرة في السوق بأقل تكلفة ممكنة',
              en: 'Rapid time-to-market and low-cost product validation',
            },
            {
              ar: 'تجربة مستخدم راقية تعمل بسلاسة على الهواتف والشاشات المختلفة',
              en: 'Impeccable responsive UX across mobile and desktop viewports',
            },
            {
              ar: 'الظهور في نتائج البحث وجلب زوار حقيقيين ومبيعات للمشروع',
              en: 'High search rankings and organic customer acquisition via SEO',
            },
            {
              ar: 'الوضوح والشفافية في التواصل دون تعقيدات تقنية مربكة',
              en: 'Transparent client communication without confusing jargon',
            },
          ],
        },
      },
    },

    // Slide 12: Project (First Project Overview)
    {
      id: 's01-slide-12',
      sessionNumber: 1,
      slideNumber: 12,
      totalSlides: 16,
      type: 'project',
      title: { ar: "مشروع واحد، يتطور كل جلسة", en: "One Project, Built Session by Session" },
      estimatedMinutes: 5,
      teachingGoal: {
        ar: 'شرح مفهوم المشروع الممتد عبر الجلسات الـ 12 ليدرك الطالب أن كل درس سيضيف لبنة ملموسة لمشروعه النهائي.',
        en: 'Clarify the course-long project architecture: every session contributes directly to a portfolio piece.',
      },
      speakerNotes: { ar: "نفّذ: أوضح للطلاب أنهم لن يبنوا مشاريع عشوائية تنتهي في سلة المهملات، بل سيختار كل طالب نشاطاً تجارياً حقيقياً (مطعم، عيادة، نادي رياضي، أو متجر) ويطوره طوال الدورة.\nاسأل: أي مخرج من هذه المرحلة يحتاج إلى استكمال؟\nتحقق: اختيار اسم وفكرة النشاط التجاري للمشروع؛ تحديد الجمهور المستهدف والقيمة المقدمة للعميل؛ حصر الصفحات والأقسام المطلوبة في الواجهة الرئيسية؛ تجهيز ملف المتطلبات الأولية لجلسة البرومبت القادمة", en: "Cue: Reassure students that projects are not throwaway exercises. Each chooses a realistic domain (clinic, restaurant, gym) that matures across all 12 sessions.\nAsk: Which deliverable from this phase still needs work?\nCheck: Select business name and sector niche; Define target persona and unique value proposition; Inventory required sections for the flagship landing page; Prepare initial requirements doc for Session 02 prompt design" },
      payload: {
        type: 'project',
        data: {
          phaseName: { ar: 'المرحلة 01: اختيار الفكرة وتفكيك المتطلبات', en: 'Phase 01: Domain & Requirements' },
          stepNumber: '01',
          whatWeBuildNow: {
            ar: 'تحديد الهوية والقطاع التجاري لمشروعك الرقمي الذي سينمو معك حتى حفل التخرج.',
            en: 'Define the commercial identity and scope of your flagship portfolio project.',
          },
          deliverables: [
            { ar: 'اختيار اسم وفكرة النشاط التجاري للمشروع', en: 'Select business name and sector niche' },
            { ar: 'تحديد الجمهور المستهدف والقيمة المقدمة للعميل', en: 'Define target persona and unique value proposition' },
            { ar: 'حصر الصفحات والأقسام المطلوبة في الواجهة الرئيسية', en: 'Inventory required sections for the flagship landing page' },
            { ar: 'تجهيز ملف المتطلبات الأولية لجلسة البرومبت القادمة', en: 'Prepare initial requirements doc for Session 02 prompt design' },
          ],
          connectionToFinalProject: {
            ar: 'هذا المشروع هو ما ستعرضه في الجلسة 12 أمام الجميع، وسيكون حجر الأساس في بورتفوليو خدماتك.',
            en: 'This exact asset will be showcased in Session 12 and will anchor your freelance portfolio.',
          },
        },
      },
    },

    // Slide 13: Demo (Live Deconstruction of Client Request)
    {
      id: 's01-slide-13',
      sessionNumber: 1,
      slideNumber: 13,
      totalSlides: 16,
      type: 'demo',
      title: { ar: "كيف يحلل صانع الويب طلب عميل تجاري؟", en: "Live Demo — How a Web Creator Analyzes a Client Brief" },
      estimatedMinutes: 6,
      teachingGoal: {
        ar: 'نمذجة التفكير الهندسي عملياً أمام الطلاب عند استلام طلب غامض من العميل.',
        en: 'Model professional deconstruction of ambiguous client requests in real time.',
      },
      speakerNotes: { ar: "نفّذ: افتح الشات واعرض طلب عميل نمطي: \"أريد موقعاً لمطعمي الجديد\". أظهر للطلاب كيف يحوله المهندس إلى 5 أسئلة استراتيجية قبل كتابة أي برومبت أو كود.\nاسأل: تحويل رسالة عميل عفوية إلى وثيقة متطلبات برمجية واضحة ومحددة المعالم.\nتحقق: هيكل واجهة مكون من 5 أقسام رئيسية مع زر حجز طاولة بارز وموقع خرائط واضح.", en: "Cue: Share screen with a raw brief: \"I want a site for my restaurant.\" Demonstrate how an engineer converts this into 5 strategic technical specs before touching AI.\nAsk: Transforming an informal client brief into actionable architectural specifications.\nCheck: A 5-section landing page blueprint with primary reservation CTA and integrated Google Map." },
      payload: {
        type: 'demo',
        data: {
          objective: {
            ar: 'تحويل رسالة عميل عفوية إلى وثيقة متطلبات برمجية واضحة ومحددة المعالم.',
            en: 'Transforming an informal client brief into actionable architectural specifications.',
          },
          promptToUse: `Analyze this client brief for a new Mediterranean artisan restaurant:
"We need an elegant website for our new restaurant opening next month. We want online reservations, our menu with prices, photos, and location."

Extract:
1. Target Customer Persona
2. Essential Landing Page Sections (Hero, Menu, Story, Booking, Footer)
3. Technical Requirements (Mobile-first, Fast images, Local SEO)
4. Call to Action (CTA) Priority`,
          instructorSteps: [
            { ar: 'قراءة طلب العميل وتحديد الثغرات والمعلومات الناقصة', en: 'Inspect the raw brief and flag missing business constraints' },
            { ar: 'تطبيق إطار التفكيك الهندسي (من هو الزائر؟ ما هو الهدف التجاري؟)', en: 'Apply requirement deconstruction: Who is the user? What converts?' },
            { ar: 'استخدام الذكاء الاصطناعي كأداة عصف ذهني لاستخراج هيكل الأقسام', en: 'Leverage LLM as an accelerated brainstorming partner' },
            { ar: 'مراجعة المخرجات وتعديلها بحس واقعي يتوافق مع السوق المحلي', en: 'Audit and tailor generated output with local market sensibility' },
          ],
          expectedOutput: {
            ar: 'هيكل واجهة مكون من 5 أقسام رئيسية مع زر حجز طاولة بارز وموقع خرائط واضح.',
            en: 'A 5-section landing page blueprint with primary reservation CTA and integrated Google Map.',
          },
        },
      },
    },

    // Slide 14: Challenge (Deconstruct a Client Brief)
    {
      id: 's01-slide-14',
      sessionNumber: 1,
      slideNumber: 14,
      totalSlides: 16,
      type: 'challenge',
      title: { ar: "تفكيك طلب عميل في 5 دقائق", en: "Student Challenge — Deconstruct a Client Brief (5 Mins)" },
      estimatedMinutes: 7,
      teachingGoal: {
        ar: 'جعل الطالب يمارس التفكير الهندسي بيده ويكتب في الشات أو في محرر نصوصه.',
        en: 'Engage students in hands-on requirement decomposition with active Zoom chat participation.',
      },
      speakerNotes: { ar: "نفّذ: شغل مؤقت الـ 5 دقائق. اطلب من الطلاب اختيار قطاع (مطعم أو عيادة) وتحديد: ما هي الأقسام الـ 4 الأساسية للموقع؟ وما هو الزر الرئيسي (CTA)؟\nاسأل: ما الناتج الذي ستسلّمه؟ تفكيك طلب عميل لنشاط تجاري محلي وتحديد هيكل الموقع وأهدافه.\nتحقق: مخطط نصي للأقسام الأربعة مع زر الدعوة لاتخاذ إجراء (CTA) الأساسي.", en: "Cue: Launch the 5-minute countdown. Instruct students to pick a clinic or restaurant and list 4 essential sections plus the primary CTA.\nAsk: What will you submit? Deconstruct a local business client brief into structural sections and CTA.\nCheck: A concise 4-section layout blueprint with primary call-to-action." },
      payload: {
        type: 'challenge',
        data: {
          mission: {
            ar: 'تفكيك طلب عميل لنشاط تجاري محلي وتحديد هيكل الموقع وأهدافه.',
            en: 'Deconstruct a local business client brief into structural sections and CTA.',
          },
          durationMinutes: 5,
          objective: {
            ar: 'التفكير كمهندس منتج قبل الاندفاع نحو البرمجة أو سؤال الذكاء الاصطناعي.',
            en: 'Cultivate product-engineering intuition before writing code or prompting AI.',
          },
          instructions: [
            { ar: 'اختر فكرة مشروعك: (مطعم راقٍ، عيادة أسنان، نادي لياقة، أو بورتفوليو شخصي)', en: 'Select your project niche: artisan dining, dental clinic, gym, or portfolio' },
            { ar: 'حدد الهدف التجاري الأول للموقع (مثال: حجز موعد، طلب طعام، اتصال مباشر)', en: 'Define the #1 business conversion goal (Book appointment, Call now)' },
            { ar: 'حدد 4 أقسام رئيسية يحتاجها الزائر في الصفحة الأولى', en: 'Specify 4 non-negotiable sections needed on the homepage' },
            { ar: 'شارك ملخصك في شات Zoom خلال 5 دقائق', en: 'Drop your 3-line summary into Zoom chat within 5 minutes' },
          ],
          starterPromptOrCode: 'Project: [Name] | Goal: [Main CTA] | Sections: 1. Hero, 2. Services, 3. Reviews, 4. Contact',
          deliverable: {
            ar: 'مخطط نصي للأقسام الأربعة مع زر الدعوة لاتخاذ إجراء (CTA) الأساسي.',
            en: 'A concise 4-section layout blueprint with primary call-to-action.',
          },
        },
      },
    },

    // Slide 15: Takeaway (3 Principles)
    {
      id: 's01-slide-15',
      sessionNumber: 1,
      slideNumber: 15,
      totalSlides: 16,
      type: 'takeaway',
      title: { ar: "خلاصة: ثلاث ركائز", en: "Recap: Three Principles" },
      estimatedMinutes: 4,
      teachingGoal: {
        ar: 'تلخيص الجلسة في 3 قواعد ذهبية لا تُنسى ترافق الطالب طوال رحلته البرمجية.',
        en: 'Crystallize the session into 3 memorable pillars that anchor the rest of the course.',
      },
      speakerNotes: { ar: "نفّذ: اقرأ الركائز الثلاث بتركيز شديد ونبرة واثقة. اطلب من الطلاب تدوينها أو تصوير الشاشة لأنها تمثل ميثاق العمل للدورة بأكملها.\nاسأل: أي مبدأ من «خلاصة: ثلاث ركائز» ستستخدمه في مشروعك؟\nتحقق: نحن لا نكتفي بكتابة الكود؛ نحن نصنع حلول ويب رقمية متكاملة تغير واقع الأعمال.", en: "Cue: Deliver these 3 principles with conviction. Encourage learners to screenshot or journal them as our course code of conduct.\nAsk: Which principle from “Recap: Three Principles” will you use in your project?\nCheck: We do not just write code; we engineer end-to-end web products that power real businesses." },
      payload: {
        type: 'takeaway',
        data: {
          takeaways: [
            {
              number: '01',
              title: { ar: 'الذكاء الاصطناعي أداة — والقرار للمهندس', en: 'AI is a Tool — Judgment is Human' },
              description: {
                ar: 'نستعين بالذكاء الاصطناعي لتسريع بناء الكود واستكشاف الخيارات، لكن الحكم النهائي والاختبار والمسؤولية تظل دائماً بيدك.',
                en: 'We leverage AI for scaffolding speed and options, but testing, security, and accountability remain human.',
              },
            },
            {
              number: '02',
              title: { ar: 'الفهم قبل البرومبت والبرمجة', en: 'Deconstruct Before Prompting' },
              description: {
                ar: 'كتابة برومبت غامض تنتج كوداً عشوائياً. تفكيك طلب العميل وتحديد المتطلبات بدقة هو ما ينتج مواقع احترافية تخدم الأعمال.',
                en: 'Vague prompts produce chaotic code. Meticulous requirement breakdown generates reliable client systems.',
              },
            },
            {
              number: '03',
              title: { ar: 'سرعة الـ Vibe مع انضباط الهندسة', en: 'Vibe Velocity + Engineering Rigor' },
              description: {
                ar: 'نجمع بين خفة وسرعة توليد النماذج الأولية وبين المعمارية النظيفة القابلة للصيانة والتوسع والتسليم الحقيقي للعملاء.',
                en: 'Combine rapid prototyping velocity with clean architecture that survives in production environments.',
              },
            },
          ],
          coreMotto: {
            ar: 'نحن لا نكتفي بكتابة الكود؛ نحن نصنع حلول ويب رقمية متكاملة تغير واقع الأعمال.',
            en: 'We do not just write code; we engineer end-to-end web products that power real businesses.',
          },
        },
      },
    },

    // Slide 16: Next (Preparing for Session 02)
    {
      id: 's01-slide-16',
      sessionNumber: 1,
      slideNumber: 16,
      totalSlides: 16,
      type: 'next',
      title: { ar: "المحطة القادمة — هندسة البرومبت لتطوير الويب", en: "Next Waypoint — Prompt Engineering for Web Development" },
      estimatedMinutes: 2,
      teachingGoal: {
        ar: 'تشويق الطلاب للجلسة القادمة وتحديد المهمة التحضيرية البسيطة المطلوبة منهم.',
        en: 'Build anticipation for Session 02 and assign a concise pre-class preparation task.',
      },
      speakerNotes: { ar: "نفّذ: اختم الجلسة بتوجيه تحية للجميع. اطلب منهم تثبيت فكرة مشروعهم (مطعم أو عيادة أو غيرها) لندخل بها مباشرة في ورشة البرومبت في الجلسة 02.\nاسأل: ما الذي ستجهزه قبل الجلسة القادمة؟\nتحقق: اختر اسم ونشاط مشروعك التجاري الذي ستطبق عليه هندسة البرومبت في الجلسة القادمة.", en: "Cue: Conclude with applause. Instruct learners to lock in their project idea so Session 02 launches straight into hands-on prompt workshops.\nAsk: What will you prepare before the next session?\nCheck: Finalize your chosen business name and sector for Session 02 prompt lab exercises." },
      payload: {
        type: 'next',
        data: {
          nextSessionNumber: '02',
          nextSessionTitle: {
            ar: 'هندسة البرومبت لتطوير الويب: صياغة التعليمات البرمجية الدقيقة',
            en: 'Prompt Engineering for Web Development: Crafting Rigid Technical Instructions',
          },
          teaser: {
            ar: 'سننتقل من البرومبت العشوائي إلى إطار العمل الاحترافي (ROLE + CONTEXT + TASK + CONSTRAINTS + OUTPUT) لبناء صفحات ويب متكاملة.',
            en: 'Moving from naive prompts to our 8-part framework: Role, Context, Goal, Requirements, Constraints, Input, Output, and Acceptance Criteria.',
          },
          preparationHint: {
            ar: 'اختر اسم ونشاط مشروعك التجاري الذي ستطبق عليه هندسة البرومبت في الجلسة القادمة.',
            en: 'Finalize your chosen business name and sector for Session 02 prompt lab exercises.',
          },
        },
      },
    },
  ],
};
