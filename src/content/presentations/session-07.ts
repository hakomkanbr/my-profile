import { PresentationSession } from '@/types';

export const SESSION_07: PresentationSession = {
  id: 'session-07',
  number: 7,
  slug: 'session-07',
  title: {
    ar: 'إضافة التفاعل الحي وتسهيل تجربة الزائر (JavaScript)',
    en: 'Adding Live Interaction & Making Visitor Experience Easier (JavaScript)',
  },
  subtitle: {
    ar: 'كيف نجعل الصفحة تستجيب لنقرات الزائر: فتح قائمة الهاتف، تصفية المنتجات حسب النوع، وتجهيز رسالة الطلب؟',
    en: 'How to make the page respond to visitor clicks: mobile menu, category filtering, and order actions',
  },
  durationMinutes: 90,
  goal: {
    ar: 'تمكين المتدرب من فهم كيف تضيف JavaScript التفاعل الحي للصفحة، وبناء ميزة تصفية المنتجات أو الخدمات وقائمة الهاتف التفاعلية بمساعدة الذكاء الاصطناعي.',
    en: 'Understand how JavaScript adds live interactivity and build category filtering and a mobile menu with AI.',
  },
  prerequisites: [
    {
      ar: 'إكمال الجلسة 06 وبناء الصفحة الأساسية المتجاوبة',
      en: 'Completion of Session 06 with a responsive core page',
    },
  ],
  objectives: [
    {
      ar: 'فهم دور JavaScript ببساطة: تحويل الصفحة الثابتة إلى صفحة تستجيب لضغطات الزائر فورًا',
      en: 'Understand JavaScript simply: turning a static page into one that responds to visitor clicks',
    },
    {
      ar: 'معرفة معادلة التفاعل الثلاثية: (فعل الزائر ← استجابة الصفحة ← النتيجة المريحة)',
      en: 'Learn the 3-step interaction formula: Visitor Action -> Page Response -> Smooth Result',
    },
    {
      ar: 'إضافة أزرار تصفية سهلة (مثل: الكل، مشروبات ساخنة، مشروبات باردة) لتسهيل بحث الزائر',
      en: 'Add simple filter buttons (e.g., All, Hot Drinks, Cold Drinks) to help visitors find items fast',
    },
    {
      ar: 'التأكد من عمل قائمة الهاتف التفاعلية وزر الطلب المباشر عبر واتساب بسلاسة',
      en: 'Verify that the mobile menu and direct WhatsApp ordering button work smoothly',
    },
  ],
  timeline: [
    {
      timeRange: '00:00 – 00:15',
      durationMinutes: 15,
      label: { ar: 'ما الفرق بين الصفحة الثابتة والصفحة التفاعلية الحية؟', en: 'Static page vs. Interactive live page' },
      type: 'context',
    },
    {
      timeRange: '00:15 – 00:35',
      durationMinutes: 20,
      label: { ar: 'معادلة التفاعل البسيطة: ضغطة الزائر ← استجابة فورية على الشاشة', en: 'Simple interaction formula: Click -> Instant response' },
      type: 'concept',
    },
    {
      timeRange: '00:35 – 00:55',
      durationMinutes: 20,
      label: { ar: 'تطبيق عملي: إضافة أزرار تصفية مشروبات المقهى وقائمة الهاتف', en: 'Live Demo: Adding Café drink filter tabs & mobile menu' },
      type: 'demo',
    },
    {
      timeRange: '00:55 – 01:20',
      durationMinutes: 25,
      label: { ar: 'نشاط المتدرب: إضافة تفاعل مفيد واحد لصفحته واختباره', en: 'Trainee Activity: Add & test one useful interaction on your page' },
      type: 'practice',
    },
    {
      timeRange: '01:20 – 01:30',
      durationMinutes: 10,
      label: { ar: 'مراجعة تفاعلات مواقع المتدربين وخلاصة الجلسة السابعة', en: 'Review trainee interactions & Session 07 summary' },
      type: 'takeaway',
    },
  ],
  projectMilestone: {
    ar: 'إضافة أزرار تصفية تفاعلية للمنتجات أو الخدمات وقائمة تنقل تعمل باللمس على الهاتف.',
    en: 'Add interactive category filter tabs and a touch-friendly mobile navigation menu.',
  },
  aiRole: {
    ar: 'مساعد يكتب منطق التفاعل ويقترح أبسط طريقة لربط الأزرار بالعناصر المعروضة.',
    en: 'Assistant writing clean interaction logic connecting buttons to displayed items.',
  },
  marketConnection: {
    ar: 'التفاعل البسيط والواضح يساعد الزائر على الوصول للخدمة التي يريدها في ثوانٍ دون ملل.',
    en: 'Simple, clear interactivity helps visitors find the exact item they want in seconds.',
  },
  startScreen: {
    badge: 'الجلسة 07 من 12 • بناء الموقع وتحسينه (3)',
    headline: {
      ar: 'إضافة التفاعل الحي وتسهيل تجربة الزائر (JavaScript)',
      en: 'Adding Live Interaction & Making Visitor Experience Easier',
    },
    description: {
      ar: 'بعد أن بنينا هيكل الصفحة وألوانها في الجلسة السابقة، سنتعلم اليوم كيف نجعل أزرار الصفحة تتفاعل مع الزائر بذكاء وسلاسة.',
      en: 'Now that our page layout is built, learn how to make buttons and filters respond smoothly to visitor clicks.',
    },
    sessionGoal: {
      ar: 'إضافة تفاعل عملي مفيد لموقعك (مثل تصفية الأقسام أو قائمة الهاتف) واختباره.',
      en: 'Add and test a practical interaction on your website (like category filtering or a mobile menu).',
    },
  },
  endScreen: {
    headline: {
      ar: 'رائع! أصبح موقعك الآن حيًا ويتفاعل مع نقرات الزائر بسلاسة',
      en: 'Awesome! Your Website Is Now Alive and Interactive',
    },
    keyRecap: [
      {
        ar: 'وظيفة JavaScript هي جعل الصفحة تستجيب لفعل الزائر (مثل الضغط على زر أو اختيار فئة) فورًا.',
        en: 'JavaScript makes the page respond immediately to visitor actions like clicking a button or filter.',
      },
      {
        ar: 'أفضل التفاعلات هي التي تسهّل على الزائر الوصول للمعلومة، وليست الحركات المزعجة.',
        en: 'The best interactions help visitors find info faster, not flashy distracting animations.',
      },
      {
        ar: 'اختبر كل زر تفاعلي بنفسك على الكمبيوتر والهاتف للتأكد من أنه يعمل كما يتوقع الزائر.',
        en: 'Test every interactive button yourself on desktop and mobile to ensure smooth behavior.',
      },
    ],
    nextSessionNumber: '08',
    nextSessionTitle: {
      ar: 'تنظيم الموقع في قوالب وقطع قابلة لإعادة الاستخدام (React Components)',
      en: 'Organizing the Website into Reusable Templates (React Components)',
    },
  },
  slides: [
    {
      id: 's07-slide-01',
      sessionNumber: 7,
      slideNumber: 1,
      totalSlides: 10,
      type: 'title',
      visualType: 'js-interaction',
      realWorldExample: {
        ar: 'إذا كان HTML هو الجدران والأبواب، وCSS هو الطلاء والإضاءة، فإن JavaScript هي الكهرباء التي تفتح الباب وتضيء المصباح عندما تضغط على المفتاح!',
        en: 'If HTML is the walls and CSS is the paint, JavaScript is the electricity that turns on the light when you press the switch!',
      },
      title: {
        ar: 'إضافة التفاعل الحي لصفحة الموقع',
        en: 'Adding Live Interactivity to Your Webpage',
      },
      estimatedMinutes: 5,
      teachingGoal: {
        ar: 'تقديم مفهوم التفاعل بـ JavaScript كاستجابة بسيطة ومباشرة لضغطة الزائر.',
        en: 'Introduce JavaScript interactivity as a simple response to a visitor click.',
      },
      speakerNotes: {
        ar: 'نفّذ: أكمل تشبيه المنزل والمقهى الذي بدأناه في الجلسة السابقة: بعد الهيكل والديكور، نصل اليوم إلى الكهرباء والحركة (JavaScript).\nاسأل: ما الأمثلة التي ترونها يوميًا للتفاعل داخل أي موقع؟ (فتح قائمة الهاتف، تصفية الأصناف، إظهار تفاصيل المنتج).\nتحقق: نركز اليوم على التفاعلات المفيدة التي تخدم الزائر.',
        en: 'Continue the house analogy: HTML = Structure, CSS = Paint, JavaScript = Electricity/Switch.',
      },
      payload: {
        type: 'title',
        data: {
          sessionNumber: '07',
          totalSessions: '12',
          durationMinutes: 90,
          kicker: {
            ar: 'المرحلة الرابعة • بناء الموقع وتحسينه (الجزء الثالث)',
            en: 'Phase 4 • Building & Improving the Website (Part 3)',
          },
          headline: {
            ar: 'كيف نجعل الموقع يتفاعل مع نقرات الزائر بذكاء؟',
            en: 'How Do We Make the Website Respond Smartly to Visitor Clicks?',
          },
          subheadline: {
            ar: 'نتعرف على دور JavaScript في إضافة أزرار التصفية، وقائمة الهاتف، وتجهيز طلبات واتساب التلقائية.',
            en: 'Learn how JavaScript powers category filters, mobile menus, and smart WhatsApp order buttons.',
          },
          tags: ['تفاعل مباشر', 'تصفية المنتجات', 'قائمة الهاتف', 'تجربة مريحة'],
        },
      },
    },
    {
      id: 's07-slide-02',
      sessionNumber: 7,
      slideNumber: 2,
      totalSlides: 10,
      type: 'visual',
      visualType: 'js-interaction',
      title: {
        ar: 'معادلة التفاعل البسيطة في 3 خطوات',
        en: 'The Simple 3-Step Interaction Formula',
      },
      subtitle: {
        ar: 'كل ميزة تفاعلية في العالم تعمل بنفس هذه الخطوات الثلاث',
        en: 'Every interactive feature on the web works through these exact 3 steps',
      },
      estimatedMinutes: 8,
      teachingGoal: {
        ar: 'تبسيط مفهوم (Events & DOM Updates) إلى 3 خطوات مفهومة لأي مبتدئ.',
        en: 'Simplify DOM Events and state updates into 3 intuitive steps.',
      },
      speakerNotes: {
        ar: 'نفّذ: اشرح المخطط الثلاثي في الرسم: (1. فعل الزائر ← 2. استجابة الصفحة ← 3. نتيجة مريحة). في البرمجة نسمي فعل الزائر «حدثًا (Event)» مثل الضغطة (`Click`)، ونسمي تحديث الشاشة «تحديث عناصر الصفحة (DOM)».\nاسأل: عندما يضغط الزائر على زر «مشروبات باردة»، ما هو الفعل وما هي النتيجة؟\nتحقق: الفعل هو الضغطة، والنتيجة هي إخفاء المشروبات الساخنة وإظهار الباردة فقط!',
        en: 'Walk through the 3 steps: Visitor Action (Click) -> Page Response -> Smooth Result.',
      },
      payload: {
        type: 'visual',
        data: {
          diagramType: 'pipeline',
          caption: {
            ar: 'عندما تصف أي ميزة تفاعلية للذكاء الاصطناعي، صفها بهذه الخطوات الثلاث البسيطة.',
            en: 'When asking AI for any interactive feature, describe it using these 3 simple steps.',
          },
          nodes: [
            {
              id: 'js-1',
              stepNumber: '01',
              badge: 'الفعل',
              title: { ar: 'ماذا يفعل الزائر؟', en: '1. What Does the Visitor Do?' },
              description: {
                ar: 'يضغط على زر «مشروبات باردة» أو يضغط على أيقونة القائمة في الهاتف.',
                en: 'Clicks the "Cold Drinks" button or taps the mobile menu icon.',
              },
            },
            {
              id: 'js-2',
              stepNumber: '02',
              badge: 'الاستجابة',
              title: { ar: 'ماذا تفعل الصفحة؟', en: '2. How Does the Page Respond?' },
              description: {
                ar: 'تلتقط الصفحة الضغطة وتفرز الأصناف المطابقة في أجزاء من الثانية.',
                en: 'The page detects the click and filters matching items in a split second.',
              },
            },
            {
              id: 'js-3',
              stepNumber: '03',
              badge: 'النتيجة',
              title: { ar: 'ماذا يرى الزائر؟', en: '3. What Does the Visitor See?' },
              description: {
                ar: 'تظهر المشروبات الباردة فقط أمامه بوضوح دون إعادة تحميل الصفحة.',
                en: 'Only cold drinks appear cleanly without reloading the page.',
              },
            },
          ],
        },
      },
    },
    {
      id: 's07-slide-03',
      sessionNumber: 7,
      slideNumber: 3,
      totalSlides: 10,
      type: 'concept',
      visualType: 'js-interaction',
      realWorldExample: {
        ar: 'عندما يضغط الزبون على زر «اطلب لاتيه عبر واتساب»، تفتح محادثة واتساب وبداخلها رسالة جاهزة تلقائيًا: «مرحبًا، أود طلب قهوة لاتيه (18 ر.س)»!',
        en: 'When a customer taps "Order Latte on WhatsApp", WhatsApp opens with a pre-filled message: "Hello, I would like to order a Caffè Latte ($5)"!',
      },
      title: {
        ar: 'أهم 3 تفاعلات عملية يحتاجها موقعك الأول',
        en: 'The Top 3 Practical Interactions Your First Website Needs',
      },
      estimatedMinutes: 10,
      teachingGoal: {
        ar: 'حصر التفاعلات في 3 ميزات عالية القيمة يسهل بناؤها واختبارها.',
        en: 'Focus on 3 high-value interactions that are practical and easy to verify.',
      },
      speakerNotes: {
        ar: 'نفّذ: استعرض التفاعلات الثلاثة. لاحظ التفاعل الثالث: تخصيص رسالة واتساب باسم المنتج الذي ضغط عليه الزبون! هذه ميزة يحبها أصحاب المشاريع جدًا.\nاسأل: أيهما أفضل لصاحب المقهى: أن تصله رسالة واتساب فارغة كلمة «مرحبًا»، أم رسالة مكتوب فيها اسم المشروب الذي اختاره الزبون؟\nتحقق: الرسالة الجاهزة باسم المنتج تختصر الوقت وتوضح الطلب فورًا.',
        en: 'Highlight the 3 practical interactions, especially pre-filling the WhatsApp message with the selected product name.',
      },
      payload: {
        type: 'concept',
        data: {
          tagline: { ar: 'تفاعل يخدم الهدف', en: 'Purposeful Interactivity' },
          principle: {
            ar: 'أضف التفاعلات التي تختصر وقت الزائر وتسهّل طلبه',
            en: 'Add Interactions That Save Visitor Time and Make Ordering Easier',
          },
          explanation: {
            ar: 'لا نحتاج إلى تعقيد الموقع بحركات كثيرة؛ هذه التفاعلات الثلاثة كافية لجعل موقعك عمليًا وممتازًا:',
            en: 'No need for complex gimmicks; these 3 interactions make your website practical and smooth:',
          },
          bulletPoints: [
            {
              ar: '1. أزرار تصفية الأصناف (Filter Tabs): مثل (الكل | مشروبات ساخنة | مشروبات باردة | حلويات).',
              en: '1. Category Filter Tabs: e.g., (All | Hot Drinks | Cold Drinks | Desserts).',
            },
            {
              ar: '2. قائمة الهاتف المنسدلة (Mobile Menu): زر يفتح روابط الأقسام ويغلقها بسلاسة على الجوال.',
              en: '2. Mobile Menu Toggle: A button that smoothly opens and closes navigation links on phones.',
            },
            {
              ar: '3. زر الطلب الذكي عبر واتساب: يرسل اسم المنتج المختار تلقائيًا داخل نص رسالة واتساب.',
              en: '3. Smart WhatsApp Order Button: Automatically includes the selected item name in the WhatsApp message.',
            },
          ],
          architecturalRule: {
            ar: 'كل تفاعل تضيفه يجب أن يقلل عدد النقرات المطلوبة من الزائر للوصول إلى هدفه.',
            en: 'Every interaction should reduce the number of taps needed for the visitor to reach their goal.',
          },
        },
      },
    },
    {
      id: 's07-slide-04',
      sessionNumber: 7,
      slideNumber: 4,
      totalSlides: 10,
      type: 'comparison',
      visualType: 'cluttered-vs-clean',
      title: {
        ar: 'مقارنة: التفاعل المفيد والهادئ مقابل الحركات المزعجة',
        en: 'Comparison: Helpful Interaction vs. Annoying Gimmicks',
      },
      subtitle: {
        ar: 'متى يكون التفاعل إضافة رائعة للموقع ومتى يكون عبئًا على الزائر؟',
        en: 'When interactivity improves the site vs. when it frustrates visitors',
      },
      estimatedMinutes: 8,
      teachingGoal: {
        ar: 'توعية المبتدئ بعدم المبالغة في المؤثرات الحركية التي تبطئ الموقع أو تربك الزائر.',
        en: 'Caution beginners against overusing heavy animations or popups that annoy visitors.',
      },
      speakerNotes: {
        ar: 'نفّذ: قارن بين العمودين. المبتدئ قد يغريه طلب «نوافذ منبثقة تخرج كل 5 ثوانٍ وعناصر تطير في الشاشة»، لكن الزائر الحقيقي يكره ذلك ويغلق الموقع.\nاسأل: كيف تشعر عندما تدخل موقعًا فتخرج لك 3 نوافذ إعلانية تغطي الشاشة قبل أن تقرأ سطرًا واحدًا؟\nتحقق: التفاعل المحترف هادئ، سريع، ويحدث فقط عندما يطلبه الزائر بضغطته.',
        en: 'Compare calm, visitor-triggered interactions with intrusive popups and heavy animations.',
      },
      payload: {
        type: 'comparison',
        data: {
          leftHeader: {
            ar: 'تفاعل مفيد وهادئ (يريح الزائر)',
            en: 'Helpful & Calm Interaction (Visitor-Friendly)',
          },
          rightHeader: {
            ar: 'حركات ونوافذ مزعجة (تطرد الزائر)',
            en: 'Intrusive Popups & Heavy Motion (Frustrating)',
          },
          dimensions: [
            {
              dimension: { ar: 'متى يعمل التفاعل؟', en: 'When It Triggers' },
              left: {
                ar: 'يعمل فقط عندما يضغط الزائر على زر التصفية أو القائمة بإرادته',
                en: 'Triggers only when the visitor intentionally taps a filter or menu button',
              },
              right: {
                ar: 'نوافذ تقفز فجأة في وجه الزائر وتغطي الشاشة دون إذنه',
                en: 'Popups jump onto the screen unexpectedly and block content',
              },
            },
            {
              dimension: { ar: 'سرعة الاستجابة على الهاتف', en: 'Speed on Phones' },
              left: {
                ar: 'سريع وخفيف جدًا ويظهر النتيجة في أجزاء من الثانية',
                en: 'Fast, lightweight, and shows results instantly',
              },
              right: {
                ar: 'مؤثرات ثقيلة تبطئ التصفح وتستهلك بطارية الهاتف',
                en: 'Heavy animations that lag and slow down scrolling',
              },
            },
            {
              dimension: { ar: 'وضوح الحالة النشطة', en: 'Active State Clarity' },
              left: {
                ar: 'يتغير لون زر الفئة المختارة ليعلَم الزائر أي قسم يتصفحه الآن',
                en: 'The selected filter button highlights clearly so visitors know where they are',
              },
              right: {
                ar: 'أزرار لا يتغير شكلها عند الضغط فلا يدري الزائر هل عملت أم لا',
                en: 'Buttons give no visual feedback when clicked',
              },
            },
          ],
          balancedVerdict: {
            ar: 'اجعل التفاعل خادمًا لراحة الزائر: سريعًا، واضحًا، وتحت سيطرته دائمًا.',
            en: 'Keep interactivity in service of visitor comfort: fast, clear, and under their control.',
          },
        },
      },
    },
    {
      id: 's07-slide-05',
      sessionNumber: 7,
      slideNumber: 5,
      totalSlides: 10,
      type: 'reveal',
      visualType: 'js-interaction',
      title: {
        ar: 'كيف تطلب ميزة تفاعلية من الذكاء الاصطناعي بوضوح؟',
        en: 'How to Request an Interactive Feature from AI Clearly',
      },
      estimatedMinutes: 8,
      teachingGoal: {
        ar: 'إعطاء المتدرب قالبًا من 3 أسطر لطلب أي تفاعل برمجي من الذكاء الاصطناعي.',
        en: 'Provide a 3-step template for requesting any interactive feature from AI.',
      },
      speakerNotes: {
        ar: 'نفّذ: اشرح الخطوات الثلاث في الشريحة. عندما نطلب تفاعلًا من الذكاء الاصطناعي، نصف له: (1. الأزرار المطلوبة، 2. ماذا يحدث عند الضغط، 3. كيف يبدو الزر المختار).\nاسأل: لماذا نطلب تمييز لون الزر المختار حاليًا؟\nتحقق: حتى يعرف الزائر أنه يشاهد الآن «المشروبات الباردة» وليس القائمة كاملة.',
        en: 'Show the 3-step recipe for prompting an interactive filter or menu.',
      },
      payload: {
        type: 'reveal',
        data: {
          premise: {
            ar: 'لطلب إضافة أزرار تصفية أو أي تفاعل في صفحتك، حدد للذكاء الاصطناعي هذه النقاط الثلاث:',
            en: 'To request filter buttons or any interaction on your page, specify these 3 points to AI:',
          },
          steps: [
            {
              number: '01',
              title: { ar: 'حدد أسماء أزرار التصفية بوضوح', en: '1. Name the Filter Buttons Clearly' },
              description: {
                ar: 'مثال: «أضف 3 أزرار فوق قائمة المشروبات: (الكل، مشروبات ساخنة، مشروبات باردة)».',
                en: 'Example: "Add 3 buttons above the drinks menu: (All, Hot Drinks, Cold Drinks)."',
              },
            },
            {
              number: '02',
              title: { ar: 'اشرح ماذا يحدث عند الضغط على كل زر', en: '2. Explain What Happens on Click' },
              description: {
                ar: 'مثال: «عند الضغط على زر فئة، اعرض بطاقات تلك الفئة فقط وميّز الزر المختار بلون واضح».',
                en: 'Example: "When a category button is clicked, show only matching cards and highlight the active button."',
              },
            },
            {
              number: '03',
              title: { ar: 'اجعل زر واتساب في كل بطاقة يرسل اسم المنتج', en: '3. Make Each Card WhatsApp Button Send the Item Name' },
              description: {
                ar: 'مثال: «اجعل زر الطلب في كل بطاقة يفتح واتساب مع نص: مرحبًا، أود طلب [اسم المشروب]».',
                en: 'Example: "Make each card button open WhatsApp with: Hello, I would like to order [Drink Name]."',
              },
            },
          ],
        },
      },
    },
    {
      id: 's07-slide-06',
      sessionNumber: 7,
      slideNumber: 6,
      totalSlides: 10,
      type: 'question',
      visualType: 'js-interaction',
      title: {
        ar: 'سؤال تفاعلي: ما التفاعل الأنسب لمشروعك؟',
        en: 'Interactive Question: What Interaction Fits Your Project Best?',
      },
      estimatedMinutes: 6,
      teachingGoal: {
        ar: 'مساعدة كل متدرب على اختيار التفاعل الأنسب لطبيعة موقعه قبل النشاط العملي.',
        en: 'Help every trainee pick the best interactive feature for their specific website.',
      },
      speakerNotes: {
        ar: 'نفّذ: اسأل المتدربين في الشات عن الفئات التي سيضعونها في أزرار التصفية لمشاريعهم.\nاسأل: لو كان موقعك لعيادة أسنان أو لمعرض أعمال مصمم، ما هي أزرار التصفية المناسبة له؟\nتحقق: في العيادة مثلاً: (الكل | تجميل الأسنان | العلاج والتنظيف | تقويم الأسنان).',
        en: 'Help trainees brainstorm 3 filter categories for their own project domain.',
      },
      payload: {
        type: 'question',
        data: {
          question: {
            ar: 'لو أردت إضافة 3 أزرار تصفية (Filter Tabs) فوق قسم الخدمات أو المنتجات في موقعك، ماذا ستسميها؟',
            en: 'If you add 3 category filter buttons above your services or products section, what will you name them?',
          },
          contextHint: {
            ar: 'اختر تصنيفات بسيطة تساعد زائر موقعك على الوصول لما يبحث عنه بسرعة.',
            en: 'Pick simple categories that help your visitor find what they need quickly.',
          },
          promptToClass: {
            ar: 'اكتب أسماء الأزرار الثلاثة لموقعك في شات Zoom 💬',
            en: 'Type your 3 filter button names in Zoom chat 💬',
          },
          expectedAnswers: [
            {
              ar: 'لمقهى أو مطعم: (الكل | المشروبات الساخنة | المشروبات الباردة | الحلويات).',
              en: 'For a café: (All | Hot Drinks | Cold Drinks | Desserts).',
            },
            {
              ar: 'لمتجر عطور: (الكل | عطور رجالية | عطور نسائية | مجموعات الهدايا).',
              en: 'For a perfume store: (All | Men | Women | Gift Sets).',
            },
            {
              ar: 'لموقع خدمات أو استشارات: (الكل | باقات الأفراد | باقات الشركات).',
              en: 'For services/consulting: (All | Individual Packages | Business Packages).',
            },
          ],
        },
      },
    },
    {
      id: 's07-slide-07',
      sessionNumber: 7,
      slideNumber: 7,
      totalSlides: 10,
      type: 'demo',
      visualType: 'js-interaction',
      title: {
        ar: 'تطبيق عملي: إضافة تصفية المشروبات ورسالة واتساب الذكية للمقهى',
        en: 'Live Demo: Adding Drink Filters & Smart WhatsApp Ordering to the Café',
      },
      estimatedMinutes: 15,
      teachingGoal: {
        ar: 'تطبيق حي لإضافة أزرار التصفية وتخصيص رسالة واتساب لكل مشروب في موقع المقهى.',
        en: 'Live demonstration adding category filter tabs and per-item WhatsApp messages.',
      },
      speakerNotes: {
        ar: 'نفّذ: نفذ الطلب أمام المتدربين وجرب الضغط على «مشروبات ساخنة» ثم «مشروبات باردة»، ثم اضغط على زر «اطلب عبر واتساب» لأحد المشروبات ليروا كيف يظهر اسم المشروب وسعره داخل رسالة واتساب تلقائيًا!\nاسأل: كم ثانية احتاج الزبون الآن ليختار مشروبه المفضل ويرسل طلبه جاهزًا؟\nتحقق: أقل من 5 ثوانٍ!',
        en: 'Demonstrate clicking the filter tabs and the dynamic WhatsApp order link.',
      },
      payload: {
        type: 'demo',
        data: {
          objective: {
            ar: 'تفعيل أزرار تصفية المشروبات وربط كل بطاقة برسالة واتساب مخصصة باسم المشروب',
            en: 'Enable drink category filter buttons and custom WhatsApp order messages per card',
          },
          instructorSteps: [
            {
              ar: 'نضيف شريط أزرار التصفية (الكل، مشروبات ساخنة، مشروبات باردة) فوق شبكة البطاقات.',
              en: 'Add the filter bar (All, Hot Drinks, Cold Drinks) above the card grid.',
            },
            {
              ar: 'نجعل كل بطاقة تفتح رابط واتساب مع نص جاهز يضم اسم المشروب وسعره تلقائيًا.',
              en: 'Make each card open a WhatsApp link pre-filled with the drink name and price.',
            },
            {
              ar: 'نختبر الأزرار على الشاشة ونتأكد من تغير لون الزر النشط وسرعة التصفية.',
              en: 'Test the buttons live and verify the active button highlight and instant filtering.',
            },
          ],
          promptToUse:
            'في قسم قائمة المشروبات، أضف أزرار تصفية تفاعلية (الكل، مشروبات ساخنة، مشروبات باردة) بحيث تعرض البطاقات المطابقة عند الضغط مع تمييز الزر النشط، واجعل زر «اطلب عبر واتساب» في كل بطاقة يفتح محادثة واتساب برسالة جاهزة تحتوي على اسم المشروب وسعره.',
          expectedOutput: {
            ar: 'قائمة تفاعلية سريعة مع طلب واتساب ذكي يحدد اسم الصنف المختار تلقائيًا.',
            en: 'A fast interactive menu with smart WhatsApp ordering pre-filled with the chosen item.',
          },
        },
      },
    },
    {
      id: 's07-slide-08',
      sessionNumber: 7,
      slideNumber: 8,
      totalSlides: 10,
      type: 'challenge',
      visualType: 'js-interaction',
      title: {
        ar: 'نشاطك العملي: أضف أزرار التصفية ورسالة واتساب الذكية لموقعك',
        en: 'Your Activity: Add Filter Buttons & Smart WhatsApp Ordering to Your Site',
      },
      estimatedMinutes: 20,
      teachingGoal: {
        ar: 'تمكين كل متدرب من إضافة التفاعل الحي لمشروعه وتجربته بنفسه.',
        en: 'Enable every trainee to add and test live interactivity in their own project.',
      },
      speakerNotes: {
        ar: 'نفّذ: شغّل المؤقت لمدة 20 دقيقة. تابع مع المتدربين تطبيق أزرار التصفية وتخصيص رسالة واتساب في بطاقاتهم.\nاسأل: من جرّب الضغط على زر واتساب في بطاقته ورأى اسم المنتج يظهر في الرسالة تلقائيًا؟\nتحقق: احتفِ بإنجاز المتدربين؛ هذه لحظة ممتعة جدًا للمبتدئ عندما يرى موقعه يتفاعل فعليًا!',
        en: 'Run the 20-minute timer and celebrate when trainees test their interactive filters and WhatsApp links.',
      },
      payload: {
        type: 'challenge',
        data: {
          mission: {
            ar: 'اجعل قسم البطاقات في موقعك تفاعليًا ومربوطًا برسالة واتساب مخصصة',
            en: 'Make Your Cards Section Interactive with Custom WhatsApp Order Messages',
          },
          durationMinutes: 20,
          objective: {
            ar: 'تطبيق التفاعل الحي في موقعك لتسهيل اختيار الخدمة أو المنتج وطلبها مباشرة.',
            en: 'Apply live interactivity to your site so visitors can filter and order effortlessly.',
          },
          instructions: [
            {
              ar: '1. اختر 3 تصنيفات تناسب منتجات أو خدمات موقعك وأضفها كأزرار تصفية فوق البطاقات.',
              en: '1. Pick 3 categories for your products/services and add them as filter buttons above the cards.',
            },
            {
              ar: '2. اطلب من الذكاء الاصطناعي جعل زر واتساب في كل بطاقة يرسل اسم العنصر المختار داخل الرسالة.',
              en: '2. Ask AI to make the WhatsApp button in each card include the selected item name in the message.',
            },
            {
              ar: '3. جرّب الضغط على الأزرار بنفسك وتأكد أنها تعمل بسلاسة على الكمبيوتر والهاتف.',
              en: '3. Test clicking the buttons yourself on desktop and mobile view.',
            },
          ],
          deliverable: {
            ar: 'شارك تجربة التفاعل في موقعك في شات Zoom أو أرسلها عبر واتساب من صفحة الجلسة.',
            en: 'Share your interactive feature result in Zoom chat or via WhatsApp.',
          },
        },
      },
    },
    {
      id: 's07-slide-09',
      sessionNumber: 7,
      slideNumber: 9,
      totalSlides: 10,
      type: 'project',
      visualType: 'js-interaction',
      title: {
        ar: 'الخطوة السابعة في مشروعك: موقع حي يتفاعل مع الزائر',
        en: 'Step 7 in Your Project: A Living Website That Responds to Visitors',
      },
      estimatedMinutes: 4,
      teachingGoal: {
        ar: 'ربط التفاعل الحي بالخطوة القادمة في الجلسة الثامنة (تنظيم المكونات في React).',
        en: 'Connect today’s live interactivity milestone to Session 08 React components.',
      },
      speakerNotes: {
        ar: 'نفّذ: وضح للمتدربين كيف انتقل مشروعهم من صفحة ثابتة للقراءة فقط إلى تطبيق حي يتفاعل مع الزائر.\nاسأل: في الجلسة القادمة، كيف سننظم هذه البطاقات والأزرار التفاعلية حتى يسهل تكرارها في أي صفحة جديدة؟\nتحقق: سنتعلم تنظيمها في قوالب React نظيفة!',
        en: 'Show how interactivity leads naturally into clean React components in Session 08.',
      },
      payload: {
        type: 'project',
        data: {
          stepNumber: '07',
          phaseName: {
            ar: 'المرحلة الرابعة: إضافة التفاعل الحي (JavaScript)',
            en: 'Phase 4: Adding Live Interactivity (JavaScript)',
          },
          whatWeBuildNow: {
            ar: 'أزرار تصفية الأصناف التفاعلية + رسائل الطلب المخصصة عبر واتساب',
            en: 'Interactive Category Filter Tabs + Custom Item WhatsApp Order Links',
          },
          deliverables: [
            {
              ar: 'شريط أزرار تصفية يعمل فورًا عند الضغط مع تمييز الفئة النشطة',
              en: 'Filter button bar working immediately on click with active state highlight',
            },
            {
              ar: 'قائمة هاتف تفتح وتغلق بسلاسة على الشاشات الصغيرة',
              en: 'Mobile menu opening and closing smoothly on small screens',
            },
            {
              ar: 'أزرار طلب واتساب ذكية ترسل اسم المنتج أو الخدمة المختارة تلقائيًا',
              en: 'Smart WhatsApp buttons automatically sending the chosen product or service name',
            },
          ],
          connectionToFinalProject: {
            ar: 'هذه الميزات التفاعلية تجعل موقعك جاهزًا لاستقبال طلبات حقيقية ومفصلة من العملاء.',
            en: 'These interactive features make your website ready to receive real, detailed customer orders.',
          },
        },
      },
    },
    {
      id: 's07-slide-10',
      sessionNumber: 7,
      slideNumber: 10,
      totalSlides: 10,
      type: 'takeaway',
      title: {
        ar: 'خلاصة الجلسة السابعة في 3 نقاط',
        en: 'Session 07 Summary in 3 Points',
      },
      estimatedMinutes: 3,
      teachingGoal: {
        ar: 'تثبيت مفاهيم التفاعل البسيط والتمهيد للجلسة الثامنة.',
        en: 'Reinforce simple interaction rules and preview Session 08.',
      },
      speakerNotes: {
        ar: 'نفّذ: راجع النقاط الثلاث مع المتدربين.\nاسأل: ما هي معادلة التفاعل الثلاثية التي تعلمناها اليوم؟ (فعل الزائر ← استجابة الصفحة ← نتيجة مريحة).\nتحقق: ذكّرهم بإرسال نشاط الجلسة عبر واتساب.',
        en: 'Review the 3 takeaways and preview Session 08.',
      },
      payload: {
        type: 'takeaway',
        data: {
          takeaways: [
            {
              number: '01',
              title: {
                ar: 'التفاعل هو استجابة فورية لضغطة الزائر',
                en: 'Interactivity Is an Instant Response to a Visitor Click',
              },
              description: {
                ar: 'تسمع الصفحة ضغطة الزائر وتعرض له ما يطلبه فورًا دون إعادة تحميل.',
                en: 'The page listens to the visitor click and updates what is shown immediately.',
              },
            },
            {
              number: '02',
              title: {
                ar: 'اختر التفاعل الذي يسهّل الطلب والوصول للمعلومة',
                en: 'Choose Interactions That Make Ordering Easier',
              },
              description: {
                ar: 'تصفية الأصناف وتجهيز نص رسالة واتساب تلقائيًا يوفران وقت الزبون وصاحب المشروع.',
                en: 'Filtering items and pre-filling WhatsApp messages save time for both customer and owner.',
              },
            },
            {
              number: '03',
              title: {
                ar: 'جرّب كل زر بنفسك بعد بنائه',
                en: 'Test Every Button Yourself After Building It',
              },
              description: {
                ar: 'الضغط الفعلي على الأزرار من الكمبيوتر والهاتف هو أفضل طريقة للتأكد من جودة عملها.',
                en: 'Clicking buttons yourself on desktop and mobile is the best way to verify quality.',
              },
            },
          ],
          coreMotto: {
            ar: 'الخطوة القادمة في الجلسة 08: كيف ننظم بطاقات وأقسام موقعنا في قوالب ذكية قابلة لإعادة الاستخدام (React)؟',
            en: 'Up Next in Session 08: How to organize our cards and sections into smart reusable templates (React).',
          },
        },
      },
    },
  ],
};
